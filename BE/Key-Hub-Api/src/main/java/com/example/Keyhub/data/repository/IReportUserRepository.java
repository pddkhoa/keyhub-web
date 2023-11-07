package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.report.ReportUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface IReportUserRepository extends JpaRepository<ReportUser, BigInteger> {
}
