package com.example.Keyhub.data.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.sql.Timestamp;

@Getter
@Setter
public class ReportCommentResponseDTO {
    private BigInteger id;
    private CommentResponse comment_id;
    private UserResponseDTO user_reported;
    private String reason;
    private Timestamp create_at;
}
