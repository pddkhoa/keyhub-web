package com.example.Keyhub.data.dto.request;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CompanyDTO {
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String role_business;
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String company;
    private boolean business_status;
}
