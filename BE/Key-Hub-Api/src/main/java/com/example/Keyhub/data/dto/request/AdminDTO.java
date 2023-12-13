package com.example.Keyhub.data.dto.request;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.sql.Timestamp;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AdminDTO {
    @NotBlank
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String name;
    private String username;
    @NotBlank
    @Pattern(regexp = ValidatorUtils.EMAIL_REGEX)
    private String email;
    @Pattern(regexp = ValidatorUtils.PASSWORD_REGEX)
    @NotBlank
    private String password;
    private Set<String> roles;
    private Timestamp createDate;
    private Timestamp updateDate;
    @Pattern(regexp = ValidatorUtils.PHONE_REGEX)
    private String phone;
    private Boolean status;
    private String second_name;
    private String gender;
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String Descriptions;
}
