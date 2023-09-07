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
import com.example.Keyhub.data.payload.ResetPass;
import com.example.Keyhub.data.payload.TokenRefreshRequest;
import com.example.Keyhub.data.payload.respone.CustomResponse;
import com.example.Keyhub.data.payload.respone.TokenRefreshResponse;
import com.example.Keyhub.data.repository.RefreshTokenRepository;
import com.example.Keyhub.data.repository.ResetPassTokenRepos;
import com.example.Keyhub.event.OnRegistrationCompleteEvent;

import com.example.Keyhub.security.jwt.JwtProvider;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IRefreshTokenService;
import com.example.Keyhub.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Calendar;
import java.util.Objects;

@RequestMapping("/api/auth")
@RestController
public class AuthController {
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

    public AuthController(UserServiceImpl userService) {
        this.userService = userService;
    }
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }

    @PostMapping("/signup")
    public CustomResponse register(@Valid @RequestBody UserDTO userDTO){
        if(userService.existsByUsername(userDTO.getUsername())){
            return new CustomResponse(400, "The username is existed", System.currentTimeMillis());
        }
        if(userService.existsByEmail(userDTO.getEmail())){
            return new CustomResponse(400, "The email is existed", System.currentTimeMillis());
        } else {
            Users users = userService.registerNewUserAccount(userDTO);
            applicationEventPublisher.publishEvent(new OnRegistrationCompleteEvent(users));
            return new CustomResponse(200, "Create success!", System.currentTimeMillis());
        }
    }
    @PostMapping("/verify-account")
    public CustomResponse verifyAccount(@RequestParam String token) {
        VerificationToken verificationToken = userService.getVerificationToken(token);
        Calendar cal = Calendar.getInstance();
        if (verificationToken == null && verificationToken.isUsed() == true || (verificationToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0) {
            return new CustomResponse(200, "Token not has expiry or not valid", System.currentTimeMillis());
        }
        Users user = verificationToken.getUser();
        user.setStatus(true);
        userService.registerAccount(user);
        return new CustomResponse(200, "Verify account has success", System.currentTimeMillis());
    }
    @PostMapping("/refreshtoken")
    public ResponseEntity<?> refreshtoken(@Valid @RequestBody TokenRefreshRequest request) {
        String requestRefreshToken = request.getRefreshToken();
        return refreshTokenRepository.findByToken(requestRefreshToken)
                .map(refreshTokenService::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    String token = jwtProvider.generateTokenFromUsername(user.getUsername());
                    return ResponseEntity.ok(new TokenRefreshResponse(token, requestRefreshToken));
                })
                .orElseThrow(() -> new TokenRefreshException(requestRefreshToken,
                        "Refresh token is not in database!"));
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest){
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.createToken(authentication);
        CustomUserDetails userPrinciple = (CustomUserDetails) authentication.getPrincipal();
        RefreshToken refreshToken = refreshTokenService.createRefreshToken(userPrinciple.getUsers().getId());
        String refresh = refreshToken.getToken();
        return ResponseEntity.ok(new JwtResponse(token,userPrinciple, refresh ));

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
    public CustomResponse forgotPassword(@RequestParam String email) {
        Users us = userService.findByEmail(email);
        CustomResponse response;
        if (us != null) {
            userService.createResetToken(email);
            response = new CustomResponse(200, "Create reset pass token succes, check email",
                    System.currentTimeMillis());
        } else throw new CustomExceptionRuntime(400, "Create reset pass token fail check email or try again");
        return response;
    }

    @RequestMapping(value = "/reset-password", method = RequestMethod.PATCH)
    public CustomResponse resetPassword(@RequestBody @Valid ResetPass resetPass,
                                        BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            throw new CustomExceptionRuntime(400, "The request has failed to execute. Please check the input data.");
        Users user = userService.findByEmail(resetPass.getEmail());
        ResetPassToken token = resetPassTokenRepos.findResetPassTokenReposByToken(resetPass.getToken());
        if (!resetPass.getNew_pass().equals(resetPass.getOld_pass()))
        {
            throw new CustomExceptionRuntime(400, "The old password does not match the new password. Please re-enter.");
        }
        if (user != null && token != null
                && Objects.equals(token.getUser().getId(), user.getId())) {

            user.setPassword(resetPass.getNew_pass());
            userService.resetPassword(user);
            return new CustomResponse(200, "Reset password for user has success", System.currentTimeMillis());
        }
        return new CustomResponse(400, "Token has not valid", System.currentTimeMillis());
    }
}
