package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.BlogPostDTO;
import com.example.Keyhub.data.dto.response.*;
import com.example.Keyhub.data.entity.Blog.*;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.ICategoryRepository;
import com.example.Keyhub.data.repository.ISeriesRepository;
import com.example.Keyhub.data.repository.ITagRepository;
import com.example.Keyhub.service.IBLogService;
import jdk.nashorn.internal.ir.IfNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.sql.Timestamp;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class BlogServiceImpl implements IBLogService {
    @Autowired
    private IBlogRepository blogRepository;
    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    private BlogSaveService blogSaveService;
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
        newBlog.setAvatar(blogPostDTO.getAvatar());
        newBlog.setTitle(blogPostDTO.getTitle());
        newBlog.setContent(blogPostDTO.getContent());
        newBlog.setDescription(blogPostDTO.getDescription());
        newBlog.setUser(user);
        newBlog.setCreate_date(timestamp);
        newBlog.setStatus(1);
        newBlog.setLikes(BigInteger.ZERO);

        List<Long> tags = blogPostDTO.getTagIds();
        if (tags!=null)
        {
            List<Tag> tagList = tagRepository.findAllById(tags);
            newBlog.setTags(tagList);
        }
        Category category= categoryRepository.findById(blogPostDTO.getCategoryIds()).orElse(null);
        if (category==null)
        {
            return null;
        }
        newBlog.setCategory(category);
        if (blogPostDTO.getSeriesId()!=null){
            Series series1 = seriesRepository.findById(blogPostDTO.getSeriesId()).get();
            BigInteger sumSeries = blogRepository.countBySeriesId(series1.getId());
            series1.setSumBlog(sumSeries);
            seriesRepository.save(series1);
            newBlog.setSeries(series1);
        }
        return blogRepository.save(newBlog);
    }

    @Override
    public Blog draftBlog(BlogPostDTO blogPostDTO, Users user) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Blog newBlog = new Blog();
        newBlog.setTitle(blogPostDTO.getTitle());
        newBlog.setContent(blogPostDTO.getContent());
        newBlog.setDescription(blogPostDTO.getDescription());
        newBlog.setUser(user);
        newBlog.setCreate_date(timestamp);
        newBlog.setStatus(0);
        newBlog.setLikes(BigInteger.ZERO);

        List<Long> tags = blogPostDTO.getTagIds();
        if (tags!=null)
        {
            List<Tag> tagList = tagRepository.findAllById(tags);
            newBlog.setTags(tagList);
        }
        Category category= categoryRepository.findById(blogPostDTO.getCategoryIds()).orElse(null);
        if (category==null)
        {
            return null;
        }
        newBlog.setCategory(category);
        if (blogPostDTO.getSeriesId()!=null){
            Series series1 = seriesRepository.findById(blogPostDTO.getSeriesId()).get();
            BigInteger sumSeries = blogRepository.countBySeriesId(series1.getId());
            series1.setSumBlog(sumSeries);
            seriesRepository.save(series1);
            newBlog.setSeries(series1);
        }
        return blogRepository.save(newBlog);
    }

    @Override
    public List<BlogDTO> getBlogByCategory(Long category_id ) {
        Category categorys = categoryRepository.findById(category_id).orElse(null);
        if (categorys==null)
        {
            return null;
        }
        List<Blog> list = blogRepository.findByCategoryAndStatus(categorys,1);
        List<BlogDTO> blogDTOs = new ArrayList<>();

        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreate_date());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            List<TagDTO> tagDTOs = blog.getTags().stream()
                    .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                    .collect(Collectors.toList());
            blogDTO.setTags(tagDTOs);
            if (blog.getSeries() != null) {
                SeriesResponse seriesDTO = new SeriesResponse();
                seriesDTO.setId(blog.getSeries().getId());
                seriesDTO.setName(blog.getSeries().getName());
                seriesDTO.setSumBlog(blog.getSeries().getSumBlog());
                seriesDTO.setDescription(blog.getSeries().getDescription());
                seriesDTO.setCreateday(blog.getSeries().getCreateday());
                blogDTO.setSeries(seriesDTO);
            }
            blogDTOs.add(blogDTO);
        }
        return blogDTOs;
    }

    @Override
    public List<BlogDTO> getBlogByTag(Long tag_id) {
        Tag tags = tagRepository.findById(tag_id).orElse(null);
        if (tags==null)
        {
            return null;
        }
        List<Blog> list = blogRepository.findByTagsAndStatus(tags,1);
        List<BlogDTO> blogDTOs = new ArrayList<>();

        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreate_date());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            List<TagDTO> tagDTOs = blog.getTags().stream()
                    .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                    .collect(Collectors.toList());
            blogDTO.setTags(tagDTOs);
            if (blog.getSeries() != null) {
                SeriesResponse seriesDTO = new SeriesResponse();
                seriesDTO.setId(blog.getSeries().getId());
                seriesDTO.setName(blog.getSeries().getName());
                seriesDTO.setSumBlog(blog.getSeries().getSumBlog());
                seriesDTO.setDescription(blog.getSeries().getDescription());
                seriesDTO.setCreateday(blog.getSeries().getCreateday());
                blogDTO.setSeries(seriesDTO);
            }
            blogDTOs.add(blogDTO);
        }
        return blogDTOs;
    }

    @Override
    public List<BlogDTO> getBlogBySeries(BigInteger series_id) {
        Series series = seriesRepository.findById(series_id).orElse(null);
        if (series==null)
        {
            return null;
        }
        List<Blog> list = blogRepository.findBySeriesAndStatus(series,1);
        List<BlogDTO> blogDTOs = new ArrayList<>();

        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreate_date());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            List<TagDTO> tagDTOs = blog.getTags().stream()
                    .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                    .collect(Collectors.toList());
            blogDTO.setTags(tagDTOs);
            blogDTOs.add(blogDTO);
        }
        return blogDTOs;
    }

    @Override
    public List<BlogDTO> getBlogBySearch(String key) {
        List<Blog> list = blogRepository.searchByFullText(key);
        if (list.isEmpty())
            return null;
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreate_date());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            List<TagDTO> tagDTOs = blog.getTags().stream()
                    .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                    .collect(Collectors.toList());
            blogDTO.setTags(tagDTOs);
            if (blog.getSeries() != null) {
                SeriesResponse seriesDTO = new SeriesResponse();
                seriesDTO.setId(blog.getSeries().getId());
                seriesDTO.setName(blog.getSeries().getName());
                seriesDTO.setSumBlog(blog.getSeries().getSumBlog());
                seriesDTO.setDescription(blog.getSeries().getDescription());
                seriesDTO.setCreateday(blog.getSeries().getCreateday());
                blogDTO.setSeries(seriesDTO);
            }
            blogDTOs.add(blogDTO);
        }
        return blogDTOs;
    }

    @Override
    public BlogImage addBlogImage(BlogImage blogImage, Users users) {
        return null;
    }

    @Override
    public List<BlogDTO> getAllBlogByUser(Users User) {
        List<Blog> list = blogRepository.findAllByUser(User);
        if (list.isEmpty())
            return null;
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreate_date());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            List<TagDTO> tagDTOs = blog.getTags().stream()
                    .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                    .collect(Collectors.toList());
            blogDTO.setTags(tagDTOs);
            if (blog.getSeries() != null) {
                SeriesResponse seriesDTO = new SeriesResponse();
                seriesDTO.setId(blog.getSeries().getId());
                seriesDTO.setName(blog.getSeries().getName());
                seriesDTO.setSumBlog(blog.getSeries().getSumBlog());
                seriesDTO.setDescription(blog.getSeries().getDescription());
                seriesDTO.setCreateday(blog.getSeries().getCreateday());
                blogDTO.setSeries(seriesDTO);
            }
            blogDTOs.add(blogDTO);
        }
        return blogDTOs;
    }

    @Override
    public List<BlogDTO> getAllBlogBySave(Users users) {
        List<BlogSave> listSave = blogSaveService.getSavedBlogsByUser(users);
        List<Blog> list = new ArrayList<>();
        for (BlogSave blogSave : listSave) {
            Blog blog = blogSave.getBlog();
            list.add(blog);
        }
        List<BlogDTO> blogDTOs = new ArrayList<>();

        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreate_date());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            List<TagDTO> tagDTOs = blog.getTags().stream()
                    .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                    .collect(Collectors.toList());
            blogDTO.setTags(tagDTOs);
            if (blog.getSeries() != null) {
                SeriesResponse seriesDTO = new SeriesResponse();
                seriesDTO.setId(blog.getSeries().getId());
                seriesDTO.setName(blog.getSeries().getName());
                seriesDTO.setSumBlog(blog.getSeries().getSumBlog());
                seriesDTO.setDescription(blog.getSeries().getDescription());
                seriesDTO.setCreateday(blog.getSeries().getCreateday());
                blogDTO.setSeries(seriesDTO);
            }
            blogDTOs.add(blogDTO);
        }
        return blogDTOs;
    }

    @Override
    public List<BlogDTO> getAllBlog() {
        List<Blog> list = blogRepository.findAll();
        if (list==null)
        {
            return null;
        }
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreate_date());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            List<TagDTO> tagDTOs = blog.getTags().stream()
                    .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                    .collect(Collectors.toList());
            blogDTO.setTags(tagDTOs);
            if (blog.getSeries() != null) {
                SeriesResponse seriesDTO = new SeriesResponse();
                seriesDTO.setId(blog.getSeries().getId());
                seriesDTO.setName(blog.getSeries().getName());
                seriesDTO.setSumBlog(blog.getSeries().getSumBlog());
                seriesDTO.setDescription(blog.getSeries().getDescription());
                seriesDTO.setCreateday(blog.getSeries().getCreateday());
                blogDTO.setSeries(seriesDTO);
            }
            blogDTOs.add(blogDTO);
        }
        return blogDTOs;
    }

    @Override
    @Transactional
    public BlogDTO updateBlog(BlogEditDTO blogDTO, BigInteger blog_id) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Blog blog = blogRepository.findById(blog_id).orElse(null);
        blog.setTags(new ArrayList<>());
        blog.setSeries(null);
        blogRepository.save(blog);
        if (blog==null)
        {
            return null;
        }
        blog.setTitle(blogDTO.getTitle());
        blog.setContent(blogDTO.getContent());
        blog.setDescription(blogDTO.getDescription());
        blog.setCreate_date(timestamp);
        blog.setAvatar(blogDTO.getAvatar());
        blog.setStatus(blogDTO.getStatus_id());
        blog.setLikes(blog.getLikes());

        List<Long> tags = blogDTO.getTagIds();
        if (tags!=null)
        {
            List<Tag> tagList = tagRepository.findAllById(tags);
            blog.setTags(tagList);
        }
        Category category = categoryRepository.findById(blogDTO.getCategoryIds()).orElse(null);
        if (category==null)
        {
            return null;
        }
        blog.setCategory(category);
        if (blogDTO.getSeriesId()!=null){
            Series series1 = seriesRepository.findById(blogDTO.getSeriesId()).get();
            BigInteger sumSeries = blogRepository.countBySeriesId(series1.getId());
            series1.setSumBlog(sumSeries);
            seriesRepository.save(series1);
            blog.setSeries(series1);
        }
        blogRepository.save(blog);
        BlogDTO blogDTOss = new BlogDTO();
        blogDTOss.setId(blog.getId());
        blogDTOss.setTitle(blog.getTitle());
        blogDTOss.setContent(blog.getContent());
        blogDTOss.setDescription(blog.getDescription());
        blogDTOss.setCreate_date(blog.getCreate_date());
        blogDTOss.setAvatar(blog.getAvatar());
        blogDTOss.setStatus_id(blog.getStatus());
        blogDTOss.setLikes(blog.getLikes());
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(blog.getCategory().getId());
        categoryDTO.setName(blog.getCategory().getName());
        blogDTOss.setCategories(categoryDTO);
        List<TagDTO> tagDTOs = blog.getTags().stream()
                .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                .collect(Collectors.toList());
        blogDTOss.setTags(tagDTOs);
        if (blog.getSeries() != null) {
            SeriesResponse seriesDTO = new SeriesResponse();
            seriesDTO.setId(blog.getSeries().getId());
            seriesDTO.setName(blog.getSeries().getName());
            seriesDTO.setSumBlog(blog.getSeries().getSumBlog());
            seriesDTO.setDescription(blog.getSeries().getDescription());
            seriesDTO.setCreateday(blog.getSeries().getCreateday());
            blogDTOss.setSeries(seriesDTO);
        }
        blogRepository.save(blog);
        return blogDTOss;
    }

    @Override
    public BlogDTO changeStatusBlog(BigInteger blog_id) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Blog blog = blogRepository.findById(blog_id).orElse(null);
        blog.setTags(new ArrayList<>());
        blog.setSeries(null);
        blog.setStatus(1);
        blogRepository.save(blog);
        if (blog==null)
        {
            return null;
        }
        BlogDTO blogDTOss = new BlogDTO();
        blogDTOss.setId(blog.getId());
        blogDTOss.setTitle(blog.getTitle());
        blogDTOss.setContent(blog.getContent());
        blogDTOss.setDescription(blog.getDescription());
        blogDTOss.setCreate_date(blog.getCreate_date());
        blogDTOss.setAvatar(blog.getAvatar());
        blogDTOss.setStatus_id(blog.getStatus());
        blogDTOss.setLikes(blog.getLikes());
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(blog.getCategory().getId());
        categoryDTO.setName(blog.getCategory().getName());
        blogDTOss.setCategories(categoryDTO);
        List<TagDTO> tagDTOs = blog.getTags().stream()
                .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                .collect(Collectors.toList());
        blogDTOss.setTags(tagDTOs);
        if (blog.getSeries() != null) {
            SeriesResponse seriesDTO = new SeriesResponse();
            seriesDTO.setId(blog.getSeries().getId());
            seriesDTO.setName(blog.getSeries().getName());
            seriesDTO.setSumBlog(blog.getSeries().getSumBlog());
            seriesDTO.setDescription(blog.getSeries().getDescription());
            seriesDTO.setCreateday(blog.getSeries().getCreateday());
            blogDTOss.setSeries(seriesDTO);
        }
        blogRepository.save(blog);
        return blogDTOss;
    }

}
