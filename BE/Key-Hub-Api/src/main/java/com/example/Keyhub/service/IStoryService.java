package com.example.Keyhub.service;

import com.example.Keyhub.data.dto.request.AddressDTO;
import com.example.Keyhub.data.dto.request.CompanyDTO;
import com.example.Keyhub.data.dto.request.CountryDTO;
import com.example.Keyhub.data.dto.request.SchoolDTO;
import com.example.Keyhub.data.dto.response.BlockUserDTO;
import com.example.Keyhub.data.entity.ProdfileUser.*;
import org.apache.catalina.User;

import java.math.BigInteger;
import java.util.List;

public interface IStoryService {
   Country insertNewCountry(CountryDTO Dto, BigInteger user_id);
   void removeCountry(BigInteger country_id);
   Country updateCountryById(CountryDTO Dto,BigInteger country_id);
   Company insertNewCompany(CompanyDTO Dto, BigInteger user_id);
   void removeCompany(BigInteger company_id);
   Company updateCompanyByID(CompanyDTO Dto, BigInteger company_id);
   School insertNewSchool(SchoolDTO Dto, BigInteger user_id);
   void removeSchool(BigInteger company_id);
   School updateSchoolByID(SchoolDTO Dto, BigInteger company_id);
   Address insertNewAddress(AddressDTO Dto, BigInteger user_id);
   void removeAddress(BigInteger company_id);
   Address updateAddressByID(AddressDTO Dto, BigInteger company_id);
   List<BlockUserDTO> findBlockedUsersByUserBlock(Users userBlock);

   Users findUserisBlock (BigInteger userID);
   Block block_user(Users user_id_block, BigInteger user_is_block);

}
