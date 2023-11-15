package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.AdminDTO;
import com.example.Keyhub.data.dto.request.EvaluteRequestDTO;
import com.example.Keyhub.data.dto.response.*;
import com.example.Keyhub.data.entity.ProdfileUser.Users;

import java.math.BigInteger;
import java.util.List;

public interface IAdminUserService {
    Users createAccountAdmin(AdminDTO adminDTOs);
    List<ReportUserResponseDTO> listUserViolating(Users user, int index);
    Long getSizeUserViolating();
    StatusResopnes evaluteUser(Users user_id, EvaluteRequestDTO req);
    void deleteUser(BigInteger user_id, Users users);
    UserResponseDTO editUser(UserRequestAdminDTO userRequestAdminDTO, Users users);
    void disableAccount(BigInteger user_id);
    List<UserResponseDTO> listAllUser(int index);
    int sizeAllUser();
    void unblockUser(BigInteger user_id);
    List<UserResponseDTO> listAllUserIsBlock(int index);
    int sizeAllUserBlock();

}
