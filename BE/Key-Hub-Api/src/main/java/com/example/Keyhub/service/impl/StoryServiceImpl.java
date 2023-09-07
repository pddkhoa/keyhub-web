package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.response.BlockUserDTO;
import com.example.Keyhub.data.entity.ProdfileUser.*;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.service.IStoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StoryServiceImpl implements IStoryService {
    @Autowired
    ICountryRepository countryRepository;
    @Autowired
    ModelMapper mapper;
    @Autowired
    IAddressRepository addressRepository;
    @Autowired
    ISchoolRepository schoolRepository;
    @Autowired
    IUserRepository userRepository;
    @Autowired
    IStoryService storyService;
    @Autowired
    ICompanyRepository companyRepository;
    @Autowired
    IBlockRepository blockRepository;

    @Override
    public List<BlockUserDTO> findBlockedUsersByUserBlock(Users userBlock) {
        List<Block> blocks = blockRepository.findAllByUserBlock(userBlock);
        List<BlockUserDTO> blockedUsers = new ArrayList<>();

        for (Block block : blocks) {
            Users userIsBlocked = block.getUserIsBlocked();

            BlockUserDTO blockedUserDTO = new BlockUserDTO();
            blockedUserDTO.setUser_id(userIsBlocked.getId());
            blockedUserDTO.setName(userIsBlocked.getName());
            blockedUserDTO.setSecond_name(userIsBlocked.getSecond_name());
            blockedUserDTO.setAvatar(userBlock.getAvatar());
            blockedUserDTO.setEmail(userIsBlocked.getEmail());
            blockedUsers.add(blockedUserDTO);
        }

        return blockedUsers;
    }

//    @Override
//    public List<Block> findAllUserBlocked(Users users) {
//       List<Block> list = blockRepository.findAllByUserBlock(users);
//        return list;
//    }

    @Override
    public Users findUserisBlock(BigInteger user_id) {
        return userRepository.findById(user_id).get();
    }
    @Override
    public Block block_user(Users user_id_block, BigInteger user_is_block) {
        Block block = new Block();
        block.setUserBlock(user_id_block);
        block.setUserIsBlocked(storyService.findUserisBlock(user_is_block));
        return blockRepository.save(block);
    }

}
