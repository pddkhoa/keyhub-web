package com.example.Keyhub.data.entity.Notification;

import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigInteger;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "notification")
public class Notification {
    @Id
    @GeneratedValue
    private BigInteger id;

    @ManyToOne
    private Users recipient;

    @ManyToOne
    private Users sender;

    @ManyToOne
    private Users targetUser;

    @ManyToOne
    private Blog targetBlog;
    @Column(name = "notification_type")
    @Enumerated(EnumType.STRING)
    private TypeNotification type; // có thể là "comment", "like", "follow"

    private String content;

    private Boolean isRead;

}
