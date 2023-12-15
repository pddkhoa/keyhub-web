package com.example.Keyhub.controller.Admin;

import com.example.Keyhub.data.dto.request.EvaluteRequestDTO;
import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.ReportCommentResponseDTO;
import com.example.Keyhub.data.dto.response.ReportResponseDTO;
import com.example.Keyhub.data.dto.response.StatusResopnes;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IAdminBlogService;
import com.example.Keyhub.service.IAdminUserService;
import com.example.Keyhub.service.IUserService;
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
    final
    IAdminUserService adminUserService;
    final
    IUserService userService;
    final
    ApplicationEventPublisher applicationPushBuilder;
    final
    IAdminBlogService adminBlogService;

    public AdmidBlogController(IAdminUserService adminUserService, IUserService userService, ApplicationEventPublisher applicationPushBuilder, IAdminBlogService adminBlogService) {
        this.adminUserService = adminUserService;
        this.userService = userService;
        this.applicationPushBuilder = applicationPushBuilder;
        this.adminBlogService = adminBlogService;
    }
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @GetMapping("/blog-violating")
    public ResponseEntity<GenericResponse> listBlogViolating() {
        List<ReportResponseDTO> listBlogRepo = adminBlogService.listBlogViolating(getUserFromAuthentication());
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
    @GetMapping("/all")
    public ResponseEntity<GenericResponse> listAllBlog(  ) {
        List<BlogDTO> listBlogRepo = adminBlogService.listAllBlog(getUserFromAuthentication());
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
    @PostMapping("/evalute")
    public ResponseEntity<GenericResponse> evaluteBlog(@RequestBody EvaluteRequestDTO req)
    {
        StatusResopnes statusResopnes = adminBlogService.evaluteBlog(req);
        if (statusResopnes.getStatusCode()==3)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found report")
                            .build()
                    );
        }
        if (statusResopnes.getStatusCode()==1)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(statusResopnes)
                            .statusCode(HttpStatus.OK.value())
                            .message("Delete blog success")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(statusResopnes)
                        .statusCode(HttpStatus.OK.value())
                        .message("Evalute success")
                        .build()
                );
    }
    @GetMapping("/comment-violating")
    public ResponseEntity<GenericResponse> reportComment( )
    {
        List<ReportCommentResponseDTO> list = adminBlogService.listReportComment();
        if (list == null) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Don't have report comment in system")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("There are list comment report")
                        .build()
                );
    }
    @PostMapping("/evalute-comment")
    public ResponseEntity<GenericResponse> evaluteComment(@RequestBody EvaluteRequestDTO req)
    {
        StatusResopnes statusResopnes = adminBlogService.evaluteComment(getUserFromAuthentication(),req);
        if (statusResopnes.getStatusCode()==3)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found report")
                            .build()
                    );
        }
        if (statusResopnes.getStatusCode()==1)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(statusResopnes)
                            .statusCode(HttpStatus.OK.value())
                            .message("Delete comment success")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(statusResopnes)
                        .statusCode(HttpStatus.OK.value())
                        .message("Evalute success")
                        .build()
                );
    }
}
