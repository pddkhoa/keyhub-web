package com.example.Keyhub.data.entity.Blog;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Column
    private String Description;
    @Column
    private String avatar;
    @Column
    private String banner;
    @OneToMany(mappedBy = "category")
    private Set<Tag> tags = new HashSet<>();
}
