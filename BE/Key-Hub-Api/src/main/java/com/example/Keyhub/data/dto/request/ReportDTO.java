package com.example.Keyhub.data.dto.request;

import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
@Getter
@Setter
public class ReportDTO {
    private BigInteger blog_id;
    private String reason;
}
