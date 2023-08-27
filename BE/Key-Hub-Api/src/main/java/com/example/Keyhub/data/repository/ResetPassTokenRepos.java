package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ResetPassToken;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ResetPassTokenRepos extends JpaRepository<ResetPassToken, Long> {
    ResetPassToken findResetPassTokenReposByToken(String token);
}
