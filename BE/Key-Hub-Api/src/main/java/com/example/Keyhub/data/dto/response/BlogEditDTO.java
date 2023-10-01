package com.example.Keyhub.data.dto.response;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class BlogEditDTO {

    private BigInteger id;
    private String title;
    private String content;
    private String description;
    private String avatar;
    private int status_id;
    private BigInteger likes;
    private Long categoryIds;
    private List<Long> tagIds;
    private BigInteger seriesId;
}
