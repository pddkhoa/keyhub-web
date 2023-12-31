package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.*;
import com.example.Keyhub.data.dto.response.*;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.ProdfileUser.AvatarUser;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.ProdfileUser.VerificationToken;
import com.example.Keyhub.data.payload.ProfileInfor;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigInteger;
import java.util.List;

public interface IUserService {
    Users findByEmail(String email);
    Users findByID(BigInteger id);

    void resetPassword(Users user);
    void createResetToken(String email);

    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    void createVerificationToken(Users user, String token);
    Users save(Users users);
    Users registerNewUserAccount(UserDTO dto);
    VerificationToken getVerificationToken(String VerificationToken);
    void registerAccount(Users user);
    List<SeriesResponse> getAllSerieByUser(Users users);
    Users changeInfo(BigInteger user_id, ProfileInfor body);
    Users changeAvatar(BigInteger user_id, MultipartFile imageFile);
    void removeAvatar(BigInteger user_id);
    void removeBanner(BigInteger user_id);
    AvatarUser saveAvatarToStorage( BigInteger userid);
//    BannerUser saveBannerToStorage(BigInteger userid);
    void removeAvatarToStorage(BigInteger user_id);
    void removeBannerToStorage(BigInteger user_id);
    Series addSeries(SeriesDTO seriesDTO, Users users);
    Series editSeries(BigInteger series_id, SeriesDTO seriesDTO, Users users);
    Users changeBanner(BigInteger user_id, MultipartFile imageFile);
    UserResponseDTO followUser(BigInteger followerId, BigInteger followingId);
    UserResponseDTO followCategory(Users users, Long category_id);
    UserResponseDTO unFollowCategory(Users users, Long category_id);
    UserResponseDTO unfollowUser(BigInteger followerId, BigInteger followingId);
    UserResponseDTO getWallUserByID(Users users, BigInteger user_id);
    List<UserResponseDTO> getAllUserFollower(Users users, BigInteger users_id);
    List<UserResponseDTO> getAllUserFollowing(Users users, BigInteger users_id);
    boolean isExistUserFollow(Users user, BigInteger users_id);
    List<SeriesResponse> getAllSerieByUserWall(Users users, BigInteger user_id);

    List<UserResponseDTO> getAllUserHaveMostFollow(Users users);
    List<UserResponseDTO> getAllUsers (int index,Users users);

    List<UserResponseDTO> searchUser(String text, Users users);
    boolean exitUser(BigInteger id);
    ReportResponseDTO reportBlog(Users users , ReportDTO dto);
    boolean hideBlog(BigInteger blog_id, Users users);
    boolean checkFollowAndFollowBack(Users usersFollow, Users usersFollowback);
    List<UserResponseDTO> findFriend(String keyWord, Users users);
    ReportUserResponseDTO reportUser(Users users, ReportUserDTO reportUserDTO);
    ReportCommentResponseDTO reportComment(Users users, ReportCommentDTO reportUserDTO);
    boolean blockUser(BigInteger user_id, Users users);
    List<UserResponseDTO> getAllUserIsBlockedByUserAuth(Users users);

    boolean exitBlock(Users users, BigInteger user_id);

}
