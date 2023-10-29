package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogHide;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface IBlogHIdeRepository extends JpaRepository<BlogHide , BigInteger> {
    BlogHide findByBlogAndUsers(Blog blog, Users users);
}
