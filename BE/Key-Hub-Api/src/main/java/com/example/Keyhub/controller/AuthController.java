package com.example.Keyhub.controller;

import com.example.Keyhub.controller.exception.TokenRefreshException;
import com.example.Keyhub.data.dto.request.LoginRequest;
import com.example.Keyhub.data.dto.request.UserDTO;
import com.example.Keyhub.data.dto.response.JwtResponse;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.RefreshToken;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.ResetPassToken;
import com.example.Keyhub.data.entity.VerificationToken;
import com.example.Keyhub.data.exception.CustomExceptionRuntime;
import com.example.Keyhub.data.payload.ChechOtp;
import com.example.Keyhub.data.payload.ResetPass;
import com.example.Keyhub.data.payload.TokenRefreshRequest;
import com.example.Keyhub.data.payload.respone.CustomResponse;
import com.example.Keyhub.data.payload.respone.TokenRefreshResponse;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.data.repository.RefreshTokenRepository;
import com.example.Keyhub.data.repository.ResetPassTokenRepos;
import com.example.Keyhub.event.OnRegistrationCompleteEvent;
import com.example.Keyhub.security.jwt.JwtProvider;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.security.userpincal.UserDetailService;
import com.example.Keyhub.service.IRefreshTokenService;
import com.example.Keyhub.service.impl.UserServiceImpl;
import org.apache.http.HttpResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.Calendar;
import java.util.Objects;

@RequestMapping("/api/auth")
@RestController
public class AuthController {
    private static final int MAX_LOGIN_ATTEMPTS = 5;
    private int loginAttempts = 0;
    final
    UserServiceImpl userService;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    IRefreshTokenService refreshTokenService;
    @Autowired
    RefreshTokenRepository refreshTokenRepository;
    @Autowired
    ResetPassTokenRepos resetPassTokenRepos;
    @Autowired
    private ApplicationEventPublisher applicationEventPublisher;
    @Autowired
    JwtProvider jwtProvider;
    @Autowired
    IUserRepository iUserRepository;

    public AuthController(UserServiceImpl userService) {
        this.userService = userService;
    }
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }

    @PostMapping("/signup")
    public ResponseEntity register(@Valid @RequestBody UserDTO userDTO, BindingResult bindingResult){
        if (bindingResult.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .message("The request has failed to execute. Please check the input data.")
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .build());
        }
        if(userService.existsByUsername(userDTO.getUsername())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("The username is existed")
                            .build()
                    );
        }
        if(userService.existsByEmail(userDTO.getEmail())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("The email is existed")
                            .build()
                    );
        } else {
            Users users = userService.registerNewUserAccount(userDTO);
            applicationEventPublisher.publishEvent(new OnRegistrationCompleteEvent(users));
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(users)
                            .statusCode(HttpStatus.OK.value())
                            .message("Create success!")
                            .build()
                    );
        }
    }
    @PostMapping("/verify-account")
    public ResponseEntity verifyAccount(@RequestParam String token) {
        VerificationToken verificationToken = userService.getVerificationToken(token);
        if (verificationToken==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Token not found")
                            .build()
                    );
        }
        Calendar cal = Calendar.getInstance();
        if (verificationToken == null && verificationToken.isUsed() == true || (verificationToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Token has expiry or not valid")
                            .build()
                    );
        }
        Users user = verificationToken.getUser();
        if (user.getUsername()==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Token has expiry")
                            .build()
                    );
        }
        user.setStatus(1);
        userService.registerAccount(user);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .message("Verify account has success")
                        .result(user.getStatus())
                        .build()
                );
    }
    @PostMapping("/refreshtoken")
    public ResponseEntity<?> refreshtoken(@Valid @RequestBody TokenRefreshRequest request) {
        String requestRefreshToken = request.getRefreshToken();
        return refreshTokenRepository.findByToken(requestRefreshToken)
                .map(refreshTokenService::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    String token = jwtProvider.generateTokenFromUserID(request.getRefreshToken());
                    RefreshToken refreshToken = refreshTokenService.createRefreshToken(user.getId());
                    return ResponseEntity.ok(new TokenRefreshResponse(token, refreshToken.getToken()));
                })
                .orElseThrow(() -> new TokenRefreshException(requestRefreshToken,
                        "Refresh token is not in database!"));
    }
    private void setLoginAttemptsCookie(HttpServletResponse response, int loginAttempts) {
        Cookie cookie = new Cookie("loginAttempts", Integer.toString(loginAttempts));
        cookie.setMaxAge(24 * 60 * 60); // Thời gian tồn tại của cookie (tính theo giây)
        cookie.setPath("/");
        response.addCookie(cookie);
    }
    private int getLoginAttemptsFromCookie(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("loginAttempts")) {
                    return Integer.parseInt(cookie.getValue());
                }
            }
        }
        return 0;
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest ,HttpServletRequest request, HttpServletResponse response) {
        try
        {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String token = jwtProvider.createToken(authentication);
            CustomUserDetails userPrinciple = (CustomUserDetails) authentication.getPrincipal();
            RefreshToken refreshToken = refreshTokenService.createRefreshToken(userPrinciple.getUsers().getId());
            String refresh = refreshToken.getToken();
            loginAttempts = 0;
            setLoginAttemptsCookie(response, loginAttempts);
            if (userPrinciple.getUsers().getStatus()==0)
            {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(GenericResponse.builder()
                                .success(false)
                                .message("Account not verify")
                                .result("Please verify your account")
                                .statusCode(HttpStatus.UNAUTHORIZED.value())
                                .build());
            }
            if (userPrinciple.getUsers().getStatus()==2)
            {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(GenericResponse.builder()
                                .success(false)
                                .message("Please reset your password")
                                .result("Account is block")
                                .statusCode(HttpStatus.UNAUTHORIZED.value())
                                .build());
            }
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .message("Login Success")
                            .result(new JwtResponse(token,userPrinciple, refresh ))
                            .statusCode(HttpStatus.OK.value())
                            .build());
        }
        catch (AuthenticationException e){
            int loginAttempts = getLoginAttemptsFromCookie(request) + 1;
            setLoginAttemptsCookie(response, loginAttempts);
            if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
                Users users = iUserRepository.findByUsername(loginRequest.getUsername()).orElse(null);
              if (users!=null){
                  users.setStatus(2);
                  userService.save(users);
              }
                return ResponseEntity.status(HttpStatus.TEMPORARY_REDIRECT)
                        .body(GenericResponse.builder().success(false)
                                .message("Account not found.Please reset your password")
                                .statusCode(HttpStatus.TEMPORARY_REDIRECT.value()) //307
                                .build());
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(GenericResponse.builder()
                            .success(false)
                            .message("Account not found.Please check username or password!")
                            .statusCode(HttpStatus.UNAUTHORIZED.value())
                            .build());
        }


    }
    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestParam("refreshToken") String refreshToken) {
        RefreshToken delete = refreshTokenRepository.findByToken(refreshToken).get();
        if (delete!=null) {
            return refreshTokenService.logout(refreshToken);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(GenericResponse.builder()
                        .success(false)
                        .message("Logout failed!")
                        .result("Please login before logout!")
                        .statusCode(HttpStatus.UNAUTHORIZED.value())
                        .build());
    }
    @RequestMapping(value = "/forgot-password", method = RequestMethod.POST)
    public ResponseEntity forgotPassword(@RequestParam  String email) {
        Users us = userService.findByEmail(email);
        if (us != null) {
            userService.createResetToken(email);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .message("Create reset pass token success, check email")
                            .result("Token in your email")
                            .statusCode(HttpStatus.OK.value())
                            .build());
        } else
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .message("Create reset pass token fail check email or try again")
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
    }
    @PostMapping("/veriry-otp")
    public ResponseEntity chechOtpResetPass(@RequestBody @Valid ChechOtp resetPass,
                                        BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(GenericResponse.builder()
                            .success(false)
                            .message("The request has failed to execute. Please check the input data.")
                            .statusCode(400)
                            .build());
        }
        Users user = userService.findByEmail(resetPass.getEmail());
        ResetPassToken token = resetPassTokenRepos.findResetPassTokenReposByToken(resetPass.getToken());
        if (token !=null && Objects.equals(token.getUser().getId(), user.getId()))
        {
            user.setStatus(1);
            userService.save(user);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .message("Validate OTP success")
                            .result("Please enter new password")
                            .statusCode(200)
                            .build());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .message("OTP does not match")
                        .result("Please try again")
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .build());
    }

    @RequestMapping(value = "/reset-password", method = RequestMethod.PATCH)
    public ResponseEntity resetPassword(@RequestBody @Valid ResetPass resetPass,
                                        BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .message("The request has failed to execute. Please check the input data.")
                            .statusCode(400)
                            .build());
        }
        Users user = userService.findByEmail(resetPass.getEmail());
        if (!resetPass.getNew_pass().equals(resetPass.getOld_pass()))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .message("The old password does not match the new password. Please re-enter.")
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .build());
        }
        if (user != null) {
            user.setPassword(resetPass.getNew_pass());
            userService.resetPassword(user);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .message("Reset password for user has success")
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }
}