package com.example.Keyhub.controller.User;

import com.example.Keyhub.data.dto.request.ReportDTO;
import com.example.Keyhub.data.dto.request.SeriesDTO;
import com.example.Keyhub.data.dto.response.CheckFollowCategory;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.Blog.FollowCategory;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportBlog;
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
import java.util.List;

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
        if (!userService.exitUser(user_id))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Unfollow User Success!!")
                            .build()
                    );
        }
        if (userService.isExistUserFollow(getUserFromAuthentication(),user_id))
        {
            UserResponseDTO users = userService.unfollowUser(getUserFromAuthentication().getId(),user_id);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(users)
                            .statusCode(HttpStatus.OK.value())
                            .message("Unfollow User Success!!")
                            .build()
                    );
        }
        UserResponseDTO users = userService.followUser(getUserFromAuthentication().getId(),user_id);
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
        UserResponseDTO users = userService.getWallUserByID(getUserFromAuthentication(),user_id);
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
        List<UserResponseDTO> users = userService.getAllUserFollower(getUserFromAuthentication(),user_id);
        if (users==null)
        {
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
    public ResponseEntity getListUserFollowing(@PathVariable BigInteger user_id) {
        List<UserResponseDTO> users = userService.getAllUserFollowing(getUserFromAuthentication(),user_id);
        if (users==null)
        {
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
}
