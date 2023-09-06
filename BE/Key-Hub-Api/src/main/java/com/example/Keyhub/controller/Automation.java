package com.example.Keyhub.controller;

import com.example.Keyhub.data.entity.AvatarUser;
import com.example.Keyhub.data.repository.IAvatarRepository;
import com.example.Keyhub.service.UploadImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Automation {
    UploadImageService uploadImageService;
    @Autowired
    IAvatarRepository iAvatarRepository;
    @Scheduled(cron = "0 0 0 1 1 ?")
    public void cleanupAvatar() {
        List<AvatarUser> images = iAvatarRepository.findAll();
        for (AvatarUser image : images) {
            if (!uploadImageService.doesImageExist(image.getUrlImage())) {
                    uploadImageService.removeFile(image.getUrlImage());
            }
        }
    }

}
