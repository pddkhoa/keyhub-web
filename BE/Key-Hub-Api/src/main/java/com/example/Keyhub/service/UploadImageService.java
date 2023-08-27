package com.example.Keyhub.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.Keyhub.config.CloudinaryUtils;
import lombok.Setter;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Map;
@Service
@Log4j2
public class UploadImageService {
    @Autowired
    Cloudinary cloudinary;
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
}
