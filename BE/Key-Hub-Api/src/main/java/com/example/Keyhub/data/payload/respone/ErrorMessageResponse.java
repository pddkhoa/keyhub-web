package com.example.Keyhub.data.payload.respone;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class ErrorMessageResponse {
    private int statusCode;
    private Date timestamp;
    private String message;
    private String description;

}
