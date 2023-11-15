package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.AdminDTO;
import com.example.Keyhub.data.dto.response.ReportResponseDTO;
import com.example.Keyhub.data.dto.response.ReportUserResponseDTO;
import com.example.Keyhub.data.dto.response.StatusResopnes;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Follow;
import com.example.Keyhub.data.entity.ProdfileUser.Role;
import com.example.Keyhub.data.entity.ProdfileUser.RoleName;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportBlog;
import com.example.Keyhub.data.entity.report.ReportUser;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.IReportRepository;
import com.example.Keyhub.data.repository.IReportUserRepository;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.service.GeneralService;
import com.example.Keyhub.service.IAdminService;
import com.example.Keyhub.service.IUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalAdjusters;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class AdminServiceImpl implements IAdminService {
    @Autowired
    IBlogRepository blogRepository;
    @Autowired
    IUserService userService;
    @Autowired
    ModelMapper mapper;
    @Autowired
    RoleServiceImpl roleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    IUserRepository userRepository;
    @Autowired
    GeneralService generalService;
    public SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
    @Override
    public ResponseEntity<GenericResponse> circleChartAnalystArticle() {
        int publish = blogRepository.countByStatus(1);
        int draftCount = blogRepository.countByStatus(0);
        float published = ((float) publish / (publish + draftCount)) * 100;
        float draft = ((float) draftCount / (publish + draftCount)) * 100;

        DecimalFormat df = new DecimalFormat("0.00");

        Map<String, Float> stats = new HashMap<>();
        stats.put("Published", Float.parseFloat(df.format(published)));
        stats.put("Draft", Float.parseFloat(df.format(draft)));
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
                        .message("Chart blog by weak")
                        .build()
                );
    }
    @Override
    public ResponseEntity<GenericResponse> chartAriticleByMonth(Integer month) {
        LocalDate now = LocalDate.now();
        LocalDate firstDay = LocalDate.of(now.getYear(), month, 1);
        LocalDate lastDay = firstDay.withDayOfMonth(firstDay.lengthOfMonth());

        Date start = Date.from(firstDay.atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date end = Date.from(lastDay.atStartOfDay(ZoneId.systemDefault()).toInstant());

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
                        .message("Chart blog by month")
                        .build()
                );
    }

    @Override
    public ResponseEntity<GenericResponse> chartAriticleByYear(Integer year) {
        LocalDate now = LocalDate.now();
        Map<Integer, Integer> stats = new LinkedHashMap<>();

        for (int month = 1; month <= 12; month++) {

            LocalDate firstDay = LocalDate.of(year, month, 1);
            LocalDate lastDay = firstDay.withDayOfMonth(firstDay.lengthOfMonth());

            Date start = Date.from(firstDay.atStartOfDay(ZoneId.systemDefault()).toInstant());
            Date end = Date.from(lastDay.atStartOfDay(ZoneId.systemDefault()).toInstant());

            int count = blogRepository.countByCreateDateBetween(start, end);

            // Lưu kết quả vào map
            stats.put(month , count);

        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(stats)
                        .statusCode(HttpStatus.OK.value())
                        .message("Chart blog by year")
                        .build()
                );
    }

    @Override
    public ResponseEntity<GenericResponse> chartPointUser() {
        LocalDateTime now = LocalDateTime.now();

        // Đặt ngày bắt đầu và kết thúc cho năm hiện tại
        LocalDateTime startOfYear = LocalDateTime.of(now.getYear(), 1, 1, 0, 0, 0);
        LocalDateTime endOfYear = LocalDateTime.of(now.getYear(), 12, 31, 23, 59, 59);

        // Chuyển đổi thành kiểu Timestamp
        Timestamp startDate = Timestamp.valueOf(startOfYear);
        Timestamp endDate = Timestamp.valueOf(endOfYear);
        List<Users> list = userRepository.findByCreateDateBetween(startDate, endDate);

        // Tạo một Map để lưu trữ số lượng người dùng theo từng tháng
        Map<String, Integer> userCountByMonth = new LinkedHashMap<>();

        // Khởi tạo Map với tất cả các tháng và giá trị mặc định là 0
        for (int month = 1; month <= 12; month++) {
            String monthKey = String.format("%04d-%02d", now.getYear(), month);
            userCountByMonth.put(monthKey, 0);
        }

        // Tính toán số lượng người dùng theo từng tháng
        for (Users user : list) {
            LocalDateTime createDate = user.getCreateDate().toLocalDateTime();
            String monthKey = DateTimeFormatter.ofPattern("yyyy-MM").format(createDate);
            userCountByMonth.put(monthKey, userCountByMonth.get(monthKey) + 1);
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(userCountByMonth)
                        .statusCode(HttpStatus.OK.value())
                        .message("User count by month in year")
                        .build()
                );
    }

}
