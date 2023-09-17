package com.example.Keyhub.data.payload;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Data
@Getter
@Setter
public class ChechOtp {
    @NotEmpty
    @Pattern(regexp = ValidatorUtils.EMAIL_REGEX)
    private String email;
    private String token;
}
