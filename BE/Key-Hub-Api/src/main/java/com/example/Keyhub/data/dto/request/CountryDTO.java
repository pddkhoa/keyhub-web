package com.example.Keyhub.data.dto.request;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CountryDTO {
    @NotBlank
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String name;
}
