package com.example.Keyhub.config;

import com.example.Keyhub.security.jwt.JwtTokenFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {
    @Autowired
    JwtTokenFilter jwtTokenFilter;
    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        String toke = jwtTokenFilter.getJwt(request);
        if (toke != null)
        {

        }
    }
}
