package com.example.Keyhub.data.dto.request;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class TagRequestDTO {
    private String name;
    private Long id;
    private Long categoryIds;
}
