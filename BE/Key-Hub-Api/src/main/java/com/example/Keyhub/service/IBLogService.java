package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.BlogPostDTO;
import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.BlogEditDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogImage;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface IBLogService {
    Blog createBlog(BlogPostDTO blogPostDTO, Users user);
    List<BlogDTO> getBlogByCategory(Long category_id);
    List<BlogDTO> getBlogByTag(Long tag_id);

    List<BlogDTO> getBlogBySeries(BigInteger series_id);
    List<BlogDTO> getBlogBySearch(String key);
    BlogImage addBlogImage(BlogImage blogImage, Users users);
    List<BlogDTO> getAllBlogByUser(Users users);
    List<BlogDTO> getAllBlogBySave(Users users);
    BlogDTO updateBlog(BlogEditDTO blogDTO, BigInteger blog_id);


}
