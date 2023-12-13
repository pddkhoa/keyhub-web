package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.response.*;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogLike;
import com.example.Keyhub.data.entity.Blog.BlogSave;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

import java.util.List;
import java.util.stream.Collectors;

public interface GeneralService {
    BlogDTO createBlogDTO(Users users, Blog blog);
    UserResponseDTO createUserResponse(Users user);
}
