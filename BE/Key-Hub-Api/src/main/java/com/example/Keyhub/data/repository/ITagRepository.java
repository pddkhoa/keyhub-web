package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.Tag;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ITagRepository extends JpaRepository<Tag, Long> {
    @Override
    boolean existsById(Long aLong);
    boolean existsByName(String name);
}
