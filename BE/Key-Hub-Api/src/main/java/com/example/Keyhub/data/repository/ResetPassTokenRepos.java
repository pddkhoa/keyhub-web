package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.ResetPassToken;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ResetPassTokenRepos extends JpaRepository<ResetPassToken, Long> {
    ResetPassToken findResetPassTokenReposByToken(String token);
    List <ResetPassToken> findByUser(Users user);
}
