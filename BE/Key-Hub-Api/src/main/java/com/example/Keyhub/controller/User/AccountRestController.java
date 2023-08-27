package com.example.Keyhub.controller.User;

import com.example.Keyhub.config.ValidatorUtils;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.exception.CustomExceptionRuntime;
import com.example.Keyhub.data.payload.ProfileInfor;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IAvatarService;
import com.example.Keyhub.service.IUserService;
import com.example.Keyhub.service.UploadImageService;
import org.springframework.beans.factory.annotation.Autowired;
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
    IAvatarService iAvatarService;

    @Autowired
    IUserRepository userRepositoryl;
    @Autowired
    UploadImageService uploadImageService;
        private Users getUserFromAuthentication() {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            System.out.println(auth.getPrincipal().getClass());
            return ((CustomUserDetails) auth.getPrincipal()).getUsers();
        }
    @RequestMapping(value = "/change-info", method = RequestMethod.PATCH)
    public ResponseEntity changeProfileInfo(@Valid @RequestBody ProfileInfor body,
                                            BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            throw new CustomExceptionRuntime(400, "Request was failed. Validate data again");
        Users users = getUserFromAuthentication();
        userService.changeInfo(users.getId(), body);
        return ResponseEntity.ok("Change info was successful");
    }
    @RequestMapping(value = "/change-avatar", method = RequestMethod.PATCH)
    public ResponseEntity changeAvatarUser(@RequestParam MultipartFile image_file) {
        if (!ValidatorUtils.validateMineFile(image_file))
            throw new CustomExceptionRuntime(400, "Request failed. This file must be png, jpg, jpeg,bmp,gif,bmp,tiff,webp,svg+xml ." +
                    " Please validate file again");
        Users users = getUserFromAuthentication();
        userService.changeAvatar(users.getId(),image_file);
        userService.saveAvatarToStorage(users.getId());
        return ResponseEntity.ok("Change avatar was successful");
    }
    @RequestMapping(value = "/remove-avatar", method = RequestMethod.PATCH)
    public ResponseEntity removeAvatarUser() {
        Users users = getUserFromAuthentication();
        userService.removeAvatar(users.getId());
        userService.removeAvatarToStorage(users.getId());
        return ResponseEntity.ok("Change avatar was successful");
    }

//    @RequestMapping(value = "/upload-video", method = RequestMethod.PATCH)
//    public ResponseEntity uploadVideo(@RequestParam MultipartFile image_file) {
//        if (!ValidatorUtils.validateMineFile(image_file))
//            throw new CustomExceptionRuntime(400, "Request failed. This file must be png, jpg, jpeg,bmp,gif,bmp,tiff,webp,svg+xml ." +
//                    " Please validate file again");
//        BigInteger id = BigInteger.valueOf(7);
//        Users us = userRepositoryl.findById(id).orElseThrow(null);
//        return ResponseEntity.ok("Change avatar was successful");
//    }
//    @RequestMapping(value = "/upload-image", method = RequestMethod.PATCH)
//    public ResponseEntity uploadImage(@RequestParam MultipartFile image_file) {
//        if (!ValidatorUtils.validateMineFile(image_file))
//            throw new CustomExceptionRuntime(400, "Request failed. This file must be png, jpg, jpeg,bmp,gif,bmp,tiff,webp,svg+xml ." +
//                    " Please validate file again");
//        BigInteger id = BigInteger.valueOf(7);
//        Users us = userRepositoryl.findById(id).orElseThrow(null);
//        return ResponseEntity.ok("Change avatar was successful");
//    }
//    @RequestMapping(value = "/upload-file", method = RequestMethod.PATCH)
//    public ResponseEntity uploadFile(@RequestParam MultipartFile image_file) {
//        if (!ValidatorUtils.validateMineFile(image_file))
//            throw new CustomExceptionRuntime(400, "Request failed. This file must be png, jpg, jpeg,bmp,gif,bmp,tiff,webp,svg+xml ." +
//                    " Please validate file again");
//        BigInteger id = BigInteger.valueOf(7);
//        Users us = userRepositoryl.findById(id).orElseThrow(null);
//        return ResponseEntity.ok("Change avatar was successful");
//    }
}