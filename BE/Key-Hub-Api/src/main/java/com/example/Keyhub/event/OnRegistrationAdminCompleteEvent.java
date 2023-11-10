package com.example.Keyhub.event;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;

@Getter
@Setter
public class OnRegistrationAdminCompleteEvent extends ApplicationEvent {
    private Users user;

    public OnRegistrationAdminCompleteEvent(Users user) {
        super(user);
        this.user = user;
    }

}
