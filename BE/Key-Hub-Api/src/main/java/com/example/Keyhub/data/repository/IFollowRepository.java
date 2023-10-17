package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.Follow;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigInteger;
import java.util.BitSet;
import java.util.List;
import java.util.Optional;

public interface IFollowRepository extends JpaRepository<Follow, BigInteger> {
    List<Follow> findByUserFollower(Users users);

    List<Follow> findByFollowing(Users users);

    @Query("SELECT f FROM Follow f WHERE f.following = :followingUser AND f.userFollower = :userFollower")
    Follow findAllByFollowingAndUserFollower(@Param("followingUser") Users followingUser, @Param("userFollower") Users userFollower);
}