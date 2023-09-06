package com.example.Keyhub.data.repository;


import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.Series;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigInteger;

public interface IBlogRepository extends JpaRepository<Blog, BigInteger> {

    @Query("SELECT COUNT(b) FROM Blog b WHERE b.series.id = :series_id")
    BigInteger countBySeriesId(BigInteger series_id);
}