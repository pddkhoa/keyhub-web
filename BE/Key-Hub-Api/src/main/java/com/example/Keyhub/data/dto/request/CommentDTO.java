package com.example.Keyhub.data.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
@Getter
@Setter
public class CommentDTO {
    @NotBlank
    String content;
}
