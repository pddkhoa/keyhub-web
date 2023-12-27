package com.example.Keyhub.data.dto.request;

import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Getter
@Setter
public class ReportCommentDTO {
    private BigInteger comment_id ;
    private String reason;
}
