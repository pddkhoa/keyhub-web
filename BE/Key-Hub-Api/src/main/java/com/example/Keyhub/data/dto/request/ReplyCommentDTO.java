package com.example.Keyhub.data.dto.request;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.math.BigInteger;

@Getter
@Setter
public class ReplyCommentDTO {
    @NotBlank
    String content;
    BigInteger parent_id;
}
