package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ITagRepository extends JpaRepository<Tag, Long> {
    @Override
    boolean existsById(Long aLong);
    boolean existsByName(String name);
    List<Tag> findByCategory(Category category);
}
