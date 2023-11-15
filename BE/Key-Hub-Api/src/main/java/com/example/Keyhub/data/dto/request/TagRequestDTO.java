package com.example.Keyhub.data.dto.request;

import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.ProdfileUser.BannerUser;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Getter
@Setter
public class TagRequestDTO {
    private String name;
    private Long id;
    private List<Long> categoryIds;
}
