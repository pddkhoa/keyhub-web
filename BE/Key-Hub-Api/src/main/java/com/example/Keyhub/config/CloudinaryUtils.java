package com.example.Keyhub.config;


import com.cloudinary.Cloudinary;
import com.cloudinary.EagerTransformation;
import com.cloudinary.Uploader;
import com.cloudinary.utils.ObjectUtils;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@Configuration
public class CloudinaryUtils {
    @Bean
    public Cloudinary getCloudinary() {
        Cloudinary cloudinary = null;
        Map<String, String> config = new HashMap<String, String>();
        config.put("cloud_name", "dmpru0wgq");
        config.put("api_key", "644726543393577");
        config.put("api_secret", "pg6HkQN7Et7IzSIzYyQGA9qNbFE");
        cloudinary = new Cloudinary(config);
        return cloudinary;
    }

    public static String getPublicId(String url) {
        //Pattern: https://res.cloudinary.com/dddb8btv0/image/upload/v1673351470/fjzp6oxncho5b7zj06fv.png
        String[] url_token = url.split("/");
        //url_token[7] = filename.png
        return url_token[7].split("\\.")[0];//public_id without extension file
    }
}
