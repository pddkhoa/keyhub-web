package com.example.Keyhub.service.impl;

import com.example.Keyhub.service.IEmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
@Service
public class EmailServiceImpl implements IEmailService {
    final Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);
    @Autowired
    private JavaMailSender mailSender;
    @Override
    public void sendVerifyEmail(String email, String token) {
        try {
            String recipientAddress = email;
            String subject = "Xác thực tài khoản";
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom("noreply@tda.com");
            helper.setTo(email);
            helper.setSubject("Mã xác thực tài khoản - KEY HUB SOCIAL MEDIA");
            helper.setText(generateEmail(token), true);
            mailSender.send(message);
            logger.info("Send email verify account [" + email + "]");
        } catch (MessagingException e) {
            logger.error(e.getMessage());
        }
    }

    @Override
    public void sendResetPassword(String email, String code) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom("noreply@tda.com");
            helper.setTo(email);
            helper.setSubject("Mã xác thực tài khoản - KEY HUB SOCIAL MEDIA");
            helper.setText(generateEmail(code), true);
            mailSender.send(message);
            logger.info("Send email verify account [" + email + "]");
        } catch (MessagingException e) {
            logger.error(e.getMessage());
        }
    }
    private String generateEmail(String code) {
        return "<!DOCTYPE html>\n" +
                "<html xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" lang=\"en\">\n" +
                "\n" +
                "<head>\n" +
                "    <title></title>\n" +
                "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->\n" +
                "    <style>\n" +
                "        * {\n" +
                "            box-sizing: border-box;\n" +
                "        }\n" +
                "\n" +
                "        body {\n" +
                "            margin: 0;\n" +
                "            padding: 0;\n" +
                "        }\n" +
                "\n" +
                "        a[x-apple-data-detectors] {\n" +
                "            color: inherit !important;\n" +
                "            text-decoration: inherit !important;\n" +
                "        }\n" +
                "\n" +
                "        #MessageViewBody a {\n" +
                "            color: inherit;\n" +
                "            text-decoration: none;\n" +
                "        }\n" +
                "\n" +
                "        p {\n" +
                "            line-height: inherit\n" +
                "        }\n" +
                "\n" +
                "        .desktop_hide,\n" +
                "        .desktop_hide table {\n" +
                "            mso-hide: all;\n" +
                "            display: none;\n" +
                "            max-height: 0px;\n" +
                "            overflow: hidden;\n" +
                "        }\n" +
                "\n" +
                "        .image_block img+div {\n" +
                "            display: none;\n" +
                "        }\n" +
                "\n" +
                "        @media (max-width:520px) {\n" +
                "            .desktop_hide table.icons-inner {\n" +
                "                display: inline-block !important;\n" +
                "            }\n" +
                "\n" +
                "            .icons-inner {\n" +
                "                text-align: center;\n" +
                "            }\n" +
                "\n" +
                "            .icons-inner td {\n" +
                "                margin: 0 auto;\n" +
                "            }\n" +
                "\n" +
                "            .row-content {\n" +
                "                width: 100% !important;\n" +
                "            }\n" +
                "\n" +
                "            .mobile_hide {\n" +
                "                display: none;\n" +
                "            }\n" +
                "\n" +
                "            .stack .column {\n" +
                "                width: 100%;\n" +
                "                display: block;\n" +
                "            }\n" +
                "\n" +
                "            .mobile_hide {\n" +
                "                min-height: 0;\n" +
                "                max-height: 0;\n" +
                "                max-width: 0;\n" +
                "                overflow: hidden;\n" +
                "                font-size: 0px;\n" +
                "            }\n" +
                "\n" +
                "            .desktop_hide,\n" +
                "            .desktop_hide table {\n" +
                "                display: table !important;\n" +
                "                max-height: none !important;\n" +
                "            }\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "\n" +
                "<body style=\"background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;\">\n" +
                "    <table class=\"nl-container\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;\">\n" +
                "        <tbody>\n" +
                "            <tr>\n" +
                "                <td>\n" +
                "                    <table class=\"row row-1\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                        <tbody>\n" +
                "                            <tr>\n" +
                "                                <td>\n" +
                "                                    <table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 500px;\" width=\"500\">\n" +
                "                                        <tbody>\n" +
                "                                            <tr>\n" +
                "                                                <td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
                "                                                    <table class=\"image_block block-1\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                                                        <tr>\n" +
                "                                                            <td class=\"pad\" style=\"width:100%;padding-right:0px;padding-left:0px;\">\n" +
                "                                                                <div class=\"alignment\" align=\"center\" style=\"line-height:10px\"><img src=\"https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/373353139_6596050263810605_7760603276168250208_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mHy6OIZo0SsAX8gzX1I&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdSIlW_WrCOy-XgLMdf_Rym2axL2ivvPFS5ze5d0HmtRCg&oe=6520D739\" style=\"display: block; height: auto; border: 0; width: 100px; max-width: 100%;\" width=\"100\"></div>\n" +
                "                                                            </td>\n" +
                "                                                        </tr>\n" +
                "                                                    </table>\n" +
                "                                                </td>\n" +
                "                                            </tr>\n" +
                "                                        </tbody>\n" +
                "                                    </table>\n" +
                "                                </td>\n" +
                "                            </tr>\n" +
                "                        </tbody>\n" +
                "                    </table>\n" +
                "                    <table class=\"row row-2\" align=\"center\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                        <tbody>\n" +
                "                            <tr>\n" +
                "                                <td>\n" +
                "                                    <table class=\"row-content stack\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;\" width=\"500\">\n" +
                "                                        <tbody>\n" +
                "                                            <tr>\n" +
                "                                                <td class=\"column column-1\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;\">\n" +
                "                                                    <table class=\"heading_block block-1\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                                                        <tr>\n" +
                "                                                            <td class=\"pad\" style=\"text-align:center;width:100%;\">\n" +
                "                                                                <h1 style=\"margin: 0; color: #ba3d4f; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 23px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;\"><span class=\"tinyMce-placeholder\">Xác minh tài khoản của bạn</span></h1>\n" +
                "                                                            </td>\n" +
                "                                                        </tr>\n" +
                "                                                    </table>\n" +
                "                                                    <table class=\"divider_block block-2\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                                                        <tr>\n" +
                "                                                            <td class=\"pad\">\n" +
                "                                                                <div class=\"alignment\" align=\"center\">\n" +
                "                                                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                                                                        <tr>\n" +
                "                                                                            <td class=\"divider_inner\" style=\"font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;\"><span> </span></td>\n" +
                "                                                                        </tr>\n" +
                "                                                                    </table>\n" +
                "                                                                </div>\n" +
                "                                                            </td>\n" +
                "                                                        </tr>\n" +
                "                                                    </table>\n" +
                "                                                    <table class=\"paragraph_block block-3\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;\">\n" +
                "                                                        <tr>\n" +
                "                                                            <td class=\"pad\">\n" +
                "                                                                <div style=\"color:#000000;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:16.8px;\">\n" +
                "                                                                    <p style=\"margin: 0;\">Cảm ơn bạn đã đăng ký tài khoản với hệ thống chúng tôi. Chúng tôi muốn đảm bảo rằng đó thực sự là bạn. Vui lòng dùng mã xác nhận để nhập khi được yêu cầu. Lưu ý đây là mã bảo mật vui lòng không chia sẻ với ai. Cảm ơn bạn</p>\n" +
                "                                                                </div>\n" +
                "                                                            </td>\n" +
                "                                                        </tr>\n" +
                "                                                    </table>\n" +
                "                                                    <table class=\"heading_block block-4\" width=\"100%\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                                                        <tr>\n" +
                "                                                            <td class=\"pad\">\n" +
                "                                                                <h3 style=\"margin: 0; color: #555555; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;\"><span class=\"tinyMce-placeholder\">Mã xác thực</span></h3>\n" +
                "                                                            </td>\n" +
                "                                                        </tr>\n" +
                "                                                    </table>\n" +
                "                                                    <table class=\"heading_block block-5\" width=\"100%\" border=\"0\" cellpadding=\"15\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                                                        <tr>\n" +
                "                                                            <td class=\"pad\">\n" +
                "                                                                <h2 style=\"margin: 0; color:#ba3d4f; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 18px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;\"><span class=\"tinyMce-placeholder\">"+ code+"</span></h2>\n" +
                "                                                            </td>\n" +
                "                                                        </tr>\n" +
                "                                                    </table>\n" +
                "                                                    <table class=\"heading_block block-6\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                                                        <tr>\n" +
                "                                                            <td class=\"pad\" style=\"text-align:center;width:100%;\">\n" +
                "                                                                <h3 style=\"margin: 0; color: #555555; direction: ltr; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;\"><span class=\"tinyMce-placeholder\">(Có hiệu lực 10 phút)</span></h3>\n" +
                "                                                            </td>\n" +
                "                                                        </tr>\n" +
                "                                                    </table>\n" +
                "                                                    <table class=\"divider_block block-7\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                                                        <tr>\n" +
                "                                                            <td class=\"pad\">\n" +
                "                                                                <div class=\"alignment\" align=\"center\">\n" +
                "                                                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" role=\"presentation\" width=\"100%\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt;\">\n" +
                "                                                                        <tr>\n" +
                "                                                                            <td class=\"divider_inner\" style=\"font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;\"><span> </span></td>\n" +
                "                                                                        </tr>\n" +
                "                                                                    </table>\n" +
                "                                                                </div>\n" +
                "                                                            </td>\n" +
                "                                                        </tr>\n" +
                "                                                    </table>\n" +
                "                                                    <table class=\"paragraph_block block-8\" width=\"100%\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" role=\"presentation\" style=\"mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;\">\n" +
                "                                                        <tr>\n" +
                "                                                            <td class=\"pad\">\n" +
                "                                                                <div style=\"color:#000000;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:15.6px;\">\n" +
                "                                                                    <p style=\"margin: 0;\"><em> </em><br><em>Email được gửi từ Hệ thống của <u>Key Hub Social Media</u> vui lòng không reply<br>No. 1 Vo Van Ngan Street, Linh Chieu Ward, </em><a node=\"[object Object]\" prompt=\"Tell me more about Thu Duc City.\" style=\"text-decoration: underline; color: #0068a5;\">Thu Duc City</a>, <a node=\"[object Object]\" prompt=\"Tell me more about Ho Chi Minh City.\" style=\"text-decoration: underline; color: #0068a5;\">Ho Chi Minh City</a>,<em> Vietnam.<br></em></p>\n" +
                "                                                                </div>\n" +
                "                                                            </td>\n" +
                "                                                        </tr>\n" +
                "                                                    </table>\n" +
                "                                                </td>\n" +
                "                                            </tr>\n" +
                "                                        </tbody>\n" +
                "                                    </table>\n" +
                "                                </td>\n" +
                "                            </tr>\n" +
                "                        </tbody>\n" +
                "                    </table><!-- End -->\n" +
                "                </td>\n" +
                "            </tr>\n" +
                "        </tbody>\n" +
                "    </table>\n" +
                "</body>\n" +
                "\n" +
                "</html>\";";
    }

}
