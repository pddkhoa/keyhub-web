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

    @NotBlank(message = "Title cannot be blank")
    @Size(min = 10, message = "Title must be at least 10 characters long")
    private String title;
    @NotBlank(message = "Content cannot be blank")
    private String content;
    private String description;
    private Date create_date;
    private String avatar;
    private int status_id;
    private BigInteger likes;
    private Long categoryIds;
    private List<Long> tagIds;
    private BigInteger seriesId;
    public List<String> validateAndGetErrors() {
        List<String> errors = new ArrayList<>();

        if (title == null || title.isEmpty() || title.length() < 10) {
            errors.add("Title must be at least 10 characters long");
        }

        if (content == null || content.isEmpty()) {
            errors.add("Content cannot be blank");
        }
        return errors;
    }
}
