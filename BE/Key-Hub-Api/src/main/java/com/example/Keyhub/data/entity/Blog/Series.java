package com.example.Keyhub.data.entity.Blog;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "series")
public class Series {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;
    private String name;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;
    @Column(columnDefinition = "TEXT")
    private String Description;
    @Column
    private Date Createday;
    @Column
    private BigInteger sumBlog;
}
