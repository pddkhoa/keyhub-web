package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.AddressDTO;
import com.example.Keyhub.data.dto.request.CompanyDTO;
import com.example.Keyhub.data.dto.request.CountryDTO;
import com.example.Keyhub.data.dto.request.SchoolDTO;
import com.example.Keyhub.data.dto.response.BlockUserDTO;
import com.example.Keyhub.data.entity.ProdfileUser.*;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.service.IStoryService;
import com.fasterxml.jackson.annotation.JacksonAnnotationsInside;
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
    public Country insertNewCountry(CountryDTO Dto, BigInteger user_id) {
        List<Country> list = countryRepository.findbyUserIdAndName(user_id, Dto.getName());
        if (list.isEmpty()) {
            Country country = mapper.map(Dto, Country.class);
            country.setName(Dto.getName());
            country.setUsers(userRepository.findById(user_id).get());
            return countryRepository.save(country);
        }
       return  null;
    }

    @Override
    public void removeCountry(BigInteger country_id) {
        Optional<Country> optionalCountry = countryRepository.findById(country_id);
        if (optionalCountry.isPresent()) {
            Country country = optionalCountry.get();
             countryRepository.delete(country);
        }

    }

    @Override
    public Country updateCountryById(CountryDTO Dto, BigInteger country_id) {
        Optional<Country> optionalCountry = countryRepository.findById(country_id);
        if (optionalCountry.isPresent()) {
            Country country = optionalCountry.get();
            country.setName(Dto.getName());
            countryRepository.save(country);
            return country;
        }
    return null;
    }

    @Override
    public Company insertNewCompany(CompanyDTO Dto, BigInteger user_id) {
        Users us = userRepository.findById(user_id).get();
        List<Company> companys = companyRepository.findbyUserIdAndName(user_id,Dto.getCompany());
        if (companys.isEmpty())
        {
            Company company = mapper.map(Dto, Company.class);
            company.setCompany(Dto.getCompany());
            company.setRoleBusiness(Dto.getRole_business());
            company.setBusinessStatus(Dto.isBusiness_status());
            company.setUsers(us);
            return companyRepository.save(company);
        }
        return null;
    }

    @Override
    public void removeCompany(BigInteger company_id) {
        Company company = companyRepository.findById(company_id).get();
        if (company != null)
        {
            companyRepository.delete(company);
        }
    }

    @Override
    public Company updateCompanyByID(CompanyDTO Dto, BigInteger company_id) {
        Company company = companyRepository.findById(company_id).get();
        if (company != null)
        {
            company.setCompany(Dto.getCompany());
            company.setRoleBusiness(Dto.getRole_business());
            company.setBusinessStatus(Dto.isBusiness_status());
            return companyRepository.save(company);
        }
        return null;
    }

    @Override
    public School insertNewSchool(SchoolDTO Dto, BigInteger user_id) {
        Users us = userRepository.findById(user_id).get();
        List<School> schools = schoolRepository.findByUserIdAndName(user_id,Dto.getName());
        if (schools.isEmpty())
        {
            School school = mapper.map(Dto, School.class);
            school.setName(Dto.getName());
            school.setUsers(us);
            school.setStatus(Dto.getStatus());
            return schoolRepository.save(school);
        }
     return  null;
    }

    @Override
    public void removeSchool(BigInteger company_id) {
        School company = schoolRepository.findById(company_id).get();
        if (company != null)
        {
            schoolRepository.delete(company);
        }
    }

    @Override
    public School updateSchoolByID(SchoolDTO Dto, BigInteger company_id) {
        School school = schoolRepository.findById(company_id).get();
        if (school != null)
        {
            school.setName(Dto.getName());
            school.setStatus(Dto.getStatus());
            return schoolRepository.save(school);
        }
        return null;
    }

    @Override
    public Address insertNewAddress(AddressDTO Dto, BigInteger user_id) {
        Users us = userRepository.findById(user_id).get();
        List<Address> schools = addressRepository.findByNameAndUserId(user_id, Dto.getAddress());
        if (schools.isEmpty())
        {
            Address school = mapper.map(Dto, Address.class);
            school.setAddress(Dto.getAddress());
            school.setUsers(us);
            school.setStatus(Dto.getStatus());
            return addressRepository.save(school);
        }
        return  null;
    }

    @Override
    public void removeAddress(BigInteger address_id) {
        Address company = addressRepository.findById(address_id).get();
        if (company != null)
        {
            addressRepository.delete(company);
        }
    }

    @Override
    public Address updateAddressByID(AddressDTO Dto, BigInteger company_id) {
        Address school = addressRepository.findById(company_id).get();
        if (school != null)
        {
            school.setAddress(Dto.getAddress());
            school.setStatus(Dto.getStatus());
            return addressRepository.save(school);
        }
        return null;
    }

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
