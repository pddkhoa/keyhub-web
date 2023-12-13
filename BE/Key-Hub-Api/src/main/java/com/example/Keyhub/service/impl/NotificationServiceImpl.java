//package com.example.Keyhub.service.impl;
//
//import com.example.Keyhub.data.entity.Notification.Notification;
//import com.example.Keyhub.data.repository.INotificationRepository;
//import com.example.Keyhub.service.INotificationService;
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.springframework.messaging.simp.SimpMessagingTemplate;
//import org.springframework.stereotype.Service;
//
//@Service
//public class NotificationServiceImpl implements INotificationService {
//    private final SimpMessagingTemplate messagingTemplate;
//    private final INotificationRepository notificationRepository;
//
//    public NotificationServiceImpl(SimpMessagingTemplate messagingTemplate, INotificationRepository notificationRepository) {
//        this.messagingTemplate = messagingTemplate;
//        this.notificationRepository = notificationRepository;
//    }
//
//    //    @Override
////    public void sendNotification(Notification notification) {
////        notificationRepository.save(notification);
////        messagingTemplate.convertAndSend("/topic/notifications", notification);
////    }
//    @Override
//    public void sendNotification(Notification notification) {
//        notificationRepository.save(notification);
//
//        // Chuyển đối tượng thông báo thành chuỗi JSON và gửi đến tất cả các clients đang kết nối
//        messagingTemplate.convertAndSend("/topic/notifications", toJsonString(notification));
//    }
//
//    private String toJsonString(Notification notification) {
//        // Chuyển đối tượng thành chuỗi JSON
//        ObjectMapper objectMapper = new ObjectMapper();
//        try {
//            return objectMapper.writeValueAsString(notification);
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//            return "";
//        }
//    }
//}
