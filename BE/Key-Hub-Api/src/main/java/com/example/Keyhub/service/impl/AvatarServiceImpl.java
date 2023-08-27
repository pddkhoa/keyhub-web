package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.entity.AvatarUser;
import com.example.Keyhub.data.repository.IAvatarRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IAvatarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Service
public class AvatarServiceImpl implements IAvatarService {
    @Autowired
    IAvatarRepository iAvatarRepository;

    @Override
    public AvatarUser save(AvatarUser avatarUser) {
        return iAvatarRepository.save(avatarUser);
    }

    @Override
    public Optional<AvatarUser> findByI(BigInteger imageId) {
        return iAvatarRepository.findById(imageId);
    }

    @Override
    public boolean existsByUrlImage(String url) {
        return iAvatarRepository.existsByUrlImage(url);
    }

}
