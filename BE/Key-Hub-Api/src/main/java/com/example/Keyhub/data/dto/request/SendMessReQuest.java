package com.example.Keyhub.data.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SendMessReQuest {
    private Long chat_id;
    private String content;
    public List<String> validateAndGetErrors() {
        List<String> errors = new ArrayList<>();
        if (chat_id == null)
        {
            errors.add("Nội dung không được bỏ trống");
        }
        if (content == null || content.isEmpty()) {
            errors.add("Không có id");
        }
        return errors;
    }
}
