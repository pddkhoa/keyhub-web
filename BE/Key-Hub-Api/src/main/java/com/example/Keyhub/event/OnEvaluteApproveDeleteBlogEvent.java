package com.example.Keyhub.event;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.ApplicationEvent;

@Getter
@Setter
public class OnEvaluteApproveDeleteBlogEvent extends ApplicationEvent {
    private Blog blog;
    private String  reason;

    public OnEvaluteApproveDeleteBlogEvent(Blog blog) {
        super(blog);
        this.blog = blog;
    }

}
