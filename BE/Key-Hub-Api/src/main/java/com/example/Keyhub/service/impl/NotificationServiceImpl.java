package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.response.NotifycationResponseDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Notification.Notification;
import com.example.Keyhub.data.entity.Notification.TypeNotification;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.INotificationRepository;
import com.example.Keyhub.service.GeneralService;
import com.example.Keyhub.service.INotificationService;
import com.example.Keyhub.service.IUserService;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class NotificationServiceImpl implements INotificationService {
    final
    INotificationRepository notificationRepository;
    final
    GeneralService generalService;
    final
    IUserService userService;

    public NotificationServiceImpl(INotificationRepository notificationRepository, IUserService userService, GeneralService generalService) {
        this.notificationRepository = notificationRepository;
        this.userService = userService;
        this.generalService = generalService;
    }

    @Override
    public Notification save(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public void notifyComment(Blog blog, Users users) {
        Notification notification = new Notification();
        notification.setRecipient(blog.getUser());
        notification.setSender(users);
        notification.setTargetBlog(blog);
        notification.setIsRead(false);
        notification.setType(TypeNotification.COMMENT);
        notification.setContent(users.getName() + " commented on your post");
        save(notification);
    }

    @Override
    public void notifyFollow(Users usersFollower, BigInteger usersIsFollowed) {
        Users userisFollowed = userService.findByID(usersIsFollowed);
        Notification notification = new Notification();
        notification.setRecipient(userisFollowed);
        notification.setSender(usersFollower);
        notification.setTargetUser(userisFollowed);
        notification.setIsRead(false);
        notification.setType(TypeNotification.FOLLOW);
        notification.setContent(usersFollower.getName() + "is following you");
        save(notification);
    }

    @Override
    public void notifyLike(Blog blog, Users users) {
        Notification notification = new Notification();
        notification.setRecipient(blog.getUser());
        notification.setSender(users);
        notification.setTargetBlog(blog);
        notification.setIsRead(false);
        notification.setType(TypeNotification.LIKE);
        notification.setContent(users.getName() + " liked on your post");
        save(notification);
    }

    @Override
    public List<NotifycationResponseDTO> listNotificationRecipient(Users users) {
        List<Notification> list = notificationRepository.findByRecipient(users);
        List<NotifycationResponseDTO> userResponseDTOs = new ArrayList<>();
        if (!list.isEmpty())
        {
            userResponseDTOs = list.stream()
                    .map(notification -> {
                        NotifycationResponseDTO notifycationResponseDTO = new NotifycationResponseDTO();
                        notifycationResponseDTO.setSender(generalService.createUserResponse(notification.getSender()));
                        notifycationResponseDTO.setId(notification.getId());
                        notifycationResponseDTO.setIsRead(notification.getIsRead());
                        if (notification.getTargetBlog()!=null){
                        notifycationResponseDTO.setTargetBlog(generalService.createBlogDTO(users,notification.getTargetBlog()));}
                        notifycationResponseDTO.setContent(notification.getContent());
                        return notifycationResponseDTO;
                    })
                    .collect(Collectors.toList());

        }
        for(Notification n : list) {
            n.setIsRead(true);
        }
        notificationRepository.saveAll(list);
        return userResponseDTOs;
    }
}
