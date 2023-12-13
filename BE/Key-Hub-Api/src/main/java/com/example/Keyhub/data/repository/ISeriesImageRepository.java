package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.BlogImage;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.Blog.SeriesImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface ISeriesImageRepository extends JpaRepository<SeriesImage, BigInteger> {
    Optional<SeriesImage> findById(BigInteger id);
    Optional<SeriesImage> findBySeries(Series series);
}
