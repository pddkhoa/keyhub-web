package com.example.Keyhub.data.dto.request;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginRequest {
    @NotBlank
    private String username;

    @NotBlank
    @Pattern(regexp = ValidatorUtils.PASSWORD_LOGIN_REGEX)
    private String password;

}



