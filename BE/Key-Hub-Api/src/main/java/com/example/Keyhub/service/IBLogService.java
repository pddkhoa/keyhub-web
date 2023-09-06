package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.BlogPostDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogImage;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

import java.math.BigInteger;

public interface IBLogService {
    Blog createBlog(BlogPostDTO blogPostDTO, Users user);
    BlogImage addBlogImage(BlogImage blogImage, Users users);
}
