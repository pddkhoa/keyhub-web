package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.CategoryRequestDTO;
import com.example.Keyhub.data.dto.response.CategoryResponseCardDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.FollowCategory;
import com.example.Keyhub.data.entity.Blog.Tag;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.ICategoryRepository;
import com.example.Keyhub.data.repository.ITagRepository;
import com.example.Keyhub.data.repository.IUserFollowCategory;
import com.example.Keyhub.service.IBLogService;
import com.example.Keyhub.service.UploadImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class IAdminCategoryService implements com.example.Keyhub.service.IAdminCategoryService {
    @Autowired
    ICategoryRepository categoryRepository;
    @Autowired
    IUserFollowCategory userFollowCategory;
    @Autowired
    UploadImageService uploadImageService;
    @Autowired
    IBlogRepository blogRepository;
    @Autowired
    IBLogService ibLogService;
    @Override
    public boolean checkExitsByName(String name)
    {
        if (categoryRepository.existsByName(name))
        {
            return true;
        }
        return false;
    }
    @Autowired
    ITagRepository tagRepository;
    @Override
    public void deleteCategory(Long category) {
        Category category1 = categoryRepository.findById(category).orElseThrow(null);
        List<Tag> listTag = tagRepository.findByCategory(category1);
        tagRepository.deleteAll(listTag);
        List<Blog> blogList = blogRepository.findAllByCategory(category1);
        for (Blog blog : blogList)
        {
            ibLogService.deleteBlogById(blog);
        }
        List<FollowCategory> list = userFollowCategory.findByCategory(category1);
        userFollowCategory.deleteAll(list);
        categoryRepository.delete(category1);
    }

    @Override
    public CategoryResponseCardDTO addCategory(CategoryRequestDTO requestDTO) {
        Category category = new Category();
        category.setName(requestDTO.getName());
        category.setDescription(requestDTO.getDescription());
        categoryRepository.save(category);
        CategoryResponseCardDTO res = new CategoryResponseCardDTO();
        res.setAvatar(category.getAvatar());
        res.setId(category.getId());
        res.setBanner(category.getBanner());
        res.setName(category.getName());
        res.setDescription(category.getDescription());
        res.setSumUser(userFollowCategory.countByCategory(category));
        return res;
    }
    @Override
    public CategoryResponseCardDTO editCategory(CategoryResponseCardDTO responseCardDTO) {
        Category category = categoryRepository.findById(responseCardDTO.getId()).orElse(null);
        if (category==null)
        {
            return null;
        }
        category.setName(responseCardDTO.getName());
        category.setDescription(responseCardDTO.getDescription());
        categoryRepository.save(category);
        CategoryResponseCardDTO res = new CategoryResponseCardDTO();
        res.setAvatar(category.getAvatar());
        res.setId(category.getId());
        res.setBanner(category.getBanner());
        res.setName(category.getName());
        res.setDescription(category.getDescription());
        res.setSumUser(userFollowCategory.countByCategory(category));
        return res;
    }
    @Override
    public String uploadAvatar(Long category_id, MultipartFile imageFile) {
        Category us = categoryRepository.findById(category_id).orElseThrow(null);
        String new_avatar = uploadImageService.uploadFile(imageFile);
        us.setAvatar(new_avatar);
        categoryRepository.save(us);
        return new_avatar;
    }
    @Override
    public String uploadBanner(Long category_id, MultipartFile imageFile) {
        Category us = categoryRepository.findById(category_id).orElseThrow(null);
        String new_banner = uploadImageService.uploadFile(imageFile);
        us.setBanner(new_banner);
        categoryRepository.save(us);
        return new_banner;
    }
}
