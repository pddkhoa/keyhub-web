package com.example.Keyhub.controller.Chat;

import com.example.Keyhub.data.dto.request.GroupChatRequest;
import com.example.Keyhub.data.dto.request.SigleChatRequestDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.chat.Chat;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IChatService;
import com.example.Keyhub.service.IUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping("/api/chat")
public class ChatController {
    final
    IUserService userService;
    final
    IChatService chatService;
    final
    IUserRepository userRepository;
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }

    public ChatController(IUserService userService, IChatService chatService, IUserRepository userRepository) {
        this.userService = userService;
        this.chatService = chatService;
        this.userRepository = userRepository;
    }
    @PostMapping("/single")
    public ResponseEntity<GenericResponse> createChatHanlde(@RequestBody SigleChatRequestDTO SigleChatRequest)
    {
        if (userService.exitUser(SigleChatRequest.getUser_id()))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found User")
                            .build()
                    );
        }
        Users users = userRepository.findUsersById(SigleChatRequest.getUser_id());
        Chat chat = chatService.createChat(getUserFromAuthentication(),users.getId(),false);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(chat)
                        .statusCode(HttpStatus.OK.value())
                        .message("Create chat success")
                        .build()
                );
    }
    @PostMapping("/group")
    public ResponseEntity<GenericResponse> createChatGroupHanlde(@RequestBody GroupChatRequest groupChatRequest)
    {
        List<String> errors = groupChatRequest.validateAndGetErrors();
        if (!errors.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message(errors.get(0))
                            .build()
                    );
        }
        Chat chat = chatService.createGroup(groupChatRequest,getUserFromAuthentication());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(chat)
                        .statusCode(HttpStatus.OK.value())
                        .message("Create chat success")
                        .build()
                );
    }
    @GetMapping("/{chat_id}")
    public ResponseEntity<GenericResponse> findChatById(@PathVariable Long chat_id)
    {
       Chat chat = chatService.findChatByID(chat_id);
       if (chat==null)
       {
           return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                   .body(GenericResponse.builder()
                           .success(false)
                           .statusCode(HttpStatus.BAD_REQUEST.value())
                           .message("Not found chat")
                           .build()
                   );
       }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(chat)
                        .statusCode(HttpStatus.OK.value())
                        .message("Create chat success")
                        .build()
                );
    }
    @GetMapping("/user")
    public ResponseEntity<GenericResponse> findChatById()
    {
        List<Chat> Listchat = chatService.findAllChatByUserID(getUserFromAuthentication().getId());
        if (Listchat.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("User not have chat")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(Listchat)
                        .statusCode(HttpStatus.OK.value())
                        .message("List chat User")
                        .build()
                );
    }
    @PutMapping("/{chatId}/add/{userId}")
    ResponseEntity<GenericResponse> addUserToGroup(@PathVariable BigInteger userId, @PathVariable Long chatId)
    {
        return chatService.addUserToGroup(getUserFromAuthentication(),userId,chatId);
    }
    @PutMapping("/{chatId}/remove/{userId}")
    ResponseEntity<GenericResponse> removeUserToGroup(@PathVariable BigInteger userId, @PathVariable Long chatId)
    {
        return chatService.removeFromGroup(chatId,userId,getUserFromAuthentication());
    }
    @Transactional
    @DeleteMapping("/delete/{chatId}")
    public ResponseEntity<GenericResponse> deleteChat(@PathVariable Long chatId)
    {
        return chatService.deleteChat(chatId,getUserFromAuthentication());
    }
    @PostMapping("/search/{keyword}")
    public ResponseEntity<GenericResponse> searchUserFollowToChat(@PathVariable String keyword)
    {
        List<UserResponseDTO> userResponseDTOS = userService.findFriend(keyword,getUserFromAuthentication());
        if (userResponseDTOS.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("User not follow any user name like " + keyword)
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(userResponseDTOS)
                        .statusCode(HttpStatus.OK.value())
                        .message("List User")
                        .build()
                );
    }
}
