package com.example.Keyhub.controller.Admin;

import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IAdminService;
import com.example.Keyhub.service.IUserService;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping(value = "/api/v1/admin")
public class AdminController {
    final
    IAdminService adminService;
    final
    IUserService userService;
    final
    ApplicationEventPublisher applicationPushBuilder;

    public AdminController(IAdminService adminService, IUserService userService, ApplicationEventPublisher applicationPushBuilder) {
        this.adminService = adminService;
        this.userService = userService;
        this.applicationPushBuilder = applicationPushBuilder;
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
