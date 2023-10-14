package com.example.Keyhub.data.entity.Blog;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.userdetails.User;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;
    @Column
    private String content;
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Comment parentComment;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users users;
    @Column
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
}
