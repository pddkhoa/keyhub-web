package com.example.Keyhub.controller.Admin;

import com.example.Keyhub.data.dto.response.LikeReponse;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IBLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping(value = "/api/v1/admin")
public class AdminController {
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @Autowired
    IBLogService ibLogService;
    @Autowired
    IBlogRepository blogRepository;
    @PostMapping("/{blogId}/like")
    public ResponseEntity<?> likeBlog(@PathVariable BigInteger blogId) {
        Users user = getUserFromAuthentication();
        Blog blog = blogRepository.findById(blogId).orElse(null);
        if (blog==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found Blog")
                            .build()
                    );
        }
        LikeReponse likeReponse = ibLogService.likeBlog(blog,user);
        if (likeReponse.getStatus()==false)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(likeReponse)
                            .statusCode(HttpStatus.OK.value())
                            .message("Dislike blog success")
                            .build()
                    );
        }
        else {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(likeReponse)
                            .statusCode(HttpStatus.OK.value())
                            .message("Like blog success")
                            .build()
                    );
        }}
}
