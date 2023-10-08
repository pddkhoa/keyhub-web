package com.example.Keyhub.data.dto.response;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.math.BigInteger;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class SeriesResponse {
    private BigInteger id;
    private String name;

    private String Description;

    private Date Createday;

    private BigInteger sumBlog;
    private String image;
}
