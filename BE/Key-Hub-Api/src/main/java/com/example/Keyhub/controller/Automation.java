//package com.example.Keyhub.controller;
//
//import com.example.Keyhub.data.entity.ProdfileUser.AvatarUser;
//import com.example.Keyhub.data.entity.ProdfileUser.Users;
//import com.example.Keyhub.data.repository.IAvatarRepository;
//import com.example.Keyhub.data.repository.IUserRepository;
//import com.example.Keyhub.service.UploadImageService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.scheduling.annotation.EnableScheduling;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Component;
//
//import java.util.Date;
//import java.util.List;
//
//@EnableScheduling
//@Component
//public class Automation {
//    UploadImageService uploadImageService;
//    private static final long TIME_DIFFERENCE_THRESHOLD = 10 * 60 * 1000;
//    @Autowired
//    IAvatarRepository iAvatarRepository;
//    @Autowired
//    IUserRepository iUserRepository;
//    @Scheduled(cron = "0 0 0 1 1 ?")
//    public void cleanupAvatar() {
//        List<AvatarUser> images = iAvatarRepository.findAll();
//        for (AvatarUser image : images) {
//            if (!uploadImageService.doesImageExist(image.getUrlImage())) {
//                uploadImageService.removeFile(image.getUrlImage());
//            }
//        }
//    }
//
//    @Scheduled(fixedDelay = 10000)
//    public void cleanupUser() {
//       List<Users> users = iUserRepository.findAll();
//        for (Users users1 : users) {
//
//            Date userTime =  users1.getCreateDate();
//            long currentTime = System.currentTimeMillis();
//            long timeDifference = currentTime - userTime.getTime();
//            if (timeDifference >= TIME_DIFFERENCE_THRESHOLD && (users1.getStatus()== 0)) {
//                users1.setUsername(null);
//                users1.setEmail(null);
//                iUserRepository.save(users1);
//            }
//        }
//    }
//}
