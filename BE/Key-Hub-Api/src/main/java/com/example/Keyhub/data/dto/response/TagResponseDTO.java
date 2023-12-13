package com.example.Keyhub.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TagResponseDTO {
    private Long id;
    private String name;
    private CategoryResponseCardDTO category;
}
