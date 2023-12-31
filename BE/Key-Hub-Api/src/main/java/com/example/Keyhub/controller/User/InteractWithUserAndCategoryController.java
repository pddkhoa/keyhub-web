package com.example.Keyhub.controller.User;

import com.example.Keyhub.data.dto.request.CategoryDTO;
import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.CategoryResponseCardDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.ICategoryService;
import com.example.Keyhub.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
public class InteractWithUserAndCategoryController {
    final
    ICategoryService categoryService;
    final
    IUserService userService;

    public InteractWithUserAndCategoryController(ICategoryService categoryService, IUserService userService) {
        this.categoryService = categoryService;
        this.userService = userService;
    }

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @GetMapping("/categories")
    public ResponseEntity<GenericResponse> getAllCategory() {
        List<CategoryResponseCardDTO> cardDTO = categoryService.getAllCategoryCard(getUserFromAuthentication());
        if (cardDTO == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Category not found")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(cardDTO)
                        .statusCode(HttpStatus.OK.value())
                        .message("All category")
                        .build()
                );
    }
    @RequestMapping(value = "/categories/{category_id}/follow", method = RequestMethod.POST)
    public ResponseEntity<GenericResponse> followCategory(@PathVariable Long category_id) {
        if (!categoryService.isPresentCategory(category_id))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found category")
                            .build()
                    );
        }
        if (categoryService.isPresentCategoryAndUser(category_id,getUserFromAuthentication()))
        {
            UserResponseDTO userResponseDTO= userService.unFollowCategory(getUserFromAuthentication(),category_id);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(userResponseDTO)
                            .statusCode(HttpStatus.OK.value())
                            .message("Unfollow category success!!")
                            .build()
                    );
        }
        UserResponseDTO userResponseDTO= userService.followCategory(getUserFromAuthentication(),category_id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(userResponseDTO)
                        .statusCode(HttpStatus.OK.value())
                        .message("Follow category success")
                        .build()
                );
    }
    @RequestMapping(value = "/categories/{category_id}/unfollow", method = RequestMethod.POST)
    public ResponseEntity<GenericResponse> unFollowCategory(@PathVariable Long category_id) {
        if (!categoryService.isPresentCategory(category_id))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found category")
                            .build()
                    );
        }
        UserResponseDTO userResponseDTO= userService.unFollowCategory(getUserFromAuthentication(),category_id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(userResponseDTO)
                        .statusCode(HttpStatus.OK.value())
                        .message("Follow user success")
                        .build()
                );
    }
    @GetMapping("/{category_id}/user/categories")
    public ResponseEntity<GenericResponse> getAllUserFollowCategory(@PathVariable Long category_id) {
        if (!categoryService.isPresentCategory(category_id))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found category")
                            .build()
                    );
        }
        List<UserResponseDTO> cardDTO = categoryService.getAllUserFollowCategory(category_id,getUserFromAuthentication());
        if (cardDTO == null) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found user follow this category")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(cardDTO)
                        .statusCode(HttpStatus.OK.value())
                        .message("List user follow category")
                        .build()
                );
    }
    @PostMapping("/categories/search")
    public ResponseEntity<GenericResponse> getAllUserFollowCategory(@RequestBody CategoryDTO categoryDTO) {
        List<BlogDTO> list = categoryService.searchByCategory(getUserFromAuthentication(),categoryDTO);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("List blog by search in category")
                        .build()
                );
    }
    }
