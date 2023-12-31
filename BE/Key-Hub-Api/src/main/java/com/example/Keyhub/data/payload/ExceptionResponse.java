package com.example.Keyhub.data.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExceptionResponse {
    private int code;
    private String message;
    private long timestamp;
}
