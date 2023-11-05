package com.example.Keyhub.service;

import com.example.Keyhub.data.entity.GenericResponse;
import org.springframework.http.ResponseEntity;

public interface IAdminService {
    ResponseEntity<GenericResponse> circleChartAnalystArticle();
    ResponseEntity<GenericResponse> chartAriticleByWeak();
    ResponseEntity<GenericResponse> chartAriticleByMonth();
    ResponseEntity<GenericResponse> chartAriticleByYear();
    ResponseEntity<GenericResponse> chartPointUser();

}
