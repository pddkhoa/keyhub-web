package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Comment;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface IReportCommentRepository extends JpaRepository<ReportComment,BigInteger> {

    boolean existsByUserAndComment(Users users, Comment comment);
}
