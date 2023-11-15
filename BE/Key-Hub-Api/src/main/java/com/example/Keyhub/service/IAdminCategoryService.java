package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.CategoryRequestDTO;
import com.example.Keyhub.data.dto.response.CategoryResponseCardDTO;
import com.example.Keyhub.data.entity.Blog.Category;
import org.springframework.web.multipart.MultipartFile;

public interface IAdminCategoryService {
    CategoryResponseCardDTO addCategory(CategoryRequestDTO requestDTO);
    CategoryResponseCardDTO editCategory(CategoryResponseCardDTO responseCardDTO);
    String uploadAvatar(Long category_id, MultipartFile imageFile);
    String uploadBanner(Long category_id, MultipartFile imageFile);
    boolean checkExitsByName(String name);

}
