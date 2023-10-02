package com.example.Keyhub.controller.User;

import com.cloudinary.Cloudinary;
import com.example.Keyhub.config.ValidatorUtils;
import com.example.Keyhub.data.dto.request.BlogPostDTO;
import com.example.Keyhub.data.dto.request.SeriesDTO;
import com.example.Keyhub.data.dto.response.*;
import com.example.Keyhub.data.entity.Blog.*;
import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IBLogService;
import com.example.Keyhub.service.IUserService;
import com.example.Keyhub.service.UploadImageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
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
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/v1/blog")
public class AccountBlog {
    @Autowired
    Cloudinary cloudinary;
    @Autowired
    IBlogSaveRepository iBlogSaveRepository;
    @Autowired
    private IBLogService ibLogService;
    @Autowired
    private ISeriesRepository seriesRepository;
    @Autowired
    IUserService iUserService;
    @Autowired
    UploadImageService uploadImageService;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    IBlogImange iBlogImange;
    @Autowired
    ICategoryRepository iCategoryRepository;
    @Autowired
    ITagRepository iTagRepository;
    @Autowired
    IBlogRepository blogRepository;

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }

    @Autowired
    IUserRepository userRepository;

    @RequestMapping(value = "/upload-video", method = RequestMethod.POST)
    public ResponseEntity uploadVideo(@RequestParam MultipartFile video_file, HttpServletRequest request, HttpServletResponse response) {
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
        Cookie tempoUrl = new Cookie("tempoUrl",tempImageUrls);
        tempoUrl.setMaxAge(60*60*24);
        response.addCookie(tempoUrl);
        if (currentImageUrls != null) {
            url = currentImageUrls + "-" + url;
        }
        Cookie imageUrlsCookie = new Cookie("temporaryImageUrls", url);
        imageUrlsCookie.setMaxAge(60 * 60 * 24);
        response.addCookie(imageUrlsCookie);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .result(url)
                        .message("Upload video was successful")
                        .build()
                );
    }
    @RequestMapping(value = "/upload-file", method = RequestMethod.POST)
    public ResponseEntity uploadFile(@RequestParam MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
        if (!ValidatorUtils.validateMineFile(file))
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .message("Request failed. This file must be png, jpg, jpeg, bmp, gif, bmp, tiff, webp, svg+xml, pdf, doc, docx, xls, xlsx,ppt, pptx, odt, ods. Please validate the file again.")
                        .build()
                );
        String url = uploadImageService.uploadFile(file);
        Cookie[] cookies = request.getCookies();
        if (url==null)
        {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Request failed.")
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
        Cookie tempoUrl = new Cookie("tempoUrl",tempImageUrls);
        tempoUrl.setMaxAge(60*60*24);
        response.addCookie(tempoUrl);
        if (currentImageUrls != null) {
            url = currentImageUrls + "-" + url;
        }
        Cookie imageUrlsCookie = new Cookie("temporaryImageUrls", url);
        imageUrlsCookie.setMaxAge(60 * 60 * 24);
        response.addCookie(imageUrlsCookie);
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
    public ResponseEntity fetchUrl( HttpServletRequest request, HttpServletResponse response) {
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
    public ResponseEntity uploadAvatar(@RequestParam MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
        if (!ValidatorUtils.validateMineFile(file))
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Request failed. This file must be png, jpg, jpeg, bmp, gif, bmp, tiff, webp, svg+xml, pdf, doc, docx, xls, xls. Please validate the file again.")
                            .build()
                    );
        String url = uploadImageService.uploadFile(file);
        Cookie[] cookies = request.getCookies();
        String currentImageUrls = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("temporaryAvatarUrls".equals(cookie.getName())) {
                    currentImageUrls = cookie.getValue();
                    break;
                }
            }
        }
        if (currentImageUrls != null) {
            url = currentImageUrls + "-" + url;
        }
        Cookie imageUrlsCookie = new Cookie("temporaryAvatarUrls", url);
        imageUrlsCookie.setMaxAge(60 * 60 * 24);
        response.addCookie(imageUrlsCookie);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .statusCode(HttpStatus.OK.value())
                        .result(url)
                        .message("Upload avatar was successful")
                        .build()
                );
    }
    @RequestMapping(value = "/create-blog", method = RequestMethod.POST)
    public ResponseEntity createBlog(@Valid @RequestBody BlogPostDTO body,
                                     BindingResult bindingResult, HttpServletRequest request, HttpServletResponse response) {
        if (bindingResult.hasErrors())
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .message("Request was failed. Validate data again")
                        .build()
                );
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
        blogDTO.setCreate_date(newBlog.getCreate_date());
        blogDTO.setId(newBlog.getId());
        blogDTO.setTitle(newBlog.getTitle());
        blogDTO.setContent(newBlog.getContent());
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

    @PostMapping("/cancel")
    public ResponseEntity cancelRequest(HttpServletResponse response) {
        Cookie emptyCookie = new Cookie("temporaryImageUrls", "");
        emptyCookie.setMaxAge(0);
        response.addCookie(emptyCookie);
        Cookie emptyCookieAvastar = new Cookie("temporaryAvatarUrls", "");
        emptyCookieAvastar.setMaxAge(0);
        response.addCookie(emptyCookieAvastar);
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
    public ResponseEntity uploadSeriesImage(@RequestParam MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
        if (!ValidatorUtils.validateMineFile(file))
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .message("Request failed. This file must be png, jpg, jpeg, bmp, gif, bmp. Please validate the file again.")
                        .build()
                );
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
                        .statusCode(HttpStatus.OK.value())
                        .message("Upload file was successful")
                        .build()
                );
    }
    @PostMapping("/add-series")
    public ResponseEntity addsSeries(@Valid @RequestBody SeriesDTO series, BindingResult bindingResult , HttpServletRequest request, HttpServletResponse response) {
        if (bindingResult.hasErrors())
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(GenericResponse.builder()
                        .success(false)
                        .statusCode(HttpStatus.BAD_REQUEST.value())
                        .message("The request has failed to execute. Please check the input data.")
                        .build()
                );
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
                for (String imageUrl : imageUrlArray) {
                    uploadImageService.saveURLSeries(series1, imageUrl);
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
    public ResponseEntity removeSeries( @PathVariable BigInteger series_id) {
        Series series = seriesRepository.findById(series_id).orElse(null);
        if (series==null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("Not found series")
                            .build()
                    );
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
    public ResponseEntity getBlockList() {
        List<Series> series1 = seriesRepository.findAllByUser(getUserFromAuthentication());
        if (series1.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .statusCode(HttpStatus.OK.value())
                            .message("User don't have series")
                            .build()
                    );
        }
        List<SeriesResponse> seriesDTOList = new ArrayList<>();
        for (Series series : series1) {
            SeriesResponse seriesDTO = modelMapper.map(series, SeriesResponse.class);
            seriesDTOList.add(seriesDTO);
        }
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(seriesDTOList)
                        .statusCode(HttpStatus.OK.value())
                        .message("List series")
                        .build()
                );
    }
    @GetMapping("/category/list")
    public ResponseEntity getListCategory() {
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
    public ResponseEntity getListTag() {
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
        List<TagDTO> categoryDTOS = new ArrayList<>();
        for (Tag series : series1) {
            TagDTO seriesDTO = modelMapper.map(series, TagDTO.class);
            categoryDTOS.add(seriesDTO);
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
    public ResponseEntity getBlogById( @PathVariable BigInteger blog_id) {
        Blog newBlog = blogRepository.findById(blog_id).orElse(null);
        BlogDTO blogDTO = new BlogDTO();
        blogDTO.setId(newBlog.getId());
        blogDTO.setTitle(newBlog.getTitle());
        blogDTO.setContent(newBlog.getContent());
        blogDTO.setDescription(newBlog.getDescription());
        blogDTO.setCreate_date(newBlog.getCreate_date());
        blogDTO.setAvatar(newBlog.getAvatar());
        blogDTO.setStatus_id(newBlog.getStatus_id());

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
        BigInteger count = blog.getLikes();
        count = count.add(BigInteger.ONE);
        blog.setLikes(count);
        blogRepository.save(blog);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(count)
                        .statusCode(HttpStatus.OK.value())
                        .message("Like blog success")
                        .build()
                );
    }
    @PostMapping("/{blogId}/save")
    public ResponseEntity<?> saveBlog(@PathVariable BigInteger blogId) {
        Users user = getUserFromAuthentication();
        Blog blog = blogRepository.findById(blogId).orElse(null);
        BlogSave blogCheck= iBlogSaveRepository.findByUsersAndBlog(user,blog);
        if (blogCheck!=null)
        {
            return ResponseEntity.status(HttpStatus.OK)
                    .body(GenericResponse.builder()
                            .success(true)
                            .result(null)
                            .statusCode(HttpStatus.OK.value())
                            .message("User have been saved this blog")
                            .build()
                    );
        }
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
        BlogSave blogSave= new BlogSave();
        blogSave.setBlog(blog);
        blogSave.setUsers(user);
        iBlogSaveRepository.save(blogSave);
        return ResponseEntity.status(HttpStatus.OK)
                .body(GenericResponse.builder()
                        .success(true)
                        .result(blogSave)
                        .statusCode(HttpStatus.OK.value())
                        .message("Like blog success")
                        .build()
                );
    }
    @GetMapping("/user")
    public ResponseEntity getAllBlogByUser() {
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
    public ResponseEntity editBlogByUser(@Valid  @RequestBody  BlogEditDTO blogDTO, BindingResult bindingResult,@PathVariable  BigInteger blog_id) {
        BlogDTO blog = ibLogService.updateBlog(blogDTO,blog_id);
        if (bindingResult.hasErrors())
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(GenericResponse.builder()
                            .success(false)
                            .statusCode(HttpStatus.BAD_REQUEST.value())
                            .message("Request was failed. Validate data again")
                            .build()
                    );
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
}

