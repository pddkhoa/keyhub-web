package com.example.Keyhub.data.payload.respone;

import com.example.Keyhub.data.entity.ProdfileUser.RefreshToken;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TokenRefreshResponse {
    private String accessToken;
    private String refreshToken;
    private String tokenType = "Bearer";


    public TokenRefreshResponse(String accessToken, String refreshToken) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
    }
}
