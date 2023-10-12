package com.example.Keyhub.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Getter
@Setter
@AllArgsConstructor
public class BlogPostDraftDTO {

    private String title;
    private String content;
    private String description;
    private Date create_date;
    private String avatar;
    private int status_id;
    private BigInteger likes;
    private Long categoryIds;
    private List<Long> tagIds;
    private BigInteger seriesId;
}
