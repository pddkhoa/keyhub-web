package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.dto.request.CommentDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogComment;
import com.example.Keyhub.data.entity.Blog.Comment;
import com.example.Keyhub.data.entity.ProdfileUser.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface IBlogComment extends JpaRepository<BlogComment, BigInteger> {
    List<BlogComment> findAllByBlog(Blog blog);
    BlogComment findAllByComment(Comment comment);
    int countByBlog(Blog blog);
}
