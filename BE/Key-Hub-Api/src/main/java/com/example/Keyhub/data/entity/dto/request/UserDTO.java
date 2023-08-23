package com.example.Keyhub.data.entity.dto.request;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.sql.Timestamp;
import java.util.Set;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDTO {
    @NotBlank
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String name;
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String lastname;
    private String username;
    @NotBlank
    @Pattern(regexp = ValidatorUtils.EMAIL_REGEX)
    private String email;
    @Pattern(regexp = ValidatorUtils.PASSWORD_REGEX)
    @NotBlank
    private String password;
    private Set<String> roles;
    private Timestamp createDate;
    @Pattern(regexp = ValidatorUtils.PHONE_REGEX)
    private String phone;

}
