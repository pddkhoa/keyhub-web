package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.ReportResponseDTO;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

import java.util.List;

public interface IAdminBlogService {
    Long getSizeBlogViolating();
    List<ReportResponseDTO> listBlogViolating(Users users, int index);
    List<BlogDTO> listAllBlog(int index,Users users);
    int sizeAllBlog();

}
