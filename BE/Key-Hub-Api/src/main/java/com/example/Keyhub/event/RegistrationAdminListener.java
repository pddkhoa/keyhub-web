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
public class RegistrationAdminListener implements
        ApplicationListener<OnRegistrationAdminCompleteEvent> {

    @Autowired
    private IUserService service;

    @Autowired
    private IEmailService emailService;


    private void confirmRegistration(OnRegistrationAdminCompleteEvent event) {
        Users user = event.getUser();
        emailService.sendNoticationsEmail(user.getEmail());
    }

    @Override
    public void onApplicationEvent(OnRegistrationAdminCompleteEvent event) {
        this.confirmRegistration(event);
    }
}
