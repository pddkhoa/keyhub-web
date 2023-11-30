package com.example.Keyhub.controller.User;

import com.cloudinary.Cloudinary;
import com.example.Keyhub.config.ValidatorUtils;
import com.example.Keyhub.data.dto.request.*;
import com.example.Keyhub.data.dto.response.CategoryDTO;
import com.example.Keyhub.data.dto.response.*;
import com.example.Keyhub.data.entity.Blog.*;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.Notification.Notification;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.*;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/v1/blog")
public class AccountBlog {
    final
    ISeriesImageRepository seriesImageRepository;
    private final INotificationService notificationService;
    final
    GeneralService generalService;
    final
    IReportUserRepository reportUserRepository;
    final
    IUserService userService;
    final
    ICommentService commentService;
    final
    IBlogLikeRepository blogLikeRepository;
    final
    IBlogSaveRepository blogSaveRepository;
    final
    IBlogComment iBlogComment;
    final
    ICommentRepository commentRepository;
    final
    Cloudinary cloudinary;
    final
    IBlogSaveRepository iBlogSaveRepository;
    private final IBLogService ibLogService;
    private final ISeriesRepository seriesRepository;
    final
    IUserService iUserService;
    final
    UploadImageService uploadImageService;
    final
    ModelMapper modelMapper;
    final
    IBlogImange iBlogImange;
    final
    ICategoryRepository iCategoryRepository;
    final
    ITagRepository iTagRepository;
    final
    IBlogRepository blogRepository;
    final
    ICategoryService categoryService;

    public AccountBlog(IBlogLikeRepository blogLikeRepository, ISeriesImageRepository seriesImageRepository, IUserService userService, ICommentService commentService, ITagRepository iTagRepository, IBlogSaveRepository blogSaveRepository, ICommentRepository commentRepository, IUserRepository userRepository, Cloudinary cloudinary, IBlogSaveRepository iBlogSaveRepository, IBlogRepository blogRepository, UploadImageService uploadImageService, ModelMapper modelMapper, IBLogService ibLogService, ICategoryRepository iCategoryRepository, ISeriesRepository seriesRepository, IUserService iUserService, IBlogImange iBlogImange, IBlogComment iBlogComment, GeneralService generalService, IReportUserRepository reportUserRepository, INotificationService notificationService, ICategoryService categoryService) {
        this.blogLikeRepository = blogLikeRepository;
        this.seriesImageRepository = seriesImageRepository;
        this.userService = userService;
        this.commentService = commentService;
        this.iTagRepository = iTagRepository;
        this.blogSaveRepository = blogSaveRepository;
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.cloudinary = cloudinary;
        this.iBlogSaveRepository = iBlogSaveRepository;
        this.blogRepository = blogRepository;
        this.uploadImageService = uploadImageService;
        this.modelMapper = modelMapper;
        this.ibLogService = ibLogService;
        this.iCategoryRepository = iCategoryRepository;
        this.seriesRepository = seriesRepository;
        this.iUserService = iUserService;
        this.iBlogImange = iBlogImange;
        this.iBlogComment = iBlogComment;
        this.generalService = generalService;
        this.reportUserRepository = reportUserRepository;
        this.notificationService = notificationService;
        this.categoryService = categoryService;
    }

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }

    final
    IUserRepository userRepository;

    @RequestMapping(value = "/upload-video", method = RequestMethod.POST)
    public ResponseEntity<GenericResponse> uploadVideo(@RequestParam MultipartFile video_file, HttpServletRequest request, HttpServletResponse response) {
        if (!ValidatorUtils.validateMineVideoFile(video_file))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Request failed. This file must be mp4,WebM,Ogg.Please validate file again")
                            .build()
                    );
        }
        String url = uploadImageService.uploadVideo(video_file);
        Cookie[] cookies = request.getCookies();
        String currentImageUrls = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("temporaryImageUrls".equals(cookie.getName())) {
                    currentImageUrls = cookie.getValue();
                    break;
                }
            }
        }
        String tempImageUrls = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("tempoUrl".equals(cookie.getName())) {
                    tempImageUrls = cookie.getValue();
                    break;
                }
            }
        }
        if (tempImageUrls==null)
        {
            tempImageUrls = url;
        }
        else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Url Not Found")
                            .build()
                    );
        }
        url = getString(response, url, currentImageUrls, tempImageUrls);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .result(url)
                        .message("Upload video was successful")
                        .build()
                );
    }

    private String getString(HttpServletResponse response, String url, String currentImageUrls, String tempImageUrls) {
        Cookie tempoUrl = new Cookie("tempoUrl",tempImageUrls);
        tempoUrl.setMaxAge(60*60*24);
        response.addCookie(tempoUrl);
        if (currentImageUrls != null) {
            url = currentImageUrls + "-" + url;
        }
        Cookie imageUrlsCookie = new Cookie("temporaryImageUrls", url);
        imageUrlsCookie.setMaxAge(60 * 60 * 24);
        response.addCookie(imageUrlsCookie);
        return url;
    }

    @RequestMapping(value = "/upload-file", method = RequestMethod.POST)
    public ResponseEntity<GenericResponse> uploadFile(@RequestParam MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
        if (!ValidatorUtils.validateMineFile(file))
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Request failed. This file must be png, jpg, jpeg, bmp, gif, bmp, tiff, webp, svg+xml, pdf, doc, docx, xls, xlsx,ppt, pptx, odt, ods. Please validate the file again.")
                            .build()
                    );
        }
        String url = uploadImageService.uploadFile(file);
        Cookie[] cookies = request.getCookies();
        if (url==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Request failed.")
                            .build()
                    );
        }
        String currentImageUrls = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("temporaryImageUrls".equals(cookie.getName())) {
                    currentImageUrls = cookie.getValue();
                    break;
                }
            }
        }
        String tempImageUrls = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("tempoUrl".equals(cookie.getName())) {
                    tempImageUrls = cookie.getValue();
                    break;
                }
            }
        }
        if (tempImageUrls==null)
            tempImageUrls = url;
        url = getString(response, url, currentImageUrls, tempImageUrls);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .result(url)
                        .message("Upload file was successful")
                        .build()
                );
    }
    @GetMapping(value="/fetchUrl")
    public ResponseEntity<GenericResponse> fetchUrl( HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();

        String tempImageUrls = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("tempoUrl".equals(cookie.getName())) {
                    tempImageUrls = cookie.getValue();
                    break;
                }
            }
        }
        if (tempImageUrls==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Url Not Found")
                            .build()
                    );
        }
        Cookie emptyCookie = new Cookie("tempoUrl", "");
        emptyCookie.setMaxAge(0);
        response.addCookie(emptyCookie);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .result(tempImageUrls   )
                        .message("Get URL Success")
                        .build()
                );
    }
    @RequestMapping(value = "/upload-avatar", method = RequestMethod.POST)
    public ResponseEntity<GenericResponse> uploadAvatar(@RequestParam MultipartFile file) {
        if (!ValidatorUtils.validateMineFile(file))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Request failed. This file must be png, jpg, jpeg, bmp, gif, bmp, tiff, webp, svg+xml, pdf, doc, docx, xls, xls. Please validate the file again.")
                            .build()
                    );
        String url = uploadImageService.uploadFile(file);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .result(url)
                        .message("Upload avatar was successful")
                        .build()
                );
    }
    @Transactional
    @RequestMapping(value = "/create-blog", method = RequestMethod.POST)
    public ResponseEntity<GenericResponse> createBlog(@RequestBody BlogPostDTO body,
                                                      HttpServletRequest request, HttpServletResponse response) {
        List<String> errors = body.validateAndGetErrors();
        if (!errors.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message(errors.get(0))
                            .build()
                    );
        }
        Blog newBlog = ibLogService.createBlog(body, getUserFromAuthentication());
        Cookie[] cookies = request.getCookies();
        String currentImageUrls = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("temporaryImageUrls".equals(cookie.getName())) {
                    currentImageUrls = cookie.getValue();
                    break;
                }
            }
        }
        if (currentImageUrls != null) {
            String[] imageUrlArray = currentImageUrls.split("-");
            for (String imageUrl : imageUrlArray) {
                uploadImageService.saveURL(newBlog, imageUrl);
            }
        }
        Cookie emptyCookie = new Cookie("temporaryImageUrls", "");
        emptyCookie.setMaxAge(0);
        response.addCookie(emptyCookie);

        BlogDTO blogDTO = new BlogDTO();
        blogDTO.setCreate_date(newBlog.getCreateDate());
        blogDTO.setId(newBlog.getId());
        blogDTO.setTitle(newBlog.getTitle());
        blogDTO.setIsSave(false);
        blogDTO.setUsers(generalService.createUserResponse(getUserFromAuthentication()));
        blogDTO.setIsLike(false);
        blogDTO.setSumComment(0);
        blogDTO.setStatus_id(1);
        blogDTO.setContent(newBlog.getContent());
        blogDTO.setAvatar(newBlog.getAvatar());
        blogDTO.setDescription(newBlog.getDescription());
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(newBlog.getCategory().getId());
        categoryDTO.setName(newBlog.getCategory().getName());
        blogDTO.setCategories(categoryDTO);
        if (newBlog.getTags()!=null) {
        List<TagDTO> tagDTOs = newBlog.getTags().stream()
                .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                .collect(Collectors.toList());
        blogDTO.setTags(tagDTOs);}
        if (newBlog.getSeries() != null) {
            SeriesResponse seriesDTO = new SeriesResponse();
            seriesDTO.setId(newBlog.getSeries().getId());
            seriesDTO.setName(newBlog.getSeries().getName());
            seriesDTO.setSumBlog(newBlog.getSeries().getSumBlog());
            seriesDTO.setDescription(newBlog.getSeries().getDescription());
            seriesDTO.setCreateday(newBlog.getSeries().getCreateday());
            blogDTO.setSeries(seriesDTO);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(blogDTO)
                        .statusCode(HttpStatus.OK.value())
                        .message("Create blog was successful")
                        .build()
                );
    }

    @RequestMapping(value = "/draft-blog", method = RequestMethod.POST)
    public ResponseEntity<GenericResponse> hideBlog( @RequestBody BlogPostDraftDTO body,
                                      HttpServletRequest request, HttpServletResponse response) {
        List<String> errors = body.validateAndGetErrors();
        if (!errors.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message(errors.get(0))
                            .build()
                    );
        }
        Blog newBlog = ibLogService.draftBlog(body, getUserFromAuthentication());
        Cookie[] cookies = request.getCookies();
        String currentImageUrls = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("temporaryImageUrls".equals(cookie.getName())) {
                    currentImageUrls = cookie.getValue();
                    break;
                }
            }
        }
        String avatarImageUrls = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("temporaryAvatarUrls".equals(cookie.getName())) {
                    avatarImageUrls = cookie.getValue();
                    break;
                }
            }
        }
        if (avatarImageUrls != null) {
            newBlog.setAvatar(avatarImageUrls);
            blogRepository.save(newBlog);
        }
        if (currentImageUrls != null) {
            String[] imageUrlArray = currentImageUrls.split("-");
            for (String imageUrl : imageUrlArray) {
                uploadImageService.saveURL(newBlog, imageUrl);
            }
        }
        Cookie emptyCookie = new Cookie("temporaryImageUrls", "");
        emptyCookie.setMaxAge(0);
        response.addCookie(emptyCookie);


        BlogDTO blogDTO = new BlogDTO();
        blogDTO.setCreate_date(newBlog.getCreateDate());
        blogDTO.setId(newBlog.getId());
        blogDTO.setUsers(generalService.createUserResponse(newBlog.getUser()));
        blogDTO.setTitle(newBlog.getTitle());
        blogDTO.setIsLike(false);
        blogDTO.setSumComment(0);
        blogDTO.setIsSave(false);
        blogDTO.setAvatar(newBlog.getAvatar());
        blogDTO.setContent(newBlog.getContent());
        blogDTO.setDescription(newBlog.getDescription());
        if (body.getTagIds()!=null){   CategoryDTO categoryDTO = new CategoryDTO();
            categoryDTO.setId(newBlog.getCategory().getId());
            categoryDTO.setName(newBlog.getCategory().getName());
            blogDTO.setCategories(categoryDTO);}


        if (newBlog.getTags()!=null) {
            List<TagDTO> tagDTOs = newBlog.getTags().stream()
                    .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                    .collect(Collectors.toList());
            blogDTO.setTags(tagDTOs);}
        if (newBlog.getSeries() != null) {
            SeriesResponse seriesDTO = new SeriesResponse();
            seriesDTO.setId(newBlog.getSeries().getId());
            seriesDTO.setName(newBlog.getSeries().getName());
            seriesDTO.setSumBlog(newBlog.getSeries().getSumBlog());
            seriesDTO.setDescription(newBlog.getSeries().getDescription());
            seriesDTO.setCreateday(newBlog.getSeries().getCreateday());
            blogDTO.setSeries(seriesDTO);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(blogDTO)
                        .statusCode(HttpStatus.OK.value())
                        .message("Create blog was successful")
                        .build()
                );
    }
    @PostMapping("/cancel")
    public ResponseEntity<GenericResponse> cancelRequest(HttpServletResponse response) {
        Cookie emptyCookie = new Cookie("temporaryImageUrls", "");
        emptyCookie.setMaxAge(0);
        response.addCookie(emptyCookie);
        Cookie emptyCookieAvatar = new Cookie("temporaryAvatarUrls", "");
        emptyCookieAvatar.setMaxAge(0);
        response.addCookie(emptyCookieAvatar);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(emptyCookie)
                        .statusCode(HttpStatus.OK.value())
                        .message("Delete all cookie")
                        .build()
                );
    }
    @RequestMapping(value = "/image-series", method = RequestMethod.POST)
    public ResponseEntity<GenericResponse> uploadSeriesImage(@RequestParam MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
        if (!ValidatorUtils.validateMineFile(file))
        {return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .message("Request failed. This file must be png, jpg, jpeg, bmp, gif, bmp. Please validate the file again.")
                        .build()
                );}
        String url = uploadImageService.uploadFile(file);
        Cookie[] cookies = request.getCookies();
        String currentImageUrls = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("seriesImage".equals(cookie.getName())) {
                    currentImageUrls = cookie.getValue();
                    break;
                }
            }
        }
        if (currentImageUrls != null) {
            url = currentImageUrls + "-" + url;
        }
        Cookie imageUrlsCookie = new Cookie("seriesImage", url);
        imageUrlsCookie.setMaxAge(60 * 60 * 24);
        response.addCookie(imageUrlsCookie);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(url)
                        .statusCode(HttpStatus.OK.value())
                        .message("Upload file was successful")
                        .build()
                );
    }
    @PatchMapping("/{series_id}/edit-series")
    public ResponseEntity<GenericResponse> editSeries( @PathVariable BigInteger series_id,@Valid @RequestBody SeriesDTO series, HttpServletRequest request, HttpServletResponse response) {

        Series seriesCheck= seriesRepository.findById(series_id).orElse(null);
        if (seriesCheck==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Series not found")
                            .build()
                    );
        }

        Series seriesFind = seriesRepository.findByNameAndUser(series.getName(),getUserFromAuthentication());
        if(seriesFind==null) {
            Series series1 = iUserService.editSeries(series_id, series, getUserFromAuthentication());
            Cookie[] cookies = request.getCookies();
            String currentImageUrls = null;
            if (cookies != null) {
                for (Cookie cookie : cookies) {
                    if ("seriesImage".equals(cookie.getName())) {
                        currentImageUrls = cookie.getValue();
                        break;
                    }
                }
            }
            String lastImageUrl = null;
            if (currentImageUrls != null) {
                String[] imageUrlArray = currentImageUrls.split("-");
                int lastIndex = imageUrlArray.length - 1;
                if (lastIndex >= 0) {
                    lastImageUrl = imageUrlArray[lastIndex];
                    uploadImageService.saveURLSeries(series1, lastImageUrl);
                }
            }

            SeriesResponse seriesResponse = new SeriesResponse();
            seriesResponse.setSumBlog(series1.getSumBlog());
            seriesResponse.setImage(lastImageUrl);
            seriesResponse.setId(series_id);
            seriesResponse.setName(series1.getName());
            seriesResponse.setDescription(series1.getDescription());
            seriesResponse.setCreateday(series1.getCreateday());
            SeriesImage seriesImage = seriesImageRepository.findBySeries(series1).orElse(null);
            seriesResponse.setImage(seriesImage != null ? seriesImage.getUrlImage() : null);

            Cookie emptyCookie = new Cookie("seriesImage", "");
            emptyCookie.setMaxAge(0);
            response.addCookie(emptyCookie);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(seriesResponse)
                            .statusCode(HttpStatus.OK.value())
                            .message("Change series  success")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .message("Edit series fail. Series exits")
                        .build()
                );
    }
    @PostMapping("/add-series")
    public ResponseEntity<GenericResponse> addsSeries(@Valid @RequestBody SeriesDTO series, BindingResult bindingResult , HttpServletRequest request, HttpServletResponse response) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("The request has failed to execute. Please check the input data.")
                            .build()
                    );
        }
        Series seriesFind = seriesRepository.findByNameAndUser(series.getName(),getUserFromAuthentication());
        if(seriesFind==null){
        Series series1= iUserService.addSeries(series, getUserFromAuthentication());
            SeriesResponse seriesResponse = new SeriesResponse();
            seriesResponse.setId(series1.getId());
            seriesResponse.setCreateday(series1.getCreateday());
            seriesResponse.setSumBlog(series1.getSumBlog());
            seriesResponse.setDescription(series1.getDescription());
            seriesResponse.setName(series1.getName());
            Cookie[] cookies = request.getCookies();
            String currentImageUrls = null;
            if (cookies != null) {
                for (Cookie cookie : cookies) {
                    if ("seriesImage".equals(cookie.getName())) {
                        currentImageUrls = cookie.getValue();
                        break;
                    }
                }
            }
            if (currentImageUrls != null) {
                String[] imageUrlArray = currentImageUrls.split("-");
                int lastIndex = imageUrlArray.length - 1;
                if (lastIndex >= 0) {
                    String lastImageUrl = imageUrlArray[lastIndex];
                    uploadImageService.saveURLSeries(series1, lastImageUrl);
                }
            }
            Cookie emptyCookie = new Cookie("seriesImage", "");
            emptyCookie.setMaxAge(0);
            response.addCookie(emptyCookie);
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(seriesResponse)
                            .statusCode(HttpStatus.OK.value())
                            .message("Add series success")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .message("Add series fail. Series exits")
                        .build()
                );
    }
    @Transactional
    @DeleteMapping("/remove-series/{series_id}")
    public ResponseEntity<GenericResponse> removeSeries( @PathVariable BigInteger series_id) {
        Series series = seriesRepository.findById(series_id).orElse(null);
        if (series==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found series")
                            .build()
                    );
        }
        seriesImageRepository.findBySeries(series).ifPresent(seriesImageRepository::delete);
        List<Blog> blogList= blogRepository.findBySeriesAndStatusOrderByCreateDateDesc(series,1);
        for (Blog blog :blogList)
        {
            ibLogService.deleteBlogById(blog);
        }
        seriesRepository.deleteByIdAndUser(series_id,getUserFromAuthentication());
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .message("Delete series success")
                        .build()
                );
    }
    @GetMapping("/series/list")
    public ResponseEntity<GenericResponse> getBlockList() {
        Users users = getUserFromAuthentication();
        List<SeriesResponse> list = iUserService.getAllSerieByUser(users);
        if (list.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("User don't have series")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("List series")
                        .build()
                );
    }
    @GetMapping("/category/list")
    public ResponseEntity<GenericResponse> getListCategory() {
        List<Category> series1 = iCategoryRepository.findAll();
        if (series1.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found categories")
                            .build()
                    );
        }
        List<CategoryDTO> categoryDTOS = new ArrayList<>();
        for (Category series : series1) {
            CategoryDTO seriesDTO = modelMapper.map(series, CategoryDTO.class);
            categoryDTOS.add(seriesDTO);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(categoryDTOS)
                        .statusCode(HttpStatus.OK.value())
                        .message("List categories")
                        .build()
                );
    }
    @GetMapping("/tags/list")
    public ResponseEntity<GenericResponse> getListTag() {
        List<Tag> series1 = iTagRepository.findAll();
        if (series1.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found tags")
                            .build()
                    );
        }
        List<TagResponseDTO> categoryDTOS = new ArrayList<>();
        for (Tag tag : series1) {
            TagResponseDTO tagResponseDTO = new TagResponseDTO();
            CategoryResponseCardDTO dto = new CategoryResponseCardDTO();
            dto.setId(tag.getCategory().getId());
            dto.setBanner(tag.getCategory().getBanner());
            dto.setName(tag.getCategory().getName());
            dto.setAvatar(tag.getCategory().getAvatar());
            dto.setDescription(tag.getCategory().getDescription());
            tagResponseDTO.setCategory(dto);
            tagResponseDTO.setName(tag.getName());
            tagResponseDTO.setId(tag.getId());
            categoryDTOS.add(tagResponseDTO);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(categoryDTOS)
                        .statusCode(HttpStatus.OK.value())
                        .message("List tags")
                        .build()
                );
    }
    @GetMapping("/{blog_id}")
    public ResponseEntity<GenericResponse> getBlogById( @PathVariable BigInteger blog_id) {
        Blog newBlog = blogRepository.findById(blog_id).orElse(null);
        BlogDTO blogDTO = new BlogDTO();
        assert newBlog != null;
        blogDTO.setId(newBlog.getId());
        blogDTO.setTitle(newBlog.getTitle());
        blogDTO.setContent(newBlog.getContent());
        blogDTO.setDescription(newBlog.getDescription());
        blogDTO.setCreate_date(newBlog.getCreateDate());
        blogDTO.setAvatar(newBlog.getAvatar());
        blogDTO.setStatus_id(newBlog.getStatus());
        blogDTO.setUsers(generalService.createUserResponse(newBlog.getUser()));
        blogDTO.setSumComment(iBlogComment.countByBlog(newBlog));
        blogDTO.setLikes(newBlog.getLikes());
        //IsSave - IsLike
        Users users = getUserFromAuthentication();
        BlogLike blogLike =blogLikeRepository.findByUsersAndBlog(users,newBlog);
        BlogSave blogSave= blogSaveRepository.findByUsersAndBlog(users,newBlog);
        blogDTO.getUsers().setCheckReportUser(reportUserRepository.existsByUserReportAndUserIdReported(users, newBlog.getUser()));
        blogDTO.setIsSave(blogSave != null);
        blogDTO.setIsLike(blogLike != null);

        //Views
        if (!Objects.equals(users.getId(), newBlog.getUser().getId()))
        {
            Long count = newBlog.getViews();
            if(count==null)
            {
                count = 1L;
            }
            else {
                count= count+1;
            }
            newBlog.setViews(count);
            blogRepository.save(newBlog);
            blogDTO.setViews(count);
        }
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(newBlog.getCategory().getId());
        categoryDTO.setName(newBlog.getCategory().getName());
        blogDTO.setCategories(categoryDTO);

        List<TagDTO> tagDTOs = newBlog.getTags().stream()
                .map(tag -> new TagDTO(tag.getId(), tag.getName()))
                .collect(Collectors.toList());
        blogDTO.setTags(tagDTOs);
        if (newBlog.getSeries() != null) {
            SeriesResponse seriesDTO = new SeriesResponse();
            seriesDTO.setId(newBlog.getSeries().getId());
            seriesDTO.setName(newBlog.getSeries().getName());
            seriesDTO.setSumBlog(newBlog.getSeries().getSumBlog());
            seriesDTO.setDescription(newBlog.getSeries().getDescription());
            seriesDTO.setCreateday(newBlog.getSeries().getCreateday());
            blogDTO.setSeries(seriesDTO);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(blogDTO)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by id")
                        .build()
                );
    }
    @PostMapping("/{blogId}/like")
    public ResponseEntity<?> likeBlog(@PathVariable BigInteger blogId) {
        Users user = getUserFromAuthentication();
        Blog blog = blogRepository.findById(blogId).orElse(null);
        if (blog==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found Blog")
                            .build()
                    );
        }
        LikeReponse likeReponse = ibLogService.likeBlog(blog,user);
        if (!likeReponse.getStatus())
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(likeReponse)
                            .statusCode(HttpStatus.OK.value())
                            .message("Dislike blog success")
                            .build()
                    );
        }
        else {
            Notification notification = new Notification();
            Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            notification.setUserId(blog.getUser().getId()); // User's Blog
            notification.setAction("LIKE");
            notification.setCreatedAt(timestamp);
            notification.setRelatedObjectId(blog.getId());
            notificationService.sendNotification(notification);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(likeReponse)
                        .statusCode(HttpStatus.OK.value())
                        .message("Like blog success")
                        .build()
                );
    }}
    @PostMapping("/{blogId}/save")
    public ResponseEntity<?> saveBlog(@PathVariable BigInteger blogId) {
        Users user = getUserFromAuthentication();
        Blog blog = blogRepository.findById(blogId).orElse(null);
        BlogSave blogCheck= iBlogSaveRepository.findByUsersAndBlog(user,blog);
        if (blog==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found Blog")
                            .build()
                    );
        }
        if (blogCheck!=null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("User have been saved this blog")
                            .build()
                    );
        }
        BlogSave blogSave= new BlogSave();
        blogSave.setBlog(blog);
        blogSave.setUsers(user);
        iBlogSaveRepository.save(blogSave);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(blogSave)
                        .statusCode(HttpStatus.OK.value())
                        .message("Save blog success")
                        .build()
                );
    }
    @Transactional
    @DeleteMapping("/{blogId}/cancel-save")
    public ResponseEntity<?> disableSaveBlog(@PathVariable BigInteger blogId) {
        Users user = getUserFromAuthentication();
        Blog blog = blogRepository.findById(blogId).orElse(null);
        BlogSave blogCheck= iBlogSaveRepository.findByUsersAndBlog(user,blog);
        if (blog==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found Blog")
                            .build()
                    );
        }
        if (blogCheck==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("User haven't been saved this blog")
                            .build()
                    );
        }
        iBlogSaveRepository.delete(blogCheck);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(null)
                        .statusCode(HttpStatus.OK.value())
                        .message("Cancel save successful")
                        .build()
                );
    }
    @GetMapping("/user")
    public ResponseEntity<GenericResponse> getAllBlogByUser() {
        Users users = getUserFromAuthentication();
        List<BlogDTO> list = ibLogService.getAllBlogByUser(users);
        if (list==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found Blog by user")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(list)
                        .statusCode(HttpStatus.OK.value())
                        .message("Blog by User")
                        .build()
                );
    }
    @PatchMapping("/{blog_id}/edit")
    public ResponseEntity<GenericResponse> editBlogByUser(  @RequestBody  BlogEditDTO blogDTO,@PathVariable  BigInteger blog_id) {
       if (blogDTO.getStatus_id()==1)
       {
           List<String> errors = blogDTO.validateAndGetErrors();
           if (!errors.isEmpty()) {
               return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                       .body(GenericResponse.builder()
                               .success(false)
                               .statusCode(HttpStatus.BAD_REQUEST.value())
                               .message(errors.get(0))
                               .build()
                       );
           }
       }
        Users users = getUserFromAuthentication();
        BlogDTO blog = ibLogService.updateBlog(blogDTO,blog_id,users);
        if (blog==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found Blog")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(blog)
                        .statusCode(HttpStatus.OK.value())
                        .message("Edit success")
                        .build()
                );
    }
    @Transactional
    @DeleteMapping("/{blog_id}/delete")
    public ResponseEntity<?> deleteBlogById(@PathVariable BigInteger blog_id) {
        Blog blog = blogRepository.findById(blog_id).orElse(null);
        if (blog==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found blog")
                            .build()
                    );
        }
        ibLogService.deleteBlogById(blog);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(null)
                        .statusCode(HttpStatus.OK.value())
                        .message("Delete blog successful")
                        .build()
                );
    }
    @PostMapping("/{blog_id}/comment")
    public ResponseEntity<?> commentBlog(@PathVariable BigInteger blog_id, @RequestBody CommentDTO DTO) {
        Blog blog = blogRepository.findById(blog_id).orElse(null);
        Users users= getUserFromAuthentication();
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
        Comment comment = commentService.addComment(users,blog,DTO);
        Notification notification = new Notification();
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        notification.setUserId(blog.getUser().getId()); //User ' Blog
        notification.setAction("Comment");
        notification.setCreatedAt(timestamp);
        notification.setRelatedObjectId(blog.getId());
        notificationService.sendNotification(notification);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(comment)
                        .statusCode(HttpStatus.OK.value())
                        .message("Comment blog success")
                        .build()
                );
    }
    @PostMapping("/{blog_id}/reply-comment")
    public ResponseEntity<?> replyBlog(@PathVariable BigInteger blog_id, @RequestBody ReplyCommentDTO DTO) {
        Blog blog = blogRepository.findById(blog_id).orElse(null);
        Users users = getUserFromAuthentication();
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
        Comment comment = commentService.replyComment(users,blog,DTO);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(comment)
                        .statusCode(HttpStatus.OK.value())
                        .message("Comment blog success")
                        .build()
                );
    }
    @Transactional
    @DeleteMapping("/{comment_id}/delete-comment")
    public ResponseEntity<?> deleteComment(@PathVariable BigInteger comment_id) {
        Users users = getUserFromAuthentication();
        Integer comment = commentService.deleteComment(users,comment_id);
        if (comment==2)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found comment")
                            .build()
                    );
        } else
        if (comment==0)
        {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(null)
                            .statusCode(HttpStatus.UNAUTHORIZED.value())
                            .message("User does not have permission")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(null)
                        .statusCode(HttpStatus.OK.value())
                        .message("Delete comment blog success")
                        .build()
                );
    }
    @PostMapping("/report-blog")
    public ResponseEntity<GenericResponse> reportBlog(@RequestBody ReportDTO reportDTO) {
        ReportResponseDTO reportBlog = userService.reportBlog(getUserFromAuthentication(),reportDTO);
        if (reportBlog==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("You have been report this blog")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(reportBlog)
                        .statusCode(HttpStatus.OK.value())
                        .message("Report blog success")
                        .build()
                );
    }

    @PostMapping("/{blog_id}/hide")
    public ResponseEntity<GenericResponse> getBlogLikes(@PathVariable BigInteger blog_id) {
        if (userService.hideBlog(blog_id,getUserFromAuthentication()))
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("Hide blog successes")
                            .build()
                    );
        }
        else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found blog")
                            .build()
                    );
    }
    @GetMapping("/{category_id}/category")
    public ResponseEntity<GenericResponse> getCategoryById(@PathVariable Long category_id) {
        CategoryResponseCardDTO res = categoryService.getCategoryByid(category_id,getUserFromAuthentication());
        if (res==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found category")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(res)
                        .statusCode(HttpStatus.OK.value())
                        .message("Category by id")
                        .build()
                );
    }
    @GetMapping("/{tag_id}/tagID")
    public ResponseEntity<GenericResponse> getTagById(@PathVariable Long tag_id) {
        TagDTO res = categoryService.getTagByID(tag_id,getUserFromAuthentication());
        if (res==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(false)
                            .result(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Not found tag")
                            .build()
                    );
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(res)
                        .statusCode(HttpStatus.OK.value())
                        .message("Tag by id")
                        .build()
                );
    }
    }

