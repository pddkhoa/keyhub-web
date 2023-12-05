package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.GroupChatRequest;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.chat.Chat;
import com.example.Keyhub.data.repository.IChatRepository;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.service.IChatService;
import com.example.Keyhub.service.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ChatServiceImpl implements IChatService {
    final
    IChatRepository chatRepository;
    final
    IUserService userService;
    final
    IUserRepository userRepository;

    public ChatServiceImpl(IChatRepository chatRepository, IUserService userService, IUserRepository userRepository) {
        this.chatRepository = chatRepository;
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @Override
    public Chat createChat(Users userCreate, BigInteger userIsCraeted, boolean isGroup) {
        Users users = userRepository.findUsersById(userIsCraeted);

        Chat isChatExit= chatRepository.findSigleChatByUserId(users,userCreate);
        if (isChatExit!=null)
        {
            return isChatExit;
        }
        Chat newChat = new Chat();
        newChat.setCreatedBy(userCreate);
        newChat.getUsers().add(users);
        newChat.getUsers().add(userCreate);
        newChat.setGroup(false);
        chatRepository.save(newChat);
    return newChat;
    }

    @Override
    public Chat findChatByID(Long chat_id) {
       Optional<Chat> chat = chatRepository.findById(chat_id);
        return chat.orElse(null);
    }

    @Override
    public List<Chat> findAllChatByUserID(BigInteger User) {
        Users user = userRepository.findById(User).orElse(null);
        return chatRepository.findChatByUsers(user);
    }

    @Override
    public Chat createGroup(GroupChatRequest chatRequest, Users user) {
        Chat group = new Chat();
        group.setGroup(true);
        group.setChat_image(chatRequest.getChat_image());
        group.setChat_name(chatRequest.getChat_name());
        group.setCreatedBy(user);
        group.getAdmins().add(user);
        group.getUsers().add(user);
        for (BigInteger user_id : chatRequest.getUser_id())
        {
            Users users = userRepository.findUsersById(user_id);
            group.getUsers().add(users);
        }
        chatRepository.save(group);
        return group;
    }
    @Override
    public ResponseEntity<GenericResponse> addUserToGroup(Users user, BigInteger user_id, Long group_id) {
        if(!userService.exitUser(user_id)){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found user")
                            .build()
                    );
        }
        Chat chat = chatRepository.findById(group_id).orElse(null);
        if (chat!=null) {
            Set<Users> usersCheck = chat.getUsers();
            for (Users userCheck : usersCheck) {
                if(userCheck.getId().equals(user_id))
                {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                            .body(GenericResponse.builder()
                                    .success(false)
                                    .statusCode(HttpStatus.BAD_REQUEST.value())
                                    .message("User has been added")
                                    .build()
                            );
                }
            }
            Set<Users> admins = chat.getAdmins();
            for (Users admin : admins) {
                if (admin.getId().equals(user.getId())) {
                Users users = userRepository.findUsersById(user_id);
                chat.getUsers().add(users);
                chatRepository.save(chat);
                return ResponseEntity.status(HttpStatus.OK)
                        .body(GenericResponse.builder()
                                .success(true)
                                .result(chat)
                                .statusCode(HttpStatus.OK.value())
                                .message("Add User success to group")
                                .build()
                        );
            }
            }

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.UNAUTHORIZED.value())
                            .message("You are not admin")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .message("Not found chat")
                        .build()
                );
    }

    @Override
    public ResponseEntity<GenericResponse> renameGroup(Long chat_id, String groupName, Users user) {
        Optional<Chat> opt = chatRepository.findById(chat_id);
        if (opt.isPresent())
        {
            Chat chat = opt.get();
            if (chat.getUsers().contains(user))
            {
                chat.setChat_name(groupName);
                chatRepository.save(chat);
                return ResponseEntity.status(HttpStatus.OK)
                        .body(GenericResponse.builder()
                                .success(true)
                                .statusCode(HttpStatus.OK.value())
                                .result(chat)
                                .message("Rename group success")
                                .build()
                        );
            }
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.UNAUTHORIZED.value())
                            .message("User not a member in this group")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.BAD_GATEWAY)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_GATEWAY.value())
                        .message("Not found chat")
                        .build()
                );
    }

    @Override
    public ResponseEntity<GenericResponse> removeFromGroup(Long chat_id, BigInteger user_id, Users user_request) {
        Chat chat = chatRepository.findById(chat_id).orElse(null);
        if (chat!=null) {
            Set<Users> usersCheck = chat.getUsers();
            boolean check = false;
            for (Users userCheck : usersCheck) {
                if (userCheck.getId().equals(user_id)) {
                    check = true;
                    break;
                }
            }
            if (!check)
            {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body(GenericResponse.builder()
                                .success(false)
                                .statusCode(HttpStatus.BAD_REQUEST.value())
                                .message("User not in chat")
                                .build()
                        );
            }
            Users userToRemove = null;
            if (user_id.equals(user_request.getId())){
            for (Users userCheck : usersCheck) {
                if (userCheck.getId().equals(user_request.getId())) {
                    userToRemove = userCheck;
                    break;
                }
            }
            if (userToRemove != null) {
                chat.getUsers().remove(userToRemove);
                chatRepository.save(chat);
                return ResponseEntity.status(HttpStatus.OK)
                        .body(GenericResponse.builder()
                                .success(true)
                                .result(chat)
                                .statusCode(HttpStatus.OK.value())
                                .message("User has been removed from the group")
                                .build()
                        );
            }}
            Set<Users> admins = chat.getAdmins();
            for (Users admin : admins){
            if (admin.getId().equals(user_request.getId())) {
                for (Users userCheck : usersCheck) {
                    if (userCheck.getId().equals(user_id)) {
                        userToRemove = userCheck;
                        break;
                    }
                }
                chat.getUsers().remove(userToRemove);
                chatRepository.save(chat);
                return ResponseEntity.status(HttpStatus.OK)
                        .body(GenericResponse.builder()
                                .success(true)
                                .result(chat)
                                .statusCode(HttpStatus.OK.value())
                                .message("Delete User success to group")
                                .build()
                        );
            }}
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.UNAUTHORIZED.value())
                            .message("You are not admin")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .message("Not found chat")
                        .build()
                );
    }
    public void removeFromGroupAdmin(Long chat_id, BigInteger user_id, Users user_request) {
        Chat chat = chatRepository.findById(chat_id).orElse(null);
        if (chat!=null) {
            Set<Users> usersCheck = chat.getUsers();
            boolean check = false;
            for (Users userCheck : usersCheck) {
                if (userCheck.getId().equals(user_id)) {
                    check = true;
                    break;
                }
            }
            Users userToRemove = null;
            if (user_id.equals(user_request.getId())){
                for (Users userCheck : usersCheck) {
                    if (userCheck.getId().equals(user_request.getId())) {
                        userToRemove = userCheck;
                        break;
                    }
                }
                if (userToRemove != null) {
                    chat.getUsers().remove(userToRemove);
                    chatRepository.save(chat);
                }}
            Set<Users> admins = chat.getAdmins();
            for (Users admin : admins){
                if (admin.getId().equals(user_request.getId())) {
                    for (Users userCheck : usersCheck) {
                        if (userCheck.getId().equals(user_id)) {
                            userToRemove = userCheck;
                            break;
                        }
                    }
                    chat.getUsers().remove(userToRemove);
                    chatRepository.save(chat);
                }}
        }
    }
    @Transactional
    public void deleteChat(Chat chat)
    {
        chatRepository.delete(chat);
    }

    @Override
    public ResponseEntity<GenericResponse> deleteChat(Long chat_id, Users user_request) {
        Chat chat = chatRepository.findById(chat_id).orElse(null);
        if (chat!=null)
        {
            if (!chat.isGroup()) {
                removeFromGroup(chat_id,user_request.getId(),user_request);
                chatRepository.delete(chat);
                return ResponseEntity.status(HttpStatus.OK)
                        .body(GenericResponse.builder()
                                .success(true)
                                .statusCode(HttpStatus.OK.value())
                                .message("Delete chat success")
                                .build()
                        );
            }
            else
            {
                if (chat.getAdmins().contains(user_request))
                {
                    chatRepository.delete(chat);
                    return ResponseEntity.status(HttpStatus.OK)
                            .body(GenericResponse.builder()
                                    .success(true)
                                    .statusCode(HttpStatus.OK.value())
                                    .message("Delete chat success")
                                    .build()
                            );
                }
                else
                {
                    return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                            .body(GenericResponse.builder()
                                    .success(false)
                                    .statusCode(HttpStatus.UNAUTHORIZED.value())
                                    .message("You not have permision")
                                    .build()
                            );
                }
            }
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .message("Not found chat")
                        .build()
                );
    }
}
