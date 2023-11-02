package com.example.Keyhub.controller.Chat;

import com.example.Keyhub.data.entity.chat.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;


public class RealtimeChat {
    private final SimpMessagingTemplate simpMessagingTemplate;

    public RealtimeChat(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @MessageMapping("/message")
    @SendTo("/group/public")
    public Message reciveMessage(@Payload Message message)
    {
        simpMessagingTemplate.convertAndSend("/group"+message.getChat().getId().toString(),message);
        return message;
    }
}
