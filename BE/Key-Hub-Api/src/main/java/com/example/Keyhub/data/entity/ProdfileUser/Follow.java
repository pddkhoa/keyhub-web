package com.example.Keyhub.data.entity.ProdfileUser;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "follow")
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_follow")
    private Users userFollower; // Người theo dõi

    @ManyToOne
    @JoinColumn(name = "user_is_following")
    private Users following; // Người được theo dõi
}
