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

    @Query("SELECT COUNT(b) FROM Blog b WHERE b.series.id = :series_id and b.status = 1")
    BigInteger countBySeriesId(BigInteger series_id);
    @Query(value = "SELECT * FROM Blog b WHERE MATCH(title, description, content) AGAINST(:searchText IN BOOLEAN MODE) AND b.status =1", nativeQuery = true)
    List<Blog> searchByFullText(@Param("searchText") String searchText);

    List<Blog> findByCategoryAndStatus(Category category, int status_id);
    List<Blog> findByTagsAndStatus(Tag category,int status);
    List<Blog> findBySeriesAndStatus(Series series, int status);
    List<Blog> findAllByUser(Users users);
    List<Blog> findAllByUserAndStatus(Users users,int status);
}