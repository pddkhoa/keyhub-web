package com.example.Keyhub.event;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.service.IEmailService;
import com.example.Keyhub.service.IUserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class EvaluteUserListener implements
        ApplicationListener<OnEvaluteApproveEvent> {

    @Autowired
    private IUserService service;

    @Autowired
    private IEmailService emailService;


    private void evaluteUser(OnEvaluteApproveEvent event) {
        Users user = event.getUser();
        String reason = event.getReason();
        emailService.sendToWarningUser(reason,user.getEmail());
    }

    @Override
    public void onApplicationEvent(OnEvaluteApproveEvent event) {
        this.evaluteUser(event);
    }

}
