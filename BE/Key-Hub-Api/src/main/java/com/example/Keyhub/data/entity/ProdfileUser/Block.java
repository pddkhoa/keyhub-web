package com.example.Keyhub.data.entity.ProdfileUser;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "block")
public class Block {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_block")
    private Users userBlock;

    @ManyToOne
    @JoinColumn(name = "user_is_block")
    private Users userIsBlocked;
}
