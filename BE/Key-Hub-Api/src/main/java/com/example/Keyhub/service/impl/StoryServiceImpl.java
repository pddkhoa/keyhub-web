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

    @Override
    public List<BlockUserDTO> findBlockedUsersByUserBlock(Users userBlock) {
        return null;
    }

    @Override
    public Users findUserisBlock(BigInteger userID) {
        return null;
    }
}
