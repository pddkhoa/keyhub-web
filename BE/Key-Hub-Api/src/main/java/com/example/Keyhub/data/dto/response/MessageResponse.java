package com.example.Keyhub.data.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class MessageResponse {
    private Long id;
    private LocalDateTime timestamp;
    private BigInteger user_create;
    private Long chat_id;
    private String content;
}
