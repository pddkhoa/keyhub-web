package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.Address;
import com.example.Keyhub.data.entity.ProdfileUser.Country;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;


public interface IAddressRepository extends JpaRepository<Address, BigInteger> {

    Optional<Address> findById(BigInteger id);
    List<Address> findAllByUsers(Users users);
}
