package com.example.Keyhub.config;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class ValidatorUtils {
    //Accept image files extension
    private static final List<String> contentTypes = Arrays.asList(
            "image/png",
            "image/jpeg",
            "image/jpg",
            "image/gif",
            "image/bmp",
            "image/tiff",
            "image/webp",
            "image/svg+xml",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-powerpoint",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "application/vnd.oasis.opendocument.text",
            "application/vnd.oasis.opendocument.spreadsheet"
    );
    private static final List<String> videoContentTypes = Arrays.asList(
            "video/mp4",
            "video/webm",
            "video/ogg"
    );

    public static final String EMAIL_REGEX = "^[a-z0-9_\\.]{5,48}@[a-z0-9]{2,}(\\.[a-z0-9]{2,}){1,5}$";
    public static final String VIETNAMESE_REGEX = "^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾ" +
            "ưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]" +
            "[^<>_\\\";'*&%^=]+$";
    public static final String PASSWORD_REGEX = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^_&+=])(?=\\S+$).{8,}$";
    public static final String PASSWORD_LOGIN_REGEX = "^[^<>%$';]*$";
        public static final String PHONE_REGEX = "^[0-9]{10}$";

    public boolean checkEmailRegex(String email) {
        Pattern pattern = Pattern.compile(EMAIL_REGEX, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(email);
        return matcher.find();
    }


    public boolean checkPassword(String password) {
        Pattern pattern = Pattern.compile(PASSWORD_REGEX, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(password);
        return matcher.find();
    }

    public static boolean validateMineFile(MultipartFile file) {
        String fileContentType = file.getContentType();
        if (contentTypes.contains(fileContentType))
            return true;
        return false;
    }
    public static boolean validateMineVideoFile(MultipartFile file) {
        String fileContentType = file.getContentType();
        if (videoContentTypes.contains(fileContentType))
            return true;
        return false;
    }

}
