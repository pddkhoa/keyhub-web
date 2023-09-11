package com.example.Keyhub.controller.User;

import com.cloudinary.Cloudinary;
import com.example.Keyhub.config.ValidatorUtils;
import com.example.Keyhub.data.dto.request.BlogPostDTO;
import com.example.Keyhub.data.dto.request.SeriesDTO;
import com.example.Keyhub.data.dto.response.BlockUserDTO;
import com.example.Keyhub.data.dto.response.SeriesResponse;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.exception.CustomExceptionRuntime;
import com.example.Keyhub.data.payload.respone.CustomResponse;
import com.example.Keyhub.data.repository.IBlogImange;
import com.example.Keyhub.data.repository.ISeriesRepository;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IBLogService;
import com.example.Keyhub.service.IUserService;
import com.example.Keyhub.service.UploadImageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/v1/blog")
public class AccountBlog {
    @Autowired
    Cloudinary cloudinary;
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

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(auth.getPrincipal().getClass());
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }

    @Autowired
    IUserRepository userRepository;

    @RequestMapping(value = "/upload-video", method = RequestMethod.POST)
    public CustomResponse uploadVideo(@RequestParam MultipartFile video_file, HttpServletRequest request, HttpServletResponse response) {
        if (!ValidatorUtils.validateMineVideoFile(video_file))
            throw new CustomExceptionRuntime(400, "Request failed. This file must be mp4,WebM,Ogg." +
                    " Please validate file again");
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
        if (currentImageUrls != null) {
            url = currentImageUrls + "-" + url;
        }
        Cookie imageUrlsCookie = new Cookie("temporaryImageUrls", url);
        imageUrlsCookie.setMaxAge(60 * 60 * 24);
        response.addCookie(imageUrlsCookie);
        return new CustomResponse(200, "Upload video was successful", System.currentTimeMillis());
    }

    @RequestMapping(value = "/upload-file", method = RequestMethod.POST)
    public CustomResponse uploadFile(@RequestParam MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
        if (!ValidatorUtils.validateMineFile(file))
            throw new CustomExceptionRuntime(
                    400,
                    "Request failed. This file must be png, jpg, jpeg, bmp, gif, bmp, tiff, webp, svg+xml, pdf, doc, docx, xls, xlsx," +
                            " ppt, pptx, odt, ods. Please validate the file again."
            );
        String url = uploadImageService.uploadFile(file);
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
            url = currentImageUrls + "-" + url;
        }
        Cookie imageUrlsCookie = new Cookie("temporaryImageUrls", url);
        imageUrlsCookie.setMaxAge(60 * 60 * 24);
        response.addCookie(imageUrlsCookie);
        return new CustomResponse(200, "Upload file was successful", System.currentTimeMillis());
    }
    @RequestMapping(value = "/create-blog", method = RequestMethod.POST)
    public CustomResponse createBlog(@Valid @RequestBody BlogPostDTO body,
                                     BindingResult bindingResult, HttpServletRequest request, HttpServletResponse response) {
        if (bindingResult.hasErrors())
            throw new CustomExceptionRuntime(400, "Request was failed. Validate data again");
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
        return new CustomResponse(200, "Create blog was successful", System.currentTimeMillis());
    }

    @PostMapping("/cancel")
    public CustomResponse cancelRequest(HttpServletResponse response) {
        Cookie emptyCookie = new Cookie("temporaryImageUrls", "");
        emptyCookie.setMaxAge(0);
        response.addCookie(emptyCookie);
        return new CustomResponse(200, "Delete all cookie", System.currentTimeMillis());
    }
    @RequestMapping(value = "/image-series", method = RequestMethod.POST)
    public CustomResponse uploadSeriesImage(@RequestParam MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
        if (!ValidatorUtils.validateMineFile(file))
            throw new CustomExceptionRuntime(
                    400,
                    "Request failed. This file must be png, jpg, jpeg, bmp, gif, bmp. Please validate the file again."
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
        return new CustomResponse(200, "Upload file was successful", System.currentTimeMillis());
    }
    @PostMapping("/add-series")
    public CustomResponse addsSeries(@Valid @RequestBody SeriesDTO series, BindingResult bindingResult , HttpServletRequest request, HttpServletResponse response) {
        if (bindingResult.hasErrors())
            throw new CustomExceptionRuntime(400, "The request has failed to execute. Please check the input data.");
        Series seriesFind = seriesRepository.findByNameAndUser(series.getName(),getUserFromAuthentication());
        if(seriesFind==null){
        Series series1= iUserService.addSeries(series, getUserFromAuthentication());
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
            if (currentImageUrls==null)
            {
                return new CustomResponse(400, "null ", System.currentTimeMillis());

            }
            Cookie emptyCookie = new Cookie("seriesImage", "");
            emptyCookie.setMaxAge(0);
            response.addCookie(emptyCookie);
              return new CustomResponse(200, "Add series success ", System.currentTimeMillis());
        }
        return new CustomResponse(400, "Add series fail. Check your data ", System.currentTimeMillis());
    }
    @Transactional
    @DeleteMapping("/remove-series/{series_id}")
    public CustomResponse removeSeries( @PathVariable BigInteger series_id) {
        seriesRepository.deleteByIdAndUser(series_id,getUserFromAuthentication());
        return new CustomResponse(200, "Delete series success ", System.currentTimeMillis());
    }
    @GetMapping("/series/list")
    public ResponseEntity<List<SeriesResponse>> getBlockList() {
        List<Series> series1 = seriesRepository.findAllByUser(getUserFromAuthentication());
        if (series1.isEmpty()) {
            throw new CustomExceptionRuntime(400, "Not found series for the user");
        }
        List<SeriesResponse> seriesDTOList = new ArrayList<>();
        for (Series series : series1) {
            SeriesResponse seriesDTO = modelMapper.map(series, SeriesResponse.class);
            seriesDTOList.add(seriesDTO);
        }
        return ResponseEntity.ok(seriesDTOList);
    }
}

