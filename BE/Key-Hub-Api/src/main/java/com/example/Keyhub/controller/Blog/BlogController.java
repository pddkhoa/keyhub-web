package com.example.Keyhub.controller.Blog;

import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.TagDTO;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.Tag;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.ICategoryRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IBLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/v1/list/blog")

public class BlogController {

    @Autowired
    IBLogService ibLogService;
    @Autowired
    ICategoryRepository categoryRepository;
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @GetMapping("/category/{category_id}")
    public ResponseEntity getBlogByCategory(@PathVariable Long category_id) {
        List<BlogDTO> list= ibLogService.getBlogByCategory(category_id);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog by categoies")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by categoies")
                        .build()
                );
    }
    @GetMapping("/tags/{tag_id}")
    public ResponseEntity getBlogByTag(@PathVariable Long tag_id) {
        List<BlogDTO> list= ibLogService.getBlogByTag(tag_id);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog by tags")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by tags")
                        .build()
                );
    }
    @GetMapping("/save")
    public ResponseEntity getBlogByTag() {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getAllBlogBySave(users);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog saved by user")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by tags")
                        .build()
                );
    }
    @GetMapping("/series/{series_id}")
    public ResponseEntity getBlogBySeries(@PathVariable BigInteger series_id) {
        List<BlogDTO> list= ibLogService.getBlogBySeries(series_id);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog by series")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by series")
                        .build()
                );
    }
    @PostMapping("/search/{key}")
    public ResponseEntity getBlogBySearch(@PathVariable String key) {
        if (key.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Please input key")
                            .build()
                    );
        }
        List<BlogDTO> list= ibLogService.getBlogBySearch(key);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog by search")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by tags")
                        .build()
                );
    }
    @GetMapping("/allBlog")
    public ResponseEntity getAllBlog() {

        List<BlogDTO> list= ibLogService.getAllBlog();
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by tags")
                        .build()
                );
    }
    @GetMapping("/{category_id}/tags")
    public ResponseEntity getTagsByBlog(@PathVariable long category_id) {
        Category category= categoryRepository.findById(category_id).orElse(null);
        if (category==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("No found category")
                            .build()
                    );
        }
        Set<Tag> tagSet = category.getTags();
        List<TagDTO> tagDTOList = tagSet.stream()
                .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                .collect(Collectors.toList());

        if (tagDTOList==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(tagDTOList)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found tags by category")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(tagDTOList)
                        .statusCode(HttpStatus.OK.value())
                        .message("Tags by Category")
                        .build()
                );
    }

}
