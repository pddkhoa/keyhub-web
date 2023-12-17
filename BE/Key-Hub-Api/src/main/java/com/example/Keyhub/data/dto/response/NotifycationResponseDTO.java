package com.example.Keyhub.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NotifycationResponseDTO {
    private BigInteger id;
    private UserResponseDTO sender;
    private BlogDTO targetBlog;
    private String content;
    private Boolean isRead;

}
