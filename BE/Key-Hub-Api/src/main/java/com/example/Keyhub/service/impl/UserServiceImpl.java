package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.ReportDTO;
import com.example.Keyhub.data.dto.request.ReportUserDTO;
import com.example.Keyhub.data.dto.request.SeriesDTO;
import com.example.Keyhub.data.dto.request.UserDTO;
import com.example.Keyhub.data.dto.response.ReportResponseDTO;
import com.example.Keyhub.data.dto.response.ReportUserResponseDTO;
import com.example.Keyhub.data.dto.response.SeriesResponse;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.Blog.*;
import com.example.Keyhub.data.entity.ProdfileUser.*;
import com.example.Keyhub.data.entity.report.Block;
import com.example.Keyhub.data.entity.report.ReportBlog;
import com.example.Keyhub.data.entity.report.ReportUser;
import com.example.Keyhub.data.payload.ProfileInfor;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.security.jwt.JwtTokenFilter;
import com.example.Keyhub.service.*;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    ModelMapper mapper;
    @Autowired
    IBlockRepository blockRepository;
    @Autowired
    ICategoryRepository categoryRepository;
    @Autowired
    IReportUserRepository reportUserRepository;
    @Autowired
    GeneralService generalService;
    @Autowired
    IBlogRepository blogRepository;
    @Autowired
    IUserFollowCategory iUserFollowCategory;
    @Autowired
    IFollowRepository iFollowRepository;
    @Autowired
    ISeriesRepository seriesRepository;
    @Autowired
    ISeriesImageRepository imageRepository;
    @Autowired
    UserServiceImpl userService;
    @Autowired
    ISeriesRepository iSeriesRepository;
    @Autowired
    IStoryService iStoryService;
    @Autowired
    IBlogHIdeRepository blogHIdeRepository;
    @Autowired
    ISeriesImageRepository iSeriesImageRepository;
    @Autowired
    IAddressRepository addressRepository;
    @Autowired
    ICompanyRepository companyRepository;
    @Autowired
    ICountryRepository countryRepository;
    @Autowired
    ISchoolRepository schoolRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    ResetPassTokenRepos resetPassTokenRepos;
    @Autowired
    IVerificationTokenRepos tokenRepos;
    @Autowired
    IAvatarRepository iAvatarRepository;
    @Autowired
    IEmailService emailService;
    @Autowired
    IUserRepository userRepository;
    @Autowired
    IAvatarRepository avatarRepository;
    @Autowired
    IBannerRepository bannerRepository;
    @Autowired
    UploadImageService uploadImageService;
    @Autowired
    IReportRepository reportRepository;

    private ScheduledExecutorService executorService = Executors.newSingleThreadScheduledExecutor();
    private Map<BigInteger, LocalDateTime> scheduledAccounts = new ConcurrentHashMap<>();



    @Override
    public Users findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public Users findByID(BigInteger id) {
        Users users = userRepository.findById(id).orElse(null);
        return users;
    }


    @Override
    public void resetPassword(Users user) {
        String encode_pass = passwordEncoder.encode(user.getPassword());
        user.setPassword(encode_pass);
        user.setUpdateDate(new Timestamp(new Date().getTime()));
        userRepository.save(user);
    }

    @Override
    public void createResetToken(String email) {
        Users user = userRepository.findByEmail(email);
        if (user != null) {
            int value = new Random().nextInt(900000) + 100000;
            ResetPassToken resetToken = new ResetPassToken();
            resetToken.setUser(user);
            resetToken.setToken(value + "");
            resetPassTokenRepos.save(resetToken);
            emailService.sendResetPassword(user.getEmail(), resetToken.getToken());
        }
    }
    @Override
    public Boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public Boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public void createVerificationToken(Users user, String token) {
        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setToken(token);
        verificationToken.setUser(user);
        verificationToken.setUsed(false);
        tokenRepos.save(verificationToken);
    }


    @Override
    public Users save(Users users) {
        return userRepository.save(users);
    }

    @Override
    public Users registerNewUserAccount(UserDTO dto) {
        if (existsByEmail(dto.getEmail())) {
            return null;
        }
        if (existsByUsername(dto.getUsername())) {
            return null;
        }
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Users user = mapper.map(dto, Users.class);
        user.setName(dto.getName());
        user.setStatus(3);
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword( passwordEncoder.encode(dto.getPassword()));
        user.setCreateDate(timestamp);
        user.setPhone(dto.getPhone());
        user.setGender(dto.getGender());
        user.setSecond_name(dto.getSecond_name());
        user.setRole("USER");
//        Set<String> strRoles = dto.getRoles();
//        Set<Role> roles = new HashSet<>();
//        strRoles.forEach(role -> {
//            switch (role) {
//                case "admin":
//                    Role adminRole = roleService.findByName(RoleName.ADMIN).orElseThrow(() -> new RuntimeException("Role not found"));
//                    roles.add(adminRole);
//                    break;
//                case "user":
//                    Role userRole = roleService.findByName(RoleName.USER).orElseThrow(() -> new RuntimeException("Role not found"));
//                    roles.add(userRole);
//                    break;
//                default:
//                    break;
//            }
//        });
        return userService.save(user);
    }
    @Override
    public VerificationToken getVerificationToken(String VerificationToken) {
        return tokenRepos.findVerificationTokenByToken(VerificationToken);
    }

    @Override
    public void registerAccount(Users user) {
        VerificationToken token = tokenRepos.findVerificationTokenByUser(user);
        token.setUsed(true);
        tokenRepos.save(token);
        userRepository.save(user);
    }

    @Override
    public List<SeriesResponse> getAllSerieByUser(Users users) {
        List<Series> series1 = seriesRepository.findAllByUser(users);
        List<SeriesResponse> seriesDTOList = new ArrayList<>();
        for (Series series : series1) {
            SeriesResponse seriesDTO = new SeriesResponse();
            SeriesImage seriesImage = iSeriesImageRepository.findById(series.getId()).orElse(null);
            if (seriesImage!=null)
            {
                seriesDTO.setId(series.getId());
                seriesDTO.setImage(seriesImage.getUrlImage());
                seriesDTO.setCreateday(series.getCreateday());
                seriesDTO.setName(series.getName());
                seriesDTO.setDescription(series.getDescription());
                seriesDTO.setSumBlog(series.getSumBlog());
                seriesDTOList.add(seriesDTO);
            }
            else {
                seriesDTO.setId(series.getId());
                seriesDTO.setCreateday(series.getCreateday());
                seriesDTO.setName(series.getName());
                seriesDTO.setDescription(series.getDescription());
                seriesDTO.setSumBlog(series.getSumBlog());
                seriesDTOList.add(seriesDTO);
            }
        }
        return seriesDTOList;
    }

    @Override
    @Transactional
    public Users changeInfo(BigInteger user_id, ProfileInfor body) {
        Users us = userRepository.findById(user_id).get();
        if (us != null) {
            us.setName(body.getName());
            us.setPhone(body.getPhone());
            us.setSecond_name(body.getSecond_name());
            us.setGender(body.getGender());
            us.setDescriptions(body.getDescriptions());
            us.setUpdateDate(new Timestamp(new Date().getTime()));
            us.setCompany(body.getCompany());
            us.setCountry(body.getCountry());
            us.setSchool(body.getSchool());
            us.setAddress(body.getAddress());
            //Update cho lần sau
            //                List<String> addressList = body.getAddress();
//                List<Address> checkAddress = addressRepository.findAllByUsers(us);
//                for (String address : addressList) {
//                    for (Address addr : checkAddress) {
//                        if (address.equals(addr.getAddress())) {
//                            return new CustomResponse(400,
//                                    "The user's address already exists ",System.currentTimeMillis());
//                        }
//                    }
//                }
//                List<String> companylList = body.getCompany();
//                List<Company> checkCompany = companyRepository.findAllByUsers(us);
//                for (String company : companylList) {
//                    for (Company addr : checkCompany) {
//                        if (company.equals(addr.getCompany())) {
//                            return new CustomResponse(400,
//                                    "The user's company already exists ",System.currentTimeMillis());
//                        }
//                    }
//                }
//                List<String> schoolList = body.getSchool();
//                List<School> checkSchool = schoolRepository.findAllByUsers(us);
//                for (String school : schoolList) {
//                    for (School addr : checkSchool) {
//                        if (school.equals(addr.getName())) {
//                            return new CustomResponse(400,
//                                    "The user's school already exists ",System.currentTimeMillis());
//                        }
//                    }
//                }
//                List<String> countrylList = body.getCountry();
//                List<Country> checkCountry = countryRepository.findAllByUsers(us);
//                for (String country : countrylList) {
//                    for (Country addr : checkCountry) {
//                        if (country.equals(addr.getName())) {
//                            return new CustomResponse(400,
//                                    "The user's country already exists ",System.currentTimeMillis());
//                        }
//                    }
//                }
//                for (String addressDTO : body.getAddress()) {
//                    Address address = new Address();
//                    address.setUsers(us);
//                    address.setAddress(addressDTO);
//                   addressRepository.save(address);
//                }
//                for (String addressDTO : body.getSchool()) {
//                    School school = new School();
//                    school.setUsers(us);
//                    school.setName(addressDTO);
//                    schoolRepository.save(school);
//                }
//
//                for (String addressDTO : body.getCountry()) {
//                    Country country = new Country();
//                    country.setUsers(us);
//                    country.setName(addressDTO);
//                    countryRepository.save(country);
//                }
//                for (String addressDTO : body.getCompany()) {
//                    Company company = new Company();
//                    company.setUsers(us);
//                    company.setCompany(addressDTO);
//                    companyRepository.save(company);
//                }
        }
        return userRepository.save(us);
    }

    @Override
    public Users changeAvatar(BigInteger user_id, MultipartFile imageFile) {
        Users us = userRepository.findById(user_id).orElseThrow(null);
        String new_avatar = uploadImageService.uploadFile(imageFile);
        us.setAvatar(new_avatar);
        return userRepository.save(us);
    }
    @Override
    public Users changeBanner(BigInteger user_id, MultipartFile imageFile) {
        Users us = userRepository.findById(user_id).orElseThrow(null);
        String new_banner = uploadImageService.uploadFile(imageFile);
        us.setBanner_url(new_banner);
        return userRepository.save(us);
    }
    @Override
    public UserResponseDTO followUser(BigInteger followerId, BigInteger followingId) { // followerId: ID người dùng theo dõi, followingId: ID người dùng được theo dõi
        Users follower = userRepository.findById(followerId).orElse(null);
        Users following = userRepository.findById(followingId).orElse(null);
        Follow follows = iFollowRepository.findAllByFollowingAndUserFollower(follower,following);
        if (follows!=null)
        {
            return null;
        }
        Follow follow = new Follow();
        follow.setUserFollower(follower);
        follow.setFollowing(following);
        iFollowRepository.save(follow);
        UserResponseDTO userResponseDTO = generalService.createUserResponse(follower);
        if (reportUserRepository.existsByUserReportAndUserIdReported(follower,following))
        {
            userResponseDTO.setCheckReportUser(true);
        }
        else {
            userResponseDTO.setCheckReportUser(false);
        }
        userResponseDTO.setCheckStatusFollow(true);
        return userResponseDTO;
    }
    @Override
    public UserResponseDTO followCategory(Users users, Long category_id) {
        FollowCategory followCategory = new FollowCategory();
        Category category = categoryRepository.findById(category_id).orElse(null);
        if (category==null)
        {
            return null;
        }
        followCategory.setCategory(category);
        followCategory.setUser(users);
        iUserFollowCategory.save(followCategory);
        UserResponseDTO userResponseDTO= generalService.createUserResponse(users);
        userResponseDTO.setCheckReportUser(false);
        userResponseDTO.setCheckFollowCategory(true);
        return userResponseDTO;
    }

    @Override
    public UserResponseDTO unFollowCategory(Users users, Long category_id) {
        Category category = categoryRepository.findById(category_id).orElse(null);
        FollowCategory followCategory = iUserFollowCategory.findByUserAndCategory(users,category);
        if (followCategory!=null) {
            iUserFollowCategory.delete(followCategory);
        }
        UserResponseDTO userResponseDTO = generalService.createUserResponse(users);
        userResponseDTO.setCheckFollowCategory(false);
        userResponseDTO.setCheckReportUser(false);
        return userResponseDTO;
    }

    @Override
    public UserResponseDTO unfollowUser(BigInteger followerId, BigInteger followingId) {
        Users follower = userRepository.findById(followerId).orElse(null);
        if (follower==null)
        {
            return null;
        }
        Users following = userRepository.findById(followingId).orElse(null);
        if (following==null)
        {
            return null;
        }
        Follow follows = iFollowRepository.findAllByFollowingAndUserFollower(follower,following);
        iFollowRepository.delete(follows);
        UserResponseDTO responseDTO= generalService.createUserResponse(follower);
        responseDTO.setCheckStatusFollow(false);
        responseDTO.setCheckReportUser(false);
        return responseDTO;
    }
    @Override
    public UserResponseDTO getWallUserByID(Users users, BigInteger user_id) {
        Users user = userRepository.findUsersById(user_id);
        if (user==null)
        {
            return null;
        }
        UserResponseDTO userResponseDTO= generalService.createUserResponse(user);
        List<Follow> follows = iFollowRepository.findAllByUserFollower(users);
        for (Follow f : follows) {
            if (f.getFollowing().equals(user)) {
                userResponseDTO.setCheckStatusFollow(true);
                break;
            }
            else {
                userResponseDTO.setCheckStatusFollow(false);
            }
        }
        if (reportUserRepository.existsByUserReportAndUserIdReported(users,user))
        {
            userResponseDTO.setCheckReportUser(true);
        }
        else {
            userResponseDTO.setCheckReportUser(false);
        }
        return userResponseDTO;
    }

    @Override
    public List<UserResponseDTO> getAllUserFollower(Users users,BigInteger users_id) { // Lấy tất cả user follow user co user_id
        Users users1 = userRepository.findById(users_id).orElse(null);
        List<Follow> UserFollow = iFollowRepository.findAllByFollowing(users1);
        List<Follow> followList = iFollowRepository.findAll();
        List<Users> followingUsers = UserFollow.stream()
                .map(Follow::getUserFollower)
                .collect(Collectors.toList());
        List<Users> beforeFilter = new ArrayList<>();
        for (Users userCheck : followingUsers)
        {
            if (!blockRepository.existsByBlockerAndBlocked(users,userCheck) && !blockRepository.existsByBlockerAndBlocked(userCheck,users)) {
                beforeFilter.add(userCheck);
            }
        }
        List<UserResponseDTO> userResponseDTOs = beforeFilter.stream()
                .map(user -> {
                    UserResponseDTO userResponseDTO= generalService.createUserResponse(user);
                    userResponseDTO.setCheckStatusFollow(false);
                    if (iFollowRepository.existsByUserFollowerAndFollowing(users,user))
                    {
                        userResponseDTO.setCheckStatusFollow(true);
                    }
                    userResponseDTO.setCheckFollowCategory(false);
                    if (reportUserRepository.existsByUserReportAndUserIdReported(users,user))
                    {
                        userResponseDTO.setCheckReportUser(true);
                    }
                    else {
                        userResponseDTO.setCheckReportUser(false);
                    }
                    return userResponseDTO;
                })
                .collect(Collectors.toList());
        return userResponseDTOs;
    }

    @Override
    public List<UserResponseDTO> getAllUserFollowing(Users users,BigInteger users_id) {
        Users users1 = userRepository.findById(users_id).orElse(null);
        List<Follow> UserFollow = iFollowRepository.findAllByUserFollower(users1);
        List<Users> followingUsers = UserFollow.stream()
                .map(Follow::getFollowing)
                .collect(Collectors.toList());
        List<Users> beforeFilter = new ArrayList<>();
        for (Users userCheck : followingUsers)
        {
            if (!blockRepository.existsByBlockerAndBlocked(users,userCheck) && !blockRepository.existsByBlockerAndBlocked(userCheck,users)) {
                beforeFilter.add(userCheck);
            }
        }
        List<UserResponseDTO> userResponseDTOs = beforeFilter.stream()
                .map(user -> {
                    UserResponseDTO userResponseDTO= generalService.createUserResponse(user);
                    boolean isFollowing = isExistUserFollow(users,user.getId());

                    userResponseDTO.setCheckStatusFollow(isFollowing);
                    userResponseDTO.setCheckFollowCategory(false);
                    if (reportUserRepository.existsByUserReportAndUserIdReported(users,user))
                    {
                        userResponseDTO.setCheckReportUser(true);
                    }
                    else {
                        userResponseDTO.setCheckReportUser(false);
                    }
                    return userResponseDTO;
                })
                .collect(Collectors.toList());
        return userResponseDTOs;
    }


    @Override
    public boolean isExistUserFollow(Users user, BigInteger users_id) {
        Users users = userRepository.findUsersById(users_id);
        if(!iFollowRepository.existsByUserFollowerAndFollowing(user,users)){
            return false;
        }
        return true;
    }

    @Override
    public List<SeriesResponse> getAllSerieByUserWall(Users users, BigInteger user_id) {
        Users users1 = userRepository.findById(user_id).orElse(null);
        List<Series> series1 = seriesRepository.findAllByUser(users1);
        List<SeriesResponse> seriesDTOList = new ArrayList<>();
        for (Series series : series1) {
            SeriesResponse seriesDTO = new SeriesResponse();
            SeriesImage seriesImage = iSeriesImageRepository.findById(series.getId()).orElse(null);
            if (seriesImage!=null)
            {
                seriesDTO.setId(series.getId());
                seriesDTO.setImage(seriesImage.getUrlImage());
                seriesDTO.setCreateday(series.getCreateday());
                seriesDTO.setName(series.getName());
                seriesDTO.setDescription(series.getDescription());
                seriesDTO.setSumBlog(series.getSumBlog());
                seriesDTOList.add(seriesDTO);
            }
            else {
                seriesDTO.setId(series.getId());
                seriesDTO.setCreateday(series.getCreateday());
                seriesDTO.setName(series.getName());
                seriesDTO.setDescription(series.getDescription());
                seriesDTO.setSumBlog(series.getSumBlog());
                seriesDTOList.add(seriesDTO);
            }
        }
        return seriesDTOList;
    }
    @Override
    public List<UserResponseDTO> getAllUserHaveMostFollow(Users users) {
        List<BigInteger> UserFollow = iFollowRepository.findUsersWithMostFollowers();
        List<Users> users2= new ArrayList<>();
        for (BigInteger id : UserFollow)
        {
            Users users1 = userRepository.findById(id).orElse(null);
            if (!blockRepository.existsByBlockerAndBlocked(users,users1) && !blockRepository.existsByBlockerAndBlocked(users1,users)) {
                users2.add(users1);
            }
        }
        List<Users> result = new ArrayList<>();
        for(int i = 0 ; i <= 9 ; i++ )
        {
            result.add(users2.get(i));
        }
        List<UserResponseDTO> userResponseDTOs = result.stream()
                .map(user -> {
                    UserResponseDTO userResponseDTO= generalService.createUserResponse(user);
                    Follow follow = iFollowRepository.findAllByFollowingAndUserFollower(users,user);
                    if (follow!=null)
                    {
                        userResponseDTO.setCheckStatusFollow(true);
                    }
                    else
                    {
                        userResponseDTO.setCheckStatusFollow(false);
                    }
                    if (reportUserRepository.existsByUserReportAndUserIdReported(users,user))
                    {
                        userResponseDTO.setCheckReportUser(true);
                    }
                    else {
                        userResponseDTO.setCheckReportUser(false);
                    }
                    userResponseDTO.setCheckFollowCategory(false);
                    return userResponseDTO;
                })
                .collect(Collectors.toList());
        return userResponseDTOs;
    }

    @Override
    public List<UserResponseDTO> getAllUsers(int index, Users users) {
        List<BigInteger> mostFollowedUsers = iFollowRepository.findUsersWithMostFollowers();
        List<BigInteger> resultID = new ArrayList<>();
        for(int i = 0 ; i <= 9 ; i++ )
        {
            resultID.add(mostFollowedUsers.get(i));
        }
        List<Users> usersList = userRepository.findAllByIdNotInAndStatus(resultID, 1);
        int itemsPerPage = 5;
        int startIndex = (index - 1) * itemsPerPage;
        usersList.sort(Comparator.comparing(Users::getCreateDate).reversed());
        List<Users> beforeFilter = new ArrayList<>();
        for (Users userCheck : usersList)
        {
            if (!blockRepository.existsByBlockerAndBlocked(users,userCheck) && !blockRepository.existsByBlockerAndBlocked(userCheck,users) ) {
                beforeFilter.add(userCheck);
            }
        }
        List<Users> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, beforeFilter.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(beforeFilter.get(i));
        }

        if (result.isEmpty())
        {
            return null;
        }
        List<UserResponseDTO> userResponseDTOs = result.stream()
                .map(user -> {
                    UserResponseDTO userResponseDTO= generalService.createUserResponse(user);
                    Follow follow = iFollowRepository.findAllByFollowingAndUserFollower(users,user);
                    if (follow!=null)
                    {
                        userResponseDTO.setCheckStatusFollow(true);
                    }
                    else
                    {
                        userResponseDTO.setCheckStatusFollow(false);
                    }
                    if (reportUserRepository.existsByUserReportAndUserIdReported(users,user))
                    {
                        userResponseDTO.setCheckReportUser(true);
                    }
                    else {
                        userResponseDTO.setCheckReportUser(false);
                    }
                    userResponseDTO.setCheckFollowCategory(false);
                    return userResponseDTO;
                })
                .collect(Collectors.toList());
        return userResponseDTOs;
    }

    @Override
    public List<UserResponseDTO> searchUser(String text, Users users) {
        List<Users> usersList = userRepository.searchUser(text);
        usersList.sort(Comparator.comparing(Users::getCreateDate).reversed());
        List<Users> beforeFilter = new ArrayList<>();
        for (Users userCheck : usersList)
        {
            if (!blockRepository.existsByBlockerAndBlocked(users,userCheck) && !blockRepository.existsByBlockerAndBlocked(userCheck,users)) {
                beforeFilter.add(userCheck);
            }
        }
        List<UserResponseDTO> userResponseDTOs = beforeFilter.stream()
                .map(user -> {
                    UserResponseDTO userResponseDTO= generalService.createUserResponse(user);
                    Follow follow = iFollowRepository.findAllByFollowingAndUserFollower(users,user);
                    if (follow!=null)
                    {
                        userResponseDTO.setCheckStatusFollow(true);
                    }
                    else
                    {
                        userResponseDTO.setCheckStatusFollow(false);
                    }
                    if (reportUserRepository.existsByUserReportAndUserIdReported(users,user))
                    {
                        userResponseDTO.setCheckReportUser(true);
                    }
                    else {
                        userResponseDTO.setCheckReportUser(false);
                    }
                    userResponseDTO.setCheckFollowCategory(false);
                    return userResponseDTO;
                })
                .collect(Collectors.toList());
        return userResponseDTOs;
    }
    @Override
    public boolean exitUser(BigInteger id) {
        Users users = userRepository.findById(id).orElse(null);
        if (users==null)
        {
            return false;
        }
        else return true;
    }

    @Override
    public  ReportResponseDTO reportBlog(Users users, ReportDTO dto) {
        Blog blog = blogRepository.findById(dto.getBlog_id()).orElse(null);
        if (reportRepository.existsByUserAndBlog(users,blog)){
            return null;
        }
        ReportBlog reportBlog = new ReportBlog();
        reportBlog.setBlog(blog);
        reportBlog.setCreateDate(new Timestamp(new Date().getTime()));
        reportBlog.setReason(dto.getReason());
        reportBlog.setUser(users);
        reportRepository.save(reportBlog);
        ReportResponseDTO responseDTO = new ReportResponseDTO();
        responseDTO.setId(reportBlog.getId());
        responseDTO.setCreate_at(new Timestamp(new Date().getTime()));
        responseDTO.setBlog(generalService.createBlogDTO(users,blog));
        responseDTO.setUser_reported(generalService.createUserResponse(users));
        responseDTO.setReason(dto.getReason());
        return responseDTO;
    }
    @Override
    public boolean hideBlog(BigInteger blog_id, Users users) {
        Blog blog = blogRepository.findById(blog_id).orElse(null);
        if (blog==null)
        {
            return false;
        }
        BlogHide blogHide = new BlogHide();
        blogHide.setBlog(blog);
        blogHide.setUsers(users);
        blogHIdeRepository.save(blogHide);
        return true;
    }
    @Override
    public boolean checkFollowAndFollowBack(Users usersFollow, Users usersFollowback) {
        Follow follow = iFollowRepository.findAllByFollowingAndUserFollower(usersFollow, usersFollowback);
        Follow followCheck = iFollowRepository.findAllByFollowingAndUserFollower(usersFollowback, usersFollow);
        if (follow != null && followCheck != null)
        {
            return true;
        }
        return false;
    }
    @Override
    public List<UserResponseDTO> findFriend(String keyWord, Users users) {
        List<Users> listUser= userRepository.searchUser(keyWord);
        if (listUser.isEmpty())
        {
            return null;
        }
        List<Users> checkUser = new ArrayList<>();
        for (Users users1 : listUser)
        {
            if (userService.checkFollowAndFollowBack(users1, users))
            {
                if (!blockRepository.existsByBlockerAndBlocked(users,users1) && !blockRepository.existsByBlockerAndBlocked(users1,users)  ){
                    checkUser.add(users1);
                }
            }
        }
        List<UserResponseDTO> userResponseDTOs = checkUser.stream()
                .map(user -> {
                    UserResponseDTO userResponseDTO= generalService.createUserResponse(user);
                    Follow follow = iFollowRepository.findAllByFollowingAndUserFollower(users,user);
                    if (follow!=null)
                    {
                        userResponseDTO.setCheckStatusFollow(true);
                    }
                    else
                    {
                        userResponseDTO.setCheckStatusFollow(false);
                    }
                    if (reportUserRepository.existsByUserReportAndUserIdReported(users,user))
                    {
                        userResponseDTO.setCheckReportUser(true);
                    }
                    else {
                        userResponseDTO.setCheckReportUser(false);
                    }
                    userResponseDTO.setCheckFollowCategory(false);
                    return userResponseDTO;
                })
                .collect(Collectors.toList());
        return userResponseDTOs;
    }
    private static final Logger logger = LoggerFactory.getLogger(JwtTokenFilter.class);
    @Override
    public ReportUserResponseDTO reportUser(Users users, ReportUserDTO reportUserDTO) {
        Users user = userService.findByID(reportUserDTO.getUser_id());
        ReportUser reportUser = new ReportUser();
        if (!reportUserRepository.existsByUserReportAndUserIdReported(users, user)){
            reportUser.setUserReport(users);
            reportUser.setUserIdReported(user);
            reportUser.setCreateDate(new Timestamp(new Date().getTime()));
            reportUser.setReason(reportUserDTO.getReason());
            reportUserRepository.save(reportUser);
            ReportUserResponseDTO responseDTO = new ReportUserResponseDTO();
            responseDTO.setCreate_at(new Timestamp(new Date().getTime()));
            UserResponseDTO userReported = generalService.createUserResponse(users);
            userReported.setCheckReportUser(false);
            responseDTO.setUser_report(userReported);
            UserResponseDTO userIsReported = generalService.createUserResponse(user);
            userIsReported.setCheckReportUser(false);
            responseDTO.setUser_is_reported(generalService.createUserResponse(user));
            responseDTO.setReason(reportUser.getReason());
            responseDTO.setId(reportUser.getId());
            return responseDTO;
        };
        ReportUserResponseDTO responseDTO = new ReportUserResponseDTO();
        responseDTO.setCreate_at(new Timestamp(new Date().getTime()));
        UserResponseDTO userReported = generalService.createUserResponse(users);
        if (reportUserRepository.existsByUserReportAndUserIdReported(users,user))
        {
            userReported.setCheckReportUser(true);
        }
        else {
            userReported.setCheckReportUser(false);
        }
        responseDTO.setUser_report(userReported);
        UserResponseDTO userIsReported = generalService.createUserResponse(user);
        if (reportUserRepository.existsByUserReportAndUserIdReported(user,users))
        {
            userIsReported.setCheckReportUser(true);
        }
        else {
            userIsReported.setCheckReportUser(false);

        }
        responseDTO.setUser_is_reported(generalService.createUserResponse(user));
        responseDTO.setReason(reportUser.getReason());
        responseDTO.setId(reportUser.getId());
        return responseDTO;
    }
    @Override
    public boolean blockUser(BigInteger user_id, Users users) {
        Users usercheck= userService.findByID(user_id);
        if (usercheck==null)
        {
            return false;
        }
        if (blockRepository.existsByBlockerAndBlocked(users,usercheck))
        {
            Block block = blockRepository.findByBlockerAndBlocked(users,usercheck);
            blockRepository.delete(block);
            return  true;
        }
        Block block = new Block();
        block.setBlocked(usercheck);
        block.setBlocker(users);
        blockRepository.save(block);
        return true;
    }

    @Override
    public List<UserResponseDTO> getAllUserIsBlockedByUserAuth(Users users) {
        List<Block> blocks = blockRepository.findByBlocker(users);
        List<Users> userISBlock = new ArrayList<>();
        for (Block block : blocks)
        {
            Users users1 = block.getBlocked();
            userISBlock.add(users1);
        }
        return userISBlock.stream()
                .map(user -> {
                    UserResponseDTO userResponseDTO= generalService.createUserResponse(user);
                    Follow follow = iFollowRepository.findAllByFollowingAndUserFollower(users,user);
                    if (follow!=null)
                    {
                        userResponseDTO.setCheckStatusFollow(true);
                    }
                    else
                    {
                        userResponseDTO.setCheckStatusFollow(false);
                    }
                    if (reportUserRepository.existsByUserReportAndUserIdReported(users,user))
                    {
                        userResponseDTO.setCheckReportUser(true);
                    }
                    else {
                        userResponseDTO.setCheckReportUser(false);
                    }
                    userResponseDTO.setCheckFollowCategory(false);
                    return userResponseDTO;
                })
                .collect(Collectors.toList());
    }

    @Override
    public boolean exitBlock(Users users, BigInteger user_id) {
        Users usercheck= userService.findByID(user_id);
        if (blockRepository.existsByBlockerAndBlocked(users,usercheck))
        {
            return  true;
        }
        return false;
    }
    @Transactional
    @Override
    public void removeAvatar(BigInteger user_id) {
        Users us = userRepository.findById(user_id).orElseThrow(null);
        if (us.getAvatar() != null) {
            uploadImageService.removeFile(us.getAvatar());
        }
        us.setAvatar(null);
        userRepository.save(us);
    }
    @Transactional
    @Override
    public void removeBanner(BigInteger user_id) {
        Users us = userRepository.findById(user_id).orElseThrow(null);
        if (us.getAvatar() != null) {
            uploadImageService.removeFile(us.getAvatar());
        }
        us.setBanner_url(null);
        userRepository.save(us);
    }
    @Transactional
    @Override
    public AvatarUser saveAvatarToStorage(BigInteger users_id) {
        Users users = userRepository.findById(users_id).orElseThrow(null);
        AvatarUser avatarUser = new AvatarUser();
        avatarUser.setUrlImage(users.getAvatar());
        avatarUser.setUploadDate(users.getCreateDate());
        avatarUser.setUsers(users);
        return avatarRepository.save(avatarUser);
    }
    @Transactional
    @Override
    public BannerUser saveBannerToStorage(BigInteger users_id) {
        Users users = userRepository.findById(users_id).orElseThrow(null);
        BannerUser avatarUser = new BannerUser();
        avatarUser.setUrlBanner(users.getBanner_url());
        avatarUser.setUploadDate(users.getCreateDate());
        avatarUser.setUsers(users);
        return bannerRepository.save(avatarUser);
    }
    @Transactional
    @Override
    public void removeAvatarToStorage(BigInteger user_id) {
        iAvatarRepository.deleteByUserId(user_id);
    }
    @Transactional
    @Override
    public void removeBannerToStorage(BigInteger user_id) {
        bannerRepository.deleteByUserId(user_id);
    }
    @Override
    public Series addSeries(SeriesDTO seriesDTO, Users users) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Series series = new Series();
        series.setDescription(seriesDTO.getDescription());
        series.setUser(users);
        series.setSumBlog(BigInteger.valueOf(0));
        series.setName(seriesDTO.getName());
        series.setCreateday(timestamp);
        return iSeriesRepository.save(series);
    }
    @Override
    public Series editSeries(BigInteger series_id,SeriesDTO seriesDTO, Users users) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Series series = seriesRepository.findById(series_id).orElse(null);
        if (series!=null) {
            series.setDescription(seriesDTO.getDescription());
            series.setUser(users);
            series.setName(seriesDTO.getName());
            SeriesImage seriesImage = iSeriesImageRepository.findBySeries(series).orElse(null);
            if (seriesImage==null)
            {
                SeriesImage seriesImage1 = new SeriesImage();
                seriesImage1.setSeries(series);
                seriesImage1.setUrlImage(seriesDTO.getAvatar());
                seriesImage1.setUploadDate(timestamp);
                imageRepository.save(seriesImage1);
            }
            seriesImage.setUrlImage(seriesDTO.getAvatar());
            imageRepository.save(seriesImage);
            return iSeriesRepository.save(series);
        }
        else {
            return null;
        }
    }
}
