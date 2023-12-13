package com.example.Keyhub.data.dto.request;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.math.BigInteger;
import java.util.Date;

@Getter
@Setter
public class SeriesDTO {
    @NotBlank
    private String name;
    private String Description;
    private String avatar;

}
