package com.example.Keyhub.data.payload.respone;

import com.example.Keyhub.data.dto.response.UserResponseDTO;
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
public class MessageResponseDTO {
    private UserResponseDTO sender;
    private UserResponseDTO receiver;
    private String content;
    private LocalDateTime sentDay;
}
