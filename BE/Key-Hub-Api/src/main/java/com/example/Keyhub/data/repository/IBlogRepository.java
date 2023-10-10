package com.example.Keyhub.data.repository;


import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.Blog.Tag;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.math.BigInteger;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface IBlogRepository extends JpaRepository<Blog, BigInteger> {

    @Query("SELECT COUNT(b) FROM Blog b WHERE b.series.id = :series_id and b.status = 1 order by b.createDate DESC ")
    BigInteger countBySeriesId(BigInteger series_id);
    @Query(value = "SELECT * FROM Blog b WHERE MATCH(title, description, content) AGAINST(:searchText IN BOOLEAN MODE) AND b.status =1 ORDER BY b.createDate DESC", nativeQuery = true)
    List<Blog> searchByFullText(@Param("searchText") String searchText);
    List<Blog>  findAllByOrderByCreateDateDesc();
    List<Blog> findAllByStatus(int status);
    @Query("SELECT b FROM Blog b WHERE b.status = 1 ORDER BY b.createDate DESC")
    List<Blog>  findAllByStatusOrderByCreateDateDesc(int stautus, Pageable pageable);
    @Query("SELECT b FROM Blog b WHERE b.status = 1 ORDER BY b.likes DESC, b.createDate DESC")
    List<Blog>  findAllByStatusOrderByLikesDesc( Pageable pageable);

    @Query("SELECT b FROM Blog b WHERE b.status = 1 ORDER BY b.Views DESC, b.createDate DESC")
    List<Blog>  findAllByStatusOrderByViewsDesc(int stautus, Pageable pageable);


    List<Blog>  findAllByOrderByCreateDateDesc(Pageable pageable);
    List<Blog> findByCategoryAndStatusOrderByCreateDateDesc(Category category, int status_id);
    List<Blog> findByTagsAndStatusOrderByCreateDateDesc(Tag category,int status);
    List<Blog> findBySeriesAndStatusOrderByCreateDateDesc(Series series, int status);
    List<Blog> findAllByUserAndStatusOrderByCreateDateDesc(Users users,int status);
    @Query("SELECT b FROM Blog b WHERE b.createDate  BETWEEN :startDate AND :endDate and b.status= 1 " +
            "ORDER BY (b.Views + b.likes) DESC , b.createDate DESC ")
    List<Blog> findPopularBlogs(@Param("startDate") Date startDate, @Param("endDate") Date endDate, Pageable pageable);
    @Query("SELECT b FROM Blog b where b.status= 1 ORDER BY (b.Views + b.likes) DESC, b.createDate DESC")
    List<Blog> findPopularBlogsWithPagging(Pageable pageable);
}