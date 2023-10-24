package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.SeriesDTO;
import com.example.Keyhub.data.dto.response.SeriesResponse;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.ProdfileUser.AvatarUser;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.ProdfileUser.BannerUser;
import com.example.Keyhub.data.entity.ProdfileUser.Message;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.dto.request.UserDTO;
import com.example.Keyhub.data.entity.VerificationToken;
import com.example.Keyhub.data.payload.MessageDTO;
import com.example.Keyhub.data.payload.ProfileInfor;
import com.example.Keyhub.data.payload.respone.MessageResponseDTO;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface IUserService {
    Users findByEmail(String email);
    void resetPassword(Users user);
    void createResetToken(String email);

    Optional<Users> findByUsername(String name);
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
    BannerUser saveBannerToStorage(BigInteger userid);
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

    List<UserResponseDTO> searchUser(int index, String text, Users users);

    MessageResponseDTO sendChat(Users users , MessageDTO messageDTO);
}
