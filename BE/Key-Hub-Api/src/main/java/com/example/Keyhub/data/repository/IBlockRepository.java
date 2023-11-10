package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.report.Block;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IBlockRepository extends JpaRepository<Block, Long> {
    boolean existsByBlockerAndBlocked(Users users_blocked , Users user_is_blocked);
    List<Block> findByBlocker(Users users);
    Block findByBlockerAndBlocked(Users blocker, Users blocked);
}
