package com.example.Keyhub.data.entity.Blog;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.HashSet;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "content_blog")
public class ContentBlog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger content_id;
    @Column
    private String content;
    @ManyToMany(mappedBy = "categories")
    private Set<Blog> blogs = new HashSet<>();
}
