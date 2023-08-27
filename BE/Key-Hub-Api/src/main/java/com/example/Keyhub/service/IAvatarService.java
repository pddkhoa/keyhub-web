package com.example.Keyhub.service;

import com.example.Keyhub.data.entity.AvatarUser;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface IAvatarService {
    AvatarUser save(AvatarUser avatarUser);

    Optional<AvatarUser> findByI(BigInteger imageId);

    boolean existsByUrlImage(String url) ;

}
