package com.example.Keyhub.controller;

import com.example.Keyhub.data.entity.ProdfileUser.AvatarUser;
import com.example.Keyhub.data.entity.ProdfileUser.ResetPassToken;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.ProdfileUser.VerificationToken;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.service.IBLogService;
import com.example.Keyhub.service.IRefreshTokenService;
import com.example.Keyhub.service.IUserService;
import com.example.Keyhub.service.UploadImageService;
import com.example.Keyhub.service.impl.AdminUserServiceImpl;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@EnableScheduling
@Component
public class Automation {
    UploadImageService uploadImageService;
    private static final long TIME_DIFFERENCE_THRESHOLD = 10 * 60 * 1000;
    final
    IAvatarRepository iAvatarRepository;
    final
    IUserRepository iUserRepository;
    final IBLogService ibLogService;
    final AdminUserServiceImpl adminUserService;
    final
    IVerificationTokenRepos verificationTokenRepos;
    final IBlogRepository blogRepository;
    final ITagRepository tagRepository;
    final IUserService userService;
    final IFollowRepository iFollowRepository;
    final IRefreshTokenService refreshTokenService;
    final ResetPassTokenRepos resetPassTokenRepos;

    public Automation(IAvatarRepository iAvatarRepository, IUserRepository iUserRepository, IBLogService ibLogService, AdminUserServiceImpl adminUserService, IVerificationTokenRepos verificationTokenRepos, IBlogRepository blogRepository, ITagRepository tagRepository, IUserService userService, IFollowRepository iFollowRepository, IRefreshTokenService refreshTokenService, RefreshTokenRepository refreshTokenRepository, ResetPassTokenRepos resetPassTokenRepos) {
        this.iAvatarRepository = iAvatarRepository;
        this.iUserRepository = iUserRepository;
        this.ibLogService = ibLogService;
        this.adminUserService = adminUserService;
        this.verificationTokenRepos = verificationTokenRepos;
        this.blogRepository = blogRepository;
        this.tagRepository = tagRepository;
        this.userService = userService;
        this.iFollowRepository = iFollowRepository;
        this.refreshTokenService = refreshTokenService;
        this.resetPassTokenRepos = resetPassTokenRepos;
    }

    @Scheduled(cron = "0 0 0 1 1 ?")
    public void cleanupAvatar() {
        List<AvatarUser> images = iAvatarRepository.findAll();
        for (AvatarUser image : images) {
            if (!uploadImageService.doesImageExist(image.getUrlImage())) {
                uploadImageService.removeFile(image.getUrlImage());
            }
        }
    }

    @Scheduled(fixedDelay = 10000)
    public void cleanupUser() {
       List<Users> users = iUserRepository.findAll();
        for (Users users1 : users) {
            Date userTime =  users1.getCreateDate();
            long currentTime = System.currentTimeMillis();
            long timeDifference = currentTime - userTime.getTime();
            if (timeDifference >= TIME_DIFFERENCE_THRESHOLD && (users1.getStatus()== 0)) {
                adminUserService.deleteUser(users1.getId(),users1);
            }
        }
    }
    @Scheduled(fixedDelay = 10000)
    public void cleanupUserDelete() {
        List<Users> users = iUserRepository.findAll();
        for (Users users1 : users) {
            if (users1.getEmail()==null||users1.getUsername()==null) {
                adminUserService.deleteUser(users1.getId(), users1);
            }
        }
    }
    @Scheduled(fixedDelay = 10000)
    public void cleanupVerifytoken() {
        Calendar cal = Calendar.getInstance();
        List<VerificationToken> list = verificationTokenRepos.findAll();
        for (VerificationToken verificationToken : list)
        {
            if (verificationToken.isUsed() ||(verificationToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0){
                verificationTokenRepos.delete(verificationToken);
            }
        }
    }
    @Scheduled(fixedDelay = 10000)
    public void cleanupRefreshToken() {
        Calendar cal = Calendar.getInstance();
        List<ResetPassToken> list = resetPassTokenRepos.findAll();
        for (ResetPassToken resetPassToken : list)
        {
            if ((resetPassToken.getExpiryDate().getTime() - cal.getTime().getTime()) <= 0){
                resetPassTokenRepos.delete(resetPassToken);
            }
        }
    }
//    @Scheduled(fixedDelay = 10000)
//    public void cleanupBlogUser() {
//        List<Blog> list = blogRepository.findAll();
//        for (Blog blog : list)
//        {
//          if (blog.getUser() == null || blog.getUser().getUsername()==null || blog.getUser().getEmail()==null)
//          {
//              ibLogService.deleteBlogById(blog);
//          }
//        }
//    }
//    private String[] vietNicknames = {
//            "Em", "Anh", "Chú", "Bé", "Baby", "Honey", "Dear", "Sweetie",
//            "Pumpkin", "Cutie", "Angel", "Princess", "Prince", "Cherry", "Peach",
//            "Cupcake", "Muffin", "Cookie", "Bunny", "Kitty", "Puppy", "Bear", "Panda",
//            "Thỏ", "Mèo", "Chó", "Gấu", "Bố", "Mẹ", "Chị", "Đĩa", "Xì"
//    };
//
//    private String[] engNicknames = {
//            "Little", "Big", "Mini", "Tiny", "Sweet", "Sugar", "Honey", "Dear",
//            "Darling", "My love", "Cutie", "Angel", "Princess", "Prince", "Star",
//            "Sunshine", "Rainbow", "Bubbles", "Buttercup", "Cupcake", "Cookie",
//            "Smoochy", "Boo", "Pooh", "Doodle", "Buddy", "Friend", "Amigo", "Pal",
//            "Mate", "Bro", "Lil bro", "Sis", "Lil sis"
//    };
//    private String[] maleAvatars = {
//            "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600,",
//            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600"
//    };
//    private String[] femaleAvatars = {
//            "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
//            "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600","https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600"
//    };
////    @Scheduled(fixedDelay = 10000)
////    public void replaceNameUser() {
////        Random rand = new Random();
////        List<Users> list = iUserRepository.findAll();
////        for (Users users : list)
////        {
////            if (!users.getId().equals(BigInteger.valueOf(69)) &&
////                    !users.getId().equals(BigInteger.valueOf(65)) &&
////                    !users.getId().equals(BigInteger.valueOf(96))) {
////                if(users.getGender().equals("Nữ")) {
////                    users.setAvatar(getRandomImage(femaleAvatars));
////                     iUserRepository.save(users);
////                } else {
////                    users.setAvatar(getRandomImage(maleAvatars));
////                    iUserRepository.save(users);
////                }
////            }
////            }
////        }
////    @Scheduled(fixedDelay = 10000)
////    public void deleteTag() {
////        List<Tag> list = tagRepository.findAll();
////        for (Tag tag : list)
////        {
////            if (tag.getName().startsWith("#"))
////            {
////                tag.setName(tag.getName().substring(1));
////                tagRepository.save(tag);
////            }
////        }
////    }
//    @Scheduled(fixedDelay = 10000)
//    public void deleteBlog() {
//        List<Blog> list = blogRepository.findAll();
//        for (Blog blog : list)
//        {
//            if (blog.getAvatar().equals("https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"))
//            {
//                ibLogService.deleteBlogById(blog);
//            }
//
//        }
//    }
//    private String getRandomImage(String[] images) {
//        Random rand = new Random();
//        int index = rand.nextInt(images.length);
//        return images[index];
//    }
//
//    private String getRandomItem(String[] array) {
//        int index = new Random().nextInt(array.length);
//        return array[index];
//    }
//    public String getRandomName(int minWords, int maxWords) {
//         String[] firstNames = {"Nguyễn", "Trần", "Lê", "Phạm", "Hoàng", "Huỳnh", "Võ", "Vũ", "Đặng", "Bùi", "Đỗ", "Hồ", "Ngô", "Dương", "Lý", "Phan", "Đoàn", "Hà", "Đào", "Lê", "Trịnh", "Nghiêm", "Vương", "Trương", "Hoàng", "Lâm", "Thanh", "Ninh", "Thành", "An", "Cao", "Khổng", "Lương", "Hạnh", "Mạnh", "Quý", "Đại", "Tiến", "Quang", "Tuấn", "Anh", "Khoa", "Long", "Quân", "Tài", "Khắc", "Cường", "Duy", "Đức", "Thắng", "Hùng", "Tuấn", "Việt", "Thành", "Đạt", "Minh", "Thiện", "Trung", "Chánh"};
//
//         String[] middleNames = {"Văn", "Thị", "Thanh ", "Đức", "Minh", "Ngọc", "Anh", "Thư", "Tú", "Quang", "Dung", "Thảo", "Thu", "Hằng", "Thơ", "Vy", "Nhi", "Hiền", "Thương", "Huyền", "Uyên", "Như", "Thy", "Hà", "Nhung", "Mai", "Hương", "Thúy", "Hồng", "Thắm", "Nga", "Nguyệt", "Diễm", "Chi", "Xuân", "Mẫn", "Thanh", "Hạnh", "Giáng", "Kiều", "Oanh", "Lê", "Thúy", "Khánh", "Yến", "Lan", "Phương", "Lam", "Nhàn"};
//        int numWords = new Random().nextInt(maxWords - minWords + 1) + minWords;
//
//        String name = "";
//
//        name += getRandomItem(firstNames) + " ";
//
//        for (int i = 1; i < numWords - 1; i++) {
//            name += getRandomItem(middleNames) + " ";
//        }
//
//        name += getRandomItem(middleNames);
//
//        return name;
//    }
//    @Scheduled(fixedDelay = 10000)
//    public void followUser() {
//       List<Users> list = iUserRepository.findAll();
//        Random random = new Random();
//        for (Users users : list)
//        {
//            int randomIndex = random.nextInt(list.size());
//            int randomIndexNext = random.nextInt(list.size());
//            Users follower = list.get(randomIndex);
//            Users following = list.get(randomIndexNext);
//            if (!follower.getId().equals(following.getId())) {
//                if (!iFollowRepository.existsByUserFollowerAndFollowing(follower,following)) {
//                    Follow follow = new Follow();
//                    follow.setUserFollower(follower);
//                    follow.setFollowing(following);
//                    iFollowRepository.save(follow);
//                }
//            }
//        }
//    @Autowired
//    IUserFollowCategory userFollowCategory;
//    @Autowired
//    ICategoryRepository categoryRepository;
//        @Scheduled(fixedDelay = 10000)
//        public void followUser() {
//            List<Users> list = iUserRepository.findAll();
//            List<Category> list1 = categoryRepository.findAll();
//            Random random = new Random();
//            for (Users users : list)
//            {
//                int randomIndex = random.nextInt(list.size());
//                int randomCategory = random.nextInt(list1.size());
//                Users follower = list.get(randomIndex);
//                Category category = list1.get(randomCategory);
//                    if (!userFollowCategory.existsByCategoryAndUser(category,follower)) {
//                        FollowCategory follow = new FollowCategory();
//                        follow.setUser(follower);
//                        follow.setCategory(category);
//                        userFollowCategory.save(follow);
//                    }
//                }
//            }
////
//


























































































}

