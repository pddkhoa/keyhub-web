package com.example.Keyhub.data.entity.report;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "block")
public class Block {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "blocker_id")
    private Users blocker;

    @ManyToOne
    @JoinColumn(name = "blocked_id")
    private Users blocked;

}
