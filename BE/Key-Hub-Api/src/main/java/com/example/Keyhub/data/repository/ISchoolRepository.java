package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;


public interface ISchoolRepository extends JpaRepository<School, BigInteger> {
    Optional<School> findById(BigInteger id);
    @Query("select i from School i where  i.users.id=?1 AND i.name = ?2")
    List<School> findByUserIdAndName(BigInteger users_id, String company);
    List<School> findByUsers_Id(BigInteger users_id);
}
