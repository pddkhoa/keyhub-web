package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.SendMessReQuest;
import com.example.Keyhub.data.dto.response.MessageResponse;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.chat.Chat;
import com.example.Keyhub.data.entity.chat.Message;
import com.example.Keyhub.data.repository.IChatRepository;
import com.example.Keyhub.data.repository.IMessageRepository;
import com.example.Keyhub.service.IChatService;
import com.example.Keyhub.service.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class MessageServiceImpl implements IMessageService{
    final
    IMessageRepository messageRepository;
    final
    IUserService userService;
    final
    IChatService chatService;
    final
    IChatRepository chatRepository;

    public MessageServiceImpl(IMessageRepository messageRepository, IUserService userService, IChatService chatService, IChatRepository chatRepository) {
        this.messageRepository = messageRepository;
        this.userService = userService;
        this.chatService = chatService;
        this.chatRepository = chatRepository;
    }
    public MessageResponse mapMessageToMessageResponse(Message message) {
        MessageResponse response = new MessageResponse();
        response.setId(message.getId());
        response.setUser_create(message.getUsers().getId());
        response.setTimestamp(message.getTimestamp());
        response.setContent(message.getContent());
        response.setChat_id(message.getChat().getId());
        return response;
    }
    public boolean checkInChat(Long chat_id, BigInteger user_id) {
        boolean check = false;
        Chat chat = chatRepository.findById(chat_id).orElse(null);
        if (chat != null) {
            Set<Users> usersCheck = chat.getUsers();
            for (Users userCheck : usersCheck) {
                if (userCheck.getId().equals(user_id)) {
                   check = true;
                   break;
                }
            }
        }
        return check;
    }
    @Override
    public MessageResponse sendMessage(SendMessReQuest req, Users users) {
        Chat chat = chatService.findChatByID(req.getChat_id());
        Message newMessage = new Message();
        newMessage.setChat(chat);
        newMessage.setUsers(users);
        newMessage.setContent(req.getContent());
        newMessage.setTimestamp(LocalDateTime.now());
        messageRepository.save(newMessage);
        return mapMessageToMessageResponse(newMessage);
    }
    @Override
    public ResponseEntity<GenericResponse> getChatMessage(Long chat_id, Users user_request) {
        Chat chat= chatService.findChatByID(chat_id);
        if (checkInChat(chat_id,user_request.getId())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.UNAUTHORIZED.value())
                            .message("You haven't related to this chat")
                            .build()
                    );
        }
        List<Message> messages = messageRepository.findByChat(chat.getId());
        List<MessageResponse> messageResponses = new ArrayList<>();
        for (Message message : messages)
        {
            MessageResponse messageResponse = mapMessageToMessageResponse(message);
            messageResponses.add(messageResponse);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(messageResponses)
                        .statusCode(HttpStatus.OK.value())
                        .message("That all message in this chat")
                        .build()
                );
    }

    @Override
    public Message findMessageById(Long message_id) {
        Optional<Message> opt = messageRepository.findById(message_id);
        return opt.orElse(null);
    }

    @Override
    public boolean deleteMessage(Long message_id, Users req) {
        Message message = findMessageById(message_id);
        boolean checkAdmin =false;
        Chat chat = chatRepository.findById(message.getChat().getId()).orElse(null);
        if (chat.isGroup())
        {
            Set<Users> admins = chat.getAdmins();
            for (Users admin : admins) {
                if (admin.getId().equals(req.getId())) {
                    checkAdmin=true;
                    break;
                }
            }
            if (checkAdmin)
            {
                messageRepository.delete(message);
                return true;
            }
            else
            {
                return false;
            }
        }

        if (message.getUsers().getId().equals(req.getId()))
        {
            messageRepository.delete(message);
            return true;
        }
        return false;
    }
}
