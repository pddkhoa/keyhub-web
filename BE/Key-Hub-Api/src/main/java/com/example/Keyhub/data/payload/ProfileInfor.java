package com.example.Keyhub.data.payload;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.Pattern;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProfileInfor {
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String name;
    @Pattern(regexp = ValidatorUtils.PHONE_REGEX)
    private String phone;
    @Pattern(regexp = ValidatorUtils.EMAIL_REGEX)
    private String email;
    @Column
    private String second_name;
    @Column
    private String gender;
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String Descriptions;
}
