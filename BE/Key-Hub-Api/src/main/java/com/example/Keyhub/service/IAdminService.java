package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.AdminDTO;
import com.example.Keyhub.data.dto.response.ReportResponseDTO;
import com.example.Keyhub.data.dto.response.ReportUserResponseDTO;
import com.example.Keyhub.data.dto.response.StatusResopnes;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.http.ResponseEntity;

import java.math.BigInteger;
import java.util.List;

public interface IAdminService {
    ResponseEntity<GenericResponse> circleChartAnalystArticle();
    ResponseEntity<GenericResponse> chartAriticleByWeak();
    ResponseEntity<GenericResponse> chartAriticleByMonth(Integer month);
    ResponseEntity<GenericResponse> chartAriticleByYear(Integer year);
    ResponseEntity<GenericResponse> chartPointUser();



}
