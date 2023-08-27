package com.example.Keyhub.data.dto.response;

import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import java.math.BigInteger;
import java.util.Collection;
@Getter
@Setter
public class JwtResponse {
    private BigInteger id;
    String token;
    private String type = "Bearer";
    private String username;
    private String refreshToken;
    private Collection<? extends GrantedAuthority> roles;

    public JwtResponse() {
    }
    public JwtResponse(String token, String username, Collection<? extends GrantedAuthority> authorities, BigInteger id,String refreshToken ) {
        this.token = token;
        this.username = username;
        this.roles = authorities;
        this.refreshToken=refreshToken;
        this.id=id;
    }
}
