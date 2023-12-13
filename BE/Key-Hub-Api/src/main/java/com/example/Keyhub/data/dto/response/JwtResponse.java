package com.example.Keyhub.data.dto.response;

import com.example.Keyhub.data.entity.ProdfileUser.RefreshToken;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.math.BigInteger;
import java.util.Collection;
@Getter
@Setter
public class JwtResponse {
    String token;
    private String type = "Bearer";
    private String refreshToken;
    int statusCode;
    public JwtResponse(String token, CustomUserDetails customUserDetail,String refreshToken, int statusCode ) {
        this.token = token;
        this.refreshToken=refreshToken;
        this.statusCode=statusCode;
    }
}
