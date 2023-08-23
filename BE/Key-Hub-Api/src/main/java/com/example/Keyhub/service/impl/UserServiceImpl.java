package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.entity.Role;
import com.example.Keyhub.data.entity.RoleName;
import com.example.Keyhub.data.entity.Users;
import com.example.Keyhub.data.entity.dto.request.UserDTO;
import com.example.Keyhub.data.entity.repository.IUserRepository;
import com.example.Keyhub.service.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private ModelMapper mapper;
    @Autowired
    UserServiceImpl userService;
    @Autowired
    RoleServiceImpl roleService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    IUserRepository userRepository;
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
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword( passwordEncoder.encode(dto.getPassword()));
        user.setCreateDate(timestamp);
        user.setPhone(dto.getPhone());
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
}
