package com.example.Keyhub.data.entity.ProdfileUser;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user_banner")
public class BannerUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;

    @Column(columnDefinition = "TEXT")
    private String urlBanner;

    @Column
    private Date uploadDate;


    @JsonIgnore
    @ManyToOne
    @JoinColumn(name =  "user_id")
    private Users users;

    public BannerUser(String urlBanner, Date uploadDate) {
        this.urlBanner = urlBanner;
        this.uploadDate = uploadDate;
    }
}
