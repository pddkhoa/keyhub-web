package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.response.BlockUserDTO;
import com.example.Keyhub.data.entity.ProdfileUser.*;

import java.math.BigInteger;
import java.util.List;

public interface IStoryService {

   List<BlockUserDTO> findBlockedUsersByUserBlock(Users userBlock);

   Users findUserisBlock (BigInteger userID);
   Block block_user(Users user_id_block, BigInteger user_is_block);

}
