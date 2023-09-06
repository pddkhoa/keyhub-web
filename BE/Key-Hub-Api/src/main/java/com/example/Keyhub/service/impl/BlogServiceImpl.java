package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.BlogPostDTO;
import com.example.Keyhub.data.entity.Blog.*;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.ICategoryRepository;
import com.example.Keyhub.data.repository.ISeriesRepository;
import com.example.Keyhub.data.repository.ITagRepository;
import com.example.Keyhub.service.IBLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.sql.Timestamp;

import java.util.List;


@Service
public class BlogServiceImpl implements IBLogService {
    @Autowired
    private IBlogRepository blogRepository;
    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    private ITagRepository tagRepository;

    @Autowired
    ISeriesRepository iSeriesRepository;
    @Autowired
    private ISeriesRepository seriesRepository;
    @Override
    public Blog createBlog(BlogPostDTO blogPostDTO, Users user) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Blog newBlog = new Blog();
        Series series = new Series();
        newBlog.setTitle(blogPostDTO.getTitle());
        newBlog.setContent(blogPostDTO.getContent());
        newBlog.setDescription(blogPostDTO.getDescription());
        newBlog.setUser(user);
        newBlog.setCreate_date(timestamp);
        newBlog.setStatus_id(1);
        newBlog.setSeries(seriesRepository.findById(blogPostDTO.getSeriesId()).orElseThrow(null));


        List<Long> tags = blogPostDTO.getTagIds();
        List<Long> categoryIds = blogPostDTO.getCategoryIds();
        List<Tag> tagList = tagRepository.findAllById(tags);
        newBlog.setTags(tagList);
        List<Category> categories = categoryRepository.findAllById(categoryIds);
        newBlog.setCategories(categories);



        Series series1 = seriesRepository.findById(blogPostDTO.getSeriesId()).get();
        BigInteger sumSeries = blogRepository.countBySeriesId(series1.getId());
        series1.setSumBlog(sumSeries);
        seriesRepository.save(series1);
        return blogRepository.save(newBlog);
    }

    @Override
    public BlogImage addBlogImage(BlogImage blogImage, Users users) {
        return null;
    }

}
