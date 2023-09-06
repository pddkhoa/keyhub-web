package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.Address;
import com.example.Keyhub.data.entity.ProdfileUser.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;


public interface IAddressRepository extends JpaRepository<Address, BigInteger> {
    @Query("select i from Address i where  i.users.id=?1 AND i.address = ?2")
    List<Address> findByNameAndUserId(BigInteger users_id, String name);

    Optional<Address> findById(BigInteger id);

}
