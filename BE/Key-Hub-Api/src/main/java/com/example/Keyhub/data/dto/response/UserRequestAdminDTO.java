package com.example.Keyhub.data.dto.response;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Pattern;
import java.math.BigInteger;
import java.sql.Timestamp;

@Getter
@Setter
public class UserRequestAdminDTO {
    private BigInteger id;
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String name;
    private String username;
    private String email;
    @Pattern(regexp = ValidatorUtils.PHONE_REGEX)
    private String phone;
    private Timestamp createDate;
    private Timestamp updateDate;
    private String second_name;
    private String gender;
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String Descriptions;
    private String address;
    private String company;
    private String country;
    private String School;
}
