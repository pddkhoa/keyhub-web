package com.example.Keyhub.controller.Blog;

import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.TagDTO;
import com.example.Keyhub.data.entity.Blog.*;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogComment;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.ICategoryRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IBLogService;
import com.example.Keyhub.service.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/v1/list/blog")

public class BlogController {

    @Autowired
    IBLogService ibLogService;
    @Autowired
    IBlogRepository  blogRepository;
    @Autowired
    ICommentService commentService;
    @Autowired
    ICategoryRepository categoryRepository;
    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @GetMapping("/category/{category_id}")
    public ResponseEntity getBlogByCategory(@PathVariable Long category_id) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getBlogByCategory(category_id,users);
        if (list.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog by categories")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by categories")
                        .build()
                );
    }
    @GetMapping("/tags/{tag_id}")
    public ResponseEntity getBlogByTag(@PathVariable Long tag_id) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getBlogByTag(tag_id,users);
        if (list.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog by tags")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by tags")
                        .build()
                );
    }
    @GetMapping("/save")
    public ResponseEntity getBlogSaveByTag() {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getAllBlogBySave(users);
        if (list.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog saved by user")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by save")
                        .build()
                );
    }
    @GetMapping("/series/{series_id}")
    public ResponseEntity getBlogBySeries(@PathVariable BigInteger series_id) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getBlogBySeries(series_id,users);
        if (list.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog by series")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by series")
                        .build()
                );
    }
    @PostMapping("/search/{key}")
    public ResponseEntity getBlogBySearch(@PathVariable String key) {
        Users users = getUserFromAuthentication();
        if (key.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Please input key")
                            .build()
                    );
        }
        List<BlogDTO> list= ibLogService.getBlogBySearch(key,users);
        if (list.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog by search")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by tags")
                        .build()
                );
    }
    @GetMapping("/allBlog")
    public ResponseEntity getAllBlog() {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getAllBlog(users);
        if (list.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by tags")
                        .build()
                );
    }
    @GetMapping("/{category_id}/tags")
    public ResponseEntity getTagsByBlog(@PathVariable long category_id) {
        Category category= categoryRepository.findById(category_id).orElse(null);
        if (category==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("No found category")
                            .build()
                    );
        }
        Set<Tag> tagSet = category.getTags();
        List<TagDTO> tagDTOList = tagSet.stream()
                .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                .collect(Collectors.toList());

        if (tagDTOList.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(tagDTOList)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found tags by category")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(tagDTOList)
                        .statusCode(HttpStatus.OK.value())
                        .message("Tags by Category")
                        .build()
                );
    }
    @GetMapping("/draft")
    public ResponseEntity getBlogDraftByUser() {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getBlogDraftByUser(users,0);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog draft by user")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog draft by user")
                        .build()
                );
    }
    @GetMapping("{blog_id}/commentBlog")
    public ResponseEntity getCommentByBlog(@PathVariable BigInteger blog_id) {
        Users users = getUserFromAuthentication();
        Blog blog = blogRepository.findById(blog_id).orElse(null);
        if (blog==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found blog")
                            .build()
                    );
        }
        List<Comment> comment = commentService.findAllByBlog(users,blog);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(comment)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog comment")
                        .build()
                );
    }
    @GetMapping("/five-popular")
    public ResponseEntity getBlogPoppular() {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getFiveBlogPopular(users);
        if (list.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog Popular")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("The Most Popular Blogs of the Week.")
                        .build()
                );
    }
    @GetMapping("/size")
    public ResponseEntity getPopularSize() {
        List<BlogDTO> list = ibLogService.getAllBlogPublis(getUserFromAuthentication());
        int size = list.size() / 5 + (list.size() % 5 != 0 ? 1 : 0);

        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(size)
                        .statusCode(HttpStatus.OK.value())
                        .message("That all blog")
                        .build()
                );
    }
    @GetMapping("{index}/popular")
    public ResponseEntity getBlogPoppularWithPagging(@PathVariable int index) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getListPopularWithPagging(index,users);
        List<BlogDTO> listAllBlog =ibLogService.getAllBlogPublis(users);
        if (list.size()>= listAllBlog.size())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("That all blog")
                            .build()
                    );
        }
        if (list.isEmpty())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog Popular")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("The Popular Blogs ")
                        .build()
                );
    }
    @GetMapping("{index}/feed")
    public ResponseEntity getBlogFeedWithPagging(@PathVariable int index) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getAllInFeed(index,users);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("That all blog")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("The feed Blogs ")
                        .build()
                );
    }
    @GetMapping("/{index}/new")
    public ResponseEntity getBlogNew(@PathVariable int index) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getAllBlogNews(index,users);
        List<BlogDTO> listAllBlog =ibLogService.getAllBlogPublis(users);

        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog New")
                            .build()
                    );
        }
        if (list.size()>= listAllBlog.size())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("That all blog")
                            .build()
                    );
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("The News Blogs ")
                        .build()
                );
    }
    @GetMapping("/{index}/like")
    public ResponseEntity getBlogLikes(@PathVariable int index) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getAllBlogLike(index,users);
        List<BlogDTO> listAllBlog =ibLogService.getAllBlogPublis(users);

        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog Like")
                            .build()
                    );
        }
        if (list.size()>= listAllBlog.size())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("That all blog")
                            .build()
                    );
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("The Like Blogs ")
                        .build()
                );
    }
    @GetMapping("/{index}/views")
    public ResponseEntity getBlogViews(@PathVariable int index) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getAllBlogViews(index,users);
        List<BlogDTO> listAllBlog =ibLogService.getAllBlogPublis(users);

        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog Like")
                            .build()
                    );
        }
        if (list.size()>= listAllBlog.size())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(list)
                            .statusCode(HttpStatus.OK.value())
                            .message("That all blog")
                            .build()
                    );
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("The Like Blogs ")
                        .build()
                );
    }
}
