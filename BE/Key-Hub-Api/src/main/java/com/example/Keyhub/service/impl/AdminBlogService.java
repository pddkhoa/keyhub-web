package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.ReportResponseDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportBlog;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.IReportRepository;
import com.example.Keyhub.service.GeneralService;
import com.example.Keyhub.service.IAdminBlogService;
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
    final IBlogRepository blogRepository;

    public AdminBlogService(IReportRepository reportRepository, GeneralService generalService, IBlogRepository blogRepository) {
        this.reportRepository = reportRepository;
        this.generalService = generalService;
        this.blogRepository = blogRepository;
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
    public List<ReportResponseDTO> listBlogViolating(Users users, int index) {
        List<ReportBlog> reportBlogList = reportRepository.findAll();
        int itemsPerPage = 10;
        int startIndex = (index - 1) * itemsPerPage;
        List<ReportBlog> reportUserList = reportRepository.findAll();
        reportUserList.sort(Comparator.comparing(ReportBlog::getCreateDate).reversed());
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
        List<ReportResponseDTO> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, resultCheck.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(resultCheck.get(i));
        }
        return result;
    }

    @Override
    public List<BlogDTO> listAllBlog(int index, Users users) {
        List<Blog> list = blogRepository.findAll();
        int itemsPerPage = 10;
        int startIndex = (index - 1) * itemsPerPage;
        list.sort(Comparator.comparing(Blog::getCreateDate).reversed());
        if (list.isEmpty())
        {
            return null;
        }
        List<BlogDTO> results = list.stream().map(blog -> generalService.createBlogDTO(users,blog)).collect(Collectors.toList());
        List<BlogDTO> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, results.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(results.get(i));
        }
        return result;
    }

    @Override
    public int sizeAllBlog() {
        List<Blog> list = blogRepository.findAll();
        return (list.size() / 10 + (list.size() % 10 != 0 ? 1 : 0));
    }
}
