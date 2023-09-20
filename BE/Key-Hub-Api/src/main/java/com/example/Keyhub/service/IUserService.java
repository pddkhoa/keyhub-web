package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.SeriesDTO;
import com.example.Keyhub.data.entity.ProdfileUser.AvatarUser;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.ProdfileUser.BannerUser;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.dto.request.UserDTO;
import com.example.Keyhub.data.entity.VerificationToken;
import com.example.Keyhub.data.payload.ProfileInfor;
import com.example.Keyhub.data.payload.respone.CustomResponse;
import org.springframework.web.multipart.MultipartFile;

import java.math.BigInteger;
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

    Users changeInfo(BigInteger user_id, ProfileInfor body);
    void changeAvatar(BigInteger user_id, MultipartFile imageFile);
    void removeAvatar(BigInteger user_id);
    void removeBanner(BigInteger user_id);
    AvatarUser saveAvatarToStorage( BigInteger userid);
    BannerUser saveBannerToStorage(BigInteger userid);
    void removeAvatarToStorage(BigInteger user_id);
    void removeBannerToStorage(BigInteger user_id);
    Series addSeries(SeriesDTO seriesDTO, Users users);
    void changeBanner(BigInteger user_id, MultipartFile imageFile);
}
