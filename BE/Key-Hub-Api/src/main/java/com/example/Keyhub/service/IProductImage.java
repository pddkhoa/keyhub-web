package com.example.Keyhub.service;

import com.example.Keyhub.data.entity.ProductImage;

import java.util.List;

public interface IProductImage {
    List<ProductImage> getAllOfProductId(String productId);

    ProductImage findById(long imageId);

    void insertImage(ProductImage productImage);

    void updateImage(ProductImage productImage);
}
