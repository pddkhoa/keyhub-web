package com.example.Keyhub.data.dto.response;

import com.example.Keyhub.data.dto.request.UserDTO;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.sql.Timestamp;

@Getter
@Setter
public class ReportResponseDTO {
    private BigInteger id;
    private BigInteger blog_id;
    private UserResponseDTO user;
    private String reason;
    private Timestamp create_at;
}
