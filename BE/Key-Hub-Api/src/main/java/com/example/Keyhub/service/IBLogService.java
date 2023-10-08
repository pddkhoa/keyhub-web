package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.BlogPostDTO;
import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.BlogEditDTO;
import com.example.Keyhub.data.dto.response.LikeReponse;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogImage;
import com.example.Keyhub.data.entity.Blog.BlogSave;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.security.core.userdetails.User;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface IBLogService {
    Blog createBlog(BlogPostDTO blogPostDTO, Users user);
    Blog draftBlog(BlogPostDTO blogPostDTO, Users user);
    List<BlogDTO> getBlogByCategory(Long category_id, Users users);
    List<BlogDTO> getBlogByTag(Long tag_id, Users users);

    List<BlogDTO> getBlogBySeries(BigInteger series_id, Users users);
    List<BlogDTO> getBlogBySearch(String key, Users users);
    BlogImage addBlogImage(BlogImage blogImage, Users users);
    List<BlogDTO> getAllBlogByUser(Users users);
    List<BlogDTO> getAllBlogBySave(Users users);
    List<BlogDTO> getAllBlog(Users users);
    List<BlogDTO> getBlogDraftByUser(Users users, int status);
    BlogDTO updateBlog(BlogEditDTO blogDTO, BigInteger blog_id, Users users);
    BlogDTO changeStatusBlog( BigInteger blog_id, Users users);
    void deleteBlogById(Blog blog);
    LikeReponse likeBlog(Blog Blog, Users users);

}
