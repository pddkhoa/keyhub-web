package com.example.Keyhub.service;

import org.springframework.stereotype.Service;

public interface IEmailService {
    void sendVerifyEmail(String email, String token);

    void sendResetPassword(String email, String code);
    void sendNoticationsEmail(String email);
    void sendNoticationsDeleteBLog(String email, String name);
    void sendToWarningUser(String reason,String email);
    void sendNotificationToBlockAccount(String reason ,String email);
}
