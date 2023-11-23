package com.example.Keyhub.controller.User;

import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/network")
public class NetworkController {
    final
    IUserService userService;

    public NetworkController(IUserService userService) {
        this.userService = userService;
    }

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @GetMapping("/follow")
    public ResponseEntity<GenericResponse> getListUserHaveMostFollow() {
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
    public ResponseEntity<GenericResponse> getAllUser( @PathVariable int index) {
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
    public ResponseEntity<GenericResponse> getAllUser( @RequestParam(value = "text") String text) {
        Users users = getUserFromAuthentication();
        List<UserResponseDTO> list = userService.searchUser(text,users);
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
