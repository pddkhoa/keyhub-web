package com.example.Keyhub.controller.Admin;

import com.example.Keyhub.data.dto.request.AdminDTO;
import com.example.Keyhub.data.dto.response.LikeReponse;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.event.OnRegistrationAdminCompleteEvent;
import com.example.Keyhub.event.OnRegistrationCompleteEvent;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IAdminService;
import com.example.Keyhub.service.IBLogService;
import com.example.Keyhub.service.IUserService;
import org.apache.catalina.core.ApplicationPushBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping(value = "/api/v1/admin")
public class AdminController {
    @Autowired
    IAdminService adminService;
    @Autowired
    IUserService userService;
    @Autowired
    ApplicationEventPublisher applicationPushBuilder;
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
    @GetMapping("/article-month/{month}")
    public ResponseEntity<GenericResponse> getBlogChartByMonth(@PathVariable Integer month) {
        return adminService.chartAriticleByMonth(month);
    }
    @GetMapping("/article-year/{year}")
    public ResponseEntity<GenericResponse> getBlogChartByYear(@PathVariable Integer year) {
        return adminService.chartAriticleByYear(year);
    }
    @GetMapping("/user-year")
    public ResponseEntity<GenericResponse> getUserChartInYear() {
        return adminService.chartPointUser();
    }
}
