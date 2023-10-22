package com.example.Keyhub.controller.User;

import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/network")
public class NetworkController {
    @Autowired
    IUserService userService;
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @GetMapping("/follow")
    public ResponseEntity getListUserHaveMostFollow() {
        Users users = getUserFromAuthentication();
        List<UserResponseDTO> list = userService.getAllUserHaveMostFollow(users);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found User")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("User have moost Follower")
                        .build()
                );
    }
    @GetMapping("/{index}/all/follow")
    public ResponseEntity getAllUser( @PathVariable int index) {
        Users users = getUserFromAuthentication();
        List<UserResponseDTO> list = userService.getAllUsers( index,users);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("That all User")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("All user")
                        .build()
                );
    }
    @PostMapping("/search")
    public ResponseEntity getAllUser(   @RequestParam(value = "index", required = false) Integer index,   @RequestParam(value = "text") String text) {
        Users users = getUserFromAuthentication();
        if (index == null || index <= 0) {
            index = 1;
        }
        List<UserResponseDTO> list = userService.searchUser(index,text,users);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("That all User")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("All user")
                        .build()
                );
    }
}
