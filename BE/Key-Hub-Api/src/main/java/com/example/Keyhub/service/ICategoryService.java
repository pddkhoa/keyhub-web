package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.request.CategoryDTO;
import com.example.Keyhub.data.dto.response.CategoryResponseCardDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigInteger;
import java.util.List;

public interface ICategoryService {
    List<CategoryResponseCardDTO> getAllCategoryFollowByUser(Users users,BigInteger user);
    List<CategoryResponseCardDTO> getAllCategoryCard(Users users);
    List<UserResponseDTO> getAllUserFollowCategory(Long category_id, Users users);
    boolean isPresentCategory(Long id);
    boolean exitCategory(Long category_id);
    boolean isPresentCategoryAndUser(Long id, Users users);
    List<BlogDTO> searchByCategory(Users users, CategoryDTO categoryDTO);

}
