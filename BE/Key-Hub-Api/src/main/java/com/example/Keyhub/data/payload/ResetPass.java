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
public class ResetPass {
    @NotEmpty
    @Pattern(regexp = ValidatorUtils.EMAIL_REGEX)
    private String email;
    private String token;
    @Pattern(regexp = ValidatorUtils.PASSWORD_LOGIN_REGEX)
    private String old_pass;
    @Pattern(regexp = ValidatorUtils.PASSWORD_REGEX)
    private String new_pass;
}
