package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.EvaluteRequestDTO;
import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.ReportCommentResponseDTO;
import com.example.Keyhub.data.dto.response.ReportResponseDTO;
import com.example.Keyhub.data.dto.response.StatusResopnes;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogComment;
import com.example.Keyhub.data.entity.Blog.Comment;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportBlog;
import com.example.Keyhub.data.entity.report.ReportComment;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.event.OnEvaluteApproveDeleteBlogEvent;
import com.example.Keyhub.service.GeneralService;
import com.example.Keyhub.service.IAdminBlogService;
import com.example.Keyhub.service.IBLogService;
import com.example.Keyhub.service.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminBlogService implements IAdminBlogService {
    final
    IReportCommentRepository reportCommentRepository;
    final
    IReportRepository reportRepository;
    final
    GeneralService generalService;
    final
    ApplicationEventPublisher applicationEventPublisher;
    final IBlogRepository blogRepository;
    final
    ICommentService commentService;
    public AdminBlogService(IReportRepository reportRepository, GeneralService generalService, IBlogRepository blogRepository, ApplicationEventPublisher applicationEventPublisher, IBLogService ibLogService, IReportCommentRepository reportCommentRepository, ICommentService commentService) {
        this.reportRepository = reportRepository;
        this.generalService = generalService;
        this.blogRepository = blogRepository;
        this.applicationEventPublisher = applicationEventPublisher;
        this.ibLogService = ibLogService;
        this.reportCommentRepository = reportCommentRepository;
        this.commentService = commentService;
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

    @Override
    public List<ReportCommentResponseDTO> listReportComment() {
        List<ReportComment> list = reportCommentRepository.findAll();
        List<ReportCommentResponseDTO> responseDTO = new ArrayList<>();

        return list.stream()
                .map(response -> {
                    ReportCommentResponseDTO reportComment = new ReportCommentResponseDTO();
                    reportComment.setId(response.getId());
                    reportComment.setComment_id(generalService.createCommentResponse(response.getComment()));
                    reportComment.setUser_reported(generalService.createUserResponse(response.getUser()));
                    reportComment.setReason(response.getReason());
                    reportComment.setCreate_at(new Timestamp(new Date().getTime()));
                    return reportComment;
                }) .collect(Collectors.toList());
    }
    @Autowired
    IBlogComment iBlogComment;
    @Autowired
    ICommentRepository commentRepository;
    @Override
    public StatusResopnes evaluteComment(Users users,EvaluteRequestDTO evaluteRequestDTO) {
        StatusResopnes statusResopnes = new StatusResopnes();
        ReportComment reportComment = reportCommentRepository.findById(evaluteRequestDTO.getReport_id()).orElse(null);
        BlogComment blogComment = iBlogComment.findAllByComment(reportComment.getComment());
        if (reportComment==null)
        {
            statusResopnes.setStatusCode(3);
            return statusResopnes;
        }
        if (evaluteRequestDTO.isValue())
        {
            reportCommentRepository.delete(reportComment);
            iBlogComment.delete(blogComment);
            commentRepository.delete(reportComment.getComment());
            statusResopnes.setStatusCode(1);
            return statusResopnes;
        }
        reportCommentRepository.delete(reportComment);
        statusResopnes.setStatusCode(0);
        return statusResopnes;
    }
    private void deleteAllChildComments(Comment parentComment) {
        List<Comment> childComments = commentRepository.findByParentComment(parentComment);

        for (Comment childComment : childComments) {
            // Đệ quy để xóa tất cả các bình luận con
            deleteAllChildComments(childComment);
            // Xóa bình luận con
            BlogComment childBlogComment = iBlogComment.findAllByComment(childComment);
            iBlogComment.delete(childBlogComment);
            commentRepository.delete(childComment);
        }
    }
}
