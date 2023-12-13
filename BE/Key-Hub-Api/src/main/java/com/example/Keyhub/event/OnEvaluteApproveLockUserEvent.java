package com.example.Keyhub.event;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;

@Getter
@Setter
public class OnEvaluteApproveLockUserEvent extends ApplicationEvent {
    private Users user;
    private String  reason;

    public OnEvaluteApproveLockUserEvent(Users user, String reason) {
        super(user);
        this.user = user;
        this.reason=reason;
    }

}
