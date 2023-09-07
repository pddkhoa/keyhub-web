package com.example.Keyhub.service.impl;

import com.example.Keyhub.controller.exception.TokenRefreshException;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.RefreshToken;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.data.repository.RefreshTokenRepository;
import com.example.Keyhub.security.jwt.JwtProvider;
import com.example.Keyhub.service.IRefreshTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigInteger;
import java.time.Instant;
import java.util.Optional;
import java.util.UUID;
@Service
public class RefreshehTokenImpl implements IRefreshTokenService {
    @Value("${api.app.jwtRefreshExpirationMs}")
    private Long refreshTokenDurationMs;


    @Autowired
    private RefreshTokenRepository refreshTokenRepository;
    @Autowired
    JwtProvider jwtProvider;
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

    @Override
    public ResponseEntity<?> logout(String refreshToken) {
        try{
            Optional<RefreshToken> optionalRefreshToken = refreshTokenRepository.findByToken(refreshToken);
            if(optionalRefreshToken.isPresent()){
                    refreshTokenRepository.delete(optionalRefreshToken.get());
                    SecurityContextHolder.clearContext();
                    return ResponseEntity.status(HttpStatus.OK)
                            .body(GenericResponse.builder()
                                    .success(true)
                                    .message("Logout successfully!")
                                    .result("")
                                    .statusCode(HttpStatus.OK.value())
                                    .build());
            }
            else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(GenericResponse.builder()
                                .success(false)
                                .message("Logout failed!")
                                .result("")
                                .statusCode(HttpStatus.UNAUTHORIZED.value())
                                .build());
            }

        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(GenericResponse.builder()
                            .success(false)
                            .message(e.getMessage())
                            .result("")
                            .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value())
                            .build());
        }
    }

    @Transactional
    public int deleteByUserId(BigInteger userId) {
        return refreshTokenRepository.deleteByUser(userRepository.findById(userId).get());
    }
}
