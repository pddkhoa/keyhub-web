package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.BlogPostDTO;
import com.example.Keyhub.data.dto.request.BlogPostDraftDTO;
import com.example.Keyhub.data.dto.response.*;
import com.example.Keyhub.data.entity.Blog.*;
import com.example.Keyhub.data.entity.ProdfileUser.Follow;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.ReportBlog;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.security.jwt.JwtProvider;
import com.example.Keyhub.service.GeneralService;
import com.example.Keyhub.service.IBLogService;
import jdk.nashorn.internal.ir.IfNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.parameters.P;
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
    IBlogHIdeRepository blogHIdeRepository;
    @Autowired
    IBlockRepository blockRepository;
    @Autowired
    ISeriesImageRepository imageRepository;
    @Autowired
    IReportUserRepository reportUserRepository;
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
    @Autowired
    IUserRepository userRepository;
    @Autowired
    GeneralService generalService;
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
        newBlog.setSumViolating(0);
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
    public Blog draftBlog(BlogPostDraftDTO blogPostDTO, Users user) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        if (blogPostDTO.getTitle()==null)
        {return null;}
        Blog newBlog = new Blog();
        newBlog.setTitle(blogPostDTO.getTitle());
        newBlog.setContent(blogPostDTO.getContent());
        newBlog.setDescription(blogPostDTO.getDescription());
        newBlog.setUser(user);
        newBlog.setCreateDate(timestamp);
        newBlog.setStatus(0);
        newBlog.setLikes(BigInteger.ZERO);
        newBlog.setAvatar(blogPostDTO.getAvatar());
        if (blogPostDTO.getTagIds()!=null)
        {
            List<Long> tags = blogPostDTO.getTagIds();
            List<Tag> tagList = tagRepository.findAllById(tags);
            newBlog.setTags(tagList);
        }
        if (blogPostDTO.getCategoryIds()!=null)
        {
            Category category= categoryRepository.findById(blogPostDTO.getCategoryIds()).orElse(null);
            newBlog.setCategory(category);
        }
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
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog,users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blog.getUser()) && !blockRepository.existsByBlockerAndBlocked(blog.getUser(),users)) {
                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setViews(blog.getViews());
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
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog, users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blog.getUser()) && !blockRepository.existsByBlockerAndBlocked(blog.getUser(),users)) {
                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setViews(blog.getViews());
                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                blogDTO.setIsSave(blogSave != null);
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog, users);
            if (blogHide == null) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());
            blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
            blogDTO.setSumComment(blogComment.countByBlog(blog));
            blogDTO.setViews(blog.getViews());
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
        }}
        return blogDTOs;
    }

    @Override
    public List<BlogDTO> getBlogBySearch(String key, Users users) {
        List<Blog> list = blogRepository.searchByFullText(key);
        if (list.isEmpty())
            return null;
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : list) {
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog, users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blog.getUser()) && !blockRepository.existsByBlockerAndBlocked(blog.getUser(),users)) {                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setViews(blog.getViews());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog, User);
            if (blogHide == null) {
                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(User, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(User, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog, users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blog.getUser()) && !blockRepository.existsByBlockerAndBlocked(blog.getUser(),users)) {                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));

                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
                    blogDTO.setIsLike(true);
                }
                if (blog.getCategory() != null) {
                    CategoryDTO categoryDTO = new CategoryDTO();
                    categoryDTO.setId(blog.getCategory().getId());
                    categoryDTO.setName(blog.getCategory().getName());
                    blogDTO.setCategories(categoryDTO);
                }
                if (blog.getTags() != null) {
                    List<TagDTO> tagDTOs = blog.getTags().stream()
                            .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                            .collect(Collectors.toList());
                    blogDTO.setTags(tagDTOs);
                }
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
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog, users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blog.getUser()) && !blockRepository.existsByBlockerAndBlocked(blog.getUser(),users)) {                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                CategoryDTO categoryDTO = new CategoryDTO();
                categoryDTO.setId(blog.getCategory().getId());
                categoryDTO.setName(blog.getCategory().getName());
                blogDTO.setCategories(categoryDTO);
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setViews(blog.getViews());

                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog, users);
            if (blogHide == null) {
                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setViews(blog.getViews());

                CategoryDTO categoryDTO = new CategoryDTO();
                categoryDTO.setId(blog.getCategory().getId());
                categoryDTO.setName(blog.getCategory().getName());
                blogDTO.setCategories(categoryDTO);

                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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
            blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
            if(blog.getCategory()!=null)
            {
                CategoryDTO categoryDTO = new CategoryDTO();
                categoryDTO.setId(blog.getCategory().getId());
                categoryDTO.setName(blog.getCategory().getName());
                blogDTO.setCategories(categoryDTO);

            }
            if (blog.getTags()!=null)
            {
            List<TagDTO> tagDTOs = blog.getTags().stream()
                    .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                    .collect(Collectors.toList());
            blogDTO.setTags(tagDTOs);
            }
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

        if (blogDTO.getSeriesId()!=null)
        {
            Series series = seriesRepository.findById(blogDTO.getSeriesId()).orElse(null);
            if (series!=null)
            {
                blog.setSeries(series);
            }
        }
        List<Long> tags = blogDTO.getTagIds();
        if (tags!=null)
        {
            List<Tag> tagList = tagRepository.findAllById(tags);
            blog.setTags(tagList);
        }
        if (blogDTO.getCategoryIds()!=null) {
            Category category = categoryRepository.findById(blogDTO.getCategoryIds()).orElse(null);
            if (category == null) {
                return null;
            }
            blog.setCategory(category);
        }
        if (blogDTO.getStatus_id()==1) {
            if (blog.getSeries()!=null) {
                Series series1 = seriesRepository.findById(blog.getSeries().getId()).get();
                BigInteger sumSeries = blogRepository.countBySeriesId(series1.getId());
                series1.setSumBlog(sumSeries);
                seriesRepository.save(series1);
                blog.setSeries(series1);
            }
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
        blogDTOss.setSumComment(blogComment.countByBlog(blog));
        blogDTOss.setUsers(generalService.createUserResponse(blog.getUser()));
        if (blogDTO.getCategoryIds()!=null) {
            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTOss.setCategories(categoryDTO);
        }
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
    @Autowired
    IBlogImange blogImange;
    @Autowired
    IBlogComment blogComment;
    @Autowired
    IReportRepository reportRepository;
    @Transactional
    @Override
    public void deleteBlogById(Blog blog) {
        if (blog.getSeries()!=null)
        {
        Series series = seriesRepository.findById(blog.getSeries().getId()).orElse(null);
        if (series!=null)
        {
            BigInteger count = series.getSumBlog();
            count=  count.subtract(BigInteger.ONE);
            series.setSumBlog(count);
            seriesRepository.save(series);
        }}
        List<BlogImage> blogImage = blogImange.findByBlog(blog);
        if (blogImage!=null)
        {
            for (BlogImage blogImage1:blogImage)
                blogImange.delete(blogImage1);
        }
        List<BlogLike> blogLikes = blogLikeRepository.findByBlog(blog);
        if (blogLikes!=null)
        {
            for (BlogLike blogLike:blogLikes)
                blogLikeRepository.delete(blogLike);
        }
        List<BlogSave> blogSave = blogSaveRepository.findByBlog(blog);
        if (blogSave!=null)
        {
            for (BlogSave blogSaves:blogSave)
                blogSaveRepository.delete(blogSaves);
        }
        List<BlogComment> comments = blogComment.findAllByBlog(blog);
        if (comments!=null)
        {
            for (BlogComment comment:comments)
                blogComment.delete(comment);
        }
        List<ReportBlog> reportBlogList = reportRepository.findByBlog(blog);
        for(ReportBlog reportBlog: reportBlogList)
        {
            reportRepository.delete(reportBlog);
        }
        List<BlogHide> listBlogHide = blogHIdeRepository.findByBlog(blog);
        for (BlogHide  blogHide: listBlogHide) {
            blogHIdeRepository.delete(blogHide);
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
        calendar.add(Calendar.DATE, -6);

        Date startDate = calendar.getTime();

        calendar.setTime(new Date());
        Date endDate = calendar.getTime();


        Pageable pageable = PageRequest.of(0, 5);
        List<Blog> popularBlogs = blogRepository.findPopularBlogs(startDate,endDate);
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : popularBlogs) {
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog, users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blog.getUser()) && !blockRepository.existsByBlockerAndBlocked(blog.getUser(),users)) {                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                CategoryDTO categoryDTO = new CategoryDTO();
                categoryDTO.setId(blog.getCategory().getId());
                categoryDTO.setName(blog.getCategory().getName());
                blogDTO.setCategories(categoryDTO);
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setViews(blog.getViews());
                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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
        }
        return blogDTOs;
    }
    @Override
    public List<BlogDTO> getListPopularWithPagging(int index, Users users) {
        int itemsPerPage = 5;
        int startIndex = (index - 1) * itemsPerPage;

        List<Blog> popularBlogs = blogRepository.findPopularBlogsWithPagging();
        popularBlogs.sort(Comparator.comparing(Blog::getCreateDate).reversed());
        List<Blog> beforeFilter = new ArrayList<>();
        for (Blog blogCheck : popularBlogs)
        {
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blogCheck, users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blogCheck.getUser()) && !blockRepository.existsByBlockerAndBlocked(blogCheck.getUser(),users)) {
                beforeFilter.add(blogCheck);
            }
        }
        List<Blog> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, beforeFilter.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(beforeFilter.get(i));
        }
        if (result.isEmpty())
        {
            return null;
        }
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : result) {
                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setViews(blog.getViews());

                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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
    @Autowired
    IFollowRepository iFollowRepository;
    @Autowired
    IUserFollowCategory userFollowCategory;
    @Override
    public List<BlogDTO> getAllInFeed(int index, Users users) {
        List<Follow> follows = iFollowRepository.findAllByUserFollower(users);
        List<Users> followingUsers = follows.stream()
                .map(Follow::getFollowing)
                .collect(Collectors.toList());
        Set<Blog> uniqueBlogs = new HashSet<>(); // Sử dụng Set để lưu trữ bài viết duy nhất
        for(Users users1: followingUsers)
        {
            List<Blog> blogIsUser = blogRepository.findAllByUserAndStatusOrderByCreateDateDesc(users1,1);
            uniqueBlogs.addAll(blogIsUser);
        }
        List<FollowCategory> followedCategories = userFollowCategory.findByUser(users);
        List<Category> listCategoryFollowByUser = followedCategories.stream()
                .map(FollowCategory::getCategory)
                .collect(Collectors.toList());
        boolean isFollowingCategory = !listCategoryFollowByUser.isEmpty();
        if(isFollowingCategory) {
            for(Category category: listCategoryFollowByUser) {
                List<Blog> categoryBlogs = blogRepository.findByCategoryAndStatusOrderByCreateDateDesc(category, 1);
                uniqueBlogs.addAll(categoryBlogs);
            }
        }

        List<Blog> getAll = new ArrayList<>(uniqueBlogs);
        int itemsPerPage = 5;
        int startIndex = (index - 1) * itemsPerPage;
        getAll.sort(Comparator.comparing(Blog::getCreateDate).reversed());
        List<Blog> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, getAll.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(getAll.get(i));
        }

        if (result.isEmpty())
        {
            return null;
        }
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : result) {
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog, users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blog.getUser()) && !blockRepository.existsByBlockerAndBlocked(blog.getUser(),users)) {                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                blogDTO.setViews(blog.getViews());
                blogDTO.setSumComment(blogComment.countByBlog(blog));

                CategoryDTO categoryDTO = new CategoryDTO();
                categoryDTO.setId(blog.getCategory().getId());
                categoryDTO.setName(blog.getCategory().getName());
                blogDTO.setCategories(categoryDTO);

                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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
        }
        return blogDTOs;
    }
    @Override
    public int getAllInFeedToCheck( Users users) {
        List<Follow> follows = iFollowRepository.findAllByUserFollower(users);
        List<Users> followingUsers = follows.stream()
                .map(Follow::getFollowing)
                .collect(Collectors.toList());
        Set<Blog> uniqueBlogs = new HashSet<>(); // Sử dụng Set để lưu trữ bài viết duy nhất
        for(Users users1: followingUsers)
        {
            List<Blog> blogIsUser = blogRepository.findAllByUserAndStatusOrderByCreateDateDesc(users1,1);
            uniqueBlogs.addAll(blogIsUser);
        }
        List<FollowCategory> followedCategories = userFollowCategory.findByUser(users);
        List<Category> listCategoryFollowByUser = followedCategories.stream()
                .map(FollowCategory::getCategory)
                .collect(Collectors.toList());
        boolean isFollowingCategory = !listCategoryFollowByUser.isEmpty();
        if(isFollowingCategory) {
            for(Category category: listCategoryFollowByUser) {
                List<Blog> categoryBlogs = blogRepository.findByCategoryAndStatusOrderByCreateDateDesc(category, 1);
                uniqueBlogs.addAll(categoryBlogs);
            }
        }
        List<Blog> getAll = new ArrayList<>(uniqueBlogs);
        int size = (int) Math.ceil((double) getAll.size() / 5);
        return size;
    }

    @Override
    public boolean exitUser(BigInteger id) {
        Users users =userRepository.findById(id).orElse(null);
        if (users==null)
        {
            return false;
        }
        else
            return true;
    }

    @Override
    public List<BlogDTO> getAllBlogNews(int index, Users users) {
        int itemsPerPage = 5;
        int startIndex = (index - 1) * itemsPerPage;

        List<Blog> popularBlogs = blogRepository.findAllByStatusOrderByCreateDateDesc(1);
        popularBlogs.sort(Comparator.comparing(Blog::getCreateDate).reversed());
        List<Blog> beforeFilter = new ArrayList<>();
        for (Blog blogCheck : popularBlogs)
        {
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blogCheck, users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blogCheck.getUser()) && !blockRepository.existsByBlockerAndBlocked(blogCheck.getUser(),users)) {
                beforeFilter.add(blogCheck);
            }
        }
        List<Blog> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, beforeFilter.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(beforeFilter.get(i));
        }
        if (result.isEmpty())
        {
            return null;
        }
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : result) {
                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setViews(blog.getViews());
                CategoryDTO categoryDTO = new CategoryDTO();
                categoryDTO.setId(blog.getCategory().getId());
                categoryDTO.setName(blog.getCategory().getName());
                blogDTO.setCategories(categoryDTO);

                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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

        int itemsPerPage = 5;
        int startIndex = (index - 1) * itemsPerPage;

        List<Blog> popularBlogs = blogRepository.findAllByStatusOrderByLikesDesc();
        popularBlogs.sort(Comparator.comparing(Blog::getCreateDate).reversed());
        List<Blog> beforeFilter = new ArrayList<>();
        for (Blog blogCheck : popularBlogs)
        {
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blogCheck, users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blogCheck.getUser()) && !blockRepository.existsByBlockerAndBlocked(blogCheck.getUser(),users)) {
                beforeFilter.add(blogCheck);
            }
        }
        List<Blog> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, beforeFilter.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(beforeFilter.get(i));
        }
        if (result.isEmpty())
        {
            return null;
        }
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : result) {
                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setViews(blog.getViews());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                CategoryDTO categoryDTO = new CategoryDTO();
                categoryDTO.setId(blog.getCategory().getId());
                categoryDTO.setName(blog.getCategory().getName());
                blogDTO.setCategories(categoryDTO);

                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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
        int itemsPerPage = 5;
        int startIndex = (index - 1) * itemsPerPage;

        List<Blog> popularBlogs = blogRepository.findAllByStatusOrderByViewsDesc(1);
        popularBlogs.sort(Comparator.comparing(Blog::getCreateDate).reversed());
        List<Blog> beforeFilter = new ArrayList<>();
        for (Blog blogCheck : popularBlogs)
        {
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blogCheck, users);
            if (blogHide == null && !blockRepository.existsByBlockerAndBlocked(users,blogCheck.getUser()) && !blockRepository.existsByBlockerAndBlocked(blogCheck.getUser(),users)) {
                beforeFilter.add(blogCheck);
            }
        }
        List<Blog> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, beforeFilter.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(beforeFilter.get(i));
        }
        if (result.isEmpty())
        {
            return null;
        }
        List<BlogDTO> blogDTOs = new ArrayList<>();
        for (Blog blog : result) {
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blog, users);
            if (blogHide == null) {
                BlogDTO blogDTO = new BlogDTO();
                blogDTO.setId(blog.getId());
                blogDTO.setTitle(blog.getTitle());
                blogDTO.setContent(blog.getContent());
                blogDTO.setDescription(blog.getDescription());
                blogDTO.setCreate_date(blog.getCreateDate());
                blogDTO.setAvatar(blog.getAvatar());
                blogDTO.setStatus_id(blog.getStatus());
                blogDTO.setLikes(blog.getLikes());
                blogDTO.setSumComment(blogComment.countByBlog(blog));
                blogDTO.setViews(blog.getViews());
                blogDTO.setUsers(generalService.createUserResponse(blog.getUser()));
                CategoryDTO categoryDTO = new CategoryDTO();
                categoryDTO.setId(blog.getCategory().getId());
                categoryDTO.setName(blog.getCategory().getName());
                blogDTO.setCategories(categoryDTO);

                BlogLike blogLike = blogLikeRepository.findByUsersAndBlog(users, blog);
                BlogSave blogSave = blogSaveRepository.findByUsersAndBlog(users, blog);
                if (blogSave == null) {
                    blogDTO.setIsSave(false);
                } else {
                    blogDTO.setIsSave(true);
                }
                if (blogLike == null) {
                    blogDTO.setIsLike(false);
                } else {
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
        }
        return blogDTOs;
    }
    @Override
    public List<BlogDTO> getAllByBlogInWallUser(Users users, BigInteger user_id) {
        Users users1 = userRepository.findById(user_id).orElse(null);
        List<Blog> list = blogRepository.findAllByUserAndStatusOrderByCreateDateDesc(users1,1);
        List<BlogDTO>  result = new ArrayList<>();
        for (Blog blogDTO:list)
        {
            BlogDTO blogDTO1 = new BlogDTO();
            BlogHide blogHide = blogHIdeRepository.findByBlogAndUsers(blogDTO, users);
            if (blogHide == null) {
                blogDTO1 = generalService.createBlogDTO(users, blogDTO);
            }
            if (reportUserRepository.existsByUserReportAndUserIdReported(users,users1))
            {
                blogDTO1.getUsers().setCheckReportUser(true);
            }
            else {
                blogDTO1.getUsers().setCheckReportUser(false);
            }
            result.add(blogDTO1);
        }
        return result;
    }

}
