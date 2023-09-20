package com.example.Keyhub.data.payload;

import com.example.Keyhub.config.ValidatorUtils;
import com.example.Keyhub.data.entity.ProdfileUser.Address;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProfileInfor {
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String name;
    @Pattern(regexp = ValidatorUtils.PHONE_REGEX)
    private String phone;
    @Column
    private String second_name;
    @Column
    private String gender;
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String Descriptions;
    private String address;
    private String company;
    private String country;
    private String School;
}
