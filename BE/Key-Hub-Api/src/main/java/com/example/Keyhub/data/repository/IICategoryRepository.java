package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.Block;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;


public interface IICategoryRepository extends JpaRepository<Block,Long> {
    List<Block> findAllByUserBlock(Users users);
}
