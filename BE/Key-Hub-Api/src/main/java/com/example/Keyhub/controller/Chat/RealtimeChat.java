package com.example.Keyhub.controller.Chat;

import com.example.Keyhub.data.entity.chat.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin("*")
@RestController
public class RealtimeChat {

    @Autowired
    private final SimpMessagingTemplate simpMessagingTemplate;

    public RealtimeChat(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }
    @MessageMapping("/message")
    @SendTo("/topic/public")
    public Message reciveMessage(@Payload Message message)
    {
        simpMessagingTemplate.convertAndSend("/topic/"+message.getChat().getId().toString(),message);
        return message;
    }
}