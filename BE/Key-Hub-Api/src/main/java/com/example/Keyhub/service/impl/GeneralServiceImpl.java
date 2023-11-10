package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.response.*;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogLike;
import com.example.Keyhub.data.entity.Blog.BlogSave;
import com.example.Keyhub.data.entity.ProdfileUser.Follow;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.service.GeneralService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GeneralServiceImpl implements GeneralService {
    final
    IBlogComment blogComment;
    final
    IBlogLikeRepository blogLikeRepository;
    final
    IBlogSaveRepository blogSaveRepository;
    final
    IBlogRepository blogRepository;
    final
    IFollowRepository iFollowRepository;
    final
    IReportUserRepository reportUserRepository;

    public GeneralServiceImpl(IBlogComment blogComment, IBlogLikeRepository blogLikeRepository, IBlogSaveRepository blogSaveRepository, IBlogRepository blogRepository, IFollowRepository iFollowRepository, IReportUserRepository reportUserRepository) {
        this.blogComment = blogComment;
        this.blogLikeRepository = blogLikeRepository;
        this.blogSaveRepository = blogSaveRepository;
        this.blogRepository = blogRepository;
        this.iFollowRepository = iFollowRepository;
        this.reportUserRepository = reportUserRepository;
    }

    @Override
    public BlogDTO createBlogDTO(Users users, Blog blog) {
            BlogDTO blogDTO = new BlogDTO();
            blogDTO.setId(blog.getId());
            blogDTO.setTitle(blog.getTitle());
            blogDTO.setContent(blog.getContent());
            blogDTO.setDescription(blog.getDescription());
            blogDTO.setCreate_date(blog.getCreateDate());
            blogDTO.setAvatar(blog.getAvatar());
            blogDTO.setViews(blog.getViews());
            blogDTO.setSumComment(blogComment.countByBlog(blog));
            blogDTO.setStatus_id(blog.getStatus());
            blogDTO.setLikes(blog.getLikes());
            blogDTO.setUsers(createUserResponse(blog.getUser()));

            CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(blog.getCategory().getId());
            categoryDTO.setName(blog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);

            BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,blog);
            BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,blog);
            blogDTO.setIsSave(blogSave != null);
            blogDTO.setIsLike(blogLike != null);
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
            return blogDTO;
        }

    @Override
    public UserResponseDTO createUserResponse(Users user) {
        UserResponseDTO response = new UserResponseDTO();
        response.setId(user.getId());
        response.setName(user.getName());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setPhone(user.getPhone());
        response.setCreateDate(user.getCreateDate());
        response.setUpdateDate(user.getUpdateDate());
        response.setAvatar(user.getAvatar());
        response.setSecond_name(user.getSecond_name());
        response.setStatus(user.getStatus());
        response.setGender(user.getGender());
        response.setDescriptions(user.getDescriptions());
        response.setAddress(user.getAddress());
        response.setCompany(user.getCompany());
        response.setCountry(user.getCountry());
        response.setSchool(user.getSchool());
        int sumBlog = blogRepository.countBlogsByUserIdAndStatus(user.getId());
        response.setSumBLog(sumBlog);
        response.setBanner_url(user.getBanner_url());
        List<Follow> UserFollow = iFollowRepository.findAllByUserFollower(user);
        response.setTotalFollowing(UserFollow.size());
        List<Follow> UserFollowing = iFollowRepository.findAllByFollowing(user);
        response.setTotalFollowers(UserFollowing.size());
        return response;
    }
}
