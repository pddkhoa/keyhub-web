package com.example.Keyhub.data.entity.report;

import com.example.Keyhub.data.entity.ProdfileUser.Users;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.math.BigInteger;
import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "report_user")
public class ReportUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "report_id")
    private BigInteger id;
    @ManyToOne
    @JoinColumn(name = "user_report")
    private Users user_report;
    @ManyToOne
    @JoinColumn(name = "user_id_reported")
    private Users user_id_reported;
    @Column
    private Timestamp createDate;
    @Column(name = "reason")
    private String reason;


}
