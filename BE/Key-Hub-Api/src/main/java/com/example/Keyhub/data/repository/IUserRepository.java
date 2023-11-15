package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.GenericResponse;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Repository
public interface IUserRepository extends JpaRepository<Users, BigInteger> {
    Optional<Users> findByUsername(String name); //Tim kiem User co ton tai trong DB khong?
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
    Users  findByEmail(String email);
    Users findUsersById(BigInteger user_id);
    List<Users> findByStatus(int status);

    @Query(value = "SELECT * FROM user WHERE username IS NOT NULL AND email IS NOT NULL;",nativeQuery = true)
    List<Users> findByEmailAndUsernameIsNotNull();

    @Query("SELECT u FROM Users u WHERE u.id NOT IN :excludedIds AND u.status = :status")
    List<Users> findAllByIdNotInAndStatus(@Param("excludedIds") List<BigInteger> excludedIds, @Param("status") int status);

    @Query(value = "SELECT * FROM user " +
            "WHERE MATCH(name, Descriptions, second_name) AGAINST (:searchKeyword IN BOOLEAN MODE) > 0  AND status = 1", nativeQuery = true)
    List<Users> searchUser(@Param("searchKeyword") String searchKeyword);

    List<Users> findByCreateDateBetween(Timestamp startDate, Timestamp endDate);
}
