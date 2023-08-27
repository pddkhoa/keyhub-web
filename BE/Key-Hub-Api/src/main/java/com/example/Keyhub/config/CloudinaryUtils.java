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

    public static void main(String[] args) throws IOException {
//        Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
//                "cloud_name", "dmpru0wgq",
//                "api_key", "644726543393577",
//                "api_secret", "pg6HkQN7Et7IzSIzYyQGA9qNbFE"));
//        Map url = cloudinary.uploader().upload("C:\\Users\\Admin\\Pictures\\305856838_2342381015915707_7068943110264526048_n.jpg", ObjectUtils.emptyMap());
//        Map video = cloudinary.uploader().upload("C:\\Users\\Admin\\Documents\\Zalo Received Files\\mov_bbb.webm",
//                ObjectUtils.asMap("resource_type", "video",
//                        "public_id", "myfolder",
//                        "eager", Arrays.asList(
//                                new EagerTransformation().width(300).height(300).crop("pad").audioCodec("none"),
//                                new EagerTransformation().width(160).height(100).crop("crop").gravity("south").audioCodec("none")),
//                        "eager_async", true,
//                        "eager_notification_url", "https://mysite.example.com/notify_endpoint"));


    }
}
