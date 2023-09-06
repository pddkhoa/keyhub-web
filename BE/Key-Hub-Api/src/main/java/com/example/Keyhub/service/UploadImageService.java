package com.example.Keyhub.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.EagerTransformation;
import com.cloudinary.utils.ObjectUtils;
import com.example.Keyhub.config.CloudinaryUtils;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogImage;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.Blog.SeriesImage;
import com.example.Keyhub.data.repository.IBlogImange;
import com.example.Keyhub.data.repository.ISeriesImageRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.Map;
@Service
@Log4j2
public class UploadImageService {
    @Autowired
    Cloudinary cloudinary;
    @Autowired
    IBlogImange iBlogImange;
    @Autowired
    ISeriesImageRepository iSeriesImageRepository;
    public String uploadFile(MultipartFile multipartFile) {
        try {
            File uploadedFile = convertMultiPartToFile(multipartFile);
            @SuppressWarnings("rawtypes")
            Map uploadResult = cloudinary.uploader().upload(uploadedFile, ObjectUtils.emptyMap());
            uploadedFile.delete();
            return  uploadResult.get("url").toString();
        } catch (Exception e) {
            log.error("Delete file was failed. Not found this file");
        }
        return null;
    }
    public String uploadVideo(MultipartFile multipartFile) {
        try {
            File uploadedFile = convertMultiPartToFile(multipartFile);
            @SuppressWarnings("rawtypes")
            Map video = cloudinary.uploader().upload(uploadedFile,
                ObjectUtils.asMap("resource_type", "video",
                        "public_id", "myfolder",
                        "eager", Arrays.asList(
                                new EagerTransformation().width(400).height(400).crop("pad").audioCodec("none"),
                                new EagerTransformation().width(160).height(100).crop("crop").gravity("south").audioCodec("none")),
                        "eager_async", true,
                        "eager_notification_url", "https://mysite.example.com/notify_endpoint"));
            uploadedFile.delete();
            return  video.get("url").toString();
        } catch (Exception e) {
            log.error("Delete file was failed. Not found this file");
        }
        return null;
    }

    public void removeFile(String url_cloudinary) {
        try {
            String old_imageId = CloudinaryUtils.getPublicId(url_cloudinary);
            cloudinary.uploader().destroy(old_imageId,
                    ObjectUtils.asMap("resource_type", "image"));
        } catch (Exception e) {
            log.error("Delete file was failed. Not found this file");
        }

    }
    private File convertMultiPartToFile(MultipartFile file) throws IOException {
        File convFile = new File(file.getOriginalFilename());
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }
    public boolean doesImageExist(String imageUrl) {
        try {
            cloudinary.api().resource(imageUrl, ObjectUtils.emptyMap());
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    public BlogImage saveURL(Blog Blog, String url) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        BlogImage tempUrl = new BlogImage();
        tempUrl.setUrlImage(url);
        tempUrl.setUploadDate(timestamp);
        tempUrl.setBlog(Blog);
        iBlogImange.save(tempUrl);
        return iBlogImange.save(tempUrl);
    }
    public SeriesImage saveURLSeries(Series series, String url) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        SeriesImage tempUrl = new SeriesImage();
        tempUrl.setUrlImage(url);
        tempUrl.setUploadDate(timestamp);
        tempUrl.setSeries(series);
        return iSeriesImageRepository.save(tempUrl);
    }
}
