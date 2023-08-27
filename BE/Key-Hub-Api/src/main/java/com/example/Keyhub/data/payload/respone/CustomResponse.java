package com.example.Keyhub.data.payload.respone;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CustomResponse {
    private int code;
    private String message;
    private long timestamp;
}
