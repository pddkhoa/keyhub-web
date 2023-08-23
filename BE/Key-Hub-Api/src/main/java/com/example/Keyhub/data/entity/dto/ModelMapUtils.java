package com.example.Keyhub.data.entity.dto;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapUtils {
    @Bean
    public ModelMapper getModelMapper() {
        return new ModelMapper();
    }
}
