package com.example.Keyhub.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NotifycationResponseDTO {
    private BigInteger id;
    private UserResponseDTO sender;
    private BlogDTO targetBlog;
    private String type;
    private Boolean isRead;
    private Timestamp create_date;

}
