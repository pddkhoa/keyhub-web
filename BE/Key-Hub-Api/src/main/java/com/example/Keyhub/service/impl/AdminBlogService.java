package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.EvaluteRequestDTO;
import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.ReportResponseDTO;
import com.example.Keyhub.data.dto.response.StatusResopnes;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportBlog;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.IReportRepository;
import com.example.Keyhub.event.OnEvaluteApproveDeleteBlogEvent;
import com.example.Keyhub.service.GeneralService;
import com.example.Keyhub.service.IAdminBlogService;
import com.example.Keyhub.service.IBLogService;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminBlogService implements IAdminBlogService {
    final
    IReportRepository reportRepository;
    final
    GeneralService generalService;
    final
    ApplicationEventPublisher applicationEventPublisher;
    final IBlogRepository blogRepository;

    public AdminBlogService(IReportRepository reportRepository, GeneralService generalService, IBlogRepository blogRepository, ApplicationEventPublisher applicationEventPublisher, IBLogService ibLogService) {
        this.reportRepository = reportRepository;
        this.generalService = generalService;
        this.blogRepository = blogRepository;
        this.applicationEventPublisher = applicationEventPublisher;
        this.ibLogService = ibLogService;
    }

    @Override
    public Long getSizeBlogViolating() {
        List<ReportBlog> reportBlogList = reportRepository.findAll();
        if (reportBlogList.isEmpty())
        {
            return null;
        }
        return (Long) (long) (reportBlogList.size() / 10 + (reportBlogList.size() % 10 != 0 ? 1 : 0));
    }
    @Override
    public List<ReportResponseDTO> listBlogViolating(Users users ) {
        List<ReportBlog> reportBlogList = reportRepository.findAll();
        if (reportBlogList.isEmpty())
        {
            return null;
        }
        List<ReportResponseDTO> resultCheck = new ArrayList<>();
        for (ReportBlog reportBlog : reportBlogList)
        {
            ReportResponseDTO reportSample = new ReportResponseDTO();
            reportSample.setBlog(generalService.createBlogDTO(users,reportBlog.getBlog()));
            reportSample.setUser_reported(generalService.createUserResponse(reportBlog.getUser()));
            reportSample.setReason(reportBlog.getReason());
            reportSample.setCreate_at(reportBlog.getCreateDate());
            reportSample.setId(reportBlog.getId());
            resultCheck.add(reportSample);
        }
        return resultCheck;
    }

    @Override
    public List<BlogDTO> listAllBlog( Users users) {
        List<Blog> list = blogRepository.findAll();
        list.sort(Comparator.comparing(Blog::getCreateDate).reversed());
        if (list.isEmpty())
        {
            return null;
        }
        List<BlogDTO> results = list.stream().map(blog -> generalService.createBlogDTO(users,blog)).collect(Collectors.toList());
        return results;
    }

    @Override
    public int sizeAllBlog() {
        List<Blog> list = blogRepository.findAll();
        return (list.size() / 10 + (list.size() % 10 != 0 ? 1 : 0));
    }
    final
    IBLogService ibLogService;
    @Override
    public StatusResopnes evaluteBlog(EvaluteRequestDTO evaluteRequestDTO) {
        StatusResopnes statusResopnes = new StatusResopnes();
        ReportBlog reportBlog = reportRepository.findById(evaluteRequestDTO.getReport_id()).orElse(null);
        if (reportBlog==null)
        {
            statusResopnes.setStatusCode(3);
            return statusResopnes;
        }
        Blog blog = reportBlog.getBlog();
        int sumViolating = blog.getSumViolating();
        if (evaluteRequestDTO.isValue())
        {
            applicationEventPublisher.publishEvent(new OnEvaluteApproveDeleteBlogEvent(blog));
            reportRepository.delete(reportBlog);
            ibLogService.deleteBlogById(blog);
            statusResopnes.setStatusCode(1);
            return statusResopnes;
        }
        reportRepository.delete(reportBlog);
        statusResopnes.setStatusCode(0);
        return statusResopnes; }
}
