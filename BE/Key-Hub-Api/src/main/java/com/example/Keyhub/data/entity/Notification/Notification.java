package com.example.Keyhub.data.entity.Notification;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String message;
    private BigInteger userId; // Id của người nhận thông báo
    private String action; // Loại hành động (ví dụ: "LIKE", "COMMENT")
    private BigInteger relatedObjectId; // Id của đối tượng liên quan (ví dụ: Id bài viết)
    private Date createdAt;

}
