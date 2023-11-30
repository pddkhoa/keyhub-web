package com.example.Keyhub.controller.Admin;

import com.example.Keyhub.data.dto.request.AdminDTO;
import com.example.Keyhub.data.dto.request.DeleteUserRequestDTO;
import com.example.Keyhub.data.dto.request.EvaluteRequestDTO;
import com.example.Keyhub.data.dto.response.ReportUserResponseDTO;
import com.example.Keyhub.data.dto.response.StatusResopnes;
import com.example.Keyhub.data.dto.response.UserRequestAdminDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.event.OnRegistrationAdminCompleteEvent;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IAdminUserService;
import com.example.Keyhub.service.IUserService;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping(value = "/api/v1/admin/user")
public class AdminUserController {
    final
    IAdminUserService adminUserService;
    final
    IUserService userService;
    final
    ApplicationEventPublisher applicationPushBuilder;

    public AdminUserController(IAdminUserService adminUserService, IUserService userService, ApplicationEventPublisher applicationPushBuilder) {
        this.adminUserService = adminUserService;
        this.userService = userService;
        this.applicationPushBuilder = applicationPushBuilder;
    }

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @PostMapping("/sign-up")
    public ResponseEntity<GenericResponse> signUpWithRoleAdmin(@RequestBody AdminDTO adminDTO, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .message("The request has failed to execute. Please check the input data.")
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .build());
        }
        if(userService.existsByUsername(adminDTO.getUsername())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("The username is existed")
                            .build()
                    );
        }
        if(userService.existsByEmail(adminDTO.getEmail())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("The email is existed")
                            .build()
                    );
        } else {
            Users users = adminUserService.createAccountAdmin(adminDTO);
            applicationPushBuilder.publishEvent(new OnRegistrationAdminCompleteEvent(users));
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
    @GetMapping("/user-violating")
    public ResponseEntity<GenericResponse> listUserViolating() {
        List<ReportUserResponseDTO> listUserViolating = adminUserService.listUserViolating(getUserFromAuthentication());
        if (listUserViolating==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("That's all")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(listUserViolating)
                        .statusCode(HttpStatus.OK.value())
                        .message("List user violating")
                        .build()
                );
    }
    @GetMapping("/size/user-violating")
    public ResponseEntity<GenericResponse> sizeUserViolating() {
        Long sizeUserViolating = adminUserService.getSizeUserViolating();
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(sizeUserViolating)
                        .statusCode(HttpStatus.OK.value())
                        .message("That is a size user violating")
                        .build()
                );
    }
    @PostMapping("/evalute")
    public ResponseEntity<GenericResponse> evaluteUser(@RequestBody EvaluteRequestDTO req)
    {
        StatusResopnes statusResopnes = adminUserService.evaluteUser(getUserFromAuthentication(),req);
        if (statusResopnes.getStatusCode()==3)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found report")
                            .build()
                    );
        }
        if (statusResopnes.getStatusCode()==1)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(statusResopnes)
                            .statusCode(HttpStatus.OK.value())
                            .message("Block user success")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(statusResopnes)
                        .statusCode(HttpStatus.OK.value())
                        .message("Evalute success")
                        .build()
                );
    }
    @DeleteMapping("/delete")
    public ResponseEntity<GenericResponse> deleteUser(@RequestBody DeleteUserRequestDTO deleteUserRequestDTO)
    {
        if(!userService.exitUser(deleteUserRequestDTO.getUser_id()))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found user")
                            .build()
                    );
        }
        if (deleteUserRequestDTO.getValue()==1) {
            adminUserService.deleteUser(deleteUserRequestDTO.getUser_id(), getUserFromAuthentication());
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Delete user success")
                            .build()
                    );
        }
        adminUserService.disableAccount(deleteUserRequestDTO.getUser_id());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(null)
                        .statusCode(HttpStatus.OK.value())
                        .message("Disable user success")
                        .build()
                );
    }
    @PatchMapping("/edit")
    public ResponseEntity<GenericResponse> deleteUser(@RequestBody UserRequestAdminDTO deleteUserRequestDTO)
    {
        if (!userService.exitUser(deleteUserRequestDTO.getId()))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found User")
                            .build()
                    );
        }
        adminUserService.editUser(deleteUserRequestDTO,getUserFromAuthentication());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(null)
                        .statusCode(HttpStatus.OK.value())
                        .message("Edit user success")
                        .build()
                );
    }
    @GetMapping("/all")
    public ResponseEntity<GenericResponse> getAllUserExits()
    {
        List<UserResponseDTO> list = adminUserService.listAllUser();
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("All user")
                        .build()
                );
    }
    @GetMapping("/size")
    public ResponseEntity<GenericResponse> getSizeAllUserExits()
    {
        int size = adminUserService.sizeAllUser();
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(size)
                        .statusCode(HttpStatus.OK.value())
                        .message("All user")
                        .build()
                );
    }
    @PostMapping("{user_id}/unblock")
    public ResponseEntity<GenericResponse> unblockUser(@PathVariable BigInteger user_id)
    {
        if (!userService.exitUser(user_id))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found User")
                            .build()
                    );
        }
        adminUserService.unblockUser(user_id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(null)
                        .statusCode(HttpStatus.OK.value())
                        .message("Unblock user success")
                        .build()
                );
    }
    @GetMapping("/block")
    public ResponseEntity<GenericResponse> getAllUserBlock()
    {
        List<UserResponseDTO> list = adminUserService.listAllUserIsBlock();
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("All user")
                        .build()
                );
    }
    @GetMapping("/sizeBlock")
    public ResponseEntity<GenericResponse> getSizeAllUserBlock()
    {
        int size = adminUserService.sizeAllUserBlock();
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(size)
                        .statusCode(HttpStatus.OK.value())
                        .message("All user")
                        .build()
                );
    }
}
