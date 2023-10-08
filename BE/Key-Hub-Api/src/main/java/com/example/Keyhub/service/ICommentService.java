package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.CommentDTO;
import com.example.Keyhub.data.dto.request.ReplyCommentDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogComment;
import com.example.Keyhub.data.entity.Blog.Comment;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;


public interface ICommentService {
    Comment addComment(Blog blog, CommentDTO commentDTO);
    Comment replyComment(Blog blog, ReplyCommentDTO commentDTO);
    List<Comment> findAllByBlog(Blog blog);
}
