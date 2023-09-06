package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.BlogImage;
import com.example.Keyhub.data.entity.Blog.SeriesImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface ISeriesImageRepository extends JpaRepository<SeriesImage, BigInteger> {
}
