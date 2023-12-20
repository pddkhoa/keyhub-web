package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Notification.Notification;
import com.example.Keyhub.data.entity.Notification.TypeNotification;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface INotificationRepository extends JpaRepository<Notification, BigInteger> {
    List<Notification> findByRecipient(Users users);
    List<Notification> findByTargetBlog(Blog blog);
    boolean existsById(BigInteger id);
    Notification findBySenderAndTargetBlogAndType(Users sender, Blog targetBlog, TypeNotification type);
}
