package com.example.Keyhub.controller.Admin;

import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.ReportResponseDTO;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IAdminBlogService;
import com.example.Keyhub.service.IAdminUserService;
import com.example.Keyhub.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping(value = "/api/v1/admin/blog")
public class AdmidBlogController {
    @Autowired
    IAdminUserService adminUserService;
    @Autowired
    IUserService userService;
    @Autowired
    ApplicationEventPublisher applicationPushBuilder;
    @Autowired
    IAdminBlogService adminBlogService;
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @GetMapping("/{index}/blog-violating")
    public ResponseEntity<GenericResponse> listBlogViolating(@PathVariable int index) {
        List<ReportResponseDTO> listBlogRepo = adminBlogService.listBlogViolating(getUserFromAuthentication(), index);
        if (listBlogRepo==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Don't have blog violating")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(listBlogRepo)
                        .statusCode(HttpStatus.OK.value())
                        .message("That' all list user violating")
                        .build()
                );
    }
    @GetMapping("/size/blog-violating")
    public ResponseEntity<GenericResponse> sizeBlogViolating() {
        Long sizeUserViolating = adminBlogService.getSizeBlogViolating();
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(sizeUserViolating)
                        .statusCode(HttpStatus.OK.value())
                        .message("That is a size user violating")
                        .build()
                );
    }
    @GetMapping("/{index}/all")
    public ResponseEntity<GenericResponse> listAllBlog(@PathVariable int index) {
        List<BlogDTO> listBlogRepo = adminBlogService.listAllBlog(index, getUserFromAuthentication());
        if (listBlogRepo == null) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Don't have blog in system")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(listBlogRepo)
                        .statusCode(HttpStatus.OK.value())
                        .message("That is list blog")
                        .build()
                );
    }
    @GetMapping("/size/all")
    public ResponseEntity<GenericResponse> sizeAllBlog() {
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(adminBlogService.sizeAllBlog())
                        .statusCode(HttpStatus.OK.value())
                        .message("That is a size blog")
                        .build()
                    );
        }
}
