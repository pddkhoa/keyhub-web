package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface IVerificationTokenRepos extends JpaRepository<VerificationToken, BigInteger> {
    VerificationToken findVerificationTokenByToken(String token);

    VerificationToken findVerificationTokenByUser(Users user);
}
