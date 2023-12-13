package com.example.Keyhub.data.entity.chat;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "chat")
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column
    private String chat_name;
    @ManyToMany
    private Set<Users> admins =new HashSet<>();
    @Column
    private String chat_image;
    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;
    @Column(name="is_group")
    private boolean isGroup;
    @JoinColumn(name = "created_by_user")
    @ManyToOne
    private Users createdBy;
    @ManyToMany
    private Set<Users> users =new HashSet<>();
    @OneToMany
    private List<Message> messages= new ArrayList<>();
}