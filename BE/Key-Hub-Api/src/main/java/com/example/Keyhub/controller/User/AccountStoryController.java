package com.example.Keyhub.controller.User;

import com.example.Keyhub.data.dto.request.AddressDTO;
import com.example.Keyhub.data.dto.request.CompanyDTO;
import com.example.Keyhub.data.dto.request.CountryDTO;
import com.example.Keyhub.data.dto.request.SchoolDTO;
import com.example.Keyhub.data.dto.response.BlockUserDTO;
import com.example.Keyhub.data.dto.response.JwtResponse;
import com.example.Keyhub.data.entity.ProdfileUser.*;
import com.example.Keyhub.data.exception.CustomExceptionRuntime;
import com.example.Keyhub.data.payload.ProfileInfor;
import com.example.Keyhub.data.payload.respone.CustomResponse;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import com.example.Keyhub.service.IAvatarService;
import com.example.Keyhub.service.IStoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/user/story")
public class AccountStoryController {
    @Autowired
    IStoryService storyService;
    @Autowired
    IAddressRepository addressRepository;
    @Autowired
    ICountryRepository countryRepository;
    @Autowired
    ICompanyRepository companyRepository;
    @Autowired
    ISchoolRepository schoolRepository;
    @Autowired
    IBlockRepository blockRepository;

    private Users getUserFromAuthentication() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return ((CustomUserDetails) auth.getPrincipal()).getUsers();
    }
    @RequestMapping(value = "/add/country", method = RequestMethod.POST)
    public ResponseEntity addCoutry(@Valid @RequestBody CountryDTO countryDTO,
                                            BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            throw new CustomExceptionRuntime(400, "Request was failed. Validate data again");
        Users users = getUserFromAuthentication();
        storyService.insertNewCountry(countryDTO,users.getId());
        return ResponseEntity.ok("Insert country was successful");
    }
    @RequestMapping(value = "/{country_id}/remove/country", method = RequestMethod.POST)
    public ResponseEntity removeCoutry(@Valid @RequestBody
                                            @PathVariable BigInteger country_id) {
        if (countryRepository.findById(country_id).get() == null) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new CustomResponse(400, "Product Code Or Email not exist",
                            System.currentTimeMillis()));
        }
        else {
            storyService.removeCountry(country_id);
            return ResponseEntity.ok("Delete country was successful");
        }
    }
    @RequestMapping(value = "/{country_id}/edit/country", method = RequestMethod.PATCH)
    public ResponseEntity editCoutryByID(@Valid @RequestBody CountryDTO countryDTO,
                                       @PathVariable BigInteger country_id) {
        if (countryRepository.findById(country_id).get() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new CustomResponse(400, "Country not exist",
                            System.currentTimeMillis()));
        }
        else {
            storyService.updateCountryById(countryDTO, country_id);
            return ResponseEntity.ok("Edit country was successful");
        }
    }
    @RequestMapping(value = "/add/company", method = RequestMethod.POST)
    public ResponseEntity addCompany(@Valid @RequestBody CompanyDTO companyDTO,
                                    BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            throw new CustomExceptionRuntime(400, "Request was failed. Validate data again");
        Users users = getUserFromAuthentication();
        List<Company> company =  companyRepository.findbyUserIdAndName(users.getId(),companyDTO.getCompany());
        if (company.isEmpty())
        {
            storyService.insertNewCompany(companyDTO,users.getId());
            return ResponseEntity.ok("Insert country was successful");
        }
        throw new CustomExceptionRuntime(400, "Request was failed. Company is exists");
    }
    @RequestMapping(value = "/{company_id}/remove/company", method = RequestMethod.POST)
    public ResponseEntity removeCompany(@Valid @RequestBody
                                       @PathVariable BigInteger company_id) {
        if (companyRepository.findById(company_id) == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new CustomResponse(400, "Company not exist",
                            System.currentTimeMillis()));
        }
        else {
            storyService.removeCompany(company_id);
            return ResponseEntity.ok("Delete country was successful");
        }
    }
    @RequestMapping(value = "/{company_id}/edit/company", method = RequestMethod.PATCH)
    public ResponseEntity editCompany(@Valid @RequestBody CompanyDTO companyDTO,
                                         @PathVariable BigInteger company_id) {
        if (companyRepository.findById(company_id).get() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new CustomResponse(400, "Product Code Or Email not exist",
                            System.currentTimeMillis()));
        }
        else {
            storyService.updateCompanyByID(companyDTO,company_id);
            return ResponseEntity.ok("Edit country was successful");
        }
    }
    @RequestMapping(value = "/add/school", method = RequestMethod.POST)
    public ResponseEntity addSchool(@Valid @RequestBody SchoolDTO schoolDTO,
                                     BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            throw new CustomExceptionRuntime(400, "Request was failed. Validate data again");
        List<School> company =  schoolRepository.findByUserIdAndName(getUserFromAuthentication().getId(),schoolDTO.getName());
        if (company.isEmpty())
        {
            storyService.insertNewSchool(schoolDTO,getUserFromAuthentication().getId());
            return ResponseEntity.ok("Insert school was successful");
        }
        throw new CustomExceptionRuntime(400, "Request was failed. Company is exists");
    }
    @RequestMapping(value = "/{school_id}/remove/school", method = RequestMethod.POST)
    public ResponseEntity removeSchool(@Valid @RequestBody
                                        @PathVariable BigInteger school_id) {
        if (companyRepository.findById(school_id) == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new CustomResponse(400, "Company not exist",
                            System.currentTimeMillis()));
        }
        else {
            storyService.removeSchool(school_id);
            return ResponseEntity.ok("Delete country was successful");
        }
    }
    @RequestMapping(value = "/{school_id}/edit/school", method = RequestMethod.PATCH)
    public ResponseEntity editSchool(@Valid @RequestBody SchoolDTO schoolDTO,
                                      @PathVariable BigInteger school_id) {
        if (companyRepository.findById(school_id) == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new CustomResponse(400, "Product Code Or Email not exist",
                            System.currentTimeMillis()));
        }
        else {
            storyService.updateSchoolByID(schoolDTO,school_id);
            return ResponseEntity.ok("Edit country was successful");
        }
    }
    @RequestMapping(value = "/add/address", method = RequestMethod.POST)
    public ResponseEntity addAddress(@Valid @RequestBody AddressDTO addressDTO,
                                    BindingResult bindingResult) {
        if (bindingResult.hasErrors())
            throw new CustomExceptionRuntime(400, "Request was failed. Validate data again");
        List<Address> company = addressRepository.findByNameAndUserId(getUserFromAuthentication().getId(),addressDTO.getAddress());
        if (company.isEmpty())
        {
            storyService.insertNewAddress(addressDTO,getUserFromAuthentication().getId());
            return ResponseEntity.ok("Insert school was successful");
        }
        throw new CustomExceptionRuntime(400, "Request was failed. Company is exists");
    }
    @RequestMapping(value = "/{address_id}/remove/address", method = RequestMethod.POST)
    public ResponseEntity removeAddress(@Valid @RequestBody
                                       @PathVariable BigInteger address_id) {
        if (addressRepository.findById(address_id) == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new CustomResponse(400, "Company not exist",
                            System.currentTimeMillis()));
        }
        else {
            storyService.removeAddress(address_id);
            return ResponseEntity.ok("Delete country was successful");
        }
    }
    @RequestMapping(value = "/{address_id}/edit/address", method = RequestMethod.PATCH)
    public ResponseEntity editSchool(@Valid @RequestBody AddressDTO AddressDTO,
                                     @PathVariable BigInteger address_id) {
        if (addressRepository.findById(address_id).get() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new CustomResponse(400, "Product Code Or Email not exist",
                            System.currentTimeMillis()));
        }
        else {
            storyService.updateAddressByID(AddressDTO,address_id);
            return ResponseEntity.ok("Edit country was successful");
        }
    }
    @RequestMapping(value = "/block/list", method = RequestMethod.POST)
    public ResponseEntity<List<BlockUserDTO>> getBlockList() {
        List<BlockUserDTO> blocks = storyService.findBlockedUsersByUserBlock(getUserFromAuthentication());
        if (blocks.isEmpty()) {
            throw new CustomExceptionRuntime(400, "No blocks found for the user");
        }
        return ResponseEntity.ok(blocks);
    }
    @PostMapping(value = "/{user_id}/block")
    public ResponseEntity blockUser(@Valid @RequestBody
                                    @PathVariable BigInteger user_id){
        Users users = getUserFromAuthentication();
        Block block= storyService.block_user(users,user_id);
        return ResponseEntity.ok(block);
    }
}
