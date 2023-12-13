package com.example.Keyhub.data.entity.Blog;

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
@Table(name = "series_image")
public class SeriesImage {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;

    @Column(columnDefinition = "TEXT")
    private String urlImage;

    @Column
    private Date uploadDate;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name =  "series_id")
    private Series series;
}
