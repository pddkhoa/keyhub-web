package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.CommentDTO;
import com.example.Keyhub.data.dto.request.ReplyCommentDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogComment;
import com.example.Keyhub.data.entity.Blog.Comment;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;


public interface ICommentService {
    Comment addComment(Users users, Blog blog, CommentDTO commentDTO);
    Comment replyComment(Users users,Blog blog, ReplyCommentDTO commentDTO);
    List<Comment> findAllByBlog(Users users,Blog blog);
    Integer deleteComment(Users users, BigInteger comment);
}
