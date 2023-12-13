//package com.example.Keyhub.data.repository;
//
//import com.example.Keyhub.data.entity.ProdfileUser.Country;
//import com.example.Keyhub.data.entity.ProdfileUser.Users;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//import java.math.BigInteger;
//import java.util.List;
//import java.util.Optional;
//
//
//public interface ICountryRepository extends JpaRepository<Country, BigInteger> {
//    @Query("select i from Country i where  i.users.id=?1 AND i.name = ?2")
//    List<Country> findbyUserIdAndName(BigInteger users_id, String name);
//
//    Optional<Country> findById(BigInteger id);
//    List<Country> findAllByUsers(Users users);
//}
