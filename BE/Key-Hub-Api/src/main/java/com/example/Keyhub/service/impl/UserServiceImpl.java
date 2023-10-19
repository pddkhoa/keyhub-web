package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.SeriesDTO;
import com.example.Keyhub.data.dto.response.SeriesResponse;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.Blog.Category;
import com.example.Keyhub.data.entity.Blog.FollowCategory;
import com.example.Keyhub.data.entity.Blog.SeriesImage;
import com.example.Keyhub.data.entity.ProdfileUser.AvatarUser;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.ProdfileUser.*;
import com.example.Keyhub.data.dto.request.UserDTO;
import com.example.Keyhub.data.entity.ResetPassToken;
import com.example.Keyhub.data.entity.VerificationToken;
import com.example.Keyhub.data.exception.CustomExceptionRuntime;
import com.example.Keyhub.data.payload.ProfileInfor;
import com.example.Keyhub.data.payload.respone.CustomResponse;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.security.jwt.JwtProvider;
import com.example.Keyhub.service.IEmailService;
import com.example.Keyhub.service.IStoryService;
import com.example.Keyhub.service.IUserService;
import com.example.Keyhub.service.UploadImageService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
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
    private ModelMapper mapper;
    @Autowired
    ICategoryRepository categoryRepository;
    @Autowired
    IUserFollowCategory iUserFollowCategory;
    @Autowired
    IFollowRepository iFollowRepository;
    @Autowired
    private ISeriesRepository seriesRepository;
    @Autowired
    ISeriesImageRepository imageRepository;
    @Autowired
    UserServiceImpl userService;
    @Autowired
    ISeriesRepository iSeriesRepository;
    @Autowired
    RoleServiceImpl roleService;
    @Autowired
    IStoryService iStoryService;
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
    private IVerificationTokenRepos tokenRepos;
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

    private ScheduledExecutorService executorService = Executors.newSingleThreadScheduledExecutor();
    private Map<BigInteger, LocalDateTime> scheduledAccounts = new ConcurrentHashMap<>();


    @Override
    public Users findByEmail(String email) {
        return userRepository.findByEmail(email);
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
    public Optional<Users> findByUsername(String name) {
        return userRepository.findByUsername(name);
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
        user.setStatus(0);
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword( passwordEncoder.encode(dto.getPassword()));
        user.setCreateDate(timestamp);
        user.setPhone(dto.getPhone());
        user.setGender(dto.getGender());
        user.setSecond_name(dto.getSecond_name());
        Set<String> strRoles = dto.getRoles();
        Set<Role> roles = new HashSet<>();
        strRoles.forEach(role -> {
            switch (role) {
                case "admin":
                    Role adminRole = roleService.findByName(RoleName.ADMIN).orElseThrow(() -> new RuntimeException("Role not found"));
                    roles.add(adminRole);
                    break;
                case "user":
                    Role userRole = roleService.findByName(RoleName.USER).orElseThrow(() -> new RuntimeException("Role not found"));
                    roles.add(userRole);
                    break;
                default:
                    break;
            }
        });
        user.setRoles(roles);
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

    public UserResponseDTO createUserResponse(Users user) {
        UserResponseDTO response = new UserResponseDTO();
        response.setId(user.getId());
        response.setName(user.getName());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setPhone(user.getPhone());
        response.setCreateDate(user.getCreateDate());
        response.setUpdateDate(user.getUpdateDate());
        response.setAvatar(user.getAvatar());
        response.setSecond_name(user.getSecond_name());
        response.setStatus(user.getStatus());
        response.setGender(user.getGender());
        response.setDescriptions(user.getDescriptions());
        response.setAddress(user.getAddress());
        response.setCompany(user.getCompany());
        response.setCountry(user.getCountry());
        response.setSchool(user.getSchool());
        response.setBanner_url(user.getBanner_url());
        List<Follow> UserFollow = iFollowRepository.findAllByUserFollower(user);
        response.setTotalFollowing(UserFollow.size());
        List<Follow> UserFollowing = iFollowRepository.findAllByFollowing(user);
        response.setTotalFollowers(UserFollowing.size());
        return response;
    }
    private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);

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
        UserResponseDTO userResponseDTO = createUserResponse(follower);
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
        UserResponseDTO userResponseDTO= createUserResponse(users);
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
        UserResponseDTO userResponseDTO = createUserResponse(users);
        userResponseDTO.setCheckFollowCategory(false);
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
        UserResponseDTO responseDTO= createUserResponse(follower);
        responseDTO.setCheckStatusFollow(false);
        return responseDTO;
    }
    @Override
    public UserResponseDTO getWallUserByID(Users users, BigInteger user_id) {
        Users user = userRepository.findUsersById(user_id);
        if (users==null)
        {
            return null;
        }
        UserResponseDTO userResponseDTO= createUserResponse(user);
        List<Follow> follows = iFollowRepository.findAllByUserFollower(users);
        for (Follow f : follows) {
            if (f.getFollowing().equals(user)) {
                userResponseDTO.setCheckStatusFollow(true);
                break;
            }
            else {
                userResponseDTO.setCheckStatusFollow(true);
            }
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
        List<UserResponseDTO> userResponseDTOs = followingUsers.stream()
                .map(user -> {
                    UserResponseDTO userResponseDTO= createUserResponse(user);
                    userResponseDTO.setCheckStatusFollow(false);
                    if (iFollowRepository.existsByUserFollowerAndFollowing(users,user))
                    {
                        userResponseDTO.setCheckStatusFollow(true);
                    }
                    userResponseDTO.setCheckFollowCategory(false);
                    return userResponseDTO;
                })
                .collect(Collectors.toList());
        return userResponseDTOs;
    }

    @Override
    public List<UserResponseDTO> getAllUserFollowing( Users users,BigInteger users_id) {
        Users users1 = userRepository.findById(users_id).orElse(null);
        List<Follow> UserFollow = iFollowRepository.findAllByUserFollower(users1);
        List<Users> followingUsers = UserFollow.stream()
                .map(Follow::getFollowing)
                .collect(Collectors.toList());
        List<UserResponseDTO> userResponseDTOs = followingUsers.stream()
                .map(user -> {
                    UserResponseDTO userResponseDTO= createUserResponse(user);
                    boolean isFollowing = UserFollow.stream()
                            .anyMatch(f -> f.getFollowing().equals(users));
                    userResponseDTO.setCheckStatusFollow(isFollowing);
                    userResponseDTO.setCheckFollowCategory(false);
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
            users2.add(users1);
        }
        List<UserResponseDTO> userResponseDTOs = users2.stream()
                .map(user -> {
                    UserResponseDTO userResponseDTO= createUserResponse(user);
                    for (Users users1: users2)
                    {
                        Follow follow = iFollowRepository.findAllByFollowingAndUserFollower(users,users1);
                        if (follow!=null)
                        {
                            userResponseDTO.setCheckStatusFollow(true);
                        }
                        else
                        {
                            userResponseDTO.setCheckStatusFollow(false);
                        }
                    }
                    userResponseDTO.setCheckFollowCategory(false);
                    return userResponseDTO;
                })
                .collect(Collectors.toList());
        return userResponseDTOs;
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
