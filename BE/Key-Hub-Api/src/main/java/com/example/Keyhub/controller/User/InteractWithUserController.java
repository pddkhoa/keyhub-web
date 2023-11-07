package com.example.Keyhub.controller.User;

import com.example.Keyhub.data.dto.request.ReportUserDTO;
import com.example.Keyhub.data.dto.response.ReportUserResponseDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Follow;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportUser;
import com.example.Keyhub.data.repository.IFollowRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/user-interactions")
public class InteractWithUserController {
    private final IUserService userService;
    private final ModelMapper mapper;

    public InteractWithUserController(IUserService userService, ModelMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }

    @RequestMapping(value = "/{user_id}/follow", method = RequestMethod.POST)
    public ResponseEntity followUser(@PathVariable BigInteger user_id) {
        if (!userService.exitUser(user_id)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Unfollow User Success!!")
                            .build()
                    );
        }
        if (userService.isExistUserFollow(getUserFromAuthentication(), user_id)) {
            UserResponseDTO users = userService.unfollowUser(getUserFromAuthentication().getId(), user_id);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(users)
                            .statusCode(HttpStatus.OK.value())
                            .message("Unfollow User Success!!")
                            .build()
                    );
        }
        UserResponseDTO users = userService.followUser(getUserFromAuthentication().getId(), user_id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(users)
                        .statusCode(HttpStatus.OK.value())
                        .message("Follow user success")
                        .build()
                );
    }

    @GetMapping("/{user_id}")
    public ResponseEntity getUserById(@PathVariable BigInteger user_id) {
        UserResponseDTO users = userService.getWallUserByID(getUserFromAuthentication(), user_id);
        if (users == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("User not found")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(users)
                        .statusCode(HttpStatus.OK.value())
                        .message("Wall user")
                        .build()
                );
    }

    @GetMapping("/{user_id}/follower")
    public ResponseEntity getListUserFollowerByUser(@PathVariable BigInteger user_id) {
        List<UserResponseDTO> users = userService.getAllUserFollower(getUserFromAuthentication(), user_id);
        if (users == null) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("User hasn't follower")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(users)
                        .statusCode(HttpStatus.OK.value())
                        .message("Follow user")
                        .build()
                );
    }

    @GetMapping("/{user_id}/following")
    public ResponseEntity<GenericResponse> getListUserFollowing(@PathVariable BigInteger user_id) {
        List<UserResponseDTO> users = userService.getAllUserFollowing(getUserFromAuthentication(), user_id);
        if (users == null) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("User hasn't following another user")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(users)
                        .statusCode(HttpStatus.OK.value())
                        .message("Following user")
                        .build()
                );
    }

    @PostMapping("/report")
    public ResponseEntity reportUser(@RequestBody ReportUserDTO reportUserDTO) {
        ReportUserResponseDTO reportUserResponseDTOS = userService.reportUser(getUserFromAuthentication(), reportUserDTO);
        if (reportUserResponseDTOS == null) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("No found user")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(reportUserResponseDTOS)
                        .statusCode(HttpStatus.OK.value())
                        .message("Following user")
                        .build()
                );
    }

    @PostMapping("/{user_id}/block")
    public ResponseEntity<GenericResponse> blockUser(@PathVariable BigInteger user_id) {
            if (userService.blockUser(user_id, getUserFromAuthentication())) {
                return ResponseEntity.status(HttpStatus.OK)
                        .body(GenericResponse.builder()
                                .success(true)
                                .result(true)
                                .statusCode(HttpStatus.OK.value())
                                .message("Block user success")
                                .build()
                        );
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("No found user")
                            .build()
                    );
        }
    }


