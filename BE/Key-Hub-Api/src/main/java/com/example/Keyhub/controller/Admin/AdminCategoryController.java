package com.example.Keyhub.controller.Admin;

import com.example.Keyhub.config.ValidatorUtils;
import com.example.Keyhub.data.dto.request.CategoryRequestDTO;
import com.example.Keyhub.data.dto.response.CategoryResponseCardDTO;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.service.*;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping(value = "/api/v1/admin/category")
public class AdminCategoryController {
    final
    IAdminService adminService;
    final
    IUserService userService;
    final
    IAdminCategoryService adminCategoryService;
    final
    ICategoryService categoryService;
    final
    UploadImageService uploadImageService;
    final
    ApplicationEventPublisher applicationPushBuilder;

    public AdminCategoryController(IAdminService adminService, IUserService userService, IAdminCategoryService adminCategoryService, ICategoryService categoryService, UploadImageService uploadImageService, ApplicationEventPublisher applicationPushBuilder) {
        this.adminService = adminService;
        this.userService = userService;
        this.adminCategoryService = adminCategoryService;
        this.categoryService = categoryService;
        this.uploadImageService = uploadImageService;
        this.applicationPushBuilder = applicationPushBuilder;
    }

    @PostMapping("/add")
    ResponseEntity<GenericResponse> addCategory(@RequestBody CategoryRequestDTO requestDTO) {
        if (adminCategoryService.checkExitsByName(requestDTO.getName())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Category has been exist")
                            .build()
                    );
        }
        CategoryResponseCardDTO res = adminCategoryService.addCategory(requestDTO);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(res)
                        .statusCode(HttpStatus.OK.value())
                        .message("Add category success")
                        .build()
                );
    }

    @PatchMapping("/edit")
    ResponseEntity<GenericResponse> editCategory(@RequestBody CategoryResponseCardDTO requestDTO) {
        if (adminCategoryService.checkExitsByName(requestDTO.getName())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Category has been exist")
                            .build()
                    );
        }
        if (!categoryService.exitCategory(requestDTO.getId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found category")
                            .build()
                    );
        }
        CategoryResponseCardDTO res = adminCategoryService.editCategory(requestDTO);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(res)
                        .statusCode(HttpStatus.OK.value())
                        .message("Edit category success")
                        .build()
                );
    }

    @RequestMapping(value = "/{cateogy_id}/upload-avatar", method = RequestMethod.PATCH)
    public ResponseEntity<GenericResponse> uploadAvatar(@RequestParam MultipartFile file, @PathVariable Long cateogy_id) {
        if (!ValidatorUtils.validateMineFile(file))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Request failed. This file must be png, jpg, jpeg, bmp, gif, bmp, tiff, webp, svg+xml, pdf, doc, docx, xls, xls. Please validate the file again.")
                            .build()
                    );
        String url = adminCategoryService.uploadAvatar(cateogy_id, file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .result(url)
                        .message("Upload avatar was successful")
                        .build()
                );
    }

    @RequestMapping(value = "/{cateogy_id}/upload-banner", method = RequestMethod.PATCH)
    public ResponseEntity<GenericResponse> uploadBannerCategory(@RequestParam MultipartFile file, @PathVariable Long cateogy_id) {
        if (!ValidatorUtils.validateMineFile(file))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Request failed. This file must be png, jpg, jpeg, bmp, gif, bmp, tiff, webp, svg+xml, pdf, doc, docx, xls, xls. Please validate the file again.")
                            .build()
                    );
        String url = adminCategoryService.uploadBanner(cateogy_id, file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .result(url)
                        .message("Upload banner was successful")
                        .build()
                );
    }

    @DeleteMapping(value = "/{category_id}/delete")
    public ResponseEntity<GenericResponse> deleteCategory(@PathVariable Long category_id) {
        if (!categoryService.exitCategory(category_id)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found category")
                            .build()
                    );
        }
        adminCategoryService.deleteCategory(category_id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(null)
                        .statusCode(HttpStatus.OK.value())
                        .message("Delete category success")
                        .build());
    }
}
