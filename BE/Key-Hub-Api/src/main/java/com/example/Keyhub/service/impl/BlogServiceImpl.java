package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.BlogPostDTO;
import com.example.Keyhub.data.dto.response.*;
import com.example.Keyhub.data.entity.Blog.*;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.security.jwt.JwtProvider;
import com.example.Keyhub.service.IBLogService;
import jdk.nashorn.internal.ir.IfNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.sql.Timestamp;

import java.util.*;
import java.util.stream.Collectors;


@Service
public class BlogServiceImpl implements IBLogService {
    @Autowired
    private IBlogRepository blogRepository;
    @Autowired
    ISeriesImageRepository imageRepository;
    @Autowired
    private IBlogSaveRepository blogSaveRepository;
    @Autowired
    private IBlogLikeRepository blogLikeRepository;
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
        newBlog.setViews(Long.valueOf(0));
        newBlog.setCreateDate(timestamp);
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
            sumSeries = sumSeries.add(BigInteger.ONE);
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
        newBlog.setCreateDate(timestamp);
        newBlog.setStatus(0);
        newBlog.setLikes(BigInteger.ZERO);
        newBlog.setAvatar(blogPostDTO.getAvatar());
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
    public List<BlogDTO> getBlogByCategory(Long category_id, Users users ) {
        Category categorys = categoryRepository.findById(category_id).orElse(null);
        if (categorys==null)
        {
            return null;
        }
        List<Blog> list = blogRepository.findByCategoryAndStatusOrderByCreateDateDesc(categorys,1);
        List<BlogDTO> blogDTOs = new ArrayList<>();

        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());

            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);



            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }



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
    public List<BlogDTO> getBlogByTag(Long tag_id, Users users) {
        Tag tags = tagRepository.findById(tag_id).orElse(null);
        if (tags==null)
        {
            return null;
        }
        List<Blog> list = blogRepository.findByTagsAndStatusOrderByCreateDateDesc(tags,1);
        List<BlogDTO> blogDTOs = new ArrayList<>();

        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());


            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            blogDTO.setIsSave(blogSave != null);
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsSave(false);
            }

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
    public List<BlogDTO> getBlogBySeries(BigInteger series_id, Users users) {
        Series series = seriesRepository.findById(series_id).orElse(null);
        if (series==null)
        {
            return null;
        }
        List<Blog> list = blogRepository.findBySeriesAndStatusOrderByCreateDateDesc(series,1);
        List<BlogDTO> blogDTOs = new ArrayList<>();

        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());


            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            blogDTO.setIsSave(blogSave != null);
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }

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
    public List<BlogDTO> getBlogBySearch(String key, Users users) {
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
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }

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
        List<Blog> list = blogRepository.findAllByUserAndStatusOrderByCreateDateDesc(User,1);
        if (list.isEmpty())
            return null;
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : list) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(User,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(User,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsLike(true);
            }


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
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }
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
    public List<BlogDTO> getAllBlog(Users users) {
        List<Blog> list = blogRepository.findAllByOrderByCreateDateDesc();
        if (list.isEmpty())
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
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

          BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
          BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }



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
    public List<BlogDTO> getAllBlogPublis(Users users) {
        List<Blog> list = blogRepository.findAllByStatus(1);
        if (list.isEmpty())
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
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }



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
    public List<BlogDTO> getBlogDraftByUser(Users users, int status) {
        List<Blog> list = blogRepository.findAllByUserAndStatusOrderByCreateDateDesc(users,status);
        if (list.isEmpty())
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
            blogDTO.setCreate_date(blog.getCreateDate());
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
    public BlogDTO updateBlog(BlogEditDTO blogDTO, BigInteger blog_id, Users users) {
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
        blog.setCreateDate(timestamp);
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
        blogDTOss.setCreate_date(blog.getCreateDate());
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
    public BlogDTO changeStatusBlog(BigInteger blog_id, Users users) {
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


        BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
        BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
        if (blogSave==null)
        {
            blogDTOss.setIsSave(false);
        }
        else {
            blogDTOss.setIsSave(true);
        }
        if (blogLike==null)
        {
            blogDTOss.setIsLike(false);
        }
        else {
            blogDTOss.setIsSave(false);
        }
        blogDTOss.setContent(blog.getContent());
        blogDTOss.setDescription(blog.getDescription());
        blogDTOss.setCreate_date(blog.getCreateDate());
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
    public void deleteBlogById(Blog blog) {
        Series series = seriesRepository.findById(blog.getSeries().getId()).orElse(null);
        if (series!=null)
        {
            BigInteger count = series.getSumBlog();
            count=  count.subtract(BigInteger.ONE);
            series.setSumBlog(count);
            seriesRepository.save(series);
        }
        blogRepository.delete(blog);
    }

    @Override
    public LikeReponse likeBlog(Blog Blog, Users users) {
        LikeReponse likeReponse = new LikeReponse();
        BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,Blog);
        if (blogLike!=null)
        {
            likeReponse.setStatus(false);
            BigInteger count = Blog.getLikes();
            count = count.subtract(BigInteger.ONE);
            Blog.setLikes(count);
            blogRepository.save(Blog);
            blogLikeRepository.delete(blogLike);
        }
        else {
            BlogLike newBloglike = new BlogLike();
            newBloglike.setBlog(Blog);
            newBloglike.setUsers(users);
            blogLikeRepository.save(newBloglike);
            likeReponse.setStatus(true);
            BigInteger count = Blog.getLikes();
            count = count.add(BigInteger.ONE);
            Blog.setLikes(count);
            blogRepository.save(Blog);
            blogLikeRepository.save(newBloglike);
        }
        likeReponse.setLike(Blog.getLikes());
        return likeReponse;
    }

    @Override
    public List<BlogDTO> getFiveBlogPopular(Users users) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);

        Date startDate = calendar.getTime();
        calendar.add(Calendar.DATE, 6);

        Date endDate = calendar.getTime();


        Pageable pageable = PageRequest.of(0, 5);
        List<Blog> popularBlogs = blogRepository.findPopularBlogs(startDate,endDate, pageable);
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : popularBlogs) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }
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
    private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    @Override
    public List<BlogDTO> getListPopularWithPagging(int index, Users users) {
        int limit = 5;
        index = index -1;
        int offset =  index * 5;
        Pageable pageable = PageRequest.of(index, 5);
        List<Blog> popularBlogs = blogRepository.findPopularBlogsWithPagging(pageable);
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : popularBlogs) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }

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
    public List<BlogDTO> getAllInFeed(int index, Users users) {
        int limit = 5;
        limit = limit * index;

        Pageable pageable = PageRequest.of(0, limit);
        List<Blog> list = blogRepository.findAllByOrderByCreateDateDesc(pageable);
        if (list.isEmpty())
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
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }

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
    public List<BlogDTO> getAllBlogNews(int index, Users users) {
        int limit = 5;
        index =index-1;
        Pageable pageable = PageRequest.of(index, limit);
        List<Blog> list = blogRepository.findAllByStatusOrderByCreateDateDesc(1,pageable);
        if (list.isEmpty())
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
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }

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
    public List<BlogDTO> getAllBlogLike(int index, Users users) {
        int limit = 5;
        index =index-1;
        Pageable pageable = PageRequest.of(index, limit);
        List<Blog> list = blogRepository.findAllByStatusOrderByLikesDesc(pageable);
        if (list.isEmpty())
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
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }

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
    public List<BlogDTO> getAllBlogViews(int index, Users users) {
        int limit = 5;
        index =index-1;
        Pageable pageable = PageRequest.of(index, limit);
        List<Blog> list = blogRepository.findAllByStatusOrderByViewsDesc(1,pageable);
        if (list.isEmpty())
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
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            if (blogSave==null)
            {
                blogDTO.setIsSave(false);
            }
            else {
                blogDTO.setIsSave(true);
            }
            if (blogLike==null)
            {
                blogDTO.setIsLike(false);
            }
            else {
                blogDTO.setIsLike(true);
            }

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

}
