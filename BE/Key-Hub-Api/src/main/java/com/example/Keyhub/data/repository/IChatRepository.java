package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.entity.chat.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public interface IChatRepository extends JpaRepository<Chat, Long> {
    List<Chat> findChatByUsers(Users users);
    @Query("select c from Chat c where c.isGroup=false and :user member of c.users and :reqUser member of c.users")
    Chat findSigleChatByUserId(@Param("user") Users users, @Param("reqUser") Users reqUser);
    @Modifying
    @Query("DELETE FROM Chat a WHERE a.users = ?1")
    void deleteByUsers(Users userId);

}
