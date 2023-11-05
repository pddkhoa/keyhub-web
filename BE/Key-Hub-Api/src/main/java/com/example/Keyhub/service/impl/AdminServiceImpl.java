package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.service.IAdminService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class AdminServiceImpl implements IAdminService {
    @Autowired
    IBlogRepository blogRepository;
    public SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    @Override
    public ResponseEntity<GenericResponse> circleChartAnalystArticle() {
        int published = blogRepository.countByStatus(1);
        int draft = blogRepository.countByStatus(0);

        Map<String, Integer> stats = new HashMap<>();
        stats.put("Published", published);
        stats.put("Draft", draft);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(stats)
                        .statusCode(HttpStatus.OK.value())
                        .message("Chart circle blog")
                        .build()
                );
    }
    private Date nextDay(Date date) {
        return Date.from(date.toInstant().plus(1, ChronoUnit.DAYS));
    }
    @Override
    public ResponseEntity<GenericResponse> chartAriticleByWeak() {

        LocalDate now = LocalDate.now();
        LocalDate startOfWeek = now.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY));
        LocalDate endOfWeek = now.with(TemporalAdjusters.nextOrSame(DayOfWeek.SUNDAY)).plusDays(1);

        Date start = Date.from(startOfWeek.atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date end = Date.from(endOfWeek.atStartOfDay(ZoneId.systemDefault()).toInstant());

        Map<String, Integer> stats = new LinkedHashMap<>();
        while (start.before(end)) {
            int count = blogRepository.countByCreateDateBetween(start, nextDay(start));
            stats.put(dateFormat.format(start),count);
            start = nextDay(start);
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(stats)
                        .statusCode(HttpStatus.OK.value())
                        .message("Chart circle blog")
                        .build()
                );
    }
    @Override
    public ResponseEntity<GenericResponse> chartAriticleByMonth() {
        LocalDate now = LocalDate.now();
        LocalDate startOfMonth = now.withDayOfMonth(1); // Ngày đầu tiên của tháng
        LocalDate endOfMonth = now.with(TemporalAdjusters.lastDayOfMonth()).plusDays(1); // Ngày cuối cùng của tháng + 1 để bao gồm toàn bộ tháng

        Date start = Date.from(startOfMonth.atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date end = Date.from(endOfMonth.atStartOfDay(ZoneId.systemDefault()).toInstant());

        Map<String, Integer> stats = new LinkedHashMap<>();
        while (start.before(end)) {
            int count = blogRepository.countByCreateDateBetween(start, nextDay(start));
            stats.put(dateFormat.format(start), count);
            start = nextDay(start);
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(stats)
                        .statusCode(HttpStatus.OK.value())
                        .message("Chart circle blog")
                        .build()
                );
    }

    @Override
    public ResponseEntity<GenericResponse> chartAriticleByYear() {
        LocalDate now = LocalDate.now();
        int year = now.getYear();

        Map<Integer, Integer> stats = new LinkedHashMap<>();

        for (int i = year; i >= year - 9; i--) {
            LocalDate startOfYear = LocalDate.of(i, 1, 1);
            LocalDate endOfYear = startOfYear.plusYears(1);

            Date start = Date.from(startOfYear.atStartOfDay(ZoneId.systemDefault()).toInstant());
            Date end = Date.from(endOfYear.atStartOfDay(ZoneId.systemDefault()).toInstant());

            int count = blogRepository.countByCreateDateBetween(start, end);
            stats.put(i, count);
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(stats)
                        .statusCode(HttpStatus.OK.value())
                        .message("Chart circle blog last 10 years")
                        .build()
                );
    }

    @Override
    public ResponseEntity<GenericResponse> chartPointUser() {
        return null;
    }
}
