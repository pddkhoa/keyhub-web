package com.example.Keyhub.event;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.service.IEmailService;
import com.example.Keyhub.service.IUserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class DeleteBlogListener implements
        ApplicationListener<OnEvaluteApproveDeleteBlogEvent> {

    @Autowired
    private IUserService service;

    @Autowired
    private IEmailService emailService;


    private void evaluteUser(OnEvaluteApproveDeleteBlogEvent event) {
        Blog blog = event.getBlog();
        emailService.sendNoticationsDeleteBLog(blog.getUser().getEmail(),blog.getTitle());
    }

    @Override
    public void onApplicationEvent(OnEvaluteApproveDeleteBlogEvent event) {
        this.evaluteUser(event);
    }
}
