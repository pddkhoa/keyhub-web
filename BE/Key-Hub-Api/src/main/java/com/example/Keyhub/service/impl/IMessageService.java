package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.SendMessReQuest;
import com.example.Keyhub.data.dto.response.MessageResponse;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.chat.Message;
import org.springframework.http.ResponseEntity;

public interface IMessageService {
    MessageResponse sendMessage(SendMessReQuest req, Users users);
    ResponseEntity<GenericResponse> getChatMessage(Long chat_id, Users user_request);
    Message findMessageById(Long message_id);
    boolean deleteMessage(Long message_id, Users req);
}
