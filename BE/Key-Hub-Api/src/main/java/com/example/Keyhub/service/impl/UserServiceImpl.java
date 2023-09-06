package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.SeriesDTO;
import com.example.Keyhub.data.entity.AvatarUser;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.ProdfileUser.Role;
import com.example.Keyhub.data.entity.ProdfileUser.RoleName;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.dto.request.UserDTO;
import com.example.Keyhub.data.entity.ResetPassToken;
import com.example.Keyhub.data.entity.VerificationToken;
import com.example.Keyhub.data.exception.CustomExceptionRuntime;
import com.example.Keyhub.data.payload.ProfileInfor;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.service.IEmailService;
import com.example.Keyhub.service.IUserService;
import com.example.Keyhub.service.UploadImageService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.*;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private ModelMapper mapper;
    @Autowired
    UserServiceImpl userService;
    @Autowired
    ISeriesRepository iSeriesRepository;
    @Autowired
    RoleServiceImpl roleService;
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
    UploadImageService uploadImageService;

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
            int value = new Random().nextInt(999999) + 100000;
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
        user.setStatus(false);
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
    @Transactional
    public void changeInfo(BigInteger user_id, ProfileInfor body) {
            Users us = userRepository.findById(user_id).get();
            if (us != null) {
              us.setName(body.getName());
                us.setEmail(body.getEmail());
                us.setPhone(body.getPhone());
                us.setSecond_name(body.getSecond_name());
                us.setGender(body.getGender());
                us.setDescriptions(body.getDescriptions());
                us.setUpdateDate(new Timestamp(new Date().getTime()));
                userRepository.save(us);
            }
            else
                throw new CustomExceptionRuntime(405,"Not found User");

    }
    @Transactional
    @Override
    public void changeAvatar(BigInteger user_id, MultipartFile imageFile) {
        Users us = userRepository.findById(user_id).orElseThrow(null);
        String new_avatar = uploadImageService.uploadFile(imageFile);
        us.setAvatar(new_avatar);
        userRepository.save(us);
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
    public void removeAvatarToStorage(BigInteger user_id) {
        iAvatarRepository.deleteByUserId(user_id);
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


}
