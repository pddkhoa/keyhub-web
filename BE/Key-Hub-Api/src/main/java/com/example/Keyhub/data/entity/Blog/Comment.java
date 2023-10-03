package com.example.Keyhub.data.entity.Blog;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigInteger;
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
    @ManyToMany(mappedBy = "comments")
    private List<Blog> blogs;
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Comment parentComment;
}
