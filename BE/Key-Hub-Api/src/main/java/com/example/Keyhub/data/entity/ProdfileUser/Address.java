package com.example.Keyhub.data.entity.ProdfileUser;

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
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private BigInteger id;
    @Column
    private String address;
    @Column
    private Boolean status;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name =  "user_id")
    private Users users;
}
