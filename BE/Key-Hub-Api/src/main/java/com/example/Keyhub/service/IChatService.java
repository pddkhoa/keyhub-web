package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.GroupChatRequest;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.chat.Chat;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;
public interface IChatService {
    Chat createChat(Users userCreate , BigInteger userIsCraeted, boolean isGroup) ;

    Chat findChatByID(Long chat_id);
    List<Chat> findAllChatByUserID(BigInteger User);
    Chat createGroup(GroupChatRequest chatRequest, Users user_id);
    ResponseEntity<GenericResponse> addUserToGroup(Users user, BigInteger user_id, Long group_id);
    ResponseEntity<GenericResponse> renameGroup(Long chat_id, String groupName, Users user_id);
    ResponseEntity<GenericResponse> removeFromGroup(Long chat_id, BigInteger user_id, Users user_request);
    ResponseEntity<GenericResponse> deleteChat(Long chat_id,Users user_request);
}
