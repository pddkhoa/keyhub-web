package com.example.Keyhub.service;

import com.example.Keyhub.data.entity.Role;
import com.example.Keyhub.data.entity.RoleName;

import java.util.Optional;

public interface IRoleService {
    Optional<Role> findByName(RoleName name);
}
