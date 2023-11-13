package com.example.Keyhub.service;

import com.example.Keyhub.data.entity.Notification.Notification;

public interface INotificationService {
    void sendNotification(Notification notification);
}
