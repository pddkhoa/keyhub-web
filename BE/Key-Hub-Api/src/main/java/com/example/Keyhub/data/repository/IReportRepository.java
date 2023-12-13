package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportBlog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface IReportRepository extends JpaRepository<ReportBlog , BigInteger> {
    boolean existsByUserAndBlog(Users user, Blog blog);
    List<ReportBlog> findByBlog(Blog blog);
    List<ReportBlog> findByUser(Users users);
    void deleteAllByUser(Users users);

}
