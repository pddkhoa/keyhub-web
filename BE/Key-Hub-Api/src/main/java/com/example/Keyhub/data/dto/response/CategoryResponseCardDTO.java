package com.example.Keyhub.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CategoryResponseCardDTO {
    private Long id;
    private String name;
    private String Description;
    private String avatar;
    private String banner;
    private Long sumUser;
    private boolean checkFollowCategory;
}
