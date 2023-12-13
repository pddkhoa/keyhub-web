package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogSave;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface IBlogSaveRepository extends JpaRepository<BlogSave, BigInteger> {
    BlogSave findByUsersAndBlog(Users users, Blog blog);
    List<BlogSave> findByUsers(Users user);

    List<BlogSave> findByBlog(Blog blog);
}
