package com.example.Keyhub.data.entity.ProdfileUser;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.math.BigInteger;
import java.sql.Timestamp;
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "user")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private BigInteger id;
    @NotBlank
    @Size(min = 3, max = 50)
    private String name;

    @Size(min = 3,max = 50)
    private String username;

    @Size(max = 50)
    @Email
    private String email;
    @JsonIgnore
    @NotBlank
    @Size(min = 6,max = 100)
    private String password;
//    @ManyToMany(fetch = FetchType.EAGER)
//  More than 2 role
//    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
//    Set<Role> roles = new HashSet<>();
    @Column
    private String role;
    @Column
    private String phone;
    @Column
    private Timestamp createDate;
    @Column
    private Timestamp updateDate;
    @Column
    private String avatar;
    @Column
    private String second_name;
    @Column
    private int status;
    @Column
    private String gender;
    @Column
    private String Descriptions;
    @Column
    private String address;
    @Column
    private String company;
    @Column
    private String country;
    @Column
    private String School;
    @Column
    private String banner_url;
    @Column
    private int sumViolating;
    private int sumBlog;
    private int totalFollowers;
    private int totalFollowing;
    public Users(   @NotBlank
                    @Size(min = 3, max = 50) String name,
                    @NotBlank
                    @Size(min = 3,max = 50) String username,
                    @Size(max = 50)
                    @Email String email,String phone,
                    @NotBlank
                    @Size(min = 6,max = 100)String encode,
                    Timestamp createDate) {
        this.name = name;
        this.phone=phone;
        this.username = username;
        this.email = email;
        this.password = encode;
    }

}
