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
    void deleteByFollowing(Users users);
    void deleteByUserFollower(Users users);
    boolean existsByUserFollowerAndFollowing(Users users, Users user);
    @Query("SELECT f FROM Follow f WHERE  f.userFollower = :userFollower")
    List<Follow> findAllByUserFollower( @Param("userFollower") Users userFollower);

    @Query("SELECT f FROM Follow f WHERE  f.following = :userFollower")
    List<Follow> findAllByFollowing( @Param("userFollower") Users userFollower);

    @Query("SELECT f FROM Follow f WHERE  f.userFollower = :userFollower AND f.following = :followingUser")
    Follow findAllByFollowingAndUserFollower( @Param("userFollower") Users userFollower ,@Param("followingUser") Users followingUser);
    @Query(value = "SELECT DISTINCT follow.user_is_following FROM Follow GROUP BY follow.user_is_following ORDER BY COUNT(follow.user_follow) DESC", nativeQuery = true)
    List<BigInteger> findUsersWithMostFollowers();

}