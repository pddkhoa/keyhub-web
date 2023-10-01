package com.example.Keyhub.data.repository;


import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.Blog.Tag;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface IBlogRepository extends JpaRepository<Blog, BigInteger> {

    @Query("SELECT COUNT(b) FROM Blog b WHERE b.series.id = :series_id")
    BigInteger countBySeriesId(BigInteger series_id);
    @Query(value = "SELECT * FROM Blog b WHERE MATCH(title, description, content) AGAINST(:searchText IN BOOLEAN MODE)", nativeQuery = true)
    List<Blog> searchByFullText(@Param("searchText") String searchText);

    List<Blog> findByCategory(Category category);
    List<Blog> findByTags(Tag category);
    List<Blog> findBySeries(Series series);
    List<Blog> findAllByUser(Users users);
}