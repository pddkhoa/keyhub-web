package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.response.NotifycationResponseDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Notification.Notification;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

import java.math.BigInteger;
import java.util.List;

public interface INotificationService {
    Notification save(Notification notification);
    void notifyComment(Blog blog, Users users);
    void notifyFollow(Users usersFollower, BigInteger usersIsFollowed);
    void notifyLike(Blog blog, Users users);
    List<NotifycationResponseDTO> listNotificationRecipient( int index, Users users);
    void checkIsRead(BigInteger notification);
    boolean exitNotifycation(BigInteger notification);

}
