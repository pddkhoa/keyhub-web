package com.example.Keyhub.controller.User;

import com.example.Keyhub.config.ValidatorUtils;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.exception.CustomExceptionRuntime;
import com.example.Keyhub.data.payload.ProfileInfor;
import com.example.Keyhub.data.payload.respone.CustomResponse;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IAvatarService;
import com.example.Keyhub.service.IStoryService;
import com.example.Keyhub.service.IUserService;
import com.example.Keyhub.service.UploadImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.math.BigInteger;

@RestController

@RequestMapping(value = "/api/v1/users")
public class AccountRestController {
    @Autowired
    private IUserService userService;
    @Autowired
    IStoryService storyService;
    @Autowired
    IAvatarService iAvatarService;

    @Autowired
    IUserRepository userRepositoryl;
    @Autowired
    UploadImageService uploadImageService;
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @RequestMapping(value = "/change-info", method = RequestMethod.PATCH)
    public ResponseEntity changeProfileInfo(@Valid @RequestBody ProfileInfor body,
                                            BindingResult bindingResult) {
        if (bindingResult.hasErrors())
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Change information fail. Please chcck input data")
                            .build()
                    );
        }
        Users users = getUserFromAuthentication();
        users = userService.changeInfo(users.getId(), body);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(200)
                        .result(users)
                        .message("Change information user success!")
                        .build()
                );
    }
    @RequestMapping(value = "/change-avatar", method = RequestMethod.PATCH)
    public ResponseEntity changeAvatarUser (@RequestParam MultipartFile image_file) {
        if (!ValidatorUtils.validateMineFile(image_file))
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .message("Request failed. This file must be png, jpg, jpeg,bmp,gif,bmp,tiff,webp,svg+xml. Please validate file again")
                        .build()
                );
        Users users = getUserFromAuthentication();
        userService.changeAvatar(users.getId(),image_file);
        userService.saveAvatarToStorage(users.getId());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .message("Change avatar was successful")
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }
    @RequestMapping(value = "/change-banner", method = RequestMethod.PATCH)
    public ResponseEntity changeBanner(@RequestParam MultipartFile image_file) {
        if (!ValidatorUtils.validateMineFile(image_file))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Request failed. This file must be png, jpg, jpeg,bmp,gif,bmp,tiff,webp,svg+xml. Please validate file again")
                            .build()
                    );
        Users users = getUserFromAuthentication();
        userService.changeBanner(users.getId(),image_file);
        userService.saveBannerToStorage(users.getId());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .message("Change avatar was successful")
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }
    @RequestMapping(value = "/remove-banner", method = RequestMethod.PATCH)
    public ResponseEntity removeBannerUser() {
        Users users = getUserFromAuthentication();
        userService.removeBanner(users.getId());
        userService.removeBannerToStorage(users.getId());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .message("Delete avatar was successful")
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }
    @RequestMapping(value = "/remove-avatar", method = RequestMethod.PATCH)
    public ResponseEntity removeAvatarUser() {
        Users users = getUserFromAuthentication();
        userService.removeAvatar(users.getId());
        userService.removeAvatarToStorage(users.getId());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .message("Delete avatar was successful")
                        .statusCode(HttpStatus.OK.value())
                        .build());
    }
}
