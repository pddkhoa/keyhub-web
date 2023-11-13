package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.CategoryDTO;
import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.CategoryResponseCardDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogHide;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.FollowCategory;
import com.example.Keyhub.data.entity.ProdfileUser.Follow;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.service.GeneralService;
import com.example.Keyhub.service.ICategoryService;
import com.example.Keyhub.service.UploadImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements ICategoryService {
    final
    ICategoryRepository categoryRepository;
    final
    IFollowRepository iFollowRepository;
    final
    IBlogRepository blogRepository;
    final
    IUserFollowCategory followCategoryRepository;
    final
    IUserRepository userRepository;
    final
    GeneralService generalService;
    final
    UploadImageService uploadImageService;
    final
    IBlogHIdeRepository blogHIdeRepository;

    public CategoryServiceImpl(ICategoryRepository categoryRepository, IFollowRepository iFollowRepository, IBlogRepository blogRepository, IUserFollowCategory followCategoryRepository, IUserRepository userRepository, GeneralService generalService, IBlogHIdeRepository blogHIdeRepository, UploadImageService uploadImageService) {
        this.categoryRepository = categoryRepository;
        this.iFollowRepository = iFollowRepository;
        this.blogRepository = blogRepository;
        this.followCategoryRepository = followCategoryRepository;
        this.userRepository = userRepository;
        this.generalService = generalService;
        this.blogHIdeRepository = blogHIdeRepository;
        this.uploadImageService = uploadImageService;
    }

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
    public List<UserResponseDTO> getAllUserFollowCategory(Long category_id, Users users) {
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
                    Follow follow = iFollowRepository.findAllByFollowingAndUserFollower(users,user);
                    if (follow!=null)
                    {
                        userResponseDTO.setCheckStatusFollow(true);
                    }
                    else
                    {
                        userResponseDTO.setCheckStatusFollow(false);
                    }
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
    public boolean exitCategory(Long category_id) {
        if (categoryRepository.existsById(category_id)){
            return true;
        }
        return false;
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
    @Override
    public List<BlogDTO> searchByCategory(Users users, CategoryDTO categoryDTO) {
        List<Blog> list = blogRepository.searchByCategory(categoryDTO.getKeyword(),categoryDTO.getCategory_id());
        List<BlogDTO>  result = new ArrayList<>();
        for (Blog blogDTO:list)
        {
            BlogDTO blogDTO1 = new BlogDTO();
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blogDTO, users);
            if (blogHide == null) {
                blogDTO1 = generalService.createBlogDTO(users, blogDTO);
            }
            result.add(blogDTO1);
        }
        return result;
    }
}
