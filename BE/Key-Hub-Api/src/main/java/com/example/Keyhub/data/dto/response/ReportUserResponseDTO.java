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
public class ReportUserResponseDTO {
    private BigInteger id;
    private UserResponseDTO user_report;
    private UserResponseDTO user_is_reported;
    private String reason;
    private boolean statusReport;
    private Timestamp create_at;
    private int sumViolating;
}
