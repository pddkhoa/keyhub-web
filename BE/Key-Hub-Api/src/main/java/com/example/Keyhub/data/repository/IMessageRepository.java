package com.example.Keyhub.data.repository;

import com.example.Keyhub.data.entity.ProdfileUser.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IMessageRepository extends JpaRepository<Message , Long> {
}
