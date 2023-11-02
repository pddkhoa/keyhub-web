package com.example.Keyhub.controller.Chat;

import com.example.Keyhub.data.dto.request.SendMessReQuest;
import com.example.Keyhub.data.dto.response.MessageResponse;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.chat.Message;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IUserService;
import com.example.Keyhub.service.impl.IMessageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/api/message")
public class MessageController {
    final
    IMessageService messageService;
    final
    ModelMapper modelMapper;
    final
    IUserService userServicel;
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }

    public MessageController(IMessageService messageService, IUserService userServicel, ModelMapper modelMapper) {
        this.messageService = messageService;
        this.userServicel = userServicel;
        this.modelMapper = modelMapper;
    }
    @PostMapping("/create")
    ResponseEntity<GenericResponse> sendMessage(@RequestBody SendMessReQuest sendMessRequest)
    {
        List<String> errors = sendMessRequest.validateAndGetErrors();
        if (!errors.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message(errors.get(0))
                            .build()
                    );
        }
        MessageResponse message = messageService.sendMessage(sendMessRequest, getUserFromAuthentication());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(message)
                        .statusCode(HttpStatus.OK.value())
                        .message("Send mess success to")
                        .build()
                );
    }
    @GetMapping("/chat/{chat_id}")
    ResponseEntity<GenericResponse> getChatMessage(@PathVariable Long chat_id)
    {
        return messageService.getChatMessage(chat_id,getUserFromAuthentication());
    }
    @Transactional
    @DeleteMapping("/{message_id}")
    public ResponseEntity<GenericResponse> deleteMessage(@PathVariable Long message_id)
    {
        boolean check= messageService.deleteMessage(message_id,getUserFromAuthentication());
        if (check==false)
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.UNAUTHORIZED.value())
                            .message("You have no permission to delete message")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .message("Delete success")
                        .build()
                );
    }



}
