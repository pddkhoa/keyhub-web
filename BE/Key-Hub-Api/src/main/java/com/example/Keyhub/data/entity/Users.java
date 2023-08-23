package com.example.Keyhub.data.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "user", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "username"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })
})
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Size(min = 3, max = 50)
    private String name;
    @NotBlank
    @Size(min = 3,max = 50)
    private String username;
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    @JsonIgnore
    @NotBlank
    @Size(min = 6,max = 100)
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)

    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    Set<Role> roles = new HashSet<>();
    @Column
    private String phone;
    @Column
    private Timestamp createDate;
    public Users(   @NotBlank
                    @Size(min = 3, max = 50) String name,
                    @NotBlank
                    @Size(min = 3,max = 50) String username,
                    @Size(max = 50)
                    @Email String email,
                    @NotBlank
                    @Size(min = 6,max = 100)String encode,
                    Timestamp createDate) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = encode;
    }
}
