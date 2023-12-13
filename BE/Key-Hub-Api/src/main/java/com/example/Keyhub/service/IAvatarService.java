package com.example.Keyhub.service;

import com.example.Keyhub.data.entity.ProdfileUser.AvatarUser;

import java.math.BigInteger;
import java.util.Optional;

public interface IAvatarService {
    AvatarUser save(AvatarUser avatarUser);

    Optional<AvatarUser> findByI(BigInteger imageId);

    boolean existsByUrlImage(String url) ;

}
