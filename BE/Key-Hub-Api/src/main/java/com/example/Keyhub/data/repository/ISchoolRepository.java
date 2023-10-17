package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.School;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;


public interface ISchoolRepository extends JpaRepository<School, BigInteger> {
    Optional<School> findById(BigInteger id);
    List<School> findAllByUsers(Users users_id);
}
