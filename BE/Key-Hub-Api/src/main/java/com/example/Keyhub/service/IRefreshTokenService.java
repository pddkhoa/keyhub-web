package com.example.Keyhub.service;


import com.example.Keyhub.data.entity.ProdfileUser.RefreshToken;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigInteger;


public interface IRefreshTokenService {

    RefreshToken createRefreshToken(BigInteger userId);
    RefreshToken verifyExpiration(RefreshToken token);
    ResponseEntity<?> logout(String refreshToken);

}
