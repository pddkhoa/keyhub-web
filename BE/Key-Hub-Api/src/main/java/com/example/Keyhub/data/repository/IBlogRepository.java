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
import java.util.Date;
import java.util.List;


public interface IBlogRepository extends JpaRepository<Blog, BigInteger> {
    List<Blog> findByUser(Users users);
    List<Blog> findByTags(Tag tag);
    List<Blog> findAllByCategory(Category category);
    int countByStatus(int status);
    @Query("SELECT COUNT(b) FROM Blog b WHERE b.user.id = ?1 AND b.status = 1")
    int countBlogsByUserIdAndStatus(BigInteger userId);
    @Query("SELECT COUNT(b) FROM Blog b WHERE b.series.id = :series_id and b.status = 1 order by b.createDate DESC ")
    BigInteger countBySeriesId(BigInteger series_id);
    @Query(value = "SELECT * FROM Blog b WHERE MATCH(title, description, content) AGAINST(:searchText IN BOOLEAN MODE) AND b.status =1 ORDER BY  b.create_date DESC", nativeQuery = true)
    List<Blog> searchByFullText(@Param("searchText") String searchText);
    @Query(value = "SELECT * FROM Blog b WHERE MATCH(title, description, content) AGAINST(:searchText IN BOOLEAN MODE) AND b.status =1 AND b.category_id = :category_id ORDER BY  b.create_date DESC", nativeQuery = true)
    List<Blog> searchByCategory(@Param("searchText") String searchText, @Param("category_id") Long category_id);
    List<Blog>  findAllByOrderByCreateDateDesc();
    List<Blog> findAllByStatus(int status);
    @Query("SELECT b FROM Blog b WHERE b.status = 1 ORDER BY b.createDate DESC")
    List<Blog>  findAllByStatusOrderByCreateDateDesc(int stautus);
    @Query(value = "SELECT * FROM blog WHERE `status` = 1 ORDER BY likes DESC , create_date DESC", nativeQuery = true)
    List<Blog>  findAllByStatusOrderByLikesDesc();

    @Query("SELECT b FROM Blog b WHERE b.status = 1 ORDER BY b.Views DESC, b.createDate DESC")
    List<Blog>  findAllByStatusOrderByViewsDesc(int stautus );
    
    List<Blog> findByCategoryAndStatusOrderByCreateDateDesc(Category category, int status_id);
    List<Blog> findByTagsAndStatusOrderByCreateDateDesc(Tag category,int status);
    List<Blog> findBySeriesAndStatusOrderByCreateDateDesc(Series series, int status);
    List<Blog> findBySeries(Series series);

    List<Blog> findAllByUserAndStatusOrderByCreateDateDesc(Users users,int status);
    @Query("SELECT b FROM Blog b WHERE b.createDate  BETWEEN :startDate AND :endDate and b.status= 1 " +
            "ORDER BY (b.Views + b.likes) DESC , b.createDate DESC ")
    List<Blog> findPopularBlogs(@Param("startDate") Date startDate, @Param("endDate") Date endDate);
    @Query("SELECT b FROM Blog b where b.status= 1 ORDER BY (b.Views + b.likes) DESC, b.createDate DESC")
    List<Blog> findPopularBlogsWithPagging();
    @Query(value = "WITH RankedBlogs AS (\n" +
            "  SELECT\n" +
            "    b.*,\n" +
            "    ROW_NUMBER() OVER (PARTITION BY b.category_id ORDER BY b.likes DESC, b.views DESC) AS row_num\n" +
            "  FROM\n" +
            "    blog b\n" +
            "  WHERE\n" +
            "    b.`status` = 1\n" +
            ")\n" +
            "SELECT * FROM RankedBlogs WHERE row_num = 1;\n",nativeQuery = true)
    List<Blog> findMostPopularEachCategory();
    int countByCreateDateBetween(Date createDate, Date createDate2);
}