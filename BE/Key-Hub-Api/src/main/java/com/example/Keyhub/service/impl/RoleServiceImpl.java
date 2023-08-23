package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.entity.Role;
import com.example.Keyhub.data.entity.RoleName;
import com.example.Keyhub.data.entity.repository.IRoleRepository;
import com.example.Keyhub.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleServiceImpl implements IRoleService {
    @Autowired
    IRoleRepository roleRepository;
    @Override
    public Optional<Role> findByName(RoleName name) {
        return roleRepository.findByName(name);
    }
}
