package com.example.Keyhub.controller.exception;


import com.example.Keyhub.data.exception.CustomExceptionRuntime;
import com.example.Keyhub.data.payload.ExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class RestApiException {
    @ExceptionHandler
    public ResponseEntity<ExceptionResponse> catchExceptionResponse(CustomExceptionRuntime ex) {
        ExceptionResponse response =
                new ExceptionResponse(ex.getCode(), ex.getMessage(), System.currentTimeMillis());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }


}
