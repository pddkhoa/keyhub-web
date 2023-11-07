//package com.example.Keyhub.controller;
//
//import com.example.Keyhub.data.entity.ProdfileUser.AvatarUser;
//import com.example.Keyhub.data.entity.ProdfileUser.Users;
//import com.example.Keyhub.data.entity.ProdfileUser.VerificationToken;
//import com.example.Keyhub.data.repository.IAvatarRepository;
//import com.example.Keyhub.data.repository.IUserRepository;
//import com.example.Keyhub.data.repository.IVerificationTokenRepos;
//import com.example.Keyhub.service.UploadImageService;
//import org.springframework.scheduling.annotation.EnableScheduling;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Component;
//
//import java.util.Calendar;
//import java.util.Date;
//import java.util.List;
//
//@EnableScheduling
//@Component
//public class Automation {
//    UploadImageService uploadImageService;
//    private static final long TIME_DIFFERENCE_THRESHOLD = 10 * 60 * 1000;
//    final
//    IAvatarRepository iAvatarRepository;
//    final
//    IUserRepository iUserRepository;
//    final
//    IVerificationTokenRepos verificationTokenRepos;
//
//    public Automation(IAvatarRepository iAvatarRepository, IUserRepository iUserRepository, IVerificationTokenRepos verificationTokenRepos) {
//        this.iAvatarRepository = iAvatarRepository;
//        this.iUserRepository = iUserRepository;
//        this.verificationTokenRepos = verificationTokenRepos;
//    }
//
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
//    @Scheduled(fixedDelay = 10000)
//    public void cleanupVerifytoken() {
//        Calendar cal = Calendar.getInstance();
//        List<VerificationToken> list = verificationTokenRepos.findAll();
//        for (VerificationToken verificationToken : list)
//        {
//            if (verificationToken.isUsed() ||(verificationToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0){
//                verificationTokenRepos.delete(verificationToken);
//            }
//        }
//    }
//}
//
