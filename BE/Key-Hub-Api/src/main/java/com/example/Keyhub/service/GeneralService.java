package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.CommentResponse;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.Comment;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

public interface GeneralService {
    BlogDTO createBlogDTO(Users users, Blog blog);
    UserResponseDTO createUserResponse(Users user);
    CommentResponse createCommentResponse(Comment comment);
}
