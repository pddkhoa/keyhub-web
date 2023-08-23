package com.example.Keyhub.service;

import com.example.Keyhub.data.entity.Users;
import com.example.Keyhub.data.entity.dto.request.UserDTO;

import java.util.Optional;

public interface IUserService {
    Optional<Users> findByUsername(String name); //Tim kiem User co ton tai trong DB khong?
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    Users save(Users users);
    Users registerNewUserAccount(UserDTO dto);
}
