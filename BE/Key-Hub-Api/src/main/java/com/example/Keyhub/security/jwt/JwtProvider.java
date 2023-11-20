package com.example.Keyhub.security.jwt;

//import com.example.Keyhub.security.userpincal.UserPrinciple;

import com.example.Keyhub.data.entity.ProdfileUser.Follow;
import com.example.Keyhub.data.entity.ProdfileUser.RefreshToken;
import com.example.Keyhub.data.entity.ProdfileUser.Users;
import com.example.Keyhub.data.repository.IBlogRepository;
import com.example.Keyhub.data.repository.IFollowRepository;
import com.example.Keyhub.data.repository.IUserRepository;
import com.example.Keyhub.data.repository.RefreshTokenRepository;
import com.example.Keyhub.security.userpincal.CustomUserDetails;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public class JwtProvider {
    final
    IUserRepository iUserRepository;
    final
    RefreshTokenRepository refreshTokenRepository;
    final
    IBlogRepository blogRepository;
    final IFollowRepository iFollowRepository;
    private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);
    @Value("${api.app.jwtSerectKey}")
    private String jwtSecret;
    @Value("${api.app.jwtRefreshExpirationMs}")
    private int jwtExpirationMs;

    @Value("${api.app.jwtExpiration}")
    private int jwtExpiration;

    public JwtProvider(IUserRepository iUserRepository, RefreshTokenRepository refreshTokenRepository, IBlogRepository blogRepository, IFollowRepository iFollowRepository) {
        this.iUserRepository = iUserRepository;
        this.refreshTokenRepository = refreshTokenRepository;
        this.blogRepository = blogRepository;
        this.iFollowRepository = iFollowRepository;
    }

    public String createToken(Authentication authentication){
        CustomUserDetails userPrinciple = (CustomUserDetails) authentication.getPrincipal();
        userPrinciple.getUsers().setSumBlog( blogRepository.countBlogsByUserIdAndStatus(userPrinciple.getUsers().getId()));
        List<Follow> UserFollow = iFollowRepository.findAllByUserFollower(userPrinciple.getUsers());
        int totalFollowers = UserFollow.size();
        userPrinciple.getUsers().setTotalFollowers(totalFollowers);

        List<Follow> UserFollowing = iFollowRepository.findAllByFollowing(userPrinciple.getUsers());
        int totalFollowing = UserFollowing.size();
        userPrinciple.getUsers().setTotalFollowing(totalFollowing);

        Claims claims = Jwts.claims().setSubject(userPrinciple.getUsername());
        claims.put("userDetails", userPrinciple);
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpiration);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }
    public boolean validateToken(String token){
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        } catch (SignatureException e){
            logger.error("Ivalid JWT sinature ->Message: {}", e);
        } catch (MalformedJwtException e){
            logger.error("The token invalid format ->Message: {}",e);
        } catch (UnsupportedJwtException e){
            logger.error("Unsupported JWT toekn ->Message: {}",e);
        } catch (ExpiredJwtException e){
            logger.error("Expired JWT Token -> Message: {}",e);
        } catch (IllegalArgumentException e){
            logger.error("Jwt claims string is empty -> Message {}",e);
        }
        return false;
    }
    public String getUserNameFromToken(String token){
        String userName = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
        return userName;
    }

    public String generateTokenFromUserID(String  refreshToken) {

        RefreshToken refreshToken1 = refreshTokenRepository.findByToken(refreshToken).get();
        if (refreshToken1==null)
        {
            return null;
        }
        Users users = iUserRepository.findUsersById(refreshToken1.getUser().getId());
        CustomUserDetails userPrinciple = new CustomUserDetails(users);
        Claims claims = Jwts.claims().setSubject(userPrinciple.getUsername());
        claims.put("userDetails", userPrinciple);

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpiration);
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

}
