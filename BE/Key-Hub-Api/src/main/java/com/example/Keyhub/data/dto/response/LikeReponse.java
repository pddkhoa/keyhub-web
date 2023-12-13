package com.example.Keyhub.data.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;

@Setter
@Getter
public class LikeReponse {
    private Boolean status;
    private BigInteger like;
}
