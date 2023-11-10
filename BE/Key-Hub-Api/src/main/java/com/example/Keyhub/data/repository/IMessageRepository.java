package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.chat.Chat;
import com.example.Keyhub.data.entity.chat.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.User;

import java.util.List;

public interface IMessageRepository extends JpaRepository<Message, Long> {
    @Query("select m from Message m join m.chat c where c.id =:chatId")
    List<Message> findByChat(@Param("chatId") Long chat);
    List<Message> findByUsers(Users users);
}
