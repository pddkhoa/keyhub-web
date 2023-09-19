package com.example.Keyhub.data.entity.ProdfileUser;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
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
@Table(name = "user_images")
public class AvatarUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;

    @Column(columnDefinition = "TEXT")
    private String urlImage;

    @Column
    private Date uploadDate;


    @JsonIgnore
    @ManyToOne
    @JoinColumn(name =  "user_id")
    private Users users;

    public AvatarUser(String urlImage, Date uploadDate) {
        this.urlImage = urlImage;
        this.uploadDate = uploadDate;
    }
}
