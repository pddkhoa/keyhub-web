package com.example.Keyhub.controller.User;

import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.CategoryResponseCardDTO;
import com.example.Keyhub.data.dto.response.SeriesResponse;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IBLogService;
import com.example.Keyhub.service.ICategoryService;
import com.example.Keyhub.service.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/wall")
public class WallUserController {
    final
    IBLogService ibLogService;
    final
    IUserService userService;
    final
    ICategoryService categoryService;

    public WallUserController(IBLogService ibLogService, IUserService userService, ICategoryService categoryService) {
        this.ibLogService = ibLogService;
        this.userService = userService;
        this.categoryService = categoryService;
    }

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @GetMapping("/{user_id}/blog")
    public ResponseEntity<GenericResponse> getAllBlogByUser(@PathVariable BigInteger user_id) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list = ibLogService.getAllByBlogInWallUser(users, user_id);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found Blog by user")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by User")
                        .build()
                );
    }
    @GetMapping("/{user_id}/series")
    public ResponseEntity<GenericResponse> getAllSeriesByUserWall(@PathVariable BigInteger user_id) {
        Users users = getUserFromAuthentication();
        List<SeriesResponse> list = userService.getAllSerieByUserWall(users, user_id);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found series by user")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Series by User")
                        .build()
                );
    }
    @GetMapping("/{user_id}/user/categories")
    public ResponseEntity<GenericResponse> getAllUserFollowCategory(@PathVariable BigInteger user_id) {
        List<CategoryResponseCardDTO> cardDTO = categoryService.getAllCategoryFollowByUser(getUserFromAuthentication(),user_id);
        if (cardDTO.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("User doesn't followed category")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(cardDTO)
                        .statusCode(HttpStatus.OK.value())
                        .message("List category user follow ")
                        .build()
                );
    }
}
