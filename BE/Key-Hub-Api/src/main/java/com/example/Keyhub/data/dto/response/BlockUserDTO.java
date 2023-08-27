package com.example.Keyhub.data.dto.response;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.math.BigInteger;

@Getter
@Setter
public class BlockUserDTO {
    private BigInteger user_id;
    private String avatar;
    @NotBlank
    @Pattern(regexp = ValidatorUtils.VIETNAMESE_REGEX)
    private String name;
    private String second_name;
    @NotBlank
    @Pattern(regexp = ValidatorUtils.EMAIL_REGEX)
    private String Email;
}
