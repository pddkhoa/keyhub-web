package com.example.Keyhub.data.entity.ProdfileUser;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigInteger;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;
    @Column(columnDefinition = "TEXT")
    private String Company;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name =  "user_id")
    private Users users;
}
