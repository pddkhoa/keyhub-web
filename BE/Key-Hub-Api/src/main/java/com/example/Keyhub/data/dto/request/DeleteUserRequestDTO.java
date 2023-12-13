package com.example.Keyhub.data.dto.request;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class DeleteUserRequestDTO {
    private BigInteger user_id;
    private int value;
}
