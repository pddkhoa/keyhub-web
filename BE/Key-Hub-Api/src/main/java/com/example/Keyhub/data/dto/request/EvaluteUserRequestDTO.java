package com.example.Keyhub.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class  EvaluteUserRequestDTO {
    private BigInteger report_id;
    private boolean value;
    private String reason;
}
