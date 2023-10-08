package com.example.Keyhub.data.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class BlogDTO {
    private BigInteger id;
    private String title;
    private String content;
    private String description;
    private Long views;
    private Date create_date;
    private String avatar;
    private int status_id;
    private BigInteger likes;
    private CategoryDTO categories;
    private List<TagDTO> tags;
    private SeriesResponse series;
    private Boolean isLike;
    private Boolean isSave;
}
