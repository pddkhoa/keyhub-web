package com.example.Keyhub.service.impl;


import com.example.Keyhub.data.entity.Blog.BlogSave;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogSaveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogSaveService {

    private final IBlogSaveRepository blogSaveRepository;

    @Autowired
    public BlogSaveService(IBlogSaveRepository blogSaveRepository) {
        this.blogSaveRepository = blogSaveRepository;
    }

    public List<BlogSave> getSavedBlogsByUser(Users user) {
        return blogSaveRepository.findByUsers(user);
    }
}