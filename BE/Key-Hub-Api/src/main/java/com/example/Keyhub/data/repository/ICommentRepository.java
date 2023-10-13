package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Comment;
import com.example.Keyhub.data.entity.ProdfileUser.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface ICommentRepository extends JpaRepository<Comment, BigInteger> {
    List<Comment> findByParentComment(Comment comment);
}
