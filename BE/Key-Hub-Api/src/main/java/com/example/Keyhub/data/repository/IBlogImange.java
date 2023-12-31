package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface IBlogImange extends JpaRepository<BlogImage, BigInteger> {
    List<BlogImage> findByBlog(Blog blog);
}
