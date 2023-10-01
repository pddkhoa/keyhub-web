package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.Category;

import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;


public interface ICategoryRepository extends JpaRepository<Category, Long> {

}
