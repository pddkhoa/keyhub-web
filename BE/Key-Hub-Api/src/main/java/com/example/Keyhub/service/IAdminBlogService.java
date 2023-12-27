package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.EvaluteRequestDTO;
import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.ReportCommentResponseDTO;
import com.example.Keyhub.data.dto.response.ReportResponseDTO;
import com.example.Keyhub.data.dto.response.StatusResopnes;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

import java.util.List;

public interface IAdminBlogService {
    Long getSizeBlogViolating();
    List<ReportResponseDTO> listBlogViolating(Users users);
    List<BlogDTO> listAllBlog( Users users);
    int sizeAllBlog();
    StatusResopnes evaluteBlog(EvaluteRequestDTO evaluteRequestDTO,Users users);
    List<ReportCommentResponseDTO> listReportComment();
    StatusResopnes evaluteComment(Users users,EvaluteRequestDTO evaluteRequestDTO);
}
