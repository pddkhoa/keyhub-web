package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.Notification.Notification;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.math.BigInteger;
import java.util.List;

public interface INotificationRepository extends JpaRepository<Notification, BigInteger> {
    List<Notification> findByRecipient(Users users);
    boolean existsById(BigInteger id);
}
