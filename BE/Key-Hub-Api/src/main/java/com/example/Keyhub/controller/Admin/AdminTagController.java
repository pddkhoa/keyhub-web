package com.example.Keyhub.controller.Admin;

import com.example.Keyhub.data.dto.request.TagRequestDTO;
import com.example.Keyhub.data.dto.response.TagDTO;
import com.example.Keyhub.data.entity.Blog.Tag;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@PreAuthorize("hasRole('ADMIN')")
@RequestMapping(value = "/api/v1/admin/tag")
public class AdminTagController {
    @Autowired
    IAdminTagService adminTagService;

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @PostMapping("/add")
    ResponseEntity<GenericResponse> addCategory(@RequestBody TagRequestDTO TagRequestDTO)
    {
        if (adminTagService.exitsTagByName(TagRequestDTO.getName()))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Tag has been exits")
                            .build()
                    );
        }
        TagDTO tag = adminTagService.addTag(TagRequestDTO,getUserFromAuthentication());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(tag)
                        .statusCode(HttpStatus.OK.value())
                        .message("Add tag success")
                        .build()
                );
    }
    @PostMapping("/{tag_id}/add-to-category")
    ResponseEntity<GenericResponse> addTagToCategory(@RequestBody TagRequestDTO TagRequestDTO, @PathVariable Long tag_id)
    {
        if (adminTagService.exitsTag(tag_id))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found tag")
                            .build()
                    );
        }
        adminTagService.addTagToCategory(TagRequestDTO,getUserFromAuthentication(),tag_id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(null)
                        .statusCode(HttpStatus.OK.value())
                        .message("Add category success")
                        .build()
                );
    }
    @DeleteMapping("/{tag_id}/delete")
    ResponseEntity<GenericResponse> deleteTag(@PathVariable Long tag_id)
    {
        if (adminTagService.exitsTag(tag_id))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found tag")
                            .build()
                    );
        }
        adminTagService.deleteTag(tag_id,getUserFromAuthentication());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(null)
                        .statusCode(HttpStatus.OK.value())
                        .message("Delete tag success")
                        .build()
                );
    }
    @DeleteMapping("/{tag_id}/remove")
    ResponseEntity<GenericResponse> removeTagFromCategory(@PathVariable Long tag_id, @RequestBody TagRequestDTO tagRequestDTO)
    {
        if (adminTagService.exitsTag(tag_id))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found tag")
                            .build()
                    );
        }
        adminTagService.deleteTagToCategory(tagRequestDTO,getUserFromAuthentication(),tag_id);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(null)
                        .statusCode(HttpStatus.OK.value())
                        .message("Delete tag success")
                        .build()
                );
    }
    @PatchMapping("/edit")
    public ResponseEntity<GenericResponse> editTag(@RequestBody TagRequestDTO tagRequestDTO)
    {
        if (!adminTagService.exitsTag(tagRequestDTO.getId()))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found tag")
                            .build()
                    );
        }
        TagDTO tagDTO = adminTagService.editTag(tagRequestDTO,getUserFromAuthentication());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(tagDTO)
                        .statusCode(HttpStatus.OK.value())
                        .message("Edit success")
                        .build()
                );
    }
}
