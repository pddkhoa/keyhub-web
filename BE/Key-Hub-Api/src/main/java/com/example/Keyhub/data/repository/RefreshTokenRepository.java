package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.RefreshToken;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.ResetPassToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.math.BigInteger;
import java.util.BitSet;
import java.util.Optional;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, BigInteger> {
    Optional<RefreshToken> findByToken(String token);


    int deleteByUser(Users users);

}
