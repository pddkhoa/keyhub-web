package com.example.Keyhub.controller.User;

import com.example.Keyhub.data.dto.request.SeriesDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.math.BigInteger;

@RestController
@RequestMapping(value = "/api/v1/user-interactions")
public class InteractWithUserController {
    @Autowired
    private IUserService userService;
    @Autowired
    private ModelMapper mapper;
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @RequestMapping(value = "/{user_id}/follow", method = RequestMethod.POST)
    public ResponseEntity followUser(@PathVariable BigInteger user_id) {
        Users users = userService.followUser(getUserFromAuthentication().getId(),user_id);
        if (users==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("User has been followed")
                            .build()
                    );
        }
        UserResponseDTO response = mapper.map(users, UserResponseDTO.class);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(response)
                        .statusCode(HttpStatus.OK.value())
                        .message("Follow user success")
                        .build()
                );
    }
    @PostMapping("/{user_id}/unfollow")
    public ResponseEntity unfollowUser(@PathVariable BigInteger user_id) {
        Users users = userService.unfollowUser(getUserFromAuthentication().getId(),user_id);
        if (users==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("User not found")
                            .build()
                    );
        }
        UserResponseDTO response = mapper.map(users, UserResponseDTO.class);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(response)
                        .statusCode(HttpStatus.OK.value())
                        .message("UnFollow user success")
                        .build()
                );
    }
    }
