package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.response.CategoryResponseCardDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

import java.math.BigInteger;
import java.util.List;

public interface ICategoryService {
    List<CategoryResponseCardDTO> getAllCategoryFollowByUser(Users users,BigInteger user);
    List<CategoryResponseCardDTO> getAllCategoryCard(Users users);
    List<UserResponseDTO> getAllUserFollowCategory(Long category_id, Users users);
    boolean isPresentCategory(Long id);
    boolean isPresentCategoryAndUser(Long id, Users users);
}
