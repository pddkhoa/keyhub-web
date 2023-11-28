package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.FollowCategory;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface IUserFollowCategory extends JpaRepository<FollowCategory, BigInteger> {
    Long countByCategory(Category category);
    List<FollowCategory> findByUser(Users users);
    List<FollowCategory> findByCategory(Category category);
    FollowCategory findByUserAndCategory(Users users, Category category);
    boolean existsByCategoryAndUser(Category category, Users users);
}
