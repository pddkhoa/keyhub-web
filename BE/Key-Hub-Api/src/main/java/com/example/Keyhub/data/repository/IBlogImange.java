package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.BlogImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface IBlogImange extends JpaRepository<BlogImage, BigInteger> {
}
