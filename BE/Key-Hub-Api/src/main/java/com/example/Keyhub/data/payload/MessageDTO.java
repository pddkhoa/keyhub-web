package com.example.Keyhub.data.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
import java.time.LocalDateTime;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MessageDTO {
    private BigInteger receiverId;        // ID của người nhận tin nhắn
    private String content;         // Nội dung tin nhắn
}
