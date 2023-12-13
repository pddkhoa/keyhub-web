package com.example.Keyhub.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class GroupChatRequest {
    private List<BigInteger> user_id;
    private String chat_name;
    private String chat_image;
    public List<String> validateAndGetErrors() {
        List<String> errors = new ArrayList<>();
        if (chat_name == null || chat_name.isEmpty()) {
            errors.add("Tên không được bỏ trống");
        }
        return errors;
    }
}
