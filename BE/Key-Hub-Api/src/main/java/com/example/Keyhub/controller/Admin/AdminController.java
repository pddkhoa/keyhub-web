package com.example.Keyhub.controller.Admin;

import com.example.Keyhub.data.dto.response.LikeReponse;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IAdminService;
import com.example.Keyhub.service.IBLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping(value = "/api/v1/admin")
public class AdminController {
    @Autowired
    IAdminService adminService;
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @GetMapping("/article-statistics")
    public ResponseEntity<GenericResponse> getBlogByStatus() {
        return adminService.circleChartAnalystArticle();
    }
    @GetMapping("/article-weak")
    public ResponseEntity<GenericResponse> getBlogChartByWeak() {
        return adminService.chartAriticleByWeak();
    }
    @GetMapping("/article-month")
    public ResponseEntity<GenericResponse> getBlogChartByMonth() {
        return adminService.chartAriticleByMonth();
    }
    @GetMapping("/article-year")
    public ResponseEntity<GenericResponse> getBlogChartByYear() {
        return adminService.chartAriticleByYear();
    }


}
