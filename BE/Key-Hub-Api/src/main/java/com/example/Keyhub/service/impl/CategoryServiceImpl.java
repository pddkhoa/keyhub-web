package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.response.CategoryResponseCardDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.FollowCategory;
import com.example.Keyhub.data.entity.ProdfileUser.Follow;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements ICategoryService {
    @Autowired
    ICategoryRepository categoryRepository;
    @Autowired
    IFollowRepository iFollowRepository;
    @Autowired
    IBlogRepository blogRepository;
    @Autowired
    IUserFollowCategory followCategoryRepository;
    @Autowired
    IUserRepository userRepository;

    @Override
    public List<CategoryResponseCardDTO> getAllCategoryFollowByUser(Users users, BigInteger user_id) {
        Users users1 = userRepository.findById(user_id).orElse(null);
        List<FollowCategory> followCategory = followCategoryRepository.findByUser(users1);
        if (followCategory==null)
        {
            return null;
        }
        List<Category> followingUsers = followCategory.stream()
                .map(FollowCategory::getCategory)
                .collect(Collectors.toList());
        return followingUsers.stream().map(category -> {
            CategoryResponseCardDTO dto = new CategoryResponseCardDTO();
            dto.setId(category.getId());
            dto.setName(category.getName());
            dto.setDescription(category.getDescription());
            dto.setAvatar(category.getAvatar());
            dto.setBanner(category.getBanner());
            if (followCategoryRepository.existsByCategoryAndUser(category,users))
            {
                dto.setCheckFollowCategory(true);
            }
            else {
                dto.setCheckFollowCategory(false);
            }
            // Lấy số lượng người dùng theo dõi category
            dto.setSumUser(followCategoryRepository.countByCategory(category));
            return dto;
        }).collect(Collectors.toList());
    }

    @Override
    public List<CategoryResponseCardDTO> getAllCategoryCard(Users users) {
        List<Category> list = categoryRepository.findAll();
        return list.stream().map(category -> {
            CategoryResponseCardDTO dto = new CategoryResponseCardDTO();
            dto.setId(category.getId());
            dto.setName(category.getName());
            dto.setDescription(category.getDescription());
            dto.setAvatar(category.getAvatar());
            dto.setBanner(category.getBanner());
            if (followCategoryRepository.existsByCategoryAndUser(category,users))
            {
                dto.setCheckFollowCategory(true);
            }
            else {
                dto.setCheckFollowCategory(false);
            }
            // Lấy số lượng người dùng theo dõi category
            dto.setSumUser(followCategoryRepository.countByCategory(category));
            return dto;
        }).collect(Collectors.toList());
    }
    public UserResponseDTO createUserResponse(Users user) {
        UserResponseDTO response = new UserResponseDTO();
        response.setId(user.getId());
        response.setName(user.getName());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setPhone(user.getPhone());
        response.setCreateDate(user.getCreateDate());
        response.setUpdateDate(user.getUpdateDate());
        response.setAvatar(user.getAvatar());
        response.setSecond_name(user.getSecond_name());
        response.setStatus(user.getStatus());
        response.setGender(user.getGender());
        response.setDescriptions(user.getDescriptions());
        response.setAddress(user.getAddress());
        response.setCompany(user.getCompany());
        response.setCountry(user.getCountry());
        response.setSchool(user.getSchool());
        response.setBanner_url(user.getBanner_url());
        int sumBlog = blogRepository.countBlogsByUserIdAndStatus(user.getId());
        response.setSumBLog(sumBlog);
        List<Follow> UserFollow = iFollowRepository.findAllByUserFollower(user);
        response.setTotalFollowing(UserFollow.size());
        List<Follow> UserFollowing = iFollowRepository.findAllByFollowing(user);
        response.setTotalFollowers(UserFollowing.size());
        return response;
    }
    @Override
    public List<UserResponseDTO> getAllUserFollowCategory(Long category_id) {
        Category category = categoryRepository.findById(category_id).orElse(null);
        List<FollowCategory> followCategory = followCategoryRepository.findByCategory(category);
        List<Users> followingUsers = followCategory.stream()
                .map(FollowCategory::getUser)
                .collect(Collectors.toList());
        if (followingUsers==null)
        {
            return null;
        }
        List<UserResponseDTO> userResponseDTOs = followingUsers.stream()
                .map(user -> {
                     UserResponseDTO userResponseDTO= createUserResponse(user);
                    userResponseDTO.setCheckFollowCategory(true);
                    return userResponseDTO;
                })
                .collect(Collectors.toList());
    return userResponseDTOs;
    }
    @Override
    public boolean isPresentCategory(Long categoryId) {
        boolean categoryExists = categoryRepository.existsById(categoryId);
        return categoryExists;
    }

    @Override
    public boolean isPresentCategoryAndUser(Long id, Users users) {
        Category category = categoryRepository.findById(id).orElse(null);
        boolean check =followCategoryRepository.existsByCategoryAndUser(category,users);
        if (check==false)
        {
            return false;
        }
        return true;
    }
}
