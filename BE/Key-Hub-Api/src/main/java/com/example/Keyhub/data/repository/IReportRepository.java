package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.report.ReportBlog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;

public interface IReportRepository extends JpaRepository<ReportBlog , BigInteger> {

}
