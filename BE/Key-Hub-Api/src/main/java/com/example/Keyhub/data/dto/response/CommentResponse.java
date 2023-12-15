package com.example.Keyhub.data.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.util.Date;

@Getter
@Setter
public class CommentResponse {
    private BigInteger id;
    private String content;
    private UserResponseDTO users;
    private Date createdAt;
}
