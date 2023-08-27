package com.example.Keyhub.data.dto.request;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SchoolDTO {
    @NotBlank
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String name;
    private Boolean status;
}
