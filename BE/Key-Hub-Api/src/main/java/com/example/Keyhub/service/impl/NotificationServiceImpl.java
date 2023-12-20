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
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Comparator;
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
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    @Override
    public void notifyComment(Blog blog, Users users) {
        Notification notification = new Notification();
        notification.setRecipient(blog.getUser());
        notification.setSender(users);
        notification.setTargetBlog(blog);
        notification.setIsRead(false);
        notification.setCreateDate(timestamp);
        notification.setType(TypeNotification.COMMENT);
        save(notification);
    }

    @Override
    public void notifyFollow(Users usersFollower, BigInteger usersIsFollowed) {
        Users userisFollowed = userService.findByID(usersIsFollowed);
        Notification notification = new Notification();
        notification.setRecipient(userisFollowed);
        notification.setSender(usersFollower);
        notification.setIsRead(false);
        notification.setCreateDate(timestamp);
        notification.setType(TypeNotification.FOLLOW);
        save(notification);
    }

    @Override
    public void notifyLike(Blog blog, Users users) {
        Notification notification = new Notification();
        notification.setRecipient(blog.getUser());
        notification.setSender(users);
        notification.setTargetBlog(blog);
        notification.setIsRead(false);
        notification.setCreateDate(timestamp);
        notification.setType(TypeNotification.LIKE);
        save(notification);
    }

    @Override
    public void notifyDelete(Blog blog, Users users) {
        Notification notification = new Notification();
        notification.setRecipient(blog.getUser());
        notification.setSender(users);
        notification.setTargetBlog(blog);
        notification.setIsRead(false);
        notification.setCreateDate(timestamp);
        notification.setType(TypeNotification.DELETE_POST);
        save(notification);
    }

    @Override
    public List<NotifycationResponseDTO> listNotificationRecipient(int index, Users users) {
        List<Notification> list = notificationRepository.findByRecipient(users);
        list.sort(Comparator.comparing(Notification::getCreateDate).reversed());
        int itemsPerPage = 5;
        int startIndex = (index - 1) * itemsPerPage;
        List<Notification> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, list.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(list.get(i));
        }

        List<NotifycationResponseDTO> userResponseDTOs = new ArrayList<>();
        if (!list.isEmpty())
        {
            userResponseDTOs = result.stream()
                    .map(notification -> {
                        NotifycationResponseDTO notifycationResponseDTO = new NotifycationResponseDTO();
                        notifycationResponseDTO.setSender(generalService.createUserResponse(notification.getSender()));
                        notifycationResponseDTO.setId(notification.getId());
                        notifycationResponseDTO.setIsRead(notification.getIsRead());
                        notifycationResponseDTO.setCreate_date(notification.getCreateDate());
                        if (notification.getTargetBlog()!=null){
                        notifycationResponseDTO.setTargetBlog(generalService.createBlogDTO(users,notification.getTargetBlog()));}
                        notifycationResponseDTO.setType(notification.getType().getValue());
                        return notifycationResponseDTO;
                    })
                    .collect(Collectors.toList());

        }
        return userResponseDTOs;
    }

    @Override
    public void checkIsRead(BigInteger notification) {
        Notification notification1 = notificationRepository.findById(notification).orElse(null);
        notification1.setIsRead(true);
        notificationRepository.save(notification1);
    }

    @Override
    public boolean exitNotifycation(BigInteger notification) {
        return notificationRepository.existsById(notification);
    }

    @Override
    public void deleteNotifycation(Users users, Blog blog) {
        TypeNotification type = TypeNotification.LIKE;
        Notification notification = notificationRepository.findBySenderAndTargetBlogAndType(users,blog,type);
        notificationRepository.delete(notification);
    }
}
