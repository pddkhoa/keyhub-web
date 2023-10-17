package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.AvatarUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.math.BigInteger;
import java.util.List;

public interface IAvatarRepository extends JpaRepository<AvatarUser, BigInteger> {
    @Query("select i.urlImage from AvatarUser i where  i.users.id=?1")
    List<String> findAvatarUserId(BigInteger user_id);
    boolean existsByUrlImage(String url) ;
    @Modifying
    @Query("DELETE FROM AvatarUser a WHERE a.users.id = ?1")
    void deleteByUserId(BigInteger userId);

}
