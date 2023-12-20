package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.BlogPostDTO;
import com.example.Keyhub.data.dto.request.BlogPostDraftDTO;
import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.BlogEditDTO;
import com.example.Keyhub.data.dto.response.LikeReponse;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogImage;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

import java.math.BigInteger;
import java.util.List;

public interface IBLogService {
    Blog createBlog(BlogPostDTO blogPostDTO, Users user);
    Blog draftBlog(BlogPostDraftDTO blogPostDTO, Users user);
    List<BlogDTO> getBlogByCategory(Long category_id, Users users);
    List<BlogDTO> getBlogByTag(Long tag_id, Users users);

    List<BlogDTO> getBlogBySeries(BigInteger series_id, Users users);
    List<BlogDTO> getBlogBySearch(String key, Users users);
    BlogImage addBlogImage(BlogImage blogImage, Users users);
    List<BlogDTO> getAllBlogByUser(Users users);
    List<BlogDTO> getAllBlogBySave(Users users);
    List<BlogDTO> getAllBlog(Users users);
    List<BlogDTO> getAllBlogPublis(Users users);
    List<BlogDTO> getBlogDraftByUser(Users users, int status);
    BlogDTO updateBlog(BlogEditDTO blogDTO, BigInteger blog_id, Users users);
    BlogDTO changeStatusBlog( BigInteger blog_id, Users users);
    void deleteBlogById(Blog blog);
    LikeReponse likeBlog(Blog Blog, Users users);
    List<BlogDTO> getFiveBlogPopular(Users users);
    BlogDTO getBlogMostInCategoryOne(Users users);
    List<BlogDTO> getBlogMostInCategoryFourLeft(Users users);
    List<BlogDTO> getBlogMostInCategoryFourRight(Users users);


    List<BlogDTO> getListPopularWithPagging(int index, Users users);
    List<BlogDTO> getAllInFeed(int index, Users users);
    List<BlogDTO> getAllBlogNews(int index, Users users);
    List<BlogDTO> getAllBlogLike(int index, Users users);
    List<BlogDTO> getAllBlogViews(int index, Users users);

    List<BlogDTO> getAllByBlogInWallUser(Users users, BigInteger user_id);

    int getAllInFeedToCheck( Users users);
    boolean exitUser(BigInteger id);
}
