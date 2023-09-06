package com.example.Keyhub.data.repository;


import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;


public interface ISeriesRepository extends JpaRepository<Series, BigInteger>{
    Series findByNameAndUser(String name, Users users);
    void deleteByIdAndUser(BigInteger id, Users users);
    List<Series> findAllByUser(Users users);


}
