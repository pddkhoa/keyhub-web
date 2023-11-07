package com.example.Keyhub.service;

import com.example.Keyhub.data.entity.GenericResponse;
import org.springframework.http.ResponseEntity;

public interface IAdminService {
    ResponseEntity<GenericResponse> circleChartAnalystArticle();
    ResponseEntity<GenericResponse> chartAriticleByWeak();
    ResponseEntity<GenericResponse> chartAriticleByMonth(Integer month);
    ResponseEntity<GenericResponse> chartAriticleByYear(Integer year);
    ResponseEntity<GenericResponse> chartPointUser();

}
