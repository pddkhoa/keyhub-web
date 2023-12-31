package com.example.Keyhub.controller.Blog;

import com.example.Keyhub.data.dto.response.BlogDTO;
import com.example.Keyhub.data.dto.response.TagDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.Comment;
import com.example.Keyhub.data.entity.Blog.Tag;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.ICategoryRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IBLogService;
import com.example.Keyhub.service.ICommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/v1/list/blog")

public class BlogController {

    final
    IBLogService ibLogService;
    final
    IBlogRepository  blogRepository;
    final
    ICommentService commentService;
    final
    ICategoryRepository categoryRepository;

    public BlogController(IBLogService ibLogService, IBlogRepository blogRepository, ICommentService commentService, ICategoryRepository categoryRepository) {
        this.ibLogService = ibLogService;
        this.blogRepository = blogRepository;
        this.commentService = commentService;
        this.categoryRepository = categoryRepository;
    }

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @GetMapping("/category/{category_id}")
    public ResponseEntity<GenericResponse> getBlogByCategory(@PathVariable Long category_id) {
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
    public ResponseEntity<GenericResponse> getBlogByTag(@PathVariable Long tag_id) {
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
    public ResponseEntity<GenericResponse> getBlogSaveByUser() {
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
    public ResponseEntity<GenericResponse> getBlogBySeries(@PathVariable BigInteger series_id) {
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
    public ResponseEntity<GenericResponse> getBlogBySearch(@PathVariable String key) {
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
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
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
                        .message("Blog by search")
                        .build()
                );
    }
    @GetMapping("/allBlog")
    public ResponseEntity<GenericResponse> getAllBlog() {
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
    public ResponseEntity<GenericResponse> getTagsByBlog(@PathVariable long category_id) {
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
    public ResponseEntity<GenericResponse> getBlogDraftByUser() {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getBlogDraftByUser(users,0);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
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
    public ResponseEntity<GenericResponse> getCommentByBlog(@PathVariable BigInteger blog_id) {
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
    public ResponseEntity<GenericResponse> getBlogPoppular() {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getFiveBlogPopular(users);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
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
    @GetMapping("/one")
    public ResponseEntity<GenericResponse> getOneBlogByCategory() {
        Users users = getUserFromAuthentication();
        BlogDTO result= ibLogService.getBlogMostInCategoryOne(users);
        if (result == null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(result)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog Popular")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(result)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog popular in category one")
                        .build()
                );
    }
    @GetMapping("/left")
    public ResponseEntity<GenericResponse> getOneBlogByCategoryLeft() {
        Users users = getUserFromAuthentication();
        List<BlogDTO> result= ibLogService.getBlogMostInCategoryFourLeft(users);
        if (result == null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog Popular")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(result)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog popular in category left")
                        .build()
                );
    }
    @GetMapping("/right")
    public ResponseEntity<GenericResponse> getOneBlogByCategoryRight() {
        Users users = getUserFromAuthentication();
        List<BlogDTO> result= ibLogService.getBlogMostInCategoryFourRight(users);
        if (result == null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog Popular")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(result)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog popular in category right")
                        .build()
                );
    }
    @GetMapping("/size")
    public ResponseEntity<GenericResponse> getPopularSize() {
        List<BlogDTO> list = ibLogService.getAllBlogPublis(getUserFromAuthentication());
        int size = list.size() / 5 ;

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
    public ResponseEntity<GenericResponse> getBlogPoppularWithPagging(@PathVariable int index) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getListPopularWithPagging(index,users);
        List<BlogDTO> listAllBlog =ibLogService.getAllBlogPublis(users);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("No blog Popular")
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
                        .message("The Popular Blogs ")
                        .build()
                );
    }
    @GetMapping("{index}/feed")
    public ResponseEntity<GenericResponse> getBlogFeedWithPagging(@PathVariable int index) {
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
    public ResponseEntity<GenericResponse> getBlogNew(@PathVariable int index) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getAllBlogNews(index,users);
        List<BlogDTO> listAllBlog =ibLogService.getAllBlogPublis(users);

        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
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
    public ResponseEntity<GenericResponse> getBlogLikes(@PathVariable int index) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getAllBlogLike(index,users);
        List<BlogDTO> listAllBlog =ibLogService.getAllBlogPublis(users);

        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
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
    public ResponseEntity<GenericResponse> getBlogViews(@PathVariable int index) {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list= ibLogService.getAllBlogViews(index,users);
        List<BlogDTO> listAllBlog =ibLogService.getAllBlogPublis(users);

        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
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
