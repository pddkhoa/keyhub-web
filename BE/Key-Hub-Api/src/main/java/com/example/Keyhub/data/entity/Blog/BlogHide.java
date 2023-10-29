package com.example.Keyhub.data.entity.Blog;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "blog_hide")
public class BlogHide {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name =  "blog_id")
    private Blog blog;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name =  "user_id")
    private Users users;
}
