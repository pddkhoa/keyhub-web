package com.example.Keyhub.controller;

import com.example.Keyhub.controller.exception.TokenRefreshException;
import com.example.Keyhub.data.payload.respone.ErrorMessageResponse;
import org.modelmapper.spi.ErrorMessage;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@RestControllerAdvice
    public class TokenRefreshExceptionHandler {

        @ExceptionHandler(value = TokenRefreshException.class)
        @ResponseStatus(HttpStatus.FORBIDDEN)
        public ErrorMessageResponse handleTokenRefreshException(TokenRefreshException ex, WebRequest request) {
            ErrorMessageResponse errorMessage = new ErrorMessageResponse();
            errorMessage.setStatusCode(HttpStatus.FORBIDDEN.value());
            errorMessage.setTimestamp(new Date());
            errorMessage.setMessage(ex.getMessage());
            errorMessage.setDescription(request.getDescription(false));
            return errorMessage;
        }
    }




