package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.AvatarUser;
import com.example.Keyhub.data.entity.ProdfileUser.BannerUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.math.BigInteger;
import java.util.List;

public interface IBannerRepository extends JpaRepository<BannerUser, BigInteger> {
    @Modifying
    @Query("DELETE FROM BannerUser a WHERE a.users.id = ?1")
    void deleteByUserId(BigInteger userId);

}
