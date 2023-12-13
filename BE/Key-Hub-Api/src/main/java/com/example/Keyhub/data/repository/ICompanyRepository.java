//package com.example.Keyhub.data.repository;
//
//import com.example.Keyhub.data.entity.ProdfileUser.Users;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//import java.math.BigInteger;
//import java.util.List;
//import java.util.Optional;
//
//
//public interface ICompanyRepository extends JpaRepository<Company, BigInteger> {
//    Optional<Company> findById(BigInteger id);
//    @Query("select i from Company i where  i.users.id=?1 AND i.Company = ?2")
//    List<Company> findbyUserIdAndName(BigInteger users_id, String company);
//    List<Company> findAllByUsers(Users users);
//}
