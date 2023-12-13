package com.example.Keyhub.event;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.service.IEmailService;
import com.example.Keyhub.service.IUserService;
import lombok.extern.log4j.Log4j2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.util.Random;

@Component
@Log4j2
public class RegistrationListener implements
        ApplicationListener<OnRegistrationCompleteEvent> {

    final Logger logger = LoggerFactory.getLogger(RegistrationListener.class);
    @Autowired
    private IUserService service;

    @Autowired
    private IEmailService emailService;

    @Override
    public void onApplicationEvent(OnRegistrationCompleteEvent event) {
        this.confirmRegistration(event);
    }

    private void confirmRegistration(OnRegistrationCompleteEvent event) {
        Users user = event.getUser();
        String token = String.valueOf(new Random().nextInt(900000) + 100000);
        service.createVerificationToken(user, token);
        emailService.sendVerifyEmail(user.getEmail(), token);
    }

}
