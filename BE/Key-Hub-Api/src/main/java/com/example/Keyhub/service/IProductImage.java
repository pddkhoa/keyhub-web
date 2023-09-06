package com.example.Keyhub.service;

import com.example.Keyhub.data.entity.Blog.BlogImage;

import java.util.List;

public interface IProductImage {
    List<BlogImage> getAllOfProductId(String productId);

    BlogImage findById(long imageId);

    void insertImage(BlogImage blogImage);

    void updateImage(BlogImage blogImage);
}
