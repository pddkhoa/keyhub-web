// -*- coding: utf-8 -*-
package com.example.Keyhub.service.impl;

import com.example.Keyhub.data.dto.request.AdminDTO;
import com.example.Keyhub.data.dto.request.EvaluteRequestDTO;
import com.example.Keyhub.data.dto.response.ReportUserResponseDTO;
import com.example.Keyhub.data.dto.response.StatusResopnes;
import com.example.Keyhub.data.dto.response.UserRequestAdminDTO;
import com.example.Keyhub.data.dto.response.UserResponseDTO;
import com.example.Keyhub.data.entity.Blog.Blog;
import com.example.Keyhub.data.entity.Blog.BlogHide;
import com.example.Keyhub.data.entity.Blog.FollowCategory;
import com.example.Keyhub.data.entity.Blog.Series;
import com.example.Keyhub.data.entity.ProdfileUser.*;
import com.example.Keyhub.data.entity.chat.Chat;
import com.example.Keyhub.data.entity.chat.Message;
import com.example.Keyhub.data.entity.report.ReportUser;
import com.example.Keyhub.data.repository.*;
import com.example.Keyhub.event.OnEvaluteApproveEvent;
import com.example.Keyhub.event.OnEvaluteApproveLockUserEvent;
import com.example.Keyhub.service.GeneralService;
import com.example.Keyhub.service.IAdminUserService;
import com.example.Keyhub.service.IBLogService;
import com.example.Keyhub.service.IUserService;
import org.modelmapper.ModelMapper;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class AdminUserServiceImpl implements IAdminUserService {
    final
    IBlogRepository blogRepository;
    final
    IUserService userService;
    final
    ModelMapper mapper;
    final
    IBLogService ibLogService;
    final
    IBannerRepository bannerRepository;
    final
    IAvatarRepository avatarRepository;
    final
    IChatRepository chatRepository;
    final
    ChatServiceImpl chatService;
    final
    IFollowRepository iFollowRepository;
    final
    IMessageRepository messageRepository;
    final
    RefreshehTokenImpl refreshehToken;
    final
    ISeriesRepository seriesRepository;
    final
    ISeriesImageRepository seriesImageRepository;
    final
    IBlogHIdeRepository blogHIdeRepository;
    final
    IUserFollowCategory userFollowCategory;
    final
    ResetPassTokenRepos resetPassTokenRepo;
    final
    IVerificationTokenRepos verificationTokenRepos;
    final
    ApplicationEventPublisher applicationEventPublisher;
    final
    RoleServiceImpl roleService;
    final
    PasswordEncoder passwordEncoder;
    final
    IUserRepository userRepository;
    final
    IReportUserRepository reportUserRepository;
    final
    GeneralService generalService;
    final
    IReportRepository reportRepository;

    public AdminUserServiceImpl(IBlogRepository blogRepository, IUserService userService, ModelMapper mapper, ApplicationEventPublisher applicationEventPublisher, RoleServiceImpl roleService, PasswordEncoder passwordEncoder, IReportUserRepository reportUserRepository, GeneralService generalService, IReportRepository reportRepository, IUserRepository userRepository, ChatServiceImpl chatService, IAvatarRepository avatarRepository, IBLogService ibLogService, ResetPassTokenRepos resetPassTokenRepo, IVerificationTokenRepos verificationTokenRepos, IBannerRepository bannerRepository, IChatRepository chatRepository, IFollowRepository iFollowRepository, IMessageRepository messageRepository, IUserFollowCategory userFollowCategory, RefreshehTokenImpl refreshehToken, ISeriesRepository seriesRepository, ISeriesImageRepository seriesImageRepository, IBlogHIdeRepository blogHIdeRepository) {
        this.blogRepository = blogRepository;
        this.userService = userService;
        this.mapper = mapper;
        this.applicationEventPublisher = applicationEventPublisher;
        this.roleService = roleService;
        this.passwordEncoder = passwordEncoder;
        this.reportUserRepository = reportUserRepository;
        this.generalService = generalService;
        this.reportRepository = reportRepository;
        this.userRepository = userRepository;
        this.chatService = chatService;
        this.avatarRepository = avatarRepository;
        this.ibLogService = ibLogService;
        this.resetPassTokenRepo = resetPassTokenRepo;
        this.verificationTokenRepos = verificationTokenRepos;
        this.bannerRepository = bannerRepository;
        this.chatRepository = chatRepository;
        this.iFollowRepository = iFollowRepository;
        this.messageRepository = messageRepository;
        this.userFollowCategory = userFollowCategory;
        this.refreshehToken = refreshehToken;
        this.seriesRepository = seriesRepository;
        this.seriesImageRepository = seriesImageRepository;
        this.blogHIdeRepository = blogHIdeRepository;
    }

    @Override
    public Users createAccountAdmin(AdminDTO adminDTOs) {
        if (userService.existsByEmail(adminDTOs.getEmail())) {
            return null;
        }
        if (userService.existsByUsername(adminDTOs.getUsername())) {
            return null;
        }
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        Users user = mapper.map(adminDTOs, Users.class);
        user.setName(adminDTOs.getName());
        user.setStatus(1);
        user.setUsername(adminDTOs.getUsername());
        user.setEmail(adminDTOs.getEmail());
        user.setPassword( passwordEncoder.encode(adminDTOs.getPassword()));
        user.setCreateDate(timestamp);
        user.setPhone(adminDTOs.getPhone());
        user.setGender(adminDTOs.getGender());
        user.setSecond_name(adminDTOs.getSecond_name());
        final Set<Role> roles = getRoles(adminDTOs);
        user.setRoles(roles);
        return userService.save(user);
    }

    private Set<Role> getRoles(AdminDTO adminDTOs) {
        Set<String> strRoles = adminDTOs.getRoles();
        Set<Role> roles = new HashSet<>();
        strRoles.forEach(role -> {
            switch (role) {
                case "admin":
                    Role adminRole = roleService.findByName(RoleName.ADMIN).orElseThrow(() -> new RuntimeException("Role not found"));
                    roles.add(adminRole);
                    break;
                case "user":
                    Role userRole = roleService.findByName(RoleName.USER).orElseThrow(() -> new RuntimeException("Role not found"));
                    roles.add(userRole);
                    break;
                default:
                    break;
            }
        });
        return roles;
    }

    @Override
    public List<ReportUserResponseDTO> listUserViolating(Users user, int index) {
        int itemsPerPage = 10;
        int startIndex = (index - 1) * itemsPerPage;
        List<ReportUser> reportUserList = reportUserRepository.findAll();
        reportUserList.sort(Comparator.comparing(ReportUser::getCreateDate).reversed());
        if (reportUserList.isEmpty())
        {
            return null;
        }
        List<ReportUserResponseDTO> resultAll = new ArrayList<>();
        for (ReportUser reportUser : reportUserList)
        {
            ReportUserResponseDTO reportSample = new ReportUserResponseDTO();
            reportSample.setUser_report(generalService.createUserResponse(reportUser.getUserReport()));
            reportSample.setUser_is_reported(generalService.createUserResponse(reportUser.getUserIdReported()));
            reportSample.setCreate_at(reportUser.getCreateDate());
            reportSample.setReason(reportUser.getReason());
            reportSample.setId(reportUser.getId());
            reportSample.setSumViolating(reportUser.getUserIdReported().getSumViolating());
            resultAll.add(reportSample);
        }

        List<ReportUserResponseDTO> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, resultAll.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(resultAll.get(i));
        }
        if (result.isEmpty())
        {
            return null;
        }
        return result;
    }

    @Override
    public Long getSizeUserViolating() {
        List<ReportUser> reportUserList = reportUserRepository.findAll();
        if (reportUserList.isEmpty()) {
            return null;
        }
        return (Long) (long) (reportUserList.size() / 10 + (reportUserList.size() % 10 != 0 ? 1 : 0));
    }
    @Override
    public StatusResopnes evaluteUser(Users user, EvaluteRequestDTO req) {
        StatusResopnes statusResopnes = new StatusResopnes();
        ReportUser reportUser = reportUserRepository.findById(req.getReport_id()).orElse(null);
        if (reportUser==null)
        {
            statusResopnes.setStatusCode(3);
            return statusResopnes;
        }
        Users users = reportUser.getUserIdReported();
        int sumViolating = users.getSumViolating();
        if (req.isValue())
        {
            if (users.getSumViolating()<= 10)
            {
                sumViolating=sumViolating+1;
                reportUserRepository.delete(reportUser);
                statusResopnes.setStatusCode(0);
                users.setSumViolating(sumViolating);
                userRepository.save(user);
                applicationEventPublisher.publishEvent(new OnEvaluteApproveEvent(users,reportUser.getReason()));
                return statusResopnes;
            }
            String reason = "Tài khoản đã vi phạm nhiều lần";
            applicationEventPublisher.publishEvent(new OnEvaluteApproveLockUserEvent(users,reason));
            user.setStatus(2);
            statusResopnes.setStatusCode(1);
            userRepository.save(users);
        }
        reportUserRepository.delete(reportUser);
        statusResopnes.setStatusCode(0);
        return statusResopnes;
    }
    @Transactional
    @Override
    public void deleteUser(BigInteger user_id, Users users) {
        Users users1 = userService.findByID(user_id);
        List<Blog> listBlog = blogRepository.findByUser(users1);
        for (Blog blog : listBlog)
        {
            ibLogService.deleteBlogById(blog);
        }
        bannerRepository.deleteByUserId(user_id);
        avatarRepository.deleteByUserId(user_id);
        reportUserRepository.deleteByUserReport(users1);
        reportUserRepository.deleteByUserIdReported(users1);
        List<Chat> listChat = chatRepository.findChatByUsers(users);
        for (Chat chat : listChat)
        {
           chatService.deleteChat(chat);
        }
        iFollowRepository.deleteByFollowing(users1);
        iFollowRepository.deleteByUserFollower(users1);
        List<Series> listSeries = seriesRepository.findAllByUser(users1);
        for (Series series : listSeries) {
            seriesImageRepository.findBySeries(series).ifPresent(seriesImageRepository::delete);
            List<Blog> blogList = blogRepository.findBySeries(series);
            for (Blog blog : blogList) {
                ibLogService.deleteBlogById(blog);
            }
            seriesRepository.delete(series);
        }
        List<BlogHide> listBlogHide = blogHIdeRepository.findByUsers(users1);
        blogHIdeRepository.deleteAll(listBlogHide);
        List<Message> messages = messageRepository.findByUsers(users1);
        List<FollowCategory> listFollowCategory = userFollowCategory.findByUser(users1);
        userFollowCategory.deleteAll(listFollowCategory);
        messageRepository.deleteAll(messages);
        List<ResetPassToken> resetPassTokens = resetPassTokenRepo.findByUser(users1);
        resetPassTokenRepo.deleteAll(resetPassTokens);
        List<VerificationToken> listVerifytoken = verificationTokenRepos.findByUser(users1);
        verificationTokenRepos.deleteAll(listVerifytoken);
        refreshehToken.deleteByUserId(users1.getId());
        userRepository.delete(users1);
    }

    @Override
    public UserResponseDTO editUser(UserRequestAdminDTO userRequestAdminDTO, Users users) {
        Users us = userService.findByID(userRequestAdminDTO.getId());
        if (us != null) {
            us.setName(userRequestAdminDTO.getName());
            us.setPhone(userRequestAdminDTO.getPhone());
            us.setSecond_name(userRequestAdminDTO.getSecond_name());
            us.setGender(userRequestAdminDTO.getGender());
            us.setDescriptions(userRequestAdminDTO.getDescriptions());
            us.setUpdateDate(new Timestamp(new Date().getTime()));
            us.setCompany(userRequestAdminDTO.getCompany());
            us.setCountry(userRequestAdminDTO.getCountry());
            us.setSchool(userRequestAdminDTO.getSchool());
            us.setAddress(userRequestAdminDTO.getAddress());
//            Update cho lần sau
//            List<String> addressList = body.getAddress();
//                List<Address> checkAddress = addressRepository.findAllByUsers(us);
//                for (String address : addressList) {
//                    for (Address addr : checkAddress) {
//                        if (address.equals(addr.getAddress())) {
//                            return new CustomResponse(400,
//                                    "The user's address already exists ",System.currentTimeMillis());
//                        }
//                    }
//                }
//                List<String> companyList = body.getCompany();
//                List<Company> checkCompany = companyRepository.findAllByUsers(us);
//                for (String company : companyList) {
//                    for (Company addr : checkCompany) {
//                        if (company.equals(addr.getCompany())) {
//                            return new CustomResponse(400,
//                                    "The user's company already exists ",System.currentTimeMillis());
//                        }
//                    }
//                }
//                List<String> schoolList = body.getSchool();
//                List<School> checkSchool = schoolRepository.findAllByUsers(us);
//                for (String school : schoolList) {
//                    for (School addr : checkSchool) {
//                        if (school.equals(addr.getName())) {
//                            return new CustomResponse(400,
//                                    "The user's school already exists ",System.currentTimeMillis());
//                        }
//                    }
//                }
//                List<String> countryList = body.getCountry();
//                List<Country> checkCountry = countryRepository.findAllByUsers(us);
//                for (String country : countryList) {
//                    for (Country addr : checkCountry) {
//                        if (country.equals(addr.getName())) {
//                            return new CustomResponse(400,
//                                    "The user's country already exists ",System.currentTimeMillis());
//                        }
//                    }
//                }
//                for (String addressDTO : body.getAddress()) {
//                    Address address = new Address();
//                    address.setUsers(us);
//                    address.setAddress(addressDTO);
//                   addressRepository.save(address);
//                }
//                for (String addressDTO : body.getSchool()) {
//                    School school = new School();
//                    school.setUsers(us);
//                    school.setName(addressDTO);
//                    schoolRepository.save(school);
//                }
//
//                for (String addressDTO : body.getCountry()) {
//                    Country country = new Country();
//                    country.setUsers(us);
//                    country.setName(addressDTO);
//                    countryRepository.save(country);
//                }
//                for (String addressDTO : body.getCompany()) {
//                    Company company = new Company();
//                    company.setUsers(us);
//                    company.setCompany(addressDTO);
//                    companyRepository.save(company);
//                }
        }
        assert us != null;
        userRepository.save(us);
        return generalService.createUserResponse(us);
    }

    @Override
    public void disableAccount(BigInteger user_id) {
        Users users = userService.findByID(user_id);
        users.setUsername(null);
        users.setEmail(null);
    }

    @Override
    public List<UserResponseDTO> listAllUser(int index) {
        int itemsPerPage = 10;
        int startIndex = (index - 1) * itemsPerPage;
        List<Users> getAll = userRepository.findByEmailAndUsernameIsNotNull();
        getAll.sort(Comparator.comparing(Users::getCreateDate).reversed());
        List<Users> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, getAll.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(getAll.get(i));
        }
        if (result.isEmpty())
        {
            return null;
        }
         return result.stream()
                .map(generalService::createUserResponse)
                .collect(Collectors.toList());
    }
    @Override
    public int sizeAllUser(){
        List<Users> getAll = userRepository.findByEmailAndUsernameIsNotNull();
        return (getAll.size() / 10 + (getAll.size() % 10 != 0 ? 1 : 0));
    }

    @Override
    public void unblockUser(BigInteger user_id) {
        Users users = userService.findByID(user_id);
        users.setStatus(1);
        userRepository.save(users);
    }

    @Override
    public List<UserResponseDTO> listAllUserIsBlock(int index) {
        int itemsPerPage = 10;
        int startIndex = (index - 1) * itemsPerPage;
        List<Users> getAll = userRepository.findByStatus(2);
        getAll.sort(Comparator.comparing(Users::getCreateDate).reversed());
        List<Users> result = new ArrayList<>();
        int endIndex = Math.min(startIndex + itemsPerPage, getAll.size());
        for (int i = startIndex; i < endIndex; i++) {
            result.add(getAll.get(i));
        }
        if (result.isEmpty())
        {
            return null;
        }
        return result.stream()
                .map(generalService::createUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public int sizeAllUserBlock() {
        List<Users> getAll = userRepository.findByStatus(2);
        return (getAll.size() / 10 + (getAll.size() % 10 != 0 ? 1 : 0));
    }

}
