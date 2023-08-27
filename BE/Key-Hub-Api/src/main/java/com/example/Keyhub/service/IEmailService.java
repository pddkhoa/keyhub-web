package com.example.Keyhub.service;

import org.springframework.stereotype.Service;

public interface IEmailService {
    void sendVerifyEmail(String email, String token);

    void sendResetPassword(String email, String code);
}
