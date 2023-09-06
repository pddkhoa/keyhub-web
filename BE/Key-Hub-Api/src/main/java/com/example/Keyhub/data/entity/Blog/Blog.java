package com.example.Keyhub.data.entity.Blog;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.Blog.Series;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "blog")
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "blog_id")
    private BigInteger id;
    private String title;
    private String content;

    private String description;
    @ManyToMany
    @JoinTable(name = "blog_category",
            joinColumns = @JoinColumn(name = "blog_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private List<Category> categories ;
    @ManyToMany
    @JoinTable(name = "blog_tag",
            joinColumns = @JoinColumn(name = "blog_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private List<Tag> tags;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;
    @Column
    private Date create_date;
    @Column
    private int status_id;
    @ManyToOne
    @JoinColumn(name = "series_id")
    private Series series;
}
