package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Comment;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface IReportCommentRepository extends JpaRepository<ReportComment,BigInteger> {
    List<ReportComment> findByComment(Comment comment);
    boolean existsByUserAndComment(Users users, Comment comment);
}
