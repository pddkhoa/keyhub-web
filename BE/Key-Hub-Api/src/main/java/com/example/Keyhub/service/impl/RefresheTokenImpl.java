package com.example.Keyhub.service.impl;

import com.example.Keyhub.controller.exception.TokenRefreshException;
import com.example.Keyhub.data.entity.ProdfileUser.RefreshToken;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.data.repository.RefreshTokenRepository;
import com.example.Keyhub.service.IRefreshTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.time.Instant;
import java.util.Optional;
import java.util.UUID;
@Service
public class RefresheTokenImpl implements IRefreshTokenService {
    @Value("${api.app.jwtRefreshExpirationMs}")
    private Long refreshTokenDurationMs;


    @Autowired
    private RefreshTokenRepository refreshTokenRepository;

    @Autowired
    private IUserRepository userRepository;

    public Optional<RefreshToken> findByToken(String token) {
        return refreshTokenRepository.findByToken(token);
    }

    public RefreshToken createRefreshToken(BigInteger userId) {
        RefreshToken refreshToken = new RefreshToken();

        refreshToken.setUser(userRepository.findById(userId).get());
        refreshToken.setExpiryDate(Instant.now().plusMillis(refreshTokenDurationMs));
        refreshToken.setToken(UUID.randomUUID().toString());

        refreshToken = refreshTokenRepository.save(refreshToken);
        return refreshToken;
    }

    public RefreshToken verifyExpiration(RefreshToken token) {
        if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(token);
            throw new TokenRefreshException(token.getToken(), "Refresh token was expired. Please make a new signin request");
        }

        return token;
    }

    @Transactional
    public int deleteByUserId(BigInteger userId) {
        return refreshTokenRepository.deleteByUser(userRepository.findById(userId).get());
    }
}
