package com.example.Keyhub.data.dto.response;

import com.example.Keyhub.config.ValidatorUtils;
import lombok.Getter;
import lombok.Setter;


import java.math.BigInteger;
import java.sql.Timestamp;
@Getter
@Setter
public class UserResponseDTO {
    private BigInteger id;
    private String name;
    private String username;
    private String email;
    private String phone;
    private Timestamp createDate;
    private Timestamp updateDate;
    private String avatar;
    private String second_name;
    private int status;
    private String gender;
    private String Descriptions;
    private String address;
    private String company;
    private String country;
    private String School;
    private int sumBLog;
    private boolean checkStatusFollow;
    private boolean checkFollowCategory;
    private boolean checkReportUser;
    private String banner_url;
    private int totalFollowers;
    private int totalFollowing;
}
