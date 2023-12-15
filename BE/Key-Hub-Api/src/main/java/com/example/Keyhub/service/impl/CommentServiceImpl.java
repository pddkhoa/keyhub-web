package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.CommentDTO;
import com.example.Keyhub.data.dto.request.ReplyCommentDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogComment;
import com.example.Keyhub.data.entity.Blog.Comment;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogComment;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.ICommentRepository;
import com.example.Keyhub.service.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
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
    public Comment addComment(Users users, Blog blog, CommentDTO commentDTO) {
        BlogComment blogComment = new BlogComment();
        Comment comment = new Comment();
        comment.setContent(commentDTO.getContent());
        comment.setUsers(users);
        comment.setParentComment(null);
        comment.setCreatedAt(new Date());
        commentRepository.save(comment);
        blogComment.setComment(comment);
        blogComment.setBlog(blog);
        iblogComment.save(blogComment);
        return comment;
    }

    @Override
    public Comment replyComment(Users users,Blog blog, ReplyCommentDTO commentDTO) {
        BlogComment blogComment = new BlogComment();
        Comment parent= commentRepository.findById(commentDTO.getParent_id()).orElse(null);
        if (parent==null)
        {
            return null;
        }
        Comment comment = new Comment();
        comment.setUsers(users);
        comment.setCreatedAt(new Date());
        comment.setContent(commentDTO.getContent());
        comment.setParentComment(parent);
        commentRepository.save(comment);
        blogComment.setComment(comment);
        blogComment.setBlog(blog);
        iblogComment.save(blogComment);
        return comment;
    }

    @Override
    public List<Comment> findAllByBlog(Users users,Blog blog) {
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

    @Override
    public Integer deleteComment(Users users, BigInteger comment) {
        Comment comment1 = commentRepository.findById(comment).orElse(null);
        if (comment1==null)
        {return 2;}
        BlogComment blogComment = iblogComment.findAllByComment(comment1);
        if ((blogComment.getBlog().getUser().getId().equals(users.getId())) || blogComment.getComment().getUsers().getId().equals(users.getId()) || users.getRole().equals("ADMIN"))
        {
            deleteAllChildComments(comment1);
            iblogComment.delete(blogComment);
            commentRepository.delete(comment1);
            return 1;
        }
        return 0;
    }
    private void deleteAllChildComments(Comment parentComment) {
        List<Comment> childComments = commentRepository.findByParentComment(parentComment);

        for (Comment childComment : childComments) {
            // Đệ quy để xóa tất cả các bình luận con
            deleteAllChildComments(childComment);
            // Xóa bình luận con
            BlogComment childBlogComment = iblogComment.findAllByComment(childComment);
            iblogComment.delete(childBlogComment);
            commentRepository.delete(childComment);
        }
    }

}
