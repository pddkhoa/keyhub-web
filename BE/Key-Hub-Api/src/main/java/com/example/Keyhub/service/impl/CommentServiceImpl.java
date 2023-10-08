package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.CommentDTO;
import com.example.Keyhub.data.dto.request.ReplyCommentDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogComment;
import com.example.Keyhub.data.entity.Blog.Comment;
import com.example.Keyhub.data.repository.IBlogComment;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.ICommentRepository;
import com.example.Keyhub.service.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class CommentServiceImpl implements ICommentService {
    @Autowired
    ICommentRepository commentRepository;
    @Autowired
    IBlogRepository blogRepository;
    @Autowired
    IBlogComment iblogComment;
    @Override
    public Comment addComment(Blog blog, CommentDTO commentDTO) {
        BlogComment blogComment = new BlogComment();
        Comment comment = new Comment();
        comment.setContent(commentDTO.getContent());
        comment.setParentComment(null);
        commentRepository.save(comment);
        blogComment.setComment(comment);
        blogComment.setBlog(blog);
        iblogComment.save(blogComment);
        return comment;
    }

    @Override
    public Comment replyComment(Blog blog, ReplyCommentDTO commentDTO) {
        BlogComment blogComment = new BlogComment();
        Comment parent= commentRepository.findById(commentDTO.getParent_id()).orElse(null);
        if (parent==null)
        {
            return null;
        }
        Comment comment = new Comment();
        comment.setContent(commentDTO.getContent());
        comment.setParentComment(parent);
        commentRepository.save(comment);
        blogComment.setComment(comment);
        blogComment.setBlog(blog);
        iblogComment.save(blogComment);
        return comment;
    }

    @Override
    public List<Comment> findAllByBlog(Blog blog) {
        List<BlogComment> comments = iblogComment.findAllByBlog(blog);
        if (comments==null)
        {
            return null;
        }
        List<Comment> commentList = new ArrayList<>();
        for(BlogComment a : comments)
        {
            Comment comment = new Comment();
            comment = a.getComment();
            commentList.add(comment);
        }
        return commentList;
    }

}
