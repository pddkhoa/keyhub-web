package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.RefreshToken;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, BigInteger> {
    Optional<RefreshToken> findByToken(String token);
    void deleteByUser(Users users);


}
