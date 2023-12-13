package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.response.BlockUserDTO;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.service.IStoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;

@Service
public class StoryServiceImpl implements IStoryService {
    @Autowired
    ModelMapper mapper;


    @Autowired
    IUserRepository userRepository;
    @Autowired
    IStoryService storyService;


    @Override
    public List<BlockUserDTO> findBlockedUsersByUserBlock(Users userBlock) {
        return null;
    }

    @Override
    public Users findUserisBlock(BigInteger userID) {
        return null;
    }
}
