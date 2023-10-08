package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogLike;
import com.example.Keyhub.data.entity.Blog.BlogSave;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface IBlogLikeRepository extends JpaRepository<BlogLike, BigInteger> {
    BlogLike findByUsersAndBlog(Users users, Blog blog);
    List<BlogSave> findByUsers(Users user);
}
