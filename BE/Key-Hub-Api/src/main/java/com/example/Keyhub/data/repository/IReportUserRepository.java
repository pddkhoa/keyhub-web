package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.math.BigInteger;

public interface IReportUserRepository extends JpaRepository<ReportUser, BigInteger> {
    boolean existsByUserReportAndUserIdReported(Users user_reported, Users user_is_reported);

    @Modifying
    @Query("DELETE FROM ReportUser a WHERE a.userReport = ?1")
    void deleteByUserReport(Users userId);
    @Modifying
    @Query("DELETE FROM ReportUser a WHERE a.userIdReported = ?1")
    void deleteByUserIdReported(Users userId);

}
