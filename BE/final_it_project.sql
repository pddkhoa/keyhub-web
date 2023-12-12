/*
 Navicat Premium Data Transfer

 Source Server         : My Sql
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : final_it_project

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 12/12/2023 20:50:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for block
-- ----------------------------
DROP TABLE IF EXISTS `block`;
CREATE TABLE `block`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `blocked_id` bigint NULL DEFAULT NULL,
  `blocker_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKhnrrhouh48pbxuiupjvgss192`(`blocked_id` ASC) USING BTREE,
  INDEX `FK2xbkf5oyys1e9snvaeiu3sxrt`(`blocker_id` ASC) USING BTREE,
  CONSTRAINT `FK2xbkf5oyys1e9snvaeiu3sxrt` FOREIGN KEY (`blocker_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKhnrrhouh48pbxuiupjvgss192` FOREIGN KEY (`blocked_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 285 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of block
-- ----------------------------
INSERT INTO `block` VALUES (278, 43, 69);
INSERT INTO `block` VALUES (280, 35, 69);
INSERT INTO `block` VALUES (284, 58, 69);

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog`  (
  `blog_id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `series_id` bigint NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `likes` decimal(19, 2) NULL DEFAULT NULL,
  `category_id` bigint NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `views` bigint NULL DEFAULT NULL,
  `create_date` datetime(6) NULL DEFAULT NULL,
  `sum_violating` int NULL DEFAULT NULL,
  PRIMARY KEY (`blog_id`) USING BTREE,
  INDEX `FK_Own`(`user_id` ASC) USING BTREE,
  INDEX `FK7u8tmlwxnjvesb7um4mxsvsvc`(`series_id` ASC) USING BTREE,
  INDEX `FKqyvjif1i2geaeuvkh3n1jrnn4`(`category_id` ASC) USING BTREE,
  FULLTEXT INDEX `title`(`title`, `content`, `description`),
  CONSTRAINT `FK7u8tmlwxnjvesb7um4mxsvsvc` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKpxk2jtysqn41oop7lvxcp6dqq` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKqyvjif1i2geaeuvkh3n1jrnn4` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 245 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES (193, 'Đắc Nhân Tâm - Cuốn Sách Gia Đình Bạn Không Thể Bỏ Lỡ', '<p style=\"text-align: justify; font-size: 20px;\">Chắc chắn, ai trong chúng ta cũng đã từng nghe về cuốn sách \"<b>Đắc Nhân Tâm</b>\" của Dale Carnegie - một tác phẩm nổi tiếng và có ảnh hưởng sâu rộng đối với nhiều người trên khắp thế giới. Với mục tiêu giúp con người hiểu rõ hơn về bản thân và cách tương tác với người khác, cuốn sách này thực sự là một kho tàng tri thức.</p><p style=\"text-align: justify; font-size: 20px;\"><b>Chìa Khóa Vàng Đến Thành Công Cá Nhân</b></p><p style=\"text-align: justify; font-size: 20px;\">Cuốn sách khai thác sâu về những nguyên tắc cơ bản trong việc xây dựng mối quan hệ tích cực, tạo dựng lòng tin, và thậm chí là cách quản lý tâm trạng của bản thân. Với những câu chuyện thực tế và minh họa, Carnegie giúp độc giả áp dụng những nguyên lý này vào cuộc sống hàng ngày.</p><p style=\"text-align: justify; font-size: 20px;\"><b>Khám Phá Bản Thân và Hiểu Người Khác</b></p><p style=\"text-align: justify; font-size: 20px;\">Một trong những điểm mạnh của \"<b>Đắc Nhân Tâm</b>\" chính là khuyến khích độc giả nhìn nhận bản thân và hiểu rõ người khác. Thông qua việc thấu hiểu nguyện vọng, mong muốn, và cảm xúc của đồng loại, chúng ta có thể xây dựng mối quan hệ tích cực và có ảnh hưởng tích cực đến xung quanh.</p><p style=\"text-align: justify; font-size: 20px;\"><b>Ứng Dụng Thực Tế</b></p><p style=\"text-align: justify; font-size: 20px;\">Cuốn sách không chỉ là một bản lý thuyết mà còn đi kèm với những ví dụ thực tế và hướng dẫn cụ thể. Người đọc có thể dễ dàng áp dụng những kiến thức này vào cuộc sống hàng ngày, từ giao tiếp tại nơi làm việc đến quản lý mối quan hệ cá nhân.</p><p style=\"text-align: justify; font-size: 20px;\"><b>Nâng Cao Kỹ Năng Giao Tiếp</b></p><p style=\"text-align: justify; font-size: 20px;\">Kỹ năng giao tiếp là một trong những yếu tố quan trọng quyết định sự thành công trong mọi lĩnh vực. \"<b>Đắc Nhân Tâm</b>\" không chỉ giúp độc giả hiểu về tầm quan trọng của giao tiếp mà còn cung cấp những chiến lược và kỹ thuật cụ thể để nâng cao khả năng này.</p><p style=\"text-align: justify; font-size: 20px;\"><b>Kết Luận</b></p><p style=\"text-align: justify; font-size: 20px;\">Trong thế giới ngày nay, nơi mà sự kết nối giữa con người ngày càng trở nên quan trọng, cuốn sách \"<b>Đắc Nhân Tâm</b>\" là một hướng dẫn không thể thiếu. Nó không chỉ giúp bạn trở thành một người giao tiếp xuất sắc mà còn là chìa khóa mở cánh cửa đến thành công cá nhân và sự hài lòng trong cuộc sống.</p><p style=\"text-align: center;\"><img src=\"https://doanducdong.com/wp-content/uploads/2022/03/quang-ganh-lo-di-va-vui-song-1920x1002.jpg\" alt=\"Đắc Nhân Tâm\" style=\"max-width: 100%; height: auto;\"></p>', 96, 'Review cuốn sách Đắc Nhân Tâm', NULL, 'https://doanducdong.com/wp-content/uploads/2022/03/quang-ganh-lo-di-va-vui-song-1920x1002.jpg', 0.00, 1, 1, 0, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (196, 'Chuyện sách với người đọc sách', '<img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700208617/lvfttjhn0whbgfui94fc.png\" alt=\"Image\" /><p>Là người có sở thích đọc sách với khoảng 20 đầu sách một năm, tôi thường đem câu chuyện sở thích này xen vào giữa các mối quan hệ để tìm điểm chung. Sau nhiều lần tìm điểm chung không thành, tôi đã không thử nữa, bởi nói chuyện sách với người không đọc sách còn khó hình dung hơn là “nước đổ lá khoai”.</p><p>Lẽ dĩ nhiên, bài viết này chỉ dành cho người có đọc sách. Các bạn không đọc sách (mọi thể loại sách), chấp nhận đứng về phần đối-thủ-của-kiến-thức thì không nên đọc bài này. Tôi sẽ không chịu trách nhiệm nếu có bất kì cảm xúc tiêu cực nào nảy sinh.<br></p><h2>Chuyện sách trong thời đại bùng nổ internet</h2><p>Trong thời đại bùng nổ internet, nhà nhà, người người đều có smartphone với thời gian rảnh rỗi đều tập trung vào Facebook, Instagram, TikTok thay vì việc xem truyền hình, đọc sách, đọc báo như cách đây một thập kỷ. Ở ngoài các địa điểm công cộng như quán café, căn-tin… rất hiếm khi có thể thấy một người đọc sách.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700208662/w4euajyldwihffwzb6xz.png\" alt=\"Image\" /><p>Hình ảnh một người chú tâm vào sách ở nơi công cộng là một điều xa xỉ</p><p>Không có nhiều thời gian đọc nên ưu tiên về sách cũng giảm bớt xuống, tất nhiên chất lượng sách được in và chi phí dành cho việc mua sách mỗi ngày một giảm xuống. Chúng ta có thể thấy những đầu sách nằm trong top best-seller là những sách tản văn sướt mướt, sặc mùi ngôn tình, kể câu chuyện vỏn vẹn chỉ vài trang giấy, ấn tượng khi đọc xong là thỏa mãn về mặt cảm xúc. Hết.</p><p>Chúng ta cũng thấy Hội chợ sách được rất nhiều người lan truyền và tham gia. Liệu có phải nhiều người quan tâm về kiến thức hơn? Dạo một vòng hội sách, phần lớn là sách giảm giá 50%, 30%, 20% và sách đồng giá 15k, 20k, 30k. Có phải trong thời đại thông tin, kiến thức đã ngày một “rẻ” hơn? Và việc nhiều người tham dự hội sách bởi vì có thể “mua kiến thức” với giá rẻ hơn? Thay vì quan tâm đến chuyện tương đồng giữa giá trị sách và kiến thức mang lại, mặc cho việc so sánh hơi khập khiễng bởi kiến thức là dạng vật chất vô hình tồn tại cả đời.</p><blockquote>“Kiến thức” có giá 39 ngàn một kilogram?</blockquote> - <p>Khi đọc đến đây, tôi mong bạn không trả lời câu hỏi này, hãy suy nghĩ thôi. Nếu bạn có câu trả lời cho mình rồi, hãy dùng nó để thay đổi việc đọc sách, mua sách của những người thân bạn bè xung quanh, hơn là việc tốn thời gian tranh luận với người không đọc sách.</p><h2>Chuyện sách chỉ nói với người đọc sách</h2><p>Trong một ngày đẹp trời, tôi đã viết được những ý dưới đây, cụ thể khi mua sách, đọc sách, nói chuyện về sách nên chú ý những điều sau để cuộc sống đẹp hơn *smile face*.</p><p>1. Không mua sách vì ưu tiên về giá (giá rẻ, giảm giá).</p><p>2. Không mua sách vì ai cũng mua (best-seller), bởi best-seller là những đầu sách self-help hoặc ngôn tình sướt mướt, là những dạng sách được mua nhiều bởi ai cũng có thể tìm thấy mình trong đó, không có tác dụng về mặt tri thức hoặc kiểu thúc đẩy động lực ngắn hạn rồi để đó. Ngoại trừ các đầu sách là tác phẩm văn học để đời.</p><p>3. Không mua sách nếu tiếng Việt gõ còn sai, nói còn vấp, lúc này nên mua sách phổ sách phổ cập tiếng Việt.</p><p>4. Đọc một quyển sách với tựa đề \"lớn lao\" (ví dụ sách Đắc nhân tâm) không có nghĩa là bản chất người đọc cũng “lớn lao” như vậy. Vì sách cũng chỉ là dạng kiến thức, kĩ năng cần được thực hành và ôn lại theo thời gian, không phải đọc xong loại sách đó là nghiễm nhiên sống được như thế.</p><p>5. Đừng khoe sách trên mạng, tôi chẳng thấy ai đọc nhiều sách mà khoe cả tủ sách trên mạng cả, việc này rất tốn thời gian và vô bổ, trừ những người review nội dung sách. Kiến thức trong sách sau khi đọc chắc chắn là không thể nhớ hết 100%. Vậy nên với những người không có thói quen đọc sách thì đừng nên khoe sách. Nhỡ có ai đó đọc nhiều hơn hỏi về lớp lang ý nghĩa sâu trong sách thì lại không trả lời được, như thế nhục lắm. Việc khoe sách trên mạng mang tính hình thức kiểu một người thích thể hiện ra vẻ bề ngoài hình ảnh “ham mê kiến thức”.</p><p>6. Chỉ nói chuyện về sách với người đọc sách hoặc với người sẵn sàng đọc. Nói chuyện sách với người không đọc sách còn hơn nước đổ lá khoai, giống như nói chuyện về phim ảnh với một người chẳng bao giờ xem phim, luôn ở trong trạng thái không muốn biết về những thứ hay ho mà phim ảnh có thể đem lại.</p><p>7. Mua sách để tặng thì phải hỏi người được tặng thích sách loại gì, mình mua sách tặng người ta với mục đích gì, đừng tặng sách 7 Thói Quen Của Người Thành Đạt cho người kinh doanh đa cấp ở Việt Nam (đấy là tội ác) *cái này hài hài thôi nhưng tôi nghĩ cũng có ý đúng*.</p><p>8. Đi mua sách nên đi một mình, để có thời gian tìm hiểu, cảm nhận chủ quan nhất. Vì thích loại sách nào rồi mua thì sau đó mới có hứng mà đọc, đừng mua tràn lan, tốn cả chi phí và thời gian dành cho sách nếu như sau khi mua mới phát hiện nội dung sách không hợp với bản thân.</p><h2>Kết luận</h2><p>Đọc sách là cách ngắn nhất giúp tiếp cận lượng tri thức và kinh nghiệm khổng lồ được đúc kết một cách dễ hiểu, có chọn lọc. Đọc sách cũng là một cách hiểu về bản thân, trau đồi khả năng tưởng tượng, sáng tạo và phát triển về ngôn ngữ ở các kĩ năng hiểu, diễn đạt.</p><p>Sách cũng như một bữa ăn ngon, giá tiền và chất lượng luôn tỉ lệ thuận với nhau, hoàn toàn không có chuyện ngon bổ rẻ. Sách chỉ khác bữa ăn ngon ở chỗ, thức ăn thì tiêu hóa được, nhưng kiến thức trong sách thì có giá trị cả đời.</p><p>Thế nên khi quyết định mua sách, cần phải suy nghĩ đắn đo thiệt nhiều nhé.</p><p>Đây là bài viết đầu tay của tôi trên Spiderum, mong các anh chị em chém thẳng.</p>', 96, 'Là người có sở thích đọc sách với khoảng 20 đầu sách một năm, tôi thường đem câu chuyện sở thích này xen vào giữa các mối quan hệ để...', NULL, 'https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 1, 1, 0, '2023-11-17 15:12:19.410000', 0);
INSERT INTO `blog` VALUES (197, 'Sách/Tri thức?\n', '<p>Từ xa xưa, con người đã sử dụng những hình ảnh để ghi lại quá trình của một ngày, rồi họ sáng tạo ra chữ viết để ghi chép những kiến thức, quan điểm hay bất cứ thứ gì. Và thế là sách ra đời . . Sách đã đi cùng với lịch sử loài người, gắn bó với đời sống của con người dù ở dạng này hay dạng khác. Những người Trung Quốc, Hy Lạp, La Mã cổ đại đã dùng những tấm gỗ, đất sét hay sau này với người Trung Quốc là bằng giấy tre để có thể ghi lại những gì họ muốn và xem nó như một thứ công cụ cực kỳ hữu dụng trong cuộc sống. Có một nhà văn từng nói</p><p>“Sách là ngọn đèn sáng bất diệt của trí tuệ con người”</p><p>để nói về tầm quan trọng của sách đối với con người. </p><p>Ta có thể thấy, sách thật tuyệt vời và đáng trân trọng, nhưng sách là gì ?</p><p>Đối với đa số mọi người sẽ định nghĩa: “Sách là một loạt các tờ giấy có chữ hoặc hình ảnh được viết tay hoặc in ấn, được buộc hoặc dán với nhau về một phía”. Nhưng đối với tôi, sách là một thứ gì đó rộng hơn, là một nơi lưu trữ những kiến thức, quan điểm, tư tưởng của con người. Sách có thể có nhiều loại hình khác nhau nhưng sách vẫn mãi là sách, là nơi lưu trữ những tri thức từ tự nhiên, con người, kinh nghiệm cuộc sống, v..v… Đôi khi, sách cũng là một người bạn, người thầy nằm giữa giữa ta và kiến thức, giúp chúng ta tiếp cận được với những tri thức của con người hay đơn giản là những thứ hay ho trong cuộc sống hoặc những trải nghiệm được ghi lại mà bạn muốn được lắng nghe và học hỏi. </p><p>Những cuốn sách khoa học giúp ta hiểu thêm về những thứ trong tự nhiên</p><p>Còn sách lịch sử thì có thể cho chúng ta hiểu thêm về lịch sử của nước nhà và thế giới, từ đó có những bài học cho bản thân. Sách tâm lý giúp chúng ta có thể hiểu thêm về chính chúng ta và làm chủ bản thân. Truyện châm biếm, truyện cười giúp chúng ta có thể thư giãn với những tràng cười sảng khoái và có thể học được những bài học sâu sắc về cuộc sống mà vẫn còn giá trị cho đến ngày nay.</p><p>Trở lại với câu nói của nhà văn nọ, tại sao sách là ngọn đèn sáng bất diệt của trí tuệ con người. có thể bạn đã hiểu tại sao nhà văn kia lại nói như vậy. Sách giúp ta tìm hiểu về mọi thứ, từ trên trời cho tới dưới biển, từ mọi lĩnh vực như tự nhiên và xã hội, từ mọi thời điểm từ quá khứ cho đến tương lai, không đâu là không có tri thức của sách đọng lại. Một thứ có giá trị xuyên thời gian, giúp ta có thể hiểu được ông cha ta đã làm gì tốt đẹp, làm gì chưa tốt mà có thể phát huy những thứ những thứ còn đang tốt đẹp và loại trừ những thứ chưa tốt để có thể cho một cuộc sống tốt hơn. </p><p>Những cuốn sách thật đáng trân trọng và đáng quý. Nếu như không có sách để cung cấp kiến thức, con người ta sẽ ra sao ? Nếu như không có sách đọc sau những thứ căng thẳng, chúng ta sẽ ra sao ? Nhưng đôi khi mọi thứ lại có 2 mặt của nó. Nếu chúng ta có sách tốt, ắt hẳn sẽ có sách xấu. Có cái nên đọc, có cái cần tránh.</p><p>Vậy, sách tốt/xấu là gì và tại sao người ta lại gọi là sách tốt/xấu mà không gộp chung vào làm một ? Vì rõ ràng chúng cũng là sách, tách làm gì cho mệt ? </p><p>Sách tốt là gì ? Đơn giản đề nói, nó là sách mang lại những thông tin đáng giá, tốt cho cuộc sống của chúng ta. Sách tốt cho chúng ta những kiến thức chính xác, những nhận định đúng đắn, những thứ hay ho, những trải nghiệm thật giúp chúng ta có thể hiểu thêm về cuộc sống và con người chúng ta sau khi đọc xong. Nó làm con người ta sống một cách trong sáng hơn, nhiệt huyết hơn trong cuộc sống.</p><p>Vậy còn sách xấu, đó là cái gì ? Tại sao họ lại nói đó là sách xấu ? Những cuốn sách xấu trái ngược hoàn toàn so với những cuốn sách tốt đẹp. Đó là những cuốn sách có nội dung tiêu cực, đầu độc tâm hồn tuổi trẻ, biến thanh thiếu niên thành những kẻ xấu xa, ích kỷ; hoặc là những cuốn sách xuyên tạc hiện thực đời sống, đưa đến cho người đọc những kiến thức sai lệch về thế giới xung quanh, gây thù hằn và ngờ vực giữa các dân tộc, đề cao bạo lực và chiến tranh, kích động những bản năng thấp hèn của con người. Những cuốn sách dùng để chuộc lợi cho bản thân. </p><p>Vì vậy, chúng ta phải biết chọn sách mà đọc , phải biết khôn ngoan khi chọn sách vì đó chính là kiến thức của chúng ta. Nếu kiến thức thu nhập vào mà xấu thì con người và nhận thức cũng sẽ xấu theo. </p><p>Đọc sách là một cách để tiếp thu kiến thức, một cách giải trí lành mạnh được áp dụng từ xưa đến nay. Những cuốn sách từ trước đến nay không chỉ khai sáng cho trăm người, nghìn người, triệu người mà là cho cả nhân loại. Khi đọc những tác phẩm như “Sống chết mặc bay” của Phạm Duy Tổn hay “Lão Hạc” của Nam Cao hoặc “Tắt đèn” của Ngô Tất Tố, ta có thể hiểu được chế độ nửa phong kiến nửa thực dân trước năm 1945. Đọc thơ của Nguyễn Du, Hồ Xuân Hương,... ta hiểu những gì mà ông cha đã trải qua và truyền lại cho con cháu…. Vậy, từ những điều được nói ra và các bạn hiểu được, ta luôn kết luận được rằng lợi ích của sách rất lớn lao. Đúng với câu nói:</p><blockquote>\"Sách là ngọn đèn sáng bất diệt của trí tuệ con người\"</blockquote> - ', 96, 'Từ xa xưa, con người đã sử dụng những hình ảnh để ghi lại quá trình của một ngày, rồi họ sáng tạo ra chữ viết để ghi chép những kiến...\n', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1700208971/hyecdf0ryoyxvyhmy60j.jpg', 0.00, 1, 1, 0, '2023-11-17 15:16:21.551000', 0);
INSERT INTO `blog` VALUES (199, '[NÓI CHUYỆN SÁCH VỞ] NGHE NHẠC VÀ ĐỌC SÁCH', '<img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700209598/q1zzffp2fkpmvbkfhdvr.png\" alt=\"Đọc sách khi?\" /><p>Thực tình thì tùy thuộc vào nội dung cuốn sách đó ra sao mà tôi sẽ đưa ra lựa chọn có nghe nhạc khi đọc nó hay không.</p><p>Nếu là sách non-fiction thì tôi ít khi bật nhạc, thậm chí có chút yên tĩnh lại càng tốt.</p><p>Tuyển tập truyện ngắn với đốc độ đọc nhanh, tôi có thể hoàn tất ngay tại nơi đông người ồn ã.</p><p>Nghe nhạc và nghiền ngẫm tiểu thuyết, xem chừng vẫn hợp nhất.</p><p>Hai cái thú vui dù là yêu thích, tốt hơn là cân nhắc cho kỹ rồi hẵng kết hợp. Tôi lại không phải kiểu người thích cảm nhận thứ gì đó nửa vời, nên chuyện vừa nghe nhạc vừa đọc sách đôi khi cũng hơi kỹ tính quá đà.</p><p>…….</p><p>Dạo trước có người bạn nọ hỏi tôi thích khi đọc sách có hay nghe nhạc không và nếu có thì nghe nhạc gì.</p><p>Câu hỏi đó tưởng dễ mà tôi cũng phải nghĩ mãi mới trả lời được. Vì thực tế là khi đọc sách thì nghe nhạc chỉ là thứ yếu, một kiểu làm nền giúp bản thân tập trung vào câu chữ. Tôi lại có cái thói bật vài album nhạc không lời liên tục nhau, nên muốn nhớ cuốn sách này mình đã nghe nhạc của ai khi đọc nó, xem chừng hơi khó.</p><p>Sẵn tiện đây đã ghi vài chữ này, tôi xin chia sẻ vài trong số rất nhiều album mà bản thân nghĩ là thích hợp cho việc đọc sách.</p><p>Hy vọng sẽ có ích cho ai đó.</p><p>Ryuichi Sakamoto / Illuha / Taylor Deupree – Perpetual (2015)</p><p>Thể loại Ambient như thế này tôi thích nghe khi đọc sách khoa học, Sci-fi hay có chút yếu tố Thriller. Mà thực ra Ryuichi còn có nhiều bản hóa tấu Piano rất hay, nếu bạn thấy album trên khó nghe quá cũng đừng ngại thử tìm nghe chúng.</p><p>Yiruma – From The Yellow Room (2003)</p><p>Yiruma là nhạc sỹ piano người Hàn. Banana Yoshimoto là nhà văn người Nhật. Tôi chẳng quan tâm về chuyện quốc tịch có ảnh hưởng đến việc những sản phẩm của họ tương thích với nhau hay không. Sau một lần kết hợp tình cờ và tôi bắt đầu thói quen đọc văn Nhật lúc nghe album của Yiruma. Chắc cũng 3 năm có lẻ rồi, vẫn chưa khi nào thấy chán.</p><p>Mogwai – Young Team (1999)</p><p>Nghe rock khi đọc sách có thể khiến bạn mất tập trung, đặc biệt là với trường hợp như Mogwai – nhạc rất dễ “hút”. Nếu được thì hãy chọn những cuốn sách với nội dung hơi “nặng đô” một chút, tuy sự kết hợp này dễ đem lại cảm giác mệt tim nhưng tôi tin nó hoàn toàn xứng đáng.</p><p>Bill Evans &amp; Chet Baker – The Legendary Sessions (1959)</p><p>Bạn chán. Bạn muốn đọc. Nhưng bạn lại lười. Cứ nhàn nhã một chút, sách nằm ngay đấy, nó chẳng có chân để chạy mất đâu (trừ trường hợp bạn đi mượn). Đọc sách mà vội thì còn gì vui chứ =))</p>', 96, 'Thực tình thì tùy thuộc vào nội dung cuốn sách đó ra sao mà tôi sẽ đưa ra lựa chọn có nghe nhạc khi đọc nó hay không. Nếu là...', NULL, 'https://images.pexels.com/photos/1115692/pexels-photo-1115692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 1, 0, 4, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (200, 'ẢO TƯỞNG VỀ SÁCH', '<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Không nhớ ông cố nội nào từng khuyên hãy đọc sách vì sách là nguồn tri thức vô giá. Với Mình thì mình thấy cũng có phần đúng cũng có phần sai. Mình đã kiểm chứng bằng 2 kinh nghiệm phải trả bằng nhiều tiền để có cái kinh nghiệm đó</p><p>Thứ nhất là lĩnh vực đầu tư chứng khoán: rất rất nhiều sách mình đọc, khoảng hơn 20 cuốn là đọc. Bao gồm sách phân tích cơ bản và phân tích kỹ thuật. Mình không ghi tác giả ở đây. Khá nhiều trong các cuốn sách đó hứa hẹn rằng bạn sẽ TỰ DO TÀI CHÍNH, TRIỆU PHÚ… Sau đó là hành trình thua lỗ của mình</p><p>Mình nghiên cứu khá kỹ và tự tin vì đã học theo được các phương pháp của các nhà đầu tư vĩ đại nhưng mua con nào lỗ con đó. Thỉnh thoảng cũng có lãi nhưng lãi không đủ bù lỗ. Mình cải thiện phương pháp , đọc thêm cái bài của thầy dạy chứng khoán , youtube…..cuối năm đó mình lỗ gần 50 triệu. </p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700210116/ytq7tlgr7xq8i7hqcqr8.png\" alt=\"Image\" /><p>Nói ở đây không có nghĩa sách viết sai, có thể kiến thức sách đúng tại thời điểm viết sách và một số kiến thức bây giờ cũng không còn phù hợp nữa. Những kiến thức cơ bản thì vẫn rất hữu ích (nếu bạn quan tâm các kiến thức nào hữu ích thì comment ,mình sẽ viết thêm)&nbsp;Mình chỉ cảnh báo mọi việc không hề dễ dàng nếu bạn không thật sự nghiêm túc và không có chuyện x tài khoản như 1 số chuyên gia hứa hẹnBài học thứ 2 là ở lĩnh vực khởi nghiệp. Không có mảnh đất nào sinh lời bằng viết sách về chứng khoán và khởi nghiệp. Nếu có chắc chỉ có các sách dạy làm giàu là cạnh tranh được về lợi nhuận với 2 anh kia.Mình thật sự muốn tìm hiểu về lĩnh vực này vì ý muốn kinh doanh riêng. Sau khi dò la các nhà sách về chủ đề khởi nghiệp thì phát hiện ra mấy ông tác giả Việt thì bìa sách toàn Slogan: TRIỆU ĐÔ, BÍ QUYẾT, TỰ DO…. Hứa hẹn 1 tương lai tươi sáng. Nhưng sau kinh nghiệm đau thương từ thị trường chứng khoán thì giờ đây mình cảnh giác hơn nhiều. Cũng kha khá các tác giả nước ngoài cũng chỉ viết theo kiểu hứa hẹn tương lai hấp dẫn nhưng mình thì không tin.Mình không tin vì có hàng ngàn chủ doanh nghiệp; Họ là những người hàng ngày đối mặt với kinh doanh và họ chưa bao giờ hứa hẹn công việc của họ kiếm được rất nhiều tiền, những chủ công ty phải vật lộn để có thể tồn tại.<b>Đúc kết</b>: Thị trường sách ngày nay mình có cảm nhận là tác giả viết theo kiểu là để <b>BÁN ĐƯỢC NHIỀU SÁCH</b>, viết cho những đọc giả <b>muốn nghe những gì cần nghe</b> chứ không thật sự truyền đạt kiến thức.<b>P/S:</b> Sau 2 năm đầu tư chứng khoán thì mình đã lãi, lãi hơn phần học phí rất nhiều và mình nói với các bạn là việc gì cũng đòi hỏi sự kiên nhận , gan lì, đấu tranh rất lớn.&nbsp;&nbsp;</p>', 96, NULL, NULL, 'https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 1, 0, 8, '2023-11-17 15:35:40.860000', 0);
INSERT INTO `blog` VALUES (201, 'Lời khuyên chỉ là thuốc an thần, an ủi đôi khi sẽ là chất gây nghiện', '<p>Lời khuyên chỉ tạm thời trấn an nỗi lo lắng và tự ti, nó đơn giản chỉ là một loại thuốc an thần. Còn lời an ủi chỉ xoa dịu nỗi đau và những lúc lạc đường, nó chẳng khác gì chất gây nghiện. Tuổi trẻ không nên lạm dụng thuốc an thần và chất gây nghiện.&nbsp;</p><h2>Tại sao bạn thường biết rõ câu trả lời, nhưng vẫn cần lời khuyên?</h2><p>Khi đứng trước một sự lựa chọn nào đó, một quyết định nào đó, đa phần chúng ta đều đã có câu trả lời cho riêng mình. “Em thích học ngành này, nhưng bố mẹ lại muốn em học ngành này vì có tương lai, nhưng em không có chút hứng thú nào với nó. Chị nghĩ em nên làm như thế nào?” “Em cảm thấy không thể tiếp tục được mối quan hệ với anh ta được nữa, em cảm giác bị phản bội. Nhưng em vẫn không thể buông tay. Chị nghĩ em nên làm như thế nào?” Ai cũng đã từng trải qua những tình huống như thế hoặc tương tự. Bởi cuộc sống luôn có những sự chọn lựa và đánh đổi. Ít ai quyết định ngay tức khắc, họ tìm đến những lời khuyên của “các bậc bô lão” – những người được xem là có nhiều kinh nghiệm và từng trải hơn.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700210232/wjrjhxwtyvswjaul7eqd.png\" alt=\"Lời khuyên\" /><p>Nhưng có một thực tế bạn dễ dàng nhận ra rằng, ngay chính khi bạn trình bày những vấn đề của mình để xin lời khuyên, bạn đã có câu trả lời cho chính mình rồi. Bạn vẫn chưa tin điều đó ư? Thử nhớ lại một lần gần nhất bạn xin lời khuyên từ ai đó nhé. Bạn sẽ phải trình bày câu chuyện của mình một cách cụ thể và rõ ràng cho họ nghe, đúng chứ? Dĩ nhiên là bạn sẽ phải kể theo ngôn ngữ của chính bạn. Đôi khi bạn cố tình bỏ qua một số chi tiết quan trọng. Nhưng chi tiết ấy có thể sẽ quyết định bạn sẽ đi theo một hướng khác, nhưng bạn không muốn đưa nó ra làm dẫn chứng. Ví dụ: Bạn cảm thấy bị phản bội và muốn chia tay bạn trai đã gắn bó 2 năm của mình. Bạn muốn có một lời khuyên đến từ một chị gái trải đời nọ. Bạn đem câu chuyện của mình ra để kể cho họ nghe. Bạn nói rằng bạn cảm giác rằng anh ta đang phản bội bạn. Nhưng bạn lại kể hoài về những lần anh ta tốt với bạn như thế nào, anh ta nuông chiêu bạn, chỉ là đôi khi anh ta hơi vô tâm. Nhưng tất cả cũng vì công việc, vì tương lai mà thôi. Vậy đấy, thật ra bạn đã có câu trả lời cho riêng mình rồi, nhưng bạn vẫn muốn nhận lấy cho mình một vài lời khuyên. Trong những tình huống đại loại như trên đây, chẳng có lý do gì người ta lại khuyên bạn chia tay một người luôn tốt với bạn, chỉ là “đôi khi hơi vô tâm” bởi họ đang bận việc cả. Đúng không?</p><p>Vậy, tại sao bạn biết rõ câu trả lời nhưng vẫn dành hàng giờ đồng hồ để kể lể, trình bày rồi xin một lời khuyên mà bạn đã chắc chắn trong lòng bàn tay? Chính chúng ta đôi khi cũng không hiểu tại sao mình lại làm thế. Bởi vì chúng ta quá cô đơn trong chính quyết định của mình. Những dằn vặt, hoài nghi, tự ti cứ ám ảnh lấy cuộc sống của chính bạn, rồi bạn nghĩ rằng “điều đó thật sự không ổn cho trái tim nhỏ bé của mình, mình phải đi tìm đồng minh thôi”.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700210250/nmec8onk30rfqzbmmefr.png\" alt=\"Lời khuyên\" /><p>Suy cho cùng, những lời khuyên cũng chỉ là liều thuốc an thần cho căn bệnh trầm kha của loài người – sợ cô đơn. Bởi vì dù bạn có công nhận hay không thì bạn vẫn là chủ nhân của bản thân bạn. Bạn hiểu được rằng bạn đang muốn học ngành này chứ không phải một ngành nào đó người khác muốn, bạn biết được rằng bạn sẽ không thể sống thiếu một ai đó, bạn thừa biết công việc này không thực sự dành cho mình, bạn muốn tìm một nơi ở mới,… Nhưng bạn vẫn muốn dành riêng cho mình “một liều thuốc an thần” để quên đi cảm giác cô đơn và sợ hãi trước mỗi quyết định quan trọng của cuộc đời.</p><h2>Lời an ủi chỉ là chất gây nghiện</h2><p>“Em trượt phỏng vấn vào công ty A rồi chị ạ. Em đã cố gắng rất nhiều, nhưng vẫn không được. Em kém cỏi lắm đúng không chị?</p><p>Không, em giỏi mà, chỉ là nơi đó không phù hợp với em thôi”.</p><p>Chúng ta vẫn luôn có thói quen hỏi những câu hỏi mình đã biết câu trả lời và nói những điều tưởng chừng như sáo rỗng. Dĩ nhiên không ai phê phán điều đó cả. Trong những lúc buồn bã, tuyệt vọng thì còn gì ngọt ngào hơn một lời an ủi? Thế nhưng, “mật ngọt chết ruồi”, bạn say mê vào những lời an ủi đó bao nhiêu thì chất gây nghiện trong từng lời nói ngọt ngào đó sẽ đi mãi trong cuộc đời bạn. Nó tích tụ dần trong một thời gian dài, đến một lúc nào đó bạn sẽ không thể chịu đựng được nếu không có nó. Chất gây nghiện trong những lời an ủi khiến bạn quen được vuốt ve, quen được vỗ về mà quên đi rằng chẳng cái vuốt ve nào có thể giúp bạn thành công hay đơn giản là kiếm ra tiền.</p><p>Bạn sẽ không nghiện rượu nếu như bạn từ chối uống nó ngay từ những lần đầu tiên. Bạn cũng không thể để nó ám ảnh suốt cuộc đời nếu như trong những lúc đau khổ nhất, bạn tìm đến một thứ khác ngoài rượu để giải tỏa nỗi buồn. Nhưng trớ trêu thay, chất gây nghiện luôn có một sức ảnh hưởng đặc biệt đến cuộc đời mỗi con người. Nó vẫn tồn tại âm ỉ ở đó, chỉ có bạn bị lừa dối bởi những ngọt ngào và tê dại. Khi đã quá muộn, bạn nhận ra rằng thật ra những người luôn luôn bên cạnh an ủi bạn cũng không thể sống thay bạn được. Cho dù họ nói với bạn hàng vạn lần rằng bạn rất xuất sắc, điều đó cũng không có ý nghĩa gì cả bởi bạn chẳng hề được như vậy. Tất cả chỉ ở trong trí tưởng tượng của bạn mà thôi.</p><p>Này bạn trẻ, đừng lạm dụng thuốc an thần vì nó rất có hại cho sức khỏe. Bạn có thể tìm đến một số chất kích thích từ lời an ủi để cuộc sống của bạn bớt tối tăm đi, nhưng đừng để nó làm bạn nghiện. Nói tóm lại, đừng để những ngọt ngào bên tai dẫn bạn đi lạc đường. Hãy tỉnh táo mà sống tiếp, chẳng ai thành công nhờ dùng nhiều thuốc an thần và chất gây nghiện cả.</p>', 96, 'Lời khuyên chỉ tạm thời trấn an nỗi lo lắng và tự ti, nó đơn giản chỉ là một loại thuốc an thần. Còn lời an ủi chỉ xoa dịu nỗi đau...', NULL, 'https://images.pexels.com/photos/50996/colour-pencils-color-paint-draw-50996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 2.00, 1, 0, 12, '2023-11-17 15:38:25.101000', 0);
INSERT INTO `blog` VALUES (202, '9 Thói quen phá hủy sự tự tin của bạn', '<p>Sự tự tin, một số người sinh ra đã có đức tính tự tin thiên bẩm. Trong khi những người khác phải mất một thời gian để phát triển sự tự tin khi họ phát triển từ trẻ em thành người lớn. Nhưng sẽ có lúc sự tự tin của bạn biến mất phải không ? Bạn thường ước mình sẽ phải tự tin hơn. Mặc dù những thứ khác nằm ngoài tầm kiểm soát có thể ảnh hưởng đến sự tự tin của bạn, chẳng hạn như sự lấn át đến từ người khác, nhưng điều quan trọng là bạn phải biết mình có thể kiểm soát được điều gì và làm cách nào để giúp bản thân khỏi sự tự hủy hoại tự tin của chính mình. Đây là 9 thói quen hủy hoại sự tự tin của bạn.</p><h2>1.Bạn quan tâm quá nhiều đến việc người khác nghĩ gì về mình</h2><p>Đã bao nhiêu lần bạn tự nhủ rằng : “ Tôi không quan tâm những lời đàm tiếu của người khác nói về tôi “. Thật ra, con số này không đáng khích lệ lắm. Việc quan tâm đến những gì người khác nghĩ là điều rất bình thường, đặc biệt là khi chúng ta cố gắng gây ấn tượng với ai. Là con người ai chả muốn được người khác yêu mến và tôn trọng. Tuy nhiên khi bạn quan trọng những quan điểm của người khác hơn mình và thay đổi hành vi của mình để phản ánh những gì người khác muốn thấy ở bạn, điều đó đang làm hại sự tự tin của bạn nhiều hơn là có lợi cho chính bản thân.</p><h2>&nbsp;2.Suy nghĩ tiêu cực.</h2><p>Bạn đã có quá nhiều ngày như thế rồi phải không nào ? Bạn sẽ trở thành những gì bạn nghĩ. Nếu bạn luôn nghĩ mình không đủ giỏi thì bạn sẽ không bao giờ tự tin. Bạn có suy nghĩ rằng bạn không bao giờ có thể có được sự thăng tiến đó mặc dù bạn hoàn toàn có đủ khả năng ? Đó chính là suy nghĩ tiêu cực. Mắc kẹt trong sự bi quan sẽ tạo ra một lời tiên tri tự ứng nghiệm. Chuyển đổi những suy nghĩ tiêu cực đó thành những câu nói: “ Tôi hoàn toàn đủ tốt với công việc này “ có thể củng cố tư duy tích cực. Điều quan trọng là tập trung vào những điều bạn có thể làm thay vì lo lắng về kết quả mà bạn mong muốn đạt được.</p><h2>3. Mạng xã hội có thể ảnh hưởng đến cuộc sống của bạn</h2><p>Bạn có so sánh cuộc sống của mình với bạn bè trên mạng xã hội ? Hay đã bao lần bạn nghĩ rằng cuộc sống trên mạng xã hội của bạn có vẻ tốt hơn cuộc sống ngày thường ? Những bức tranh đẹp mà mọi người vẽ lên trên mạng xã hội không phải lúc nào cũng hào nhoáng như vẻ bề ngoài của chúng. Nếu bạn thường xuyên so sánh bản thân với người khác và chỉ đưa ra những gì bạn muốn thế giới này thấy, thì bạn có thể nhận thấy rằng điều này ảnh hưởng đến sự tự tin của bạn trong thế giới thực. Một khi bạn bắt đầu hiểu rằng cuộc sống hàng ngày không diễn ra như những gì phô trương trên mạng xã hội thì suy nghĩ của bạn càng trở lên có căn cứ hơn.</p><p>Khi bạn giảm bớt trách nhiệm cho những gì bạn sẽ làm thì điều đó đánh mạnh vào sự tự tin của bạn. Nếu mỗi lần bạn phát biểu trong bối cảnh cá nhân hoặc chuyên nghiệp, bạn nói rằng  mình không xuất sắc đến thế, thì bạn đang hạ thấp giá trị của bản thân.&nbsp;</p><h2>5. Trò chơi đổ lỗi là môn thể thao yêu thích của bạn.</h2><p>Khi bạn đang ở trong một tình huống mà bạn không hài lòng, chẳng hạn như công việc mà bạn ghét, bạn có xu huống tìm lời bào chữa và đổ lỗi cho người khác hoặc mọi thứ khác về những gì đang xảy ra không? điều đó sẽ phá hủy lòng tự tôn và bạn sẽ cảm thấy ít tự tin hơn về khả năng tự giải quyết tình huống. ý tưởng đổ lỗi này hoạt động như một cơ chế phòng vệ. Vì vậy, thay vì hay đổ lỗi, hãy nắm quyền sở hữu tình huống của bạn sẽ giúp bạn tự tin hơn.</p><h2>6. Bạn đặt tiêu chuẩn thấp cho bản thân.</h2><p>khi bạn phủ nhận: “ Tôi không giỏi làm việc này, vì vậy đừng có bất kỳ kỳ vọng nào “. Nó ngay lập tức khiến người khác đặt câu hỏi về khả năng của bạn. Lời nói này sẽ trấn an rằng người khác sẽ không đặt kì vọng cao về bạn và sẽ không thất vọng. Nhưng bằng cách đặt bản thân ở mức độ thấp, sự tự tin cũng như giá trị của bạn sẽ giảm bớt đi. Vì vậy, khi bạn đặt niềm tin vào giá trị bản thân, nó cũng sẽ truyền niềm tin không chỉ cho bạn mà còn người khác</p><h2>7. Nghĩ rằng bạn không có gì để nói và đóng góp cho cuộc thảo luận</h2><p>- Tại sao bạn không có xu hướng tham gia các cuộc trò chuyện tại nơi làm việc và các sự kiện xã hội? Có phải vì bạn không tin mình có điều gì có ý nghĩa để đóng góp ?</p><p>- Bạn : \" Có thể là vậy \"</p><p>- Chà, điều này đang hủy hoại sự tự tin của bạn, bạn có thể cảm thấy như mọi người sẽ chán những gì bạn nói hoặc họ sẽ nghĩ bạn không đủ thông minh.</p><p>- Bạn : \" ừ, nếu không họ sẽ chế nhạo mình \"</p><p>- Đó có thể chỉ là câu chuyện mà bạn tự kể lại cho chính bản thân và bạn dần tin rằng điều đó là đúng</p><p> Có thể chủ đề của cuộc trò chuyện không phải là điều mà bạn đặc biệt quan tâm hoặc biết nhiều. Nhưng bạn không nên để nó làm mất sự tự tin của mình.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700210521/qxanxd9alf8ti4dzjg10.png\" alt=\"Sự tự tin\" /><h2>8. Bạn gạt bỏ những lời khen ngợi.</h2><p>Chúng ta thường nhận được những lời khen nhưng đôi khi  né tránh việc chấp nhận những lời khen đó vì chúng ta xấu hổ hoặc không tin vào nhận xét đó. Bằng cách né tránh, chúng ta không chỉ hạ thấp bản thân mà còn thách thức sự phán xét của người đang khen ngợi chúng ta. Chấp nhận lời khen một cách nhã nhặn không khiến bạn trở nên tự cao tự đại hơn. Chúng ta có thể chấp nhận lời khen một cách ân cần và chấp nhận chúng khi phát triển sự tự tin bên trong.</p><h2>9. Ngẫm nghĩ quá nhiều.</h2><p>Bạn có bao giờ thấy mình liên tục xem lại những điều mà bạn đã làm không đúng hoặc những tình huống bạn không thích ? Một ví dụ về điều này là bạn liên tục nghĩ về điều gì đó bạn đã nói trong buổi thuyết trình với đồng nghiệp. Hoặc tin đồn đang đưa suy nghĩ đến một chiều hướng khác hoàn toàn. Mặc dù suy nghĩ được coi là cần thiết để giải quyết vấn đề, nhưng việc suy ngẫm lại tập trung vào vấn đề chứ không phải tìm ra giải pháp. Trong bài viết của mình cho Forbes, Jamie Kaluga đã viết rằng :  </p><p>“ Khi bạn ngẫm nghĩ về những quyết định tồi tệ của mình hoặc những thất bại liên tục, ngay cả những người tự tin nhất đôi khi cũng có thể gặp khó khăn và điều đó hoàn toàn bình thường “</p><p>Bạn là những cá nhân độc đáo với những kỹ năng khác nhau. Vì vậy, hãy sử dụng chúng để có lợi cho bạn. Sử dụng những lời khẳng định tích cực mỗi ngày nếu có thể nhắc nhở bạn về những điểm mạnh của mình và những điều bạn muốn phát triển. Có bất kỳ điều nào trong số này mô tả trải nghiệm của bạn không ? Hoặc bất kỳ điểm nào trong số này mô tả về bạn không ?</p>', 96, 'Sự tự tin, một số người sinh ra đã có đức tính tự tin thiên bẩm. Trong khi những người khác phải mất một thời gian để phát triển sự...', NULL, 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 2, 1, 0, '2023-12-12 15:42:54.000000', 0);
INSERT INTO `blog` VALUES (203, 'Một đêm trăng buồn', '<p>Con phải biết tiết kiệm chứ , học ở nhà thì sao mà phải ra quán ? Tôi có chút buồn , loại buồn này như cứa nhẹ vào tim nhưng dai dẳng , không phải loại bộc phát khiến con người mất đi lý tính . Chẳng đáp lời mẹ , tôi khựng lại vài giây rồi tiếp tục dắt xe khỏi cổng . Kinh tế gia đình tôi không dư dả lắm , nhưng vẫn đủ gồng gánh cho tôi học cao đẳng với mức học phí tầm trung . Được chu cấp X00k một tuần , đủ tiền xăng và đen đá cho tôi hằng ngày . Cũng có vài người hỏi : \" mày  dở hay sao mà suốt ngày đi uống cà phê một mình ? \" . Câu trả lời quá dài và phức tạp với một cuộc xã giao thông thường , tôi thường ưu tiên nở một nụ cười thân thiện thay cho câu trả lời . Tuy khuôn mặt của tôi thì không được như vậy . Tôi phải ra quán , vì căn phòng của tôi ngập ngụa những sự trì trệ và tật xấu cũ kĩ rồi .</p><p>Đen đá không đường , ngồi châm điếu thuốc chill chill cả sáng . Mấy anh bạn báo đời sẽ thần tượng tôi mất . Tôi dần hình thành thói quen đó khi mang căn bệnh trầm cảm trong mình . Tôi từng cố cảm nhận vị đắng của cà phê , tiếc là vị chua rõ hơn nhiều . Ai đời lại pha đen đá không đường bằng thứ Arabica chua lòe chua loét ấy chứ , bố bọn dở . Tôi từng nghĩ thế , nhưng vẫn uống đều đặn . Khói thuốc cũng vậy , mùi chẳng thơm tẹo nào . Lần đầu hút là dưới ánh trăng một đêm đông rét , cái thứ khói thuốc hôi mù ấy lại có thể làm não tôi lâng lâng đến mất cả thị giác trong một khoảnh khắc . Và hút nhiều thì nó cũng quen , tôi không thấy hôi nữa . Khác với điều người đọc đang tưởng tượng , tôi không nghiện đến thế . Tôi nghĩ vậy , một tháng một bao , vào nhưng đêm trăng sáng và ngày quan trọng . Tôi nghĩ thế giới có hai loại người , người nghiện nhưng không biết mình nghiện , người không nghiện nhưng nghĩ mình nghiện . Loại nào rồi cũng vàng phổi rồi sống trong đau đớn thôi . Tôi thuộc loại người thứ ba , loại sử dụng thuốc , tôi gọi như vậy . Dạ dày tôi co quắn lại khi gặp những kích thích mạnh , tôi từng có câu : \" Tôi yêu em đến mức đau cả bụng . \" . Vậy là một điếu thuốc khi có cuộc thi quan trọng và khi uống thứ nước làm người ta bồn chồn kia là điều cần thiết . Và sự bay bổng của khói thuốc lại hợp với hồn thơ của tôi đến lạ , nhất là vào đêm trăng sáng . Tôi từng ghét mấy ông rapper hút cần để sáng tác , giờ thì khác , tôi vẫn ghét , nhưng khác là tôi hiểu . Hàng chục bài thơ được sáng tác , tiếc là nó với vị cà phê của quán kia chẳng khác nhau mấy , đều dở tệ . </p><p>Gần đây tôi chấp nhận cả vị ngọt . Tôi không hay viết , mỗi lần viết đều xóa đi vì không thẩm nổi cái chất thải đấy . Chỉ có danh từ chất thải mới hợp với cái thứ đó , vì chẳng ai thải ra mà có thể nhét lại vào cả . Nhưng có lẽ thời đại này thì khác , công nghệ tái chế nhiều mà , tôi tự an ủi như vậy . Dạo này tôi có lý tưởng mới , thực ra cũng chẳng mới lắm đâu , chỉ là nó được thắp sáng trở lại . Nhìn từng người ngã xuống ở Gaza , tôi muốn thế giới hòa bình . Nhìn quan hệ Việt - Mỹ nâng cấp , tôi muốn đất nước phát triển . Nhìn mẹ tôi ngày càng già , tôi muốn mẹ được nghỉ ngơi . Thực ra tôi chẳng tốt đến thế , một người chỉ mang những lý tưởng cao đẹp như vậy sao có thể là một loser ? Song song với lý tưởng đó là những chất liệu dơ bẩn nhất của thế giới này , thật khó để chấp nhận điều đó . Từ lúc cái lý tưởng cao đẹp đấy được thắp sáng một lần nữa , tôi quyết định thay đổi bản thân sao cho phù hợp với nó . Thay đổi không phải là một điều dễ dàng . Tôi phải gỡ rối và cắt bỏ những thứ không hợp với lý tưởng ấy . Đêm trăng sáng , chậu hoa giấy nở rộ , một chút se lạnh và cốc cà phê . Tất cả đều như muốn tìm vào nơi sâu thẳm trong tâm hồn tôi . Và chúng đã vào được . </p><p>Đây là ngày thứ 3 tôi thức dậy vào lúc nửa đêm và uống thứ caffein ngọt rồi tiếp tục tìm đến cái thứ caffein vừa ngọt vừa đắng vào đúng 8h , hoặc muộn hơn vì nhân viên quán ngủ quên . Như đã nói , chẳng còn vị chua , tôi đã chấp nhận cái vị ngọt ấy . Game , mấy thứ hài và tin nhảm trên mạng xã hội giờ đã chẳng níu được chân tôi . Đam mê của tôi bây giờ là tri thức . Tôi nhận ra mình vẫn tiêu tốn thời gian vô thức để vào Facebook hay Instagram dù chẳng còn hứng thú gì . À , thì ra là để stalk một cô bé tôi từng thích . Chưa yêu . Yêu ở đây là cảm xúc , không phải là hành động làm người yêu của nhau . Tôi chưa có cảm xúc yêu với em . Nhìn vào đoạn chat , chẳng biết từ bao giờ đã là sự thờ ơ của em khi tâm trạng của tôi ở quãng buồn nhất và những lời nhờ vả . Tôi từng là simp chúa . Simp chúa thì không ngần ngại hứa hẹn điều gì với con gái nhà người ta cả . Tôi hứa sẽ ở bên lúc em cần , mãi mãi . Tôi nhận ra mãi mãi cũng chỉ là hai ba tháng , mãi mãi của tôi may mắn dài được ba năm . Tôi giữ lời hứa được 3 năm cho đến khi tôi nhìn đoạn chat như đã nói . Tôi cảm giác bị lợi dụng . Simp thì đâu có sợ bị lợi dụng ? Tiếc là nó diễn ra cùng sự thờ ơ của em trong những lúc tôi buồn nhất . Tôi chẳng có bạn , em luôn là sự lựa chọn khi tôi cần xoa dịu , cạnh với ánh trăng . Tôi vượt qua được quãng buồn , nhận ra rằng em giờ như tôi ở quãng buồn ấy , nhưng tôi đã chẳng thể khiến em mở lòng một lần nữa . Tôi rất thích đoán dù chỉ với cơ sở là vài chi tiết nhỏ , tôi đoán em gặp một biến cố lớn với vết thương vẫn đang rỉ máu chưa lành . Buồn là nó đã đúng , kết quả được sáng tỏ với vài phép thử trong khi trò chuyện . Tôi quyết định cắt đứt liên lạc để giữ hình ảnh đẹp của em trong mình .Tôi nghĩ về thứ em cần ở hiện tại . Lời hứa lần cuối được thực hiện , viết một tâm thư bày tỏ lòng mình , với hy vọng em sẽ mở lòng một lần nữa , tìm lại vẻ đẹp mà em vốn có . Không kỳ vọng lời hồi đáp , nhưng em đã trả lời . Đúng như tôi đoán , em bị vấy bẩn bởi những dục vọng của một tên đồi bại nào đó . Em sợ bố em biết chuyện , sợ người ta phát tán cái thứ em không dám đối diện . Em chọn rời bỏ nơi đó để về với vòng tay của mẹ . Em nói rằng em vấp phải sai lầm , và đó là quá khứ tồi tệ , dơ bẩn mà em chẳng muốn ai biết . Em chọn trốn chạy . Em không chấp nhận nổi chính mình . Em quá sợ hãi để đối diện với lỗi lầm của em , vì vậy em vô tình gán mọi tội lỗi lên người chính mình . Nhưng em có tội gì cơ chứ , nếu em có tội , thì đó là tội không bảo vệ được bản thân , là tin tưởng sai người . Vết thương là quá lớn để em có thể mở lòng mà tin tưởng một ai nữa . Tôi ngu ngốc muốn giúp nhưng lại làm tổn thương em . Những lời tâm sự đó hẳn là khó để nói ra lắm , tôi nhận ra mình không viết tệ đến thế , ít nhất là em đã mở lòng một chút . Tôi nhận ra chính tôi của quá khứ trong em của hiện tại , sợ hãi , trốn tránh . Nó thật chẳng dễ chịu chút nào , chẳng nhớ tại sao tôi lại có thể đối diện và chấp nhận bản thân để có cái hiện tại này nữa . Tôi muốn tìm lại nụ cười của em . Tôi nhận ra mình quá thiếu hiểu biết . Liệu em có cần chấp nhận bản thân hay quên đi quá khứ của nó ? Liệu bước đi nào có thể giúp em vượt qua ? Quá khó để tôi có thể trả lời cho câu hỏi đó sau lời tâm sự của em đêm qua . Tôi quyết định không xóa nữa , những dòng này tôi sẽ viết vì em . Vì biết đâu có một quý nhân nào đó trên đây sẽ giúp em như cuộc đời chó rách của tôi đã từng được cứu rỗi .</p><p>Tôi có chút buồn , có chút giận xã hội này . Xã hội đầy phán xét khiến cho con người ta mất tự tin để làm chính mình , mất tự tin để thay đổi. Xã hội này phán xét nhiều đến mức nạn nhân cũng sợ phải ra ánh sáng , không ít trường hợp như vậy . Em cũng vậy . Tôi khi xưa cũng là kẻ phán xét , cũng là kẻ trốn chạy ánh sáng . Tôi giận mình . Bây giờ thì tôi không trao quyền phán xét cho bất kỳ ai , kể cả tôi . Tiếc là em chẳng biết điều ấy . Trong thư tôi gửi em chứa cả những tội lỗi của tôi , tôi không ngần ngại thừa nhận điều đó . Em không phán xét tôi , tôi cũng không còn sợ bị phán xét . Vậy tại sao em còn sợ tôi phán xét như người đời ? Chắc hẳn tôi tồi tệ lắm . Và bước đi nào có thể giúp tôi chuộc được lỗi lầm đây ? Giá như em là người Mỹ thì đã khác , hoặc người Nga .... tôi cũng chẳng biết nữa . Giá như em biết về khắc kỷ , về Phật Giáo , về thứ tâm lý học và hàng tá thứ khác . Giá như .</p><p>Tôi vô tình thấy thơ mẹ em đăng , không khó để đoán rằng em đã tâm sự gì đó với mẹ . Em không biết tìm những mối quan hệ chất lượng , tôi từng khuyên em , nhưng vẫn là do sự kém cỏi , tôi chẳng thể dạy em được . Em là biểu tượng của dục vọng trong tôi , có lẽ vì thế mà tôi đã không yêu em . Tôi từng có được từ em những tấm ảnh mà bây giờ em không dám chấp nhận . Em không hư hỏng , chỉ là em chẳng có hành trang là sự sắc sảo và tri thức để thoát khỏi nanh sắc của những con cáo như tôi . Từng đó là đủ dữ liệu để tôi đoán rằng em bị lợi dụng , thế giới này không thiếu những con cáo như tôi . Phép thử là lời nói dối rằng tôi với mẹ em đã tâm sự , mẹ em còn chẳng biết về sự tồn tại của tôi . Sự ngu ngốc ấy đã cứa thêm một lần lên vết thương còn chưa lành của em . Tôi là con quỷ dâm dục , một thứ dơ bẩn . Tôi từng thỏa mãn dục vọng của mình bằng những clip trên telegram , từng moi móc những tấm ảnh của em rồi khuyên em xóa nó đi . Một phần lo cho em thật , một phần tạo một lớp mặt nạ cho con cáo , tôi biết cách đi săn . Vô tình con cáo đến sau lại nhặt được cái mặt nạ đó , tôi bây giờ đầy hối hận và tội lỗi . Lúc lương tâm đạo đức của tôi chọn từ bỏ thứ dục vọng đó , tôi hiểu rằng mình đang tạo nghiệp . Tôi biết rằng nếu nó cứ tồn tại , những người con gái tôi yêu thương có thể cũng dính vào nó . Với tôi luật nhân quả vừa vặn với mọi lý thuyết , từ cung cầu của thị trường trong kinh tế , từ sự hình thành tính cách qua những hoàn cảnh trong tâm lý , ngay cả trong những phép toán . Nghiệp quả đã chín , tôi phải nhận . Đó thực sự là nghiệp của tôi , dù gì tôi cũng từng thích , và dĩ nhiên là tôi thương em . Tôi ghê tởm chính bản thân , nhưng phải chấp nhận nó , dù sao nó cũng là một phần của tôi , nếu không có sự ghê tởm đó , có lẽ tôi đã không khao khát đạo đức như hiện tại . </p><p>Nếu thằng nhãi kia đạt 10 điểm trong môn làm súc vật thì tôi cũng được 9 . Tôi lại nhớ về câu chuyện của tên cướp biển . Hắn sinh ra trên một đảo hoang nơi bọn cướp biển lẩn trốn . Giết chóc , cướp của , thỏa mãn tình dục . Xã hội trên đảo dùng đó làm thước đo cho mọi thứ . Chuẩn mực của một con người trong hắn là bạo tàn , giết chóc và thỏa mãn . Nếu không nhớ lầm thì Freud gọi đó là cái siêu tôi . Vốn dĩ định mệnh không cho hắn cơ hội để được đẹp đẽ như các vĩ nhân kia , tiếc là như vậy . Vì vậy thật khó để đánh giá được hắn qua cái góc nhìn của xã hội khác , vì thật không công bằng , hắn sinh ra để làm cướp biển cơ mà . Nhớ lại câu chuyện đó , tôi lại không dám phán xét cái tên súc vật kia , tôi không có quyền , vì với góc độ nào đó , tôi cũng là một tên súc vật . Hoặc có thể tôi có quyền phán xét , vì tôi cũng từng phán xét chính mình kia mà . Tôi ước mình như Chúa như Phật , với sự toàn đức của mình ( theo lý thuyết ) , tôi có thể phán xét bất cứ kẻ nào . Nhưng theo trí nhớ của tôi , hai đấng toàn đức chưa phán xét bất kì ai , vậy là tôi đã sai . Tôi thích góc nhìn của người Mỹ , họ có quyền làm bất cứ thứ gì , chúa cho họ sự tự do , sự toàn quyền . Nhưng họ chẳng phải đấng toàn đức , tiếc là như vậy . Có lẽ vì chẳng ai có quyền phán xét , nên người ta mới phải tạo ra cái nhà nước , cái luật pháp . Vì như người Mỹ nói , bất cứ ai cũng có toàn quyền , kể cả tên cướp biển kia . Nhưng tự do của sói đồng nghĩa với cái chết của cừu , cảm ơn pháp luật .</p><p>Với một thằng nhóc 18 tuổi như tôi , đang loay hoay với lập trình và những dãy nhị phân , sẽ thật khó để tưởng tượng nổi việc thế giới chỉ có một cực . Cũng đúng thôi , gọi Lão Tử dậy cũng có khi chẳng tượng tượng nổi . Có thể là do cái thuyết âm dương và những dạy nhị phân đã ăn sâu vào tôi , cũng có thể là do sự giới hạn của não bộ con người và tiềm năng của tôi . Như tôi và em waifu 2d của tôi vậy , thật khó để gặp được nhau . Thế giới một cực , chẳng có đúng hay sai , chẳng có sai trong cái đúng , chẳng có đúng trong cái sai , chẳng có đúng sai lập lờ hòa quyện với nhau . Có nát óc tôi cũng chẳng tưởng tượng nổi . Liệu phải chăng cái thế giới ấy như sự giải thoát về cõi an lạc vĩnh hằng hay thiên đường mà Chúa và Phật đã hứa hẹn ? Nếu \" toàn \" - \" perfection \" là đúng , là khả thi trong hiện thức chứ không trốn mãi trong thứ lý thuyết nhàm chán thì liệu một thế giới khác có mở ra như hai đấng nói ? Và liệu đó có là một thế giới an lạc vĩnh hằng tươi đẹp hay sẽ chỉ là sự hư vô như Lão Tử nói ? Hay liệu cõi hư vô vĩnh hằng đó chính là thứ tươi đẹp , an lạc . Chắc đoạn này dừng được rồi , mọi người đừng chạy , tôi vẫn còn vài dòng suy tư .</p><p>Tôi đã là từng là thằng nhóc lập dị nghĩ về những thứ đó . Dĩ nhiên là không phải tự nhiên rồi . Khác với những vĩ nhân tự cô lập chính mình thì tôi lại tách ra bởi vì bị kì thị . Lớp 8 , chỉ mới lớp 8 , trường lớp , bạn bè , thầy cô , gia đình đối với tôi đều được dán mác nỗi đau . Cũng chẳng ngoa nếu nói cả thế giới của tôi khi ấy là nỗi đau , sự đáng sợ và còn nhiều thứ khác . Chẳng có bóc phốt ai ở đây đâu , chỉ là đen đủi , có lẽ là sự sắp đặt của định mệnh , tôi sẽ không đổ lỗi cho ai về nỗi đau đó , ngay cả chính tôi . Nếu bàn về cái định mệnh ấy ở đây thì chắc ai đọc cũng chạy hết , mà cũng chẳng cần bàn , có quá nhiều lời bàn về nó rồi . Gia đình yêu thương tôi , tiếc là tôi chẳng thể cảm nhận , vì họ đã là biểu tượng của nỗi đau trong tôi rồi . Vì vậy tôi thiếu thốn tình thương . Một miếng khi đói bằng một gói khi no nhỉ , tôi dễ dàng thích , yêu thương bất kì cô gái nào đối xử tốt với tôi dù chỉ một chút . Tôi ghét phải thừa nhận điều đó , hàng năm trời đi tìm một người yêu mình , tôi đã lạc lối . Chẳng phải ai cũng có tâm hồn đồng điệu với tôi . Tôi mắc nhiều sai lầm . Định mệnh của em là gặp kẻ đó . Nếu nó không sắp đặt như vậy thì có lẽ sự thiếu xót cho việc bảo vệ bản thân và sự tồi tệ của hắn đã không khiến em đau như hiện tại . Tôi ghét định mệnh . Nhưng chẳng trách nó được . Có lẽ tôi chẳng khuyên được em điều gì , đơn giản vì chính tôi cũng đang học . Cũng có thể được . Một nhà giáo dục đã từng nói \" Chẳng giáo viên nào có thể dạy khi chính họ đã từ bỏ việc học .\" . Hoặc đại loại thế , xin lỗi ngài nào đó nhiều . Tôi cũng muốn dạy em yêu thương bản thân mình .</p><p>Buồn cho em , nhưng biết đâu nhờ việc này em lại nhận ra được nhiều giá trị của cuộc sống như tôi đã từng . Tôi giờ chẳng còn hút thuốc nữa dù vẫn còn bơi trong đống caffein . Mỗi sáng tôi đều nhìn vào gương cười rồi thốt lên : Ôi ! Thằng này xấu vcl . Mỗi lần tính xấu hay sự tồi tệ của tôi bộc phát thì tôi lại cố gắng mà nén nó vào , chẳng sao cả . Tôi không thể kiểm soát được sự xấu xa của mình , nhưng tôi có thể kiểm soát được hành động của mình . Ít nhất là tôi nghĩ thế . Tôi cũng chẳng còn cố mà chộp giật những cảm xúc khác mà quên đi nỗi buồn . Tôi yêu nỗi buồn mất rồi . Tôi viết vẫn dở như trước , cũng muốn sửa lại nhưng  không thể thẩm nổi văn của chính mình rồi . Dù sao cũng chỉ là vài dòng suy nghĩ lộn xộn được viết ra . </p><p>Nhìn theo góc độ chính trị ,nếu giờ cứu em thì có khi cả tôi cũng sẽ chết chìm mất . Lão tác giả cuốn 48 nguyên tắc quyền lực gì đấy chắc sẽ đội mồ sống dậy mà cười tôi thôi . Nhưng đây là tội lỗi tôi phải trả giá . Thật buồn cười khi muốn cứu thế giới mà còn chẳng cứu được người mình thương .</p><p>Tôi ghét cái cách mà tôi luôn rung động khi thấy giây phút yếu đuối của phái nữ . Lần đầu tiên tôi yêu cũng vậy . Tình đầu thì chắc chắn luôn kết thúc với nỗi buồn rồi . Chắc vì vậy mà tôi ghét nó . Liệu giờ đây khi chẳng còn con quỷ dục vọng , có tình yêu nào chớm nở trong tôi không ? </p><p>Phải chăng giờ em cần những lời sẻ chia đồng cảm ? Để biết ngoài mẹ em ra còn nhiều người sẵn sàng chấp nhận em . Có lẽ vậy , có lẽ em cần tiếp thêm tự tin để có thể tự chấp nhận chính mình . Nhưng tôi lấy đâu ra thứ đó ? Việc đó còn tùy thuộc vào sự cảm thông của độc giả .</p>', 96, 'Hai con cáo và cô bé thơ dại . Liều thuốc nào cho cô bé , lối thoát nào cho lầm lỗi của cáo trẻ.', NULL, 'https://images.pexels.com/photos/2981629/pexels-photo-2981629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 2, 1, 4, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (204, 'Dấu hiệu cho thấy bạn là một Sapiosexual', '<img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700210954/rj5kpnecg6u37ax1gtc9.png\" alt=\"&nbsp; \" Bạn có phải là 1 Sapiosexual \"\" /><p><b><i>Sapiosexual</i></b>&nbsp;là một thuật ngữ được sử dụng để chỉ người bị hấp dẫn, lôi cuốn tình dục bởi những người có trí thông minh cao. Trí thông minh ở đây không hẳn là thông minh về tri thức (IQ) mà có thể thiên về cảm xúc, thông minh trong cách ứng xử với người khác (EQ). Tức là, nếu trong một đám đông, dù bạn không phải là người có ngoại hình nổi bật nhất nhưng nếu bạn là người thông minh nhất, bạn có thể dễ dàng được một&nbsp;Sapiosexual&nbsp;để mắt đến. Một người Sapiosexual luôn đề cao và coi trọng vẻ đẹp tâm hồn hơn là bề ngoài. Thay vì sắc đẹp, họ đặt những tiêu chuẩn của trí thông minh làm nền tảng trong những mối quan hệ yêu đương. Chính vì thế, nửa kia của họ sẽ là những người thông minh, tinh tế và vô cùng nhạy bén. Khác với đồng tính luyến ái hoặc dị tính luyến ái, Sapiosexual không được giới khoa học xem như một xu hướng tình dục. Sapiosexual hiện từ đầu thế kỷ 21 và được nhiều người nghiên cứu. Cái tên này&nbsp;có nguồn gốc từ tiếng Latinh. Trong đó từ&nbsp;<b>sapio</b>&nbsp;bắt nguồn từ động từ tiếng Latinh&nbsp;<b>sapere</b>, có nghĩa là trí thông minh hoặc hiểu biết. Năm 1998,&nbsp;Sapiosexual&nbsp;lần đầu tiên được sử dụng lên trang&nbsp;mạng xã hội&nbsp;LiveJournal bởi một người dùng tên là &lt;wolfieboy. Việc Sapiosexual ngày càng phổ biến cũng chứng minh được cuộc sống ngày nay đang có những bước phát triển vượt bậc. Mọi thứ xung quanh con người dường như đã đạt tới mức phát triển hoàn hảo và con người dần trở nên nhàm chán với những tiêu chuẩn lối mòn về vẻ đẹp, thay vào đó con người đang muốn hướng đến tiêu chuẩn mới xứng đáng hơn chính là trí tuệ, sự thông minh và bản lĩnh.\nĐể nhận biết bạn hay đối phương là một Sapiosexual, hãy chú ý đến những điều dưới đây:&nbsp;&nbsp;</p><blockquote><b>Sapiosexual là những người thông minh:</b></blockquote> - <p>Đây có lẽ là yếu tố quan trọng nhất của một Sapiosexual. Chỉ những người thông minh họ mới có khả năng phân tích người khác một cách thấu đáo. Bên cạnh đó, những người thông minh mới có thể nhận biết được những kiến thức mà người khác đang chia sẻ với họ.</p><blockquote><b>Sapiosexual là người thích đọc sách:</b></blockquote> - <p><b>Sapiosexual là người thích đọc sách:</b>Một người đọc sách chưa chắc có trí tuệ siêu phàm và tâm hồn đẹp nhưng chắc chắn họ sẽ có một kiến thức nhất định. Điều này sẽ giúp cho cuộc nói chuyện giữa 2 người trở nên thú vị, hấp dẫn. Những người đọc sách cũng đồng thời có sự ham muốn học hỏi, tìm tòi những cái mới, khiến họ dễ dàng tạo ra sự thú vị trong tâm hồn.&nbsp;&nbsp;</p><blockquote><b>Sapiosexual luôn có khả năng lắng nghe:&nbsp;</b></blockquote> - <p>Sapiosexual họ đều là những người ham học hỏi. Vì vậy, không lạ gì khi Sapiosexual luôn có khả năng lắng nghe người khác, cho dù đó là những điều họ không biết.</p><blockquote><b>Sapiosexual không thích nói chuyện phiếm:&nbsp;</b></blockquote> - <p>Đa phần sapiosexual đều không ưa nói chuyện phiếm, điều này không có nghĩa là họ không giỏi nói chuyện hay là kiểu người kiệm lời. Đơn giản là họ không thích gượng ép bản thân phải đối đáp những câu chuyện mà bản thân họ cho là nhạt nhẽo, tất nhiên họ sẽ lịch sự lắng nghe để xem như là một sự tôn trọng dành cho người đối diện. Ngược lại, nếu như chủ đề cuộc hội thoại khiến họ hứng thú, họ sẽ nhiệt tình và vui vẻ tiếp chuyện giao tiếp một cách hết sức tự nhiên.</p><blockquote><b>Sapiosexual không&nbsp;hẹn hò&nbsp;một cách tùy tiện:&nbsp;</b></blockquote> - <p>Một điều thú vị của những Sapiosexual là danh sách người yêu của họ ít hơn so với người thường. Điều này được lý giải vì Sapiosexual có xu hướng hứng thú với những người thông minh chứ không hẹn hò một cách tùy tiện. Nhưng trái lại, một người có danh sách người yêu cũ không quá nhiều thì chưa thể khẳng định được người đó là một Sapiosexual.&nbsp;&nbsp;</p><h2>\"Sapiosexual\"&nbsp;còn gây ra nhiều tranh cãi trong xã hội</h2><p>Tuy rằng, khái niệm này được ra đời từ năm 1998 nhưng đến nay vẫn có nhiều người tự hỏi rằng, liệu \"sapiosexual\" có thực sự tồn tại? Liệu thực sự có những người cảm thấy trỗi dậy ham muốn tình dục chỉ vì người khác có trí thông minh siêu phàm? Điều đó thực ra lại hoàn toàn dễ hiểu. Chẳng ai lại muốn đi hẹn hò ở nhà hàng với người mà ngay cả việc đọc hiểu cũng như gọi món trong menu cũng không biết. Vì thế, chí ít đối tượng mà ta để ý đến cũng phải là người có một chút trí tuệ, hoặc có kiến thức vượt trội.</p><blockquote>&nbsp;\" Trí tuệ, thực chất, là một vẻ đẹp cực kỳ quyến rũ \"</blockquote> - <p>Đến đây, một câu hỏi nữa lại được đặt ra. Liệu tất cả chúng ta đều là \"sapiosexual\" sao? Vậy thì tại sao lại phải nghĩ ra thêm 1 khái niệm mới để làm gì? \"Sapiosexual\" có thực sự là một khuynh hướng tính dục không, hay chỉ đơn giản là một sở thích cá nhân mà thôi? Rất nhiều câu hỏi đã được nêu ra và chúng ta phải nhờ đến các nhà tâm lý học giải đáp. Các chuyên gia cho rằng, \"sapiosexual\" đích thị là một xu hướng tính dục. Dù rằng còn có thể có những ý kiến trái chiều khác nhau xung quanh vấn đề này nhưng tóm tắt lại thì việc tự nhận mình là \"sapiosexual\" cũng không có gì đáng phải bàn cãi cả.</p>', 96, NULL, NULL, 'https://www.instyle.com/thmb/xPpmMmxELYpe5ovf54772dEh9cM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/091021-sapiosexual-social-2000-a7259ed7cdcc46ffbb6b9b1c27b92cc2.jpg', 0.00, 2, 1, 4, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (205, 'Bắt nạn học đường: Cái nhìn của kẻ trong cuộc.', '<p>Một số lưu ý trước khi vào bài: Đây là bài viết đầu tiên của tôi trên spiderum, không thể tránh khỏi những sai lầm, thiếu sót, và những vụng về không thể tránh khỏi, tất nhiên tôi luôn hoan nghênh ủng hộ những phản hồi của độc giả, kể cả tích cực và tiêu cực, nhưng là chỉ để xây nhà thôi, còn có quan tâm hay không thì tôi không chắc.</p><p>Bắt nạt học đường một vấn đề không của riêng ai, vấn đề nổi cộm của xã hội thời buổi hiện đại, nó như một vi trùng một ung nhọt trong một vết thương hở đã nhiễm trùng từ lâu.  </p><p>Từ bao giờ mà nó xuất hiện? Ý tôi là, không phải lúc nó xuất hiện trong mắt công chúng, tôi đưa ra suy đoán, nó đã xuất hiện ngay từ thời buổi đầu tồn tại các hình thức trường học sơ khai, ở Trung Quốc là Trang viên, cư viện, các trường học cho con em nhà gia giáo của các bậc nho sĩ và các bậc Hiền Nhân mở lớp dạy người tài. Ở khu vực Địa Trung Hải vào những năm Trước Công Nguyên việc học được tổ chức và xuất hiện sớm ở đây, đây cũng là nơi tạo ra các bậc vĩ nhân lỗi lạc.  Và mọi thứ tồi tệ cũng bắt đầu từ đây, chính cạnh tranh, thi đua cũng là một  yếu tố dẫn đến bắt nạt học đường xảy ra.</p><p> -Vậy bắt nạt học đường là gì?</p><p> Tôi không nêu các định nghĩa, các trích dẫn của các chuyên gia, website hoặc những nguồn thông tin khác. Tôi sẽ tự dựa vào những gì bản thân trải nghiệm, cảm nhận rồi chuyên nghiệp hóa nó lên để nghe có vẻ học thức. Bắt nạt học đường là các hành vi có thể là của một cá nhân hay một tập thể sử dụng các động cơ, lí do có lý hoặc không để lấy các hình thức tấn công về thể xác hoặc tinh thần hoặc cả hai đối với một cá nhân hay tập thể khác gây ra những chấn thương về thể xác hoặc tinh thần hoặc cả hai. Các hình thức tấn công tinh thần: mắng chửi, xúc phạm danh dự, nhân phẩm,  người thân… của đối tượng bị bắt nạt. Tấn công về thể xác cái này thì rất nhiều tôi không kể hết được. </p><p>-Các lý do dẫn đến bắt nạt học đường là gì?</p><p>Giống như bên trên, có ti tỉ lí do dẫn đến việc bắt nạt học đường được diễn ra, nhưng tôi sẽ cố tóm tắt nó thành ba loại chính.</p><p>+ Lý do bắt nguồn từ kẻ bắt nạt.</p><p> Cái này rất rộng, rộng nhất trong cả ba, nó bắt nguồn từ mâu thuẫn với kẻ bị bắt nạt, có thể là những xích mích nhỏ trong học tập, rạn nứt các mối quan hệ, hoặc chỉ đơn giản là nhìn thấy ghét thì bắt nạn thôi, tôi nói thật đó, việc này thật sự có trường hợp từng xảy và còn là người bạn ngồi ngay cạnh tôi.</p><p>+ Lý do bắt nguồn từ kẻ bị bắt nạt.</p><p> Nghe có vẻ vô lý với một số người, nhưng tôi hiểu những bạn từng gặp trường hợp này đều có cảm nhận chung. (nguyên do chưa hẳn đã bắt nguồn từ một phía). Đôi khi chỉ là một cái nhìn vô ý , những hành động tưởng chừng như vô hại, nhưng khi tác động vào đúng thời điểm, đúng lúc, và vào đúng người, thêm một chút chất xúc tác là những suy nghĩ tiêu cực, thì anh ta, cô ta hoàn toàn có thể trở thành bị kẻ bắt nạt. Trong phần lý do này cũng có trường hợp cố ý, nhưng tôi không đưa vào, bởi vì khi đã tạo hiềm khích một cách cố ý, thì không còn gọi là kẻ bị bắt nạt mà chỉ là sự đáp trả giữa hai kẻ bắt nạt.</p><p>+ Lý do bắt nguồn từ bên thứ ba.</p><p> Tôi sẽ lấy ví dụ cho nhanh.</p><p>Đánh ghen, các bạn cũng biết không chỉ người lớn đánh ghen đâu, những tin nhắn, những cuộc gọi hoặc đôi khi là những lời nói thoáng qua của một cô bạn, anh bạn vui tính và cởi mở nào đó tiết lộ mối quan hệ mập mờ giữa bạn trai và một cô gái khác, các bạn đủ hiểu câu diễn ra phía sau như thế nào rồi đấy.</p><p>+ Cũng lại gặp những người bạn cởi mở, họ cũng có một phần trách nhiệm trong hình thành mối quan hệ mâu thuẫn giữa hai bên.</p><p>Các bạn có thể thấy được lý do để mâu thuẫn được hình thành là vô cùng nhiều các yếu tố không đếm hết. Vậy các bạn có muốn nghe trải nghiệm và cảm nhận của một kẻ trong cuộc không. Đây không phải là một câu hỏi mà là một lời giãi bày cho chính bản thân tôi. Và quá trình này không phải kéo dài ngày một ngày hai.</p><p>-Trải nghiệm và cảm nhận của kẻ trong cuộc.</p><p>Một năm trước, khi tôi còn học lớp 11, 17 tuổi, một thằng nhóc còn chưa hiểu sự đời, hay có hiểu nhưng theo một cách qua loa, tôi tự cho rằng mình đã hiểu tất cả, mọi sự việc trên đời, như một vĩ nhân đứng ngoài mà quan sát dòng chảy thế giới. Tôi nghĩ mình đã hiểu mọi thứ, khinh miệt những đứa học sinh bắt nạt và cả bị bắt nạt, khinh những thằng sử dụng vũ lực để giải quyết vấn đề, khinh luôn cả kẻ yếu đuối không dám đứng lên kêu gọi, phản kháng lại. Nhưng đó là sai lầm của một kẻ ngây thơ tự đại. Lên lớp 11 tôi đối diện với một môi trường hoàn toàn mới, những người bạn mới, thầy cô mới và chỉ đúng một người bạn trong số đó là tôi quen được vì khi đi thi được ghép chung chỗ bàn ngồi, môi trường đó hoàn hảo cho sự cô đơn phát triển và bén rễ trong lòng tôi. Mặc dù sau đó tôi vẫn làm quen được rất nhiều người bạn, nhưng phải thành thật với bản thân, người thật sự thân thì không có, người quen biết có thể chơi thì đếm trên đầu ngón tay, còn lại chỉ là quen biết hời hợt. Và đó là lúc một nhân tố đặc biệt như vì sao lấp lánh vút qua bầu trời đêm tĩnh lặng của lòng tôi. H, một anh bạn với khuôn mặt( trước khi tôi ghét) cực kỳ thân thiện, tôi có thể nói là vừa gặp đã thân, mặc dù sở thích không đồng nhất tính cách không đồng nhất nhưng tôi vẫn có thể chơi, và hợp cạ với H. Miêu tả như thế là không quá, bởi vì tôi đã chấp nhận đổi chỗ( nơi mà tôi đã xây dựng được mối quan hệ ở mức tạm thời) để lên chỗ bàn đầu nơi mà chịu áp lực lớn nhất với thầy giáo day môn chủ đạo (và thầy cũng là người nghiêm khắc nhất) chỉ để có thể ngồi chơi với người tôi cảm thấy hợp. Nhưng ngày vui thì chóng tàn, tôi biết được tính cách của H là hiền cục, tức là hiền ở một mức độ và nếu làm điều gì khiến người đó khó chịu và vượt qua mức độ chịu đựng đó, nó sẽ phát nổ như như một quả bom, tùy vào thời gian tích trữ và ức chế tâm lý người ấy phải chịu. Và tôi nghĩ lý do lớn nhất là từ bản thân tôi đã gây ra rạn nứt trong mối quan hệ của hai bên, bằng cách vượt qua mức độ chịu đựng của H. Nhưng đó chưa phải là kết thúc, tôi vẫn làm hòa với H, chơi lại bình thường với H như không có chuyện gì xảy ra. Tua đến đầu năm 2023, tôi và H vẫn nói chuyện nhưng có gì đó đã không như ngày trước nữa, cái này thì bắt nguồn từ ai, tôi không biết nữa, nhưng tôi biết được lý do chính dẫn đến sự tan vỡ của mỗi quan hệ bạn bè là xuất phát từ tính cách của tôi. Tôi là một kiểu phản nghịch dạng nhẹ, tức là ghét bị ra lệnh và điều khiển, nhưng trong đó tôi ghét cay ghét đắng nhất là bị người khác nhảy vào chặn họng mình khi mà tôi đang nói(thành thật đi, ai mà trả có trả có điểm nhạy cảm trong tâm lý của bản thân và chỉ một kích thích nhỏ cũng sẽ khiến bạn bùng nổ) nhưng tôi đã kìm nén được rất, rất lâu và nó y như lúc H bùng nổ, tôi cũng bùng nổ, nhưng khác với H tôi có thể kiểm soát nó bằng cách cố gắng hạ giọng mình xuống và chửi rủa như một kẻ tàn nhẫn đang cứa con dao cùn vào cổ kẻ đầy đọa mình đến tình cảnh đó. Tôi biết thừa rằng những lời nói đó khó nghe, thậm chí khốn nạn, nhưng tôi chỉ có thể hạ giọng chứ không thể dập ngọn lửa đang điên cuồng thiêu đốt mọi thứ bên trong tôi (tôi biết lý do tôi đưa ra cho hành động của mình là không đủ thuyết phục, nhưng nó liên quan đến danh dự và nhân phẩm cá nhân của người khác nên không thể nói rõ được). Và thế là mối quan hệ của chúng tôi chính thức vỡ vụn. Lúc đó thì nhìn mặt thôi tôi cũng đã thấy ghét, nghe tiếng thôi cũng thấy khó chịu, bất cứ ai gợi nhắc đến H đều làm tôi phát quạo trong lòng và đột ngột dừng cuộc nói chuyện. Lúc này thì nó rơi vào trường hợp tôi không đề cập rõ ràng lúc nãy, sự đáp trả của hai kẻ bắt nạt. Và chuỗi hành động sau đó của cả hai bên chỉ là hệ quả tất yếu của mối quan hệ tồi tệ này, chúng tôi đáp trả lẫn nhau bằng lời nói hoặc hành động thực tế với tổn thương thể xác không lớn nhưng lại gây ra chấn thương tinh thần cực mạnh. Mỗi ngày lên lớp đều như là lên chiến trường, tinh thần tôi căng cứng và bầu không khí nghẹt thở chẳng thể nào xua tan. Cuối cùng tôi lựa chọn giải pháp là rời đi, tôi tiếp tục chuyển lớp một lần nữa, nhưng những di chứng như hồn ma dai dẳng đeo bám tôi suốt kỳ nghỉ hè. Giờ đây tôi đã hiểu cảm giác của những kẻ mà tôi đã từng khinh miệt là đau khổ và kinh khủng đến chừng nào, mặc dù sang lớp mới tôi vẫn gặp những kẻ bắt nạt mình, đen đủi làm sao, có những kẻ tôn sùng bạo lực và tự cho mình cái quyền được làm tổn thương người khác như cái lẽ đương nhiên, lợi dụng những sức mạnh và tầm ảnh hưởng của bản thân để đàn áp kẻ yếu thế hơn mình, chúng nghĩ mình là bố mẹ thiên hạ và ngây thơ theo một cái kiểu giống tôi ngày trước nhưng có phần ngây thơ và vô tri hơn tôi ngày trước nhiều, tôi gọi chung đó là kiểu anh hùng rơm, và tôi cũng đã không phải thằng nhóc ngây thơ ngày xưa. Tôi vẫn có cách của mình để đáp trả lại sự thù địch của kẻ đó và với sức đề kháng đã tăng cường, sự cô đơn không còn là hình thức tra tấn mà trở thành người bạn của tôi. Trong trường hợp phải sử dụng đến biện pháp cuối cùng thì có lẽ mọi thứ đã đi ra khỏi tầm kiểm soát rồi.&nbsp;-Vậy có giải pháp nào cho vấn đề này không?Câu trả lời của tôi là có, sẽ có và không có với tùy từng đối tượng, trường hợp, mức độ và tính chất vấn đề bạn gặp phải. Nhưng để bài viết đỡ u ám, tôi sẽ đưa ra câu trả lời là có. Nhưng giải pháp này dành cho ba đối tượng.+ Nhà trường: Nhà trường có vai trò rất quan trọng trong việc bảo vệ học sinh khỏi hiện tượng bắt nạt học đường, bởi vì hầu hết các trường hợp mâu thuẫn xảy ra ở trong khuôn viên trường học, yêu cầu ở đây là: sự quan sát, kiểm soát và linh động chủ yếu đòi hỏi các thầy cô vừa có tâm vừa phải có tầm, luôn luôn dành sự quan tâm, để ý đến tình hình của học sinh trong lớp dù chỉ là thoáng qua, biết cách giải quyết, làm hòa thậm chí là xóa tan hiềm khích hai bên, tôi biết điều này là rất khó và tôi nghĩ là gần như không thể bởi vì nhiều yếu tố nhưng khẳng định rằng bắt nạt học đường không chỉ là xô xát về thể chất làm mọi người chú ý mà còn là bắt nạt mà chẳng ai có thể phát hiện được.+Gia đình: Giống hệt với nhà trường những phẩm chất trên là điều bắt buộc phải có của gia đình để phát hiện và ngăn chặn <b>Trước Khi Quá Muộn...</b> Có điều này làm lên sự khác biệt của gia đình và nhà trường đó là sự quan tâm. <b>LÀM ƠN!</b> Tôi biết điều này là đòi hỏi vô lý nhưng mà xin các vị phụ huynh các vị làm cha, làm mẹ hãy quan tâm, để ý, nói chuyện, lắng nghe và tìm cách thấu hiểu con cái của mình, đừng nói với tôi là các vị không phát hiện được thay đổi trong sắc thái hàng ngày của đứa trẻ tuổi có thể đếm bằng hàng chục. Bởi vì khi các vị không nhận ra sự thay đổi của con mình vậy có nghĩa là nó đã chết trong sự cô đơn và lạnh lẽo mà chẳng một ai có thể nhận ra.+Từ chính bản thân chúng ta: Tôi sẽ không nói nhiều ở đây bởi vì tôi tự hiểu được những nỗi đau giống nhau mà chúng ta cùng chịu đựng tôi chỉ có vài điều muốn nói: Hãy mở lời khi còn có thể đừng để bóng tối nuốt chửng cả ý chí và cảm xúc của bạn, nhìn thế giới với hai màu đen xám để rồi làm ra những quyết định ngu ngốc đó. Hãy tha thứ cho bản thân, cho người gây ra nỗi lầm đó, tôi nghĩ xã hội này có những thành phần khốn nạn nhưng tôi không nghĩ người đối diện bạn nằm trong số đó, hãy tha thứ nếu bạn có thể, để cho cuộc sống và tương lai tươi đẹp mai sau. Cuối cùng hãy sống cho bản thân mình hãy học cách yêu thương nó, biết ơn nó bởi vì vô số người ngoài kia không có tay, không có chân, không thể nhìn, và không thể nghe. Thiếu đi những thứ mà một con người hoàn chỉnh có, cơ thể biến dị, bệnh tật quấn thân, thậm chí là chỉ được ngắm nhìn cuộc sống trong vài năm ngắn ngủi, vậy mà họ vẫn cười, vẫn nhìn cuộc đời này với một ánh mắt trìu mến, vẫn yêu nó, vẫn đấu tranh không bỏ cuộc, vậy bạn lấy đâu ra lý do, để từ bỏ cuộc sống này?&nbsp;&nbsp;</p><p>Vậy có giải pháp nào cho vấn đề này không?</p><p>Câu trả lời của tôi là có, sẽ có và không có với tùy từng đối tượng, trường hợp, mức độ và tính chất vấn đề bạn gặp phải. Nhưng để bài viết đỡ u ám, tôi sẽ đưa ra câu trả lời là có. Nhưng giải pháp này dành cho ba đối tượng.</p><p>+ Nhà trường: Nhà trường có vai trò rất quan trọng trong việc bảo vệ học sinh khỏi hiện tượng bắt nạt học đường, bởi vì hầu hết các trường hợp mâu thuẫn xảy ra ở trong khuôn viên trường học, yêu cầu ở đây là: sự quan sát, kiểm soát và linh động chủ yếu đòi hỏi các thầy cô vừa có tâm vừa phải có tầm, luôn luôn dành sự quan tâm, để ý đến tình hình của học sinh trong lớp dù chỉ là thoáng qua, biết cách giải quyết, làm hòa thậm chí là xóa tan hiềm khích hai bên, tôi biết điều này là rất khó và tôi nghĩ là gần như không thể bởi vì nhiều yếu tố nhưng khẳng định rằng bắt nạt học đường không chỉ là xô xát về thể chất làm mọi người chú ý mà còn là bắt nạt mà chẳng ai có thể phát hiện được.</p><p>&nbsp; +Gia đình: Giống hệt với nhà trường những phẩm chất trên là điều bắt buộc phải có của gia đình để phát hiện và ngăn chặn <b>Trước Khi Quá Muộn...</b> Có điều này làm lên sự khác biệt của gia đình và nhà trường đó là sự quan tâm. <b>LÀM ƠN!</b> Tôi biết điều này là đòi hỏi vô lý nhưng mà xin các vị phụ huynh các vị làm cha, làm mẹ hãy quan tâm, để ý, nói chuyện, lắng nghe và tìm cách thấu hiểu con cái của mình, đừng nói với tôi là các vị không phát hiện được thay đổi trong sắc thái hàng ngày của đứa trẻ tuổi có thể đếm bằng hàng chục. Bởi vì khi các vị không nhận ra sự thay đổi của con mình vậy có nghĩa là nó đã chết trong sự cô đơn và lạnh lẽo mà chẳng một ai có thể nhận ra.&nbsp;&nbsp;</p><p>+Từ chính bản thân chúng ta: Tôi sẽ không nói nhiều ở đây bởi vì tôi tự hiểu được những nỗi đau giống nhau mà chúng ta cùng chịu đựng tôi chỉ có vài điều muốn nói:&nbsp;</p><p>Hãy mở lời khi còn có thể đừng để bóng tối nuốt chửng cả ý chí và cảm xúc của bạn, nhìn thế giới với hai màu đen xám để rồi làm ra những quyết định ngu ngốc đó. </p><p>Hãy tha thứ cho bản thân, cho người gây ra nỗi lầm đó, tôi nghĩ xã hội này có những thành phần khốn nạn nhưng tôi không nghĩ người đối diện bạn nằm trong số đó, hãy tha thứ nếu bạn có thể, để cho cuộc sống và tương lai tươi đẹp mai sau. </p><p>Cuối cùng hãy sống cho bản thân mình hãy học cách yêu thương nó, biết ơn nó bởi vì vô số người ngoài kia không có tay, không có chân, không thể nhìn, và không thể nghe. Thiếu đi những thứ mà một con người hoàn chỉnh có, cơ thể biến dị, bệnh tật quấn thân, thậm chí là chỉ được ngắm nhìn cuộc sống trong vài năm ngắn ngủi, vậy mà họ vẫn cười, vẫn nhìn cuộc đời này với một ánh mắt trìu mến, vẫn yêu nó, vẫn đấu tranh không bỏ cuộc, vậy bạn lấy đâu ra lý do, để từ bỏ cuộc sống này?</p><p>-------------------------------------------------------------------------------------------------------</p><p>Lưu ý cuối bài: Những giải pháp ở đây của tôi là nhằm vào đối tượng đã nhận những tổn thương tâm lý sâu sắc của bạo lực học đường, những kẻ vật vã trong vòng xoay luẩn quẩn của sống và chết. Những giải pháp chỉ mang tính chất chữa lành chứ không phải phòng tránh, tôi không có khả năng phi thường mà tìm ra được những biện pháp mà những nhà chức tránh hàng đầu còn phải vắt óc suy nghĩ mà vẫn chưa có lời giải rõ ràng. Thế nên nó có thể hữu ích lúc này hoặc là mai sau hoặc là không, tùy vào ý nghĩ của mỗi cá nhân.</p>', 96, 'Một số lưu ý trước khi vào bài: Đây là bài viết đầu tiên của tôi trên spiderum, không thể tránh khỏi những sai lầm, thiếu sót, và những...', NULL, 'https://images.pexels.com/photos/163431/fist-blow-power-wrestling-163431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 2, 1, 0, '2023-11-17 15:54:33.316000', 0);
INSERT INTO `blog` VALUES (206, 'Viết cho những điều đã cũ\n', '<p>Có một bức thư mình đọc đi đọc lại rất nhiều lần, mình không nghĩ mình đọc đến lần thứ n đến mức thuộc từng câu từng chữ trong đó nhưng lần nào đọc cảm xúc cũng như lần đầu.</p><p>Một người vụng về trong cách diễn đạt bằng câu từ, luôn khó khăn trong việc diễn tả được suy nghĩ trong đầu nhưng lại chịu đặt bút viết thư để gửi đến mình. Bức thư nguệch ngoặc vùng về đến đáng yêu, giấy được xé từ quyển sổ còng, chữ viết vừa xấu vừa khó đọc. Nhưng từng câu từng chữ đều xuất phát từ sự chân thành. Rất nhiều chữ yêu và thương xuất hiện. Đó là điều làm mình yêu bức thư này đến vậy. Vẫn biết những điều đã cũ nên cất vào một góc của quá khứ nhưng có đôi khi khi nhìn lại đó vẫn là những kỉ niệm đẹp. </p><p>Có vài người xuất hiện trong cuộc đời, dù ở lại hay rời đi, dù thời gian bên nhau ngắn hay dài đều trân quý. Và dĩ nhiên khi phải nói lời tạm biệt thì đó cũng là khoảnh khắc buồn, dù nỗi buồn thoáng qua hay một nỗi buồn kéo dài. Luôn nhắc nhở bản thân phải sống cho hiện tại nhưng có vài lúc thơ thẩn để mở ngăn kéo quá khứ, có những sự bồi hồi và xao động trong tâm trí. Và hôm nay là một ngày như thế, thời tiết tháng 10 dễ chịu với những cơn mưa và không khí se se lạnh. Bản thân ngồi góc quen nhâm nhi chút cacao nóng ấm, định bụng ngồi viết vài dòng trong cuốn nhật ký, vô tình từ cuốn nhật ký rơi ra bức thư đã cất từ lúc nào không biết. Vô thức nhặt là vô thức đọc những dòng viết ở đó. Nhiều cảm xúc ùa về cùng vài mảnh kỷ niệm với người đã chắp bút.&nbsp;</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700211389/qulcnfvywhoykuearrg8.png\" alt=\"Image\" /><p>Viết vài dòng diễn tả tâm trạng khi đối diện với những điều cũ khiến bản thân thực sự dễ chịu, nếu trước đây nó là một nỗi buồn mà con người ta luôn muốn trốn tránh và sợ sự đối mặt thì nay việc đối diện đã dễ dàng hơn nhiều. Những nổi buồn và nỗi đau đã dịu đi rất nhiều, nhường vào đó là sự chiêm nghiệm và sự tĩnh lặng đến kỳ lạ.&nbsp;</p><blockquote>Thời gian sẽ trả lời cho tất cả, cảm ơn và biết ơn những điều đã cũ&nbsp;</blockquote> - ', 96, NULL, NULL, 'https://images.pexels.com/photos/3826675/pexels-photo-3826675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 2, 1, NULL, '2023-11-17 15:56:48.180000', 0);
INSERT INTO `blog` VALUES (207, '[Phóng sự ảnh] Hãy cảm nhận cái đẹp trong cuộc sống hối hả thường nhật', '<p>Đã hết một ngày làm việc rồi, hãy cùng dành cho bản thân một khoảng lặng để cảm nhận cái đẹp của cuộc sống thường nhật ở một thành phố xa xôi nào đó qua bộ ảnh đen trắng này nhé!&nbsp;</p><p>Phóng sự ảnh của mục Americans at Work tuần này sẽ là những hình ảnh đen trắng về cuộc sống thường nhật trên đường tới công ty của dân công sở ở Boston, Chicago, và thành phố New York, do nhiếp ảnh gia Cassandra Zampini chụp: \"Thành phố này là studio của tôi và là tấm vải nền để tôi ghi lại cái nhìn trong tâm trí người Mỹ. Phần lớn các cảnh quan tôi chụp tập trung miêu tả ngày làm việc của chúng ta làm việc ngày nay. Tòa nhà chúng ta làm việc, các chuyến tàu chúng ta bắt, những con đường chúng ta đi qua - tất cả đều được tạo ra để kể lại công việc của chúng ta tại thành phố này.</p><p>Trong bộ sưu tập này, đối tượng trung tâm là những hành khách đang tôi bắt gặp giữa dòng người di chuyển tới nơi làm việc và sáng sớm hoặc chiều muộn. Trong một thế giới làm chủ bởi các kỹ thuật số và những điều kỳ lạ, những con người này được chụp giữa quang cảnh thực tại của thành phố, và mặc dù tâm trí của họ có thể bị đẩy tới một nơi xa xôi nào đó nhờ các thiết bị kỹ thuật số, tôi ghi lại hình ảnh những con người này tồn tại trong thời điểm đó, khi màn trập mới máy ảnh của tôi đóng lại. Khi quan sát dòng người hối hả đi làm, tôi thích thú phát hiện ra những luật ngầm của xã hội mà chúng ta đều tuân theo trong cuộc sống thường ngày. Tỉ dụ như làm thế nào để xếp hàng, hoặc khoảng cách thích hợp với một người nào đó trong một chuyến tàu chật chội.</p><p>Trong quá trình chụp hình những con người này tôi cũng nhận ra một điều khác, đó là số lượng quảng cáo, bảng hiệu hoặc biểu tượng gợi ý chúng ta phải làm gì, làm thế nào để cảm nhận về thế giới, hoặc chúng ta nên làm việc chăm chỉ vì điều gì. Có lẽ khá nhiều thông điệp trong số này đều không được để ý tới, giờ đây chúng ta còn bận nhìn xuống màn hình điện thoại mà, nhưng tôi nghĩ  những thông điệp này phần nào chỉ dẫn cảm xúc của chúng ta trong ngày hôm đó. Tôi sử dụng các yếu tố vừa kể và các yếu tố như bóng tối, ánh sáng, độ tương phản và vật thể tôi tìm thấy trong thành phố để đặt ra bối cảnh cho các đối tượng chụp. Tất cả các yếu tố này không chỉ để ra một bức ảnh đẹp mà còn để lưu giữ lại mọi điều khi sống trong những thành phố hiện đại của chúng ta với mọi cung bậc cảm xúc và nét nhân văn trong những gì thường nhật nhất.</p><p>Dòng người chiều muộn ở khu trung tâm Boston, Massachusetts nhìn từ trên cao - 5/12/2016</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700211712/c3ol4cz7rwmorrwj52bi.png\" alt=\"Boston\" /><p>Chạy vội để bắt cho kịp tàu điện ngầm tại Boston - 1/11/2016</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700211645/zn2wgp8chzyyb2fkljqo.png\" alt=\"Boston\" /><p>Dòng người đi cầu tháng cuốn vào buổi chiều muộn tại Cambridge, Massachusetts - 11/10/2016</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700211763/mlmq8nlopamc1smtqwdb.png\" alt=\"Massachusetts&nbsp;\" />', 96, 'Đã hết một ngày làm việc rồi, hãy cùng dành cho bản thân một khoảng lặng để cảm nhận cái đẹp của cuộc sống thường nhật ở một thành.', NULL, 'https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 3, 1, 4, '2023-11-17 16:03:13.205000', 0);
INSERT INTO `blog` VALUES (208, 'Mình sẽ vẫn mang theo \"nó\", dù trong hoàn cảnh nào!', '<p>Chắc chắn rồi, nếu như ai tiếp xúc với mình lâu hoặc một vài lần chắc cũng đều sẽ nhìn thấy hình ảnh mình luôn mang theo 1 chiếc balo lớn hoặc những chiếc túi đeo chéo to có hình dạng hơi kì lạ tới tất cả mọi nơi từ Hà Nội, Sài Gòn,... các tỉnh ở Việt Nam,..rồi thậm chí là một vài nước Đông Nam Á mình đặt chân qua. Những câu hỏi mình nhận được khá quen thuộc:\"Mày/bạn/anh/em mang cái gì đi mà lúc nào cũng nặng/ cồng kềnh vậy?\", rồi những câu hỏi như:\"Đi có nhất thiết phải mang nặng như vậy không?\". Những lúc thế này nhiều lần khiến bản thân \"hơi buồn\" nhưng mình chưa bao giờ thấy tiếc nuối. Đơn giản vì dù có đi đâu thì 1 vài chiếc máy ảnh đồng hành cùng với mình, những bức ảnh, những trải nghiệm cùng nó mới là thứ giúp cho mình nhớ mãi.</p><p>8 năm trước, là thời điểm mình mua chiếc máy ảnh DSLR đầu tiên. Đó cũng là lần đầu tiên của tuổi mới lớn, mình loay hoay với nhiều định hướng, nhiều dự định. Chiếc máy ảnh đối với mình lúc đó có lẽ là \"kim chỉ Nam\" và rồi thói quen mang túi máy ảnh, máy ảnh được hình thành. Nó đi với mình đến trường, đến nhiều sự kiện, nhiều chuyến đi của học sinh. Cũng nhờ có nó mà nhiều kí ức đẹp dần được hình thành.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700211896/xevovy3xkhe1hgdplycz.png\" alt=\"VJ Đức Anh (Phá) - Version 50mmVietnam\" /><p>Có lẽ cũng từ thời điểm đó, mình kết nối với nhiếp ảnh như một cái duyên. Có những thời điểm vào khoảng những năm 2016-17, hồi mình mới vào đại học. Mình cũng chỉ coi nó là thú vui, một công cụ giải trí và có không ít lần mình cũng đã lãng quên nó vì nhiều lí do khác nhau. Nhưng rồi đến một thời điểm, khi mình lại rơi vào khủng hoảng, rồi lại lạc lối trong những điều đang dở thì nhiếp ảnh nó lại xuất hiện và nó dẫn lối mình đi tiếp tới những bước tiếp theo trong cuộc đời.</p><p>Nhờ có nhiếp ảnh, mình được làm những công việc \"trái ngành\" mà mình yêu thích, mình có thêm nhiều bạn bè, nhiều người anh/người chị, nhiều chuyến đi ý nghĩa. Thêm nữa là nó giúp cho mình có thêm chút \"lương\" để tạo ra được nhiều thứ hay ho hơn. Mình cũng dần tìm được đáp án cho những câu hỏi \"ngô nghê\", \"ngờ nghệch\", \"ngốc nghếch\" về bản thân, về những điều mình đang làm. Hơn hết nó còn trả lời cho mình biết rằng mình nên làm gì với người bạn \"nhiếp ảnh\" này. Rồi mọi thứ cứ như thế, lặp đi lặp lại cho tới tận bây giờ.</p><p>Tuy rằng, thời điểm bây giờ những thiết bị, rồi cách tiếp cận nhiếp ảnh, rồi tính cách, thói quen sinh hoạt, công việc,... của mình ngày một thay đổi. Nhưng thói quen mang theo \"nó\" vẫn được giữ nguyên dù có thế nào.</p><p>Bài post khá dài với một góc tâm sự nho nhỏ, mong rằng nhiều người đọc nó cũng nhận được nguồn năng lượng tích cực, chút cảm hứng mình đem đến cho các bạn. Peace!</p>', 96, 'Nhiếp ảnh và những điều chưa thực hiện', NULL, 'https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 3, 1, 0, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (209, 'Bước qua mùa cô đơn\n', '<p>Mình không phải là fan của Vũ, cũng không mê nhạc Vũ cho lắm. Thật ra lần đầu mình nghe bài này là từ chương trình Ca Sĩ Mặt Nạ với phần trình diễn của Uyên Linh.</p><p>Mình thích cái tựa bài hát quá !</p><p>“Bước qua mùa cô đơn”</p><p>Nghe nó buồn. Buồn mà nhẹ tênh, không đau khổ, chấp nhận một cách thanh thản, không kháng cự. Bước là động tác thuộc về nguyên thủy và rất đỗi tự nhiên của con người, chỉ cần nhấc một chân lên trên chân còn lại, một cách từ tốn khoan thai, không gượng ép không giục giã; không cần phải cuống cuồng chạy trốn chi nỗi đau trong lòng, cứ thong thả vừa sải bước vừa gặm nhấm, nghiền ngẫm cái sự cô đơn này. Cứ tiếp tục bước cho đến một ngày mình bỏ lại nó sau lưng, thế là ta đã bước qua rồi !</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700212055/qs6xpiyrbq4nxquie7hb.png\" alt=\"Mùa thu\" /><p>Mà không hiểu sao mỗi lần tựa bài hát bật lên trong đầu, mình cứ tưởng tượng ra một chàng thanh niên không quá cao, cũng không quá thấp, người hơi gầy, mặc quần jean, áo thun đen, bên ngoài khoác một chiếc áo da màu nâu nhạt, tay bỏ vào hai túi quần trước, bước đi trên vỉa hè một chiều cuối thu, bâng khuâng tận hưởng làn gió hanh khô vương chút dịu ngọt đang thổi qua vai, à … phải cho anh chàng này thêm một đôi Converse cổ cao màu nâu nữa, và vài chiếc lá vàng đang lặng lẽ rơi xuống lề đường mới đúng concept “thu cuối”.</p><p>Mà mùa nào mới là “mùa cô đơn” ?</p><p>Bình thường mình vẫn hay nghe “mùa cưới” (chắc vì dạo này mình nhận thiệp cưới hơi nhiều), ngày xưa mình hay thắc mắc, tại sao gọi là “mùa cưới” ? Cưới mà cũng theo mùa sao?</p><p>Mãi sau này mình mới nghe được một vài lý giải từ chỗ nọ chỗ kia, mà cái lý giải mình thấy hay ho và hợp lý nhất cho đến thời điểm hiện tại là: cái không khí và tiết trời cuối năm thường khiến con người ta có xu hướng “nghĩ mình cô đơn”, họ cần người bên cạnh thế là họ về chung một nhà.</p><p>Thật ra cái lý giải này cũng hơi … gượng ép. Vì mình sẽ luôn nghĩ rằng người ra cưới nhau vì quá cần nhau, thật ấu trĩ khi cho rằng ai đó đã yêu đương nồng cháy để đến một “mùa” nào đó họ cưới nhau chỉ vì muốn khỏa lấp sự cô đơn đang dâng trào.</p><p>Nhưng một đứa yêu và tôn thờ thiên nhiên như mình thật không thể phủ nhận tác động của tự nhiên vào các quyết định của nhân loại !</p><p>Nên tựu lại, mình sẽ nghĩ thế này: người ta yêu nhau đắm say qua bao mùa, cưới nhau vào cuối năm vì lúc ấy vừa được tiền thưởng Tết, vừa được tiền mừng cưới, mùa đông mà chỉ cần được đếm tiền thôi là đủ ấm rồi chứ còn nghĩ ngợi gì nữa !</p><p>Đùa thôi !</p><p>Thật ra mình nghĩ, người ta không cưới nhau vì muốn “bớt cô đơn” đi, mà là họ muốn được “hạnh phúc hơn”</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700212085/lc1cackhsxci9tq8itmx.png\" alt=\"Hạnh phúc hơn nhé\" />', 96, 'Mùa thu không cần em vì anh giờ đây còn mãi hững hờ ...', NULL, 'https://images.pexels.com/photos/19097427/pexels-photo-19097427/free-photo-of-binh-minh-phong-c-nh-nui-nha-c-a.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 3, 1, 0, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (210, 'Thong dong mà bận\n', '<p>Dạo gần đây mình cứ hay bồn chồn khó ở. Cảm thấy sức khỏe kém đi nhiều, nguời như muốn lả đi bất cứ lúc nào. Cảm thấy lúc nào cũng bận rộn xoắn hết cả mông, quay như con thoi, vậy mà nực cười là tới cuối ngày nhìn lại, chả thấy mình làm được cái gì ra hồn cả !Nghĩ mà buồn.</p><p>Thế thôi, quyết định là mình cứ \"thong dong mà bận\" cho rồi !</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700212199/x9oxonhdqzrhaoerosiw.png\" alt=\"Thong dong mà bận !\" /><p>Tuần trước có đặt mua hai cái lắc chân bằng dây đỏ có gắn lục lạc leng keng, 1 cái mình đeo, 1 cái để tặng Nhi. Vậy nên bắn cho Nhi cái tin hẹn thưởng ngoạn xe buýt Hop on-Hop off dạo buổi sáng Sài Gòn như hai đứa đã từng hứa hẹn trước đó không lâu. Mà trước khi nhắn mình cũng ngại ngùng lúng túng tại dạo gần đây hai đứa có “lỡ” hú hí hơi nhiều, sợ Nhi chán cái mặt mình, và vì lúc nào gặp gỡ mình cũng than thân kể khổ, sợ Nhi nghe nhiều rồi thấy phiền, thiệt !&nbsp;</p><p>Nhi nhận tin nhắn mình rủ rê, chốt hạ “ok\" liền. Mình vui hết chỗ nói ! Nhi còn không quên dặn mình nhớ mang theo cuộn film Kodak mới mua mà chẳng thể lắp vô cái máy của mình vì chưa kịp đem lên cho chú Tần vệ sinh máy sau gần 3 năm bỏ xó. Nhi đem máy của Nhi để tặng mình bộ ảnh. Thế là mình sung suớng gấp 1000 lần vì biết sắp có thêm \"tài nguyên\" sống ảo để thấy bớt “bồn chồn và khó ở\". Mình thích chụp hình cho người khác, còn để người khác chụp cho thì mình kén, phải có “ekip riêng\" thì mình mới chịu. Ekip của mình chỉ có 1 người thôi: là Nhi.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700212229/y0tu6x38pz4gufkzddfe.png\" alt=\"Đôi tay thiếu nữ \"bồn chồn và khó ở\"\" /><p>Hẹn nhau 8h ở Bưu Điện Thành Phố, may mắn sao hai đứa được tặng kèm thêm một vài tiết mục biểu diễn trong tuần lễ Du Lịch từ Đoàn ca múa nhạc dân tộc Bông Sen; trước khi rời cổng Bưu Điện để lên xe buýt ngắm cảnh còn không quên vỗ tay nhiệt liệt cảm ơn các nghệ sĩ đã dành trọn buổi sáng để lan tỏa tinh thần nghệ thuật đến mọi người, quả thiệt, cuộc sống này mà không có âm nhạc thì khác gì dĩa cơm tấm mà không có sườn bì chả.</p><p>Trộm vía làm sao, trên xe buýt cũng không đông người, chắc do tụi mình chọn được giờ ưng ý hoặc vũ trụ yêu thương muốn tán dương hai cô gái hướng nội “part time\" này chút thời gian tận hưởng một buổi sáng cuối tuần nhẹ nhàng, không quá nhộn nhịp cũng không quá tĩnh lặng. Trời hôm ấy cũng đẹp vấn vương lòng người, đủ nắng, đủ gió, đủ lãng mạn, đủ ung dung để bất kì ai cũng có thể trở thành Nàng Thơ cuối đông êm ả dịu dàng mà cũng chẳng kém phần lém lỉnh tinh nghịch.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700212247/oifenaqajommaoyhjqtd.png\" alt=\"Mình chụp nè\" /><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700212252/hg256p8catsgm9gzk0ix.png\" alt=\"Mình chụp nè\" /><p>Tự thấy mình sến súa quá, hay do mình đang trở thành Nàng Thơ trong những thước ảnh film của Nhi nền nã, mà bất giác thấy mình bỗng nhiên dịu dàng đến lạ, vì mỗi ngày đã dữ dằn chán chê rồi, cũng biết mệt chớ. Lại thấy mình bận rộn ghê !</p><p>Ồ thế là mình đang bận để dịu dàng !</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700212268/wycqkraymnglzvmb5bn5.png\" alt=\"Mình chụp nè\" /><p>Tụi mình hay bảo nhau, vào mùa này thì phải lên Quận 1 thư thả dạo chơi mới là đúng điệu, và phải là vào buổi sáng (như hôm nay) mới thấy Sài Gòn đẹp đến nao lòng. Sài Gòn bây giờ không còn nhiều cây nữa, mà mỗi khi nhắc tới đường Tôn Đức Thắng là hai đứa lại muốn nổi điên lên tăng xông đến nơi vì xót xa hàng cây xanh cũ đã không còn ở đó. Nên biết, đừng bao giờ xem thường tinh thần và năng lượng của những người yêu cây, và người yêu cây nào cũng sẽ không khỏi xót thương khi biết sinh vật này đã biến mất đột ngột sau bao nhiêu năm góp sức sống cho thành phố này..&nbsp;&nbsp;</p><p>Tụi mình dạo quanh thành phố mà hai đứa cùng yêu quý và mến thương dù chẳng được sinh ra và lớn lên ở nơi đây. Tụi mình đều là dân nhập cư được Sài Gòn bao dung che chở; dù không ít lần chán chường trách móc giận hờn cái xứ gì mà xô bồ ồn ào quá, nhưng cuối cùng đứa nào cũng phải thừa nhận rằng không thể sống xa Sài Gòn được, và không hiểu vì sao tụi mình cũng tự “mặc nhiên\" là Sài Gòn sẽ cảm thông cho cái nết bất thường của những người con xa quê lâu lâu bị nỗi nhớ nhà làm cho chông chênh như hai đứa.</p><p>Lại thấy mình bận ghê !</p><p>Mình bận rộn, Nhi cũng bận rộn, tụi mình cùng bận yêu Sài Gòn.</p>', 96, 'Thế là hôm nay mình lại bận, mình bận yêu đời !\n\n', NULL, 'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 3, 1, 0, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (211, 'Dạo chơi Phước Hải, gói bình yên mang về!', '<p>Bình yên, xinh đẹp, sẽ quay lại nhiều lần là những từ mà mình có thể nhắc đến khi nghĩ về làng chài Phước Hải - một làng chài xinh đẹp ẩn mình trong làn nước biển trong xanh. Vì quá say mê vẻ đẹp ấy, nên mình cũng có một vài cảm nhận ghi lại những cảm xúc đẹp nhất của bản thân khi ghé thăm làng chài vào 2 ngày nghỉ lễ Quốc khánh.&nbsp;</p><p>Kỳ nghỉ lễ Quốc khánh vừa rồi, mình đã có dịp được ghé thăm làng chài Phước Hải, nghe review cũng đã lâu với cảnh đẹp và đồ ăn ngon nên mình cũng mong muốn ghé thử. Bản thân mình là một đứa học và làm về du lịch, nên trước chuyến đi mình đã lục tung 7749 những chiếc review có trên những trang mạng xã hội mình tìm được về dịch vụ nơi đây. Nói là làm du lịch, nhưng trước giờ mình chưa từng lên một chương trình du lịch nào riêng cho bản thân cả, lần này lại là lần đi chơi lần đầu của mình với anh người yêu, bởi vậy mình cũng khá lo lắng và chuẩn bị, xem xét hết các tình huống rất nhiều. Cuối cùng thì chuyến đi bỏ phố về biển 2 ngày của mình cũng đã thành công, các bạn có thể tham khảo những thông tin và kinh nghiệm đi Phước Hải của mình cho hành trình của bạn nhé.</p><p>Trước ngày nghỉ lễ khoảng vài tuần, mình đã nhen nhóm ý định bỏ Sài Gòn đi đâu đó chơi vài hôm. Trong danh sách những điểm đến của mình thì có Vũng Tàu, có Đà Lạt, có Cần Giờ nhưng Phước Hải lại là lựa chọn sau cùng nhất. Nhưng sau đó vài ngày, anh người yêu mình có lời hẹn lên Đắk Nông chơi, nên mình đồng ý đi lên Đăk Nông với anh. Thật ra, đây là chuyến đi chơi xa đầu tiên của tụi mình sau hơn nửa năm yêu nhau nên mình cũng quyết định lanh lẹ, không muốn phân vân chần chừ nên đồng ý đi Đăk Nông với anh. Nhưng trong thâm tâm thì vẫn muốn đi Phước Hải hơn. Bởi, tuy nhà mình cũng kha khá gần biển, nhưng cả năm mới về quê được một lần, Tết vừa rồi lại không đi biển được nên mình mong đi biển lắm. Đi ngắm hoàng hôn với người yêu đồ đó. Cuối cùng sau một vài lý do, bọn mình đã đi Phước Hải, mình book phòng khá muộn, may mắn là vẫn còn phòng. Dưới đây là một vài review của mình về dịch vụ của Phước Hải và lời khuyên nên của mình.</p><h2>1. Làng chài Phước Hải ở đâu, có gì đẹp?</h2><p>Cách trung tâm thành phố Vũng Tàu khoảng 16km, làng chài nằm ở thị trấn Phước Hải, huyện Đất Đỏ, tỉnh Bà Rịa – Vũng Tàu, là địa điểm du lịch thu hút du khách. Làng chài nổi tiếng bởi nét đẹp cổ kính lâu đời cùng cảnh quan hoang sơ, đầy thơ mộng. Cảm nhận đầu tiên và xuyên suốt hành trình 2 ngày 1 đêm chính là siêu mê chữ ê kéo dài.  Khác hẳn với vẻ náo nhiệt của Vũng Tàu, làng Phước Hải thu hút du khách bởi vẻ đẹp yên bình, tĩnh lặng và lãng mạn hiếm có. Đến với ngôi làng này, bạn có thể thoải mái đi dạo, ngắm cảnh, ghé vào chợ mua và thưởng thức hải sản tươi ngon, tìm hiểu đời sống của người dân,…Cùng với đó là cơ hội được tha hồ thưởng thức hải sản tươi ngon, giá thành phải chăng và ngon miệng. Với những nét đặc trưng đó, Phước Hải hứa hẹn sẽ mang đến cho bạn những trải nghiệm du lịch tuyệt vời, thoải mái và đáng nhớ.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700212444/nmvw54uag1fccluegloi.png\" alt=\"Phước Hải\" /><p>Xuất phát từ TP.HCM, chúng mình chạy xe gắn máy dọc theo quốc lộ 51C, đến bùng binh ngã năm TP.Bà Rịa rồi đi thẳng đường Trường Chinh, sẽ đến quốc lộ 44. Tại đây, di chuyển thêm khoảng 7,5 km, qua khỏi đèo Nước Ngọt đến làng chài Phước Hải.Chúng mình mất gần 3,5 tiếng đồng hồ cho hành trình trên và chạy qua những cung đường tuyệt đẹp, một bên là núi rừng, phía đối diện là sóng biển vỗ rì rào. Anh thì cứ chạy, còn mình ngồi sau xe chỉ việc cầm điện thoại quay những đoạn đường đẹp, tận hưởng hết cái bụi đường trên quốc lộ đoạn qua Dầu Giây, hít hà hương vị của biển và nghêu ngao hát.</p><p>Trước đó vài tuần, mình có nhắn tin hỏi người em của mình đã từng ghé chơi Phước Hải, được thông tin là cơ sở lưu trú nơi đây chưa nhiều, chỉ có thể ghé chơi thôi chứ không ngủ lại qua đêm được, mình cũng khá lo lắng. Sau đó thì mình cũng quên luôn chuyện chuẩn bị cho kỳ nghỉ. Đến sát ngày đi mình cũng chưa chốt được là đi Phước Hải hay đi đâu nên lượn lên mấy group tìm phòng nghĩ bụng là đặt phòng hờ, tại lúc đó cũng hơi trễ rồi, nên tâm lý là đặt được thì đặt không thì thôi ở nhà vậy :(((.&nbsp;Mong muốn của mình là book được homestay, có cửa kính, view biển, để chill chill, ôm nhau ngủ rồi đặt máy quay timelapse đăng cái trend “ngoài kia thế giới người ta yêu nhau kiểu gì” đồ đó. Nhưng không, giờ đó thì lấy đâu ra phòng nữa. Mình nhắn tin cho chục cái home, cái nhà nghỉ ngoài Phước Hải, đã rep lâu thì chớ, rồi lại còn hết phòng. Và rồi mình, cũng có cái nhà nghỉ báo lại cho mình là còn phòng. Mình lanh lẹ book luôn, thấy view mà chị chủ gửi mình cũng khá ổn.&nbsp;Vì nghĩ thôi thì nhà nghỉ chỗ nào cũng như nhau nên thôi đi rồi rút kinh nghiệm lần sau, cho ông người yêu biết là nên quyết đoán hơn trong những lần quyết đi đâu chơi gì.Mình book nhà nghỉ Phan Nguyễn, Đường Ven Biển - Phước Hải - Lộc An - Hồ Tràm, 2 ngày 1 đêm. Giá ngày lễ là 300k/đêm.Nhận xét tổng quan của mình về phòng nghỉ thì nhìn chung ổn, giá bình dân, khá nhiều dạng phòng để bạn lựa chọn. Về vị trí, tuy nằm hơi xa hơn một chút so với khu vực chợ Phước Hải hay bờ kè Phước Hải, nhưng mình thấy không đáng kể, cách có 5-7p chạy xe vào trung tâm thuii, nên mỗi lần đi ra đó lượn lờ, thì chúng mình lại xách xe đi ra đến chợ. Với mình thì không có vấn đề gì, tuy nhiên thì điều này lưu ý cho những bạn không muốn đi quá xa.Đặc biệt là thiết kế bên ngoài nhà nghỉ khá độc đáo, với một nhà nghỉ thì thiết kế như vậy xứng đáng 10 điểm á. Dịch vụ của cơ sở lưu trú thì cũng đạt tiêu chuẩn của một nhà nghỉ bình dân, vừa đủ nhu cầu, chứ mình cũng không đòi hỏi gì thêm ở một nhà nghỉ. Với anh người yêu mình, ổng nói \"anh chỉ cần một cái giường để “ngất” là oke rồi\" thì mình cũng đỡ lo hơn nên về khoản chỗ nghỉ mình khá hài lòng.</p><p>Nên, đối với những bạn có nhu cầu cần chỗ nghỉ lại ngắn, qua đêm và không cần quá nhiều dịch vụ thì mình thấy khi du lịch Phước Hải, lựa chọn nhà nghỉ để nghỉ ngơi cũng là điều khá hợp lý. Bởi nhà nghỉ ở Phước Hải mình đánh giá cũng khá ổn và số lượng cũng không đến nỗi khan hiếm hay quá ít sự lựa chọn. Vì mình đặt trễ rồi nhưng vẫn còn phòng như vậy á.</p><p>Sau đó, khi đi chơi vào đến khu vực trung tâm nhộn nhịp, theo quan sát của mình, những homestay có thiết kế đẹp, độc đáo đã có, và đều nằm xung quanh khu vực chợ, bờ kè, tuy nhiên số lượng có hạn, chưa có nhiều nha. Vì vậy, nếu có ý định đi Phước Hải thì bạn nên book sớm để có phòng, đặc biệt là ngày lễ nha.</p><p>Một số homestay nằm ngay bờ kè, view biển thì quá xuất sắc rồi, mình đề xuất nên thử á. Những homestay này thì rất thuận lợi cho việc di chuyển luôn, chỉ cần vài bước là ra đến bờ kè, có biển ngắm mọi lúc mọi nơi, thuận tiện đú trend quay tiktok á. Nếu mà mình đi lại Phước Hải, chắc chắn mình sẽ canh book trước homestay đoạn bờ kè này.</p><p>Ngoài ra, thì đối với những bạn có nhu cầu nghỉ dưỡng cao hơn thì có thể đi xa hơn một chút xíu, ở đây cũng đã xuất hiện một vài khu resort chất lượng dịch vụ cao, nổi tiếng có Lan Rừng Resort Phước Hải quá nổi tiếng rồi.</p><p>Một số homestay mà mình tìm hiểu được, bạn có thể tham khảo nha:</p><p>Mango Homestay Phước Hải.</p><p>Tina House Homestay Phước Hải.</p><p>Homestay Sala House Phước Hải.</p><p>Bạch Cúc Homestay Phước Hải.</p><p>Come Home Phước Hải.</p><p>Hoàng Vy Homestay Phước Hải.</p><p>Rosita Phước Hải Homestay.</p><p>Homestay Phước Hải  – Oceanami Villas &amp; Beach Club</p><p>Nói chung, nếu bạn có sự tìm hiểu và chuẩn bị từ sớm thì dịch vụ lưu trú ở Phước Hải cũng có khá nhiều sự lựa chọn, chưa đa dạng, nhưng đủ để đáp ứng nhu cầu cơ bản cho chuyến đi ngắn ngày.</p><p>7h sáng anh người yêu chờ mình dưới nhà, bắt đầu xuất phát. Trước đó thì anh người yêu phải bắt đầu đi từ 6h vì chỗ nhà ổng qua mình tầm 1 tiếng lận. Chúng mình xuất phát 7h từ quận 2. Với suy nghĩ là vừa đi có chỗ nào hay hay thì dừng lại thăm thú, checkin nên thoải mái lắm.Quãng đường từ TPHCM - Đồng Nai cũng chưa có gì nhiều. Anh người yêu mình thì nói nhiều, cộng thêm mình cũng có 1 chút kiến thức sơ sơ về tuyến điểm hồi đi học nên hai đứa cứ líu lo hết cả đoạn đường. Hôm đó trời cũng không quá nắng nên đỡ mệt. Và dưới đây mình sẽ note lại lịch trình khám phá Phước Hải 2 ngày 1 đêm của mình. Đây chỉ là những địa điểm mình ghé được trong quỹ thời gian mình có thôi nên các bạn lấy đây là nguồn tham khảo, nếu có chỗ nào chưa hợp lý bạn cân nhắc vào lịch trình của mình nhé:</p><p>Đến địa phận Bà Rịa - Vũng Tàu, địa điểm đầu tiên mà chắc chắn ai đi phượt qua quốc lộ 51 đều dừng lại ngắm nhìn đó chính là nhà thờ Giáo xứ Song Vĩnh. Người yêu mình người Công giáo, vì vậy là mỗi lần mà đi đâu, nếu có nhà thờ nào đặc biệt, thì mình đều ghé vào tham quan với anh. Mình cũng khá thích tìm hiểu văn hoá, kiến trúc, nghệ thuật nên dù mệt nhưng mình cũng hào hứng khám phá. Chúng mình hay có thói quen là nắm tay checkin trong thánh đường những nhà thờ mà chúng mình đi qua, vậy nên nhà thờ Song Vĩnh cũng không ngoại lệ.</p><p>Nổi bật cả một đoạn đường, nhà thờ Song Vĩnh mang dáng vẻ nguy nga, diễm lệ của ngôi thánh đường mang đậm nét kiến trúc Gothic phương Tây.</p><p>Khi vào đến bên trong khuôn viên nhà thờ, mình phải thực sự “say wow” với sự rộng rãi, thoáng đãng của không gian, và sự kỳ công, chỉn chu, hoành tráng về kiến trúc. </p><p>Nhà thờ có kết cấu làm từ chất liệu gạch đá được tô lát kỹ lưỡng, nhà thờ có nhiều cửa sổ lớn và được tô điểm bằng những lớp kính màu. Vẻ ngoài của nhà thờ có màu trắng xám đặc trưng của đá vô cùng ấn tượng. Chính vì thế, việc sử dụng phong cách kiến trúc cổ này ở nhà thờ Song Vĩnh được ví von như một góc châu Âu thu nhỏ ở Vũng Tàu được nhiều bạn trẻ lui tới check-in. Gần như chỉ cần đứng tạo dáng bất kỳ ở góc nào ở công trình, bạn cũng có thể bỏ túi những bức ảnh ấn tượng vừa hiện đại lại phảng phất mang nét cổ điển châu Âu.Giá: 10k phí gửi xe (ngày lễ)</p><p>Trưa ngày đầu đến với Phước Hải, chúng mình có ghé ăn bánh canh bề bề tại quán ăn Cát Biển. Quán này khá xa so với Phước Hải, mà lúc đó hai đứa cũng khá mệt nên bữa ăn này hơi bất ổn, tại mình cũng xem đường không cẩn thận khiến cho anh người yêu phải chở mình đi thêm một đoạn dài. Cộng với việc đi gần đến đây thì bị lạc đường, đi vào ngõ cụt nên phải quay ra đường khác. Ai cũng mệt nên tự nhiên cọc ngang. Nhưng không sao, sau đó khi ăn xong thì lại vui vẻ và quay về phòng nghỉ.Bọn mình gọi 2 tô bánh canh chả cá, một tô 25k, cảm nhân của mình là bánh canh tạm ổn, nước lèo khá trong nhưng hơi nhạt, sợi bánh canh cũng không được mềm lắm, hơi ít topping kèm theo (ngoài chả cá), cũng không có rau ăn kèm. Với 25k như vậy thôi thì cũng tạm chấp nhận, nhưng đi hơi xa nên mình sẽ không đề xuất bạn á.</p><p>Ăn xong, lanh lẹ quay xe về nhà nghỉ đánh một giấc thuii Trên đường về nhà nghỉ, mình có ghé qua:</p><p>Tiếp tục cuộc hành trình đến với Phước Hải, trên đường đi, chúng mình có ghé qua khu du lịch Đèo Nước Ngọt - địa điểm du lịch không thể bỏ qua khi du lịch Phước Hải. Nước Ngọt, là một con đèo ngắn, uốn mình nối hai vùng đất là huyện Long Điền và huyện Đất Đỏ, tỉnh Bà Rịa – Vũng Tàu. Cách Vũng Tàu chừng 25km và cách biển Long Hải 2km.Với chiều dài 5km, tuy không dài nhưng con đèo này sẽ mang lại cảm giác rất ấn tượng, bạn có thể hít hà hương vị tươi mát của biển với những con dốc thẳng xuống kỳ thú và đưa tầm mắt ra xa ngắm biển rộng thênh thang.Lúc mình qua đèo thì trời bắt đầu chuyển mưa nên mình nói anh người yêu là thôi rồi lúc khác ghé qua cũng được. Hơi tiếc nhưng mưa quá với hơi đuối rồi nên thôi. Nhưng mà khi đó mưa nhưng du khách checkin cũng khá đông.Nhưng mà, đèo Nước Ngọt đẹp lắm ạ, kiểu hoang sơ, yên bình, nước biển trong xanh á. Đặc biệt, nơi đây còn có những mõm đá nhấp nhô trên bãi cát, tạo khung cảnh rất đẹp, lên hình độc đáo. Đối diện với biển là núi, ở giữa là con đường đèo, vừa sạch đẹp rộng rãi, đúng mang cái vibe của Hàn Quốc thực sự. Chỉ tiếc là hôm đó mình không ghé xuống checkin được thui, nhưng không sao, mình cũng đã kịp ghi lại một đoạn video siêu xinh trên đoạn đường đèo đó rồi và khắc sâu vẻ đẹp của đèo Nước Ngọt vào tấm trí rồi.Giá mình chưa ghé vào KDL, chưa biết mức giá vào cổng chính xác, nhưng theo mình search trên google thì là 90k/người. Nếu đến đây bạn nên tham khảo giá để chính xác hơn nhé.Ăn xong, về nhà nghỉ, chúng mình ngủ 1 giấc đến 4 giờ chiều, sau đó đi biển Phước Hải chơi.</p><p>Đây thực sự là địa điểm chính làm nên chuyến hành trình vui vẻ của mình trong vòng mấy ngày lễ, phải thực sự \"say woww\". Đối với mình, mình thích cái vibe kiểu yên bình, nhẹ nhàng, kiểu chill chill mà không quá vắng người, nên bờ kè Phước Hải chính là “is the best”. Đây đây, để mình kể cảm nhận của mình cho nghe. Nhiều bạn hay so sánh làng chài Phước Hải giống làng chài trong Hometown cha-cha-cha á, uhm, mình cũng thấy thì khá giống vibe, kiểu yên bình đồ đó, nhưng để mà nói thì Phước Hải vẫn là Phước Hải, vẫn mang đặc trưng riêng của làng chài ven biển Việt Nam. </p><p>Các bạn cứ hình dung bờ kè Phước Hải chính là một con đường nằm song song với đường bờ biển và nằm giữa đường bờ biển với trục đường chính của thị trấn Phước Hải (trên con đường chính này thì sẽ có chợ Phước Hải). </p><p>Ngay từ khi đi trên con đường dẫn ra biển là mình bắt đầu thích rồi á, nhà cửa người dân chưa quá cao che mất tầm nhìn của biển. Và phải thực sự khi ra đến bờ kè, bạn mới cảm nhận được hết cái vẻ đẹp nơi đây. Ấn tượng đầu tiên đập vào mắt mình đó chính là đoạn bờ kè được tô vẽ hoa văn rất đẹp với  hàng trăm hình vẽ ngộ nghĩnh, đáng yêu tạo nên những màu sắc ấn tượng khiến khung cảnh nơi đây sống động hơn. Bờ kè này lên hình siêu xinh. Biển Phước Hải thì siêu xanh và sạch, cùng với đó là bờ cát vàng trải rộng, thi thoảng có những vạt muống biển lan rộng điểm nhấn chút xanh trên nền vàng của cát. Xa xa là những chiếc ghe, thuyền thúng, công cụ lao động của bà con ngư dân nơi đây nằm ngay ngắn trên bờ. </p><p>Các bạn cứ hình dung bờ kè Phước Hải chính là một con đường nằm song song với đường bờ biển và nằm giữa đường bờ biển với trục đường chính của thị trấn Phước Hải (trên con đường chính này thì sẽ có chợ Phước Hải). </p><p>Ngay từ khi đi trên con đường dẫn ra biển là mình bắt đầu thích rồi á, nhà cửa người dân chưa quá cao che mất tầm nhìn của biển. Và phải thực sự khi ra đến bờ kè, bạn mới cảm nhận được hết cái vẻ đẹp nơi đây. Ấn tượng đầu tiên đập vào mắt mình đó chính là đoạn bờ kè được tô vẽ hoa văn rất đẹp với  hàng trăm hình vẽ ngộ nghĩnh, đáng yêu tạo nên những màu sắc ấn tượng khiến khung cảnh nơi đây sống động hơn. Bờ kè này lên hình siêu xinh. Biển Phước Hải thì siêu xanh và sạch, cùng với đó là bờ cát vàng trải rộng, thi thoảng có những vạt muống biển lan rộng điểm nhấn chút xanh trên nền vàng của cát. Xa xa là những chiếc ghe, thuyền thúng, công cụ lao động của bà con ngư dân nơi đây nằm ngay ngắn trên bờ. </p><p>Hôm đó trời khá âm u nên không có thuyền ghe trên biển, nhưng cũng có một vài ngư dân ra ghe gỡ lưới, chuẩn bị cho buổi lao động tiếp theo. Dạo quanh trên bờ cát, hít hà hương vị của biển, và ngắm nhìn cuộc sống người dân nơi đây, lòng mình trở nên nhẹ nhõm và yên bình đến lạ. Mặc dù hôm đó chúng mình đi hơi mưa nhỏ, nên chỉ dạo biển được tầm 30 phút thôi và phải tấp vào quán ăn tối và trú mưa.</p><p>Một điều mình khá ấn tượng đó chính là thái độ niềm nở và hiếu khách của người dân nơi đây. Lúc chúng mình xuống biển, gặp chú này đang gỡ lưới, loanh quanh chú là bé gái 6,7 tuổi (hình như là con chú) chạy lăng xăng bắt ốc. Uầyyy, khung cảnh này khiến mình xúc động và nhớ bố vô cùng. Anh người yêu mình có lân la lại bắt chuyện với chú, hỏi là chỗ nào mua hải sản tươi ngon, còn mình thì dạo dạo checkin, nhưng để ý là chú chỉ chỗ rất nhiệt tình, và cẩn thận lắm. Điều đó khiến mình mê Phước Hải hơn nữa.</p><p>Dạo chơi được một lúc thì bắt đầu mưa và chập tối, chúng mình tấp vô 1 quán ăn gần đó và có một bữa ăn tuyệt vời. </p><p>Đã đến Phước Hải, nhất định nhất định bạn phải ăn hải sản, vì hải sản rất rẻ và tươi. Dọc bờ kè Phước Hải, có hàng chục quán ăn trải dài, mình để ý là quán nào cũng rất rất đông khách, nên chúng mình tấp đại vào một quán. Chúng mình vào quán chị Hương (hic không nhớ tên quán lắm) (nhưng không sao đâu bạn, ở đây quán nào cũng chất lượng và giá cả tương đương nhau hết á). </p><p>rước khi đến đây, mình đã nghe review rất nhiều là đến đây là phải ăn hàu sữa. Vâng, đúng vậy, Phước Hải chính là thiên đường hàu sữa đấy. Cầm menu lên, chúng mình thực sự sốc vì hàu ở đây sao mà rẻ quá, 1 ký hàu sữa hấp 35k, đúng á, chỉ 35k thôi bạn không nghe nhầm đâu. Hàu nướng phô mai thì 5k/con, những hải sản khác thì bán theo ký, ngoài ra còn có một số món hải sản chế biến theo nhiều cách. Bữa đó, mình ăn hải sản đã đời, đặc biệt là hàu con nào con nấy béo núng na núng nính, tươi, và sạch, chấm kèm nước chấm của quán thì đúng là chuẩn mĩ vị nhân gian (hhehhe, thấy mặt mình ăn hàu khoái quá nên vừa gỡ vừa trêu, trêu gì thì mọi người biết rồi đó :))). Nhưng túm lại, hải sản đây siêu tươi nha, đáng thử đáng thử.Thiệt hại hôm đó của chúng mình là 350k/2 người (chúng mình có gọi thêm 3,4 lon bia gì đó). Uầy, lúc thanh toán mình bất ngờ, không ngờ lại rẻ như vậy á. Anh người yêu mình dù hôm đó chưa được đi chơi nhiều nhưng được ăn ngon cái là hớn hở, vui ra mặt luôn, kiu là lâu rồi chưa ngồi uống với người yêu và ăn hải sản ngon vậy á (mặc dù ổng quê ở biển). Mình cũng hài lòng, cười mỉm vì mình cũng chọn được chỗ chơi hợp lý.</p><p>Chiều no căng bụng, anh người yêu về nằm ngủ, mình thì có chút việc nên mở laptop lên làm một chút. 10 giờ tối, anh người mình dậy và hai đứa bắt đầu xách xe đi ăn khuya. Chúng mình ra chợ Phước Hải ăn vặt, chill chill đồ. Thiệt hại là 120k/2 người. Ăn vặt thì ở đâu cũng như nhau và giá cũng bình ổn.Sau đó về ngủ một giấc tới sáng, à anh người yêu rủ mình dậy sớm đón bình minh. Và weooo, anh người yêu mình 5 giờ dậy thức mình đi biển đi và trong cơn ngái ngủ, mình nói là trời mưa không có bình minh ạ. Và, kế hoạch ngắm bình minh thất bại, do mình dậy 10 giờ, dậy thì thấy ổng đang ngồi ngoan ngoãn chơi game. Tự thấy cũng hơi có lỗi và tự hứa là lần tới nhất định đi đón bình minh với anh người yêu á :))))) </p><p>Chả là lần đi chơi này chúng mình có một nhiệm vụ nữa là về thăm nhà cô anh người yêu. Vậy là mình đồng ý về theo. Sáng ngày 2 là chúng mình tạm biệt Phước Hải đi về Bình Châu á.Chúng mình có ghé ăn bò né ở một quán bò né gần chợ Phước Hải. Cũng khá đầy đủ, bữa sáng kèm trưa chất lượng. Với giá là 100k/ 2 người.Sau đó ghé vào chợ mua trái cây biếu cô và lượn ra bờ kè checkin, lưu luyến hương biển một chút trước khi tạm biệt.Trên đường đi, mình có ghé vào Khu du lịch Hồ Tràm, đoạn có cây cầu ngắm biển dài nhất châu Á. Dừng ghé lại thăm thú, checkin một đoạn biển mà yên bình lắm, người dân thong thả mắc võng nằm ngắm biển, với bờ phi lao rì rào và xa xa là tiếng sóng vỗ đập vào từng mỏm đá. Mình siêu mê và cố lấy máy ra ghi lại cho bằng hết.Sau đó chúng mình có 1 ngày thong thả tại Bình Châu. Chiều ngày 3 thì chúng mình đi về vì anh người yêu hôm sau đi làm rồi. Trên đường về chúng mình có ghé Đồi cừu Suối Nghệ checkin.Và yaaa, trên đây là hành trình 2 ngày 1 đêm của chúng mình đến với làng chài Phước Hải xinh đẹp. Tóm gọn cuộc hành trình là hài lòng, thích thú, có những giây phút relax đúng nghĩa, mình với anh người yêu cũng hiểu nhau hơn nữa. Hỏi là có quay lại Phước Hải không thì có nhé, nhất định mình sẽ đi hết những địa điểm nổi tiếng nơi đây mà đợt này chưa đi được. Tổng thiệt hại của chúng mình chuyến đi này bao gồm cả xăng xe, quà biếu cô, cả hai đứa là 1700k. Siêu hời siêu hời, khi mà được đi siêu vui, đồ ăn siêu ngon. Kế hoạch bỏ phố về biển, tạm quên đi deadline, công sở bàn giấy vào ngày cũng đã thành công rồi. <i>(Cũng cảm ơn anh người yêu đã đồng hành cùng em và chịu đựng sự báo và ngáo ngơ sau vài lần chỉ đường sai, ngủ dậy trễ của em, giúp em có một hành trình tuyệt vời, sau này bọn mình cùng đi nhiều hơn nữa nhé).</i>Phước Hải - hành trình đặc biệt của chúng mình, nơi đánh dấu chuyến đi đầu tiên của mình với anh người yêu. Mong rằng, trong tương lai, Phước Hải vẫn đẹp và yên bình như vậy.Ngoài những địa điểm mình kể trên, bạn có thể ghé thăm một số địa điểm khác:Chuyến đi Phước Hải lần này, mình chủ yếu là dành thời gian để nghỉ ngơi và ăn uống, kèm theo là thời gian hơi gấp nên mình chỉ có dịp tham quan được từng đó địa điểm. Tuy nhiên, Phước Hải không chỉ có vậy, đến Phước Hải, bạn có thể ghé thăm những địa điểm này cũng hot lắm:Bờ kè Lộc AnQuán Toco Toco Phước HảiThiền viện Trúc Lâm Chân NguyênNếu còn thời gian, bạn có thể ghé thăm Hồ Tràm, Hồ Cốc, hay Đồi cừu Suối Nghệ….Chúc bạn có một hành trình đáng nhớ tại Phước Hải xinh đẹp!\n\n</p>', 96, 'Nếu bạn muốn đến với vùng đất bình yên, mình đề xuất ngay làng chài Phước Hải. Nhất định, phải đi Phước Hải một lần bạn nhé....', NULL, 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 3, 1, 0, '2023-11-17 16:15:52.824000', 0);
INSERT INTO `blog` VALUES (212, 'Làm gì có cái gọi là nghề KOL?', '<p>Một chút tâm sự về câu chuyện nghề nghiệp của tôi. Không phủ nhận là 3 năm đi làm đã tạo cơ hội cho tôi được gặp những anh chị, idol có sức ảnh hưởng, vừa có tâm vừa có tầm; nhưng cũng cho tôi gặp cơ số các bạn bị \"ảo\" khi mới được có một chút tiếng tăm và lượt người theo dõi.</p><p>Tôi thắc mắc các bạn có thật sự hiểu thế nào gọi là KOL không khi người ta hỏi mình làm nghề gì thì nhận mình làm \"nghề KOL\"? Có lẽ ở thị trường truyền thông Việt Nam, người ta dùng cụm \"booking KOL\" nhiều quá, thành ra ai cũng hiểu KOL là người nổi tiếng nói chung chứ không thật sự hiểu những ai mới được gọi là KOL.</p><p>Vậy KOL được định nghĩa chính xác như thế nào?</p><blockquote>\" KOL (danh từ) là viết tắt của Key Opinion Leader, chỉ một cá nhân hay tổ chức có tầm ảnh hưởng và chuyên môn trong lĩnh vực nhất định, ý kiến của họ thường được tôn trọng và lắng nghe. \"</blockquote> - Credit: Vietcetera (https://vietcetera.com/vn/kol-la-gi)<p>&nbsp; Vậy keyword ở đây là gì? Họ vừa là người có sức ảnh hưởng <b>(influencers),</b> vừa là người phải có chuyên môn trong một lĩnh vực nhất định <b>(expertise)</b>. Ví dụ dễ nhất tôi hình dung trong đầu khi nhắc tới các KOL chuẩn sẽ là các \"sharks\" trong Shark Tank, họ vừa có sức ảnh hưởng và độ tin cậy, tôn trọng trong cộng đồng khởi nghiệp; vừa có chuyên môn rõ ràng, kinh nghiệm thực chiến lâu năm được thị trường kiểm chứng bởi các sản phẩm do họ tạo ra.&nbsp;&nbsp;</p><p>Vậy còn các bạn đang nhận là KOL, \"chuyên môn trong một lĩnh vực cụ thể\" của các bạn là gì? Tôi không nói là không có, sẽ nhiều bạn có thể nhìn nhận ra được. Có những bạn bắt đầu hành trình từ việc luyện tập làm người có sức ảnh hưởng trên mạng xã hội trước, sau đó tìm ra được niềm đam mê của mình ở một lĩnh vực cụ thể và đầu tư trang bị kiến thức chuyên môn, kinh nghiệm ở lĩnh vực đó. Phổ biến nhất với mình có lẽ là các Beauty Bloggers, ban đầu họ chỉ là những người dùng và review sản phẩm dựa trên trải nghiệm của họ, sau đó được sự ủng hộ và quan tâm của mọi người thì đi học thêm kiến thức để có chuyên môn tốt hơn khi review sản phẩm do nhãn hàng booking.</p><p>&nbsp; Tuy nhiên, cũng sẽ có nhiều bạn không nhìn ra được, vì làm gì có mà nhìn ra. Cơ bản, các bạn chỉ đang dùng sức ảnh hưởng của mình, có nhiều người follow để nhận booking và điều hướng người theo dõi của mình, vậy các bạn là <b>influencers</b> nhé! Đừng nhận mình là KOL trừ khi đã bắt đầu tạo dựng chuyên môn cho bản thân.&nbsp;&nbsp;</p><p>&nbsp; Có một hướng đi khác cho các bạn, từ năm 2022 khi social commerce lên ngôi là <b>KOC</b>.&nbsp;&nbsp;</p><blockquote>\"KOC, viết tắt của Key Opinion Consumers, chỉ những người  có công việc chính là thử nghiệm các sản phẩm, dịch vụ và đưa ra những nhận xét, đánh giá.\"</blockquote> - Credit: Accesstrade (https://accesstrade.vn/koc-la-gi/#:~:text=KOC%20%C4%91%C6%B0%E1%BB%A3c%20vi%E1%BA%BFt%20t%E1%BA%AFt%20t%E1%BB%AB,nh%E1%BB%AFng%20nh%E1%BA%ADn%20x%C3%A9t%2C%20%C4%91%C3%A1nh%20gi%C3%A1.)<p>Ai cũng là một nhà tiêu dùng trên thị trường trao đổi hàng hoá, nhưng nếu bạn có sức ảnh hưởng, ý kiến của bạn sẽ gây tác động tới top of mind và điều hướng hành vi mua hàng của người tiêu dùng. Và từ KOC, bạn có thể đầu tư chuyên môn lên làm KOL nếu thật sự có tâm và đam mê với lĩnh vực mà mình theo đuổi và muốn truyền cảm hứng.</p><p>Thực ra thì, tôi nghĩ việc phân định KOL, IF và KOC cũng không phải khái niệm quá xa lạ với các marketers và nhiều bạn đang làm phát triển social. Tôi có nói dông nói dài thì cũng bằng thừa. Tuy nhiên, từ trải nghiệm của tôi thì vẫn chủ yếu đến từ thái độ của các bạn nhận là KOL. Có nhiều anh chị tôi làm việc cùng, cực kỳ nice và trao đổi rất kỹ với nhãn hàng trước khi làm để cho ra đầu ra tốt nhất, và sẵn sàng hỗ trợ nhãn hàng nếu cần chỉnh sửa những phần nhỏ hoặc thêm thắt những yếu tố phụ như pin, comment bài viết; nhưng có những bạn mặc dù sản phẩm chưa đạt chất lượng những đã có thái độ dỗi lên dỗi xuống agency và nhãn hàng?? Why?? Trừ khi agency và nhãn hàng đổi brief 180 độ hay không nhận sản phẩm của bạn mặc dù bạn đã làm đúng yêu cầu, quịt tiền, nhưng có những bạn làm tôi thấy khó hiểu về thái độ làm việc thật, khi nhìn sang các anh chị big KOL trong ngành với thái độ làm việc chuyên nghiệp hơn nhiều.</p><p>Túm lại đối với tôi, có 2 yếu tố quan trọng mình mong muốn các bạn như trên cần nhìn lại:</p><p><b>(1) Định nghĩa chuyên môn: </b>Hãy xác định mình đang đóng vai trò gì trong ngành công nghiệp truyền thông này, và xây dựng chuyên môn bản thân để phát huy thật tốt vai trò đó.&nbsp; &nbsp;</p><p><b>(2) Thái độ:</b> Dù bạn có là ai thì hãy luôn làm việc với một thái độ hướng tới đầu ra chung. Mỗi sản phẩm hãy như một đứa con tinh thần của mình, và bản thân các bạn cũng phải có trách nhiệm tư vấn ngược lại cho các brands và agency để cùng nhau sản xuất ra nội dung có chất lượng tốt nhất, có giá trị thực cho người tiêu dùng và đem lại lợi ích cho phía booking.</p><p>Túm lại, có \"tâm\" và có \"tầm\". Đừng bị ảo, còn nhiều người giỏi hơn mình lắm.Viết hơi cục súc tí, nhưng mà nhiều khi thô - thật. </p><p>Long story short từ câu chuyện đi làm của tôi.</p>', 96, 'Long story short từ câu chuyện đi làm của tôi.', NULL, 'https://images.spiderum.com/sp-thumbnails/c23ccea02e5b11eda29ecdef8e62389e.png', 0.00, 4, 1, 0, '2023-11-17 16:21:09.805000', 0);
INSERT INTO `blog` VALUES (213, 'Chúng ta là ĐỘC NHẤT trong vũ trụ? | SAMURICE', '<p>Chúng ta có đơn độc trong vũ trụ này không? Câu trả lời dù có hay không vẫn luôn khiến ta phải rùng mình. Nếu ta là những kẻ duy nhất, phải chăng đó là do có đấng tạo hóa nào đó đã ưu ái hành tinh nhỏ bé này? Còn nếu không, có khi nào ta chưa tìm ra những người ngoài hành tinh đang ẩn náu đâu đó ngoài kia? </p><p>Làm thế nào để ta biết được thế giới này có những kẻ lạ mặt hay không? Có lẽ, có một người đã đưa ra được phép tính khả thi để trả lời câu hỏi đó. </p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700213059/g9ktuegp4pqtn3whiips.png\" alt=\"Alien - Người ngoài hành tình\" /><p>&nbsp; Frank Drake, nhà thiên văn, vật lý lý thuyết lỗi lạc của nhân loại đã có một trong những công thức để đời, sánh ngang với E=mc2 của Einstein. Đây là công thức đã đưa nhân loại lên một tầm cao mới trong hành trình nghiên cứu sự sống ngoài hành tinh. Và đó là phương trình mang tên ông, <i>phương trình Drake</i>, được công bố vào năm 1961.&nbsp; &nbsp;</p><p>Ngay khi được công bố, phương trình Drake đã thu hút được rất nhiều sự chú ý của các nhà khoa học bởi sự đơn giản, dễ hiểu và thực tế đến không tưởng. Phương trình này được cấu thành từ 7 yếu tố khác nhau và kết quả sẽ là khả năng tồn tại của sự sống ngoài hành tinh.&nbsp;</p><p><b><i>Làm cách nào để Drake có thể xác định 7 yếu tố đó và 7 yếu tố đó là gì?</i></b></p><p>Đầu tiên là <b><i>R*</i></b>, biểu thị cho tỷ lệ hình thành ra một ngôi sao mới trong thiên hà mỗi năm. <b><i>Fp</i></b>, biểu thị cho số lượng ngôi sao có hệ hành tinh. <b><i>Ne</i></b>, biểu thị cho những hành tinh trong các hệ hành tinh kể trên có khả năng chứa đựng sự sống. <b><i>Fe</i></b>, số lượng những hành tinh có khả năng chứa sự sống mà thực sự có sự sống. <b><i>Fi</i></b>, con số biểu thị cho những hành tinh trong tập hợp trên có thể đưa sự sống đến với trí tuệ.<b><i>Fc</i></b>, những hành tinh chứa đựng các nền văn minh mà có khả năng tồn tại tới lúc chúng khám phá vũ trụ như chúng ta.Và yếu tố cuối cùng, <b><i>L</i></b>, thời gian để các nền văn minh này đưa ra các thông điệp liên hành tinh và liên lạc với chúng ta. Các yếu tố trên vừa bổ sung cho nhau vừa định nghĩa cho nhau, cùng nhau nói lên một điều rằng:“Nếu ngoài kia có nền văn minh ngoài vũ trụ mà ta có thể bắt gặp được thì nó ắt hẳn sẽ phải nằm trên một hành tinh trong hệ hành tinh có khả năng chứa đựng sự sống, tồn tại đủ lâu để có thể phát triển khả năng thu phát tín hiệu vũ trụ”Nghe có vẻ đơn giản, nhưng khi ta bắt tay vào tính toán, những con số hữu hình này bỗng trở nên vô tưởng.&nbsp; &nbsp;</p><p>Tại sao lại vô tưởng? Chẳng phải phương trình khá rõ ràng sao? Chúng ta lấy tỷ lệ những ngôi sao mới sinh ra nhân với tỷ lệ những ngôi sao có hệ hành tinh nhân với tỷ lệ những hành tinh chứa đựng sự sống và cứ thế ra là kết quả thôi phải không?Đúng là vậy, nhưng điều khiến những con số này vô tưởng là tầm hiểu biết của chúng ta với sự vĩnh cửu của vũ trụ hữu hạn này. </p><p>Với yếu tố đầu tiên, tỷ lệ những ngôi sao được ra đời mỗi năm, có nghĩa là để sự sống tồn tại, nó cần bám vào những ngôi sao có độ sáng phù hợp, không quá khổng lồ, không quá sáng và không quá tối để các hành tinh quanh nó không mất cân bằng sự sống. Chúng ta có một ví dụ cho ngôi sao kiểu này và nó là thứ trên trời mỗi ngày, mặt trời. Mặt trời là sao trong dãy chính, nghĩa là ngôi sao trưởng thành với kích thước phù hợp. Nó không yếu như các sao lùn và cũng không quá mạnh như các sao trắng xanh. Và để xác định sự tồn tại của các ngôi sao này, ta cần chỉ ra tỷ lệ hình thành của chúng trong mỗi năm, từ đó suy ra được tiềm năng chúng mang tới cho sự sống. Tuy nhiên, khi đặt câu hỏi mỗi năm có bao nhiêu sao mới được hình thành, ta sẽ thường nghĩ tới một con số nào đó xa vời và khổng lồ như cả trăm cả ngàn sao. Tất nhiên, với vũ trụ khổng lồ, con số khổng lồ là điều dễ hiểu. Nhưng sự thực thường mất lòng. Số lượng sao mới ra đời mỗi năm chỉ vỏn vẹn khoảng 3 sao. 3 sao không thực sự là 3 ngôi sao mới, nó chỉ ra rằng mỗi năm theo thời gian Trái Đất, dải ngân hà của chúng ta sẽ hội tụ được khối lượng vật chất tương đương 3 mặt trời của chúng ta. Nghĩa là có thể sẽ có 3 ngôi sao tương tự như mặt trời được ra đời hoặc một ngôi sao to bằng 3 mặt trời, hoặc sau 3 năm thì sẽ có một ngôi sao to bằng 9 mặt trời được ra đời. Cho dù có thế nào thì tỷ lệ vẫn luôn là khoảng 3 sao. </p><p>Yếu tố tiếp theo là Fp, chỉ ra rằng trong số những ngôi sao kể trên, chúng ta chỉ có thể có sự sống nếu chúng có hệ hành tinh. Điều này thoạt đầu nghe có vẻ dễ hiểu, rằng nhìn vào hệ mặt trời của chúng ta, ta sẽ dễ liên tưởng tới việc mọi ngôi sao ngoài kia đều có cho mình một gia đình nhỏ bé gồm nhiều hành tinh khác nhau. Nhưng sự thật thì thường mất lòng. Mặt trời và mọi ngôi sao khác trong vũ trụ này có điểm chung ở khối lượng của chúng. Khối lượng các ngôi sao đều to hơn nhiều so với những hành tinh. Hành tinh lớn nhất ta xác định được có khối lượng gấp 8 lần sao Thổ, nhưng nó vẫn chỉ là hạt cát so với một sao lùn đỏ. Và theo thuyết tương đối, những thứ nặng thường sẽ lôi kéo nhau, các ngôi sao quanh vũ trụ thường tụ lại thành một cặp, bay quanh nhau và tạo ra một cặp sao đôi. Nhưng điều đó chắc không ảnh hưởng gì đúng không? Các ngôi sao có hệ hành tinh vẫn chiếm số nhiều phải không nào? Thực ra thì…không. Tỷ lệ các cặp sao đôi hay hệ Binary Stars chiếm tới 85% các ngôi sao trong vũ trụ, và đó là ta còn chưa kể tới các hệ thống quỹ đạo phức tạp hơn như hệ thống 3 sao Trinary System và cả hệ thống sao siêu cao cấp như DI Cha với 2 cặp sao đôi cùng bay quanh nhau, tạo ra hệ 4 sao. Nhìn chung, những ngôi sao chứa đựng các hành tinh và tạo ra hệ hành tinh không phải là hiếm nhưng nó không phải là số đông, kéo tỷ lệ các ngôi sao có khả năng chứa đựng sự sống xuống một cách đáng kể. Và từ đây trở đi, ta cần hạ thấp kỳ vọng xuống để có thể chấp nhận được những con số vô tưởng vẫn đang chờ đợi ta. Ne, tỷ lệ những hành tinh có khả năng chứa đựng sự sống sẽ phải nằm trong tập các hành tinh nằm trong hệ hành tinh nhỏ con mà ta vừa kể trên. Từ tỷ lệ nhỏ đó, ta còn phải tìm ra tỷ lệ nhỏ hơn với những hành tinh không ở quá gần ngôi sao trung tâm hoặc ở quá xa, khiến dung môi cần thiết cho sự sống như nước và Ammonia bị bốc hơi hoặc bị đóng băng. Chỉ trong những môi trường phù hợp thì các hành tinh này mới có thể giúp mầm mống sự sống phát triển. Khu vực an toàn đó có tên là vùng Goldilock, nơi hành tinh nhận lượng nhiệt vừa đủ để có thể nuôi dưỡng sự sống. Câu hỏi dễ đặt ra là có bao nhiêu hành tinh trong khu vực này. Nhưng câu hỏi chính xác hơn cần đặt ra là có bao nhiêu hành tinh có khả năng chứa đựng sự sống nằm trong khu vực này. Câu trả lời thực sự khá bất ngờ, trong hàng tỷ tỷ ngôi sao ngoài kia, chúng ta có thể xác định được có ít nhất 3400 hành tinh như thế này trong dải ngân hà của chúng ta. Ta gọi chúng là các Exo-planet. Những hành tinh khí ga khổng lồ và hành tinh đất đá đều có thể là các Exo-planet, có tiềm năng chứa đựng sự sống. Nhưng chỉ có hành tinh đất đá mới có thể chứa đựng sự sống có trí tuệ. Tuy nhiên những hành tinh này không thể quá lớn hoặc quá nhỏ. Thêm vào đó, chúng còn phải chứa đựng khí quyển đủ khả năng bảo vệ sự sống khỏi bức xạ vũ trụ. Như cách Trái Đất có tầng ozone để phục vụ mục đích đó, các hành tinh có tiềm năng chứa đựng sự sống không chỉ phải nằm vừa vặn trong khu vực Goldilock mà còn phải có những yếu tố nhất định như tầng khí quyển dày hoặc lõi có từ trường tốt đủ để khiến các cơn sóng vũ trụ không hủy diệt hành tinh. Sự khác biệt nhỏ bé này dù không quá quan trọng trong mắt chúng ta nhưng nó là điều khiến Trái Đất, sao Kim và cả sao Hỏa cùng nằm trong vùng Goldilock nhưng chỉ có Trái Đất chứa sự sống. </p><p>Với ngần ấy thử thách, ta có thể dễ dàng thấy rằng việc tìm ra một hành tinh có khả năng chứa đựng sự sống không hề “dễ dàng” như ta nghĩ. Vậy, hãy cứ cho rằng ta có một hành tinh nào đó đang ở trong vùng an toàn, không chỉ được bảo vệ mà còn có mầm mống của sự sống, chúng ta có thể kỳ vọng gì ở hành tinh này?Điều đầu tiên ta có thể kỳ vọng là những vụ tấn công từ vũ trụ và từ chính hành tinh đó. Từ khi được hình thành cách đây 4,5 tỷ năm, Trái Đất đã hứng chịu vô vàn những cuộc tấn công dã man từ vũ trụ bao la. Một trong số đó là cuộc đổ bộ của tiểu hành tinh Theia, xáo trộn toàn bộ cấu trúc hành tinh và sinh ra mặt trăng. Thêm vào đó là viên gạch khổng lồ đã va vào Chixulub và tiêu diệt toàn bộ khủng long. Và chúng ta còn chưa nói tới những cuộc tuyệt chủng đã xảy ra trên hành tinh này. Khí hậu là một thứ nhạy cảm, vị trí của hành tinh so với ngôi sao trung tâm có thể khiến cả hành tinh rơi vào băng giá và hủy diệt sự sống. Sự sống cơ bản là các sinh vật đơn bào, chúng không thể tính là người ngoài hành tinh được. Và để chúng có thể trở thành các sinh vật đa bào, chúng cần phải tìm cách tồn tại trong một thiên hà chứa đựng vô vàn những quả bom hạt nhân đang trực chờ lao tới và hủy diệt mọi thứ. Yếu tố Fe chỉ ra rằng trên các hành tinh trong vùng Goldilocks, những hành tinh có chứa sự sống mới được tính. Nhưng ngay khi nghĩ tới khái niệm đó, ta đã thấy nó hiếm đến thế nào. </p><p>Giờ đây khi ta đính kèm với yếu tố tiếp theo là Fi, biểu thị cho những nền văn minh có thể ra đời từ những hành tinh đó, tỷ lệ của nó sẽ nhỏ tới mức nào?Trái Đất đã tồn tại từ 4,5 tỷ năm trước và dấu vết đầu tiên về sinh vật giống người là ở 2,8 triệu năm trước. 4,5 tỷ năm và 2,8 triệu năm là khoảng cực kỳ xa cách và chúng ta mới chỉ thực sự trở thành nền văn minh cách đây khoảng 12.000 năm. Với cơ may của một hành tinh nào đó chứa đựng sự sống, có thể giúp chúng tiến hóa từ đơn bào thành đa bào rồi qua quãng thời gian khổng lồ để chúng có thể trở thành những nền văn minh lớn, đủ khả năng để duy trì nòi giống và vượt qua các mâu thuẫn xã hội, chúng ta có khả năng đặt hy vọng vào việc chúng sẽ tiến tới khoa học vũ trụ và bắt đầu thu phát các tín hiệu ra ngoài không gian vô tận. Chúng ta không thể nào phóng lời chào ra vũ trụ và hy vọng nền văn minh cổ đại, vẫn còn đang nhặt đá xếp thành kim tự tháp nghe thấy được. Họ cần phải có công nghệ đủ thông minh để tiếp nhận các tín hiệu đó rồi đáp trả lại. Vậy nên kể cả ngoài kia có sự sống thật, chúng ta cũng phải cực kỳ thận trọng khi nói rằng họ có sự phát triển tương tự như ta. Hãy nhớ rằng cách đây 100 năm, chúng ta còn đang tưởng tượng rằng năm 2000 sẽ là kỷ nguyên của sự sống trên các đám mây mà đến tận năm 1950, chúng ta vẫn còn chưa bao giờ tưởng tượng nổi một ngày nào đó trong tương lai con cháu của chúng ta sẽ có thể nói chuyện trực tiếp với ai đó ở bên kia địa cầu. Chỉ trong 1 thế kỷ, sự khác biệt về công nghệ, kỹ thuật và tư tưởng đã vô cùng lớn. Vậy với một nền văn minh cách chúng ta cả trăm năm ánh sáng, chúng ta có quyền gì để nói rằng họ cũng đang có một Youtube, một Facebook, một Apple, một hệ thống thu phát sóng điện từ ngoài vũ trụ như ta?</p><p><b><i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Và đó cũng là lý do vì sao yếu tố cuối cùng quan trọng đến như vậy. </i></b></p><p>&nbsp;Thời gian, nó không chỉ chi phối sự tồn tại của nền văn minh ngoài vũ trụ mà còn đặt chúng ta vào một bộ khung khổng lồ của sự sống. Con người mất bao lâu để có thể đặt chân lên mặt trăng? Con người mất bao lâu để có thể biến từ một loài săn bắt hái lượm thành những sinh vật thông minh biết nhảy nhót trước chiếc điện thoại? Bao lâu nữa thì chúng ta gặp sự cố như loài khủng long? Nếu nền văn minh vũ trụ sinh ra ở ngôi sao gần chúng ta nhất, Proxima Centauri, một lời chào họ gửi tới chúng ta sẽ phải mất 4,5 năm mới tới nơi. Và để đáp lại họ, chúng ta sẽ mất gần 10 năm. Chúng ta không thể không nhắc tới sự giãn nở của vũ trụ và những cản trở nó đưa ra dành cho liên lạc xuyên vì sao. Nếu nền văn minh vũ trụ cách chúng ta xa hơn, ở đâu đó cách đây 100 năm ánh sáng, họ có thể gửi lời chào tới chúng ta lúc ta còn đang ở đây và khi họ nhận lại lời đáp thì ta đã trải qua 2 cuộc thế chiến rồi. Vậy nếu nền văn minh đó cách chúng ta cả triệu năm ánh sáng thì sao? Họ gửi lời chào tới chúng ta và kỳ vọng khủng long đáp lại sao? Hay họ gửi lời chào tới khủng long và mong con người đáp lại? Cuộc gọi Facetime xuyên vũ trụ nghe có vẻ thú vị nhưng nó thực sự là một khoảng cách xa tới mức tuyệt vọng. Kể cả khi chúng ta có tìm được nền văn minh tương tự như ta đi chăng nữa, chuyện liên lạc với họ cũng không thể nào được khẳng định. </p><p><b><i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Đến đây, ta có thể tổng kết lại phương trình của Drake dưới một câu như sau:</i></b></p><p><b><i></i></b>Để xác định được nền văn minh vũ trụ, ta cần tìm ngôi sao có hệ hành tinh, chứa hành tinh nằm trong vùng an toàn, hành tinh đó cần phải có đủ khả năng duy trì và nuôi dưỡng sự sống sao cho nó có thể tiến hóa thành sự sống văn minh, phát triển được công nghệ thu phát vũ trụ và có khả năng liên hệ được với chúng ta trong khoảng thời gian hợp lý. Nếu câu vừa rồi không khiến bạn tuyệt vọng trong việc tìm sự sống ngoài hành tinh thì tôi không biết phải nói sao nữa. Cơ may nào để trong tiểu số các ngôi sao chứa đựng hệ hành tinh ngoài kia có hành tinh nào đó có khả năng chứa sự sống? Cứ cho rằng nó có thể chứa sự sống đi, nó sẽ là sao Hỏa, sao Kim hay là Trái Đất? Cứ cho rằng nó là Trái Đất đi, chúng ta có dám chắc rằng chúng sẽ có sự sống không? Rồi cứ cho rằng nó có sự sống đi, chúng có khả năng sống sót không hay sẽ như loài khủng long? Rồi cứ cho rằng sự sống sẽ có cách để trỗi dậy và phát triển, trở thành loài sinh vật thông minh và biết xây dựng nền văn minh đi, cơ may nào để chúng có thể phát triển công nghệ vũ trụ? Rồi cứ cho rằng chúng có công nghệ vũ trụ đi, cơ may nào để chúng tồn tại trong khoảng thời gian mà ta có thể liên lạc được?\n\n</p>', 96, 'Chúng ta có đơn độc trong vũ trụ này không? Câu trả lời dù có hay không vẫn luôn khiến ta phải rùng mình. Nếu ta là những kẻ duy nhất,...', NULL, 'https://images.pexels.com/photos/5558236/pexels-photo-5558236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 4, 1, 0, '2023-11-17 16:27:08.575000', 0);
INSERT INTO `blog` VALUES (214, 'Đưa Trí Tuệ Việt Ra Thế Giới Qua Những Sản Phẩm Công Nghệ', '<p>Trong tập đầu tiên của Behind The “C”, chúng ta sẽ cùng host Việt Anh gặp gỡ anh Nguyễn Tuấn Anh - Founder và Chủ tịch của Công ty Cổ phần Lumi Việt Nam.&nbsp;</p><p>Là một sinh viên Bách Khoa với nhiều hoài bão, hành trình xây dựng Lumi Việt Nam của anh Tuấn Anh đã bắt đầu từ năm 2012. Trải qua nhiều thăng trầm, Lumi Việt Nam hiện đã khẳng định vị thế của mình ở trong nước, đồng thời đưa công nghệ Việt Nam vươn xa thị trường Thế giới, sánh vai với các cường quốc công nghệ như Nhật Bản, Hàn Quốc, Châu Âu, Mỹ.</p><p>Vậy hành trình hơn 10 năm đó đã diễn ra như thế nào? Đâu là những bài học và thất bại? Những kỷ niệm đáng nhớ xuyên suốt hành trình của một doanh nhân hàng đầu thuộc lĩnh vực sản xuất là gì?</p><blockquote>\"Học giỏi là biết giải quyết các vấn đề đã có đáp án, còn làm giỏi là biết giải quyết các vấn đề xã hội chưa có lời giải\"<br><br></blockquote> - <p><b>Host Việt Anh</b>: “Một số người hay cho rằng giữa Học và Làm không liên quan gì đến nhau. Hay là Học Giỏi thì chưa chắc đã Làm Giỏi. Trong trường hợp của anh, thì việc học giỏi có giúp đỡ gì trong quá trình xây dựng và phát triển Lumi không?”<b>Khách mời Nguyễn Tuấn Anh</b>: Giữa việc <b>Học Giỏi</b> và <b>Làm Giỏi</b> thì mình thấy khác ở rất nhiều chỗ.&nbsp;&nbsp;</p><p><b>Khách mời Nguyễn Tuấn Anh</b>: Giữa việc <b>Học Giỏi</b> và <b>Làm Giỏi</b> thì mình thấy khác ở rất nhiều chỗ.&nbsp;&nbsp;</p><p><b>Học Giỏi</b> là mình phải giải quyết những vấn đề đã có cái đáp án rồi. Tức là nếu giờ mình không giải được thì mình cũng có thể tìm lời giải từ người khác.&nbsp; &nbsp;</p><p>&nbsp; Còn <b>Làm Giỏi</b> có nghĩa là mình làm tốt những vấn đề mà có khi xã hội còn chưa ai giải chẳng hạn. Hay lời giải này có thể đúng ở thời điểm này, hoặc đúng thời điểm kia. Cái việc làm giỏi thì mình nghĩ phụ thuộc vào rất nhiều yếu tố, nó không hẳn là học giỏi đâu. Học giỏi một phần sẽ giúp tiếp thu kiến thức nhanh hơn, hay là tìm kiến thức nhanh hơn. Nhưng để đưa ra quyết định hay hợp tác và làm việc với nhau, cùng rất nhiều thứ khác thì mình nghĩ chỉ học giỏi thôi lả chưa đủ.&nbsp;&nbsp;</p><blockquote>Các em có quyền sai cho những thứ mình chưa gặp phải, nhưng không được lặp lại những thứ sai đó</blockquote> - <p>Khi được hỏi đâu là những điều cần lưu ý trong việc xây dựng bộ máy nhân sự trẻ, anh Tuấn Anh - Founder &amp; Chủ tịch Lumi Việt Nam đã chia sẻ rằng hãy cho các bạn ấy được quyền thử và sai, nhưng kèm theo đó là việc phát triển khả năng “Đúc Kết” ở mỗi người. Bởi việc này không chỉ giúp doanh nghiệp tránh lặp lại cùng một sai lầm, mà còn giúp phát triển năng lực của chính nhân sự trẻ.</p><p>Bởi lẽ, kiến thức, kinh nghiệm, bài học từ những thất bại sẽ chẳng có ý nghĩa gì nếu chúng ta không thể biến chúng thành những ghi chép cho bản thân. Nếu không hiểu tại sao mình thất bại, bạn sẽ không biết mình cần làm gì để thành công.</p><blockquote>Bí quyết thành công chẳng có cái gì to tát cả. Nó chỉ đơn giản là sự kiên trì và tốt hơn mỗi ngày</blockquote> - <p>Trong một bối cảnh hàng loạt các startup thất bại sau một vài năm đầu, thì một trong những định nghĩa về “thành công” khi khởi nghiệp chính là khả năng tồn tại liên tục. Khi đối mặt với những chông gai khi xây dựng doanh nghiệp, người chủ cần có khả năng giúp cho bộ máy của mình thích nghi với những biến chuyển xung quanh. Doanh nghiệp cần phải “sống” trước khi nghĩ đến những ý tưởng đột phá. Và chỉ khi tồn tại, doanh nghiệp mới có cơ hội để phát triển và tốt hơn mỗi ngày.</p><blockquote>Chúng ta hoàn toàn có khả năng đưa những sản phẩm được làm bởi người Việt ra biển lớn. Đấy là điều chắc chắn!</blockquote> - <p>Trả lời về hành trình bán hơn 10,000 sản phẩm bình nước nóng hẹn giờ tự động cho Isreal, anh Tuấn Anh nhấn mạnh rằng trí tuệ của người Việt không hề thua kém các quốc gia khác. </p><p>Tuy nhiên, để có thể đưa những sản phẩm chất lượng qua biên giới, chúng ta cần phải có trong mình một tinh thần học hỏi khônh ngừng nghỉ. Ngoài nâng cao chuyên môn, những doanh nhân còn cần phải liên tục học hỏi, tìm hiểu về khách hàng, thị trường, bản sắc ở những đất nước ngoài kia. </p><p>Vừa rồi chỉ là một vài trích đoạn ý nghĩa từ buổi nói chuyện của anh Tuấn Anh trong tập 1 series podcast Behind The C. </p><p>Không chỉ mang lại những chia sẻ về hành trình khởi nghiệp trong ngành sản xuất và công nghệ, anh Tuấn Anh còn mang tới những lời khuyên giúp các bạn trẻ có thể trở thành những phiên bản tốt nhất của mình. </p><p>Vẫn còn rất nhiều chia sẻ chất lượng khác của anh đang chờ bạn lắng nghe. </p><p>Vừa rồi chỉ là một vài trích đoạn ý nghĩa từ buổi nói chuyện của anh Tuấn Anh trong tập 1 series podcast Behind The C. </p><p>Không chỉ mang lại những chia sẻ về hành trình khởi nghiệp trong ngành sản xuất và công nghệ, anh Tuấn Anh còn mang tới những lời khuyên giúp các bạn trẻ có thể trở thành những phiên bản tốt nhất của mình. </p><p>Vẫn còn rất nhiều chia sẻ chất lượng khác của anh đang chờ bạn lắng nghe. </p><p>Bạn có thể xem podcast cùng anh Nguyễn Tuấn Anh tại ĐÂY nhé: Bạn cũng có thể lắng nghe phiên bản audio của chuỗi podcast Behind The C, cũng như cập nhật những nội dung mới nhất tại:</p>', 96, 'Đến với tập 1 của Behind The C, chúng ta sẽ gặp gỡ anh Nguyễn Tuấn Anh, một người đang tiên phong trong lĩnh vực công nghệ và sản xuất tại Việt Nam', NULL, 'https://images.pexels.com/photos/2421953/pexels-photo-2421953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 4, 1, 4, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (216, 'Giỏi hơn thì phải…\n', '<p><i>Không ai là hoàn hảo hết, chỉ là chúng ta chưa biết điểm mạnh của chính mình. Đừng buồn bã khi có người cười chê rằng mình học dở hay mình lười. Bạn sẽ trở thành thiên tài thật sự nếu bạn biết điểm mạnh của mình ở đâu. Từ đó bạn sẽ tạo ra khác biệt đột phá so với đa số những người còn lại.</i></p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700213766/kkcjtq6gu1zbt0fpa69x.png\" alt=\"Otto Wallach\" /><p>Khi còn học cấp 2, Otto Wallach là một học sinh bình thường. Được cha mẹ kỳ vọng là sau này sẽ trở thành một nhà văn. Nhưng cuối học kỳ, kết quả của Otto không được như những gì cha mẹ mong đợi. Cô giáo đã phê: \"Wallach rất chăm chỉ, nhưng lại quá cứng nhắc, khó theo đuổi văn chương được\". Và sau đó Otto được cha mẹ cho theo học làm họa sĩ, nhưng không hề có tí năng khiếu nào về hội họa. </p><p>Thất vọng rồi lại thất vọng, Otto chỉ có niềm cảm hứng với Hóa học, nhưng vào thế kỉ 19 Hóa học vẫn là một ngành Khoa học trẻ và nhiều người vẫn cho rằng nó không có tiềm năng. Nhận thấy sự cố gắng của Otto cô giáo dạy Hóa đã cố gắng và kiên trì dạy dỗ Otto từng chút một và đề nghị cậu chuyên tâm vào Hóa học. </p><p>Đến năm 1910, Otto Wallach  đã được trao giải thưởng Nobel Hóa học sau những đóng góp trong ngành Hóa học hữu cơ và Công nghiệp hóa học, khi đó ông 63 tuổi.&nbsp;</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700213796/dm6onjmarvtg2fjhpemr.png\" alt=\"THIÊN TÀI đến từ sự đơn giản\" /><p>Câu chuyện của Otto Wallach đã cho ra đời một hiệu ứng tâm lý mang tên ông: “Hiệu ứng Wallach”. Chúng ta ai ai cũng có trong mình những ưu nhược điểm hết. Bạn là một người ca sĩ tài ba nhưng không có nghĩa là bạn sẽ nấu ăn ngon. Một họa sĩ giỏi cũng chưa chắc là sẽ đàn giỏi. Trí thông minh của mỗi người về cơ bản là không đồng đều, thế nên hãy khám phá ra điểm mạnh của chính mình thật sự rất cần thiết. Vì với thời đại ngày nay hầu hết mọi ngành, nghề đều có thể kiếm sống được, việc phát hiện ra ngách mà mình yêu thích, có thể phát triển được sẽ giúp chúng ta tạo ra sự khác biệt. THIÊN TÀI chẳng là gì cao siêu hết, chỉ đơn giản là ưu điểm của mỗi người có làm chủ được nó, hãy nắm bắt ưu điểm đó, rèn luyện mỗi ngày để đạt đến trình độ đỉnh cao. Khi đã thực sự làm chủ được ưu điểm của mình, thì bạn đã trở thành THIÊN TÀI rồi đó.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700213812/qxw6icodc5ynftencbz1.png\" alt=\"Muốn thành công thì phải có thầy\" /><p>Muốn thành công thì phải có thầy, chẳng ai trên đời này giỏi mà không cần đến người dạy giỏi hết. Bản thân tôi muốn trở nên giỏi hơn thì cần phải có 2 ông thầy. Người thầy đầu tiên đó chính là người mà có thể giúp bạn học được nhiều điều nhất, người thứ hai đó chính là bản thân các bạn. Vì sao tôi nói như vậy hả? Để tôi giải thích nè:</p><p>Người đầu tiên: Đây sẽ là người truyền cảm hứng cho các bạn, những bài học kinh nghiệm của cá nhân họ cũng như là người sẽ định hướng và hỗ trợ các bạn rất nhiều trên con đường tìm kiếm sự thành công. </p><p>Bản thân các bạn: Một ông thầy luôn cảnh báo, nhắc nhở chúng ta những deadline cần phải thực hiện sắp tới. Một ông thầy nghiêm khắc và đề cao tính kỉ luật. Không có tính kỉ luật chúng ta sẽ không giỏi hơn được.</p>', 96, 'Không ai là hoàn hảo hết, chỉ là chúng ta chưa biết điểm mạnh của chính mình. Đừng buồn bã khi có người cười chê rằng mình học dở hay...', NULL, 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 4, 1, 0, '2023-11-17 16:37:41.012000', 0);
INSERT INTO `blog` VALUES (217, 'Làm thế nào để dịch một bài báo Tiếng Anh hay hơn?', '<p>Trước khi bắt đầu vào nội dung chính, thì đây là 1 phút giải trí:</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700213989/qub2xh4ffpsh6xqe6dcy.png\" alt=\"Mình sẽ để đây và không nói gì thêm :))&nbsp;\" /><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700214005/slaeszl7csh49hcg6xll.png\" alt=\"Mình sẽ để đây và không nói gì thêm :))&nbsp;\" /><p>Bạn đọc được báo nước ngoài nói chung và báo Tiếng Anh nói riêng đã là một lợi thế đáng kể, song nếu bạn có khả năng dịch lại chúng \"nuột nà\" sang Tiếng Việt thì điều đó còn có ý nghĩa lớn hơn nhiều. Một là bạn sẽ phải ép mình hiểu bài báo đó đến một tầm sâu thực sự, hai là bạn đang góp phần chia sẻ những kiến thức hữu ích của thế giới cho người Việt. Ba là, bạn sẽ không tạo ra những thảm hoạ như tấm ảnh trên đây.</p><p>Tóm lại, dịch là một hoạt động lý thú :)</p><p>Bài viết này không nhằm hướng dẫn tất cả các kỹ thuật dịch thuật - vì bản thân mình tự nhận là không phải chuyên gia trong lĩnh vực này. Thay vào đó, nó sẽ tổng hợp các lưu ý cơ bản mà mình tin là tất cả mọi người đều có thể áp dụng được, và À&nbsp;Ồ Hoá ra là vậy. Sau cùng thì, bạn không nhất thiết phải trở thành chuyên gia để có thể dịch, nhưng việc cố gắng để dịch hay hơn mỗi ngày bản thân nó đã là một niềm vui rồi đúng không?</p><p>Đây là việc cực kỳ quan trọng để giúp mọi người diễn đạt trôi chảy hơn thay vì dịch tin một cách máy móc, word-by-word. Trước khi bắt tay vào dịch hãy đọc lướt qua nội dung bài Tiếng Anh một lần, nếu có các thuật ngữ khó hiểu thì cũng nên search qua Google để hiểu bản chất của nó.&nbsp;</p><p>Nếu câu gốc là câu ghép có nhiều vế phức tạp, nên tách thành các câu đơn gọn gàng súc tích hơn.&nbsp;Ví dụ:I’ve been doing these almost every week since 1991, starting at the Wall Street Journal, and during that time, I’ve been fortunate enough to get to know the makers of the tech revolution, and to ruminate — and sometimes to fulminate — about their creations.Khi dịch nên tách câu như sau:&nbsp;Từ năm 1991 tới nay tôi luôn chắp bút cho những chuyên mục công nghệ hàng tuần - bắt đầu với tờ Wall Street Journal. Trong suốt khoảng thời gian đó, tôi thực sự đã rất may mắn khi biết tới những tên tuổi hàng đầu của cuộc cách mạng công nghệ, để rồi nghiền ngẫm và đánh giá những thành tựu của họ.</p><p>Dịch bài xong cần đọc lại và loại bỏ đi những từ \"rằng\", \"thì\", \"là\", \"mà\". Đây là một lỗi cực kỳ điển hình của các tay dịch non.&nbsp;</p><p>Thường các bạn dịch mệnh đề quan hệ dạng “..., which…” thành “..., cái mà…”, nhưng tốt nhất là hãy viết lại câu đó để ý xuôi hơn.&nbsp;Ví dụ:Blackberry, which today has exactly 0 percent market share, peaked at 20 percent in 2009.Dịch non:&nbsp;Blackberry, công ty mà ngày nay không có % thị phần nào, đã đạt đỉnh tới 20% vào năm 2009.Nên dịch là:Dẫu hiện tại Blackberry đã không còn chút ảnh hưởng gì trong ngành này, vào thời hoàng kim của mình năm 2009 họ đã từng nắm giữ tới 20% thị phần.Hoặc:&nbsp;Dẫu giờ đây Blackberry đã hoàn toàn biến mất trên bản đồ của ngành này, họ đã từng là một “ông lớn\" với 20% thị phần vào năm 2009…Tất nhiên để dịch “bay” được thì phải hiểu rõ nội dung và ngữ cảnh của bài viết.</p><p>Tiếng Anh khá chuộng thể bị động hoặc chủ ngữ giả (“It”), trong khi Tiếng Việt lại thường diễn đạt theo lối chủ động. Cách dịch hay nhất là tự biến nó thành văn của mình thay vì dịch theo bài gốc.Ví dụ:It is likely that within a decade, devices become more and more interchangeable, less expensive, more powerful.Dịch non:&nbsp;Nó gần như chắc chắn rằngtrong vòng một thập kỷ tới, các thiết bị sẽ ngày càng trở nên dễ thay thế lẫn nhau hơn, rẻ hơn và mạnh mẽ hơn.&nbsp;Nên dịch là:&nbsp;Trong vòng một thập kỷ tới, các thiết bị chắc chắn sẽ có khả năng thay thế lẫn nhau dễ dàng hơn, rẻ và siêu việt hơn.</p><p>Theo (ông/bà) nào đó; Bởi vì (lý do) nào đó…&nbsp;Trong một số trường hợp nên đổi vế trạng ngữ này lên đầu câu để khiến cho bài tự nhiên hơn.&nbsp;Ví dụ:The company plans to take further action by working to raise awareness birds in the region, according to the Houston Audubon Society.Nên dịch là:Theo Hiệp hội Audubon, công ty đã lên kế hoạch cho các biện pháp sắp tới nhằm nâng cao nhận thức về loài chim trong khu vực.</p><p>Dường như, Tuy nhiên, Thực tế là…&nbsp;Nên thêm các từ nàysao cho phù hợp với ngữ cảnh giữa các đoạn văn. Văn phong Tiếng Anh thường khá cô đọng, nên nếu bê y nguyên sang Tiếng Việt thì giữa các đoạn văn đôi khi sẽ có cảm giác thiếu liên kết. Để giải quyết vấn đề này ta có thể thêm các từ nối, miễn là không ảnh hưởng tới nghĩa gốc.&nbsp;</p><p>Đừng cố gắng dịch những thứ này kiểu word-by-word vì sẽ chẳng ai hiểu gì khi bạn dịch chúng sang Tiếng Việt cả. Ví dụ “a storm in a teacup\" trong Tiếng Anh sẽ không thể dịch là “một cơn bão ở trong tách trà\" mà phải tương đương với “chuyện bé xé ra to\" trong Tiếng Việt.&nbsp;</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700214055/lhztcjg1cl8p3mm1gjhb.png\" alt=\"Đúng nha&nbsp;\" /><p>Tương tự như vậy, những cụm từ, thuật ngữ đặc biệt mà bạn đoán là đã có từ Tiếng Việt tương đương rồi thì hãy thử Google theo kiểu [Từ Tiếng Anh] là gì. Ví dụ “Virtual Reality là gì\" thì chắc chắn sẽ tìm thấy nghĩa của nó trong Tiếng Việt là “Thực tế ảo\", từ này đã thông dụng rồi và đừng nên phát minh lại cái bánh xe làm gì.&nbsp;</p><p>Không phải khái niệm nào trong Tiếng Anh cũng có một từ Tiếng Việt tương đương, hoặc nếu có thì chúng còn khá xa lạ với độc giả phổ thông.&nbsp;Ví dụ như trong bài có xuất hiện từ “millennials” - “thế hệ Y”, thì ta cũng nên mở ngoặc giải thích thêm nghĩa của khái niệm này vì có thể nhiều người Việt chưa biết Thế hệ Y là gì. (Nếu bạn nào chưa rõ, thì Millennials là từ chỉ thế hệ nhóm những người sinh ra từ khoảng những năm 1980 tới những năm 2000, trong thời đại công nghệ và truyền thông xã hội phát triển bùng nổ).</p><p>Có 2 trường hợp. Nếu bài báo khá khách quan và sử dụng ít ngôi “I\" trong nội dung thì nên viết lại những đoạn sử dụng ngôi thứ nhất này bằng lối viết khách quan, không dùng “tôi\". Với những bài viết thể hiện nhiều quan điểm tác giả không thể bỏ “tôi\" được, thì dịch lại nguyên ngôi thứ nhất nhưng hãy bổ sung một câu giới thiệu ở đầu hoặc cuối bài:“Đây là bài viết của ông/bà… hiện đang là chuyên gia/nhà báo mảng XYZ tại ABC...\"Nguyên tắc này áp dụng cho các bạn dịch bài cho báo/trang tin. Các bạn dịch cho vui thì tuỳ.&nbsp;</p><p>Chỉ một chút thôi, đừng lạm dụng! Cái này áp dụng được khi bạn là một tay dịch cứng, hoặc hiểu sâu nội dung cần dịch.&nbsp;Ví dụ dưới đây là một tiêu đề bài viết gốc. Bài viết này tổng hợp lịch sử của ngành công nghệ và dự đoán tương lai của nó, do tay viết kỳ cựu Mossberg, người luôn chắp bút cho các chuyên mục công nghệ của The Verge thực hiện. Đây cũng là bài báo cuối cùng của ông.<a href=\"https://www.recode.net/2017/5/25/15689094/mossberg-final-column\" target=\"_blank\">Mossberg: The Disappearing Computer</a>Hiểu được bối cảnh như thế, thì bạn sẽ dịch lại tít bài này thế nào?Phương án 1: Chiếc máy tính biến mất, hay hành trình của công nghệ và loài người chúng taPhương án 2: Bài viết cuối cùng của tay viết huyền thoại trên The Verge: \"Máy tính xa dần\"!Bạn thấy phương án nào hay hơn ;)?Đương nhiên là để dịch tốt thì bạn phải am hiểu ngữ pháp và văn phong của Tiếng Anh lẫn Tiếng Việt. Nếu không có tố chất nhạy cảm về ngôn ngữ, thì cứ làm nhiều, đọc nhiều, dịch nhiều sẽ quen.&nbsp;Trên Spiderum có rất nhiều anh tài về dịch thuật, nên mình sẽ open bài viết này và edit thêm khi có những góp ý chất lượng.&nbsp;Chúc các bạn dịch bài vui vẻ :D Xem thêm một số bài dịch khác trên \n\n</p>', 96, 'Trước khi bắt đầu vào nội dung chính, thì đây là 1 phút giải trí: Mình sẽ để đây và không nói gì thêm :)) Bạn đọc được báo...', NULL, 'https://toomva.com/tai-lieu/uploadtvcu/dang-cau-hoi-how.jpg', 0.00, 5, 1, 0, '2023-11-17 16:41:26.575000', 0);
INSERT INTO `blog` VALUES (218, '[Thơ] Muốn gì được nấy\n', '<img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700214126/r83rnhnelxksvckkcs8m.png\" alt=\"Image\" /><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Ai muốn mình thay đổi,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Đời ắt sẽ đổi thay</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Ai muốn mãi thế này</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Ắt thấy đời như cũ. &nbsp;&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cớ sao phải ủ rũ,</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Khi đời đúng ý mình?</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Phải thấy mình thật kinh:</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Muốn gì là được nấy!&nbsp;&nbsp;</p>', 96, 'Ai muốn mình thay đổi, Đời ắt sẽ đổi thay. Ai muốn mãi thế này, Ắt thấy đời như cũ. Cớ sao phải ủ rũ, Khi đời đúng ý mình? Phải...', NULL, 'https://images.pexels.com/photos/7150986/pexels-photo-7150986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 5, 1, 0, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (219, 'Cái tôi nhỏ bé đáng thương\n', '<p>Cái tôi nhỏ bé đáng thương,</p><p>Làm quá nhiều chỉ để thấy mình có giá:</p><p>Bày mưu tính kế,</p><p>Rào trước đón sau,</p><p>Tỏ vẻ lung linh,</p><p>Nguỵ trang độc lập,</p><p>Khoác lên mình thứ tâm linh cao cấp,</p><p>Cũng chỉ hòng cầu xin sự chú ý về mình</p><p>Cái tôi nhỏ bé đáng thương,</p><p>Khi từng lớp ngụy trang vỡ dần, tan nát,</p><p>Nó thấy mình đang ngập trong bãi rác,</p><p>Chỉ toàn đớn đau, ai oán tột cùng!</p><p>Chẳng còn tưởng mình là ai đó linh lung,</p><p>Nó thấy mình rặt toàn giả dối</p><p>Đầy nghi kỵ, tham lam, lẫn oán hờn</p><p>Tưởng cao quý thế nào, nhưng thật ra chỉ là kẻ ăn mày, không hơn</p><p>Tỏ vẻ ban ơn, nhưng thật ra chỉ để ngấm ngầm đòi hỏi</p><p>Nhận được thì ngạo nghễ, không được thì trách hờn</p><p>Tình yêu là gì? Cái tôi nhỏ bé chạy vạy van lơn</p><p>Phóng cái tôi to tới tận trời mà vẫn tìm chẳng thấy</p><p>Rồi ai oán nổ tung </p><p>Rơi rớt khắp trời</p><p>Cái tôi vỡ rồi...</p><p>Từng mảnh một rơi</p><p>Vỡ tan như thủy tinh sắc nhọn</p><p>Bé mọn tột cùng...</p><p>Cái tôi nhận ra mình thật nhỏ bé đáng thương</p><p>Làm quá nhiều chỉ để thấy mình có giá</p><p>Thất vọng về mình, thấy sao mỏi mệt quá</p><p>Chẳng tha thiết muốn làm gì...</p><p>Tình yêu là gì? Cái tôi cũng lười chẳng muốn nghĩ suy</p><p>Chỉ biết mình chẳng yêu ai chân thật</p><p>Chán vào vai, chẳng tha thiết làm gì...</p>', 96, 'Làm quá nhiều chỉ để thấy mình có giá:\n\n', NULL, 'https://cdn.24hmoney.vn/upload/images/2022-3/article_avatar_img/2022-08-30/cai-toi-trong-tinh-yeu-la-gi-720-1661826711-width497height280.jpg', 0.00, 5, 1, 0, '2023-11-17 16:45:50.628000', 0);
INSERT INTO `blog` VALUES (220, 'Podcast: Chênh vênh giữa dòng đời', '<p>Em đã trôi tới đây rồi... </p><p>Trôi trên một dòng sông man mác, êm ấm và bồng bềnh. </p><p>Đã bớt cuồn cuộn thúc giục và vội vã, em nằm yên trên chiếc lá. Em mệt rồi, nào có sức để bơi hay chèo thật mau nữa. Em ngủ đêm, ngủ sáng, ngủ chiều,... phó mặc mình cho dòng chảy, tin rằng trong khi em ngủ, mọi sự đã được an bài. Em nghỉ ngơi đây, chẳng gắng sức nữa đâu, vì cũng chẳng còn chút sức lực nào. </p><p>Gió mơn man quanh tóc em, vờn nhẹ. Nắng chiều nhẹ nhàng hôn lên má em, tưới lên má em chút màu lựu đỏ. Một chú cá nhảy lên khỏi mặt nước rồi rớt xuống, làm nước bắn lên chiếc lá. Mắt vẫn nặng nề, díu diu nhưng em đã tỉnh. Em hé mắt nhìn. Ánh sáng làm em lóa mắt. Từ trên cao rơi xuống một chiếc lá vàng, nhẹ nhàng chao liệng rồi rớt vào tay em. </p><p>Đã tới đâu rồi nhỉ? Em cũng không biết nữa!! Hình như bão tố đã qua rồi. Trời nắng đẹp, và hai bên bờ sông là những bãi bồi thoai thoải, toàn bụi rậm, cỏ dại và hoa thơm. Chiếc lá đang chở em đi trên sông đã hơi rách viền nhưng vẫn còn chắc chắn. Nước dập dềnh lên xuống, không còn dữ dội như những ngày bão tố, nhưng cũng chưa tính là yên ả. Còn em vẫn chưa thấy bến đậu nào dành cho mình. Cứ trôi thôi... Thả lỏng nào... Em tự nhủ... chỉ cần dùng sức vừa đủ để không rơi khỏi chiếc lá là được rồi. </p><p>Một con chim xanh chao liệng ngang trời. </p><p>Em nhìn theo bóng dáng của nó và thầm nói với lòng: </p><p>Ngày nào đó, em sẽ bay đi như cánh chim kia. </p><p>Ngày nào đó...</p><p>🎋Tản mạn này là một phần trong Majita Podcast Ep 02: Chênh vênh giữa dòng đời của mình. Mời bạn lắng nghe cùng mình nhé:</p><p>🎈Youtube:&nbsp;&nbsp;https://www.youtube.com/watch?si=Q-K2y_drGxPtHsar&amp;v=jtQ7UNdhRFY&amp;feature=youtu.be</p>', 96, 'Người muốn sống bình thường chợt nhận ra sự bất thường mới là lẽ thường của cuộc sống\n\n', NULL, 'https://amis.misa.vn/wp-content/uploads/2023/01/podcast-marketing-10.jpg', 0.00, 5, 1, 0, '2023-11-17 16:48:19.246000', 0);
INSERT INTO `blog` VALUES (221, 'Bố - người đàn ông thực thụ\n', '<p>Hôm nay cô nhớ bố, bố cô mất cũng đã sắp tròn ba năm, đây cũng chuẩn bị là thời gian bố được giải thoát linh hồn thực sự. Cô nhớ về hình ảnh người đàn ông thật thụ, người mà cô chưa thể tìm kiếm trong chương 27 hiện tại của mình.</p><p>Bố cô là dân lái xe đường dài chạy vào Nam ra Bắc, nghề chính của bố giúp nuôi sống gia đình chính là nghề lái xe. Hồi xưa học cấp 2 cô xấu hổ về điều này lắm, nhưng bây giờ cô rất tự hào về bố. Cô yêu bố của mình, một người đàn ông không thể phai nhoà trong kí ức của mình.</p><p>Vì tính chất công việc của mình, bố không thể lúc nào cũng can thiệp vào việc dạy con cái, đến thời điểm hiện tại cô cũng đang thấy mình thiếu đi tình yêu thương của người bố. Nên những cuộc tình gần đây cũng đều là gốc rễ của mọi chuyện, đó là cô đều thấy kích thích về giống loài khác biệt này.</p><p>Bố cô là một người lạnh lùng, tiêu cực, có cái tôi cao ngạo, sống rất bản lĩnh, tài giỏi, khéo léo, có mưu lược. Sự lèo lái của bố trong cuộc đời là một việc khiến cô vẫn luôn tự hào.&nbsp;</p><p>Trong kí ức nhỏ bé của mình, cô chỉ nhớ hồi mới lên tiểu học, khi bố lái xe đường dài về, cô có gọi vọng hỏi mẹ một câu là bố đâu rồi, sao gần đây cô chẳng thấy bố. Mẹ cô nói lại với bố, bố nghe thấy và nở lại nụ cười vui sướng và tự hào.</p><p>Lúc đó cô hiểu mình là một đứa con cưng của bố, một đứa con mà bố luôn dành phần tình cảm nào đó, chắc một phần cô cũng là con út nữa</p><p>Ngay những lúc viết những dòng này, nước mắt cô lại từ từ chảy xuống, vì nó lại khiến cho cô nhớ tới ánh mắt trước khi chết của bố. Tiếng khóc nấc nghẹn ngào, âm thầm và nói rằng bố đi đây. Cô vẫn nhớ hơi nóng nồng ấm toát ra từ bàn tay lạnh lẽo, nhưng mạch máu thoi thóp chuẩn bị thoát ra khỏi cơ thể yếu đuối.</p><p>Cô ngồi trong chiếc xe cấp cứu và trở bố vào viện, nhìn con số 11 gắn ở cửa sổ của chiếc ô tô, mà rồi cô tự hỏi sao mời còn trẻ vậy mà cô đã trải qua một chuyện lớn của đời người đến vậy rồi. Và từ ngày này cô sống sao khi đã mất đi một mảnh tình yêu to lớn vĩ đại trong tim.</p><p>Bố bị bệnh tim khi tuổi trung niên cập kê, rồi dần dà ảnh hưởng tới các bộ phận khác, lên tới thận, lên tới não rồi dẫn tới xuất hiện não vào ba năm trước.</p><p>Cô vẫn nhớ cái cảm giác gọi thất thanh lúc 4h sáng ngày hôm đó, tiếng gọi thảm thiết của mẹ bên cửa phòng đối diện, hình ảnh mặt bố tái mẹt, giọng cứ nấc lên vì cơn sốt huyết não, ánh mắt xưng húp, chân tay phù nề. Cả nhà cố gắng đưa bố vào bệnh viện cấp cứ khoa A9 của bệnh viện MB. Nhưng rồi vì bệnh thận nền, bố đã được bác sĩ trả về sau hai ngày nằm viện.</p><p>Cô vẫn nhớ hồi bé ngồi trên chiếc xe máy Dream phía trước, còn bố mua cho cô cây kẹo bông, rồi cô xé từng lớp kẹo, liếm láp trước cái gió Thu của Hà Nội, một cảm giác rất vui và hạnh phúc còn mẹ thì ngồi sau lầm bẩm thứ câu chuyện gì đó của người lớn. Cả gia đình ngồi cùng nhau lượn lờ lên Hồ Tây để ăn kem mạn đầu hồ. Nhìn lại cô đã có một tuổi thơ thật hạnh phúc, khi bố mẹ luôn cố gắng yêu cô một cách vô điều kiện.</p><p>Hôm nay ngồi nói chuyện với hai người đồng nghiệp đã từng làm cùng với cô ở công ty cũ. Anh đồng nghiệp cũ của cô nói rằng. Nếu đã là dân lái xe thì người ta phải sinh tồn. Người ta phải sinh tồn mỗi ngày.</p><p>Đúng là vậy, cô ngồi trong nhà, với mái ấm trên đầu nhưng lại luôn nguỵ biện cho sự yếu đuối của mình và víu vào nó với căn bệnh trầm cảm, rồi tự phó mặc rằng mình đau khổ trên đời, một bản thể yếu đuối mà cô nghĩ lại mình chẳng thể nào chấp nhận được chính mình. Còn bố cô đã hi sinh cho cô và gia đình cả cuộc đời để mua cho cô mọi thứ bằng mọi sức lực và số mệnh của mình. </p><p>Nào là chiếc máy tính đầu tiên khi vào đại học, lúc đó giá cũng gần 10tr đồng. Với đồng lương đi làm nhà nước thì đó là cả một sự nỗ lực rất lớn của bố, rồi tiếp theo bố lại mua cho cô một chiếc xe đạp điện để đi học hồi cấp ba có giá là 11tr. Cô nhớ lắm, và rồi khi bố mất đi, cô vẫn đang hằng ngày sử dụng chiếc xe bố để lại. Mỗi ngày cô đều vỗ về ôm ấp nó. Tu sửa khi em nó có vấn đề. Vì cô biết đấy là kỉ vật cuối cùng bố để lại cho cô khi còn sống. Chiếc xe đó là linh hồn cũng đang bảo vệ cô ngoài cuộc đời bão táp kia.</p><p>Có thể bố chẳng hề dành nhiều tình cảm bằng cử chỉ lời nói, nhưng bố vẫn luôn ở đó theo dõi cô, bảo vệ cô, che chở, yêu cô từ xa bằng những sợi dây kết nối vô hình mà cô chẳng thể nào giải thích được. </p><p>Từ khi bố mất, cô cũng đã tháo ra được lớp giáp của mình, là phải trở thành một người phụ nữ mạnh mẽ để tự lo lắng cho cuộc đời của mình. Bố cũng dạy cô cách phải trông cậy vào mình, vì cuộc đời mình mình phải tự lo liệu.</p><p>Nhưng cô lại thầm nghĩ:</p><p>“Bố ơi, nhiều khi con chỉ muốn tựa vào bố, để bố bảo vệ và che chở cho con.”</p><p>“Con biết bố không còn đó, nhưng mất đi bố là sự tổn hại quá lớn của gia đình.”</p><p>Con vẫn nhớ chiếc kiếm dưới gầm giường của bố, chiếc kiếm bố luôn để đó để bảo vệ gia đình, mặc dù con biết lưỡi kiếm đó chưa hề dính giọt máu nào, nhưng nhìn lại điều đó, con có thể hiểu bố đã có một quá khứ hào hùng như thế nào, bố đã hi sinh hết mình để kiếm sống nuôi dưỡng cho gia đình như thế nào.</p><p>Bố đã bị xã hội chà đạp, lợi dụng, bóc lột, đến tận cùng như thế nào. Cô thương và nhớ bố. </p><p>Cô cũng chẳng đủ bản lĩnh lúc đó để giúp đỡ bố, cô chỉ biết cố gắng kiếm tiền để chu cấp một ít nhỏ nhoi của bản thân lo tiền thuốc thang cho bố, cô chỉ ước quay lại thời gian và đừng quá ki bo để có thể cho bố được nhiều hơn nữa. Nhưng với một con bé ngây thơ của tuổi 23-24, thì cô biết bản thân cũng cố gắng hơn mỗi ngày rồi.</p><p>Cô tự ngầm nhủ:</p><p>“Con thật ích kỷ bố nhỉ, mà sao bố vẫn cứ bảo vệ con, bảo vệ con khỏi những người đàn ông tệ bạc.”</p><p>Cô chắp ghép lại mớ kí ức của mình, nhớ lại những lúc ngồi sau xe bố, bố tâm sự và nâng niu cô, bố chia sẻ về cuộc đời của bố với cô khi ông còn yếu đuối, thời còn nhập ngũ, thời đi bán kem, thời đi buôn giày trên chợ.</p><p>Bố cũng đã cố gắng vất vả tỉ thứ nghề để nuôi dưỡng cho con một ngôi nhà với thức ăn đầy ắp trong bụng. </p><p>Mà sự thật hiện tại cô lại chẳng mảy may biết ơn đến điều đó. Cô chỉ nhớ cô đã bị tát đúng một lần vì sự hỗn láo của tuổi trẻ, còn từ lúc đó bố chưa bao giờ đụng chạm đến cô. Bố chẳng nói yêu cô, bố chỉ cố gắng quan sát và trở thành một người đàn ông trong gia đình.</p><p>Cô cũng chỉ làm được bố vui vì những điều nhỏ xíu. Mà bây giờ cái kí ức mệt mỏi của cô chẳng còn thể dung nạp được chút nào nữa. </p><p>Đến khi bố cô chết, cũng chưa có một đứa con hoang tàn nào đến đòi chia tài sản, mở chiếc điện thoại cũ của bố cô cũng chẳng còn tin nhắn ẩn dấu, mọi thứ bố đều cất kĩ ở đâu đó mà chẳng bao giờ nạt nộ gia đình.</p><p>Nghĩ đến đây, cô lại thấy có lỗi vì sự đòi hỏi quá cao của mình, trong khi về bản chất cô đã có một gia đình từng hạnh phúc cho đến khi bố ra đi.</p><p>Nhưng mảnh kí ức rời rạc này, cũng chỉ là một cách tri ân tới bố của cô, vì bố cô là một hình tượng đàn ông cô tìm kiếm. Cô cũng lại tự chất vấn bản thân, mọi người chẳng ai hoàn hảo như vậy, chỉ là cô đang cố gắng sống trong kí ức của mình, kí ức đẹp đẽ và sống động đó khiến cho mọi thứ đều trở nên huy hoang và rực rỡ nhất. </p><p>Nhưng đó là những kỉ ức tưởng niệm, những kí ức tri ân cho những người đàn ông thực thụ mà thôi.</p><p>Chuyện còn dài, văn chắc cũng chỉ nên dừng ở đây, 58 năm cuộc đời không thể kể hết trong một trang viết.</p>', 96, 'Hôm nay cô nhớ bố, bố cô mất cũng đã sắp tròn ba năm, đây cũng chuẩn bị là thời gian bố được giải thoát linh hồn thực sự. Cô nhớ về...', NULL, 'https://images.pexels.com/photos/69096/pexels-photo-69096.jpeg?auto=compress&cs=tinysrgb&w=600', 0.00, 5, 0, 0, '2023-11-17 16:50:18.067000', 0);
INSERT INTO `blog` VALUES (222, '3 Chiến lược đầu tư trong chu kỳ Halving lần thứ 4 của Bitcoin năm 2024 - 2025', '<h2>Giảm một nửa Bitcoin là gì?</h2><p>Bitcoin Halving, tên gọi khác là “Halvening”, là nói đến một sự kiện được mã hóa sẽ xảy ra trong giao thức Bitcoin cứ sau 210.000 khối khai thác xong (khoảng bốn năm một lần). Đến thời điểm khối cuối cùng được khai thác, sẽ kích hoạt giao thức và có hai sự kiện lớn sẽ tự động được kích hoạt trong giao thức là:</p><p>Phần thưởng khai thác mỗi khối tiếp theo sẽ giảm xuống một nửa.Độ khó trong giao thức khai thác sẽ tăng gấp đôi làm cho mức độ đầu tư hạ tầng và chi phí cho hoạt động khai thác của thợ đào tăng cao.</p><p>Như vậy sau Halving thì phần thưởng mà người khai thác nhận được khi khai thác các khối mới cũng như xác thực các giao dịch blockchain sẽ giảm một nửa.</p><p>Cơ chế giao thức Halving này được thiết kế để kiểm soát việc phát hành bitcoin mới và duy trì sự khan hiếm của nó, do đó đảm bảo nguồn cung BTC không bị lạm phát.</p><p>Cứ sau một lần Halving (khoảng bốn năm một lần, được gọi là chu kỳ Halving), thì phần thưởng BTC được trao cho các thợ mỏ giảm một nửa. Cứ như vậy, nhiều chu kỳ diễn ra sẽ có tác động cấp số nhân đến độ khó, chi phí khai thác từ đó tác động rất lớn đến giá của Bitcoin trên thị trường.</p><p>Trong sách trắng Bitcoin ban đầu được xuất bản bởi bút danh Satoshi Nakamoto vào năm 2008, người ta đã xác định rằng Bitcoin có nguồn cung hữu hạn là 21 triệu Bitcoin. Cơ chế cung cấp cố định này được đưa ra để ngăn chặn lạm phát và tương tự như cơ chế tạo ra sự khan hiếm của kim loại quý như vàng. Bằng cách điều chỉnh tốc độ tạo ra bitcoin mới, giao thức này nhằm mục đích tạo ra một loại tiền tệ giảm phát có tiềm năng lưu giữ giá trị hoặc tăng giá theo thời gian.</p><p>Khi Bitcoin lần đầu tiên ra đời vào năm 2009, những người khai thác đã nhận được 50 BTC làm phần thưởng cho mỗi khối mới họ khai thác được.</p><p>Sự kiện Halving đầu tiên diễn ra vào năm 2012, phần thưởng BTC này đã giảm một nửa xuống còn 25 BTC.</p><p>Các đợt Halving tiếp theo vào năm 2016 và 2020 tiếp tục giảm phần thưởng xuống lần lượt là 12,5 và 6,25 bitcoin.</p><p>Lần Halving Bitcoin tiếp theo (Giảm một nửa lần thứ 4) sẽ giảm phần thưởng khối xuống còn 3.125 BTC và dự kiến ​​sẽ diễn ra vào tháng 4 năm 2024 (khi chiều cao khối đạt 840.000).</p><p>Dưới dây là bảng tính cho thấy chi tiết điều này diễn ra theo các chu kỳ Halving như thế nào:</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700215987/qwps86vbgkiqdrhqkb9k.png\" alt=\"Nguồn Binance\" /><h2>Tác động của mỗi chu kỳ Halving đến giá Bitcoin trong lịch sử như thế nào ?</h2><p><b>Bitcoin Halving có làm tăng giá BTC không?</b>Mặc dù các mô hình lịch sử cho thấy giá Bitcoin thường tăng sau các sự kiện halving, chúng ta nên lưu ý rằng xu hướng này không được đảm bảo và chúng tôi không dự đoán biến động giá trong tương lai. Xu hướng giá sẽ phụ thuộc vào hoàn cảnh xung quanh sự kiện Bitcoin Halving năm 2024, bao gồm yếu tố kinh tế vĩ mô, lạm phát, địa chính trị, xung đột cũng như những diễn biến khác.<b>Dưới đây là mức tăng giá BTC chứng kiến ​​sáu tháng sau halving:</b><b>Giảm một nửa đầu tiên.</b> (Ngày 28 tháng 11 năm 2012) Vào ngày halving, giá Bitcoin xấp xỉ 12 USD. Sáu tháng sau, khoảng ngày 28 tháng 5 năm 2013, giá đã tăng đáng kể lên khoảng 130 USD, cho thấy mức tăng đáng kể. Cuối cùng đạt ATH ở mức 1.108$/BTC. <b>Giảm một nửa lần thứ hai.</b> (Ngày 9 tháng 7 năm 2016) Giá của Bitcoin là khoảng 660 USD vào ngày halving. Vào khoảng ngày 9 tháng 1 năm 2017, giá đã tăng lên khoảng 900 USD, cho thấy sự tăng trưởng đáng kể về giá trị trong sáu tháng. Cuối cùng đạt ATH ở mức 19.007$/BTC.                                                                                                  <b>Giảm một nửa lần thứ ba</b>. (Ngày 11 tháng 5 năm 2020) Giá của Bitcoin xấp xỉ 8.600 USD vào ngày halving và tăng lên hơn 15.700 USD sáu tháng sau, vào khoảng ngày 11 tháng 11 năm 2020. Cuối cùng đạt ATH ở mức 66.945$/BTC.&nbsp;&nbsp;</p><p>Mô hình tăng giá sau Halving Bitcoin cho thấy, cứ sáu tháng sau sự kiện giảm một nửa phần thưởng khối, giá Bitcoin đã tăng đáng kể và sau đó đạt mức cao nhất mọi thời đại mới.</p><p>Hiểu rõ các chu kỳ Halving này, các nhà đầu tư có cơ sở kinh tế khoa học rất rõ ràng để tin rằng Bitcoin có khả năng rất cao sẽ tăng giá trị trong dài hạn. Điều này củng cố niềm tin và làm cơ sở để thiết lập mục tiêu, chiến lược đầu tư dài hạn mỗi lần Halving diễn ra.Sự kiện Halving Bitcoin đã diễn ra ba lần trong lịch sử và đều cho thấy những dữ liệu tăng trưởng tích cực của Bitcoin. Điều này củng cố cơ sở dữ liệu để các nhà đầu tư có thể dự đoán tương đối về hiệu suất cũng như khả năng tăng trưởng của Bitcoin trong lần Halving tiếp theo.Sự kiện Halving Bitcoin diễn ra sau mỗi bốn năm đã trở thành tâm điểm chú ý của toàn thế giới. Do đó, càng ngày Bitcoin càng thu hút sự chú ý cũng như thu hút dòng tiền đầu tư lớn hơn của các nhà đầu tư trên toàn thế giới.</p><p>Căn cứ vào dữ liệu lịch sử, chúng ta có thể đưa ra dự đoán hiệu suất tăng giá của Bitcoin trong lần Halving lần thứ 4 năm 2024 được không?Việc dự đoán giá Bitcoin sau mỗi chu kỳ Halving đã và đang là tâm lý chung của nhà đầu tư Bitcoin. Lịch sử tăng giá của các loại tài sản thường có tính chu kỳ và thường lặp lại với độ chính xác tương đối. Rất nhiều nhà đầu tư đều căn cứ vào lý thuyết này và thực tế họ đã rất đúng từ đó đạt được hiệu quả cao trong đầu tư Bitcoin cũng như vàng, bạc, chứng khoán, bất động sản.Dưới dây là dự đoán của</p><p>Hiểu rõ quy luật chu kỳ Halving Bitcoin cho phép chúng ta đặt ra chiến lược đầu tư hiệu quả theo từng giai đoạn của một lần Halving. Theo&nbsp;<a href=\"https://calebandbrown.com/blog/bitcoins-market-cycle/\" target=\"_blank\">Caleb &amp; Brown</a>&nbsp;Có bốn giai đoạn thay đổi giá của Bitcoin trong một lần Halving diễn ra như sau:<b>Giai đoạn 1 – Tích lũy</b>Xảy ra khi giá thấp nhưng xuất hiện những dấu hiệu tăng trưởng nhỏ. Người mua dài hạn sẽ tích lũy Bitcoin rẻ hơn. Thị trường có tâm lý giảm giá nên khối lượng giao dịch thấp và giá dao động trong biên độ hẹp, gần mức đáy.<b>Giai đoạn 2 – Tiếp tục</b>Giá tiếp tục tăng từ từ hướng tới mức phục hồi đỉnh ATH cũ. Sự kiện giảm một nửa diễn ra, trùng hợp với việc dự trữ BTC trên sàn giao dịch bị thu hẹp khi người mua tăng dự trữ BTC để chờ tăng giá.<b>Giai đoạn 3 – Parabol</b>Khi giá vượt qua mức cao nhất mọi thời đại trước đó, hành động giá BTC sẽ bắt đầu di chuyển theo cấp số nhân lên phía trên, đẩy giá lên mức cao nhất mọi thời đại mới, vượt quá mốc trước đó một cách đáng kể. Giai đoạn này cực kỳ biến động, với việc BTC tăng giá nhanh chóng sau đó là những đợt điều chỉnh lớn.Khối lượng bán tăng lên khi một bộ phận nhà đầu tư chốt được lợi nhuận tốt, trong khi nhiều người tham gia thị trường sẽ tiếp tục mua với niềm tin rằng thị trường giá lên còn nhiều dư địa để hoạt động (Fomo)<b>Giai đoạn 4 – Sửa chữa</b>Tiếp theo sự hưng phấn của giai đoạn Parabolic, đây là lúc thị trường sẽ chứng kiến ​​một sự điều chỉnh lớn theo chiều hướng giảm. Các giai đoạn thị trường giá xuống trước đó đã dẫn đến mức giảm khoảng 80% so với mức đỉnh và hành động giá âm trong khoảng một năm. Ví dụ gần đây nhất chứng kiến ​​​​giá giảm từ mức cao nhất mọi thời đại là 69.000 USD (tháng 11 năm 2021) xuống còn 15.476 USD (tháng 11 năm 2022).\n\n</p>', 96, 'Chỉ ra 3 chiến lược đầu tư theo chu kỳ Halving Bitcoin lần 4 năm 2024 - 2025\n\n', NULL, 'https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 6, 0, 0, '2023-11-17 17:22:04.002000', 0);
INSERT INTO `blog` VALUES (223, 'You don\'t know React Js - Phần 1', '<p>Dạo gần đây mình hay bắt gặp trên TikTok một câu nói như này \"1 mét vuông 100 thằng Frontend\", hay có thể nói cụ thể hơn là \"1 mét vuông có 100 thằng Frontend xài React Js\". Là một software engineer và cũng đang làm frontend (React Js) nghe câu này mình cũng cảm thấy đôi chút chạnh lòng, cũng như một chút gì đó \"tự ái\", vì cứ như thể làm một Frontend developer là cái gì đó đơn giản, và không đáng được coi trọng vậy... Thế nên mình quyết định sẽ viết một cái gì đó (dựa vào kiến thức và trải nghiệm của cá nhân mình) để mọi người có thể hiểu hơn về công việc của 1 frontend developer không hề dễ dàng một chút nào. Hmm hold on có cái gì đấy cần làm rõ một chút ở đây, đúng là hiện tại số lượng lập trình viên frontend trên thị trường khá nhiều, vì hầu như mọi người khi mới học lập trình thì đều chọn frontend, có thể là do nó dễ để bắt đầu, chỉ cần một chút kiến thức về CSS, HTML là đã có thể thấy ngay thành quả rồi. Dễ bắt đầu là thế nhưng để nắm vững nó để trở thành một Frontend developer đủ tốt thì nhiêu đấy thôi là chưa đủ. Điển hình như việc bạn sử dụng React Js nhưng có thật sự đã hiểu về nó đủ sâu chưa ?. Okie luyên thuyên thế đủ rồi vào vấn đề chính thôi.</p><p>Đã có quá nhiều bài viết nói về định nghĩa của React Js rồi, ngay cả trên trang chủ của <a href=\"https://react.dev/\" target=\"_blank\">React Js</a> cũng có nói đến vấn đề này, nên mình xin tóm gọn lại như sau: React Js là một thư viện viết bằng Javascript để giúp cho việc tạo ra giao diện người dùng trên web (hoặc đôi khi là trên mobile) một cách dễ dàng hơn.\n\n</p><p>Có thể nhiều người làm việc đủ lâu với React thì cũng không lạ gì về cái này nhưng mình vẫn muốn làm rõ hơn để cho các bạn mới học có cái nhìn chi tiết hơn về nó.\n\nMình xin mượn tạm bức ảnh dưới đây để mô tả về cách thức mà React (một React\'s component) hoạt động. Có nhiều tài liệu sẽ ghi chi tiết hơn về các methods trong một life cycle của một React\'s component (cái mà một số bạn khi mới tiếp xúc với React phiên bản hook gần đây có thể sẽ không nắm). Nhưng đừng lo các bạn chỉ cần biết rằng React hoạt động sẽ bao gồm 3 giai đoạn.\n\n<b>Mounting</b>, đây là công đoạn chuẩn bị những thứ cơ bản của một  component (state và props) trong method constructor, tiếp đến React sẽ render component (nôm na có thể hiểu là React sẽ gắng component của mình lên cây <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction\" target=\"_blank\">DOM</a> thật của browser trong lần render đầu tiên).\n\n</p><p><b>Updating</b>, từ sau lần render đầu tiên, mỗi khi state hay props thay đổi component của chúng ta sẽ được render lại để cập nhật lại giao diện với những giá trị mới của state / props quá trình gọi là re-render. các bạn có thể hiểu nó giống như một vòng lập vô tận theo thứ tự: state / props thay đổi =&gt; trigger re-render =&gt; vẽ lại giao diện mới =&gt; rồi lại chờ đợi state / props thay đổi để lặp lại quá trình trên.\nĐể tiết kiệm thời gian mình sẽ không đi quá sâu để giải thích định nghĩa về state và props, các bạn có thể tham khảo <a href=\"https://react.dev/learn/state-a-components-memory\" target=\"_blank\">tại đây</a> để biết thêm.\n</p><p><b>Unmounting</b>, quá trình này diễn ra trước khi component của chúng ta bị xóa khỏi DOM. Để dễ hình dung hơn mình xin lấy một ví dụ như sau.&nbsp;&nbsp;</p><pre><code>render() {\n   if (condition) return <Component/>\n   else\n    return null\n}.</code></pre><p>&nbsp; có thể thấy khi thỏa một điều kiện nào đó, ta sẽ return về một component, tức là component đấy đã được gắng lên cây DOM, nhưng sau đó vì một lý do nào đó mà ta lại return NULL =&gt; lúc này component khi nãy của chúng ta đã bị thay thế bởi NULL, thế lúc này nó đi đâu ?... Bạn nghĩ đúng rồi đấy, nó đi về với cát bụi, bị xóa sổ khỏi trần đời, và trước khi nó chính thức bị xóa sổ nó muốn gửi tới bạn vài lời trăng trối, thì lời trăng trối này được gửi ở giai đoạn <b>Unmounting.</b></p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700216972/ihq1qofsgrhnh45ekhxz.png\" alt=\"Hình ảnh tham khảo từ: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/\" /><p>Với những người mới học, thì gần như cái đầu tiên mà họ tiếp xúc sẽ là hook, chứ chẳng phải cái mớ bồng bông life cycle với cả đống methods trong từng giai đoạn kia, còn với những người đã làm việc lâu năm với React (phiên bản Class), thì hook như một vị cứu tin vậy, đơn giản, ngắn gọn, thật là sexy...Mình sẽ lấy một vài hook cơ bản thông dụng mọi người hay xài để dễ hình dung hơn. Đầu tiên thông dụng nhất có lẽ sẽ là: <b>useState </b>và<b> useEffect</b> cặp đôi hoàn hảo, cập bài trùng và có lẽ cũng là thứ dễ bị hiểu một cách mơ hồ nhất. Mình sẽ lấy <a href=\"https://codesandbox.io/s/friendly-tu-zrl446?file=/src/index.js\" target=\"_blank\">một đoạn code</a> để dễ hình dung hơn.\nKhi click button bạn sẽ thấy biến counter được cập nhật lại trên giao diện, đồng thời sau đó giá trị mới của counter cũng được in ra ở màng hình console qua dòng code bên trong useEffect.\n\n</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700216987/tdgtrchfyo5a3rkywdck.png\" alt=\"Example useState and useEffect\" /><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700216995/uwqphfbt2qr7mtxhdmqp.png\" alt=\"Example useState and useEffect\" /><p>Và rồi từ đây mọi người sẽ hay bảo nhau rằng, useEffect có 2 tham số, tham số đầu tiên là 1 hàm callback, tham số thứ 2 là một danh sách các dependencies, mỗi khi có một dependency nào đó đó bị thay đổi thì hàm callback bên trong useEffect sẽ được chạy lại. thoạt nghe thì có vẻ đúng, nhưng nếu suy nghĩ kỹ thì sẽ thấy hình như có điều gì đó sai sai, có chắc là \"mỗi khi một dependency nào đó bị thay đổi thì useEffect sẽ chạy lại ?\", vậy sẽ như nào nếu như tôi tạo một biến nào đấy ở bên ngoài component, và khi click button tôi sẽ cập nhật lại giá trị của biến đấy ?</p><p>ví dụ:</p><pre><code>let counter = 0;\nfunction App {\n  ...\n  useEffect(() => {\n    console.log(\'New Counter | \', counter)\n  },[counter]);\n  return (\n    <button onClick={() => counter += 1}>\n      Click me to increase counter\n    </button>\n  )\n}</code></pre><p>&nbsp; Bạn hãy thử chỉnh sửa lại đoạn code ban đầu thành như ví dụ trên xem như thế nào. useEffect có chạy lại không ?. Rõ ràng là không, mặt dù chúng ta vẫn truyền biến counter vào làm dependency cho useEffect 🤔. Okay giờ hãy thử chỉnh sửa đoạn code trên một chút thành như thế này.&nbsp;</p><pre><code>let counter = 0;\nfunction App(){\n  const [_, forceRender] = useState({});\n  ...\n  <button\n    onClick={() => {\n      counter += 1;\n      forceRender({})\n   }}\n}</code></pre><p>&nbsp; Bây giờ thử lại xem nào... có phải useEffect đã thật sự chạy lại ?. Vậy điều ma thuật gì đã diễn ra 😳 ?. Câu trả lời chính là, không phải dependencies thay đổi sẽ làm useEffect chạy lại, mà chính là sau mỗi lần re-render useEffect sẽ kiểm tra xem dependencies có bị thay đổi hay không, nếu có thì nó sẽ thực thi hàm callback bên trong nó, ngược lại thì không.\n\nĐiều này cũng diễn ra tương tự với một số hook khác như: useCallback, useMemo... từ đây chúng ta có thể thấy rằng việc chúng ta sử dụng React mà không thực sự tìm hiểu rõ về nó, sẽ dễ dẫn đến những hiểu lầm. Mình thừa nhận trong thực tế thì hiếm khi hoặc thậm chí là chẳng có ai lại đi lưu state vào một biến ở ngoài component rồi lại cheat cho component re-render để cập nhật lại giao diện cả... nhưng nếu chúng ta không nắm rõ bản chất của React thì có lẽ ta sẽ không biết, hơn thế nữa, một số thư viện state management, một số phương pháp để optimize render performance cũng thật sự cần phải hiểu rõ điều trên. Nếu bài viết này được nhiều người quan tâm, có thể mình sẽ làm tiếp một bài viết, tự viết một state management giống <a href=\"https://react-redux.js.org/introduction/getting-started\" target=\"_blank\">Redux</a>, cũng như nêu ra cách mà nó optimize được performance.\n</p><p>\nNếu đã đọc đến đây thì xin cảm ơn bạn rất nhiều vì đã lắng nghe những chia sẽ của mình, trên đây chỉ là cách hiểu dựa trên sự tự tìm hiểu và trãi nghiệm của cá nhân, nên rất mong được mọi người góp ý để mình có thêm nhiều góc nhìn tốt hơn, cũng như góp phần nâng cao kiến thức cho mọi người. Thank you and see yah.&nbsp;&nbsp;</p>', 96, 'Được lấy cảm hứng từ tiêu đề của một series nỗi tiếng You Don\'t Know JS của Kyle Simpson. Với mục đích muốn chia sẽ nhưng kiến thức và kinh nghiệm của bản thân về lập trình.', NULL, 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg', 0.00, 6, 1, NULL, '2023-11-17 17:31:07.577000', 0);
INSERT INTO `blog` VALUES (224, 'Tại sao blockchain chết?\n', '<p>Xuân, Hạ, Thu, Đông, rồi lại Xuân - một quy luật bất biến của cuộc sống. Tuy nhiên, khi người ta nói: thời gian có tính tương đối, mình đã không cảm nhận được điều này cho đến khi chứng kiến mùa đông kéo dài gần 2 năm trong thị trường tiền điện tử.</p><p>Sau một chu kỳ phát triển nóng, crypto có một giai đoạn cool down để ‘dọn rác’, giữ lại những thứ giá trị. Dẫu việc dự đoán là rất khó, nhưng một điều chắc chắn, sau mùa đông là mùa xuân, và ta biết một làn sóng mới sẽ đến.</p><p>Hệ thống hạ tầng, một trong những nền móng quan trọng trong nền kinh tế phi tập trung. Nơi đây từng chứng kiến sự cạnh tranh khốc liệt giữa các blockchain layer-1 ở mùa 2021. Vậy sau 2 năm cùng nhau đóng băng, thị trường này đã ra sao? Ethereum vẫn nắm cuộc chơi, Solana, Avalanche đang ở đâu trên thị trường, Aptos, Sui - những kẻ thách thức mới nổi sẽ làm được gì? Chúng ta sẽ cùng tìm hiểu trong bài viết này nhé!</p><h2>Các blockchain đang như thế nào?</h2><p>Đã 2 năm kể từ cuộc chiến layer-1 hồi 2021, cuộc chơi dần lắng xuống, những chiến binh của chúng ta đang ở tình trạng như thế nào?</p><h2>Ethereum</h2><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217270/udcguhedwkcmurem1pd1.png\" alt=\"Ethereum\" /><p>Là blockchain đã tạo nên cuộc cách mạng hồi 2015, dù đã hơn 8 năm tuổi, Ethereum vẫn là key player của không gian web3 này. Nhìn vào biểu đồ thể hiện số lượng người dùng hoạt động trên Ethereum dưới đây, con số giao động quanh mức từ 200k-300k ví. Đây là số lượng lớn áp đảo các blockchain khác.&nbsp;</p><p>Điều gì đem lại sức sống mãnh liệt của nàng hậu giới blockchain.&nbsp;Phải nói, Ether vốn là cái nôi của mọi sự sáng tạo, từ Defi, NFT, hay gamefi,.. luôn có những sự cải tiến, những mô hình mới nổi lên mà nếu không phải ở Ethereum, thì không phải ở đâu cả.&nbsp;Thứ 2, Ethereum đã có những sự đột phá mạnh mẽ về mặt hạ tầng. Với giải pháp mở rộng mạng lưới layer-2 (hiểu đơn giản là xây 1 blockchain khác ngay trên Ethereum), trở ngại lớn nhất của Ether là phí giao dịch nay đã được giảm đáng kể, mà hệ sinh thái nơi đây lại không hề kém sự đa dạng.Giá trị cuối cùng, cũng như quan trọng nhất, mà Ethereum mang lại cho cộng đồng là sự an toàn đáng kể. Với khoảng <a href=\"https://www.ethernodes.org/\" target=\"_blank\">5000 nodes </a>và gần 100.000 validators đang chống lưng cho blockchain này, rất khó để xảy ra tình huống mạng lưới “gãy” sau một đêm ngủ dậy.Có vẻ như downtrend không gây quá nhiều khó khăn cho Ethereum, ngược lại, nó còn tạo điều kiện để blockchain phát triển và phô diễn sức mạnh. Thế, còn những cái tên từng là đối thủ của Ether thì sao?&nbsp;&nbsp;</p><h2>Second Gen Blockchain</h2><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217317/lrlhlwbt9xp3ulr5ozuf.png\" alt=\"Thế hệ 2\" /><p>Là những chiến binh từng cạnh tranh sòng phẳng với Ethereum thời điểm 2021, second gen blockchain như Avalanche, Fantom, Near, Polkadot, Solana,... lại đang khá chật vật để sinh tồn, phát triển ở mùa đông hiện tại.</p><p>Dù từng gây tiếng vang với những cải tiến sáng tạo về cấu trúc hạ tầng khi ra mắt, những kỳ vọng vào lứa layer-1 này càng cao hơn khi chúng đã tạo nên sân chơi cho rất nhiều user tìm đến vào mùa bull trước. Solana để lại ấn tượng như là blockchain nhanh nhất, mảnh đất hứa hẹn cho NFT với các bộ sưu tập như y00ts, DeGods. Phantom thì là thiên đường của các dự án Defi dưới tay lái bố già Andre Cronje,v.v. Đã có lúc, người ta tưởng tượng ra viễn cảnh các blockchain này sẽ cùng cạnh tranh, để thúc đẩy giới hạn của công nghệ này đi xa và xa hơn nữa.</p><p>Nhưng rồi, cái viễn cảnh đó không hề tới. Khi downtrend xảy đến, các blockchain này đã lộ rõ những lỗ hổng, thứ mà các tổ chức đứng sau đã che giấu khá kỹ bằng tiền, hoặc rất nhiều tiền.</p><p>Đầu tiên là về mặt công nghệ, hóa ra, những cải tiến đa số vẫn chỉ đang nằm trên giấy mà thôi. Solana blockchain nhanh nhất lại bị gãy liên tục hồi cuối 2021, giữa năm 2022. Dự án Phantom bị bỏ ngỏ sau sự ra đi của bố già. Polkadot, Avalanche, Cosmos, nổi tiếng với giải pháp scale, nhưng lại không ai muốn scale… Tàn cuộc, người dùng bỏ đi, ánh đèn hào nhoáng được hạ xuống, còn lại một sự thật trần trụi: đa số blockchain chỉ là bản copy của Ethereum. (Đọc thêm: <a href=\"https://spiderum.com/bai-dang/Crypto-va-cu-lua-mang-ten-coin-layer-1-76oMFkAo7VO1\" target=\"_blank\">Crypto và cú lừa mang tên coin layer-1</a>)Là bản sao, họ có thể copy được công nghệ, copy được mô hình dự án, nhưng thứ các blockchain này khó để học theo được ngay chính là vấn đề về bảo mật (số node, validators). Sự sụp đổ của Terra Luna, sự liên đới của FTX đến Solana, các vấn đề của Binance,... làm cho cộng đồng khá hoang mang về sự ổn định của các 2nd blockchain này. Là một nhà đầu tư, không ai lại muốn ‘giao trứng cho ác’ cả, do đó, giải pháp rút tài sản về Ether hay các Layer-2 là điều mà số đông đã làm.Hiện tại, nhiều blockchain thuộc thế hệ này đang rơi vào tình trạng ngủ đông. Tất nhiên, vẫn có số ít tích cực phát triển và đạt được sự hoàn thiện hơn về hạ tầng. Song, vấn đề về số phận của chúng sẽ về đâu trong mùa tăng trưởng tới, sẽ là bài toán khó giải cho các tổ chức phát triển. Tại sao ư, chúng ta sẽ nói đến ở phần sau.&nbsp;&nbsp;</p><h2>Third Gen Blockchain</h2><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217348/wuasdbdp6rk8kv9k5a9y.png\" alt=\"Thế hệ 3\" /><p>Những layer-1 mới nhất, được ra mắt trong mùa đông của thị trường với những cái tên như Aptos, Sui Network, Sei Network,... đây là những dấu hỏi mà chúng ta sẽ phải chờ đợi thời gian khám phá.</p><p>Gen3 gần như là phiên bản cải tiến của các blockchain 2.0 kể trên. Aptos chẳng hạn, được xem như sự nâng cấp của Solana, với khả năng xử lý hơn 100.000 giao dịch trên giây (Giới hạn Solana là khoảng 4.000). Sui Network cũng có khả năng tương tự Aptos.</p><p>Nhưng vì launching vào giữa mùa đông giá rét, các nền tảng này đang rơi vào tình trạng dead-chain, đói người dùng. Thiếu đi nguồn cầu, nên cũng không có nhiều dự án đến những vùng đất mới này để phát triển. Nhìn chung, có thể xem đây là những khu vườn chỉ mới được đào xới cơ bản, những thứ hấp dẫn nhất vẫn chỉ nằm trên giấy mà thôi.</p><h2>Trông chờ gì ở mùa tiếp theo?</h2><p>Nói đi nói lại 1 điều: Hiện tại vẫn đang trong downtrend. Chắc chắn mọi thứ sẽ diễn biến một cách khác khi thời gian khó khăn này qua đi. Và khi thời điểm bùng nổ đến, một lượng người dùng mới khổng lồ sẽ đặt chân vào thế giới phi tập trung. Những chuyện gì có thể xảy ra?</p><p>Vậy, nền tảng nào sẽ là nơi đón được các công dân mới này? Bạn nghĩ là Ethereum ư? Hmm naw, mình nghĩ sẽ là không. Dù đã có những cập nhật giúp mạng lưới ổn định hơn, nhưng Ethereum hiện tại vẫn cực kỳ nhạy cảm với lượng user lớn đổ về. Ý mình là khi đó, phí giao dịch sẽ tăng cao. Đây là trở ngại cực kì lớn với người dùng mới gia nhập.</p><p>Lựa chọn số hai có thể là các giải pháp mở rộng của Ethereum, chẳng hạn là layer-2 (Optimism, Arbitrum,...) hoặc sidechain (Polygon). Ưu điểm ở những vùng đất này là một hệ sinh thái hoàn thiện, trong khi phí giao dịch rẻ hơn nhiều. Nhược điểm bạn có thể cân nhắc đến là những blockchain này có trải nghiệm người dùng không quá khác so với ETH. Do đó, nơi đây là có vẻ sẽ hấp dẫn những user đã có ít nhiều kinh nghiệm trong thị trường, đến để đầu tư và phát triển.</p><p>Vậy còn người mới, họ thích gì? Đơn giản lắm, đó là những thứ mới. Những blockchain gen 3 như Aptos, Sui Network, Sei Network có thể là địa điểm chứng kiến sự bùng nổ. Đầu tiên, các blockchain này còn rất mới, chưa đạt đến giới hạn công nghệ, nên chúng có những câu chuyện hấp dẫn để kể. Thứ 2, các tổ chức đứng sau vẫn chưa đốt quá nhiều tiền để phát triển hệ sinh thái, vì họ vẫn đang chờ làn sóng người dùng mới. Những grant, ecosystem incentive là công thức quen thuộc mà blockchain gen 2 đã dùng, và chúng rất hiệu quả. </p><p>Cái kết éo le nhất, có lẽ dành cho đa số các blockchain gen 2. Họ đã tiêu hao rất nhiều tài nguyên để sinh tồn qua mùa đông, những giới hạn bộc lộ từ giai đoạn trước, một hệ sinh thái quá cũ,... rất ít user chọn những nơi đây là điểm chạm đầu tiên để khám phá defi.</p><p>Nói đến đây, thật ra chúng ta chỉ mới đi qua bề nổi của câu chuyện. Nếu bạn muốn đi sâu hơn, thì nó ở ngay đây.</p><h2>The bottleneck?</h2><p>Những ai trải qua chu kỳ tăng trưởng trước, đều sẽ nhận ra một điều: các layer-1 nào cũng sẽ gặp điểm nghẽn khi đám đông mới gia nhập. Lí do nằm ở phần cấu trúc của blockchain, nó yêu cầu các node phải cùng xác nhận tính đúng đắn cho 1 giao dịch (cơ chế đồng thuận). Và tùy vào cơ chế đồng thuận khác nhau, điểm nghẽn sẽ nằm ở những điểm khác nhau.</p><p>Lấy ví dụ 2 đại diện tiêu biểu: </p><p>Ethereum chọn cách xử lý giao dịch tuần tự (Sequentialism), tức mỗi giao dịch sẽ được toàn bộ node của blockchain tính toán để kiểm tra. Vì lí do đó, khi một lượng lớn giao dịch được thực thi, chi phí giao dịch sẽ phải tăng lên đáng kể (có thể trên 10$ cho 1 giao dịch). Và điều này xảy ra khá thường xuyên trong thời gian uptrend.</p><p>Solana, Aptos, hay Sui Network thì khác. Các blockchain này lại chọn cơ chế xử lý giao dịch song song (Parallelism), bằng cách chia nhỏ 1 giao dịch thành nhiều mảnh, và giao cho 1 nhóm node để tính toán. Điều này giúp tăng khả năng hiệu quả xử lý số lượng giao dịch trong 1 giây (với Solana là ~4000, và Aptos, Sui trên 100.000 giao dịch trên giây).</p><p><a href=\"https://coin68.com/binance-thoi-phi-gas-tren-ethereum-tang-1900/\" target=\"_blank\">Binance “thổi” phí gas trên Ethereum tăng 1.900%</a>Nhưng mô hình này lại giơ tay đầu hàng trước các dự án IDO, NFT mint, game... nói chung là các loại giao dịch cần sự logic tuần tự. Việc phân nhỏ các mảnh thường làm cho các kiểu giao dịch này fail, dự án không kiểm soát được (không biết đã mint đến NFT nào, game không biết user đã claim gì,...) dẫn đến trường hợp có thể dính bug. Ngoài ra, trường hợp có các node (nhóm node) bị offline, việc tính toán 1 transaction cũng trở nên rối rắm hơn khi mạng lưới phải tái phân bổ vai trò tính toán các mảnh giao dịch.&nbsp;Xét chung tất cả blockchain, cơ chế đồng thuận là điểm sáng vì nó đảm bảo sự minh bạch, an toàn. Nhưng chính nó cũng đặt ra những giới hạn cho từng sân chơi.Lối thoát cho bài toán này là các giải pháp mở rộng (scaling solution). Song, đây cũng không phải là bài toán dễ. Với Ethereum, Vitalik đã đưa ra 5 giải pháp scale cho mạng lưới. 2 trong số đó đã được thực hiện là sidechain và layer-2 roll-up. Nhưng đây chỉ là biện pháp để tạm thời giảm áp lực lên Ethereum, những giải pháp mang tính tác động trực tiếp như sharding vẫn đang khiến đội ngũ ETH phải đau đầu.&nbsp;&nbsp;</p><p>Ethereum và các giải pháp mở rộng à? Trong bài mình có nhắc đến khá nhiều lần, với mình, đây là chủ đề hết sức thú vị. Nó có thể là chủ đề cho bài viết tiếp theo đấy nhỉ. Nếu các bạn thích những bài viết ‘kiểu như thế này’, hoặc mình cần cải thiện điểm gì thêm. Hoặc bạn muốn phản biện. Hãy giúp mình bình luận ở phần dưới nhé.&nbsp;</p>', 96, 'Blockchain đã gặp giới hạn về công nghệ?\n\n', NULL, 'https://bcp.cdnchinhphu.vn/334894974524682240/2023/6/6/nen-tang-blockchain-2-0-16860169448191111255624.jpg', 0.00, 6, 1, 0, '2023-11-17 17:38:59.260000', 0);
INSERT INTO `blog` VALUES (225, 'IT đã không còn là vua của mọi nghề nữa rồi ...', '<p><i>Xin chào, nay nhân dịp một chiều rảnh mình có vài dòng tâm sự về người anh sinh năm 96 của mình, một người đã làm trong ngành IT được một thời gian cùng mức lương rất ổn định, nhưng gần một năm trở lại đây anh ít code hơn trước, nhiều khi lại thở dài, than thở, ánh mắt anh hơi buồn...</i></p><h2>I. Tiểu sử về người anh 96</h2><p>Sinh ra trong một gia đình Việt Nam, người anh của tôi không thể nào thoát khỏi sự kèm cặp của cha mẹ. Nên ngay từ khi còn nhỏ người anh đã lao đầu vào học toán, học thêm nhà thầy cô, học thêm trên trường, mua sách toán nâng cao về cày, tham gia sạch sành sanh các cuộc thi học sinh giỏi, toán qua mạng. Có thể nói thời thơ ấu của anh gắn liền với toán.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217714/zjlacohtqbmvrxpdfxnu.png\" alt=\"Image\" /><p>Mọi chuyện vẫn tốt đẹp cho đến khi anh lên cấp 2, anh đến với những bài toán mẹo, những bài toán mà nếu anh không biết cách giải từ một cuốn sách giải nào đó thì có suy nghĩ cả đời anh cũng không làm nổi. Có thể kể đến một ví dụ điển hình là câu nói</p><blockquote>\"Hiển nhiên ta có\"</blockquote> - <p>Sau câu nói này là một biểu thức toán học nào đó từ trên trời rơi xuống mà anh phải chứng mình cả ngày trời chứ chẳng có hiển nhiên nào ở đây cả. Từ những bài toán mưu mẹo như vậy anh nhận ra toán học là một môn học thuộc lòng trá hình (tức bài nào nhìn quen dạng làm phát ra luôn còn bài chưa gặp bao giờ thì khóc thét nghĩ cả ngày cũng chẳng ra). Từ đó anh dần mất thiện cảm với môn toán.</p><h2>II. Yêu lập trình từ cái nhìn đầu tiên </h2><p>Do mất sự hứng thú với Toán cùng với niềm đam mê game, anh thi trượt vào lớp toán chuyên nhưng may vẫn đỗ vào lớp chuyên Toán - Tin (vẫn thuộc trường chuyên nhưng ai trượt Toán nhưng đủ điểm vẫn đỗ được vào Toán - Tin). </p><p>Đây cũng là quãng thời gian đẹp nhất thời học sinh đối với anh vì đã biết đến ngôn ngữ lập trình, biết đến pascal, c++, ... Sau đó anh cũng được chọn vào đội tuyển tin của trường nhưng vì chỉ có đam mê mà trí thông minh không cho phép nên các cuộc thi anh tham gia không đạt thành tích cao. Dù sao biết đến lập trình từ khi còn học cấp 3 cũng là một lợi thế rất lớn ở Việt Nam rồi.</p><p>Quãng thời gian học đại học của anh cũng không có gì nhiều để nói, vì nền tảng lập trình có sẵn nên anh ra trường rồi cũng kiếm được một vị trí website dev tại một công ty, mức lương tàng tàng đủ sống. Và anh nghĩ là anh sẽ code web như vậy đến hết đời và cuộc sống sẽ cứ êm đềm trôi mà không còn biến cố gì nữa.</p><h2>III. Tua nhanh đến thời gian thực</h2><p>Nào ngờ, cơn bão AI ập tới. Khai màn bằng con chatBot hiểu tiếng người đầu tiên ChatGPT. Một con chatbot đến ngày hôm nay vẫn có thể nói là code tốt hơn anh nhiều. Sau đó là nhiều con bot khác của Google, Microsoft.. Con nào cũng có thể code tốt và nhanh hơn anh cả trăm lần vậy.\nGiờ đây, công việc của anh tới công ty chỉ đơn giản là lắng nghe yêu cầu từ sếp, sau đó nói lại với con chatbot nào đó một cách dễ hiểu hơn để nó in ra code theo đúng ý anh.&nbsp;</p><p>Ngày qua ngày, anh dần nhận ra các con bot ngày càng code siêu việt còn anh ngày càng chuyển sang code bằng tiếng người chứ không còn code bằng ngôn ngữ lập trình nữa. Sau những giờ đi làm nhàn hạ, ngồi trên con xe máy chạy trên đường, anh dần nhận ra rằng nghề IT nói đúng hơn là nghề coding sắp không còn dùng tới con người nữa rồi.&nbsp;</p><h2>IV. Chỉ còn là vấn đề thời gian</h2><p>Có nhiều khi trên công ty, anh cũng muốn thảo luận với mọi người xem, nếu AI cứ phát triển như thế này, một ngày nào đó nó sẽ ngồi code thay chúng ta thì chúng ta phải nghề gì đế kiếm sống đây ? Chỉ dám nghĩ thế thôi chứ anh cũng không giám nói ra vì đó là điều mà cộng đồng lập trình không muốn nghe, họ luôn tin rằng lập trình không chết, con người sẽ cùng AI lập trình. </p><p>Nhưng thực tế ngày càng chỉ ra rằng, AI chẳng cần con người để lập trình, nó có thể tự làm mọi khâu chỉ cần có đủ dữ liệu và phần cứng đủ mạnh, có thể bây giờ nó vẫn chưa làm được tới mức đó nhưng nên nhớ là có làn sóng các nhà khởi nghiệp trên khắp thế giới đang đổ tiền tấn vào nó nên có lẽ việc AI thay thế hoàn toàn lập trình viên chỉ là vấn đề thời gian.</p><h2>V. Kết luận</h2><p>Lan màn dài dòng thế cũng đủ rồi, người anh của tôi chắc vẫn sẽ code tới những ngày cuối cùng trước khi bị AI thay thế hoàn toàn. Thậm chí giờ đây với anh mỗi ngày code là 1 kỷ niệm đẹp vì khoảng chục năm nữa thôi, thế hệ mới sau cả thế hệ Gen Z chắc cũng sẽ không biết nghề coding từng tồn tại và phát triển như thế nào. Mãi mãi là vua của các nghề trong tim anh.&nbsp;</p>', 96, 'Đôi dòng tâm sự dành cho người anh ..', NULL, 'https://topdev.vn/blog/wp-content/uploads/2019/12/TopDev1.png', 0.00, 6, 1, 0, '2023-11-17 17:42:42.475000', 0);
INSERT INTO `blog` VALUES (226, 'Công nghệ web - 30 năm đã tôi thế đấy', '<img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217790/jikmcklqenli5dl1suuw.png\" alt=\"Ảnh bởiRichy GreattrênUnsplash\" /><p>&nbsp; Một ngày nghỉ hè năm 2005, nhà mình lắp mạng. Với việc bị cấm bén mảng tới quán net từ những ngày thơ ấu, mình lúc đó chẳng hiểu mạng là cái chi. Ba mình, áp dụng lời hướng dẫn trước đó của mấy ông nhân viên nhà mạng, bình tĩnh ngồi xuống, mổ cò từng chữ <i>www.24h.com.vn</i>, và gõ Enter một cú đầy quyết đoán. Màn hình hiện ra cơ man là chữ và ảnh, với hằng hà tin tức đủ thể loại, với quảng cáo nhấp nháy và với video chạy giật giật từng cục. Ba bảo, đây là mạng đó con.&nbsp;&nbsp;</p><p>Vậy là từ đó, mình bắt đầu con đường lướt mạng của mình. Mình bớt thời gian dán mắt vào mấy quyển truyện tranh đấm đá á ối bịch hự. Mình ra ngoài chơi ít hơn, lấy lý do là trời nắng. Hè mà. Thay vào đó, mình dán mắt vào đống game cũng đấm đá á ối bịch hự trên Gamevui, xem hàng tá video vừa hài vừa bậy nhặt nhạnh của nước ngoài trên Dantri, và nghịch ngợm đủ thứ khó mà nhớ mặt đặt tên trên Yahoo. Nghĩ lại, việc mình dán mắt vào máy tính như vậy có lẽ là một cơ duyên. Cơ duyên này vẫn còn tiếp diễn đến hôm nay, khi mà công việc của mình phần nhiều liên quan đến máy tính và những trang web.</p><p>Mấy bữa nay nghĩ lại, chợt thấy tò mò vì các công nghệ web ngày nay đã tiến hóa rất nhiều. Thời gian thấm thoắt thoi đưa, mới ngày nào mấy trang web chỉ là những trang thông tin cứng nhắc vô hồn, nay đã trở thành những trang mạng xã hội khổng lồ hay những trang xem phim nghe nhạc hoạt động mượt mà, làm con dân chìm trong thống khoái triền miên. Mới ngày nào xài Internet Explorer là thấy như thế giới đã phẳng dẹt trước mắt mình, nay IE chỉ còn xuất hiện cùng tiếng cười mỉa mai hắt ra từ cái nhếch mép hay trong tiếng thở dài hoài cổ khôn nguôi khi đăm chiêu về quá khứ.</p><p>Vậy công nghệ web, sau bao biến chuyển xoay vần của thời cuộc, đã phát triển ra sao? Ở đây, mình sẽ đi qua quá trình hình thành và phát triển của các công nghệ web, cụ thể là các trình duyệt, các ngôn ngữ lập trình, và những công cụ bổ trợ.</p><h2>Phần 1: Trình duyệt thuở hồng hoang</h2><p>Muốn thấy được trang web, trước hết phải có sự xuất hiện của internet. Từ những năm 50, trong bối cảnh Chiến tranh Lạnh, quân đội Mỹ cần một hệ thống liên lạc qua máy tính. Tới năm 1974, các giao thức nền tảng của mạng máy tính đã ra đời, cho phép các máy tính trong một mạng lưới có thể trao đổi thông tin với nhau. Đó là khởi nguyên của internet ngày nay.</p><p>Năm 1990, Tim Berners-Lee, một nhà khoa học máy tính, làm ra trình duyệt đầu tiên trên thế giới, mang tên WorldWideWeb, sau này đổi tên thành Nexus. Trình duyệt, hay browser, nói một cách dễ hiểu, là một chương trình máy tính với mục đích lấy thông tin từ trên internet về và hiển thị ra cho người dùng thấy. Nexus chạy trên hệ điều hành NeXT, một hệ điều hành không quá phổ biến thời đó, vì vậy mà trình duyệt này chưa tiếp cận được với đại chúng. Tuy vậy, việc Nexus xuất hiện là dấu mốc tiên phong, làm tiền đề cho hàng loạt phát minh và cải tiến sau này.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217829/yz9928lmvvcmr4mvpg7l.png\" alt=\"Giao diện trình duyệt WorldWideWeb\" /><p>Ba năm sau đó, năm 1993, NCSA (National Center for Supercomputing Applications - Trung tâm Quốc gia về Ứng dụng Siêu máy tính) tạo ra trình duyệt mang tên Mosaic. Mosaic sở hữu những chức năng vô cùng tiên tiến thời đó như sở hữu giao diện tiện lợi, hiển thị được cả văn bản và ảnh, cho phép người dùng lưu các trang web và xem lịch sử truy cập. Ngoài ra, Mosaic hoạt động được trên nhiều hệ điều hành phổ biến lúc bấy giờ, giúp cho công chúng nhanh chóng tiếp cận và sử dụng. Nhiều người coi Mosaic là chất xúc tác mạnh mẽ cho sự phát triển của internet, khi mà vào lúc Mosaic ra đời, thế giới chỉ có 100 trang web. Hai năm sau đó, con số ấy đạt mốc 10,000. Và đến năm 2000, con số này là 10,000,000.</p><p>Được sự thành công của Mosaic truyền cảm hứng, Marc Andreessen, một trong những người trong đội ngũ tạo ra Mosaic, hợp tác cùng vài đồng nghiệp và lập công ty riêng vào năm 1994. Họ tạo ra trình duyệt Netscape (tên đầy đủ là Netscape Navigator) trong cùng năm đó. Netscape được tập trung phát triển về mặt trải nghiệm người dùng, khiến trình duyệt này làm người dùng không khỏi bị hút hồn. Chẳng chóng thì chầy, Netscape nhanh chóng chiếm được phần lớn thị phần, với con số đỉnh điểm là 86%.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217854/kitumbxcg9d5fgsildss.png\" alt=\"Trình duyệt Netscape\" /><p>Đánh hơi được cuộc chơi trình duyệt đang nóng lên bao giờ hết, một năm sau đó, Microsoft phát triển và ra mắt trình duyệt được coi là tình đầu của rất nhiều người trong số chúng ta, mang tên Internet Explorer (IE). Cuộc vật lộn giữa IE và Netscape đánh dấu sự bắt đầu của Chiến tranh Trình duyệt Thứ nhất (First Browser War) kéo dài từ 1995 đến 2001. Với đội ngũ kỹ sư đông đảo, Microsoft liên tục phát triển tính năng mới và cải thiện IE, biến IE trở nên ngày càng mạnh mẽ, tiện lợi và thân thiện với người dùng. Không chỉ vậy, IE còn được hưởng lợi thế từ sản phẩm chủ lực của Microsoft: hệ điều hành Windows. Với việc Windows đã rất phổ biến trong thị trường hệ điều hành máy tính, Microsoft tích hợp IE vào Windows như là một phần mềm đi kèm, rút ngắn được rất nhiều thời gian và công sức cho việc quảng bá và tiếp cận người dùng. Tại sao phải tốn công mua và cài Netscape khi mà máy tính Windows của bạn đã có sẵn IE, đúng không? Tất lẽ dĩ ngẫu, IE nhanh chóng vươn mình lấn át Netscape, từng bước trở thành ông kẹ của thị trường trình duyệt. Năm 2001, IE chiếm 96% thị phần.</p><p>Năm 1998, bộ Tư pháp Mỹ kiện Microsoft, sự kiện chẳng khác nào một quả bom nổ tung giữa lúc trời quang mây tạnh. Bộ Tư pháp cho rằng Microsoft đã cố gắng cản trở việc hoạt động của phần mềm của các công ty khác trên hệ điều hành Windows. Một ví dụ điển hình là Windows sẽ làm khó dễ cho việc trình duyệt Netscape chạy trên Windows (làm Netscape chạy chậm hơn, làm Netscape khó tương thích trên Windows hơn). Hành vi này được coi là hướng tới sự độc quyền trong ngành phần mềm và cản trở cạnh tranh công bằng. Cuối cùng, Microsoft thua kiện và phải cho phép các phần mềm từ công ty khác được phép hoạt động sòng phẳng trên Windows. Điều này vô cùng quan trọng, vì thứ nhất, nó xử lý được vấn đề nhức nhối của thời điểm bấy giờ, và thứ hai, đây là tiền lệ cho việc đề cao cạnh tranh sòng phẳng trong ngành phần mềm, thúc đẩy các công ty tập trung làm ra phần mềm chất lượng mà không sợ bị các hệ điều hành giơ tay chực chờ bóp cổ họ. Tuy vấn đề mang tên Microsoft đã được luật pháp xử lý, trình duyệt Netscape đã quá hụt hơi yếu ớt trong cuộc đua với IE. Như đã nói ở trên, năm 2001, IE chiếm 96% thị phần, và Netscape chỉ còn biết mơ tưởng về những ngày vinh quang xưa cũ. IE được công nhận là kẻ chiến thắng trong Chiến tranh Trình duyệt Thứ nhất. Công ty chủ quản của Netscape đã không còn mặn mà với việc tiếp tục chiến đấu với ông kẹ Microsoft, thay vào đó, họ công khai mã nguồn của Netscape.Cho những ai chưa hiểu mã nguồn mở là gì, có thể tưởng tượng qua ví dụ giả tưởng sau: ở một vũ trụ song song, Vinfast, sau hàng năm trời cố gắng kèn cựa với Tesla, đã thất bại thảm hại trong cuộc chơi xe điện. Trước lúc nhắm mắt lâm chung, Vinfast công bố với công chúng toàn bộ các bản thiết kế, chi tiết linh kiện, thông số kỹ thuật, quy trình sản xuất, thành quả nghiên cứu, hay chung quy lại là toàn bộ tài sản trí tuệ của công ty. Giờ đây, công ty nào trên thế giới cũng có thể bê nguyên bộ tài sản trí tuệ này về, sửa đổi cải tiến, và đứng lên thách thức Tesla một lần nữa.</p><h2>Phần 2: Ba chàng hiệp sĩ mộng mơ</h2><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217880/rrq0huzxginrto3pmmhx.png\" alt=\"Doraemon\" /><p>Trình duyệt được dùng để hiển thị trang web, nhưng một trang web thì được tạo ra bằng gì? Một trang web được tạo ra bởi 3 thành phần chính: ba chàng hiệp sĩ mộng mơ HTML, CSS và JavaScript.Giải thích một cách tối giản: HTML là khung xương, quyết định trang web có cấu trúc như nào, nội dung ra sao; CSS là lớp da, quyết định kiểu dáng, màu sắc, khoảng cách, font chữ; JavaScript là bộ não của một trang web, làm cho trang web có thể tương tác được, như khi bạn bấm dấu cộng để chỉnh lượng hàng trong giỏ Shopee của bạn vậy.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217887/ya2w71xjdeklpf2uka91.png\" alt=\"Framework\" /><p>Năm 1993, Tim Berners-Lee (vâng vẫn là nhân vật máu mặt này) tạo ra HTML phiên bản đầu tiên mà dân gian gọi là HTML1. Hai năm sau, vào năm 1995, HTML2 trình làng, hỗ trợ thêm hiển thị bảng và các biểu mẫu, giúp người dùng dễ dàng hiển thị và thu thập thông tin theo nhiều cách hơn.</p><p>Khi mà trang web chỉ có HTML, sự khô cứng là không thể tránh khỏi. Giống như khi bạn xem thuyết trình powerpoint chỉ toàn chữ là chữ, hẳn là bạn sẽ chẳng thể hào hứng tiếp nhận mặc cho người diễn thuyết thao thao bất tuyệt. Năm 1995, công ty chủ quản của trình duyệt Netscape cho ra mắt JavaScript, một ngôn ngữ lập trình nhằm làm trang web có tính tương tác. Một làn gió mới đã len lỏi vào trái tim những người dùng khó tính khó chiều. Trang web giờ đây đã có thể tương tác được, giống như slideshow vừa có chữ vừa có hiệu ứng bay nhảy từa lưa, ắt hẳn sẽ làm không ít độc giả lác mắt vì ngưỡng mộ sự tiến bộ của công nghệ.</p><p>Một năm sau đó, vào năm 1996, nhận thấy rằng phát minh mang tên JavaScript của Netscape quá tiềm năng, Microsoft đã tạo ra một phiên bản nhái bén dế mèn tên là JScript để cạnh tranh. Về định nghĩa, cả 2 đều là ngôn ngữ lập trình. Về mục đích, cả 2 đều nhằm làm cho trang web dễ tương tác. Tuy vậy, về chi tiết, 2 ngôn ngữ có nhiều khác biệt về cấu trúc và cú pháp, đến mức có những trang web dùng JScript thì chỉ có thể chạy được trên IE, còn trang web dùng JavaScript thì chỉ chạy được trên Netscape.</p><p>Kể cả khi trang web đã có khung xương và bộ não, trông nó vẫn thô ráp vô cùng. Có cung ắt có cầu, cùng năm 1996, CSS được tạo ra. Từ đây, một trang web không chỉ có khung xương (HTML) và bộ não (JavaScript) mà còn có lớp da (CSS) giúp tăng tính thẩm mỹ. Phiên bản CSS đầu tiên, hay CSS1, hỗ trợ những tính năng cơ bản như màu sắc, sắp xếp, khoảng cách. Từ đây, ba chàng hiệp sĩ mộng mơ HTML-CSS-JavaScript chính thức đồng hành cùng nhau trên con đường mang internet đến từng nhà, thăm các cụ già xem nhạc vàng trên Youtube, phổ cập Facebook cho các bậc trung niên, mai mối thanh thiếu niên trên Tinder, và dắt các em thơ leo Tiktok.</p><p>Nhận thấy sự khác biệt ngày càng lớn dần giữa JavaScript và JScript có thể leo thang thành những trở ngại không thể giải quyết trong tương lai, Netscape quyết định nộp JavaScript lên cho ECMA, một tổ chức quốc tế chịu trách nhiệm cho việc đặt ra các tiêu chuẩn cho những hệ thống thông tin. Năm 1997, ECMA cho ra mắt ECMAScript, một bộ tiêu chuẩn dành cho các ngôn ngữ lập trình web, được tạo ra dựa trên các đặc điểm cấu trúc và cú pháp của JavaScript.Với độc giả nào bắt đầu định tắt máy khi đọc đến đây, xin phép được lấy ví dụ giả tưởng như sau để giải ngấy. Tưởng tượng viễn cảnh hai nước Anh (Netscape) và Pháp (Microsoft) là hai đất nước có nền khoa học phát triển. Nước Anh viết bài nghiên cứu khoa học bằng tiếng Anh (JavaScript), Pháp viết bằng tiếng Pháp (JScript). Thế là cùng một nghiên cứu, khi viết bằng hai thứ tiếng khác nhau sẽ có nguy cơ bị sai khác về cách hiểu do sự khác biệt giữa hai ngôn ngữ. Thế là Anh gửi tâm thư lên Liên Hợp Quốc (ECMA) nhằm đòi một bộ tiêu chuẩn cho việc viết bài nghiên cứu khoa học. Liên Hợp Quốc bàn bạc, thống nhất, và ra mắt một bộ tiêu chuẩn ngôn ngữ khoa học (ECMAScript) dựa trên tiếng Anh (JavaScript). Từ đó, cả thế giới cần tuân theo tiêu chuẩn này. Pháp vẫn có thể xài tiếng Pháp để viết báo cáo khoa học, nhưng mà cách viết cần sửa đổi để tuân theo các quy tắc, cấu trúc, ngữ pháp của bộ tiêu chuẩn, mà bộ tiêu chuẩn lại tuân theo tiếng Anh. Nhiều người hẳn nghĩ: ông không cấm viết tiếng Pháp nhưng lại bắt tôi viết theo kiểu Anh, thế khác đéo gì ông bảo tôi dùng tiếng Anh đi cho nhanh. Và đúng thật, JScript dần dần mất đi sự phổ biến, và JavaScript vẫn đứng sừng sững như là ngôn ngữ lập trình web độc tôn đến ngày nay. Từ khi ECMAScript xuất hiện, các ngôn ngữ lập trình web quy tụ về một mối, thiên hạ thái bình, giang sơn thống nhất.Đến năm 1999, CSS đã ra đến phiên bản thứ 3, hay còn gọi là CSS3, và vẫn được sử dụng đến ngày nay. Còn HTML thì ra mắt phiên bản 4, hay HTML4, là phiên bản ổn định trong suốt 15 năm sau đó.</p><h2>Phần 3: Tre già măng mọc</h2><p>Đầu những năm 2000, mặc cho việc Microsoft thua kiện Bộ Tư pháp Mỹ, Internet Explorer vẫn tự tin leo lên vị trí thống trị thị trường trình duyệt. Người người dùng IE, nhà nhà dùng IE. Những tưởng đây là cái kết viên mãn với nụ cười tươi rói nở trên môi Microsoft và thế giới người dùng cùng hướng cái nhìn lạc quan đầy tin yêu vào hiện thực hạnh phúc và ngày mai tươi sáng, nhưng mà nụ cười kia sẽ không mãi đâu, ngày mai không dễ như ban đầu. Những đối thủ mạnh mẽ xứng tầm đã bắt đầu manh nha xuất hiện, báo hiệu một cơn bão làm khuấy động giới công nghệ.</p><p>Năm 2003, Apple cho ra mắt trình duyệt Safari. Safari nổi bật ở tính tương thích mạnh mẽ, sự tối ưu, tốc độ đáng gờm, độ bảo mật cao khi dùng trong hệ sinh thái của Apple như là máy Mac và hệ điều hành MacOS. Từ đó đến giờ, Safari vẫn luôn duy trì phong độ ổn định, với con số hiện tại là 20% thị phần.</p><p>Netscape chết đi, để lại một đống tro tàn, và từ đống tro tàn ấy, một chú phượng hoàng lửa (hoặc cáo lửa) sẽ trỗi dậy. Năm 2004, với nền tảng là bộ mã nguồn mở từ Netscape, trình duyệt Firefox được sinh ra. Kế thừa cách tiếp cận của Netscape, Firefox cũng là một trình duyệt mã nguồn mở, trái với sự kín kẽ và đóng mã nguồn của IE. Firefox được tạo ra với tinh thần tự do và hướng tới cộng đồng, nói cách khác, Firefox là một trình duyệt mã nguồn mở cho phép các lập trình viên trên toàn thế giới có thể tìm hiểu cách hoạt động của Firefox, tham gia quá trình phát triển, đưa ra ý kiến cải tiến sản phẩm. Quay lại với ví dụ về Vinfast trước đó, nếu Vinfast hoạt động theo hướng công khai toàn bộ quá trình làm việc và tài sản trí tuệ, các kỹ sư xe điện trên thế giới có thể tuỳ ý tìm hiểu và đóng góp ý kiến giúp xe Vinfast cải thiện. Mặt lợi của việc mã nguồn mở là có thể tận dụng được sức lực của cộng đồng với chi phí thấp, còn mặt hại là sẽ chẳng có cái gọi là bí mật kinh doanh (do mọi tài sản trí tuệ đều công khai, ai cũng có thể thoải mái sao chép ý tưởng) và sự giúp đỡ của cộng đồng không phải là thứ ổn định (vì cộng đồng không được trả thù lao).</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217917/ebhaze4ercvy7i9umjpc.png\" alt=\"Firefox thời kỳ đầu\" /><p>Việc Firefox ra đời ra mở ra Chiến tranh Trình duyệt Thứ hai, kéo dài từ 2004 đến 2017. Thời gian thấm thoắt thoi đưa, Firefox chiếm thị phần của IE chậm mà chắc như tằm ăn dâu. Sau 5 năm, Firefox đạt đỉnh thị phần với 31%, trở thành một thế lực đáng gờm trong thế giới trình duyệt. Mình vẫn nhớ vào năm này, có lần mình sang nhà đứa bạn chơi game. Như một thói quen, mình bấm vào IE để lên mạng. Bố thằng bạn thấy vậy, ngay lập tức thể hiện sự uyên bác hết xảy và cập nhật tối tân về công nghệ, chỉ chỉ trỏ trỏ cho mình biểu tượng con cáo lửa uốn quanh trái đất, bảo rằng dùng cái này mới mốt, mới oách, mới xịn. Mình ồ à ố á trong sự kinh ngạc khôn xiết, cảm thấy rằng khi công nghệ tiến lên phía trước, chỉ có mình là bị bỏ lại phía sau.</p><p>Ở một diễn biến khác, năm 2006 là một năm cách mạng cho JavaScript, với sự xuất hiện của 2 công nghệ mạnh mẽ là Ajax và Jquery.</p><p>Ajax là một kỹ thuật giúp trang web có thể xử lý thông tin một cách bất đồng bộ. Trước khi có Ajax, nếu bạn muốn lấy dữ liệu mới về trang web, bạn sẽ phải tải lại cả trang web. Ví dụ như khi bạn đang mua hàng, bạn thấy có món đồ vừa ý, và bạn bấm vào nút “Hiện giá”. Lúc này, trình duyệt sẽ tải lại, để cho bạn thẫn thờ chờ đợi trong vô định, và nội dung sau khi tải lại chỉ khác nội dung trước đó là mục giá tiền thôi. Việc này tốn thời gian và phung phí dữ liệu một cách khủng khiếp, gây ra bao phiền hà cho người dùng. Ajax ra đời với mục đích giải quyết vấn đề nhức nhối này: Ajax cho phép trang web của bạn gọi tới máy chủ và chỉ lấy về thông tin cần thiết. Quay trở lại ví dụ, khi bạn bấm vào nút “Hiện giá”, trang web của bạn sẽ gọi đến máy chủ chỉ để lấy thông tin giá, và sau đó hiển thị thêm mục giá tiền lên trên trang web. Bạn chẳng cần phải đợi trang tải lại nữa. Có người bảo đợi chờ là hạnh phúc, nhưng sự đợi chờ này quả là muôn phần sai sót khi xét ở khía cạnh trải nghiệm người dùng. Việc này tiết kiệm được rất nhiều thời gian và dung lượng phải gửi qua gửi lại, ngoài ra còn làm trải nghiệm người dùng mượt mà hơn. Thời này, khái niệm ứng dụng web (Web Application) nổi lên với sự xuất hiện của trang Gmail và Google Maps. Hai trang này xài Ajax, khiến cho trải nghiệm mượt mà chẳng khác gì ứng dụng trên desktop, làm lay động trái tim của không biết bao nhiêu người dùng.</p><p>Cùng năm đó, Jquery được phát minh. Về bản chất, Jquery là một thư viện JavaScript.</p><p>Cho những độc giả đang thắc mắc khái niệm thư viện là gì, thì có thể hiểu như sau: nếu ví JavaScript là các khối Lego lẻ tẻ, thì thư viện là một bộ công cụ tiện lợi được lắp sẵn từ Lego như dao, kéo, búa, vân vân. Bạn có nhu cầu đập phá thì lấy búa xài luôn, chứ không cần ngồi lắp các mẩu nhỏ thành một cây búa hoặc dùng mấy mẩu Lego đem đi đập linh tinh, vừa kém hiệu quả lại tốn thời gian. Jquery là một bộ công cụ như thế.</p><p>Trước khi có Jquery, các trình duyệt không hề thống nhất trong cách chạy JavaScript, do đó mà 1 đoạn JavaScript có thể chạy ngon ở trình duyệt này lại có thể không hoạt động ở trình duyệt khác, giống như là các trình duyệt cùng nói tiếng Việt (JavaScript) nhưng lại dùng tiếng Việt của những vùng miền khác nhau. Các lập trình viên khi đó phải vất vả viết JavaScript phục vụ cho từng trình duyệt, giống như diễn tả quả roi cho người bắc thì viết là roi, người miền nam thì là mận, người tiểu vương quốc thì là bồng bồng. Thật trớ trêu, khi mà trong thời kỳ hỗn mang, sự bất đồng giữa các trình duyệt nằm ở việc sử dụng các ngôn ngữ lập trình khác nhau (JavaScript và JScript), và đã được ECMA giải quyết bằng bộ tiêu chuẩn ECMAScript, thì sau đó, lòi ra vấn đề bất đồng trong chính cách chạy JavaScript giữa các trình duyệt, khiến giới lập trình viên vò đầu bứt tai. Jquery ra đời, vừa biến việc viết JavaScript trở nên tiện lợi (vì Jquery là thư viện, hay bộ công cụ tiện lợi như đã nói ở trên), vừa đảm bảo viết 1 lần thì JavaScript sẽ chạy ngon lành ở mọi trình duyệt (vì Jquery đã xử lý hết việc đồng nhất roi-mận-bồng bồng cho người dùng), lại còn tích hợp Ajax. Từ đó mà các kỹ sư phần mềm bớt được rất nhiều thời gian làm những thứ lặp đi lặp lại, hướng trọng tâm vào giải quyết nhu cầu thực sự của người dùng. Jquery đã khai thông cái bế tắc trong lòng bao kỹ sư phần mềm, và một lần nữa, thiên hạ lại thái bình, giang sơn lại thống nhất.</p><p>Với sự phát triển của những công nghệ vừa kể, việc tạo ra trang web ngày càng tốn ít thời gian công sức và sản phẩm làm ra ngày càng chất lượng. Người dùng liên tục chứng kiến những ứng dụng web tân tiến sinh ra nhằm phục vụ những nhu cầu ngày càng phức tạp của họ.</p><h2>Phần 4: Trăm hoa đua nở, trăm nhà đua tiếng</h2><p>Năm 2008, khi cuộc đối đầu giằng co giữa Firefox và IE đang cao trào, bỗng có một nhân tố đột phá, thay đổi bức tranh trình duyệt đến tận ngày nay. Nhân tố ấy mang tên Chrome.</p><p>Được phát triển bởi Google, Chrome xuất hiện như một chú ngựa ô. Chrome nhanh chóng được cộng đồng yêu thích bởi giao diện thân thiện, trải nghiệm sử dụng mượt mà, tốc độ cao, tích hợp mạnh mẽ với các nền tảng trong hệ sinh thái của Google. Tận dụng việc công cụ tìm kiếm Google đã quá phổ biến, Chrome nhanh chóng tiếp cận được hàng triệu người dùng, giống như câu chuyện của IE năm xưa. Năm 2009, Firefox đạt 31% thị phần và từ từ giảm dần qua những năm sau đó. Còn Chrome thì vụt lên như vũ bão, dần dần đẩy Firefox và IE ra khỏi top đầu. Chỉ sau 4 năm, đến 2012, Chrome hiên ngang đội cho mình vương miện nhà vua với thị phần cao nhất, và vương miện ấy vẫn còn nằm trên đầu Chrome cho đến hôm nay, với hơn 60% thị phần.</p><p>Hướng cái nhìn về Việt Nam, năm 2013, một phiên bản anh em sinh đôi khác cha khác mẹ của Chrome xuất hiện, mang tên Cờ Rôm Cộng. Trình duyệt này quảng cáo rầm rộ trên các trang báo mạng và các trang chơi flash game, thu hút một lượng lớn người dùng trong nước. Cờ Rôm Cộng đã đổi tên thành Cốc Cốc, và vẫn hoạt động ổn định đến hôm nay.</p><p>Về mặt công nghệ làm ra ứng dụng web, giai đoạn từ 2010 đến nay chứng kiến sự nở rộ khủng khiếp của các công nghệ mới và sự lụi tàn nhanh chóng của những kẻ không còn phù hợp với thời cuộc. Thật dễ hiểu, mọi thứ rồi sẽ tồn tại và chuyển động theo con đường tiến hoá đúng đắn nhất. Công nghệ nào không kịp thích ứng và tiến hóa rồi sẽ có ngày chỉ còn tồn tại trong ký ức.</p><p>Ở địa hạt JavaScript, mặc dù đã có bộ công cụ mạnh mẽ mang tên Jquery, các lập trình viên vẫn đòi hỏi một thứ gì đó tiện lợi hơn để tạo ứng dụng web. Google đã cho họ câu trả lời vào năm 2010 bằng cách ra mắt Angular, một framework JavaScript để tạo ứng dụng web.</p><p>Hẳn là độc giả lại thắc mắc: framework là cái chi? Quay lại ví dụ vừa nãy, nếu coi JavaScript là các mẩu Lego, và bạn cần phải lắp một cái xe, thì bạn vẫn hoàn toàn có khả năng làm được, chỉ là bạn sẽ mất nhiều thời gian lắp từng mẩu nhỏ với nhau. Framework, như cái tên của nó, là một bộ khung. Bạn có thể coi framework như là tập hợp các linh kiện như bánh xe, cửa xe, ghế ngồi được lắp sẵn, và bạn chỉ việc ghép các linh kiện vào với nhau để tạo ra chiếc xe hoàn chỉnh với ít thời gian công sức phải bỏ ra hơn, ngoài ra bạn có thể nâng cấp thay đổi chiếc xe một cách dễ dàng, như là thay bánh, thay cửa, thêm ghế ngồi, thêm thùng chứa, gắn gương.</p><p>Việc các framework ra đời giúp giới lập trình viên dễ phát triển, bảo trì, mở rộng tính năng ứng dụng web. Không nằm ngoài xu thế, vào năm 2013, Facebook cho ra đời React, một framework giúp tạo ra ứng dụng web dễ dàng. Năm 2014, một cựu nhân viên Google tạo ra Vue, cũng là một framework cho ứng dụng web. Bộ ba Angular-React-Vue từ đó trở thành những công nghệ quan trọng cho ứng dụng web.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700217947/noazsz03anqqqsutgilu.png\" alt=\"Framework hiện hành\" /><p>Năm 2015, phiên bản mới nhất của HTML trình làng, được gọi là HTML5. HTML5 cho phép chèn trực tiếp file video và audio vào trang web, ngoài ra còn bổ sung các tính năng cho biểu mẫu, làm cho trang web ngày càng tiện lợi. HTML5 vẫn đang là tiêu chuẩn cho tới nay.Cùng năm đó, khi chứng kiến sự sụt giảm không phanh của IE, Microsoft quyết định cải tổ IE và cho ra đời trình duyệt Edge nhằm thay thế IE. Tuy vậy, từ đó đến nay, Edge vẫn chiếm thị phần khá nhỏ, mặc cho sự quảng bá hết mức của Microsoft. Lật đổ được ngôi vương của Chrome quả thật không dễ.Năm 2017, với sự sụt giảm thị phần của Firefox, Edge, khi mà mỗi trình duyệt chỉ chiếm dưới 5% thị phần, và sự độc tôn của Chrome với hơn 60% thị phần, cựu giám đốc công nghệ của Mozilla (cty chủ quản của Firefox) đã tuyên bố rằng Chrome là kẻ chiến thắng. Hành động giương cờ trắng này đã kết thúc Chiến tranh Trình duyệt Thứ hai.</p><p>Trở lại một chút với JavaScript, không chỉ sự nổi lên của các framework mới là điều ấn tượng, mà còn là sự xuất hiện của các công cụ hỗ trợ giúp việc lập trình web ngày càng dễ dàng.</p><p>Năm 2009, NPM (Node Package Manager) ra đời. Hiểu nôm na thì NPM là một khu chợ cho các thư viện JavaScript: nếu bạn cất công tạo ra được một chiếc chảo Lego từ một đống mẩu Lego nhỏ lẻ, bạn có thể đem chiếc chảo của mình lên khu chợ NPM này, và mọi người trên thế giới có thể lấy về dùng mà không cần phải mất công nghiên cứu làm lại cái chảo tương tự. Điều này thúc đẩy sự chia sẻ kiến thức, tạo ra môi trường cạnh tranh lành mạnh, và là nguồn tài nguyên quý báu của các lập trình viên.</p><p>Năm 2011, Browserify xuất hiện. Cơ bản thì Browserify là công cụ cho phép đóng gói ứng dụng web thành một khối thống nhất và gọn nhẹ.</p><p>Lại phải nói thêm một chút để bạn đọc hiểu khái niệm đóng gói là gì. Ở trên ta đã có ví dụ về ba chàng hiệp sĩ mộng mơ HTML-CSS-JavaScript là ba thành phần đóng vai trò cốt yếu trong việc tạo nên trang web. Công cụ đóng gói sẽ kết hợp 3 thành phần này lại, sắp xếp chúng để tạo ra một ứng dụng web hoàn chỉnh. Có thể bạn đã từng đọc Doraemon, có tập truyện ngắn xuất hiện bảo bối Máy sản xuất con người. Với nguyên liệu là HTML (khung xương), CSS (bộ da), JavaScript (não), công cụ đóng gói sẽ hoạt động giống Máy sản xuất con người, sẽ bọc da ngoài xương cho đúng chỗ, lắp não vào đúng vị trí, lược bỏ những phần thừa thãi, rồi đưa ra sản phẩm cuối cùng là một con người hoàn thiện.</p><p>Mới chỉ hơn 30 năm từ lúc trình duyệt đầu tiên xuất hiện, và mới gần 20 năm từ lúc lần đầu tiên mình dùng internet, bức tranh thế giới công nghệ đã phát triển chóng mặt. Có thể với nhiều người, mấy trang web thì cũng chỉ là mấy trang web thôi, cũng chỉ là vài dòng chữ với vài mẩu ảnh không hơn không kém, nhưng đằng sau cánh gà, biết bao nhiêu tiến bộ về công nghệ đã giúp cái gọi là “chỉ là trang web” đó ngày càng nhanh, tiện lợi, mạnh mẽ, bảo mật, thân thiện, và phục vụ nhiều mục đích hơn của con người. Công nghệ đã, đang, và sẽ luôn có điểm yếu, nhưng còn điểm yếu là còn tiềm năng để phát triển, để rồi tiếp tục trưởng thành qua sóng gió của thời gian.</p>', 69, 'Một ngày nghỉ hè năm 2005, nhà mình lắp mạng. Với việc bị cấm bén mảng tới quán net từ những ngày thơ ấu, mình lúc đó chẳng hiểu mạng...', NULL, 'https://tenten.vn/tin-tuc/wp-content/uploads/2022/05/trang-web-thu-vi-6.jpg', 0.00, 6, 1, 26, '2023-11-17 17:46:27.222000', 0);
INSERT INTO `blog` VALUES (227, 'Tôn giáo là gì?', '<img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700218273/id3mutpumhxdo0suyztq.png\" alt=\"<i>Tôn giáo là gì</i>\" /><p>- Tôn giáo là gì vậy anh?</p><p>- Trời, có vậy mà cũng hỏi. Đợi chút để anh... google. Đây rồi, tôn giáo là blah blah blah...</p><p>- Hic. Lúc chưa giải thích em còn biết chút chút, nghe anh giải thích xong em muốn điếc luôn...</p><p>- Hmm vậy để anh lấy ví dụ cho dễ hiểu. Em có thích đọc tiểu thuyết không?</p><p>&nbsp; - Có! Em mê cuốn <a href=\"https://spiderum.com/bai-dang/Suoi-nguon-9t4\" target=\"_blank\">\"Suối nguồn\"</a> lắm, bữa giờ đêm nào cũng ôm đọc tới sáng.&nbsp;&nbsp;</p><p>- Ok vậy anh ví dụ nếu như em gặp bà tác giả Ayn Rand ngoài hội sách, em đến xin chữ ký và hỏi bả liệu những nhân vật trong đó có thật hay không...</p><p>- Em nghĩ là không đâu, đặc biệt là nhân vật chính thấy \"ảo\" lắm.</p><p>- Uhm có thể bả sẽ trả lời em những nhân vật đó chỉ là do bả tưởng tượng ra thôi. Sau đó em về nhà, nằm vắt chân lên trán suy nghĩ. Nếu như những nhân vật trong sách cũng có cuộc đời và số phận giống như mình, mà chỉ là sản phẩm của trí tưởng tượng; thì liệu có khi nào mình và những người khác cũng chỉ là do ai đó - một tác giả, hay một đấng sáng tạo nào đó tưởng tượng ra hay không... Đó là khi nhận thức về tôn giáo bắt đầu hình thành.</p><p>- Ủa sao em thấy giống môn triết học quá vậy?</p><p>- À bởi vì tôn giáo là kết quả của tất cả các câu trả lời để giải thích cho nguồn gốc, quan hệ giữa nhân loại và vũ trụ; những câu hỏi về mục đích, ý nghĩa cuối cùng của sự tồn tại... cho nên những tư tưởng tôn giáo thường mang tính triết học là vậy.</p><p>- Em cứ tưởng tôn giáo là những tổ chức thần bí, gồm nhiều tín đồ, cùng với những nghi lễ thờ cúng, cầu nguyện gì chứ?</p><p>- Đó là nghĩa hẹp hơn, gọi là những \"tổ chức tôn giáo\" và các \"hoạt động tôn giáo\". Những ý niệm về tôn giáo chia thế giới thành hai phần: thiêng liêng và trần tục. \"Trần tục\" là những gì bình thường trong cuộc sống con người, còn \"thiêng liêng\" là cái siêu nhiên, thần thánh. Đứng trước sự thiêng liêng, con người thường sử dụng lễ nghi để bày tỏ sự tôn kính, sùng bái.</p><p>- Vậy theo anh nghĩ có sự tồn tại của \"thần thánh\" hay \"Chúa Trời\" không?</p><p>- Hmm... Đó là vấn đề mà đến giờ nhiều người vẫn đang tranh cãi. Quay lại với ví dụ lúc đầu, nó cũng giống như khi một nhân vật trong cuốn tiểu thuyết của em một hôm tuyên bố rằng: \"Thực ra chúng ta chỉ là những nhân vật tưởng tượng, được viết ra trong cuốn sách của một tác giả nào đó\". Còn những nhân vật khác phản bác lại: \"Vớ vẩn! Cuốn sách chỉ là cuốn sách như nó vốn là thôi, làm gì có ai viết ra kia chứ. Nếu như có người nào viết ra nó, thì người đó ở trong cuốn sách nào, và ai là người viết ra cuốn sách đó?\"</p><p>- À giờ thì em đã hiểu. Thì ra tôn giáo \"hack não\" như thế, hèn nào các tín đồ dễ nổi cáu và đánh nhau suốt ngày anh nhỉ?</p>', 96, '- Tôn giáo là gì vậy anh? - Trời, có vậy mà cũng hỏi. Đợi chút để anh... google. Đây rồi, tôn giáo là blah blah blah... - Hic. Lúc..', NULL, 'https://cdn.luatminhkhue.vn/lmk/articles/71/357104/dat-ton-giao-la-gi---khai-niem-ve-dat-ton-giao-357104.png', 0.00, 7, 1, 0, '2023-11-17 17:52:38.261000', 0);
INSERT INTO `blog` VALUES (228, 'Tôn giáo đối với cuộc sống\n', '<p>Trong quá trình phát triển của loài người tôn giáo luôn góp 1 phần không hề nhỏ vào tiến trình phát triển của nhân loại. Khi nói đến tôn giáo người ta liên tưởng đến việc thần thánh hoá những hiện tượng siêu nhiên, các vị thần, …… Tuy nhiên sự thật nằm sau đó không phải mang tính chất thần thánh hoá 1 thứ gì đó để khống chế con người, hay điều khiển con người phụ thuộc vào tôn giáo. Mà thực sự tôn giáo là cái nôi của tính chân thiện mỹ mà con người dần dần đánh mất trong tiến trình tồn tại trong lịch sử.</p><p>Nếu nhận định thì trên thực tế chúng ta có rất nhiều tôn giáo khác nhau trên thế giới, thậm chí ở mỗi quốc gia đều có sự tồn tại của các giáo phái, tôn giáo khác nhau.Quả thật khi nói đến tôn giáo chúng ta chỉ không thể kể hết được. Tuy nhiên hôm nay chúng ta chỉ quan tâm nhiều tới ba tôn giáo lớn nhất đó là Phật giáo, Kito Giáo, Đạo hồi.</p><p>Phật giáo</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700218506/i1glq7t89kgue2b9qzwd.png\" alt=\"Phật giáo\" /><p>Phật giáo (chữ Hán: 佛教) là một tôn giáo bao gồm một loạt các truyền thống, tín ngưỡng và phương pháp tu tập dựa trên lời dạy của một nhân vật lịch sử là Tất-đạt-đa Cồ-đàm (悉達多瞿曇). Tất-đạt-đa Cồ-đàm thường được gọi là Phật hay Bụt. Theo sách vở Phật giáo cũng như các tài liệu khảo cổ đã chứng minh, Tất-đạt-đa Cồ-đàm đã sống và giảng đạo ở vùng đông bắc Ấn Độ xưa (nay thuộc Nepal) từ khoảng thế kỉ thứ 6 TCN đến thế kỉ thứ 4 TCN.Sau khi Tất-đạt-đa Cồ-đàm qua đời thì Phật giáo bắt đầu phân hóa ra thành nhiều nhánh và nhiều hệ tư tưởng, với nhiều sự khác biệt:</p><ul><li>Phật giáo Nguyên thủy, còn gọi là Phật giáo Nam Tông, Phật giáo Thượng tọa, Phật giáo Tiểu thừa, Thanh-văn thừa. Đây là nhánh Phật giáo có hệ thống kinh điển được coi là gần nhất với giáo lý nguyên thủy của đạo Phật</li><li>Phật giáo Đại thừa, còn gọi là Phật giáo Bắc tông, Phật giáo Đại chúng, Phật giáo Phát triển</li><li>Phật giáo Chân ngôn, còn gọi là Phật giáo Tây Tạng, Phật giáo Mật tông, Phật giáo Kim cương thừa,</li></ul><p>Phật giáo Nguyên thủy phát triển mạnh ở Sri Lanka và Đông Nam Á (Thái Lan, Lào, Campuchia, Myanmar). Đại thừa phát triển ở Đông Á (Trung Quốc, Hàn Quốc, Nhật Bản, Đài Loan, Việt Nam) và bao gồm nhiều phân nhánh nhỏ hơn như Tịnh độ tông, Thiền tông, Thiên thai tông. Còn Kim cương thừa phát triển ở Tây Tạng, Mông Cổ và Bhutan. Mặc dù phát triển chủ yếu ở châu Á, nhưng hiện nay Đạo Phật được tìm thấy ở khắp thế giới. Ước tính số người theo đạo Phật vào khoảng 350 triệu đến 700 triệu người.Phật giáo là một tôn giáo mang tính duy lý và vô thần. Hệ thống giáo lý của Phật giáo không hướng đến sự sùng bái thần linh mà hướng đến nhận thức chân lý hay còn gọi là giác ngộ. Chính sự nhận thức đúng đắn bản ngã và thế giới xung quanh sẽ giúp con người được giải thoát. Các trường phái Phật giáo khác nhau ở quan điểm về bản chất của con đường đưa đến giác ngộ để được giải thoát, tính chính thống của các bài giảng đạo và kinh điển, đặc biệt là ở phương thức tu tập. Vì hướng đến việc nhận thức đúng đắn bản ngã và thế giới khách quan nên hệ thống triết lý Phật giáo chứa đựng nhiều quan điểm bản thể luận và nhận thức luận. Siêu hình học trong triết học Phật giáo đã phát triển đến một trình độ cao. Với Phật giáo, triết học Ấn Độ đã đi trước triết học phương Tây trên 1000 năm. Tại phương Tây, đến thời kỳ Khai sáng triết học mới đạt đến trình độ nhận thức của triết học Ấn Độ. Cũng như Nho giáo và triết học phương Tây hiện đại, Phật giáo là một hệ thống triết học mang tính khai sáng nhằm hướng con người đến Chân - Thiện - Mỹ.\n\n</p><p>Khi nói đến Phật giáo chúng ta thường nghĩ đến cõi niết bàn hay tây phương cực lạc, đối với Phật giáo coi trọng 2 chữ “Duyên\" và “Ngộ\" đó thường liên kết với luân hồi và mỗi người sống trên đời đều phải luôn hiểu được chữ “nghiệp\" tiền thân với những sai phạm của bản thân hại người hại mình và kiếp sau để trả giá cho sai phạm của mình. Đối bản chất của lý niệm Phật giáo đó là hướng con người tới cái thiện để đời sau sẽ tốt hơn, nó nhưng muốn dạy con người tới tứ đại giai không để hoàn thành sứ mệnh của bản thân thoát khỏi luân hồi về cõi niết bàn.</p><h2>Kito giáo</h2><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700218570/sqqkaa8md7itzbphz2ux.png\" alt=\"Kito giáo\" /><p>Kitô giáo (thuật ngữ phiên âm) hay Cơ Đốc giáo (thuật ngữ Hán Việt) là một trong các tôn giáo khởi nguồn từ Abraham, đặt nền tảng trên giáo huấn, sự chết trên thập tự giá và sự sống lại của Giêsu Kitô như được ký thuật trong Kinh thánh Tân Ước. Kitô hữu (Cơ Đốc nhân) tin rằng Giêsu là Con của Thiên Chúa và là Đấng Messiah của người Do Thái như đã được tiên báo trong Kinh thánh Cựu Ước. Thuộc tôn giáo độc thần, hầu hết Kitô hữu tin rằng chỉ có một Thiên Chúa duy nhất hiện hữu trong ba thân vị (tiếng Hy Lạp: hypostasis) gọi là Ba Ngôi. Kitô giáo đóng một vai trò quan trọng trong nền văn hóa và văn minh phương Tây.</p><p>Trải qua hai thiên niên kỷ, các bất đồng về thần học và giáo hội học đã hình thành các hệ phái khác nhau. Bốn nhánh chính hiện nay của Kitô giáo là Công giáo Rôma, Kháng Cách, Chính Thống giáo Đông phương, và Chính Thống giáo Cựu Đông phương. Công giáo Tây phương, Chính Thống giáo Đông phương và Chính thống giáo Cựu Đông phương cắt đứt hiệp thông với nhau trong cuộc Ly giáo Đông–Tây năm 1054 và cuộc Ly giáo Chalcedon khởi đầu năm 451. Kháng Cách (cũng thường gọi là Tin Lành), không phải là một hệ phái đơn nhất nhưng là thuật từ nhóm hợp, phát sinh từ cuộc Cải cách Kháng nghị thế kỷ 16. Tính chung, Kitô giáo là tôn giáo lớn nhất thế giới với khoảng 2,3 tỉ tín hữu, chiếm hơn 31% dân số thế giới (năm 2015).</p><p>Từ nguyên của \"Kitô\" là Χριστός (Khristos) trong tiếng Hy Lạp, nghĩa là \"Đấng được xức dầu\", dịch theo danh hiệu Messiah trong tiếng Hebrew. Trong tiếng Việt, người Công giáo dùng từ \"Kitô\" để gọi danh hiệu này của Giêsu, trong khi người Tin Lành thường dùng từ \"Christ\". Bên cạnh từ \"Kitô\" phiên âm qua tiếng Bồ Đào Nha được sử dụng bởi tín hữu Công giáo, còn có từ \"Cơ Đốc\" xuất phát từ chữ Nho(基督) và thường được tín hữu Tin Lành sử dụng. Ngoài ra, một số người cũng dùng cách gọi Thiên Chúa giáo để chỉ Công giáo nói riêng và Kitô giáo nói chung.</p><p>Kito giáo khác hoàn toàn với phật giáo đối với kito giáo họ tôn thờ hai chữ đó là “tình yêu\". Nó rất giản dị trong định nghĩa của 2 từ trên là sự hy sinh và cống hiến. Trong kito giáo thường nhắc đến nhiều về “đức Kito hay Jesu người đã hiến thân mình đến chết mà không hối hận cho nhân loại, vì chuộc tội nhân loại mà người hiến thân mình trên thập giá” như một kẻ tội đồ. Vâng đó chính là từ đánh giá cho toàn bộ của đạo Kito giáo. Trong kito giáo dạy cho con người biết sống với nhau, biết chia sẻ giúp đỡ lẫn nhau. Và quan trọng hơn hết là đạo hiếu của một con người đối với gia đình. Không những thế nó còn là sự bảo tồn gìn giữ cho thế hệ con cháu sau này.</p><h2>Đạo Hồi</h2><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700218622/o0fh2xpzftuurpsytfsj.png\" alt=\"Đạo hồi\" /><p>Hồi giáo (tiếng Ả Rập: الإسلام al-\'islām), còn gọi là đạo Hồi, đạo Islam, là một tôn giáo độc thần thuộc nhóm các tôn giáo Abraham. Đây là tôn giáo lớn thứ hai trên thế giới, sau Kitô giáo, và là tôn giáo đang phát triển nhanh nhất, với số tín đồ hiện nay là 1,57 tỷ, chiếm 23% dân số thế giới. Đạo Hồi tôn thờ Đức Allah và Kinh Qur\'an (kinh Koran) là kinh sách quan trọng nhất.Hầu hết người theo đạo Hồi thuộc hai dòng, Sunni (75–90%), hoặc Shia (10–20%). Có khoảng 13% người theo đạo Hồi sống ở Indonesia, cộng đồng quốc gia Hồi giáo lớn nhất chiếm 25% ở Nam Á, 20% Trung Đông, và 15% ở hạ Sahara. Một số cộng đồng khác ở Châu Âu, Trung Quốc, Nga, và châu Mỹ. Các cộng đồng di dân và chuyển đạo cũng có ở nhiều nơi trên thế giới.Khi nói đến đạo hồi người ta thường nói đến khủng bố hay độc đoán. Nhưng trên thực tế đạo hồi vẫn là 1 đạo dạy con người về:</p><ol><li>Chỉ tôn thờ một Thiên Chúa (tiếng Á Rập là Allah).</li><li>Vinh danh và kính trọng cha mẹ.</li><li>Tôn trọng quyền của người khác.</li><li>Hãy bố thí rộng rãi cho người nghèo.</li><li>Cấm giết người, ngoại trừ trường hợp đặc biệt (*).</li><li>Cấm ngoại tình.</li><li>Hãy bảo vệ và chu cấp trẻ mồ côi.</li><li>Hãy cư xử công bằng với mọi người.</li><li>Hãy trong sạch trong tình cảm và tinh thần.</li><li>Hãy khiêm tốn</li></ol><p>đúng vậy đây cũng tôn giáo dạy con người tốt hơn và dạy con người hướng thiện, chỉ những kẻ sử dụng với mục đích cá nhân mới tạo ra sự ghê sợ và hỗn loạn mang tính chất ác liệt đối với nhân loại mà thôi.\n\n</p><p>Khi nói đến đạo hồi người ta liên tưởng tới việc trọng nam khinh nữ và coi phụ nữ như công cụ. Nhưng trên thực tế trước kia đối với đạo Hồi, khởi thuỷ là một tôn giáo có luật bảo vệ phụ nữ.&nbsp;</p><p>Nhưng đó là khởi nguyên của đạo hồi. Kể từ khi nhà Saud lên nắm quyền ở Arab Saudi vào thế kỷ 19 thì lại áp dụng một tư tưởng Hồi giáo cực đoan là Wahhabism và xem đó là chuẩn mực của thế giới Hồi giáo. Ví dụ: phụ nữ buộc phải trùm niqab xùm xụp chỉ hở 2 con mắt, phụ nữ nước ngoài phải khoác abaya đen, phụ nữ không được lái xe và phải có đàn ông giám hộ khi ra ngoài.</p><p>Bởi vì Arab Saudi sở hữu thánh địa Mecca nên lời nói của họ rất có sức nặng, gần như một dạng minh chủ võ lâm. Nhiều người đã sợ hãi trước uy quyền của nhà Saud nên đi theo giáo lý của họ. Chuyện này không dừng lại ở phạm vi lãnh thổ Arab Saudi mà đang lan rộng, dần định hình nên hình ảnh Hồi giáo thời hiện đại. Kể cả Iran sau cách mạng Hồi giáo năm 1979 của Ruhollah Khomeini cũng dần cực đoan khi trang phục bị thay đổi toàn bộ, và thiết đặt bộ luật hà khắc (vd: tình yêu đồng giới là trọng tội). Bọn cực đoan thấy các minh chủ Hồi giáo cũng thế thì lại càng như cá gặp nước, Wahhabism - kinh Koran được hiểu theo nghĩa khắc nghiệt nhất.</p><p>Tôn giáo có vai trò thế nào trong việc mưu cầu hạnh phúc của con người?</p><p>Các tôn giáo hiện tại có đang giúp con người hạnh phúc hơn? Hay thực chất làm cho họ bị giới hạn bởi những giáo điều? Mình thấy tôn giáo là thứ để giúp con người có niềm tin vào cuộc sống, một cái đích để hướng tới, nhưng hiện tại nhiều người sùng đạo quá mức dẫn đến sợ sệt, quá lệ thuộc vào chính niềm tin của họ. Bạn có quan điểm như thế nào? Trao đổi cùng tôi nhé.</p>', 96, 'Trong quá trình phát triển của loài người tôn giáo luôn góp 1 phần không hề nhỏ vào tiến trình phát triển của nhân loại. Khi nói đến..', NULL, 'https://cdn.luatminhkhue.vn/lmk/articles/82/414493/dac-diem-va-suc-manh-cua-ton-giao-trong-doi-song-xa-hoi-414493.jpg', 0.00, 7, 1, 0, '2023-11-17 17:57:29.874000', 0);
INSERT INTO `blog` VALUES (229, 'Angkor Wat - Bản hòa ca tôn giáo?', '<p>Điều khiến mình ngạc nhiên nhất tại Angkor Wat và Angkor Thom là sự hòa trộn tới mức hai-mà-như-một của Hindu giáo và Phật giáo trong kiến trúc và cách trang trí của hầu hết các đền mình tới thăm. Angkor Wat vốn là đền thờ thần Vishnu trong Ấn Độ giáo, nhưng mình ngó thấy nhiều tượng Phật rải rác trong đền. Đền Bayon – ngôi đền nổi tiếng với 216 khuôn mặt Phật khổng lồ lộ thiên, xây dựng dưới thời Phật giáo đang hưng thịnh tại vương quốc Angkor – được trang trí bằng hằng hà sa số những họa tiết chỉ có thể tìm thấy trong Hindu giáo: Tiên nữ Aprasa, Quỷ Asuras, Thần Devas,… Ban đầu chưa biết, mình còn tưởng cái giao thoa trong kiến trúc của Angkor Wat hiện nay có nghĩa là hơn 1000 năm trước người dân Angkor đã tôn trọng sự đa dạng tôn giáo nhiều đến mức cho hai đức tin hòa vào nhau luôn. Nhưng tìm hiểu sâu hơn thì hóa ra không phải vậy.</p><p>“Angkor Wat” có nghĩa là Thành phố của những ngôi đền, bao gồm hai phần chính là đền Angkor Wat (nơi thờ thần) và khu Angkor Thom (nơi Hoàng gia và người dân sinh sống, cũng có nhiều đền thờ). Hai khu này được xây dựng bởi hai ông vua khác nhau, theo hai tôn giáo khác nhau. Vua theo đạo nào thì đền mới được xây dựng và đền cũ được tái tạo theo đạo đó. Ban đầu, vua Suryavarman II – một ông vua theo Hindu giáo – xây đền Angkor Wat vào thế kỷ 12. Sau đó tới thế kỷ 14, vua Suryavarman VII theo Phật giáo lên ngôi, xây dựng khu Angkor Thom bao gồm rất nhiều đền thờ Phật giáo. Ổng còn ra lệnh thêm mùi Phật giáo vào Angkor Wat bằng cách đặt mấy cái tượng Phật vô. Sau đó nữa, khi Suryavarman VII mất và vương quốc Angkor lại chuyển qua theo đạo Hindu, các ngôi đền Phật giáo trước kia ở Angkor Thom lại tiếp tục được chỉnh sửa, thêm vào họa tiết Hindu. Khá nhiều bức tượng cả Hindu và Phật ở Angkor bị chặt đầu và tay, một phần vì bị quân Xiêm và Miến Điện sang xâm lược, phần khác vì chính người Angkor thay đổi tôn giáo nên muốn phá đi các biểu tượng của đức tin khác trong thành phố của họ.</p><p>Mình hiểu ra là trên đời này không mấy khi có cái gọi là hòa hợp tôn giáo. Người ta hoặc là vô thần hoặc là theo một đức tin suốt đời, trừ khi người ta muốn chuyển qua một đức tin khác. Chúng ta tôn trọng tôn giáo của nhau chứ không muốn mang một ít đức tin của người khác áp vào đức tin của mình.</p><p>Vì vậy nên mình càng thấy Angkor Wat hay ho. Dù không chủ ý, nhưng lịch sử Angkor với những lần đổi qua lại giữa Phật giáo và Hindu giáo khiến kiến trúc những ngôi đền nơi đây trở nên độc nhất vô nhị. Thêm nữa, Angkor Wat như một cái bảo tàng tái hiện kỹ năng xây dựng và điêu khắc đá đỉnh khỏi hỏi của người Khmer. Đi giữa những hành lang dài hẹp, những cổng vào rêu phong cổ kính, những đỉnh tháp khủng lồ và những bức phù điêu tinh xảo vương dấu bụi thời gian, bạn sẽ thấy mình quay ngược về thời cổ đại bí ẩn ma mị mà hùng vĩ đến rợn người.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700218850/viemub7pixu8zlpfcjsh.png\" alt=\"&nbsp;Angkor Wat\" /><p>Người ta có thể tới thăm Angkor Wat rất nhiều lần trong đời mà mỗi lần lại khám phá ra một cái gì đó mới mẻ hay ho bên ngoài những lời hướng dẫn du lịch. Có những bí ẩn về thành phố Angkor mà đến tận bây giờ vẫn chưa ai tìm ra lời giải. Mình biết một chị gái Trung Quốc mua vé 7 ngày và mang lều vào khu đền Angkor ngủ bụi suốt cả tuần để đi bộ thăm các đền. Có những người tới Angkor cả tháng mà không chán.</p><p>Lịch trình đi Angkor Wat</p><p>Vé vào cửa Angkor Wat hiện nay là $37 (vé 1 ngày), $62 (vé 3 ngày) và $72 (vé 7 ngày). Mắc thôi rồi. Và nữa, Angkor Wat mỗi ngày đón đến hơn 1000 lượt khách du lịch – thành ra các đền nổi tiếng thường đông như mắc cửi và chật như nêm, khó ngắm nghía hay chụp ảnh cho thoải mái. Nhưng đa số khách du lịch thường đi theo tour do người lái tuktuk gợi ý – lịch trình trăm người như một nên chúng ta sẽ có lợi hơn nếu không thuê tour và đi ngược lại cái lịch trình bình thường người ta hay đi. Đó chính xác là những gì hai đứa mình đã làm ở Angkor Wat. Mình sẽ viết lại cái lịch trình của mình ở đây cho mọi người tham khảo.</p><p>5:30 – 6:30: Ngắm bình minh ở Angkor Wat (Cùng với chừng 1000 khách du lịch khác)</p><p>7:00 – 8:30: Đi qua đền Bayon và Vitory Gate (Vắng tanh, khi bọn mình vào không có một ai. Virory gate thì đúng hướng mặt trời mọc nên ánh sáng rất đẹp, chụp ảnh ảo diệu lắm)</p><p>9:00 – 10:30: Qua đền Preah Khan (Cũng vắng, lại có ánh nắng mặt trời nên ảnh đẹp thôi rồi)</p><p>11:00 – 12:00: Qua đền Pre-up</p><p>13:00 – 14:30: Qua đền Ta Prohm (Đi buổi trưa nên không đông bằng những giờ khác)</p><p>15:00 – 17:00: Quay lại ngắm Angkor Wat. (Không đông lắm vì người đi tour thường đi Angkor Wat buổi sáng).</p><p>Về từng ngôi đền</p><ol><li>Bayon</li></ol><p>Bayon là nơi mình thích nhất trong những đền mình đi qua. Được xây dựng dưới thời vua Suryavarman VII vào thế kỷ 14, Bayon nằm ở chính giữa thành phố Angkor Thom lúc bấy giờ đang phát triển thịnh vượng. Ngôi đền gồm 54 ngọn tháp lớn nhỏ, trên mỗi đỉnh tháp khắc bốn gương mặt y chang nhau – được cho là của Quan thế âm Bồ tát – hướng ra bốn phía. Bước vào bên trong khu đền Bayon rộng lớn, bạn sẽ thấy tổng cộng 216 khuôn mặt với nụ cười bí ẩn hơn Mona Lisa đang nhìn xuống mình trìu mến. Điều tuyệt vời là người ta đẽo và ghép đá vào với nhau để làm ra những gương mặt có khi to và dài hơn cả cái thân hình 1m5 của mình – ghép bằng cách bí ẩn nào đó không cần dùng đến xi măng cốt thép nhưng đủ giữ cho kiến trúc hùng vĩ này đứng vững vài trăm năm dưới thời tiết Siem Reap nóng như đổ lửa.\n\n</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700218870/oh3p6fzux2of0njvfbi9.png\" alt=\"Image\" /><p>Đến bây giờ người ta vẫn tranh cãi nhau về ý nghĩa của 216 gương mặt ở Bayon. Đa số cho rằng đó là mặt Phật, một số ít khác nghĩ đó là gương mặt của vua Suryavarman VII, trong khi một trường phái khác cho rằng nó hao hao chân dung thần Shiva – một vị thần Hindu. Bí ẩn về những gương mặt cũng là lý do Bayon – được xây dựng theo kiến trúc Phật giáo – sống sót nguyên vẹn qua thời Hindu giáo mà không bị phá hủy.</p><p>Bayon còn hay ho nhờ hơn 1 km phù điêu trên những bức tường bao quanh đền. Người xưa tin rằng phía Đông là nơi Thần ở, và chiều thuận kim đồng hồ là chiều của sự sống – nên nếu bạn đứng ở cửa Đông của Bayon và ngắm những bức phù điêu trên tường theo chiều kim đồng hồ, bạn sẽ thấy câu chuyện dựng nước và giữ nước của người Khmer xưa hiện lên rõ ràng, thú vị và sáng tạo bất ngờ. Từ đời sống hàng ngày của dân chúng đến trận chiến giữa Khmer và Champa, đến thời kỳ phát triển thịnh vượng của vương quốc Angkor đều được kể lại bằng những bức hình.</p><p>Mình thích những câu chuyện phù điêu kể còn hơn chính kiến trúc Bayon, chỉ đi ngắm nghía và nghe lỏm hướng dẫn viên giới thiệu cũng tốn của mình cả tiếng đồng hồ.</p><ol><li>Preah Khan</li></ol><p>Preah Khan cũng là ngôi đền Phật giáo được xây dựng dưới thời vua Suryavarman VII (Với các vị vua của Angkor, đền chùa chính là quyền lực – vua càng xây được nhiều đền thì càng chứng tỏ đất nước dưới thời vua đó phát triển thịnh vượng.) Đền được cho là nơi ở của Hoàng gia trước khi Angkor Thom được xây dựng. Nói là đền, thực ra Preah Khan ngày xưa là một thành phố nhỏ, với diện tích 57 ha và dân số 90 ngàn người.Preah Khan nổi tiếng với những dãy hành lang hẹp và dài cứ nối tiếp mãi như thể không bao giờ hết. Khi ánh nắng chiếu xiên từ bên ngoài vào trong đền, những tảng đá vốn lạnh lẽo gặp nắng biến thành màu mật ong, nhìn vừa ấm áp vừa cổ kính đến mức mình đã ngây người ngắm, mở ngoặc, và chụp ảnh sống ảo, đóng ngoặc.</p><p>Điều thú vị của Preah Khan là hai con Garuda đứng canh ngoài cổng đền. Garuda xuất hiện trong cả Hindu giáo và Phật giáo – một linh vật đầu người thân đại bàng có năng lực mạnh nhất trong thế giới loài chim, đại diện cho sức mạnh Hoàng gia và là phương tiện đi lại của thần Vishnu. Khi mình ở Ấn Độ, mình hiếm khi thấy Garuda xuất hiện trong các ngôi đền Hindu. Thế nhưng ở những đất nước Đông Nam Á nơi ảnh hưởng của Hindu và Phật giáo mạnh như nhau thì Garuda lại phổ biến đến bất ngờ – không chỉ xuất hiện to bự ở Angkor Thom, Garuda còn được chọn làm biểu tượng quốc gia cho cả Thái Lan và Indonesia (mà Indonesia giờ là đất nước Hồi giáo lớn nhất thế giới nữa chứ, thiệt khó hiểu ha).&nbsp;&nbsp;</p><ol><li>Ta Prohm</li></ol><p>Ta Prohm thì đã quá nổi tiếng với hình ảnh rễ cây cổ thụ từ mái đền mọc tràn xuống đất – ngôi đền từng được chọn làm bối cảnh cho bộ phim Hollywood của Angelina Jolie. Người ta nói rằng sau khi thời đại Angkor lụi tàn, Ta Prohm bị bỏ hoang quá lâu đến mức những chú chim làm tổ ở đây và mang hạt cây về thả trên mái đền. Lâu dần cây bén rễ và lớn lên ngay trên mái, rễ đổ tràn xuống mái đền, chọc thủng cả tường để xuống đất tìm dinh dưỡng. Hiện nay người ta đã gia cố và khiến cây cổ thụ chết bằng cách cắt rễ và cành để bảo vệ cho tường đền không đổ rạp, nhưng cảnh tượng hùng vĩ và ma mị của Ta Prohm vẫn được giữ nguyên với những bức tường xanh màu rêu hùng tráng hút hồn du khách. Cơ đêm đến mà bị thả ra giữa Ta Prohm một mình thì sợ phải biết.\n\n</p><p>Ta Prohm không phải đền thờ thần mà là đền tôn vinh Hoàng gia, cũng do vua Suryavarman VII xây dựng. Ngôi đền bao gồm nhiều khu đền thờ nhỏ, trong đó ở chính giữa là đền thờ Mẹ (mẫu hậu vua), phía Bắc và Nam có đền thờ người có uy tín với vua và anh trai vua, và tất nhiên có luôn khu đền thờ Cha vua. Đây cũng là nơi thể hiện rõ nhất sự giàu có của vương quốc Angkor ngày trước – trên bốn bức tường của đền thờ Mẹ gắn đầy kim cương – mỗi viên to bằng bàn tay trẻ con. Tất nhiên là kim cương đã bị quân xâm lược chôm hết từ rất lâu rồi, nhưng dấu vết những cái hốc đặt kim cương vẫn còn rất rõ.</p><p>Có một câu hỏi về Ta Prohm mà đến bây giờ người ta vẫn chưa lý giải được – đó là hình khắc một con vật giống khủng long ăn cỏ trên tường đền. 1000 năm trước làm sao người Khmer biết khủng long tồn tại ha? Hay họ đã vô tình tìm thấy một con còn sót lại và khắc đại nó lên tường trước khi đánh chén?</p><ol><li>Angkor Wat.</li></ol><p>Angkor Wat được xây sớm nhất trong khu di tích Angkor với cấu trúc mô phỏng núi Meru – quê hương của các vị thần: một đỉnh tháp chính giữa và bốn đỉnh bốn bên đại diện cho năm ngọn núi, các bức tường và hào nước xung quanh tượng trưng cho đất liền và đại dương. Vốn là một ngôi đền Hindu, ngôi đền thờ một bức tượng thần Vishnu cao 3m cùng rất nhiều biểu tượng Hindu giáo được khắc trên các chân cột và mái đền.\n\n</p><p>&nbsp; Điều hay ho nhất của Angkor Wat – với mình – lại là những bức phù điêu trên bốn bức tường bên ngoài khu đền chính. Không giống câu chuyện dựng nước và giữ nước ở Bayon, những bức phù điêu của Angkor Wat kể lại sinh động những truyền thuyết về thần và niềm tin đầy tính tâm linh của người Khmer ngày trước. Bước dọc 800m phù điêu, bạn sẽ thấy câu chuyện Quỷ đấu tranh với Thần để khai sinh thế giới, chuyện Diêm Vương phán xét mỗi người sau khi họ chết để quyết định họ lên thiên đường hay xuống thiên đường, chuyện những vị thần Hindu tranh giành quyền lực và sử thi Ramayana nổi tiếng thứ hai của Ấn Độ cổ đại.</p><p>Một câu chuyện khác không biết vui hay buồn là về cuộc sống của người dân Siem Reap hiện tại. Nhờ lượng khách du lịch đổ về đây, Siem Reap từ một mảnh đất làm nông hóa thành đất dịch vụ nơi đa số đàn ông làm lái xe tuk tuk và đa số phụ nữ trẻ con đi bán hàng dạo kiếm sống. Mình từng bị vây kín bởi một nhóm các bé gái đen nhẻm tóc đỏ râu ngô chèo kéo mời mua đồ lưu niệm – không biết ai dạy mà các em đã biết nói: “You give me money so I can go to school”. Anh trai lái tuk tuk bọn mình thuê kể với mình bằng chút ít Tiếng Anh và rất nhiều ngôn ngữ cơ thể, rằng anh không có bố, không được đến trường và (dù đẹp trai) không lấy được vợ vì “mẹ vợ đòi phải đưa nhiều tiên nhiều vàng mới cho mang vợ về”.</p><p>Campuchia là như vậy đó, quá khứ vàng son nhưng hiện tại xạm bụi đường và mặn mồ hôi. Đất nước khiến người ta ngẩng đầu ngưỡng mộ nhưng cũng khiến người ta cúi đầu thương cảm. Đất nước của những cảm xúc đủ màu.</p>', 67, 'Điều khiến mình ngạc nhiên nhất tại Angkor Wat và Angkor Thom là sự hòa trộn tới mức hai-mà-như-một của Hindu giáo và Phật giáo trong...', NULL, 'https://genk.mediacdn.vn/139269124445442048/2023/7/6/angkor-wat-1688617450834585992644-1688621019094-1688621019552296580196.jpg', 0.00, 7, 1, 27, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (230, '\"Tôn giáo là thuốc phiện của nhân dân\" - Karl Marx', '<p>\"<a href=\"https://spiderum.com/bai-dang/Tra-loi-cau-hoi-ton-giao-la-gi-va-tac-dung-cua-ton-giao-khi-doc-cuon-The-world-ultil-yesterday-phan-1-6ia\" target=\"_blank\">Tôn giáo</a> là thuốc phiện của nhân dân\"</p><p>Hôm nay, mình xin được giới thiệu về tư tưởng của <a href=\"https://spiderum.com/bai-dang/Ve-Karl-Marx-wwu\" target=\"_blank\">Karl Marx</a> về tôn giáo qua câu nói rất nổi tiếng của ông, đây là câu cửa miệng của những người vô thần, dùng để đả kích tôn giáo tại Việt Nam. Nhưng thực sự, có mấy ai hiểu được tư tưởng của Marx hay chỉ hùa theo một cách vô thức ? Chúng ta hãy cùng xem xét, phân tích quan điểm của Marx qua bài viết sau đây.</p><p>&nbsp;Trước hết, chúng ta cùng điểm qua về cách hiểu thông thường mà tôi cho rằng là của đa số người Việt khi nói tới câu nói trên của Marx. Đó là những lời suy diễn kiểu như tôn giáo là một hệ thống mị dân, khiến quần chúng nhân dân mê muội, mất ý thức, tôn giáo là cách để lợi dụng nhân dân. Tôn giáo là thứ bịp bợm, ru ngủ nhân dân. Hay cực đoan hơn, họ suy diễn rằng Marx đang ám chỉ Thiên Chúa Giáo, Tin Lành làm u mê con người. Nói chung, khi nghe câu nói trên thì sẽ không ít người sẽ gán cho tôn giáo những lời lẽ tiêu cực, những lời lẽ chỉ ra rằng tôn giáo là thứ gì đó xấu xa, cần phải được xóa bỏ hoàn toàn. Họ phỉ báng tôn giáo nhân danh Marx.&nbsp;</p><p>Nhưng, liệu Marx có nghĩ như vậy hay không ? Tôi xin được trích đoạn câu nói trên của Marx.</p><p>Trong tác phẩm : \"Lời đầu của góp phần phê phán triết học pháp quyền của <a href=\"https://spiderum.com/bai-dang/Hegel-da-biet-se-co-nhung-ngay-nhu-hom-nay-9oz\" target=\"_blank\">Hegel</a>\" , Karl Marx có nói như sau :&nbsp;</p><p>\" Sự đau khổ của tôn giáo, một mặt là biểu hiện của sự đau khổ hiện thực và mặt khác là sự phản kháng chống sự khổ đau hiện thực ấy. Tôn giáo là tiếng thở dài của chúng sinh bị áp bức là trái tim của thế giới không có trái tim, là tinh thần của những trật tự không có tinh thần. Tôn giáo là thuốc phiện của nhân dân.\"&nbsp;</p><p>Nếu những người vô thần sử dụng những ngôn từ lăng mạ, phỉ báng tôn giáo xấu xa bẩn thỉu bao nhiêu thì tôi lại thấy những nét tinh túy, những thứ đẹp đẽ nhất của tôn giáo trong câu nói của Marx : \"Trái tim của thế giới không có trái tim, là tinh thần của những trật tự không có tinh thần\". Tôn giáo là nơi an ủi cho quần chúng nhân dân bị áp bức trong một thế giới không có trái tim, không có tình yêu thương. Là tinh thần con người trong một xã hội tôn đồng tiền lên trên mọi giá trị khác. Tôn giáo phản ánh sự đau khổ của hiện thực. Khi nhân dân bi bóc lột, bị ép tới đường cùng, họ không thể phản kháng, chống cự, quần chúng nhân dân bất lực. Đó là lúc họ tìm tới tôn giáo như một niềm hy vọng cho cuộc sống của họ, đó là nơi họ có thể quên đi những nỗi đau của cuộc sống thực tại để hy vọng, cầu nguyện tới một cuộc sống tốt đẹp hơn. Những hy vọng, những lời cầu nguyện ấy là sự phản kháng yếu ớt chống lại sự khổ đau hiện thực.</p><p>\"Tôn giáo là tiếng thở dài của chúng sinh bị áp bức\". Đó là nét mệt mỏi, là sự bất lực trước bất công tràn làn của xã hội. Quần chúng nhân dân cần trợ giúp về mặt tinh thần để vượt qua những nỗi đau của cuộc sống</p><p>\"Tôn giáo là thuốc phiện của nhân dân\". Đây chính là vấn đề chính chúng ta cần phải phân tích. Ta cần xem xét lại khái niệm \"Thuốc phiện\" - \"Opium\" là gì ?&nbsp;</p><p>Thuốc phiện trong tư tưởng người VN đó là một tệ nạn, đó là thứ khiến con người u mê, chìm đắm, mụ mị và mất tỉnh táo, thuốc phiện cần phải dẹp bỏ. Nhưng đừng quên rằng, thuốc phiện là loại thuốc giảm đau đặc hiệu trong y học. Thế giới này cần thuốc phiện hơn là bỏ nó. Ở đây, Marx hiểu như vậy.&nbsp;</p><p>\"Tôn giáo là thuốc phiện của nhân dân\". Tại sao lại như vậy ?&nbsp;</p><p>Đối mặt với những nỗi đau tột cùng do xã hội gây nên, quần chúng nhân dân cũng giống như những người bệnh vậy, họ đau đớn lắm, đau về thể xác là một chuyện, quần chúng nhân dân bị tổn thương nặng nề về tinh thần, họ cần một liều giảm đau trong tinh thần. Tôn giáo đã làm được điều đó. Tôn giáo giúp người ta quên đi những nỗi khổ, những tổn thương của quần chung nhân dân. Không có một liều thuốc nào đặc hiệu hơn tôn giáo. Người ta cầu nguyện, cứ thế, cứ thế họ cầu nguyện để kiếm tìm sự bình an, sự giải thoát. Những lời cầu nguyện là những ước vọng nhưng cũng là tiếng thở dài của quần chúng nhân dân vì những ước vọng ấy dường như không thể thành hiện thực.&nbsp;</p><p>Qua đó, ta thấy rằng, Marx đã nhìn ra tầm ảnh hưởng quan trọng của <a href=\"https://spiderum.com/bai-dang/Vi-sao-nguoi-ta-tim-den-ton-giao-3vu\" target=\"_blank\">tôn giáo trong xã hội</a>. Đó không phải là thứ gì gây hại cho quần chúng nhân dân, đó là liều thuốc giảm đau tinh thần của nhân dân, là sự an ủi cho quần chúng nhân dân. Không có một tổ chức nào trong xã hội có thể thay thế được tôn giáo. Do đó, tôn giáo không thể bị loại bỏ.</p><p>Marx nhấn mạnh điểm tích cực của tôn giáo nhưng đồng thời ông cũng nêu lên những hạn chế của tôn giáo. Tôn giáo không hề giúp cho quần chúng nhân dân giải quyết được nỗi đau ấy, tôn giáo chỉ giúp nhân dân tạm quên đi, tạm bớt đau trong thời gian ngắn. Nhưng khi quay trở lại với thực tế, những áp bức, những bất công vẫn tràn lan và chính quần chúng nhân dân phải là người giải quyết triệt để chúng chứ tôn giáo không thể triệt tận gốc của nỗi đau.&nbsp;</p><p>Tạm kết: Dù là hệ tư tưởng hữu thần hay vô thần như <a href=\"https://spiderum.com/bai-dang/Toi-se-tat-vo-mat-ban-va-het-len-rang-Marxism-VO-TOI-o8l\" target=\"_blank\">Marxism</a>, chúng ta không nên xem nhẹ vai trò và tầm ảnh hưởng của tôn giáo. Tôn giáo là một bộ phận không thể thiếu trong xã hội, là liều thuốc giảm đau, an ủi con người trong quãng đường đời đầy chông gai, đau khổ.&nbsp;</p><p>*Đây là lần đầu tiên mình viết bài, văn phong còn chưa chỉn chu, bài viết chưa được quá chau chuốt mong được tiếp thu được nhiều ý kiến để rút kinh nghiệm cho những bài sau, mình xin cảm ơn.&nbsp;</p>', 96, '\"Tôn giáo là thuốc phiện của nhân dân\" Hôm nay, mình xin được giới thiệu về tư tưởng của Karl Marx về tôn giáo qua câu nói rất nổi...', NULL, 'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2008/10/15/karlmarx_460x276.jpg', 0.00, 7, 1, 0, '2023-11-17 18:04:04.669000', 0);
INSERT INTO `blog` VALUES (231, 'Quan điểm của V.Lenin và Leon Trotsky về tôn giáo', '<p>Lenin và Trotsky là hai nhà lãnh đạo của Cách mạng Tháng Mười Nga và là những người sáng lập của Liên Xô. Cả hai đều là những người theo chủ nghĩa Mác-Lenin, một học thuyết triết học, kinh tế và chính trị dựa trên các tác phẩm của Karl Marx và Friedrich Engels.</p><p>Theo chủ nghĩa Mác-Lenin, tôn giáo là một biểu hiện của ý thức hệ thống tư bản chủ nghĩa. Nó là một phương tiện để áp bức giai cấp vô sản và duy trì trật tự hiện có. Do đó, Lenin và Trotsky tin rằng tôn giáo nên bị loại bỏ khỏi xã hội xã hội chủ nghĩa.</p><p>Trong bài báo \"Tôn giáo là thuốc phiện của nhân dân\", Lenin viết rằng tôn giáo là \"một ảo tưởng được nuôi dưỡng trong tâm trí những người bị áp bức về sự giải phóng từ những đau khổ và bất công của họ\". Ông lập luận rằng tôn giáo là một phương tiện để trấn an những người nghèo và vô vọng, ngăn cản họ đấu tranh cho sự giải phóng của mình.</p><p>Trotsky cũng là một người chỉ trích mạnh mẽ tôn giáo. Ông viết rằng tôn giáo là \"một sản phẩm của sự ngu dốt và áp bức\". Ông tin rằng tôn giáo nên bị loại bỏ khỏi xã hội xã hội chủ nghĩa để giải phóng con người khỏi những hạn chế của nó.</p><p>Sau Cách mạng Tháng Mười, chính phủ Bolshevik của Lenin và Trotsky đã thực hiện nhiều chính sách nhằm chống lại tôn giáo. Chúng bao gồm việc đóng cửa các nhà thờ và tu viện, cấm các hoạt động tôn giáo và đàn áp các nhà thờ.</p><p>Những chính sách này đã dẫn đến sự suy giảm mạnh mẽ của tôn giáo ở Liên Xô. Đến cuối thập niên 1930, chỉ còn một thiểu số nhỏ người Nga theo đạo.</p><p>Tuy nhiên, những quan điểm của Lenin và Trotsky về tôn giáo vẫn gây ra nhiều tranh cãi. Một số người cho rằng họ đã quá cứng rắn và thiếu tôn trọng quyền tự do tôn giáo. Những người khác thì cho rằng họ đã đúng khi nhận ra nguy cơ của tôn giáo đối với xã hội xã hội chủ nghĩa.</p>', 96, 'Bài viết lấy thông tin từ wikipedia và nhiều nguồn khác\n\n', NULL, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Vladimir-Ilich-Lenin-1918.jpg/220px-Vladimir-Ilich-Lenin-1918.jpg', 0.00, 7, 1, 0, '2023-11-17 18:04:59.140000', 0);
INSERT INTO `blog` VALUES (232, 'Thiết kế khu dân cư thân thiện với thú cưng, khoảng trống còn bỏ ngỏ.', '<p>Nhu cầu nuôi thú cưng tại Việt Nam ngày một lớn cùng với sự phát triển của điều kiện kinh tế cũng như giao thoa văn hóa thế giới. Tuy nhiên dạo qua một vòng các khu đô thị mới phát triển và đặc biệt là các khu chung cư cao tầng có thể nhận thấy một điều đó là các cơ sở hạ tầng cho việc chung sống với thú cưng vẫn chưa được phát triển đồng bộ và theo kịp với nhu cầu của xã hội.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700219309/vrxzapbdgkfiiw0mg1zw.png\" alt=\"Nguồn: Pexels\" /><p>Nguyên nhân đầu tiên có thể phải kể đến đó là văn hóa đã ăn sâu trong mỗi người Việt Nam thuộc các thế hệ cũ về cơ bản vẫn chưa thực sự coi chó mèo như những người bạn thực sự. Một phần do cuộc sống mưu sinh và rất nhiều vấn đề còn phải lo khác khiến chúng ta chưa có thời gian quan tâm nhiều hơn đến quyền lợi động vật nói chung và thú cưng nói riêng.</p><p>Nguyên nhân thứ hai có thể kể đến là thực tế các nhà phát triển bất động sản và các khu dân cư mới vẫn chưa quan tâm đến việc thiết kế các sản phẩm bất động sản, các khu dân cư thân thiện với thú cưng. Tuy nhiên chúng ta cần phải nhận thức rõ đó là một nhu cầu thiết yếu cần phải có trong một xã hội hiện đại.</p><p>Thực trạng tại Việt Nam có thể thấy đa phần đang chọn phương án an toàn khi không quản lý được đó là \"cấm\". Mà điều đặc biệt càng các chung cư cao cấp thì lại càng cấm mạnh do phản ánh của cư dân cũng như sự bế tắc của ban quản lý.</p><p>Nếu các bạn thử tìm kiếm trên Google sẽ thấy rất nhiều các bài báo có thiên hướng cổ vũ cho việc cấm chó mèo tại chung cư. Từ việc nhỏ nhưng lông chó, lông mèo, đến việc vệ sinh, chạy chơi của thú cưng, tất thảy đều \"cấm\". Thiết nghĩ đó không hẳn là một giải pháp triệt để, và cũng là nỗi đau của một bộ phận khách hàng có nhu cầu.</p><p>Để giải quyết vấn đề này, chúng ta có thể nhìn qua các nước phát triển và đặc biệt các nước châu Âu, Mỹ,... nơi có văn hóa coi trọng thú cưng đặc biệt là chó mèo để học hỏi cách tiếp cận của họ với vấn đề này như thế nào. Qua đó có thể rút ra các bài học và lựa chọn giải pháp phù hợp đem áp dụng vào thực tế xã hội Việt Nam. Đó chắc chắn sẽ thu hút được sự chú ý tích cực từ phía người dân cũng như một bộ phận lớn khách hàng có nhu cầu nuôi thú cưng.</p><p>Ở hầu hết các đất nước phát triển trên thế giới đặc biệt là các nước châu Âu, Mỹ, nơi có văn hóa coi trọng thú cưng và nhu cầu cao, việc này không mới. Có rất nhiều các nhà phát triển bất động sản đã coi thú cưng là một tiêu chí cần phải có trong kế hoạch phát triển của mình. Ngay từ giai đoạn lên kế hoạch họ đã cần tính đến số lượng thú cưng dự kiến cũng như các diện tích, quỹ đất cần thiết cho các trang thiết bị và khu vực công viên chuyên dụng dành cho thú cưng.</p><p>Tham khảo hướng dẫn của thành phố Toronto Canada, có thể rút ra một số điểm trong quy hoạch phát triển các khu đô thị thân thiện với thú cưng ở ba cấp độ như sau.</p><p>a. Thiết kế và lập kế hoạch cho các tiện nghi dành cho thú cưng như một phần của quá trình phát triển các khu dân cư mới để giảm thiểu việc sử dụng quá mức các không gian công cộng của khu phố.b. Cung cấp đủ tiện nghi cho vật nuôi để hỗ trợ đầy đủ số lượng vật nuôi dự kiến của quá trình phát triển. (cần ước lượng số lượng vật nuôi trong quá trình phát triển dự án).c. Ở những khu vực có công viên và không gian mở ở mức trung bình trở lên, các tiện nghi dành cho thú cưng vẫn nên được cung cấp để hỗ trợ quần thể thú cưng phát sinh của khu mới phát triển nhằm giảm thiểu việc sử dụng quá mức các tiện nghi hiện có.\nTheo các nghiên cứu thì cần có các không gian mở, công viên thân thiện với thú cưng cách khoảng dưới 15 phút đi bộ từ vị trí khu vực dân cư là khoảng cách phù hợp. Các công viên này cần có các không gian để thả xích thú cưng (chó mèo) cho chạy nhảy tự do.</p><p>Trong phạm vi từng đơn nguyên hoặc một cụm đơn nguyên, cần thiết kế các khu vực chuyên dụng cũng như bố trí các diện tích sàn phục vụ cho các tiện ích như sau:<b>a) Khu vực đi vệ sinh (Pet Relief Areas)</b>Bao gồm các khu vực trong nhà (Indoor Pet Relief Area) và ngoài nhà (Outdoor Pet Relief Area). Các gợi ý thiết kế có thể tóm tắt trong các ý sau:+ Có trang bị túi chứa phân và các thùng rác.+ Có trang bị các cột cứu hỏa hoặc tương tự (thu hút chó theo tập quán của chúng), các khu vực có rải sỏi.+ Đặc biệt cần được bố trí vệ sinh thường xuyên.+ Diện tích tham khảo trong khoảng 5m2.\n\n</p><p><b>b) Các khu vực thả xích thú cưng (Pet Off-leash Area)</b>Thú cưng luôn có nhu cầu được thả chơi tự do không bị ràng buộc bởi xích và không gian đóng của căn hộ.&nbsp;&nbsp;</p><p><b>c) Trạm tắm rửa cho thú cưng (Pet Wash Station)</b>Tạo các khu vực thuận tiện và dễ tiếp cận để tắm rửa và chải lông cho vật nuôi để hỗ trợ sức khỏe của động vật và con người, đồng thời giảm hư hỏng cho các tòa nhà.Trạm tắm rửa thú cưng, còn được gọi là “spa thú cưng”, cung cấp một khu vực để chủ sở hữu rửa và tắm cho động vật của họ. Với một phòng riêng biệt, các tiện ích bổ sung như chậu lớn, máy sấy, và bàn chải lông có thể khiến những tiện nghi này trở thành một lựa chọn hấp dẫn và đáng mơ ước hơn khi so sánh với phòng tắm của một căn hộ bình thường.&nbsp;&nbsp;</p><p>Khuyến nghị bố trí trong phạm vi mặt bằng căn hộ một khu vực riêng biệt cho thú cưng có bao gồm khu vực tắm rửa chải lông, đồng thời để chậu cát cũng như các thiết bị dành riêng cho thú cưng khác. Sử dụng các đồ nội thất hiện đại thân thiện với thú cưng.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700219374/ymqk0h9tvo8f9o1qwira.png\" alt=\"Nội thất thân thiện với thú cưng.\" /><p>Nhu cầu nuôi thú cưng đặc biệt là chó mèo tại các chung cư tại Việt Nam thực sự là rất lớn và đang là một nỗi đau của các khách hàng khi vướng phải sự cấm cản của người dân cũng như chính những ban quản lý khu đô thị do chưa có những quy định và chế tài xử lý cho nhu cầu thiết yếu này. Những gợi ý nhỏ trên đây có thể là bước đầu để các nhà phát triển bất động sản có thể tiếp cận và đưa đến cho khách hàng những sản phẩm phù hợp giúp một bộ phận lớn khách hàng có thể thỏa mãn được mong muốn chính đáng của mình.</p>', 96, 'Thiết kế và quy hoạch các khu dân cư thân thiện với thú cưng, một nhu cầu thiết yếu của xã hội hiện đại.', NULL, 'https://images.pexels.com/photos/19081155/pexels-photo-19081155/free-photo-of-ngoi-nha-d-th-ng.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 0.00, 12, 1, 0, '2023-11-17 18:09:52.970000', 0);
INSERT INTO `blog` VALUES (233, 'Tựa cẩm thạch\n', '<p><i>Đây là bản dịch từ bài viết <a href=\"https://granta.com/on-marble/\" target=\"_blank\">On Marble </a>được đăng tải trên Granta của tác giả Rachel Cusk. </i><i>Cảm ơn dịch giả Tuyết Nhi và biên tập viên Za vì đã thực hiện bản dịch này.</i></p><p>Cẩm thạch tính vốn bền chặt, và bởi thế nó chẳng có lấy một nguyên tắc riêng nào cả. Nó bộc tả một khái niệm về sự đổi thay khó mà nắm bắt. Cẩm thạch là một chất liệu nằm ngoài những ngưng đọng của thời gian: Đã đang đổi thay, và từ đó nên bất biến, rồi không còn chịu ảnh hưởng từ thời gian nữa. Nó nói với chúng ta không phải ở cương vị là những cá thể mà với tư cách là những người tham gia vào lịch sử đang chảy trôi. Nó nhắc nhở về sự hữu hạn ẩn náu dưới khối tài sản của ta, cơ thể này, linh hồn này, và mong cầu ta gắn kết với những thứ tập thể hơn, bền vững hơn. Liệu ta có muốn còn mãi? Trong thế giới của cẩm thạch, chúng ta có thể in dấu gì đó của riêng ta để nó còn mãi: cẩm thạch là một chất liệu dành cho sự nguyên bản và gần như cuồng mê loạn trí. Cẩm thạch sót lại, hệt như sự sót lại của một vài kí ức trong khi số khác đã tan biến, như một dạng chủ quan. Một câu chuyện được làm từ những gì còn sót lại. Những cách kể còn lại – câu chuyện về sự ảnh hưởng và biến đổi, về hành động vô thức và niềm tin, lịch sử qua lời kể hay lịch sử luân lý – không có được chỗ đứng vững như khắc trên đá. Chúng có thể bị ảnh hưởng hoặc biến tấu; chúng có thể thăng hoa hay tàn lụi. Ở mức độ nào đó, một câu chuyện được hinh thành nên từ ranh giới giữa điều vô hình và hữu hình. Ở đá, khoảng cách giữa hai thứ – giữa phù du và sót lại, giữa ý vị tinh tế và chắp vá vụng về – là rất lớn. Rất nhiều điều ta làm đang bị quên lãng hay có lẽ chưa đủ tốt. Vậy ai là người có thể điều khiển được vật liệu này?</p><p>Ngôi làng đáng lý là nơi yên ắng, nhưng ngày ngày không khí nơi đây lại đầy rẫy khói bụi công trường. Những căn nhà cũ kĩ đang được tân trang bởi người mới, với tầm nhìn và tài của. Tại ngôi nhà ngay sau ngôi nhà của chúng tôi, một nhóm người đang ầm ĩ ở phần đất sườn đồi để làm hiển lộ phần còn lại của một tòa nhà khác bị chôn vùi ngay trên đất của nó. Chúng tôi được kể rằng đây là một mánh khóe thường thấy trong giới kinh doanh bất động sản, bởi ở đây việc xin cấp phép xây dựng mới rất khó khăn. Đống đổ nát mà họ đang đào bới đơn thuần chỉ là lời biện bạch cho dự tính của họ, là dựng lên hai căn nhà mới rồi bán lấy lời. Mỗi buổi sáng ngay sau khi mặt trời mới nhô lên, họ khởi động máy khoan nén khí và dành cả ngày để phá vỡ lớp đá cứng dưới chân. Vào ngày thứ nhất, bực mình bởi quá ồn ào, chúng tôi lân la vòng quanh ngôi nhà rồi nói chuyện với người chủ, một tên Mỹ với thái độ trơ trẽn hiếm thấy, ông ta nói với chúng tôi rằng việc đào khoan nhiều khả năng sẽ kéo dài, đến chừng nào chúng tôi còn ở lại. Ông ta tóm tắt về nguồn cơ và tiến trình của công việc, bắt đầu bằng việc đốn hạ toàn bộ cây cối trong khu vực, sau đó là thăm dò, ở đó có những người đàn ông, với cái xẻng, đã đào bới vùng sườn đồi với giấc mộng kiếm được vàng – như nơi này đã từng. Một khi họ cho rằng phần vàng còn lại đang ở đó, tên người Mỹ sẽ nộp đơn xin phép, và cần một khoảng thời gian để thông qua. Và giờ đây đã có sự chấp thuận, ông ta không còn quá ngần ngại về chúng tôi. Hãy tìm nơi khác để ở, ông ta tỏ ra hống hách, có lẽ đó là cách trông ổn nhất. Sau đó, ông ta cho chúng tôi xà lách từ vườn rau, cùng với một chai dầu oliu, và trông như có vẻ hài lòng vì đã dàn xếp ổn thoả mọi việc. Mỗi bữa trưa chúng tôi ăn xà lách của tên tìm vàng, bài trí với vài giọt dầu oliu, lời qua tiếng lại át đi tiếng ồn ào.</p><p>Đôi khi tôi lại chiêm nghiệm về những điểm tốt khi bớt để tâm lại, và nghĩ rằng sẽ tốt biết bao nếu chẳng mãi âm ỉ đau bởi hành động của ai khác, ngay cả khi chấp nhận đánh mất thứ độc hữu làm nên nét riêng của mình. Thật sự thì, việc khoan đào chỉ là một ví dụ đơn giản khi nhìn theo hướng tích cực: nếu tôi đặt mình trong hoàn cảnh của tên Mỹ kia, liệu tôi có làm điều tương tự. Hầu hết mọi người sống trong niềm tin lờ mờ rằng sự tồn tại của họ, việc họ làm về cơ bản là chẳng gây phương hại đến ai, nhưng khó có ai trong thời đại của chúng ta có thể tự nhận điều đó. Thời đại này, chính trạng thái tồn tại đã đi đôi với hành động cưỡng đoạt: không thể tránh khỏi. Tên Mỹ kia cũng chỉ khiến cho sự cưỡng đoạt ấy hiện thanh và hiện hình. Không giống ông ta, những người đàn ông đang làm ở công trường là dân địa phương: ngó nhìn họ từ khu vườn, do không hiểu cuộc trò chuyện nên tôi đã quan sát bộ điệu và cử chỉ của họ, cách họ cư xử với người khác và với tên chủ. Họ trông thật lịch thiệp và đáng tôn trọng. Họ không chịu trách nhiệm cho sự phá hủy và tiếng ồn, nhưng những điều ấy, cùng với sự thay đổi kéo theo, lại chính là công việc của họ.</p><p>Diễm lệ và kinh hãi - hai điều đặc biệt trường tồn, và ở nơi công trường, chúng thường đan xen vào nhau. Chẳng hạn, sự vĩ đại của cẩm thạch, kế thừa chủ nghĩa cổ điển và tôn giáo, rất dễ trở thành sự vĩ đại của chủ nghĩa phát xít. Ngắm nhìn những bức hình của Cung điện Quốc hội ở Bucharest - tòa nhà nặng nhất thế giới, nặng đến nỗi mỗi năm nó chìm sâu xuống Trái Đất tận sáu milimét - thật khó để không nghĩ về một khung cảnh lao động khổ sai tàn tệ trong tòa nhà ấy. Đó là một tượng đài khổng lồ cho thấy cách mà một gã độc tài biến ý muốn của mình thành thực tại cả về vật chất lẫn không gian. Những chiến tích khác về xây dựng và thiết kế - ví như eo biển Corinth cách đấy không xa - là những chiến thắng của ý muốn con người với cái giá là sự lao động khổ công đằng đẵng khó mà phớt lờ: một loại bứt rứt cũng dự phần vào những kỳ quan ấy, nhắc nhở chúng ta rằng tiến bộ phải dựa dẫm thế nào lên sự bất bình đẳng. Cung điện Quốc hội có lẽ đang đặt ra một câu hỏi khác, về tình trạng đạo đức của sự áp bức: liệu một người trong tình thế bị áp bức có thể được xem là vô can đối với những hành động của anh ta hay cô ta chăng? Việc xây dựng tòa nhà đã buộc 40.000 cư dân ở Bucharest phải di dời và phá hủy một phần tư thành phố bao gồm cả chủng viện, thư viện và bảo tàng. Hơn một triệu mét khối cẩm thạch được sử dụng trong quá trình xây dựng. Những người đàn ông xây nên nó không phải kẻ làm công hay người lính: họ được gọi là “những tình nguyện viên,” câu hỏi cho ý chí của họ được giải quyết một cách gọn lẹ. Tuy nhiên, đó là một hình thức tình nguyện cưỡng bách: trên thực tế, họ chẳng hơn gì mấy những tên nô bộc. Cung điện đó là tòa nhà lớn thứ ba trên thế giới, gần một nửa trong hàng nghìn căn phòng của nó đã được hoàn thành. Đó là một hình ảnh cho sự đột ngột - như cách quyền lực của một nhà độc tài có thể bị dập tắt.</p><p>Nghệ sĩ và kẻ độc tài đứng ở hai đối cực của khái niệm đồng thuận, có bản chất từ khái niệm kể chuyện. Như một câu chuyện, đối tượng được tạo ra cần tìm kiếm sự đồng tình: nếu những thế hệ nối tiếp không chấp nhận tuyên bố mà đối tượng đưa ra, nó rồi cũng sẽ bị băng hoại theo thời gian. Nghệ sĩ đánh cược vào viễn cảnh tương lai, thậm chí chấp nhận đánh đổi sự đồng thuận ở hiện tại. Ngược lại, kẻ độc tài lại cố níu kéo thời gian và kiểm soát tương lai, bằng cách đánh cược mọi thứ vào thời điểm hiện tại. Trong khi nghệ sĩ thường yếu thế hơn so những gì người ấy tạo ra, kẻ độc tài lại cảm thấy khó khăn để tạo ra thứ trường tồn hơn chính mình. Vâng, cả hai đều có xu hướng truy niệm tầm nhìn của họ bằng cách thể hiện chúng ở thứ tồn tại bên ngoài họ: thứ đó là đá tảng. Nghệ nhân và kẻ độc tài ở thời đại của chúng ta thích thú với sự vô hình: những loại hình quyền lực mới là loại hình được số hoá, và nghệ thuật mới là thứ nghệ thuật không dựa vào sự hữu hình hoá.&nbsp;</p><p>Khi nghệ sĩ Michael Landy công khai phá hủy tất cả những thứ thuộc về mình, bao gồm cả những tác phẩm mà ông ta sở hữu từ những họa sĩ khác, ông đã đưa ra tuyên ngôn về sự mục nát đến vô vọng của thế giới vật thể, thứ mà nghệ thuật cần phải cố gắng tách mình ra khỏi đó. Nghệ sĩ người Anh Andy Goldsworthy thường tạo nên những tác phẩm mà chất liệu của nó là một hành động nhận thức giản đơn: tách khỏi buổi trưng bày, chúng được thể hiện trong giá trị-vật thể của những điều được tận mắt trông thấy, chạm tới sự phù phiếm ngay cả người họa sĩ cũng bỏ cuộc. Nghệ thuật của Goldsworthy có thể được gọi là một kiểu hạ mình, bởi lẽ những chất liệu của nó thuộc về tự nhiên và cũng có thể được hoàn nguyên lại cho tự nhiên: đó là nghệ thuật tinh giản can thiệp, không tranh đấu, thứ mà, ít nhất về mặt lý thuyết, cho phép tất cả chúng ta trở thành nghệ sĩ. Nó kháng cự lại với giáo điều và ngộ nhận, và liệu nó cũng có lẽ kháng cự cả với trách nhiệm? Một khi tạo ra vật thể trường tồn, nghệ sĩ nhận lấy trọng trách với người ngắm nhìn nó, hiện tại và cả tương lai. Ông tin rằng mình có thể nối kết những những người ở tương lai, và trấn an rằng phỏng đoán của họ về thế giới và sự thật về chúng cũng giống với ông.</p><p>Michelangelo, một người vị kỷ nổi tiếng, cho rằng cẩm thạch là nhà tù đáng sợ nhất trong số các nhà tù mà nhân loại có thể nghĩ ra. “Người họa sĩ vĩ đại không có ý niệm”, ông ta trích dẫn, “rằng mỗi một khối đá cẩm thạch không chứa đựng bên trong lượng vật chất của nó, bởi chỉ cần một bàn tay biết vâng lời tâm trí là đã có thể xuyên qua hình ảnh đó rồi.” Giải phóng hình ảnh khỏi sự giam cầm trong chất liệu là một hành động tối thượng trong sự thống trị của con người, để in dấu sự từng tồn tại của bản thân lên những phiến đá bình đạm và vĩnh hằng nhất. Sự thống trị này dựa trên - như bao sự thống trị khác - sự phục tùng, sự phục tùng của cái tôi, bàn tay, theo ý định của tâm trí. Đôi tay của Michelangelo là nô lệ cho ông ta, như một kẻ nô bộc thực thụ thuộc về tên độc tài, tuân theo một ý chí nằm bên ngoài chính nó. Ý muốn con người không phải chỉ vươn đến sự thật và cái đẹp: nếu viên cẩm thạch chứa đựng mọi suy tư, mọi ý niệm, nó cũng đầy rẫy sự ác.</p><p>Chúng tôi ghé qua một mỏ đá, nơi hàng thế kỷ qua cẩm thạch đã bị lấy đi khỏi vỏ Trái Đất. Dọc khắp ngả đường, những ngôi làng ngày càng lát đá cẩm thạch, như thể lớp cẩm thạch bị rút ra từ mỏ đá lân cận đã dát vào chúng. Địa hình dâng cao đến thành những đỉnh núi choáng ngợp, đen ngòm: những ngôi làng bám víu vào sườn đồi, trắng xóa, xuôi theo những đợt gió cuồn cuộn. Những truyền thống và phương pháp điêu khắc cẩm thạch ở đây đã được gìn giữ, tiếp nối qua nhiều thế hệ. Chúng tôi nghe kể rằng, thậm chí một chuyên gia trong lĩnh vực này cũng có thể cuốn vào cuộc đàm đạo với một bác lớn tuổi tại một quán cà phê địa phương và học thêm được điều gì đó. Ở một trong những ngôi làng lớn hơn, nơi đó có trường học giảng dạy chính thức về việc chạm khắc cẩm thạch: những tác phẩm đang trong quá trình hoàn thiện của học viên có ở khắp trong xưởng.&nbsp;</p><p>Có một khối đá cẩm thạch ở đó, nhưng chưa được đụng đến. Một khối đá có lớp da, sâu trong là những lớp nén ngày càng dày đặc. Nó được hợp thành từ những chiếc lá rất nhỏ, như một cuốn sách khổng lồ, dễ bị phá nát. Nó mỏng manh khó ngờ: những học viên được dạy khi chạm vào chúng cần hết sức cẩn thận. Sẽ tốn mất hai năm để họ tạo hình cho nó, mặc dù một chuyên gia có thể làm điều đó trong một tháng. Sự chớp nhoáng, thôi thúc của nghệ thuật có vẻ đang bị trói buộc lại - gần như lụi tàn - bởi những yếu tố này: cử điệu của người nghệ sĩ không thể thêm thắt hay hồi chỉnh; dự định của họ, xuyên suốt quá trình sáng tạo chậm rãi đến bứt rứt, không thể thay đổi. Nghệ thuật vốn hiếm khi gắn với sự kỷ luật, nhưng một khi đã hiện diện, sự gò bó của nghệ thuật lại càng ngốn nghiến nhiều sức lực của người nghệ sĩ hơn - và thật sự bởi vì nghệ thuật từ bao thế kỷ qua cũng tìm cách vượt qua căng thẳng giữa kỷ luật và sáng tạo để tạo ra bước chuyển, nhưng khó mà tránh khỏi, phương cách làm nên cẩm thạch ngày càng lún sâu vào khuôn sáo. Những bậc thầy mới về cẩm thạch - như những học viên nơi đây sẽ trở thành - thường cảm thấy việc làm của họ như một thợ tu sửa, chỉnh sửa và ghép vá những mảnh vỡ của thế giới cổ đại, chúng mãi luôn được dựng lên thêm lần nữa từ Trái Đất này.&nbsp;</p><p>Trong kỷ nguyên hiện đại này, một số nghệ sĩ vẫn sử dụng cẩm thạch như là một nơi chốn để lột tả sự mâu thuẫn mới về lịch sử và quyền lực, về ý nghĩa của tượng đài. Bản sao bằng cẩm thạch về một túp lều rẻ tiền của một nghệ sĩ người Canada tên là Rebecca Belmore là một cách phản kháng tượng đài, buộc chất liệu mang tính biểu tượng phải đối thoại với tình trạng di dời và vô gia cư. Nhà điêu khắc người Hy Lạp Andreas Lolis dùng cẩm thạch để thể hiện những ý niệm trọng yếu về sự chóng tàn và thải bỏ: những túi rác quá đầy, những sọt gỗ gãy khúc, những thùng các tông biến dạng. Trong tác phẩm của Lolis, mối quan hệ giữa thời gian và quên lãng đến sự bền lâu của các chất liệu được bộc tả: ở đấy, phương cách được yêu cầu, một cách cẩn thận, để hiểu ra điều gì đối lập hoàn toàn với chính nó, để tâm tới điều nằm dưới sự để tâm ấy và tưởng niệm nó. Cẩm thạch - dấu chỉ của điều trọng đại - được yêu cầu tự hướng đến một hành động ghi nhận, ghi nhận thực tại. Cha của Lolis là một thợ điêu khắc đá: ông và cẩm thạch đã gắn kết từ bé, khi ông tự học cách làm ra vật tượng trưng cho những thứ mà ông quan sát xung quanh, đi ngược lại với những gì được cho là phù hợp hơn. Đối với những nghệ sĩ khác, khó khăn về mặt kỹ thuật khi làm việc với cẩm thạch sẽ dập tắt khả năng họ sử dụng chúng như một phương tiện truyền đạt. Túp lều của Belmore, là một minh chứng, được chạm khắc bởi một học viên tốt nghiệp từ ngôi trường đó, ở ngôi làng đó. Ngoài việc tên tuổi được nổi lên từ tác phẩm đó, ông chẳng còn được ai khác nhắc tới. Nghệ thuật chạm khắc cẩm thạch chẳng có lấy một chỗ đứng ổn định, như thể nó đã từng khi Michelangelo xem bàn tay như nô lệ của ông.</p><p>Mỏ đá cách ngôi làng một vài dặm, nằm trên một sườn đồi hướng ra biển. Con đường cao lên, ngoằn ngoèo qua những phần sắc cạnh của tảng đá đen và phóng thẳng xuống cảnh quan dốc đứng hãy còn nguyên thủy ở phía bên kia. Con đường cuộn lại quanh vùng núi như thể vực sâu với những cảnh đẹp mờ tối và hoang sơ, cảnh biển chìm sâu xuống dưới. Vết thương lớn của mỏ đá, bằng cách nào đó, hạ xuống xuất hiện bên cạnh những vết thương đã cũ: chúng thuộc về lịch sử, thuộc về biết bao sự nhọc công của con người hòng chiếm đoạt và định hình thế giới. Vào thế kỉ XIX, người Anh đào mỏ ở đây, trong vết cắt sâu vào đáy đại dương hòng đào mỏ bên dưới mặt nước. Một khi mỏ đá được nâng lên, những tảng cẩm thạch được đặt xuống vùng núi, lật từ đầu này đến đầu khác hết sức nhọc công.&nbsp;</p><p>Vào buổi tối, công trường lặng thinh không bóng người. Những chiếc xe tải lấm bùn được đỗ khắp nơi. Đường đi lổm chổm với đất sét còn ẩm. Mỏ đá sâu và dốc cạnh, phần mặt tiền rộng lớn thẳng vút trái tính với những hình dáng tự nhiên: chúng giống như những mặt của tòa nhà, dù cho vùng núi đã mang ý nghĩ về một thành phố ở trong nó. Hàng mét đất đá đã bị phá vụn để chạm được đến phần cẩm thạch bên dưới, và những lớp đó phơi ra trên bề mặt. Sự quyết tâm của con người muốn chạm tới ý định về một công trường xây dựng, ý định đối với cẩm thạch: thậm chí trong thời đại cơ giới, nó là một khung cảnh đấu tranh nguyên thủy. Một trong những thợ điêu khắc lớn tuổi nhất ở vùng đất ấy đã biết về mỏ đá khi ông còn là một đứa trẻ: cha và ông của người ấy đều là thợ mỏ. Trong ký ức từ thuở ban đầu của ông, đó là một con kênh sâu hẹp cắt vào lòng đất. Bây giờ nó đã là một đấu trường, một đấu trường ngoài trời bạo tàn đã chai cứng trong bùn và cát, đối diện với sự trống trải giữa bầu trời và đại dương. Khi máy móc được đem tới, ông thấy việc lao động đã phần nào thôi vất vả, đó cũng là một bước tiến về giá trị của con người. Ở đó cũng có sự mất mát về kiến thức, về bản năng: những tảng đá được cắt gọn nằm quanh đó chờ chuyển đi phải được đánh dấu đâu là mặt phải, bởi những người thợ mỏ không thể xác định được nữa. Sự biến tướng là kết quả đến từ áp lực: nếu bị đảo ngược, nó sẽ bắt đầu đánh mất đi cấu trúc toàn vẹn. Nó là một hình ảnh, bằng cách nào đó, của chính nền văn minh, những áp lực để hình thành nó nhường chỗ cho sự dễ dàng khi cắt bỏ nó, khi đưa nó vào quên lãng.</p><p>Câu chuyện về tính thanh khiết của cẩm thạch bắt đầu từ đây, trong sự phai tàn và diện mạo của một vùng núi đã bị đẽo đục. Khi còn toàn vẹn, nó có bề ngoài giống như một cuốn sách, đầy rẫy những đối nghịch và trích đoạn kịch tính cùng nhiều sắc thái, nhưng khó hiểu và còn ngổn ngang. Trong quá trình đục đẽo theo sau sự bày ra của vật liệu này, những phần nguyên vẹn được ưa chuộng hơn những phần đã biến đổi, được phủ ngoài bởi lớp patina. Một bề mặt nhợt nhạt và thiếu điểm nhấn được tập trung chú ý trong dạo gần đây: nó đã bị phân chia thành các phiến đá trong quá trình chuẩn bị cắt cùng với dây cáp đồng có vít cấy dài, chắc, nạm những viên kim cương nhỏ nằm thành cuộn dây lớn trên vũng bùn. Những đường thẳng nhỏ, mong manh chạy dọc trên bề mặt màu trắng, hệt như dấu chân in trên mặt tuyết. Khám phá ra điều này chính là nguồn cơn của sự hứng khởi: Nó sẽ tạo những phiến đá với những hình dáng và chất lượng khác thường. Trong thế giới của chủ nghĩa tư bản, cẩm thạch trắng không chỉ dành cho những tượng đài hay cung điện của kẻ thống trị - một vật liệu đắt đỏ. Được chia cắt, đánh bóng và chuẩn bị cẩn thận, vật liệu cao sang này, hàng trăm năm qua người ta đã in dấu những chiến tích và địa vị lên nó, cuối cùng cũng đã được dân chủ hóa.&nbsp;&nbsp;</p>', 96, 'Cẩm thạch nói với chúng ta nhiều điều không phải ở cương vị là những cá thể mà với tư cách là những người tham gia vào lịch sử đang chảy trôi', NULL, 'https://images.spiderum.com/sp-images/5497f820e1b111edbb0bfd9d31b950aa.png', 0.00, 12, 1, 4, '2023-11-17 18:11:44.959000', 0);
INSERT INTO `blog` VALUES (234, 'Cái Đẹp là gì', '<img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700219533/afgngicreo4r0dkdrszb.png\" alt=\"Taste for Makers\" /><p>Dịch từ bài \"Taste for Makers\" của Paul Graham đăng vào tháng 2 năm 2002 trên blog của ông.</p><p>Tôi mới vừa nói chuyện với một người bạn đang dạy ở Đại học Công nghệ Massachusetts. Lĩnh vực giảng dạy của anh ấy bây giờ rất là hấp dẫn và mỗi năm anh ấy nhận được vô vàn đơn ứng tuyển từ các sinh viên tương lai. Anh nói: \"Rất nhiều người trong đó trông thông minh. Nhưng cái mà tôi không biết chắc được là họ có mỹ cảm hay không.\"</p><p>Mỹ cảm. Hiện giờ bạn sẽ ít nghe đến từ này. Nhưng mà bạn nên biết rằng chúng ta vẫn cần đến nó, cho dù hiện nay nó đã được gọi bằng tên khác. Ý của bạn tôi đó là ông không chỉ muốn học sinh của mình trở thành những kỹ sư tài ba, mà còn muốn họ biết dùng kiến thức kỹ thuật của mình để thiết kế những sản phẩm đẹp. </p><p>Những nhà toán học gọi những công trình hay là \"đẹp\", và khái niệm đó cũng được áp dụng từ xưa đến giờ bởi các nhà khoa học, kỹ sư, nhạc sĩ, kiến trúc sư, nhà thiết kế, nhà văn hay hoạ sĩ. Liệu đây có phải là sự trùng hợp ngẫu nhiên mà họ dùng cùng một từ, hay thực sự bọn họ đều đang nói đến chung một khái niệm? Nếu họ đang dùng chung một khái niệm, vậy chúng ta có thể lấy tiêu chuẩn cái đẹp trong một lĩnh vực để áp dụng cho một công trình ở lĩnh vực khác?</p><p>Đới với những người thiết kế sản phẩm, đây không chỉ là những câu hỏi lý thuyết suông. Nếu trên đời có một thứ được gọi là đẹp, chúng ta cần phải có khả năng nhận ra vẻ đẹp đấy. Chúng ta cần một mỹ cảm tốt để tạo ra những sản phẩm tốt. Thay vì coi khái niệm đẹp là một thứ bay bổng trừu tượng để mà tung hô ủng hộ một cách vô nghĩa hoặc để mà né tránh, phụ thuộc vào cách mà người đó cảm thụ cái đẹp, chúng ta hãy đặt câu hỏi thực tế sau: Làm sao để bạn tạo ra sản phẩm tốt? </p><p>Nếu bạn nhắc đến khái niệm mỹ cảm, nhiều người sẽ nói bạn rằng \"cảm thụ cái đẹp là một trải nghiệm chủ quan\". Họ tin như thế là vì họ thực sự cảm thấy nó là như thế đối với họ. Khi họ thích thứ gì đó, họ không biết lý do tại sao. Nó có thể là vì thứ đó thực sự đẹp, hay là vì ở nhà họ mẹ họ cũng có một thứ tương tự, hoặc là vì họ thấy một siêu sao điện ảnh mang nó trong hình một tạp chí, hoặc là vì họ biết nó mắc tiền. Suy nghĩ của họ là một mớ bòng bong các cảm nhận khác nhau bị trộn lại. </p><p>Phần lớn chúng ta khi còn là con nít được khuyến khích là đừng cố gắng gỡ rối mớ bòng bong các cảm nhận này. Nếu bạn cười vào mặt thằng em bạn vì nó tô màu da người là màu xanh lá cây, mẹ bạn sẽ nói với bạn mấy câu như \"con thích tô màu theo cách của con và em con thích tô màu theo cách em ấy\".</p><p>Mẹ của bạn khi đó không cố gắng dạy bạn để biết được sự thật về mỹ thuật. Mẹ bạn chỉ đang cố gắng làm sao cho hai đứa nhóc im lặng. </p><p>Cũng giống như những sự thật không trọn vẹn mà người lớn hay dạy chúng ta, lời nói này bị xung đột với những thứ khác mà họ sẽ nói. Sau khi cho chúng ta một bài học về việc cái đẹp, mỹ thuật, cái hay nó chỉ phụ thuộc vào cảm nhận chủ quan của mỗi cá nhân, họ dẫn chúng ta tới bảo tàng và nói rằng chúng ta phải biết chiêm ngưỡng các tác phẩm đẹp này vì chúng được vẽ bởi đại danh hoạ Leonardo.</p><p>Lúc này trong đầu lũ trẻ đang nghĩ gì? Nó có tự hỏi là \"đại danh họa\" là gì không? Sau khi được dạy bảo trong nhiều năm rằng ai cũng có cách làm riêng của bản thân họ, đứa trẻ sẽ khó mà đi thẳng đến kết luận rằng một người họa sĩ vĩ đại thì có những tác phẩm tốt hơn tác phẩm của người khác. Khả năng cao đứa nhóc sẽ suy nghĩ theo lý thuyết, một lý thuyết kiểu mô hình vũ trụ của Ptolemy, là một đại danh họa là một thứ gì đó tốt cho đứa nhóc, giống như là bông cải xanh vậy, bởi vì có ai đó nhắc đến ổn trong quyển sách.</p><p>Nói rằng khiếu thẩm mỹ chỉ là cảm nhận cá nhân của từng người cũng là một cách hay để né tránh các tranh cãi. Có điều suy nghĩ vậy là không đúng. Bạn sẽ cảm nhận được điều này khi bạn bắt đầu bắt tay vào thiết kế một vật nào đó.</p><p>Cho dù bạn làm công việc gì thì bạn cũng sẽ có xu hướng tự nhiên là muốn làm nó tốt hơn. Cầu thủ bóng đá thì muốn chiến thắng. Giám đốc điều hành thì muốn tăng lợi nhuận cho công ty. Rõ ràng đây là vấn đề về niềm kiêu hãnh và cũng là niềm vui khi bạn trở nên giỏi hơn trong việc bạn làm. Nhưng nếu công việc của bạn là thiết kế sản phẩm, và trên đời này không có tiêu chuẩn cố định cho cái đẹp, thì tức là chẳng có cách nào để cải thiện kỹ năng bản thân cả. Nếu cái đẹp chỉ phụ thuộc vào trải nghiệm cá nhân của từng người, thì tức là ai cũng có khiếu thẩm mỹ hoàn hảo: bạn thích bất cứ thứ gì bạn thích, và chỉ vậy thôi.</p><p>Và cũng như trong bất kỳ công việc nào, khi bạn rèn luyện việc thiết kế sản phẩm, bạn sẽ trở nên tốt hơn. Mỹ cảm của bạn sẽ thay đổi. Và cũng như bất cứ ai trở nên giỏi hơn trong việc họ làm, bạn thấy rằng bạn đang làm tốt hơn. Nếu điều đó là đúng, thì tức là khiếu thẩm mỹ của bạn nó không chỉ thay đổi. Mà tệ hơn, cái khái niệm không có đúng sai khi đánh giá vẻ đẹp cũng sai nốt. </p><p>Ai cũng thích nói rằng mọi thứ chỉ là tương đối, nhưng lối suy nghĩ đó chỉ làm hỏng khiếu thẩm mỹ của bạn, ngay cả khi thứ đó đang trở nên hoàn thiện hơn. Nhưng nếu bạn chấp nhận bước ra khỏi bức bình phong đó và trở nên thành thật, ít nhất là đối với bản thân bạn, rằng ở ngoài kia có cái gọi là thiết kế tốt và có cái là thiết kế dở, thì bạn sẽ bắt đầu học chi tiết về cách thiết kế tốt. Bạn sẽ tự đánh giá xem mỹ cảm của bạn đã thay đổi như thế nào? Khi bạn phạm phải lỗi lầm, bạn tìm xem điều gì gây ra lỗi lầ đó? Bạn sẽ tự hỏi rằng những người khác đã học về thiết kế như thế nào?</p><p>Khi bạn bắt đầu tìm hiểu sâu về vấn đề, bạn sẽ thấy ngạc nhiên khi biết rằng các nguyên tắc về vẻ đẹp ở các lĩnh vực khác nhau lại giống nhau nhiều đến thế nào. Bạn sẽ thấy những nguyên tắc cho việc thiết kế đẹp xuất hiện ở khắp mọi nơi.</p><h2>Thiết kế tốt là một thiết kế đơn giản</h2><p>Bạn sẽ nghe điều này từ trong toán học ra đến hội họa. Trong toán học, những phương pháp chứng minh ngắn hơn thường là tốt hơn. Đặc biệt với các tiên đề, cái nào càng ngắn lại càng có ý nghĩa. Điều đó cũng đúng trong lập trình. Đối với dân kiến trúc sư và thiết kế, điều đó có nghĩa là cái đẹp nên phụ thuộc vào việc chọn lựa các yếu tố kết cấu một cách cẩn thận hơn là chọn những thứ trang hoàng hời hợt (bản thân những thứ trang hoàng không có tệ, nó chỉ tệ khi được dùng để che đậy các cấu trúc nhạt nhẽo). Cũng tương tự như vậy, trong hội họa một bức tranh tĩnh vật vẽ về một số đồ vậy được quan sát kỹ lưỡng và vẽ đến từng chi tiết thì thường sẽ hấp dẫn hơn những đường nét nguệch ngoạc nhìn có vẻ hào nhoáng, ấn tượng nhưng thực chất chỉ là sự lặp đi lặp lại nhàm chán của những thứ như là cổ ren trong áo. Còn trong việc viết thì cái đẹp có nghĩa là: viết ra những gì bạn muốn nói và viết thật ngắn gọn.</p><p>Thoạt đầu có vẻ kì lạ khi chúng ta nhấn mạnh sự đơn giản Bạn sẽ nghĩ trạng thái mặc định của mọi thứ lúc nào chẳng là đơn giản. Làm nó cầu kì mới khó. Nhưng thực chất khi mọi người cố gắng trở nên sáng tạo, họ mất đi cái chất đó. Khi mọi người bắt đầu tập viết, họ cố gắng dùng các từ khoa trương nghe khác hoàn toàn lúc họ nói. Nhà thiết kế thì cố trở thành nghệ sĩ bằng cách dùng các thủ pháp như các đường cong cầu kì hay các vòng xoắn xoáy tròn. Còn các họa sĩ thì lại muốn theo trường phái Biểu hiện. Mọi thứ chỉ là sự tránh né. Bên dưới những từ ngữ đao to búa lớn hay các nét vẽ \"biểu hiện\" đó là một sự trống rỗng, và đó là điều đáng sợ.</p><p>Khi bạn bị ép phải làm mọi thứ trở nên đơn giản, bạn đang bị ép phải đối mặt với vấn đề thật. Nếu bạn không thể tạo ra được những thứ trang hoàng cầu kì, bạn phải tạo ra được một thứ gì đó có ý nghĩa.</p><h2>Thiết kế tốt là trường tồn với thời gian</h2><p>Trong toán học, mọi chứng minh đều là trường tồn trừ khi nó bị phát hiện ra là sai. Vậy ý của Hardy là gì khi ông nói rằng không có sự xấu xí nào là vĩnh viễn trong toán học? Ý của ông ấy cũng giống như ý của Kelly Johnson: nếu thứ gì đó xấu xí thì nó không phải là giải pháp tốt nhất. Phải có thứ gì đó tốt hơn, và cuối cùng sẽ có người tìm ra được giải pháp đó.Nhắm đến sự trường tồn là cách để giúp bạn tìm ra câu trả lời tốt nhất: nếu bạn tưởng tượng ra được có người làm tốt hơn bạn, thì bạn phải cố gắng vượt qua bạn trước. Một vài bậc thầy làm giỏi đến mức họ chừa rất ít khoảng trống cho người khác vươn lên. Nhà điêu khắc gỗ Durer đã tạo ra những tuyệt tác đỉnh cao đến mức các thế hệ sau đều dưới bóng của&nbsp;ông.Nhắm đến sự trường tồn cũng là cách giúp bạn né được cái bẫy thời trang. Thời trang là thứ được định nghĩa sẽ luôn thay đổi với thời gian, do đó nếu bạn tạo ra những thứ mà hậu thế vẫn tấm tắc khen đẹp, thì tức cái đẹp đó nó đều từ tài năng của bạn hơn là do xu hướng của thời thế.Một điều lạ là, nếu bạn cố gắng tạo ra những sản phẩm mà hậu thế phải trầm trồ, thì bạn cũng đang cố gắng khiến những tiền bối phải tấm tắc khen ngợi. Thật khó là biết được trong tương lại mọi thứ sẽ như thế nào, nhưng ta có thể chắc chắn rằng những thứ gọi là thời trang trong quá khứ chẳng mang gì đến cho thời trang hiện đại. Do đó nếu bạn có thể tạo ra thứ mà mọi người hôm nay thấy đẹp, và những người sống thời năm 1500 thấy đẹp, thì khả năng cao những người trong năm 2500 cũng thấy đẹp.</p><p>Một cái bếp gas thông thường thì có bốn cái nhóm lửa được xếp theo hình vuông, và một nút vặn điều khiển cho mỗi cái nhóm lửa ấy. Bạn sẽ sắp xếp nút điều khiển ấy như thế nào? Câu trả lời đơn giản đó là xếp chúng thành một hàng. Nhưng đây là một câu trả lời đơn giản cho một câu hỏi sai. Những nút vặn ấy được tạo ra cho con người dùng, và nếu bạn xếp chúng thẳng một hàng, thì cái người dùng xui xẻo kia sẽ phải dừng lại để nghĩ xem rốt cuộc nút vào nào là cho cái nhóm lửa nào. Tốt nhất là xếp những nút vặn ấy thành hình vuông giống như những cái nhóm lửa.Có rất nhiều thiết kế tồi được tạo ra bởi sự cần mẫn nhưng bị sai đường lầm lối. Hồi giữa thế kỷ 20 đã có một trào lưu dùng phông chữ sans-serif. Những phông chữ này thì gần sát với sự thuần khiết giống nét chữ của người, gợi nhớ đến những lá thư tay. Nhưng trong văn bản đó không phải là vấn đề bạn muốn giải quyết. Trong việc đọc hiểu, điều quan trọng hơn là mọi người phân biệt được các kí tự. Phông chữ này thì trông giống nét bút thời Victoria, nhưng trong phông chữ Times Roman kí tự g viết thường thì dễ phân biệt hơn ký tự y viết thường.Người ta không chỉ cải thiện các giải pháp, người ta còn có thể cải thiện các vấn đề. Trong ngành phát triển phần mềm, một vấn đề không giải quyết được có thể bị thay thế bằng một vấn đề tương đương nhưng dễ giải quyết hơn. Việc nghiên cứu vật lý trở nên nhanh hơn khi các vấn đề được diễn đạt theo hướng dự đoán các hành vi có thể quan sát được, hơn là cố gắng đối chiếu nó với ngôn từ trong Kinh Thánh.</p><p>Tiểu thuyết của Jane Austen thì hầu như không có đoạn nào mà miêu tả, thay vì nói cho độc giả biết mọi thứ trông như thế nào, bà đã kể chuyện hay đến mức mọi người tự hình dung ra được cảnh đấy. Tương tự như vậy, một bức tranh có yếu tố gợi mở thì thường hấp dẫn hơn là bức tranh mô tả chuyện gì đang xảy ra. Ai cũng tự suy diễn xem chuyện gì xảy ra sau nụ cười của Mona Lisa.Trong kiến trúc và trong thiết kế, nguyên tắc này có nghĩa là một công trình hay một vật dụng nên cho phép người dùng dùng theo ý muốn của họ: chẳng hạn một công trình tốt sẽ như là một cái nền để mọi người dùng làm nền cho cuộc sống của họ, chứ không phải phải là khiến họ sống như là họ đang là một cái máy thực hiện các chỉ thị viết ra bởi người kiến trúc sư.Trong phát triển phần mềm, điều đó có nghĩa là bạn nên cho người dùng một số ít các công cụ cở bản để từ đó họ tạo ra các sản phẩm theo ý họ, như là chơi Lego vậy. Trong toán học, điều đó có nghĩa là một phép chứng minh phải là tiền đề cho sự phát triển của những phép chứng minh khác. Các phép chứng minh đó có thể đơn giản nhưng hay hơn các phép chứng minh phức tạp, nhưng không dẫn tới một khám phá nào mới. Trong khoa học nói chung thì được trích dẫn lại nghiên cứu khoa học đã là một tín hiệu cho thấy bài nghiên cứu đó rất đáng được khen ngợi.</p><p>Điều này thì thường không đúng. Nhưng những bức điêu khắc của Durer hay sản phẩm Womb Chair của Saarinen và đền Pantheon hay chiếc Porsche 911 đời đầu, những thứ đó đều có một chút hài hước đối với tôi. Còn định lý chưa hoàn thiện của Godel thì thực sự là một truyện cười.</p><p>Tôi nghĩ đó là vì sự hài hước thường có liên quan đến sức mạnh. Một người có khiếu hài hước là một người mạnh mẽ: một người giữ được khiếu hài hước thì có thể giũ bỏ được những bất hạnh ập đến trong đời, và mất đi khiếu hài hước tức là khiến bản thân bị tổn thương bởi những bất hạnh đó. Và do đó một biểu hiện - hoặc ít nhất là kí hiệu ám chỉ - của sức mạnh là không nghiêm túc quá với bản thân. Sự tự tin về bản thân thường sẽ khiến người ta thêm một chút hài hước vào sản phẩm của mình, như Hitchcock làm với phim của ông hay Bruegel với các tác phẩm hội họa hay Shakespeare với những vở kịch của mình.</p><p>Một thiết kế tốt không chắc là cần phải hài hước, nhưng khó để mà hình dung được một thứ chẳng có chút hài hước nào có thể được gọi là thiết kế tốt.</p><p>Nếu bạn quan sát những người đã tạo ra các tuyệt tác, một điểm chung mà họ có đó là họ đều làm việc rất chăm chỉ. Nếu bạn không làm việc rất chăm chỉ, bạn chỉ đang lãng phí thời gian của mình. </p><p>Những vấn đề khó khăn thì đỏi hỏi những nỗ lực khổng lồ. Trong toán, các phép chứng minh khó thì đòi hỏi những giải pháp đột phá, và những giải pháp đó thường rất hấp dẫn. Trong ngành kỹ thuật cũng thế.</p><p>Khi bạn phải trèo lên một ngọn núi cao, bạn phải vứt đi những thứ không cần thiết ra khỏi túi của bạn. Một kiến trúc sư cũng phải làm như thế khi ông ấy cố gắng thiết kế một công trình ở một nơi khó xây, hay ngân sách hạn chế, trong khi vẫn phải tạo ra một kiến trúc tinh tế. Những xu hướng thời trang hay hợp thời thường bị gạt đi khi mọi người phải đối mặt với những vấn đề vô cùng khó trong doanh nghiệp.</p><p>Nhưng không phải cứ chăm chỉ là tốt. Có những nỗi đau tích cực và nỗi đau tiêu cực. Bạn sẽ muốn những nỗi đau giống như bạn có được khi bạn phải chạy bộ chứ không phải nỗi đau như khi bạn dẫm phải đinh. Một vấn đề khó thì tốt cho người thiết kế, nhưng một khách hàng xấu tính hay những công cụ tồi thì không. </p><p>Trong nghệ thuật, những đỉnh cao danh vọng trước đây thường được dành cho họa sĩ có các bức họa vẽ người. Có một lý do đằng sau truyền thống này, không chỉ vì những bức họa có mặt người thì khiến bạn dễ nhớ hơn là các bức họa không có. Chúng ta quá giỏi trong việc nhận diện và nhìn ngắm khuôn mặt đến mức bất kỳ ai vẽ chân dung người khác đều phải trải qua một sự khó khăn không tưởng tượng được để thỏa mãn chúng ta. Nếu bạn vẽ một cái cây và bạn thay đổi góc của một cành cây 5 độ, sẽ chẳng ai để ý. Nhưng nếu bạn làm mắt ai đó lệch đi 5 độ trong tác phẩm của mình, mọi người sẽ để ý.</p><p>Khi những nhà thiết kế ở Bauhas áp dụng nguyên tắc \"hình thể phải tuân theo chức năng\" của Sullivan, ý của họ là hình thể phải đi theo chức năng. Và nếu chức năng khí, thì bắt hình thể đi theo nó còn khó hơn nữa, bởi vì sẽ chẳng có cơ hội để sửa lỗi sai. Những động vật hoang dã ngoài thiên nhiên có hình thể rất đẹp vì chúng có cuộc sống khó khăn.</p><p>Giống như những vận động viên tài ba, người thiết kế vĩ đại khiến mọi thứ trông dễ dàng. Phần lớn đây là một ảo ảnh. Một bài viết đọc nghe dễ viết, đọc mượt mà thường chỉ được tạo ra từ bản nháp thứ 8.</p><p>Trong khoa học và kỹ thuật, một vài phát kiến vĩ đại trông đơn giản đến mức bạn hẳn đã tự nói đến với bản thân rằng, à mình cũng nghĩ ra được. Và khi đó người tìm ra phát kiến đó sẽ hỏi bạn: thế sao anh đã không tìm ra?</p><p>Trong vài tác phẩm của Leonardo, hình vẽ đầu người chỉ được tạo ra từ vài nét vẽ. Khi bạn nhìn chúng bạn sẽ nghĩ rằng tất cả những gì bạn làm là cố gắng đặt 8 hay 10 đường vẽ vào đúng chỗ là bạn sẽ tạo ra một tác phẩm đẹp tương tự. Ừ đúng đấy, nhưng bạn phải làm sao mà tất cả chúng đều phải đặt chúng chính xác ở từng vị trí. Một sai lệch nhỏ sẽ khiến toàn bộ bức vẽ thất bại.</p><p>Vẽ bằng đường thẳng thực ra là thứ khó làm nhất trong nghệ thuật hội họa bởi vì nó đòi hỏi một thứ gần bằng với sự hoàn hảo. Nói theo ngôn ngữ toán học, nó là một biểu thức dạng đóng, các họa sĩ trình độ yếu hơn thì cố gắng giải quyết vấn đề bằng các ước tính nối tiếp nhau. Một trong những lý do mà lũ trẻ bỏ cuộc ngưng học vẽ khi mới tầm 10 tuổi là vì chúng quyết định vẽ như người lớn, và một trong những thứ đầu tiên chúng vẽ là khuôn mặt. Chết chưa!</p><p>Trong đa số các lĩnh vực vẻ ngoài đơn giản thường đi kèm với sự rèn luyện. Có lẽ là vì sự rèn luyện giúp trau dồi tiềm thức của bạn trong việc thực hiện các việc liên quan đến ý thức. Trong một vài trường hợp bạn theo đúng nghĩa đen là rèn luyện cả cơ thể. Một chuyên gia piano có thể chơi các phím nhạc nhanh hơn tốc độ tín hiệu từ não truyền đến tay. Tương tự như với với người nghệ sĩ, sau một thời gian rèn luyện, anh ta có thể khiến hình ảnh trong đầu đi nhanh qua mắt và xuống tay một cách tự động như là ai đó đập chân theo nhịp.</p><p>Khi ai đó nói về việc \"bị hút vào\", tôi nghĩ ý của họ đó là xương sống của họ đang kiểm soát tình hình. Xương sống chúng ta phản ứng rất nhanh và khi nó kiểm soát tình hình, nó giải phóng ý thức của chúng ta để giải quyết các vấn đề khó hơn. </p>', 96, 'Dịch từ bài \"Taste for Makers\" của Paul Graham đăng vào tháng 2 năm 2002 trên blog của ông. Tôi mới vừa nói chuyện với một...', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULovVipIuiJrkMQh3pfR_owiaxtdts6-RFfw_OKRuUfiydVhl3pU5vP2UZZbSD_A_Eno&usqp=CAU', 0.00, 12, 1, 0, '2023-12-12 12:28:28.000000', 0);
INSERT INTO `blog` VALUES (235, 'Mỹ thuật lõa thể và tranh ảnh khiêu dâm khác nhau thế nào?', '<img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700219713/lm19wryqm9f9sue6gy1u.png\" alt=\"Bộ ảnh chụp ở Tuyệt Tình Cốc gây tranh cãi gần đây vì \"thiếu vãi\"\" /><p>Nhà biện giáo Cơ Đốc Ravi Zacharias đã kể một câu chuyện về một phiên tòa mà ở đó luật sư biện hộ cho một nhiếp ảnh gia khiêu dâm. Luật sư đã hỏi nguyên đơn:“Ông đã bao giờ đến một bảo tàng mỹ thuật chưa?”“Rồi”, nguyên đơn trả lời“Vậy ông có phải trả tiền để vào đó thưởng lãm tranh không?”“Hiển nhiên rồi!”“Có phải là trong bảo tàng có tranh vẽ những người trần truồng không?”, luật sư hỏi tiếp.“Đúng vậy”, nguyên đơn đáp.“Vậy nếu ông gọi những bức tranh ấy là nghệ thuật, hà cớ gì ông gọi tạp chí Playboy là văn hóa phẩm đồi trụy?”.&nbsp;&nbsp;</p><p>Đã bao giờ bạn tự hỏi rằng, đâu là sự khác biệt giữa một tác phẩm mỹ thuật vẽ người lõa thể với tranh ảnh khiêu dâm? Thực sự có chăng sự khác biệt giữa chúng?</p><p>Trong cuốn Thoái bộ hành hương, C.S.Lewis có viết về một người đàn ông bước vào nhà hàng, gọi hai món trứng và sữa. Sau khi nếm sữa, ông bảo với người phục vụ rằng sữa rất ngon. Người phục vụ đáp: “Sữa chỉ là chất dịch tiết ra từ một con bò, cũng như phân và nước tiểu mà thôi”. </p><p>Sau khi ăn trứng, người đàn ông lại khen vị của trứng rất ngon. Một lần nữa, người phục vụ lại đáp lời rằng trứng cũng chỉ là phụ phẩm sau khi chịch của một con gà. </p><p>Sau một lúc suy nghĩ về những lời của người phục vụ, người đàn ông đáp lại “Anh nhầm rồi. Anh không phân biệt được cái mà tự nhiên ban tặng để làm thực phẩm nuôi dưỡng con người với những thứ rác thải vứt đi”.</p><p>Ravi Zacharias cho rằng, cả tranh nghệ thuật lẫn tranh ảnh đồi trụy đều thể hiện những hình thể lõa lồ, nhưng động cơ, dụng ý của hành động này rõ ràng khác nhau. Tranh ảnh đồi trụy phô bày cơ thể trần truồng đơn thuần vì mục đích khêu gợi bản năng sinh lý tầm thường của con người, những thèm khát mà bản thân người đó sẽ không thể nào tự mình cảm thấy viên mãn được. Mặt khác, nghệ thuật khắc họa cơ thể trần truồng với mục đích tôn vinh vẻ đẹp hình thể con người.</p><p>Tranh ảnh khiêu dâm sản sinh ra dục vọng, còn mỹ thuật sản sinh ra cảm giác ngưỡng vọng sự lộng lẫy và mỹ miều của hình thể con người, và theo đó là sự vinh dự của người tạo tác.</p>', 69, 'Bộ ảnh chụp ở Tuyệt Tình Cốc gây tranh cãi gần đây vì \"thiếu vãi\" Nhà biện giáo Cơ Đốc Ravi Zacharias đã kể một câu chuyện về...', NULL, 'https://cdn.tuoitre.vn/471584752817336320/2023/6/21/parthenon-read-only-16873095219811337207220.jpg', 0.00, 12, 1, 2, '2023-11-17 18:15:42.956000', 0);
INSERT INTO `blog` VALUES (236, '“Cầm kỳ thi họa” ở Trung Hoa', '<img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700219771/yaywnnhcpab7euoo1vjm.png\" alt=\"Cầm kì thi họa\" /><p>Sự ảo diệu ẩn chứa trong “Tứ nghệ” là  bảo vật mà thời cổ đại chư Thần đã lưu lại cho nhân loại, cũng là tinh  túy văn hóa từ 5000 năm lịch sử. Chia sẻ vài câu chuyện liên quan đến cầm kỳ thi họa, để mọi  người hiểu rõ tinh thông “Tứ nghệ” có thể đem đến cho con người  những ảnh hưởng tích cực như thế nào.</p><p>“Cầm” có thể câu thông với Thần</p><p>Trong “Cảnh thế thông ngôn” có ghi chép lại: “Người  tộc Phục Hy nhìn thấy tinh hoa của Ngũ Tinh rơi xuống trên cây ngô  đồng, phượng hoàng bay tới đậu. Mà phượng hoàng là vua của muôn loài  chim, nó chỉ ăn cây trúc, chỉ đậu trên cây ngô đồng, chỉ uống nước suối  mát ngọt. Người tộc Phục Hy do vậy mà biết được cây ngô đồng là vật liệu  tốt trong các loài cây, thế là dùng nó làm ra một loại nhạc cụ tao nhã.  Người tộc Phục Hy dùng tiết khí, chu thiên, lưỡng nghi, ngũ hành mà tạo  thành cổ cầm, còn gọi là Giao cầm, tức âm nhạc Giao Trì (nơi ở của Tây  Vương Mẫu)”.</p><p>Quá trình tộc Phục Hy chế tạo cổ cầm, đã  thể hiện được tấm lòng kính ngưỡng của con người đối với trời đất, thần  linh vào thời xa xưa, cũng như Lão Tử từng nói: “Người thuận theo đất, đất thuận theo trời, trời thuận theo đạo, đạo thuận theo tự nhiên”.</p><p>Tiếng nhạc của cổ cầm yên tĩnh thâm  thúy, diễn tấu trong trẻo, có thể câu thông với chư Thần. Thời xa xưa  có một khúc nhạc nổi tiếng tên “Hoa Tư Dẫn”, ngọn nguồn của khúc nhạc  này như sau: Lúc Hoàng Đế tại vị 15 năm, vì thiên hạ chưa được yên ổn mà  lo lắng, một ngày nọ trong giấc mộng đã đi tới một nơi gọi là Hoa Tư  Quốc. </p><p>Nơi đó “dân không thèm khát, không chết yểu, không biết vui cười, không biết sợ chết; trong tâm không nảy sinh điều ác”.  Sau khi Hoàng Đế tỉnh lại, hiểu như thế nào đạo trị quốc, dùng phương  thức của Hoa Tư Quốc mà thống trị thiên hạ, sau đó thiên hạ quả thật đã  lập lại an ninh trật tự. Điều “Hoa Tư Dẫn” ca tụng chính là thời đại an  bình, dân không có dục vọng xa xỉ. </p><p>Con người ở Hoa Tư Quốc không có tham  dục, nên không lưu luyến sinh mệnh, không sợ hãi tử vong, cũng không  nảy sinh ý niệm yêu thích cùng chán ghét. Cảnh giới như thế, kỳ thực là  cảnh giới của người tu luyện, văn hóa của ‘cầm’ cũng là một loại văn hóa  tu luyện.</p><p>Nho gia yêu cầm, cũng coi cầm là biểu tượng của quân tử. Trong “Lễ ký” có nói: “Nhân sĩ không cố ý làm hại cầm sắt”,  Nho gia cho rằng đàn cổ có thể truyền tải đạo, giống như đức, có thể  hiểu rõ ý chí, tĩnh tâm. Đạo gia yêu cầm, bởi vì cầm có thể giúp tu  thân dưỡng tính.</p><p>Gặp chữ như gặp người</p><p>Thư pháp cũng là môn học vấn ảo diệu,  cho dù ở bất kỳ thời đại nào, bất kỳ quốc gia nào, tinh hoa của nghệ  thuật đều nằm ở chỗ “hình thần toàn vẹn”. ‘Hữu hình’ mà ‘vô thần’ thì  nghệ thuật mất đi linh khí và tinh thần của nó; ‘hữu thần’ mà ‘vô hình’  thì nghệ thuật mất đi vật dẫn cùng vật chứa của nó.</p><p>Thời xa xưa, Thương Hiệt tạo ra chữ  viết, ông cho con người linh hồn của văn tự, từ đó về sau đời này qua  đời khác, con người phát minh ra thư pháp khác nhau, tạo hình thái cho  văn tự. Một thư pháp tốt, cần chú ý “chuẩn mực”, cần một thời gian dài  tập luyện. Ngoài ra, tinh thần của người viết thư pháp, sẽ phản ánh ra ở  nét chữ, giống như điều người ta thường nói: “Gặp chữ như gặp người”.</p><p>Sự tuyệt diệu của thư pháp nằm ở ý vị và lực bút, trong thư pháp coi trọng: “Chữ  dùng thần (tinh thần) làm hồn phách, nếu thần không hòa, thì chữ không  biểu đạt được thái độ; dùng tâm làm gân cốt, nếu tâm không kiên cường,  thì chữ không có sức lực”. Thường xuyên bảo trì tâm thái ôn hòa,  gặp thất bại vẫn giữ ý chí kiên cường, những người có đủ nhân phẩm này,  cũng nhất định sẽ luyện được chữ tốt.</p><p>Đường Thái Tông đã từng nói với triều thần: “Học  thư pháp, thiếu sót nằm ở tâm lực lười biếng, không thể chuyên tâm lắng  nghe. Nay ta ở gần sách của cổ nhân, không cần học hình thế của họ, chỉ  cầu cốt lực của họ, hình thế sẽ tự sinh ra”. Là ý nói, tinh thần  của thư pháp nằm ở khí phách của chữ, mà khí phách đó lại nằm ở tâm lực  của người. Tâm lực lười biếng, không thể chuyên tâm thì thư pháp khó  luyện thành. </p><p>Nhà thư pháp trứ danh Vương Hi lúc  còn thiếu niên khi đang luyện tập thư pháp, đã lấy nước trong ao nhuộm  thành màu mực. Chính tinh thần kiên trì không mệt mỏi như vậy, khiến ông  sau này được mọi người tôn làm “Thánh Sách”.</p><p>Thư pháp chú ý cách chấp bút, dùng  bút, đường nét, kết cấu, pha mực, bố cục, kết cấu các loại… Sự hài hòa ở  trong nét bút tựa như đi trên mây, như dòng nước chảy, thể hiện qua  trong bố cục xuyên suốt. “Bay nhanh như chim nhạn hoảng sợ, uyển  chuyển như rồng lượn, phồn vinh như cúc mùa thu, rực rỡ sum sê như tùng  mùa xuân. Phảng phất như mây nhẹ che phủ vầng trăng, phiêu diêu như  tuyết về trong làn gió”. Đây chính là hình dung của cổ nhân đối với vẻ đẹp của thư pháp. </p><p>Trải qua rất nhiều niên đại, những  nhà thư pháp lớn không chỉ có thành tựu lớn trong lĩnh vực nghệ thuật,  nhân cách của họ cũng được người đời sau kính ngưỡng. Như triều Đường có  Nhan Chân Khanh, ông kháng cự phản loạn An Lộc Sơn, lập thành đại công,  được phong làm “Nhan Lỗ Công”, người đời đem chữ của ông và chữ của  Liễu Công Quyền xưng là “Nhan cân Liễu cốt”. Thời Tống có Nhạc Phi, tinh  trung báo quốc, thống soái ngàn binh vạn mã, đánh đâu thắng đó, không  gì cản nổi. Chữ của họ cũng như nhân cách của họ, khiến người đời sau  theo không kịp.</p><p>Từ đây có thể thấy, “thiên nhân hợp  nhất” và “hình thần toàn vẹn” là nguyên tố không thể thiếu trong văn hóa  truyền thống, cùng với thành ý tu thân của cổ nhân, đặc biệt tương trợ  lẫn nhau. Nói một cách đơn giản, một người có phẩm cách cao thượng, cũng  sẽ biết sáng tạo ra nghệ thuật hay.</p><img src=\"http://res.cloudinary.com/dmpru0wgq/image/upload/v1700219807/tt4hygg6nptcxpwpzlvw.png\" alt=\"Image\" /><p>Văn hóa cờ cũng là văn hóa thần  truyền, bắt đầu từ thời Nghiêu Thuấn. Vào triều Tấn, tác giả Trương Hoa  trong cuốn “Bác Vật Chí” (Khoa học về vạn vật) có viết: “Vua Thuấn tạo ra cờ vây để giáo dục con”.</p><p>Trong “Lộ Sử Hậu Ký” có ghi lại, vua  Nghêu cưới vợ là Phú Nghi Thị, sinh hạ đứa con Đan Chu, khổ nỗi tính  cách bướng bỉnh. Một hôm, vua Nghiêu đi đến ven sông Phần, gặp hai vị  tiên nhân ngồi đối diện nhau dưới hai cây thông xanh biếc, vẽ cát thành  đường, dùng hàng ngũ đen và trắng làm trận đồ. Vua tiến lên trước thỉnh  giáo phương pháp cải biến Đan Chu, một vị tiên nhân nói: “Đan Chu thích tranh đấu nhưng lại ngu dốt, nên phải dùng thứ cậu ta thích mà an định tâm của cậu ta”.</p><p>Thế là, tiên nhân chỉ vào đường trên cát và những viên đá, nói: “Đây  gọi là bàn cờ, tên là cờ vây, bàn cờ vuông mà tĩnh, quân cờ tròn mà  động, dùng pháp trời đất, tự lập trò chơi này, thế gian con người khó  giải được”. Vua Nghiêu trở về dạy cho Đan Chu cờ vây, dùng động tĩnh kết hợp của cờ vây mà thay đổi tính cách tranh đấu của Đan Chu.</p><p>Trong “Thế Thuyết Tân Ngữ” có ghi  chép lại một câu chuyện nhỏ, Đông Tấn và Tiền Tần đang lúc đánh trận,  phụ trách chiến sự là thừa tướng Tạ An đang cùng bạn bè đánh cờ, lúc này  người hầu đem đến một bức thư, Tạ An xem xong để bức thư qua một bên,  tiếp tục chuyên tâm đánh cờ. </p><p>Bạn bè hỏi ông nội dung của bức thư, Tạ An trả lời rằng: “Bọn trẻ con đánh bại kẻ địch”.  Trận chiến này quan hệ đến sự tồn vong của quốc gia, vậy mà Tạ An lại  có thể kiềm chế sự vui mừng mà nói đùa, thái độ này nhìn từ bên ngoài  không lộ vẻ kinh động cũng chính là hàm dưỡng từ trí huệ do cờ vây mang  lại. </p><p>Trí huệ của cờ vây còn bao hàm dịch  lý của thiên tượng, sách lược binh pháp và an định trị quốc. Người xưa  thích coi bàn cờ nho nhỏ như là trận chiến, đời Hán có Mã Dung từng nói:  “Quan sát cờ vây, pháp lý ở chỗ dụng binh, bàn cờ ba thước như trận chiến đấu”.  Đường Thái Tông cũng giỏi cờ vây, ông và Cầu Nhiêm Khách trong lúc đánh  cờ có thể “một con cờ định càn khôn”, khí phách đó khiến người đời sau  ca tụng không ngừng.</p><p>Quy tắc cờ vây tuy đơn giản nhưng lại  biến hóa vô cùng, bàn cờ tượng trưng cho vũ trụ, chính giữa một điểm  đại biểu cho trung tâm của vũ trụ, bàn cờ có 360 điểm đại diện cho 360  ngày, còn 4 cạnh đại diện cho 4 mùa trong năm, quân cờ đen và quân cờ  trắng đại biểu cho đêm đen và ban ngày luân chuyển nhau. Như vậy, xem ra  một bàn cờ nho nhỏ mà tượng trưng cho thiên thể vũ trụ. </p><p>19 đường cờ tung hoành giao thoa,  phân biệt rõ ràng, 361 quân cờ trắng đen chằng chịt nhau, bao hàm vạn  tượng. Từ trong không gian có hạn của bàn cờ tiến nhập vào không gian vô  hạn. Trong lịch sử có nhiều Thánh nhân trí giả, có thể nhìn thấu suốt  biến hóa của trời đất, vạn vật thế gian bên trong ván cờ. </p><p>Thời Tam Quốc có Gia Cát Lượng trong “Vi Kỳ Ca”, viết: “Trời xanh như cái vung hình tròn, đất liền như bàn cờ”.  Gia Cát Lượng có trí huệ siêu nhiên xuất thế, ông cho rằng cuộc đời con  người muôn hình vạn trạng như bàn cờ, sự tình ở thế gian tựa hồ như  nước cờ thay đổi mà phát sinh biến hóa, thể hiện ra ‘đời người như cờ,  cờ cũng như đời người’, người có thể không chơi cờ, nhưng không thể  không đi ván cờ của cuộc đời. </p><p>Bởi vì con người vừa sinh ra đã ở  ngay bên trong ván cờ, một ván cờ kết thúc có thể bắt đầu lại, nhưng ván  cờ cuộc đời cũng chỉ có một bàn, xuống cờ không hối hận, làm sao có con  đường quay đầu lại? Đạo lý của cờ vây muốn nói với mọi người: Suy tư  trong tĩnh, xem kỹ toàn cục, cẩn thận đi tốt mỗi bước, tìm thấy nhân  duyên của bản thân, và đi vào con đường đại đạo quang minh, hướng tới  tương lai tốt đẹp, mới có thể có kết cục hoàn mỹ.</p><h2>Trong thơ có họa, trong họa có thơ&nbsp;</h2><p>Họa, còn gọi là tranh. Công cụ hội  họa truyền thống và tài liệu gồm có bút lông, mực, thuốc màu, giấy, lụa  các loại,… đề tài có thể phân thành nhân vật, sơn thủy, tranh hoa và  chim thú…, kỹ pháp chia làm lối vẽ tỉ mỉ và lối vẽ tự do. Tranh Trung  Quốc cũng như thư pháp, dùng sự nặng nhẹ của nét bút và độ đậm nhạt của  mực nước, phác thảo ra các đường nét cương trực hay nhu hòa, nghiêm  chỉnh hay phóng khoáng, cũng biểu hiện ra ngàn vạn tư thái và ý vị khác  nhau.     </p><p>Thơ và tranh vốn có cùng ngọn nguồn,  cả hai đều coi trọng đặc điểm “hình thần vẹn toàn”. Một họa sĩ giỏi, có  thể đem thần thái của nhân vật khắc họa ra, cũng gọi là “truyền thần”.  Trên kỹ thuật cần phải làm tới mức ý nghĩ theo bút mà vẽ ra, muốn sao  được vậy. </p><p>Thời Bắc Tề có Tào Trọng Đạt vẽ Phật  Đà, Bồ Tát, những nhân vật trong tranh như khoác lên tấm vải mỏng, giống  như vừa bước ra từ trong nước, ông được ca tụng là “Tào y xuất thủy”;  đời Đường có Ngô Đạo Tử được tôn là “Nhất đại họa thánh” cũng vẽ tượng  Phật, thần tiên và vũ trụ rộng lớn, bút pháp xoay tròn phiêu dật, nhân  vật được vẽ với nếp áo lung lay trong gió, như có áo trời bay cao, hiệu  ứng như gió thổi lên vách tường, ông được vinh danh “họa sĩ mang theo  gió”.</p><p>Từ thời cổ đại, qua tác phẩm của họa  sĩ và bút pháp trên đó, người xem có thể thấy được tâm thái thuần tịnh  của tác giả, sức mạnh tinh thần ở bên trong, và từ đó đánh giá về thẩm  mỹ nghệ thuật.</p><p>Tranh Trung Quốc coi trọng ý cảnh,  cùng sông núi vạn vật tương thông một cách khéo léo. Lúc mọi người ca  ngợi một bức họa, thường nói: “Trong thơ có họa, trong họa có thơ”. Bất kể là thơ hay họa, đều thể hiện ra khí tức của sinh mệnh vạn vật trên thế gian. </p><p>Đời Nguyên có Vương Miện cả đời yêu cây mai, vịnh cây mai, ông vẽ bức “Mực mai”,  trong bức vẽ đề thơ: “Không cần người khen nhan sắc đẹp, chỉ lưu thanh khí đầy càn khôn”. Ông vẽ ra không chỉ có hình dạng và thần thái hoa mai, còn có tinh thần kiêu ngạo của hoa mai.</p><p>Đời Đường có Vương Duy một lòng hướng  Phật, trong bức họa “Giang Sơn Tuyết Tế Đồ” của ông, trời cao xa xa,  lại bao hàm ngàn vạn khí tượng, khiến người xem nghĩ đến bài thơ của  ông: “Sông chảy ngoài trời đất, sắc núi ở hư vô” biểu hiện  chính là tấm lòng rộng lớn không màng danh lợi. Những bức họa này ý vị  sâu sắc, khiến người cảm thấy “chân ý” của sinh mệnh.</p><p>Kỳ thực, tác phẩm nghệ thuật thực sự  có thể làm xúc động tâm linh, không phải do biểu đạt tình cảm nhất thời  mà có thể hoàn thành, mà phải dùng tấm lòng thuần thiện, thuần mỹ mới  sáng tác ra được. Nghệ thuật chân chính không bởi thời gian trôi qua mà  mất đi sự rực rỡ của nó, trong ánh mắt và trong trái tim mọi người sẽ  vĩnh viễn còn lưu truyền.</p><p>“Cầm kỳ thi họa”, không hổ danh là nghệ  thuật hiếm thấy của Trung Hoa, từ bên trong có thể lĩnh ngộ được ý vị  sâu xa của văn hóa Thần truyền. Kỳ thực, hết thảy nghệ thuật chính  thống đều như thế, ẩn chứa đạo lý sâu sắc về vũ trụ và nhân sinh, dẫn  dắt mọi người cảm ngộ chân lý của nhân sinh và hoàn thiện lý tưởng đạo  đức nhân cách, tìm tòi Thiên đạo, truy cầu cảnh giới yên tĩnh cao xa.</p><p>Lời bàn thêm: để thấy rằng: “cổ” không đồng nghĩa với  “kém”. Một người thời nay mà xuất sắc được ở một trong 4 lĩnh vực này  thì đã là danh giá lắm rồi: ví như nhà văn nổi tiếng, nhà thơ nổi tiếng,  họa sĩ nổi tiếng, nghệ sĩ chơi đàn nổi tiếng, hay kỳ thủ nổi tiếng, một  danh hiệu đó thôi cũng quá đỗi tự hào. Nhưng có những người xưa thành  thạo giỏi giang cả 4 nghệ thuật này thì người đương thời sẽ gọi họ là  gì?</p>', 96, 'Sự ảo diệu ẩn chứa trong “Tứ nghệ” là bảo vật mà thời cổ đại chư Thần đã lưu lại cho nhân loại, cũng là tinh túy văn hóa từ 5000...', NULL, 'https://images.spiderum.com/sp-images/e69c9820d36511e8b3d8f5c7256183fb.jpg', 0.00, 12, 1, 0, '2023-11-17 18:17:24.216000', 0);
INSERT INTO `blog` VALUES (244, 'Lãnh Đạo Hiệu Quả - Chìa Khóa Của Sự Thành Công Tổ Chức', '<p style=\"text-align: justify; font-size: 20px;\">Cuốn sách \"<b>Lãnh Đạo Hiệu Quả</b>\" là một tài liệu quan trọng dành cho những người đang theo đuổi con đường lãnh đạo trong tổ chức. Tác giả không chỉ chia sẻ những nguyên tắc cơ bản mà còn cung cấp những chiến lược và kỹ năng cụ thể để mọi người có thể trở thành những người lãnh đạo hiệu quả.</p><p style=\"text-align: justify; font-size: 20px;\"><b>Chìa Khóa Của Sự Thành Công Tổ Chức</b></p><p style=\"text-align: justify; font-size: 20px;\">Cuốn sách tập trung vào việc xây dựng những người lãnh đạo có khả năng định hình tương lai của tổ chức. Tác giả phân tích những yếu tố quyết định sự thành công của lãnh đạo và giải mã bí mật đằng sau những quyết định đúng đắn.</p><p style=\"text-align: justify; font-size: 20px;\"><b>Chiến Lược Lãnh Đạo</b></p><p style=\"text-align: justify; font-size: 20px;\">Cuốn sách không chỉ dừng lại ở việc giới thiệu các nguyên tắc lãnh đạo mà còn đưa ra các chiến lược áp dụng trong thực tế. Những tình huống phức tạp được phân tích và giải quyết thông qua góc nhìn chiến lược lãnh đạo.</p><p style=\"text-align: justify; font-size: 20px;\"><b>Phát Triển Kỹ Năng Cá Nhân</b></p><p style=\"text-align: justify; font-size: 20px;\">Lãnh đạo không chỉ là về quyền lực mà còn là về sự phát triển bản thân. Cuốn sách đề cập đến việc phát triển kỹ năng cá nhân, tâm lý lãnh đạo và cách tạo ra một môi trường làm việc tích cực.</p><p style=\"text-align: justify; font-size: 20px;\"><b>Áp Dụng Thực Tế</b></p><p style=\"text-align: justify; font-size: 20px;\">Tác giả không chỉ dừng lại ở mức lý thuyết mà còn hướng dẫn cụ thể cách áp dụng những nguyên tắc và chiến lược lãnh đạo vào các tình huống thực tế trong tổ chức.</p><p style=\"text-align: justify; font-size: 20px;\"><b>Kết Luận</b></p><p style=\"text-align: justify; font-size: 20px;\">\"<b>Lãnh Đạo Hiệu Quả</b>\" không chỉ là một cuốn sách về lãnh đạo, mà còn là nguồn động viên và hướng dẫn cho những ai muốn trở thành người lãnh đạo xuất sắc trong môi trường kinh doanh ngày nay.</p>', 65, 'Review cuốn sách Lãnh Đạo Hiệu Quả', 77, 'https://sachviet.net.vn/upload/product/31543821-fde8-4638-a6ea-68f70c7b0fec-3447.jpeg', 1.00, 14, 1, 18, '2023-12-12 12:28:28.000000', 0);

-- ----------------------------
-- Table structure for blog_comment
-- ----------------------------
DROP TABLE IF EXISTS `blog_comment`;
CREATE TABLE `blog_comment`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `blog_id` bigint NULL DEFAULT NULL,
  `comment_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKb9cpog8ie2cyapsyyt7gikpbl`(`blog_id` ASC) USING BTREE,
  INDEX `FKc4ysudanwhfrrhytio0272sx9`(`comment_id` ASC) USING BTREE,
  CONSTRAINT `FKb9cpog8ie2cyapsyyt7gikpbl` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKc4ysudanwhfrrhytio0272sx9` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog_comment
-- ----------------------------
INSERT INTO `blog_comment` VALUES (29, 201, 35);
INSERT INTO `blog_comment` VALUES (30, 235, 36);
INSERT INTO `blog_comment` VALUES (31, 235, 37);
INSERT INTO `blog_comment` VALUES (32, 233, 38);
INSERT INTO `blog_comment` VALUES (33, 233, 39);
INSERT INTO `blog_comment` VALUES (34, 233, 40);
INSERT INTO `blog_comment` VALUES (35, 233, 41);
INSERT INTO `blog_comment` VALUES (36, 233, 42);
INSERT INTO `blog_comment` VALUES (37, 233, 43);

-- ----------------------------
-- Table structure for blog_hide
-- ----------------------------
DROP TABLE IF EXISTS `blog_hide`;
CREATE TABLE `blog_hide`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `blog_id` bigint NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKbd9rm144lc3t4e6w1wu2lal24`(`blog_id` ASC) USING BTREE,
  INDEX `FKklq94vv39wmdj5scjnxttr8nc`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKbd9rm144lc3t4e6w1wu2lal24` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKklq94vv39wmdj5scjnxttr8nc` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog_hide
-- ----------------------------

-- ----------------------------
-- Table structure for blog_image
-- ----------------------------
DROP TABLE IF EXISTS `blog_image`;
CREATE TABLE `blog_image`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `upload_date` datetime(6) NULL DEFAULT NULL,
  `url_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `blog_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `blog_id`(`blog_id` ASC) USING BTREE,
  CONSTRAINT `blog_image_ibfk_1` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 191 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog_image
-- ----------------------------

-- ----------------------------
-- Table structure for blog_like
-- ----------------------------
DROP TABLE IF EXISTS `blog_like`;
CREATE TABLE `blog_like`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `blog_id` bigint NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKstm0v9i88mcn2763ubwgd2qjj`(`blog_id` ASC) USING BTREE,
  INDEX `FKppog2vdhbhoff9omlv805wjau`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKppog2vdhbhoff9omlv805wjau` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKstm0v9i88mcn2763ubwgd2qjj` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 56 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog_like
-- ----------------------------
INSERT INTO `blog_like` VALUES (51, 201, 96);
INSERT INTO `blog_like` VALUES (52, 201, 69);
INSERT INTO `blog_like` VALUES (53, 244, 69);

-- ----------------------------
-- Table structure for blog_save
-- ----------------------------
DROP TABLE IF EXISTS `blog_save`;
CREATE TABLE `blog_save`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `blog_id` bigint NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKskcq75s8y1lv8l4cyt20ihhug`(`blog_id` ASC) USING BTREE,
  INDEX `FK1enjt512o4e8alk33j9jnf6gj`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK1enjt512o4e8alk33j9jnf6gj` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKskcq75s8y1lv8l4cyt20ihhug` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog_save
-- ----------------------------
INSERT INTO `blog_save` VALUES (18, 229, 96);

-- ----------------------------
-- Table structure for blog_tag
-- ----------------------------
DROP TABLE IF EXISTS `blog_tag`;
CREATE TABLE `blog_tag`  (
  `blog_id` bigint NOT NULL,
  `tag_id` bigint NOT NULL,
  INDEX `FKt7qwebglmm62nfymnl5xwpbws`(`tag_id` ASC) USING BTREE,
  INDEX `FKd0y9mfvb4wsvn1yi3a9jhsase`(`blog_id` ASC) USING BTREE,
  CONSTRAINT `FKd0y9mfvb4wsvn1yi3a9jhsase` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKt7qwebglmm62nfymnl5xwpbws` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog_tag
-- ----------------------------
INSERT INTO `blog_tag` VALUES (196, 15);
INSERT INTO `blog_tag` VALUES (196, 16);
INSERT INTO `blog_tag` VALUES (197, 3);
INSERT INTO `blog_tag` VALUES (197, 15);
INSERT INTO `blog_tag` VALUES (199, 3);
INSERT INTO `blog_tag` VALUES (199, 15);
INSERT INTO `blog_tag` VALUES (200, 15);
INSERT INTO `blog_tag` VALUES (200, 16);
INSERT INTO `blog_tag` VALUES (201, 3);
INSERT INTO `blog_tag` VALUES (201, 23);
INSERT INTO `blog_tag` VALUES (202, 26);
INSERT INTO `blog_tag` VALUES (202, 27);
INSERT INTO `blog_tag` VALUES (203, 30);
INSERT INTO `blog_tag` VALUES (203, 31);
INSERT INTO `blog_tag` VALUES (204, 24);
INSERT INTO `blog_tag` VALUES (204, 25);
INSERT INTO `blog_tag` VALUES (204, 26);
INSERT INTO `blog_tag` VALUES (205, 26);
INSERT INTO `blog_tag` VALUES (205, 30);
INSERT INTO `blog_tag` VALUES (205, 31);
INSERT INTO `blog_tag` VALUES (206, 27);
INSERT INTO `blog_tag` VALUES (207, 35);
INSERT INTO `blog_tag` VALUES (207, 37);
INSERT INTO `blog_tag` VALUES (208, 34);
INSERT INTO `blog_tag` VALUES (208, 41);
INSERT INTO `blog_tag` VALUES (209, 36);
INSERT INTO `blog_tag` VALUES (210, 35);
INSERT INTO `blog_tag` VALUES (210, 40);
INSERT INTO `blog_tag` VALUES (211, 34);
INSERT INTO `blog_tag` VALUES (211, 41);
INSERT INTO `blog_tag` VALUES (211, 42);
INSERT INTO `blog_tag` VALUES (212, 44);
INSERT INTO `blog_tag` VALUES (212, 50);
INSERT INTO `blog_tag` VALUES (213, 46);
INSERT INTO `blog_tag` VALUES (213, 50);
INSERT INTO `blog_tag` VALUES (214, 43);
INSERT INTO `blog_tag` VALUES (214, 47);
INSERT INTO `blog_tag` VALUES (214, 49);
INSERT INTO `blog_tag` VALUES (216, 44);
INSERT INTO `blog_tag` VALUES (216, 45);
INSERT INTO `blog_tag` VALUES (216, 46);
INSERT INTO `blog_tag` VALUES (217, 59);
INSERT INTO `blog_tag` VALUES (217, 61);
INSERT INTO `blog_tag` VALUES (218, 56);
INSERT INTO `blog_tag` VALUES (218, 57);
INSERT INTO `blog_tag` VALUES (219, 57);
INSERT INTO `blog_tag` VALUES (219, 61);
INSERT INTO `blog_tag` VALUES (220, 54);
INSERT INTO `blog_tag` VALUES (220, 58);
INSERT INTO `blog_tag` VALUES (221, 53);
INSERT INTO `blog_tag` VALUES (221, 61);
INSERT INTO `blog_tag` VALUES (222, 63);
INSERT INTO `blog_tag` VALUES (222, 66);
INSERT INTO `blog_tag` VALUES (223, 63);
INSERT INTO `blog_tag` VALUES (223, 66);
INSERT INTO `blog_tag` VALUES (223, 70);
INSERT INTO `blog_tag` VALUES (224, 63);
INSERT INTO `blog_tag` VALUES (224, 65);
INSERT INTO `blog_tag` VALUES (224, 66);
INSERT INTO `blog_tag` VALUES (225, 66);
INSERT INTO `blog_tag` VALUES (225, 70);
INSERT INTO `blog_tag` VALUES (226, 63);
INSERT INTO `blog_tag` VALUES (226, 65);
INSERT INTO `blog_tag` VALUES (226, 68);
INSERT INTO `blog_tag` VALUES (226, 72);
INSERT INTO `blog_tag` VALUES (227, 75);
INSERT INTO `blog_tag` VALUES (227, 81);
INSERT INTO `blog_tag` VALUES (228, 73);
INSERT INTO `blog_tag` VALUES (228, 81);
INSERT INTO `blog_tag` VALUES (229, 73);
INSERT INTO `blog_tag` VALUES (229, 74);
INSERT INTO `blog_tag` VALUES (229, 79);
INSERT INTO `blog_tag` VALUES (230, 75);
INSERT INTO `blog_tag` VALUES (230, 77);
INSERT INTO `blog_tag` VALUES (230, 78);
INSERT INTO `blog_tag` VALUES (230, 80);
INSERT INTO `blog_tag` VALUES (231, 73);
INSERT INTO `blog_tag` VALUES (231, 77);
INSERT INTO `blog_tag` VALUES (231, 81);
INSERT INTO `blog_tag` VALUES (231, 82);
INSERT INTO `blog_tag` VALUES (232, 87);
INSERT INTO `blog_tag` VALUES (233, 84);
INSERT INTO `blog_tag` VALUES (233, 86);
INSERT INTO `blog_tag` VALUES (233, 91);
INSERT INTO `blog_tag` VALUES (234, 84);
INSERT INTO `blog_tag` VALUES (234, 85);
INSERT INTO `blog_tag` VALUES (234, 86);
INSERT INTO `blog_tag` VALUES (234, 88);
INSERT INTO `blog_tag` VALUES (234, 92);
INSERT INTO `blog_tag` VALUES (235, 83);
INSERT INTO `blog_tag` VALUES (235, 89);
INSERT INTO `blog_tag` VALUES (236, 85);
INSERT INTO `blog_tag` VALUES (236, 91);
INSERT INTO `blog_tag` VALUES (193, 15);
INSERT INTO `blog_tag` VALUES (193, 16);
INSERT INTO `blog_tag` VALUES (193, 17);
INSERT INTO `blog_tag` VALUES (193, 18);
INSERT INTO `blog_tag` VALUES (244, 19);
INSERT INTO `blog_tag` VALUES (244, 21);
INSERT INTO `blog_tag` VALUES (244, 22);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `banner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  FULLTEXT INDEX `name`(`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'SÁCH', 'Nơi trao đổi những sách nổi bật và chia sẻ quan điểm về chúng', 'https://images.pexels.com/photos/3358707/pexels-photo-3358707.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
INSERT INTO `category` VALUES (2, 'TÂM LÝ HỌC', 'Nơi chia sẻ về những quan điểm về tâm lí', 'https://images.pexels.com/photos/4100670/pexels-photo-4100670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/4101164/pexels-photo-4101164.jpeg?auto=compress&cs=tinysrgb&w=600');
INSERT INTO `category` VALUES (3, 'NHIẾP ẢNH', 'Nơi chia sẻ những tác phẩm nghệ thuật', 'https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=600');
INSERT INTO `category` VALUES (4, 'QUAN ĐIỂM - TRANH LUẬN', 'Nơi chia sẻ những quan điểm cá nhân', 'https://images.pexels.com/photos/4049960/pexels-photo-4049960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/4861347/pexels-photo-4861347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
INSERT INTO `category` VALUES (5, 'SÁNG TÁC', 'Nơi cái nôi của nghệ thuật', 'https://images.pexels.com/photos/5118500/pexels-photo-5118500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/5530229/pexels-photo-5530229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
INSERT INTO `category` VALUES (6, 'CÔNG NGHỆ', 'Nơi chia sẽ những món đồ công nghệ quý giá', 'https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork-1568x882.jpg');
INSERT INTO `category` VALUES (7, 'TÔN GIÁO', 'Nơi các tín đồ tìm hiểu về tôn giáo', 'https://cdn.luatminhkhue.vn/lmk/articles/71/357104/dat-ton-giao-la-gi---khai-niem-ve-dat-ton-giao-357104.png', 'https://lsx.vn/wp-content/uploads/2022/08/Ton-giao-bi-cam-o-Viet-Nam-2.jpg');
INSERT INTO `category` VALUES (12, 'MỸ THUẬT', 'Nơi chia sẽ những quan điểm về mỹ thuật', 'https://swinburne-vn.edu.vn/wp-content/uploads/nganh-thiet-ke-my-thuat-so2.jpg', 'https://vietchinabusiness.vn/wp-content/uploads/2018/11/my-thuat-la-gi-tim-hieu-mot-so-loai-hinh-my-thuat-co-ban.jpg');
INSERT INTO `category` VALUES (14, 'Game', 'Nơi chia sẽ các hoạt động trò chơi', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1702386705/xfiopbrciwzqb4qbdx47.jpg', NULL);

-- ----------------------------
-- Table structure for chat
-- ----------------------------
DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `chat_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `chat_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `is_group` bit(1) NULL DEFAULT NULL,
  `created_by_user` bigint NULL DEFAULT NULL,
  `last_updated` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKujsbbvemkq1qxpkgfix2ejj`(`created_by_user` ASC) USING BTREE,
  CONSTRAINT `FKujsbbvemkq1qxpkgfix2ejj` FOREIGN KEY (`created_by_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of chat
-- ----------------------------
INSERT INTO `chat` VALUES (8, 'https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Cuối kì', b'1', 64, NULL);
INSERT INTO `chat` VALUES (9, 'https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Cuối kì', b'1', 58, NULL);
INSERT INTO `chat` VALUES (10, 'https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Cuối kì', b'1', 64, NULL);
INSERT INTO `chat` VALUES (11, NULL, NULL, b'0', 58, NULL);
INSERT INTO `chat` VALUES (12, 'https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Cuối kì', b'1', 64, NULL);
INSERT INTO `chat` VALUES (13, 'https://images.pexels.com/photos/1111369/pexels-photo-1111369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Cuối kì', b'1', 64, NULL);
INSERT INTO `chat` VALUES (14, NULL, NULL, b'0', 58, NULL);
INSERT INTO `chat` VALUES (15, NULL, NULL, b'0', 96, '2023-12-12 20:16:53.617000');
INSERT INTO `chat` VALUES (16, NULL, NULL, b'0', 96, '2023-12-12 20:22:19.339000');

-- ----------------------------
-- Table structure for chat_admins
-- ----------------------------
DROP TABLE IF EXISTS `chat_admins`;
CREATE TABLE `chat_admins`  (
  `chat_id` bigint NOT NULL,
  `admins_id` bigint NOT NULL,
  PRIMARY KEY (`chat_id`, `admins_id`) USING BTREE,
  INDEX `FK_new_constraint_name`(`admins_id` ASC) USING BTREE,
  CONSTRAINT `FK_new_constraint_name` FOREIGN KEY (`admins_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `FOREIGNKey` FOREIGN KEY (`chat_id`) REFERENCES `chat` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of chat_admins
-- ----------------------------
INSERT INTO `chat_admins` VALUES (9, 58);
INSERT INTO `chat_admins` VALUES (8, 64);
INSERT INTO `chat_admins` VALUES (10, 64);
INSERT INTO `chat_admins` VALUES (12, 64);
INSERT INTO `chat_admins` VALUES (13, 64);

-- ----------------------------
-- Table structure for chat_messages
-- ----------------------------
DROP TABLE IF EXISTS `chat_messages`;
CREATE TABLE `chat_messages`  (
  `chat_id` bigint NOT NULL,
  `messages_id` bigint NOT NULL,
  UNIQUE INDEX `UK_mrq0rmc439okhdws2rxsjjhdn`(`messages_id` ASC) USING BTREE,
  INDEX `FKb27mi3082eolv7k6tavhgq3wc`(`chat_id` ASC) USING BTREE,
  CONSTRAINT `FKb27mi3082eolv7k6tavhgq3wc` FOREIGN KEY (`chat_id`) REFERENCES `chat` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKjtlh6un2reea4nsgktq7qtao0` FOREIGN KEY (`messages_id`) REFERENCES `message` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chat_messages
-- ----------------------------

-- ----------------------------
-- Table structure for chat_users
-- ----------------------------
DROP TABLE IF EXISTS `chat_users`;
CREATE TABLE `chat_users`  (
  `chat_id` bigint NOT NULL,
  `users_id` bigint NOT NULL,
  PRIMARY KEY (`chat_id`, `users_id`) USING BTREE,
  INDEX `FKorvljukoxcj3j8l0vryq2sme`(`users_id` ASC) USING BTREE,
  CONSTRAINT `FKeydw0v7ghfwnmaecvlhx9rjs6` FOREIGN KEY (`chat_id`) REFERENCES `chat` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `FKglok2i2m8cbulbt5xxmfqixw3` FOREIGN KEY (`chat_id`) REFERENCES `chat` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT `FKorvljukoxcj3j8l0vryq2sme` FOREIGN KEY (`users_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of chat_users
-- ----------------------------
INSERT INTO `chat_users` VALUES (16, 28);
INSERT INTO `chat_users` VALUES (8, 55);
INSERT INTO `chat_users` VALUES (9, 55);
INSERT INTO `chat_users` VALUES (10, 55);
INSERT INTO `chat_users` VALUES (12, 55);
INSERT INTO `chat_users` VALUES (13, 55);
INSERT INTO `chat_users` VALUES (8, 56);
INSERT INTO `chat_users` VALUES (9, 56);
INSERT INTO `chat_users` VALUES (10, 56);
INSERT INTO `chat_users` VALUES (12, 56);
INSERT INTO `chat_users` VALUES (13, 56);
INSERT INTO `chat_users` VALUES (8, 57);
INSERT INTO `chat_users` VALUES (9, 57);
INSERT INTO `chat_users` VALUES (10, 57);
INSERT INTO `chat_users` VALUES (11, 57);
INSERT INTO `chat_users` VALUES (12, 57);
INSERT INTO `chat_users` VALUES (13, 57);
INSERT INTO `chat_users` VALUES (9, 58);
INSERT INTO `chat_users` VALUES (11, 58);
INSERT INTO `chat_users` VALUES (14, 58);
INSERT INTO `chat_users` VALUES (8, 64);
INSERT INTO `chat_users` VALUES (10, 64);
INSERT INTO `chat_users` VALUES (12, 64);
INSERT INTO `chat_users` VALUES (13, 64);
INSERT INTO `chat_users` VALUES (15, 65);
INSERT INTO `chat_users` VALUES (15, 96);
INSERT INTO `chat_users` VALUES (16, 96);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `parent_id` bigint NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKde3rfu96lep00br5ov0mdieyt`(`parent_id` ASC) USING BTREE,
  INDEX `FK8kcum44fvpupyw6f5baccx25c`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK8kcum44fvpupyw6f5baccx25c` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKde3rfu96lep00br5ov0mdieyt` FOREIGN KEY (`parent_id`) REFERENCES `comment` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 38 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (26, 'bài viết hay', NULL, 67, '2023-10-31 13:41:01');
INSERT INTO `comment` VALUES (27, 'tôi cũng thấy vậy\n', 26, 67, '2023-10-31 13:41:18');
INSERT INTO `comment` VALUES (28, 'Tôi tháy hay', NULL, 67, '2023-11-08 11:07:34');
INSERT INTO `comment` VALUES (29, 'Bài viết hay', NULL, 67, '2023-11-08 13:52:28');
INSERT INTO `comment` VALUES (30, 'Bài viết quá hay', NULL, 67, '2023-11-10 11:02:20');
INSERT INTO `comment` VALUES (35, 'Tôi thích bài viết này\n', NULL, 69, '2023-11-19 10:06:27');
INSERT INTO `comment` VALUES (36, 'Tôi thấy bài viết này hay', NULL, 69, '2023-11-22 21:37:07');
INSERT INTO `comment` VALUES (37, 'Bài viết này rất ổn', 36, 69, '2023-11-22 21:37:21');
INSERT INTO `comment` VALUES (38, 'Các bạn thấy bài viết này như thế nào', NULL, 96, '2023-12-12 13:47:32');
INSERT INTO `comment` VALUES (39, 'Tôi thấy cũng hay', 38, 65, '2023-12-12 13:48:12');
INSERT INTO `comment` VALUES (40, 'Bạn có thể chia sẽ rõ hơn được không', 39, 96, '2023-12-12 13:48:35');
INSERT INTO `comment` VALUES (41, 'Tôi nghĩ quan điểm sống tôi không muốn chia sẽ', 40, 65, '2023-12-12 13:49:07');
INSERT INTO `comment` VALUES (42, 'Được rồi tôi cảm ơn', 41, 96, '2023-12-12 13:49:29');
INSERT INTO `comment` VALUES (43, 'Tôi nghĩ tên bạn hay', 39, 96, '2023-12-12 13:49:46');

-- ----------------------------
-- Table structure for country
-- ----------------------------
DROP TABLE IF EXISTS `country`;
CREATE TABLE `country`  (
  `id` decimal(19, 2) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` decimal(19, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of country
-- ----------------------------

-- ----------------------------
-- Table structure for follow
-- ----------------------------
DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_is_following` bigint NULL DEFAULT NULL,
  `user_follow` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK992xdy1dmmqlhwayassqk5c8q`(`user_is_following` ASC) USING BTREE,
  INDEX `FKl4cyiwx3lv8jf0xt3sr537308`(`user_follow` ASC) USING BTREE,
  CONSTRAINT `FK992xdy1dmmqlhwayassqk5c8q` FOREIGN KEY (`user_is_following`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKl4cyiwx3lv8jf0xt3sr537308` FOREIGN KEY (`user_follow`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2515 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of follow
-- ----------------------------
INSERT INTO `follow` VALUES (1465, 81, 55);
INSERT INTO `follow` VALUES (1466, 29, 55);
INSERT INTO `follow` VALUES (1467, 56, 57);
INSERT INTO `follow` VALUES (1468, 91, 26);
INSERT INTO `follow` VALUES (1469, 96, 66);
INSERT INTO `follow` VALUES (1470, 45, 40);
INSERT INTO `follow` VALUES (1471, 40, 74);
INSERT INTO `follow` VALUES (1472, 74, 35);
INSERT INTO `follow` VALUES (1473, 66, 43);
INSERT INTO `follow` VALUES (1474, 64, 24);
INSERT INTO `follow` VALUES (1475, 65, 29);
INSERT INTO `follow` VALUES (1476, 34, 38);
INSERT INTO `follow` VALUES (1477, 77, 25);
INSERT INTO `follow` VALUES (1478, 32, 81);
INSERT INTO `follow` VALUES (1479, 27, 41);
INSERT INTO `follow` VALUES (1480, 34, 56);
INSERT INTO `follow` VALUES (1481, 29, 83);
INSERT INTO `follow` VALUES (1482, 33, 26);
INSERT INTO `follow` VALUES (1484, 66, 38);
INSERT INTO `follow` VALUES (1486, 45, 38);
INSERT INTO `follow` VALUES (1487, 77, 84);
INSERT INTO `follow` VALUES (1488, 57, 25);
INSERT INTO `follow` VALUES (1489, 52, 61);
INSERT INTO `follow` VALUES (1490, 57, 38);
INSERT INTO `follow` VALUES (1491, 80, 41);
INSERT INTO `follow` VALUES (1492, 39, 42);
INSERT INTO `follow` VALUES (1493, 96, 51);
INSERT INTO `follow` VALUES (1494, 52, 54);
INSERT INTO `follow` VALUES (1495, 35, 84);
INSERT INTO `follow` VALUES (1496, 67, 34);
INSERT INTO `follow` VALUES (1497, 41, 43);
INSERT INTO `follow` VALUES (1498, 26, 54);
INSERT INTO `follow` VALUES (1499, 69, 28);
INSERT INTO `follow` VALUES (1500, 96, 69);
INSERT INTO `follow` VALUES (1501, 37, 96);
INSERT INTO `follow` VALUES (1502, 54, 81);
INSERT INTO `follow` VALUES (1503, 26, 51);
INSERT INTO `follow` VALUES (1504, 32, 67);
INSERT INTO `follow` VALUES (1505, 80, 58);
INSERT INTO `follow` VALUES (1506, 77, 57);
INSERT INTO `follow` VALUES (1508, 81, 86);
INSERT INTO `follow` VALUES (1509, 76, 26);
INSERT INTO `follow` VALUES (1510, 56, 83);
INSERT INTO `follow` VALUES (1511, 43, 84);
INSERT INTO `follow` VALUES (1512, 26, 32);
INSERT INTO `follow` VALUES (1513, 41, 37);
INSERT INTO `follow` VALUES (1514, 37, 52);
INSERT INTO `follow` VALUES (1515, 58, 25);
INSERT INTO `follow` VALUES (1516, 40, 82);
INSERT INTO `follow` VALUES (1517, 45, 28);
INSERT INTO `follow` VALUES (1518, 55, 61);
INSERT INTO `follow` VALUES (1519, 69, 51);
INSERT INTO `follow` VALUES (1520, 40, 32);
INSERT INTO `follow` VALUES (1521, 81, 84);
INSERT INTO `follow` VALUES (1522, 54, 28);
INSERT INTO `follow` VALUES (1523, 28, 37);
INSERT INTO `follow` VALUES (1524, 32, 45);
INSERT INTO `follow` VALUES (1525, 52, 84);
INSERT INTO `follow` VALUES (1526, 56, 42);
INSERT INTO `follow` VALUES (1527, 83, 82);
INSERT INTO `follow` VALUES (1528, 67, 54);
INSERT INTO `follow` VALUES (1530, 41, 26);
INSERT INTO `follow` VALUES (1532, 39, 30);
INSERT INTO `follow` VALUES (1533, 84, 81);
INSERT INTO `follow` VALUES (1534, 57, 40);
INSERT INTO `follow` VALUES (1535, 29, 33);
INSERT INTO `follow` VALUES (1536, 57, 43);
INSERT INTO `follow` VALUES (1537, 61, 41);
INSERT INTO `follow` VALUES (1538, 45, 41);
INSERT INTO `follow` VALUES (1539, 83, 80);
INSERT INTO `follow` VALUES (1541, 34, 42);
INSERT INTO `follow` VALUES (1542, 61, 38);
INSERT INTO `follow` VALUES (1543, 54, 69);
INSERT INTO `follow` VALUES (1544, 41, 56);
INSERT INTO `follow` VALUES (1545, 33, 37);
INSERT INTO `follow` VALUES (1546, 81, 64);
INSERT INTO `follow` VALUES (1547, 32, 55);
INSERT INTO `follow` VALUES (1548, 37, 45);
INSERT INTO `follow` VALUES (1549, 56, 29);
INSERT INTO `follow` VALUES (1550, 58, 41);
INSERT INTO `follow` VALUES (1551, 86, 67);
INSERT INTO `follow` VALUES (1552, 25, 36);
INSERT INTO `follow` VALUES (1553, 40, 58);
INSERT INTO `follow` VALUES (1554, 29, 25);
INSERT INTO `follow` VALUES (1555, 43, 40);
INSERT INTO `follow` VALUES (1556, 57, 33);
INSERT INTO `follow` VALUES (1557, 51, 69);
INSERT INTO `follow` VALUES (1558, 29, 64);
INSERT INTO `follow` VALUES (1559, 81, 83);
INSERT INTO `follow` VALUES (1560, 56, 45);
INSERT INTO `follow` VALUES (1561, 42, 91);
INSERT INTO `follow` VALUES (1563, 40, 55);
INSERT INTO `follow` VALUES (1564, 64, 61);
INSERT INTO `follow` VALUES (1565, 28, 69);
INSERT INTO `follow` VALUES (1567, 41, 76);
INSERT INTO `follow` VALUES (1568, 56, 68);
INSERT INTO `follow` VALUES (1569, 86, 35);
INSERT INTO `follow` VALUES (1570, 36, 56);
INSERT INTO `follow` VALUES (1571, 84, 39);
INSERT INTO `follow` VALUES (1572, 39, 64);
INSERT INTO `follow` VALUES (1574, 38, 55);
INSERT INTO `follow` VALUES (1577, 41, 66);
INSERT INTO `follow` VALUES (1579, 40, 54);
INSERT INTO `follow` VALUES (1580, 27, 58);
INSERT INTO `follow` VALUES (1581, 84, 67);
INSERT INTO `follow` VALUES (1582, 55, 29);
INSERT INTO `follow` VALUES (1583, 96, 36);
INSERT INTO `follow` VALUES (1584, 25, 58);
INSERT INTO `follow` VALUES (1585, 65, 40);
INSERT INTO `follow` VALUES (1586, 39, 29);
INSERT INTO `follow` VALUES (1587, 80, 42);
INSERT INTO `follow` VALUES (1589, 66, 36);
INSERT INTO `follow` VALUES (1590, 36, 91);
INSERT INTO `follow` VALUES (1591, 38, 91);
INSERT INTO `follow` VALUES (1593, 80, 86);
INSERT INTO `follow` VALUES (1594, 34, 68);
INSERT INTO `follow` VALUES (1595, 37, 34);
INSERT INTO `follow` VALUES (1596, 56, 77);
INSERT INTO `follow` VALUES (1597, 51, 74);
INSERT INTO `follow` VALUES (1598, 51, 40);
INSERT INTO `follow` VALUES (1600, 27, 80);
INSERT INTO `follow` VALUES (1601, 81, 36);
INSERT INTO `follow` VALUES (1602, 61, 84);
INSERT INTO `follow` VALUES (1603, 33, 39);
INSERT INTO `follow` VALUES (1604, 27, 43);
INSERT INTO `follow` VALUES (1605, 68, 40);
INSERT INTO `follow` VALUES (1606, 26, 34);
INSERT INTO `follow` VALUES (1607, 69, 54);
INSERT INTO `follow` VALUES (1608, 45, 84);
INSERT INTO `follow` VALUES (1610, 35, 34);
INSERT INTO `follow` VALUES (1612, 38, 56);
INSERT INTO `follow` VALUES (1613, 96, 57);
INSERT INTO `follow` VALUES (1614, 91, 27);
INSERT INTO `follow` VALUES (1615, 39, 43);
INSERT INTO `follow` VALUES (1616, 58, 32);
INSERT INTO `follow` VALUES (1617, 84, 30);
INSERT INTO `follow` VALUES (1618, 25, 74);
INSERT INTO `follow` VALUES (1619, 26, 64);
INSERT INTO `follow` VALUES (1621, 74, 34);
INSERT INTO `follow` VALUES (1622, 80, 33);
INSERT INTO `follow` VALUES (1623, 41, 96);
INSERT INTO `follow` VALUES (1624, 30, 42);
INSERT INTO `follow` VALUES (1626, 26, 29);
INSERT INTO `follow` VALUES (1627, 29, 61);
INSERT INTO `follow` VALUES (1628, 41, 67);
INSERT INTO `follow` VALUES (1629, 36, 40);
INSERT INTO `follow` VALUES (1630, 33, 57);
INSERT INTO `follow` VALUES (1631, 27, 26);
INSERT INTO `follow` VALUES (1632, 68, 42);
INSERT INTO `follow` VALUES (1633, 38, 65);
INSERT INTO `follow` VALUES (1636, 24, 69);
INSERT INTO `follow` VALUES (1637, 80, 96);
INSERT INTO `follow` VALUES (1638, 30, 86);
INSERT INTO `follow` VALUES (1639, 61, 45);
INSERT INTO `follow` VALUES (1640, 67, 96);
INSERT INTO `follow` VALUES (1641, 68, 29);
INSERT INTO `follow` VALUES (1642, 56, 37);
INSERT INTO `follow` VALUES (1643, 74, 91);
INSERT INTO `follow` VALUES (1644, 38, 64);
INSERT INTO `follow` VALUES (1645, 30, 65);
INSERT INTO `follow` VALUES (1646, 56, 51);
INSERT INTO `follow` VALUES (1647, 29, 86);
INSERT INTO `follow` VALUES (1648, 58, 81);
INSERT INTO `follow` VALUES (1649, 61, 77);
INSERT INTO `follow` VALUES (1650, 35, 74);
INSERT INTO `follow` VALUES (1651, 36, 43);
INSERT INTO `follow` VALUES (1652, 34, 54);
INSERT INTO `follow` VALUES (1653, 51, 52);
INSERT INTO `follow` VALUES (1654, 34, 41);
INSERT INTO `follow` VALUES (1655, 91, 29);
INSERT INTO `follow` VALUES (1657, 26, 37);
INSERT INTO `follow` VALUES (1658, 57, 83);
INSERT INTO `follow` VALUES (1659, 34, 82);
INSERT INTO `follow` VALUES (1660, 80, 37);
INSERT INTO `follow` VALUES (1661, 36, 32);
INSERT INTO `follow` VALUES (1662, 64, 26);
INSERT INTO `follow` VALUES (1663, 37, 65);
INSERT INTO `follow` VALUES (1664, 27, 76);
INSERT INTO `follow` VALUES (1665, 32, 41);
INSERT INTO `follow` VALUES (1666, 33, 38);
INSERT INTO `follow` VALUES (1667, 29, 36);
INSERT INTO `follow` VALUES (1668, 83, 42);
INSERT INTO `follow` VALUES (1669, 74, 51);
INSERT INTO `follow` VALUES (1670, 25, 66);
INSERT INTO `follow` VALUES (1671, 58, 40);
INSERT INTO `follow` VALUES (1672, 57, 52);
INSERT INTO `follow` VALUES (1673, 45, 52);
INSERT INTO `follow` VALUES (1674, 61, 58);
INSERT INTO `follow` VALUES (1675, 96, 32);
INSERT INTO `follow` VALUES (1676, 64, 83);
INSERT INTO `follow` VALUES (1677, 82, 25);
INSERT INTO `follow` VALUES (1679, 81, 32);
INSERT INTO `follow` VALUES (1680, 29, 40);
INSERT INTO `follow` VALUES (1681, 80, 77);
INSERT INTO `follow` VALUES (1682, 80, 82);
INSERT INTO `follow` VALUES (1683, 82, 77);
INSERT INTO `follow` VALUES (1684, 69, 24);
INSERT INTO `follow` VALUES (1685, 43, 91);
INSERT INTO `follow` VALUES (1686, 36, 27);
INSERT INTO `follow` VALUES (1687, 65, 77);
INSERT INTO `follow` VALUES (1688, 37, 25);
INSERT INTO `follow` VALUES (1689, 24, 38);
INSERT INTO `follow` VALUES (1690, 28, 80);
INSERT INTO `follow` VALUES (1691, 65, 37);
INSERT INTO `follow` VALUES (1692, 45, 68);
INSERT INTO `follow` VALUES (1693, 43, 32);
INSERT INTO `follow` VALUES (1694, 45, 61);
INSERT INTO `follow` VALUES (1695, 67, 26);
INSERT INTO `follow` VALUES (1697, 27, 69);
INSERT INTO `follow` VALUES (1699, 43, 65);
INSERT INTO `follow` VALUES (1700, 69, 64);
INSERT INTO `follow` VALUES (1701, 56, 36);
INSERT INTO `follow` VALUES (1702, 45, 34);
INSERT INTO `follow` VALUES (1703, 26, 39);
INSERT INTO `follow` VALUES (1704, 57, 96);
INSERT INTO `follow` VALUES (1705, 55, 82);
INSERT INTO `follow` VALUES (1706, 25, 77);
INSERT INTO `follow` VALUES (1707, 35, 51);
INSERT INTO `follow` VALUES (1708, 66, 65);
INSERT INTO `follow` VALUES (1709, 24, 80);
INSERT INTO `follow` VALUES (1710, 28, 42);
INSERT INTO `follow` VALUES (1711, 34, 77);
INSERT INTO `follow` VALUES (1712, 41, 28);
INSERT INTO `follow` VALUES (1713, 77, 64);
INSERT INTO `follow` VALUES (1714, 35, 37);
INSERT INTO `follow` VALUES (1716, 32, 91);
INSERT INTO `follow` VALUES (1717, 68, 84);
INSERT INTO `follow` VALUES (1718, 32, 86);
INSERT INTO `follow` VALUES (1719, 76, 41);
INSERT INTO `follow` VALUES (1721, 67, 65);
INSERT INTO `follow` VALUES (1722, 40, 66);
INSERT INTO `follow` VALUES (1723, 82, 39);
INSERT INTO `follow` VALUES (1724, 56, 35);
INSERT INTO `follow` VALUES (1725, 91, 83);
INSERT INTO `follow` VALUES (1726, 29, 68);
INSERT INTO `follow` VALUES (1727, 76, 82);
INSERT INTO `follow` VALUES (1728, 42, 81);
INSERT INTO `follow` VALUES (1729, 45, 36);
INSERT INTO `follow` VALUES (1730, 41, 82);
INSERT INTO `follow` VALUES (1731, 35, 64);
INSERT INTO `follow` VALUES (1732, 57, 51);
INSERT INTO `follow` VALUES (1733, 40, 80);
INSERT INTO `follow` VALUES (1734, 28, 36);
INSERT INTO `follow` VALUES (1735, 83, 69);
INSERT INTO `follow` VALUES (1736, 67, 74);
INSERT INTO `follow` VALUES (1738, 28, 86);
INSERT INTO `follow` VALUES (1739, 56, 32);
INSERT INTO `follow` VALUES (1740, 32, 57);
INSERT INTO `follow` VALUES (1741, 28, 51);
INSERT INTO `follow` VALUES (1742, 76, 64);
INSERT INTO `follow` VALUES (1743, 34, 27);
INSERT INTO `follow` VALUES (1744, 83, 61);
INSERT INTO `follow` VALUES (1745, 42, 43);
INSERT INTO `follow` VALUES (1746, 33, 64);
INSERT INTO `follow` VALUES (1747, 61, 82);
INSERT INTO `follow` VALUES (1748, 69, 80);
INSERT INTO `follow` VALUES (1749, 30, 52);
INSERT INTO `follow` VALUES (1750, 35, 68);
INSERT INTO `follow` VALUES (1751, 28, 68);
INSERT INTO `follow` VALUES (1752, 37, 29);
INSERT INTO `follow` VALUES (1753, 24, 39);
INSERT INTO `follow` VALUES (1754, 74, 80);
INSERT INTO `follow` VALUES (1755, 86, 80);
INSERT INTO `follow` VALUES (1756, 65, 56);
INSERT INTO `follow` VALUES (1757, 43, 67);
INSERT INTO `follow` VALUES (1758, 77, 35);
INSERT INTO `follow` VALUES (1760, 83, 40);
INSERT INTO `follow` VALUES (1761, 83, 91);
INSERT INTO `follow` VALUES (1762, 74, 41);
INSERT INTO `follow` VALUES (1763, 25, 84);
INSERT INTO `follow` VALUES (1764, 76, 45);
INSERT INTO `follow` VALUES (1765, 66, 51);
INSERT INTO `follow` VALUES (1766, 83, 74);
INSERT INTO `follow` VALUES (1767, 86, 45);
INSERT INTO `follow` VALUES (1768, 58, 27);
INSERT INTO `follow` VALUES (1769, 77, 24);
INSERT INTO `follow` VALUES (1770, 28, 54);
INSERT INTO `follow` VALUES (1771, 33, 91);
INSERT INTO `follow` VALUES (1772, 81, 45);
INSERT INTO `follow` VALUES (1773, 84, 55);
INSERT INTO `follow` VALUES (1774, 41, 35);
INSERT INTO `follow` VALUES (1775, 30, 38);
INSERT INTO `follow` VALUES (1776, 67, 84);
INSERT INTO `follow` VALUES (1777, 65, 55);
INSERT INTO `follow` VALUES (1778, 32, 83);
INSERT INTO `follow` VALUES (1779, 51, 54);
INSERT INTO `follow` VALUES (1780, 69, 43);
INSERT INTO `follow` VALUES (1781, 96, 27);
INSERT INTO `follow` VALUES (1782, 35, 80);
INSERT INTO `follow` VALUES (1783, 28, 27);
INSERT INTO `follow` VALUES (1784, 42, 35);
INSERT INTO `follow` VALUES (1785, 65, 66);
INSERT INTO `follow` VALUES (1786, 39, 96);
INSERT INTO `follow` VALUES (1787, 86, 55);
INSERT INTO `follow` VALUES (1788, 52, 68);
INSERT INTO `follow` VALUES (1789, 26, 27);
INSERT INTO `follow` VALUES (1790, 68, 37);
INSERT INTO `follow` VALUES (1791, 26, 81);
INSERT INTO `follow` VALUES (1793, 57, 55);
INSERT INTO `follow` VALUES (1794, 35, 28);
INSERT INTO `follow` VALUES (1796, 68, 41);
INSERT INTO `follow` VALUES (1797, 82, 32);
INSERT INTO `follow` VALUES (1798, 61, 34);
INSERT INTO `follow` VALUES (1799, 61, 39);
INSERT INTO `follow` VALUES (1800, 67, 66);
INSERT INTO `follow` VALUES (1801, 96, 24);
INSERT INTO `follow` VALUES (1802, 24, 55);
INSERT INTO `follow` VALUES (1803, 67, 29);
INSERT INTO `follow` VALUES (1804, 34, 25);
INSERT INTO `follow` VALUES (1805, 69, 86);
INSERT INTO `follow` VALUES (1806, 57, 36);
INSERT INTO `follow` VALUES (1807, 45, 35);
INSERT INTO `follow` VALUES (1808, 64, 40);
INSERT INTO `follow` VALUES (1809, 33, 41);
INSERT INTO `follow` VALUES (1810, 41, 55);
INSERT INTO `follow` VALUES (1811, 24, 56);
INSERT INTO `follow` VALUES (1812, 43, 64);
INSERT INTO `follow` VALUES (1813, 58, 52);
INSERT INTO `follow` VALUES (1814, 83, 56);
INSERT INTO `follow` VALUES (1815, 37, 61);
INSERT INTO `follow` VALUES (1816, 56, 25);
INSERT INTO `follow` VALUES (1817, 80, 69);
INSERT INTO `follow` VALUES (1818, 52, 41);
INSERT INTO `follow` VALUES (1819, 51, 58);
INSERT INTO `follow` VALUES (1820, 55, 66);
INSERT INTO `follow` VALUES (1821, 45, 76);
INSERT INTO `follow` VALUES (1822, 40, 25);
INSERT INTO `follow` VALUES (1823, 52, 33);
INSERT INTO `follow` VALUES (1825, 34, 29);
INSERT INTO `follow` VALUES (1826, 42, 25);
INSERT INTO `follow` VALUES (1827, 28, 96);
INSERT INTO `follow` VALUES (1828, 39, 52);
INSERT INTO `follow` VALUES (1829, 30, 43);
INSERT INTO `follow` VALUES (1830, 65, 64);
INSERT INTO `follow` VALUES (1831, 82, 24);
INSERT INTO `follow` VALUES (1832, 57, 35);
INSERT INTO `follow` VALUES (1833, 74, 40);
INSERT INTO `follow` VALUES (1834, 51, 41);
INSERT INTO `follow` VALUES (1835, 36, 55);
INSERT INTO `follow` VALUES (1836, 81, 96);
INSERT INTO `follow` VALUES (1837, 68, 86);
INSERT INTO `follow` VALUES (1838, 35, 36);
INSERT INTO `follow` VALUES (1839, 55, 57);
INSERT INTO `follow` VALUES (1840, 30, 28);
INSERT INTO `follow` VALUES (1841, 32, 34);
INSERT INTO `follow` VALUES (1842, 33, 29);
INSERT INTO `follow` VALUES (1843, 34, 65);
INSERT INTO `follow` VALUES (1844, 67, 40);
INSERT INTO `follow` VALUES (1845, 24, 68);
INSERT INTO `follow` VALUES (1846, 91, 38);
INSERT INTO `follow` VALUES (1847, 82, 81);
INSERT INTO `follow` VALUES (1848, 36, 86);
INSERT INTO `follow` VALUES (1849, 54, 66);
INSERT INTO `follow` VALUES (1850, 66, 84);
INSERT INTO `follow` VALUES (1851, 33, 61);
INSERT INTO `follow` VALUES (1852, 55, 28);
INSERT INTO `follow` VALUES (1853, 76, 86);
INSERT INTO `follow` VALUES (1854, 58, 39);
INSERT INTO `follow` VALUES (1855, 91, 25);
INSERT INTO `follow` VALUES (1856, 76, 36);
INSERT INTO `follow` VALUES (1857, 91, 43);
INSERT INTO `follow` VALUES (1859, 61, 66);
INSERT INTO `follow` VALUES (1860, 28, 65);
INSERT INTO `follow` VALUES (1862, 96, 86);
INSERT INTO `follow` VALUES (1863, 83, 38);
INSERT INTO `follow` VALUES (1864, 91, 33);
INSERT INTO `follow` VALUES (1865, 29, 58);
INSERT INTO `follow` VALUES (1866, 80, 52);
INSERT INTO `follow` VALUES (1867, 38, 74);
INSERT INTO `follow` VALUES (1868, 84, 51);
INSERT INTO `follow` VALUES (1869, 35, 65);
INSERT INTO `follow` VALUES (1870, 25, 56);
INSERT INTO `follow` VALUES (1872, 77, 76);
INSERT INTO `follow` VALUES (1873, 43, 96);
INSERT INTO `follow` VALUES (1874, 41, 34);
INSERT INTO `follow` VALUES (1875, 27, 32);
INSERT INTO `follow` VALUES (1876, 81, 74);
INSERT INTO `follow` VALUES (1877, 28, 81);
INSERT INTO `follow` VALUES (1878, 32, 61);
INSERT INTO `follow` VALUES (1880, 84, 32);
INSERT INTO `follow` VALUES (1881, 42, 55);
INSERT INTO `follow` VALUES (1882, 54, 56);
INSERT INTO `follow` VALUES (1883, 82, 66);
INSERT INTO `follow` VALUES (1884, 27, 24);
INSERT INTO `follow` VALUES (1885, 55, 83);
INSERT INTO `follow` VALUES (1886, 25, 37);
INSERT INTO `follow` VALUES (1887, 74, 66);
INSERT INTO `follow` VALUES (1888, 24, 91);
INSERT INTO `follow` VALUES (1889, 39, 61);
INSERT INTO `follow` VALUES (1890, 33, 67);
INSERT INTO `follow` VALUES (1892, 43, 24);
INSERT INTO `follow` VALUES (1893, 36, 35);
INSERT INTO `follow` VALUES (1894, 84, 40);
INSERT INTO `follow` VALUES (1895, 34, 69);
INSERT INTO `follow` VALUES (1896, 80, 35);
INSERT INTO `follow` VALUES (1898, 43, 77);
INSERT INTO `follow` VALUES (1899, 33, 68);
INSERT INTO `follow` VALUES (1900, 83, 45);
INSERT INTO `follow` VALUES (1901, 25, 42);
INSERT INTO `follow` VALUES (1902, 56, 82);
INSERT INTO `follow` VALUES (1903, 38, 68);
INSERT INTO `follow` VALUES (1904, 35, 82);
INSERT INTO `follow` VALUES (1905, 69, 58);
INSERT INTO `follow` VALUES (1906, 29, 27);
INSERT INTO `follow` VALUES (1907, 43, 27);
INSERT INTO `follow` VALUES (1908, 40, 51);
INSERT INTO `follow` VALUES (1909, 58, 42);
INSERT INTO `follow` VALUES (1910, 69, 57);
INSERT INTO `follow` VALUES (1911, 65, 91);
INSERT INTO `follow` VALUES (1912, 30, 83);
INSERT INTO `follow` VALUES (1913, 51, 96);
INSERT INTO `follow` VALUES (1914, 45, 81);
INSERT INTO `follow` VALUES (1916, 77, 38);
INSERT INTO `follow` VALUES (1917, 30, 77);
INSERT INTO `follow` VALUES (1918, 25, 55);
INSERT INTO `follow` VALUES (1919, 32, 30);
INSERT INTO `follow` VALUES (1921, 24, 35);
INSERT INTO `follow` VALUES (1922, 84, 91);
INSERT INTO `follow` VALUES (1923, 76, 58);
INSERT INTO `follow` VALUES (1924, 58, 36);
INSERT INTO `follow` VALUES (1925, 67, 86);
INSERT INTO `follow` VALUES (1926, 42, 68);
INSERT INTO `follow` VALUES (1927, 37, 91);
INSERT INTO `follow` VALUES (1928, 58, 34);
INSERT INTO `follow` VALUES (1929, 77, 30);
INSERT INTO `follow` VALUES (1930, 64, 77);
INSERT INTO `follow` VALUES (1931, 25, 61);
INSERT INTO `follow` VALUES (1933, 61, 24);
INSERT INTO `follow` VALUES (1934, 39, 68);
INSERT INTO `follow` VALUES (1935, 41, 25);
INSERT INTO `follow` VALUES (1936, 27, 66);
INSERT INTO `follow` VALUES (1937, 96, 54);
INSERT INTO `follow` VALUES (1938, 30, 51);
INSERT INTO `follow` VALUES (1939, 57, 77);
INSERT INTO `follow` VALUES (1940, 42, 41);
INSERT INTO `follow` VALUES (1941, 83, 25);
INSERT INTO `follow` VALUES (1945, 81, 91);
INSERT INTO `follow` VALUES (1946, 26, 56);
INSERT INTO `follow` VALUES (1947, 55, 91);
INSERT INTO `follow` VALUES (1948, 67, 76);
INSERT INTO `follow` VALUES (1949, 39, 58);
INSERT INTO `follow` VALUES (1950, 35, 83);
INSERT INTO `follow` VALUES (1951, 40, 64);
INSERT INTO `follow` VALUES (1952, 26, 91);
INSERT INTO `follow` VALUES (1953, 81, 33);
INSERT INTO `follow` VALUES (1954, 69, 35);
INSERT INTO `follow` VALUES (1955, 82, 65);
INSERT INTO `follow` VALUES (1956, 80, 39);
INSERT INTO `follow` VALUES (1957, 32, 65);
INSERT INTO `follow` VALUES (1958, 74, 24);
INSERT INTO `follow` VALUES (1959, 42, 61);
INSERT INTO `follow` VALUES (1960, 37, 82);
INSERT INTO `follow` VALUES (1961, 96, 67);
INSERT INTO `follow` VALUES (1962, 64, 51);
INSERT INTO `follow` VALUES (1963, 28, 33);
INSERT INTO `follow` VALUES (1964, 40, 35);
INSERT INTO `follow` VALUES (1965, 69, 68);
INSERT INTO `follow` VALUES (1966, 91, 67);
INSERT INTO `follow` VALUES (1967, 83, 34);
INSERT INTO `follow` VALUES (1968, 69, 84);
INSERT INTO `follow` VALUES (1969, 34, 35);
INSERT INTO `follow` VALUES (1970, 66, 68);
INSERT INTO `follow` VALUES (1971, 39, 27);
INSERT INTO `follow` VALUES (1972, 80, 76);
INSERT INTO `follow` VALUES (1973, 43, 82);
INSERT INTO `follow` VALUES (1976, 67, 36);
INSERT INTO `follow` VALUES (1977, 42, 82);
INSERT INTO `follow` VALUES (1978, 29, 26);
INSERT INTO `follow` VALUES (1980, 77, 43);
INSERT INTO `follow` VALUES (1981, 39, 38);
INSERT INTO `follow` VALUES (1982, 38, 25);
INSERT INTO `follow` VALUES (1983, 52, 45);
INSERT INTO `follow` VALUES (1984, 77, 39);
INSERT INTO `follow` VALUES (1985, 68, 67);
INSERT INTO `follow` VALUES (1986, 54, 41);
INSERT INTO `follow` VALUES (1987, 86, 74);
INSERT INTO `follow` VALUES (1989, 69, 74);
INSERT INTO `follow` VALUES (1990, 66, 28);
INSERT INTO `follow` VALUES (1991, 64, 81);
INSERT INTO `follow` VALUES (1992, 64, 33);
INSERT INTO `follow` VALUES (1993, 80, 54);
INSERT INTO `follow` VALUES (1995, 35, 58);
INSERT INTO `follow` VALUES (1996, 38, 84);
INSERT INTO `follow` VALUES (1997, 67, 32);
INSERT INTO `follow` VALUES (1999, 25, 39);
INSERT INTO `follow` VALUES (2000, 28, 61);
INSERT INTO `follow` VALUES (2001, 35, 29);
INSERT INTO `follow` VALUES (2002, 81, 80);
INSERT INTO `follow` VALUES (2003, 54, 58);
INSERT INTO `follow` VALUES (2004, 27, 55);
INSERT INTO `follow` VALUES (2005, 76, 61);
INSERT INTO `follow` VALUES (2006, 86, 34);
INSERT INTO `follow` VALUES (2008, 58, 35);
INSERT INTO `follow` VALUES (2009, 61, 25);
INSERT INTO `follow` VALUES (2010, 86, 66);
INSERT INTO `follow` VALUES (2011, 43, 58);
INSERT INTO `follow` VALUES (2012, 24, 26);
INSERT INTO `follow` VALUES (2013, 86, 64);
INSERT INTO `follow` VALUES (2014, 67, 30);
INSERT INTO `follow` VALUES (2015, 40, 36);
INSERT INTO `follow` VALUES (2016, 65, 96);
INSERT INTO `follow` VALUES (2018, 26, 57);
INSERT INTO `follow` VALUES (2019, 66, 82);
INSERT INTO `follow` VALUES (2020, 80, 36);
INSERT INTO `follow` VALUES (2021, 26, 65);
INSERT INTO `follow` VALUES (2022, 25, 51);
INSERT INTO `follow` VALUES (2023, 84, 27);
INSERT INTO `follow` VALUES (2026, 83, 26);
INSERT INTO `follow` VALUES (2027, 29, 74);
INSERT INTO `follow` VALUES (2028, 74, 68);
INSERT INTO `follow` VALUES (2029, 91, 28);
INSERT INTO `follow` VALUES (2030, 28, 26);
INSERT INTO `follow` VALUES (2031, 55, 51);
INSERT INTO `follow` VALUES (2032, 27, 54);
INSERT INTO `follow` VALUES (2033, 56, 52);
INSERT INTO `follow` VALUES (2034, 65, 27);
INSERT INTO `follow` VALUES (2035, 81, 39);
INSERT INTO `follow` VALUES (2036, 42, 67);
INSERT INTO `follow` VALUES (2037, 74, 56);
INSERT INTO `follow` VALUES (2038, 84, 41);
INSERT INTO `follow` VALUES (2039, 64, 42);
INSERT INTO `follow` VALUES (2040, 74, 37);
INSERT INTO `follow` VALUES (2041, 35, 52);
INSERT INTO `follow` VALUES (2042, 91, 86);
INSERT INTO `follow` VALUES (2043, 29, 67);
INSERT INTO `follow` VALUES (2044, 25, 26);
INSERT INTO `follow` VALUES (2045, 37, 30);
INSERT INTO `follow` VALUES (2046, 68, 91);
INSERT INTO `follow` VALUES (2047, 27, 33);
INSERT INTO `follow` VALUES (2048, 37, 67);
INSERT INTO `follow` VALUES (2049, 39, 26);
INSERT INTO `follow` VALUES (2050, 69, 67);
INSERT INTO `follow` VALUES (2051, 76, 42);
INSERT INTO `follow` VALUES (2052, 86, 30);
INSERT INTO `follow` VALUES (2053, 34, 55);
INSERT INTO `follow` VALUES (2055, 68, 32);
INSERT INTO `follow` VALUES (2056, 45, 96);
INSERT INTO `follow` VALUES (2057, 83, 24);
INSERT INTO `follow` VALUES (2058, 83, 76);
INSERT INTO `follow` VALUES (2059, 28, 34);
INSERT INTO `follow` VALUES (2060, 56, 67);
INSERT INTO `follow` VALUES (2061, 65, 80);
INSERT INTO `follow` VALUES (2062, 68, 58);
INSERT INTO `follow` VALUES (2063, 33, 36);
INSERT INTO `follow` VALUES (2064, 54, 27);
INSERT INTO `follow` VALUES (2065, 74, 45);
INSERT INTO `follow` VALUES (2066, 96, 52);
INSERT INTO `follow` VALUES (2067, 84, 26);
INSERT INTO `follow` VALUES (2069, 51, 57);
INSERT INTO `follow` VALUES (2070, 39, 25);
INSERT INTO `follow` VALUES (2072, 33, 81);
INSERT INTO `follow` VALUES (2073, 83, 33);
INSERT INTO `follow` VALUES (2074, 82, 29);
INSERT INTO `follow` VALUES (2075, 68, 30);
INSERT INTO `follow` VALUES (2076, 64, 54);
INSERT INTO `follow` VALUES (2077, 25, 67);
INSERT INTO `follow` VALUES (2078, 68, 34);
INSERT INTO `follow` VALUES (2079, 61, 57);
INSERT INTO `follow` VALUES (2080, 81, 56);
INSERT INTO `follow` VALUES (2081, 57, 58);
INSERT INTO `follow` VALUES (2082, 86, 33);
INSERT INTO `follow` VALUES (2083, 36, 42);
INSERT INTO `follow` VALUES (2084, 83, 77);
INSERT INTO `follow` VALUES (2085, 68, 36);
INSERT INTO `follow` VALUES (2086, 67, 83);
INSERT INTO `follow` VALUES (2087, 35, 41);
INSERT INTO `follow` VALUES (2088, 74, 52);
INSERT INTO `follow` VALUES (2089, 81, 29);
INSERT INTO `follow` VALUES (2090, 26, 69);
INSERT INTO `follow` VALUES (2091, 45, 37);
INSERT INTO `follow` VALUES (2092, 30, 81);
INSERT INTO `follow` VALUES (2093, 51, 65);
INSERT INTO `follow` VALUES (2095, 96, 91);
INSERT INTO `follow` VALUES (2096, 86, 91);
INSERT INTO `follow` VALUES (2097, 32, 28);
INSERT INTO `follow` VALUES (2098, 61, 68);
INSERT INTO `follow` VALUES (2099, 32, 58);
INSERT INTO `follow` VALUES (2100, 36, 64);
INSERT INTO `follow` VALUES (2102, 24, 67);
INSERT INTO `follow` VALUES (2103, 81, 28);
INSERT INTO `follow` VALUES (2104, 68, 57);
INSERT INTO `follow` VALUES (2105, 28, 39);
INSERT INTO `follow` VALUES (2106, 82, 52);
INSERT INTO `follow` VALUES (2107, 91, 64);
INSERT INTO `follow` VALUES (2108, 64, 37);
INSERT INTO `follow` VALUES (2109, 34, 83);
INSERT INTO `follow` VALUES (2110, 39, 91);
INSERT INTO `follow` VALUES (2111, 25, 81);
INSERT INTO `follow` VALUES (2112, 34, 30);
INSERT INTO `follow` VALUES (2113, 38, 80);
INSERT INTO `follow` VALUES (2114, 84, 74);
INSERT INTO `follow` VALUES (2115, 36, 28);
INSERT INTO `follow` VALUES (2116, 76, 57);
INSERT INTO `follow` VALUES (2117, 86, 56);
INSERT INTO `follow` VALUES (2118, 83, 41);
INSERT INTO `follow` VALUES (2119, 26, 83);
INSERT INTO `follow` VALUES (2120, 80, 68);
INSERT INTO `follow` VALUES (2121, 76, 43);
INSERT INTO `follow` VALUES (2122, 39, 55);
INSERT INTO `follow` VALUES (2123, 40, 96);
INSERT INTO `follow` VALUES (2124, 68, 76);
INSERT INTO `follow` VALUES (2125, 38, 26);
INSERT INTO `follow` VALUES (2126, 74, 65);
INSERT INTO `follow` VALUES (2127, 52, 35);
INSERT INTO `follow` VALUES (2128, 84, 66);
INSERT INTO `follow` VALUES (2129, 77, 52);
INSERT INTO `follow` VALUES (2130, 39, 80);
INSERT INTO `follow` VALUES (2131, 66, 56);
INSERT INTO `follow` VALUES (2132, 40, 37);
INSERT INTO `follow` VALUES (2134, 28, 41);
INSERT INTO `follow` VALUES (2135, 91, 40);
INSERT INTO `follow` VALUES (2136, 91, 35);
INSERT INTO `follow` VALUES (2137, 34, 66);
INSERT INTO `follow` VALUES (2139, 42, 54);
INSERT INTO `follow` VALUES (2140, 84, 80);
INSERT INTO `follow` VALUES (2141, 30, 36);
INSERT INTO `follow` VALUES (2142, 68, 80);
INSERT INTO `follow` VALUES (2143, 80, 55);
INSERT INTO `follow` VALUES (2145, 61, 29);
INSERT INTO `follow` VALUES (2146, 39, 56);
INSERT INTO `follow` VALUES (2148, 67, 41);
INSERT INTO `follow` VALUES (2149, 86, 36);
INSERT INTO `follow` VALUES (2150, 32, 43);
INSERT INTO `follow` VALUES (2151, 86, 81);
INSERT INTO `follow` VALUES (2152, 74, 76);
INSERT INTO `follow` VALUES (2153, 29, 56);
INSERT INTO `follow` VALUES (2154, 27, 57);
INSERT INTO `follow` VALUES (2155, 40, 33);
INSERT INTO `follow` VALUES (2156, 32, 82);
INSERT INTO `follow` VALUES (2157, 76, 66);
INSERT INTO `follow` VALUES (2158, 91, 51);
INSERT INTO `follow` VALUES (2159, 25, 33);
INSERT INTO `follow` VALUES (2160, 38, 52);
INSERT INTO `follow` VALUES (2161, 91, 65);
INSERT INTO `follow` VALUES (2163, 82, 69);
INSERT INTO `follow` VALUES (2164, 68, 83);
INSERT INTO `follow` VALUES (2166, 54, 38);
INSERT INTO `follow` VALUES (2168, 54, 61);
INSERT INTO `follow` VALUES (2169, 36, 66);
INSERT INTO `follow` VALUES (2170, 84, 33);
INSERT INTO `follow` VALUES (2171, 29, 66);
INSERT INTO `follow` VALUES (2172, 33, 84);
INSERT INTO `follow` VALUES (2174, 51, 81);
INSERT INTO `follow` VALUES (2175, 68, 69);
INSERT INTO `follow` VALUES (2176, 66, 83);
INSERT INTO `follow` VALUES (2177, 37, 84);
INSERT INTO `follow` VALUES (2178, 82, 56);
INSERT INTO `follow` VALUES (2179, 74, 67);
INSERT INTO `follow` VALUES (2180, 38, 61);
INSERT INTO `follow` VALUES (2181, 76, 65);
INSERT INTO `follow` VALUES (2182, 86, 61);
INSERT INTO `follow` VALUES (2183, 33, 86);
INSERT INTO `follow` VALUES (2184, 35, 77);
INSERT INTO `follow` VALUES (2185, 37, 27);
INSERT INTO `follow` VALUES (2186, 27, 84);
INSERT INTO `follow` VALUES (2187, 54, 55);
INSERT INTO `follow` VALUES (2188, 77, 68);
INSERT INTO `follow` VALUES (2189, 86, 68);
INSERT INTO `follow` VALUES (2190, 34, 64);
INSERT INTO `follow` VALUES (2191, 37, 57);
INSERT INTO `follow` VALUES (2192, 51, 36);
INSERT INTO `follow` VALUES (2193, 34, 33);
INSERT INTO `follow` VALUES (2194, 55, 76);
INSERT INTO `follow` VALUES (2195, 54, 35);
INSERT INTO `follow` VALUES (2196, 39, 82);
INSERT INTO `follow` VALUES (2197, 38, 41);
INSERT INTO `follow` VALUES (2198, 39, 36);
INSERT INTO `follow` VALUES (2200, 54, 39);
INSERT INTO `follow` VALUES (2201, 42, 29);
INSERT INTO `follow` VALUES (2202, 51, 37);
INSERT INTO `follow` VALUES (2204, 32, 38);
INSERT INTO `follow` VALUES (2205, 55, 65);
INSERT INTO `follow` VALUES (2206, 57, 74);
INSERT INTO `follow` VALUES (2207, 38, 30);
INSERT INTO `follow` VALUES (2208, 54, 57);
INSERT INTO `follow` VALUES (2209, 74, 69);
INSERT INTO `follow` VALUES (2210, 38, 32);
INSERT INTO `follow` VALUES (2211, 36, 67);
INSERT INTO `follow` VALUES (2212, 51, 26);
INSERT INTO `follow` VALUES (2213, 57, 61);
INSERT INTO `follow` VALUES (2214, 43, 56);
INSERT INTO `follow` VALUES (2215, 64, 30);
INSERT INTO `follow` VALUES (2217, 68, 56);
INSERT INTO `follow` VALUES (2218, 40, 67);
INSERT INTO `follow` VALUES (2219, 86, 25);
INSERT INTO `follow` VALUES (2220, 67, 81);
INSERT INTO `follow` VALUES (2222, 25, 52);
INSERT INTO `follow` VALUES (2223, 43, 42);
INSERT INTO `follow` VALUES (2224, 24, 30);
INSERT INTO `follow` VALUES (2225, 38, 82);
INSERT INTO `follow` VALUES (2226, 30, 33);
INSERT INTO `follow` VALUES (2227, 35, 24);
INSERT INTO `follow` VALUES (2228, 52, 74);
INSERT INTO `follow` VALUES (2229, 74, 57);
INSERT INTO `follow` VALUES (2230, 51, 76);
INSERT INTO `follow` VALUES (2231, 76, 39);
INSERT INTO `follow` VALUES (2232, 84, 82);
INSERT INTO `follow` VALUES (2233, 28, 52);
INSERT INTO `follow` VALUES (2234, 65, 68);
INSERT INTO `follow` VALUES (2236, 27, 28);
INSERT INTO `follow` VALUES (2237, 55, 69);
INSERT INTO `follow` VALUES (2238, 25, 40);
INSERT INTO `follow` VALUES (2239, 74, 55);
INSERT INTO `follow` VALUES (2240, 74, 58);
INSERT INTO `follow` VALUES (2241, 40, 81);
INSERT INTO `follow` VALUES (2242, 38, 24);
INSERT INTO `follow` VALUES (2243, 33, 43);
INSERT INTO `follow` VALUES (2244, 61, 51);
INSERT INTO `follow` VALUES (2245, 82, 96);
INSERT INTO `follow` VALUES (2246, 28, 58);
INSERT INTO `follow` VALUES (2247, 82, 64);
INSERT INTO `follow` VALUES (2248, 54, 32);
INSERT INTO `follow` VALUES (2249, 76, 51);
INSERT INTO `follow` VALUES (2250, 37, 56);
INSERT INTO `follow` VALUES (2251, 36, 76);
INSERT INTO `follow` VALUES (2252, 76, 74);
INSERT INTO `follow` VALUES (2253, 42, 56);
INSERT INTO `follow` VALUES (2254, 61, 35);
INSERT INTO `follow` VALUES (2255, 30, 57);
INSERT INTO `follow` VALUES (2256, 45, 64);
INSERT INTO `follow` VALUES (2257, 52, 96);
INSERT INTO `follow` VALUES (2258, 76, 30);
INSERT INTO `follow` VALUES (2259, 58, 38);
INSERT INTO `follow` VALUES (2260, 83, 29);
INSERT INTO `follow` VALUES (2261, 29, 41);
INSERT INTO `follow` VALUES (2262, 41, 51);
INSERT INTO `follow` VALUES (2263, 43, 33);
INSERT INTO `follow` VALUES (2264, 66, 74);
INSERT INTO `follow` VALUES (2266, 64, 27);
INSERT INTO `follow` VALUES (2267, 36, 41);
INSERT INTO `follow` VALUES (2269, 66, 64);
INSERT INTO `follow` VALUES (2270, 66, 33);
INSERT INTO `follow` VALUES (2271, 69, 56);
INSERT INTO `follow` VALUES (2272, 54, 91);
INSERT INTO `follow` VALUES (2273, 27, 56);
INSERT INTO `follow` VALUES (2274, 64, 34);
INSERT INTO `follow` VALUES (2275, 81, 37);
INSERT INTO `follow` VALUES (2276, 29, 69);
INSERT INTO `follow` VALUES (2277, 84, 24);
INSERT INTO `follow` VALUES (2278, 42, 74);
INSERT INTO `follow` VALUES (2279, 80, 26);
INSERT INTO `follow` VALUES (2280, 36, 52);
INSERT INTO `follow` VALUES (2281, 51, 25);
INSERT INTO `follow` VALUES (2282, 69, 33);
INSERT INTO `follow` VALUES (2283, 24, 32);
INSERT INTO `follow` VALUES (2284, 26, 74);
INSERT INTO `follow` VALUES (2285, 39, 65);
INSERT INTO `follow` VALUES (2286, 66, 26);
INSERT INTO `follow` VALUES (2287, 86, 54);
INSERT INTO `follow` VALUES (2288, 77, 40);
INSERT INTO `follow` VALUES (2289, 35, 32);
INSERT INTO `follow` VALUES (2290, 43, 34);
INSERT INTO `follow` VALUES (2291, 30, 26);
INSERT INTO `follow` VALUES (2292, 61, 96);
INSERT INTO `follow` VALUES (2293, 61, 64);
INSERT INTO `follow` VALUES (2294, 40, 68);
INSERT INTO `follow` VALUES (2295, 39, 34);
INSERT INTO `follow` VALUES (2296, 51, 42);
INSERT INTO `follow` VALUES (2297, 34, 91);
INSERT INTO `follow` VALUES (2298, 84, 29);
INSERT INTO `follow` VALUES (2300, 66, 81);
INSERT INTO `follow` VALUES (2302, 40, 52);
INSERT INTO `follow` VALUES (2303, 74, 29);
INSERT INTO `follow` VALUES (2304, 77, 80);
INSERT INTO `follow` VALUES (2305, 61, 67);
INSERT INTO `follow` VALUES (2306, 55, 24);
INSERT INTO `follow` VALUES (2307, 77, 36);
INSERT INTO `follow` VALUES (2308, 32, 68);
INSERT INTO `follow` VALUES (2309, 76, 83);
INSERT INTO `follow` VALUES (2310, 28, 35);
INSERT INTO `follow` VALUES (2311, 86, 37);
INSERT INTO `follow` VALUES (2312, 54, 67);
INSERT INTO `follow` VALUES (2313, 96, 68);
INSERT INTO `follow` VALUES (2315, 69, 40);
INSERT INTO `follow` VALUES (2316, 25, 57);
INSERT INTO `follow` VALUES (2317, 28, 76);
INSERT INTO `follow` VALUES (2318, 68, 81);
INSERT INTO `follow` VALUES (2319, 69, 27);
INSERT INTO `follow` VALUES (2320, 83, 66);
INSERT INTO `follow` VALUES (2321, 27, 67);
INSERT INTO `follow` VALUES (2322, 55, 40);
INSERT INTO `follow` VALUES (2323, 24, 74);
INSERT INTO `follow` VALUES (2324, 84, 37);
INSERT INTO `follow` VALUES (2325, 86, 77);
INSERT INTO `follow` VALUES (2326, 69, 82);
INSERT INTO `follow` VALUES (2327, 80, 57);
INSERT INTO `follow` VALUES (2328, 91, 84);
INSERT INTO `follow` VALUES (2329, 69, 45);
INSERT INTO `follow` VALUES (2330, 69, 25);
INSERT INTO `follow` VALUES (2331, 25, 24);
INSERT INTO `follow` VALUES (2332, 65, 54);
INSERT INTO `follow` VALUES (2333, 56, 54);
INSERT INTO `follow` VALUES (2334, 43, 39);
INSERT INTO `follow` VALUES (2335, 30, 35);
INSERT INTO `follow` VALUES (2336, 81, 43);
INSERT INTO `follow` VALUES (2337, 82, 26);
INSERT INTO `follow` VALUES (2338, 54, 96);
INSERT INTO `follow` VALUES (2339, 39, 69);
INSERT INTO `follow` VALUES (2340, 66, 32);
INSERT INTO `follow` VALUES (2341, 64, 25);
INSERT INTO `follow` VALUES (2342, 65, 67);
INSERT INTO `follow` VALUES (2343, 80, 84);
INSERT INTO `follow` VALUES (2344, 61, 43);
INSERT INTO `follow` VALUES (2345, 43, 68);
INSERT INTO `follow` VALUES (2347, 61, 42);
INSERT INTO `follow` VALUES (2348, 82, 38);
INSERT INTO `follow` VALUES (2349, 28, 66);
INSERT INTO `follow` VALUES (2350, 45, 54);
INSERT INTO `follow` VALUES (2351, 81, 82);
INSERT INTO `follow` VALUES (2352, 96, 43);
INSERT INTO `follow` VALUES (2353, 80, 24);
INSERT INTO `follow` VALUES (2354, 32, 29);
INSERT INTO `follow` VALUES (2355, 35, 40);
INSERT INTO `follow` VALUES (2356, 76, 77);
INSERT INTO `follow` VALUES (2357, 55, 80);
INSERT INTO `follow` VALUES (2358, 64, 41);
INSERT INTO `follow` VALUES (2359, 76, 91);
INSERT INTO `follow` VALUES (2360, 35, 86);
INSERT INTO `follow` VALUES (2361, 82, 80);
INSERT INTO `follow` VALUES (2363, 56, 74);
INSERT INTO `follow` VALUES (2364, 86, 42);
INSERT INTO `follow` VALUES (2365, 55, 36);
INSERT INTO `follow` VALUES (2366, 64, 29);
INSERT INTO `follow` VALUES (2367, 61, 83);
INSERT INTO `follow` VALUES (2368, 55, 38);
INSERT INTO `follow` VALUES (2369, 27, 25);
INSERT INTO `follow` VALUES (2370, 76, 38);
INSERT INTO `follow` VALUES (2371, 26, 86);
INSERT INTO `follow` VALUES (2372, 65, 25);
INSERT INTO `follow` VALUES (2373, 24, 82);
INSERT INTO `follow` VALUES (2374, 38, 36);
INSERT INTO `follow` VALUES (2375, 86, 39);
INSERT INTO `follow` VALUES (2376, 24, 57);
INSERT INTO `follow` VALUES (2377, 54, 42);
INSERT INTO `follow` VALUES (2378, 29, 43);
INSERT INTO `follow` VALUES (2379, 35, 91);
INSERT INTO `follow` VALUES (2380, 30, 91);
INSERT INTO `follow` VALUES (2381, 41, 58);
INSERT INTO `follow` VALUES (2382, 55, 74);
INSERT INTO `follow` VALUES (2383, 58, 43);
INSERT INTO `follow` VALUES (2384, 54, 34);
INSERT INTO `follow` VALUES (2386, 67, 58);
INSERT INTO `follow` VALUES (2387, 36, 54);
INSERT INTO `follow` VALUES (2388, 96, 64);
INSERT INTO `follow` VALUES (2389, 66, 86);
INSERT INTO `follow` VALUES (2391, 34, 76);
INSERT INTO `follow` VALUES (2392, 45, 29);
INSERT INTO `follow` VALUES (2393, 76, 24);
INSERT INTO `follow` VALUES (2394, 28, 38);
INSERT INTO `follow` VALUES (2395, 80, 66);
INSERT INTO `follow` VALUES (2396, 96, 55);
INSERT INTO `follow` VALUES (2397, 52, 29);
INSERT INTO `follow` VALUES (2398, 68, 64);
INSERT INTO `follow` VALUES (2399, 32, 52);
INSERT INTO `follow` VALUES (2400, 80, 30);
INSERT INTO `follow` VALUES (2401, 25, 68);
INSERT INTO `follow` VALUES (2402, 58, 54);
INSERT INTO `follow` VALUES (2403, 91, 68);
INSERT INTO `follow` VALUES (2404, 43, 36);
INSERT INTO `follow` VALUES (2405, 25, 91);
INSERT INTO `follow` VALUES (2407, 76, 35);
INSERT INTO `follow` VALUES (2408, 35, 54);
INSERT INTO `follow` VALUES (2409, 43, 28);
INSERT INTO `follow` VALUES (2410, 83, 35);
INSERT INTO `follow` VALUES (2413, 55, 52);
INSERT INTO `follow` VALUES (2414, 83, 57);
INSERT INTO `follow` VALUES (2415, 56, 64);
INSERT INTO `follow` VALUES (2416, 66, 58);
INSERT INTO `follow` VALUES (2417, 30, 61);
INSERT INTO `follow` VALUES (2418, 55, 43);
INSERT INTO `follow` VALUES (2419, 67, 43);
INSERT INTO `follow` VALUES (2420, 77, 67);
INSERT INTO `follow` VALUES (2421, 91, 56);
INSERT INTO `follow` VALUES (2422, 28, 57);
INSERT INTO `follow` VALUES (2423, 25, 32);
INSERT INTO `follow` VALUES (2424, 84, 38);
INSERT INTO `follow` VALUES (2425, 27, 38);
INSERT INTO `follow` VALUES (2426, 28, 24);
INSERT INTO `follow` VALUES (2427, 56, 40);
INSERT INTO `follow` VALUES (2428, 33, 82);
INSERT INTO `follow` VALUES (2429, 80, 25);
INSERT INTO `follow` VALUES (2430, 69, 37);
INSERT INTO `follow` VALUES (2431, 52, 34);
INSERT INTO `follow` VALUES (2432, 29, 91);
INSERT INTO `follow` VALUES (2433, 36, 25);
INSERT INTO `follow` VALUES (2434, 33, 83);
INSERT INTO `follow` VALUES (2435, 24, 25);
INSERT INTO `follow` VALUES (2436, 30, 74);
INSERT INTO `follow` VALUES (2437, 38, 33);
INSERT INTO `follow` VALUES (2439, 37, 36);
INSERT INTO `follow` VALUES (2440, 83, 28);
INSERT INTO `follow` VALUES (2441, 36, 82);
INSERT INTO `follow` VALUES (2442, 91, 42);
INSERT INTO `follow` VALUES (2443, 38, 37);
INSERT INTO `follow` VALUES (2444, 52, 67);
INSERT INTO `follow` VALUES (2446, 57, 56);
INSERT INTO `follow` VALUES (2447, 64, 80);
INSERT INTO `follow` VALUES (2448, 52, 58);
INSERT INTO `follow` VALUES (2449, 81, 35);
INSERT INTO `follow` VALUES (2450, 45, 33);
INSERT INTO `follow` VALUES (2451, 54, 80);
INSERT INTO `follow` VALUES (2452, 83, 68);
INSERT INTO `follow` VALUES (2453, 42, 37);
INSERT INTO `follow` VALUES (2454, 54, 82);
INSERT INTO `follow` VALUES (2456, 83, 27);
INSERT INTO `follow` VALUES (2457, 96, 38);
INSERT INTO `follow` VALUES (2459, 51, 82);
INSERT INTO `follow` VALUES (2460, 33, 74);
INSERT INTO `follow` VALUES (2461, 24, 34);
INSERT INTO `follow` VALUES (2462, 43, 45);
INSERT INTO `follow` VALUES (2463, 64, 36);
INSERT INTO `follow` VALUES (2464, 67, 33);
INSERT INTO `follow` VALUES (2465, 57, 54);
INSERT INTO `follow` VALUES (2466, 83, 39);
INSERT INTO `follow` VALUES (2467, 32, 35);
INSERT INTO `follow` VALUES (2468, 38, 86);
INSERT INTO `follow` VALUES (2469, 43, 51);
INSERT INTO `follow` VALUES (2470, 58, 45);
INSERT INTO `follow` VALUES (2471, 61, 69);
INSERT INTO `follow` VALUES (2472, 77, 91);
INSERT INTO `follow` VALUES (2473, 82, 28);
INSERT INTO `follow` VALUES (2474, 34, 36);
INSERT INTO `follow` VALUES (2475, 68, 38);
INSERT INTO `follow` VALUES (2476, 74, 33);
INSERT INTO `follow` VALUES (2478, 91, 74);
INSERT INTO `follow` VALUES (2479, 36, 34);
INSERT INTO `follow` VALUES (2480, 36, 39);
INSERT INTO `follow` VALUES (2481, 33, 52);
INSERT INTO `follow` VALUES (2482, 33, 55);
INSERT INTO `follow` VALUES (2483, 76, 33);
INSERT INTO `follow` VALUES (2484, 41, 84);
INSERT INTO `follow` VALUES (2485, 27, 61);
INSERT INTO `follow` VALUES (2486, 77, 28);
INSERT INTO `follow` VALUES (2487, 42, 26);
INSERT INTO `follow` VALUES (2488, 57, 81);
INSERT INTO `follow` VALUES (2489, 68, 24);
INSERT INTO `follow` VALUES (2490, 54, 77);
INSERT INTO `follow` VALUES (2491, 80, 51);
INSERT INTO `follow` VALUES (2492, 56, 41);
INSERT INTO `follow` VALUES (2493, 32, 80);
INSERT INTO `follow` VALUES (2494, 65, 39);
INSERT INTO `follow` VALUES (2495, 37, 77);
INSERT INTO `follow` VALUES (2496, 26, 24);
INSERT INTO `follow` VALUES (2497, 61, 55);
INSERT INTO `follow` VALUES (2498, 27, 68);
INSERT INTO `follow` VALUES (2499, 52, 80);
INSERT INTO `follow` VALUES (2500, 84, 76);
INSERT INTO `follow` VALUES (2501, 66, 80);
INSERT INTO `follow` VALUES (2502, 52, 38);
INSERT INTO `follow` VALUES (2503, 64, 91);
INSERT INTO `follow` VALUES (2504, 34, 43);
INSERT INTO `follow` VALUES (2505, 25, 82);
INSERT INTO `follow` VALUES (2506, 34, 39);
INSERT INTO `follow` VALUES (2507, 34, 81);
INSERT INTO `follow` VALUES (2508, 30, 54);
INSERT INTO `follow` VALUES (2509, 52, 32);
INSERT INTO `follow` VALUES (2510, 52, 66);
INSERT INTO `follow` VALUES (2511, 91, 57);
INSERT INTO `follow` VALUES (2512, 91, 54);
INSERT INTO `follow` VALUES (2513, 27, 51);
INSERT INTO `follow` VALUES (2514, 77, 86);
INSERT INTO `follow` VALUES (2515, 41, 33);
INSERT INTO `follow` VALUES (2516, 34, 96);

-- ----------------------------
-- Table structure for hibernate_sequence
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hibernate_sequence
-- ----------------------------
INSERT INTO `hibernate_sequence` VALUES (207);

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `timestamp` datetime(6) NULL DEFAULT NULL,
  `chat_id` bigint NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKb3y6etti1cfougkdr0qiiemgv`(`user_id` ASC) USING BTREE,
  INDEX `FKmejd0ykokrbuekwwgd5a5xt8a`(`chat_id` ASC) USING BTREE,
  CONSTRAINT `FKb3y6etti1cfougkdr0qiiemgv` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKmejd0ykokrbuekwwgd5a5xt8a` FOREIGN KEY (`chat_id`) REFERENCES `chat` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES (7, 'Ngày mai đi nhậu', '2023-11-02 10:35:28.836000', 10, 64);
INSERT INTO `message` VALUES (8, 'Ngày mai đi nhậu', '2023-11-02 10:35:30.885000', 10, 64);
INSERT INTO `message` VALUES (10, 'Tui cũng chào chú', '2023-12-12 13:38:44.876000', 15, 65);
INSERT INTO `message` VALUES (11, 'Chào khoa', '2023-12-12 20:16:53.617000', 15, 96);
INSERT INTO `message` VALUES (12, 'Chào Thúy nha', '2023-12-12 20:22:19.339000', 16, 96);

-- ----------------------------
-- Table structure for notification
-- ----------------------------
DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `action` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `created_at` datetime(6) NULL DEFAULT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `related_object_id` decimal(19, 2) NULL DEFAULT NULL,
  `user_id` decimal(19, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of notification
-- ----------------------------
INSERT INTO `notification` VALUES (1, 'LIKE', NULL, 'UserHaiTest đã thích bài viết của bạn.', 142.00, 58.00);
INSERT INTO `notification` VALUES (2, 'LIKE', '2023-11-12 16:04:18.282000', 'AdminHai đã thích bài viết của bạn.', 175.00, 67.00);
INSERT INTO `notification` VALUES (3, 'LIKE', '2023-11-12 18:51:31.000000', 'AdminHai đã thích bài viết của bạn.', 175.00, 67.00);
INSERT INTO `notification` VALUES (4, 'LIKE', '2023-11-13 11:53:53.352000', 'Lê Trương Ngọc Hải đã thích bài viết của bạn.', 142.00, 58.00);
INSERT INTO `notification` VALUES (5, 'LIKE', '2023-11-13 12:00:44.749000', 'Lê Trương Ngọc Hải đã thích bài viết của bạn.', 142.00, 58.00);
INSERT INTO `notification` VALUES (6, 'LIKE', '2023-11-16 21:09:30.571000', 'Lê Trương Ngọc Hải đã thích bài viết của bạn.', 175.00, 67.00);
INSERT INTO `notification` VALUES (7, 'LIKE', '2023-11-16 21:09:33.571000', 'Lê Trương Ngọc Hải đã thích bài viết của bạn.', 176.00, 67.00);
INSERT INTO `notification` VALUES (8, 'LIKE', '2023-11-17 16:55:22.412000', 'Ngọc Hải đã thích bài viết của bạn.', 201.00, 96.00);
INSERT INTO `notification` VALUES (9, 'Comment', '2023-11-17 17:06:28.494000', 'Ngọc Hải đã bình luận bài viết của bạn.', 199.00, 96.00);
INSERT INTO `notification` VALUES (10, 'LIKE', '2023-11-19 09:42:45.600000', NULL, 201.00, 96.00);
INSERT INTO `notification` VALUES (11, 'Comment', '2023-11-19 10:06:27.030000', NULL, 201.00, 96.00);
INSERT INTO `notification` VALUES (12, 'LIKE', '2023-11-21 19:48:50.835000', NULL, 244.00, 65.00);
INSERT INTO `notification` VALUES (13, 'LIKE', '2023-11-22 21:36:16.358000', NULL, 241.00, 96.00);
INSERT INTO `notification` VALUES (14, 'LIKE', '2023-11-22 21:36:18.761000', NULL, 240.00, 96.00);
INSERT INTO `notification` VALUES (15, 'Comment', '2023-11-22 21:37:07.478000', NULL, 235.00, 69.00);

-- ----------------------------
-- Table structure for refreshtoken
-- ----------------------------
DROP TABLE IF EXISTS `refreshtoken`;
CREATE TABLE `refreshtoken`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `expiry_date` datetime(6) NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_or156wbneyk8noo4jstv55ii3`(`token` ASC) USING BTREE,
  INDEX `FKfr75ge3iecdx26qe8afh1srf6`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKfr75ge3iecdx26qe8afh1srf6` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 293 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of refreshtoken
-- ----------------------------
INSERT INTO `refreshtoken` VALUES (7, '2023-12-13 14:00:38.898000', 'cefb775d-071c-4e91-8f8b-c1f19425465a', 67);
INSERT INTO `refreshtoken` VALUES (14, '2023-12-13 14:37:16.968000', '9122d10e-d227-4c0b-acae-76fa4df2303f', 80);
INSERT INTO `refreshtoken` VALUES (15, '2023-12-13 14:37:19.729000', 'ec93d5c8-9ed7-4b83-ae43-fbb941a7b92c', 80);
INSERT INTO `refreshtoken` VALUES (16, '2023-12-13 14:37:19.913000', '7f0aade7-aedc-4008-b7ad-2f75b506a419', 80);
INSERT INTO `refreshtoken` VALUES (17, '2023-12-13 14:37:20.075000', '830afa8a-0852-4cee-a6e5-abed23eaec7a', 80);
INSERT INTO `refreshtoken` VALUES (18, '2023-12-13 14:37:20.261000', '308227c4-9445-423e-8c2a-d3ebd9335f24', 80);
INSERT INTO `refreshtoken` VALUES (19, '2023-12-13 14:37:20.433000', '9eeea561-5812-40e4-ba5c-d996c5cd1575', 80);
INSERT INTO `refreshtoken` VALUES (20, '2023-12-13 14:37:20.594000', 'f91c7159-902c-48ff-857f-c4133dacb090', 80);
INSERT INTO `refreshtoken` VALUES (21, '2023-12-13 14:37:20.735000', 'c346ec7d-f1ad-4988-ae50-3c2b7d1b1d69', 80);
INSERT INTO `refreshtoken` VALUES (22, '2023-12-13 14:37:20.864000', '272fe41a-28eb-4436-93a8-329f4686e68a', 80);
INSERT INTO `refreshtoken` VALUES (23, '2023-12-13 14:37:20.998000', '96c2b5ae-5043-4712-bb8e-dbdbef4e4a02', 80);
INSERT INTO `refreshtoken` VALUES (24, '2023-12-13 14:37:21.150000', '670cc2ca-925f-44cb-9e0d-ef10c6cc89eb', 80);
INSERT INTO `refreshtoken` VALUES (25, '2023-12-13 14:37:21.289000', 'dae9f451-40b6-4671-80fc-6f0cd13d704e', 80);
INSERT INTO `refreshtoken` VALUES (26, '2023-12-13 14:37:21.400000', 'ec4b2581-7cc2-4e3c-822e-3c2d964c729a', 80);
INSERT INTO `refreshtoken` VALUES (27, '2023-12-13 14:37:21.545000', '1ea8086b-719f-4713-b312-775a9274e37b', 80);
INSERT INTO `refreshtoken` VALUES (28, '2023-12-13 14:37:21.697000', '324723c6-07dd-4fe7-a19a-a996d119dffa', 80);
INSERT INTO `refreshtoken` VALUES (29, '2023-12-13 14:37:21.863000', '9deb6375-cc3e-4571-a3da-9b6dd7cd6166', 80);

-- ----------------------------
-- Table structure for report
-- ----------------------------
DROP TABLE IF EXISTS `report`;
CREATE TABLE `report`  (
  `report_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NULL DEFAULT NULL,
  `blog_id` bigint NULL DEFAULT NULL,
  `reason` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `create_date` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`report_id`) USING BTREE,
  INDEX `FKn9oor0wpm4bo44xqgfo06ux4m`(`blog_id` ASC) USING BTREE,
  INDEX `FKj62onw73yx1qnmd57tcaa9q3a`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKj62onw73yx1qnmd57tcaa9q3a` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKn9oor0wpm4bo44xqgfo06ux4m` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of report
-- ----------------------------
INSERT INTO `report` VALUES (11, 69, 193, 'Vi phạm ngôn từ', '2023-11-22 19:29:09.497000');
INSERT INTO `report` VALUES (14, 55, 199, 'Vi phạm ngôn từ', '2023-11-22 19:30:30.052000');
INSERT INTO `report` VALUES (15, 69, 200, 'Vi phạm ngôn từ', '2023-11-22 19:30:38.469000');
INSERT INTO `report` VALUES (16, 65, 201, 'Vi phạm ngôn từ', '2023-11-22 19:30:50.927000');
INSERT INTO `report` VALUES (17, 66, 202, 'Vi phạm ngôn từ', '2023-11-22 19:30:55.196000');
INSERT INTO `report` VALUES (18, 67, 206, 'Vi phạm ngôn từ', '2023-11-22 19:31:01.058000');
INSERT INTO `report` VALUES (19, 69, 219, 'Vi phạm ngôn từ', '2023-11-22 19:31:08.070000');
INSERT INTO `report` VALUES (20, 69, 210, 'Vi phạm ngôn từ', '2023-11-22 19:31:14.633000');
INSERT INTO `report` VALUES (22, 74, 220, 'Tư duy lôi thời', '2023-11-22 19:32:20.954000');
INSERT INTO `report` VALUES (23, 76, 213, 'Chính trị xã hội', '2023-11-22 19:32:46.976000');
INSERT INTO `report` VALUES (24, 77, 214, 'Chính trị xã hội', '2023-11-22 19:32:52.155000');
INSERT INTO `report` VALUES (25, 91, 216, 'Chính trị xã hội', '2023-11-22 19:32:55.828000');
INSERT INTO `report` VALUES (26, 86, 217, 'Chính trị xã hội', '2023-11-22 19:32:59.263000');
INSERT INTO `report` VALUES (27, 54, 217, 'Chính trị xã hội', '2023-11-22 19:33:05.071000');
INSERT INTO `report` VALUES (28, 55, 222, 'Chính trị xã hội', '2023-11-22 19:33:13.414000');
INSERT INTO `report` VALUES (29, 56, 231, 'Chính trị xã hội', '2023-11-22 19:33:21.767000');
INSERT INTO `report` VALUES (35, 39, 221, 'Chính trị xã hội', '2023-11-22 19:34:35.603000');
INSERT INTO `report` VALUES (36, 67, 217, 'Chính trị xã hội', '2023-11-22 19:34:40.219000');
INSERT INTO `report` VALUES (37, 56, 216, 'Chính trị xã hội', '2023-11-22 19:34:43.784000');
INSERT INTO `report` VALUES (39, 96, 214, 'Chính trị xã hội', '2023-11-22 19:34:51.968000');
INSERT INTO `report` VALUES (40, 69, 213, 'Chính trị xã hội', '2023-11-22 19:34:55.844000');

-- ----------------------------
-- Table structure for report_user
-- ----------------------------
DROP TABLE IF EXISTS `report_user`;
CREATE TABLE `report_user`  (
  `report_id` bigint NOT NULL AUTO_INCREMENT,
  `reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id_reported` bigint NULL DEFAULT NULL,
  `user_report` bigint NULL DEFAULT NULL,
  `create_date` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`report_id`) USING BTREE,
  INDEX `FKenaen8kny03rg1ghdhej7ndu2`(`user_id_reported` ASC) USING BTREE,
  INDEX `FK4g8hfop8whx2anev9usvgy28g`(`user_report` ASC) USING BTREE,
  CONSTRAINT `FK4g8hfop8whx2anev9usvgy28g` FOREIGN KEY (`user_report`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKenaen8kny03rg1ghdhej7ndu2` FOREIGN KEY (`user_id_reported`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 76 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of report_user
-- ----------------------------
INSERT INTO `report_user` VALUES (46, 'Không phù hợp', 86, 67, '2023-11-09 23:31:25.328000');
INSERT INTO `report_user` VALUES (47, 'Không phù hợp', 61, 67, '2023-11-09 23:31:43.333000');
INSERT INTO `report_user` VALUES (48, 'Không phù hợp', 84, 67, '2023-11-09 23:31:52.860000');
INSERT INTO `report_user` VALUES (49, 'Không phù hợp', 83, 67, '2023-11-09 23:32:15.481000');
INSERT INTO `report_user` VALUES (55, 'Không phù hợp', 80, 67, '2023-11-10 09:03:01.289000');
INSERT INTO `report_user` VALUES (56, 'Không phù hợp', 58, 67, '2023-11-10 09:43:21.914000');
INSERT INTO `report_user` VALUES (68, 'Spam', 83, 69, '2023-11-22 19:25:06.848000');
INSERT INTO `report_user` VALUES (69, 'Thông tin sai sự thật, Gây thù ghét', 34, 69, '2023-11-22 19:25:18.984000');
INSERT INTO `report_user` VALUES (70, 'Gây thù ghét, Nội dung không phù hợp', 66, 69, '2023-11-22 19:25:43.031000');
INSERT INTO `report_user` VALUES (71, 'Gây thù ghét, Nội dung không phù hợp', 28, 69, '2023-11-22 19:25:54.160000');
INSERT INTO `report_user` VALUES (72, 'Quá đẹp trai', 96, 69, '2023-11-22 19:27:11.962000');
INSERT INTO `report_user` VALUES (73, 'Nội dung không phù hợp', 84, 69, '2023-11-22 19:27:22.347000');
INSERT INTO `report_user` VALUES (74, 'Gây thù ghét, Nội dung không phù hợp', 81, 69, '2023-11-22 19:27:46.693000');
INSERT INTO `report_user` VALUES (75, 'Gây thù ghét, Nội dung không phù hợp', 91, 69, '2023-11-22 19:28:02.175000');
INSERT INTO `report_user` VALUES (76, 'Thông tin sai sự thật', 54, 96, '2023-12-12 13:35:59.740000');

-- ----------------------------
-- Table structure for reset_pass_token
-- ----------------------------
DROP TABLE IF EXISTS `reset_pass_token`;
CREATE TABLE `reset_pass_token`  (
  `id` bigint NOT NULL,
  `expiry_date` datetime NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKmy574xx51ui80x1wthxy55bad`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKmy574xx51ui80x1wthxy55bad` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of reset_pass_token
-- ----------------------------

-- ----------------------------
-- Table structure for series
-- ----------------------------
DROP TABLE IF EXISTS `series`;
CREATE TABLE `series`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `createday` datetime(6) NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `sum_blog` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKhw97yr01d1ma13c0gdes3r5ok`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKhw97yr01d1ma13c0gdes3r5ok` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 78 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of series
-- ----------------------------
INSERT INTO `series` VALUES (37, 'gfagssfwfj', 58, '2023-08-30 17:10:48.864000', 'Mo ta', 0);
INSERT INTO `series` VALUES (38, 'gfagsswfj', 58, '2023-08-30 17:11:29.816000', 'Mo ta', 0);
INSERT INTO `series` VALUES (39, 'gfagssiwfj', 58, '2023-08-30 17:13:15.187000', 'Mo ta', 0);
INSERT INTO `series` VALUES (42, 'gfagJss', 58, '2023-09-05 13:47:37.582000', 'Mo ta', 0);
INSERT INTO `series` VALUES (43, 'gfJss', 58, '2023-09-05 13:48:21.638000', 'Mo ta', 0);
INSERT INTO `series` VALUES (45, 'gass', 58, '2023-09-05 13:52:42.639000', 'Mo ta', 0);
INSERT INTO `series` VALUES (47, 'gass', 58, '2023-09-26 08:38:06.744000', 'Mo ta', 0);
INSERT INTO `series` VALUES (50, 'hfaa', 58, '2023-09-29 22:07:21.191000', NULL, 0);
INSERT INTO `series` VALUES (51, 'hafafafaa', 58, '2023-10-01 19:22:04.728000', NULL, 0);
INSERT INTO `series` VALUES (52, 'hafafaafaa', 58, '2023-10-01 19:25:44.949000', 'Mo ta', 0);
INSERT INTO `series` VALUES (53, 'hafafaafaag', 58, '2023-10-01 19:33:13.536000', 'Mo ta', 0);
INSERT INTO `series` VALUES (55, 'category', 58, '2023-10-05 16:38:37.238000', 'afa', 0);
INSERT INTO `series` VALUES (56, 'hafafag', 58, '2023-10-08 15:20:51.522000', 'Mo ta', 0);
INSERT INTO `series` VALUES (57, 'hfag', 58, '2023-10-08 16:44:34.481000', 'Mo ta', 0);
INSERT INTO `series` VALUES (58, 'h55ag', 58, '2023-10-08 16:45:49.747000', 'Mo ta', 0);
INSERT INTO `series` VALUES (61, 'test1', 58, '2023-10-10 21:47:43.503000', 'Mo ta', -2);
INSERT INTO `series` VALUES (62, 'h5hafaftag', 58, '2023-10-12 22:02:36.613000', 'Mo ta', -6);
INSERT INTO `series` VALUES (63, 'hai', 58, '2023-10-12 22:44:37.427000', 'Mo ta', -3);
INSERT INTO `series` VALUES (64, 'hai221', 58, '2023-10-12 22:47:10.245000', 'Mo ta', 0);
INSERT INTO `series` VALUES (65, 'hai221q', 58, '2023-10-12 22:48:41.927000', 'Mo ta', 0);
INSERT INTO `series` VALUES (66, 'haih221q', 58, '2023-10-12 22:52:51.024000', 'Mo ta', 1);
INSERT INTO `series` VALUES (67, 'haih221qh', 58, '2023-10-12 22:55:50.657000', 'Mo ta', 1);
INSERT INTO `series` VALUES (70, 'test', 65, '2023-10-19 13:36:17.928000', 'Mo ta', 0);
INSERT INTO `series` VALUES (71, 'Khoa', 65, '2023-10-19 13:36:22.211000', 'Mo ta', 0);
INSERT INTO `series` VALUES (72, 'lich sử', 65, '2023-10-19 13:36:30.164000', 'Mo ta', 0);
INSERT INTO `series` VALUES (73, 'Name', 67, '2023-11-06 13:10:28.082000', 'Mô tả', -1);
INSERT INTO `series` VALUES (74, 'Series 2', 67, '2023-11-16 22:07:53.902000', 'Tôi đã tạo series 2', 0);
INSERT INTO `series` VALUES (76, 'Phim ', 69, '2023-11-16 23:06:57.741000', '', 0);
INSERT INTO `series` VALUES (77, 'Tôn giáo', 65, '2023-11-19 19:45:06.666000', 'Mo ta', 1);

-- ----------------------------
-- Table structure for series_image
-- ----------------------------
DROP TABLE IF EXISTS `series_image`;
CREATE TABLE `series_image`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `upload_date` datetime(6) NULL DEFAULT NULL,
  `url_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `series_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `blog_id`(`series_id` ASC) USING BTREE,
  CONSTRAINT `FKltfgcmbg61cpwl4nk1lcwe0uk` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of series_image
-- ----------------------------
INSERT INTO `series_image` VALUES (15, '2023-10-11 20:53:02.677000', 'Http', NULL);
INSERT INTO `series_image` VALUES (16, '2023-10-11 20:59:47.375000', 'Http', 61);

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `category_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKruoloyh4bf4kdko2ccv18xyyx`(`category_id` ASC) USING BTREE,
  FULLTEXT INDEX `name`(`name`),
  CONSTRAINT `FKruoloyh4bf4kdko2ccv18xyyx` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 103 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 'Khoa học ', 1);
INSERT INTO `tag` VALUES (2, 'Công Nghệ', 1);
INSERT INTO `tag` VALUES (3, 'Giáo dục', 1);
INSERT INTO `tag` VALUES (4, 'Thể thao', 1);
INSERT INTO `tag` VALUES (15, 'ĐọcSách', 1);
INSERT INTO `tag` VALUES (16, 'VănHóaĐọc', 1);
INSERT INTO `tag` VALUES (17, 'PhiêuLưu', 1);
INSERT INTO `tag` VALUES (18, 'KhoaHọc', 1);
INSERT INTO `tag` VALUES (19, 'TiểuThuyết', 1);
INSERT INTO `tag` VALUES (21, 'TrinhThám', 1);
INSERT INTO `tag` VALUES (22, 'SáchKỹNăngSống', 1);
INSERT INTO `tag` VALUES (23, 'SáchNghệThuật', 1);
INSERT INTO `tag` VALUES (24, 'TâmLýHọc', 2);
INSERT INTO `tag` VALUES (25, 'Psychoanalysis', 2);
INSERT INTO `tag` VALUES (26, 'TâmLýPhátTriển', 2);
INSERT INTO `tag` VALUES (27, 'Mindfulness', 2);
INSERT INTO `tag` VALUES (28, 'PsychologyBooks', 2);
INSERT INTO `tag` VALUES (29, 'TâmLýTìnhCảm', 2);
INSERT INTO `tag` VALUES (30, 'SelfImprovement', 2);
INSERT INTO `tag` VALUES (31, 'TâmLýNghệThuật', 2);
INSERT INTO `tag` VALUES (32, 'TâmLýSángTạo', 2);
INSERT INTO `tag` VALUES (33, 'NhiếpẢnhNghệThuật', 3);
INSERT INTO `tag` VALUES (34, 'ChụpẢnh', 3);
INSERT INTO `tag` VALUES (35, 'LăngKínhNhiếpẢnh', 3);
INSERT INTO `tag` VALUES (36, 'LandscapePhotography', 3);
INSERT INTO `tag` VALUES (37, 'PortraitPhotography', 3);
INSERT INTO `tag` VALUES (38, 'NhiếpẢnhĐêm', 3);
INSERT INTO `tag` VALUES (39, 'NhiếpẢnhMôiTrường', 3);
INSERT INTO `tag` VALUES (40, 'NhiếpẢnhMàuSắc', 3);
INSERT INTO `tag` VALUES (41, 'PhotographyTips', 3);
INSERT INTO `tag` VALUES (42, 'FineArtPhotography', 4);
INSERT INTO `tag` VALUES (43, 'QuanĐiểmCáNhân', 4);
INSERT INTO `tag` VALUES (44, 'TranhLuận', 4);
INSERT INTO `tag` VALUES (45, 'ÝKiếnĐaDạng', 4);
INSERT INTO `tag` VALUES (46, 'TriếtHọc', 4);
INSERT INTO `tag` VALUES (47, 'DebateClub', 4);
INSERT INTO `tag` VALUES (48, 'LuậnĐiểm', 4);
INSERT INTO `tag` VALUES (49, 'CriticalThinking', 4);
INSERT INTO `tag` VALUES (50, 'ĐốiThoạiXãHội', 4);
INSERT INTO `tag` VALUES (51, 'PoliticalDiscussion', 4);
INSERT INTO `tag` VALUES (52, 'SocialDebate', 5);
INSERT INTO `tag` VALUES (53, 'SángTácNghệThuật', 5);
INSERT INTO `tag` VALUES (54, 'TácPhẩmSángTạo', 5);
INSERT INTO `tag` VALUES (55, 'NghệThuậtSángTạo', 5);
INSERT INTO `tag` VALUES (56, 'SángTạoVănHóa', 5);
INSERT INTO `tag` VALUES (57, 'TácPhẩmNghệThuật', 5);
INSERT INTO `tag` VALUES (58, 'SángTácÂmNhạc', 5);
INSERT INTO `tag` VALUES (59, 'SángTạoĐaPhươngTiện', 5);
INSERT INTO `tag` VALUES (60, 'SángTácHìnhHọa', 5);
INSERT INTO `tag` VALUES (61, 'CreativeWriting', 5);
INSERT INTO `tag` VALUES (62, 'SángTạoThờiTrang', 6);
INSERT INTO `tag` VALUES (63, 'CôngNghệMới', 6);
INSERT INTO `tag` VALUES (64, 'InnovationTech', 6);
INSERT INTO `tag` VALUES (65, 'FutureTech', 6);
INSERT INTO `tag` VALUES (66, 'ITNews', 6);
INSERT INTO `tag` VALUES (67, 'DigitalTrends', 6);
INSERT INTO `tag` VALUES (68, 'TechGadgets', 6);
INSERT INTO `tag` VALUES (69, 'ArtificialIntelligence', 6);
INSERT INTO `tag` VALUES (70, 'CodingLife', 6);
INSERT INTO `tag` VALUES (71, 'TechInnovation', 7);
INSERT INTO `tag` VALUES (72, 'FutureOfTech', 7);
INSERT INTO `tag` VALUES (73, 'TônGiáoĐaDạng', 7);
INSERT INTO `tag` VALUES (74, 'ReligiousStudies', 7);
INSERT INTO `tag` VALUES (75, 'SpiritualJourney', 7);
INSERT INTO `tag` VALUES (76, 'PhilosophyOfReligion', 7);
INSERT INTO `tag` VALUES (77, 'InterfaithDialogue', 7);
INSERT INTO `tag` VALUES (78, 'ReligiousArt', 7);
INSERT INTO `tag` VALUES (79, 'SpiritualWellness', 7);
INSERT INTO `tag` VALUES (80, 'ReligiousDebates', 7);
INSERT INTO `tag` VALUES (81, 'SacredTexts', 7);
INSERT INTO `tag` VALUES (82, 'FaithAndReason', 12);
INSERT INTO `tag` VALUES (83, 'MỹThuậtĐươngĐại', 12);
INSERT INTO `tag` VALUES (84, 'VisualArts', 12);
INSERT INTO `tag` VALUES (85, 'ArtisticExpression', 12);
INSERT INTO `tag` VALUES (86, 'ContemporaryArt', 12);
INSERT INTO `tag` VALUES (87, 'ArtGallery', 12);
INSERT INTO `tag` VALUES (88, 'ArtisticInspiration', 12);
INSERT INTO `tag` VALUES (89, 'FineArts', 12);
INSERT INTO `tag` VALUES (90, 'ArtisticCreativity', 12);
INSERT INTO `tag` VALUES (91, 'AbstractArt', 12);
INSERT INTO `tag` VALUES (92, 'ArtisticTechniques', 1);
INSERT INTO `tag` VALUES (93, 'XãHộiĐaDạng', 2);
INSERT INTO `tag` VALUES (94, 'CommunityEngagement', 3);
INSERT INTO `tag` VALUES (95, 'SocialImpact', 4);
INSERT INTO `tag` VALUES (96, 'GlobalCitizenship', 5);
INSERT INTO `tag` VALUES (97, 'CulturalExchange', 6);
INSERT INTO `tag` VALUES (98, 'SustainableLiving', 7);
INSERT INTO `tag` VALUES (99, 'SocialJustice', 7);
INSERT INTO `tag` VALUES (100, 'CommunityBuilding', 7);
INSERT INTO `tag` VALUES (107, 'Khoa học Công nghệ', 1);
INSERT INTO `tag` VALUES (109, 'Khoa học Đời sống', 1);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_date` datetime(6) NULL DEFAULT NULL,
  `update_date` datetime NULL DEFAULT NULL,
  `avatar` varchar(522) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `second_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `descriptions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `school` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `company` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `banner_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `sum_violating` int NULL DEFAULT NULL,
  `sum_blog` int NOT NULL,
  `total_followers` int NOT NULL,
  `total_following` int NOT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UKsb8bbouer5wak8vyiiy4pf2bx`(`username` ASC) USING BTREE,
  UNIQUE INDEX `UKob8kqyqqgmefl0aco34akdtpe`(`email` ASC) USING BTREE,
  FULLTEXT INDEX `name`(`name`, `descriptions`, `second_name`)
) ENGINE = InnoDB AUTO_INCREMENT = 99 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (24, 'Minh Hiền Chi', 'dangkhoa@gmail.com', '$2a$10$yFKuBcHWiqUoO9exVsPNqukQVb0sfAKbOUbBD1yOximYUjcf6I1Sq', 'User12', '0814069391', '2023-08-27 13:33:38.045000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Lil sis', 1, 'Tôi là người lạc quan, luôn tìm thấy niềm vui trong cuộc sống và truyền cảm hứng cho những người xung quanh.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (25, 'Tiến Lam Hồng', 'honghieu@gmail.com', '$2a$10$8.XSa9yLYYktXoSevO15BONit5aO0X2xpXSvA9JETV.oqtdH0Agfy', 'User13', '0814069391', '2023-09-07 13:32:27.288000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Thỏ', 1, 'Đám mây là bức tranh của tôi, với đôi mắt và máy ảnh, tôi khám phá vẻ đẹp đặc biệt của thế giới xung quanh.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (26, 'Vương Thúy Yến', 'vangluong@gmai.com', '$2a$10$iceJIqv5MFkmHBtE3TtfYuEBunOj88kvbLJRovwRgXz1RY/LC0YNe', 'User', '0814069391', '2023-09-07 13:34:37.391000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Cutie', 1, 'Năng động là đích đến của tôi, và tôi không bao giờ ngừng học hỏi để trở thành phiên bản tốt nhất của chính mình.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (27, 'Khoa Thị Nga', 'tiendat@gmail.com', '$2a$10$Yi0PZQsNgcTANleP/FEC8.CkC.8WGn5gAQb1gMQ0k728wx6lBUi4i', 'User14', '0814069391', '2023-09-10 16:50:26.807000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Angel', 1, 'Mãi mãi là người đam mê mãi mãi, tôi muốn sáng tạo ra những sản phẩm công nghệ mang lại giá trị thực tế.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (28, 'Hùng Minh Tú Thúy', 'huutrong@gmail.com', '$2a$10$2tNr977OLZzI7Kpau1zwuOe1oBHuc6X5EqRgMmwGTwf1zHuhZo9S6', 'User15', '0814069391', '2023-09-10 16:50:43.225000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Chú', 1, 'Trái tim tôi thuộc về thiên nhiên, và tôi cam kết bảo vệ và chăm sóc môi trường xanh xung quanh chúng ta.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (29, 'Thắng Thương Yến', 'thanhhuye@gmail.com', '$2a$10$4SYKvJFBATZXSGFbdsO8pu2e47YTBvNTv58L5q48KgUEUB3iRvV4q', 'Userfa', '0814069395', '2023-09-11 13:48:19.029000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Sweet', 1, 'Trái bóng tròn như trái tim tôi, và tôi hòa mình vào niềm đam mê bóng đá, luôn dành tình cảm cho đội bóng yêu thích.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (30, 'Chánh Chi Như Mẫn', 'thivan@gmail.com', '$2a$10$e53bgWXABfljtObuu.FmKehzbfFTUcGtHvaE5beeM3fgZ.Zzbcaoe', 'User1747', '0814069391', '2023-09-11 21:37:36.266000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Pumpkin', 1, 'Mỗi ngày là một trang mới trong cuộc sống, và tôi luôn tìm kiếm những cơ hội mới để phát triển và đổi mới', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (32, 'Thắng Hồng Giáng', 'thaotrang@gmail.com', '$2a$10$g5MYGRfENsvukhDRqjtf5eOheHMGVwYXekl40S.u5UIwAtUy6dAem', 'User18', '0814069391', '2023-09-12 08:43:12.920000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Sweet', 1, 'Cuộc sống không ngừng làm mới bản thân, và tôi sẵn sàng chấp nhận thách thức để trở thành phiên bản tốt nhất', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (33, 'Ninh Vy Giáng Tú', 'hien@gmail.com', '$2a$10$.7i7Q5C1aC/9ei4bM3nvqOxasJDCWjG6Pmnn52m03Cehhapm7tOjG', 'User19', '0814069391', '2023-09-12 08:48:38.123000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Tiny', 1, 'Sáng tạo là nguồn động viên của tôi, tôi thích thách thức bản thân để đưa ra những ý tưởng mới và độc đáo.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 24, 25, 'USER');
INSERT INTO `user` VALUES (34, 'Khắc Yến Đức Văn', 'cute@gmail.com', '$2a$10$D0STwuplRYZfEUDU09PLi.bHIqITEuGzTvWoic3xHaioocHQK/ywm', 'User20', '0814069391', '2023-09-12 08:50:28.823000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Bubbles', 1, 'Niềm đam mê của tôi là nguồn năng lượng vô tận, đưa tôi đi xa và khám phá những hành trình mới trong cuộc sống', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (35, 'Dương Chi Anh', 'dangkhoa114@gmail.com', '$2a$10$EXKw8PZqC5rTG8t8Sw1w9u6IzJmUuolNQm/sy/5hfaX/RJ2TJfB2.', 'User21', '0814069391', '2023-09-12 09:16:34.758000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Cutie', 1, 'Tôi thường mỉm cười và tin rằng nụ cười có thể làm thay đổi không khí xung quanh, tôi là người mang lại sự lạc quan cho mọi tình huống.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (36, 'An Mai Thư', 'hutring@gmail.com', '$2a$10$ZGAf1RoNdzLRPITuotVMLuyNFTmPiUrp8P9qsMympzu/zyEdxIXaG', 'User22', '0814069391', '2023-09-12 09:19:45.230000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'baboga', 1, 'Khi cầm máy ảnh, tôi như một nghệ sĩ tạo nên những bức tranh sống động của cuộc sống, chụp lại những khoảnh khắc không thể nào quên.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (37, 'Vũ Lam Nhung Văn', 'thaytrang@gmail.com', '$2a$10$a2NZj2WLYjqoXwx9DIlpWuDRJlCS4nbaeRhW.nw/5vSptr6RydQZK', 'User23', '0814069391', '2023-09-12 09:29:44.499000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Prince', 1, 'Sự tò mò không giới hạn của tôi thúc đẩy tôi khám phá những lĩnh vực mới và tìm hiểu về thế giới xung quanh mình', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (38, 'Cường Phương Xuân Lam', 'thaunhua@gmail.com', '$2a$10$oS//1H82CTRUsoDAbYyKoOSq.Des9EmSiA3R7ofnL4JHGI7l7N/JW', 'User24', '0814069391', '2023-09-12 09:35:09.930000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Princess', 1, 'Lập trình là ngôn ngữ của tôi, tôi muốn xây dựng những ứng dụng và giải pháp sáng tạo để giúp cộng đồng.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (39, 'Cường Yến Minh Thy', 'conraca@gmail.com', '$2a$10$E/cZ7WTFtH6k.2.UTJEYF.vNM9jTxtTrrxguIEy84XKk4Cf4I3N16', 'User25', '0814069391', '2023-09-12 10:11:24.022000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Mẹ', 1, 'Tôi không chỉ thưởng thức vẻ đẹp tự nhiên mà còn hành động để giữ gìn và bảo vệ môi trường cho thế hệ sau.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (40, 'Hoàng Thanh  Giáng', 'beamen@gmail.com', '$2a$10$ooWCsmVetzaXuume27xDCOqQH1XJx.qw/2K1L2WmRfM1bGcY5Y5Z2', 'User26', '0814069391', '2023-09-12 10:19:31.542000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Buddy', 1, 'Sân cỏ là nơi tôi tìm thấy niềm vui và đam mê, bóng đá không chỉ là môn thể thao mà còn là niềm đam mê cuộc sống của tôi', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (41, 'Lê Quang Uyên', 'ngocahai0612@gmail.com', '$2a$10$CX.isCWN0Hf7e8HALOj77uzH3gAdtkuJPP77f3l/FjMY9CoSH1bpK', 'baboga', '0814069391', '2023-09-12 10:53:54.418000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Sunshine', 1, 'Tôi coi mỗi thách thức là cơ hội để phát triển, và tôi luôn đặt ra mục tiêu vươn xa hơn mỗi ngày.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (42, 'Nghiêm Hồng Oanh', 'vongdoan@gmail.com', '$2a$10$TIxIHPEO3PtyTx1WDc9DneUYCKJrzVP4.tB0A1HbUR5Q8vUi2sksq', 'User 30', '0814069391', '2023-09-12 10:56:57.820000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Pooh', 1, 'Đối mặt với sự đa dạng, tôi không ngần ngại khám phá và học hỏi từ mọi người, để tạo ra một cộng đồng đa văn hóa.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (43, 'Trịnh Khánh Lam', 'hivong@gmail.com', '$2a$10$c2cCfc/.jnpkMkkpQyTVLe0ZrUYpU6jTitbxsiVAMiFFXuADesSde', 'User 31', '0814069391', '2023-09-12 11:51:29.933000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Thỏ', 1, 'Trí tưởng tượng của tôi là nguồn động viên không ngừng, tôi tin rằng sự sáng tạo có thể thay đổi thế giới xung quanh.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (45, 'Nguyễn Oanh Thư', 'ngochieu@gmail.com', '$2a$10$cZu4tuxdUDFuz2KATnmzGet2/dbuTGUILrGckjIM9fgceKgJ6lcXK', 'User 33', '0814069391', '2023-09-12 11:53:59.323000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Sweetie', 1, 'Với tôi, việc duy trì tâm hồn lạc quan là chìa khóa mở cánh cửa cho những trải nghiệm mới và ý nghĩa trong cuộc sống.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (51, 'Thắng Lê Chi Mai', 'vanluongrau@gmail.com', '$2a$10$xXl4YxkdltVeHJ19e.uDT.OHokgSdVbbhhlVUffeSLYjg9nphmcRC', 'User 39', '0814069391', '2023-09-12 13:04:46.097000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Pumpkin', 1, 'Lens của máy ảnh là cửa sổ mở ra thế giới, và tôi đang hòa mình vào việc ghi lại những khoảnh khắc đẹp và ý nghĩa.\"', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (52, 'Phan Thương Thị Hồng', 'ngoaaahai06122002@gmail.com', '$2a$10$fxq.vLECu0lt/othW/m2Ru67.Z6FQVg/Rooz3IGDIo1Wtp3HS5yWa', 'AdminHai', '0814069391', '2023-09-13 09:31:00.547000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Sweetie', 1, 'Năng động không chỉ là tư duy mà còn là lối sống của tôi, tôi luôn tìm kiếm cơ hội để phát triển và đổi mới bản thân.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (54, 'Khổng Quang Thu', 'bug@gmail.com', '$2a$10$d9Ru.EQIHbk1BvTMaZEzj.FVm8REBAD1Wtz3AApKyqxm8yRiMjPTq', 'nga0hcshai', '0814069391', '2023-09-17 15:01:25.932000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600,', 'Nam', 'Chú', 1, 'Mã nguồn là ngôn ngữ mà tôi sử dụng để tạo ra những ứng dụng thông minh, mang lại giá trị cho cộng đồng và xã hội', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (55, 'Anh Mai Hà', 'ngochg0ah6hs122002@gmail.com', '$2a$10$2expwu3ci8YfEQz4lytl2eXw/lLxR2pr1/YZz/u1wSRxU6tYjzqT6', 'nga0hchshai', '0814069391', '2023-09-20 10:49:44.823000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Cupcake', 1, 'Thiên nhiên là nguồn nguyên liệu tạo nên sự sống, và tôi là người giữ gìn và bảo vệ vẻ đẹp tự nhiên.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (56, 'Khổng Oanh Xuân Tú', 'ngkkochai06122002@gmail.com', '$2a$10$QCHuqO.3fJEG.Ffv/x4kE.4brFQ6f2YcYwww0qy7Xf93lwUsGfaxu', 'admin', '0814069391', '2023-09-21 08:42:06.113000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Bé', 1, 'Cuộc sống bóng đá không chỉ là trận đấu mà còn là hành trình đầy cảm xúc, và tôi là người đam mê mỗi khoảnh khắc của nó.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (57, 'Hồ Anh Dung', 'ngoqchai06122002@gmail.com', '$2a$10$5QazZwr6VcBai5jgMii9i.DCOKseNbHDI0wxM0N9y0zhTGL7bxvu2', 'admin1', '0814069391', '2023-09-21 08:45:05.254000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'baboga', 2, 'Mỗi ngày là một trang sách mới, và tôi là tác giả tự do, viết nên những dòng truyện tuyệt vời của cuộc đời.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600', 1, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (58, 'Cao Hạnh Vy Thanh ', 'ngocahai06122002aa@gmail.com', '$2a$10$MLEfTIPPOPF1Pusb.2uX3OT8ePVC8ndyomXMY09EZpg4.Frv0OODC', 'admin2', '0814069391', '2023-09-21 08:50:19.154000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Bro', 1, 'Chấp nhận thách thức là cách tôi trưởng thành, và tôi không ngần ngại đối mặt với những khó khăn để đạt được mục tiêu của mình', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 17, 23, 'ADMIN');
INSERT INTO `user` VALUES (61, 'Lê Mai Thị Đức', 'anhtram900@gmail.com', '$2a$10$3z9y4NYExDwteqFDTOwcJuJu/rQne7LaMLA6ApYaznV7S1S/qhRci', 'UserTram', '0814069391', '2023-09-24 16:54:38.887000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Lil sis', 1, 'Sự sáng tạo không giới hạn là điểm mạnh của tôi, và tôi đang tìm kiếm cách để đưa ý tưởng mới vào cuộc sống hàng ngày.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (64, 'Lương Nhàn Minh', 'ng1ochai06122002@gmail.com', '$2a$10$8yqiRdp3uznrJPXUhKEV5.c.kolDlNGGWMBH13OTRLXd54z4y5wgy', 'UserTramaa', '0814069391', '2023-10-01 11:16:43.232000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Bunny', 1, 'Niềm đam mê cháy bỏng là nguồn năng lượng vô tận, tôi muốn đánh thức nguồn động viên bên trong mỗi người', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (65, 'Phan Đại Đăng Khoa', 'khoadang88vn@gmail.com', '$2a$10$Qst3491pHdGxr/P0fU3j9ugndfwz53n7IOtHre1OaVgwB/DRPv2Ka', 'pddkhoa', '0973455342', '2023-10-15 09:50:30.000000', '2023-10-10 21:47:27', 'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/361664449_3582618118679695_2632486496498060944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHSkhx4AaSpoLV1E4fsrti-qCRPIoCTGyGoJE8igJMbIZOmA2wakvc4VjIQBBK7QgvZ-Iy6NhNKrrmOgj5drmKh&_nc_ohc=r_rTGW19nRsAX8K9cBu&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBkntOjfJrahCrDQrVJADp6fiLEfGL1DReWrnbkCCW8IA&oe=657D8A78', 'Nam', 'Gấu', 1, 'Bản thân tôi là một bức tranh không ngừng được vẽ, và tôi đang cố gắng thêm những sắc màu mới vào cuộc sống của mình.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 1, 18, 18, 'USER');
INSERT INTO `user` VALUES (66, 'Thành Thúy Diễm Anh', 'angaochai06122002@gmail.com', '$2a$10$EzGEX/zodEnpS3HXIoPfr.yR.BAm8TKwPWdRRjtghNkz7lAIxTnae', 'userHai', '0814069391', '2023-10-15 19:19:44.005000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Peach', 1, 'Làm cho môi trường sống trở nên tốt đẹp hơn là trách nhiệm của tôi, và tôi hành động để làm thay đổi tích cực.', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (67, 'Hồ Huyền Oanh', 'ngochai06122002@gmail.com', '$2a$10$41r.vG66YnNCJyAngPPrFusdmBJcHrLFD7KJt4rHGMFaIU2HXaoiK', 'UserHaiTest', '0814069391', '2023-10-16 18:17:28.197000', '2023-11-08 17:08:04', 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Tiny', 1, 'Tình yêu thể thao không chỉ giúp tôi duy trì sức khỏe mà còn tạo ra cộng đồng đoàn kết và niềm vui.', 'UTE', 'Bà Rịa Vũng Tàu', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 1, 21, 25, 'ADMIN');
INSERT INTO `user` VALUES (68, 'Thắng Thy Hiền', 'ngochai06122f002@gmail.com', '$2a$10$VBJ2ghn4UCc9jIcw/Mwqfe0V8zC/M622posRzIsrBOUaOdWjqEg2W', 'userHfai', '0814069391', '2023-10-16 18:18:38.253000', '2023-10-10 21:47:27', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Mate', 1, 'Khám phá là con đường tôi chọn, và tôi không ngừng mở rộng tầm nhìn của mình để tìm kiếm những điều mới mẻ', 'UTE', 'Thủ Đức', '3FORCOM', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (69, 'Đoàn Lê Hy Vọng', 'vongdoan9@gmail.com', '$2a$10$nUn53ERstsatM4wQoG/0fesmFC5.7vgwXVKcjLXLTTuTu7XZE/OSW', 'UserVong', '0814065693', '2023-11-05 13:51:39.133000', '2023-11-05 13:55:59', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1700150796/t21fyzbogw1bx8s1kb9d.jpg', 'Nữ', 'Dear', 1, 'Những ý tưởng sáng tạo không bao giờ ngưng trăn trở trong tâm trí tôi, và tôi luôn tìm kiếm cách để chúng trở thành hiện thực', NULL, NULL, NULL, NULL, 'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 2, 23, 17, 'USER');
INSERT INTO `user` VALUES (74, 'Khắc Vy Kiều', 'baboga10204@gmail.com', '$2a$10$z4hAbd.nobKlM0hG1LlRAepxUyOrwkeOLK3RfMCA9jmgO8rHuAxw2', 'pdfahoa', '0814069391', '2023-11-05 14:27:50.363000', '2023-11-05 14:42:42', 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Doodle', 1, 'Tôi là một người sâu sắc và tận hưởng sự yên bình trong việc khám phá vẻ đẹp ẩn sau mỗi chi tiết cuộc sống.', NULL, NULL, NULL, NULL, 'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (76, 'Phan Đại Đăng Khoa', 'ngochai06122f2002@gmail.com', '$2a$10$DAmbPJf.FXzTsL3BrRFN7.I8RVKk7GMyt52oxPlGOGQY50k06.zPm', 'pddkhoa123123', '0814069391', '2023-11-05 17:00:32.686000', NULL, 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Bubbles', 3, 'Sự nhìn nhận tích cực giúp tôi vượt qua mọi thách thức, và tôi luôn tìm kiếm điều tích cực trong mọi tình huống', NULL, NULL, NULL, NULL, 'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (77, 'Lương Giáng Thanh', 'babogadasda12@gmail.com', '$2a$10$wTL2.7y3QNbbucKvRvKAPumu4oSCKGYtzi0a3UVvQEtpdoOMumOKG', 'UserVongasd', '0814069391', '2023-11-06 08:20:49.204000', NULL, 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Anh', 3, 'Mỗi ngày là một cơ hội mới để học hỏi và phát triển, và tôi tận dụng mọi khoảnh khắc để trở thành phiên bản tốt nhất của mình.', NULL, NULL, NULL, NULL, 'https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (80, 'Thanh Uyên Diễm', 'baboga12@gmail.com', '$2a$10$h6lXMI/Fczh3Z.jGQ0GJ9./whVticp4XvQ.vmebrcOHgMfDIWFXBm', 'AdminHai1', '0814069391', '2023-11-08 15:18:34.706000', '2023-12-12 14:32:01', 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'Rainbow', 1, 'Đối diện với thách thức là cơ hội để chứng minh bản lĩnh của mình, và tôi là người không ngần ngại nói lên chính mình', NULL, NULL, NULL, NULL, 'https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=600', 11, 0, 26, 23, 'USER');
INSERT INTO `user` VALUES (81, 'Quý Chi Thắm Đức', 'baboga@gmail.com', '$2a$10$AMoVt97JrGOimVjtFmtV8OuY3e6b3y5.fQzXx3GuZEYBhTI/HOk26', 'AdinHai1', '0814069391', '2023-11-08 15:20:30.545000', NULL, 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Angel', 1, 'Trí tưởng tượng tôi như một chiếc cánh cửa mở ra thế giới phiêu lưu, và tôi luôn tìm kiếm cơ hội để bước chân vào những hành trình mới.', NULL, NULL, NULL, NULL, 'https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (82, 'Huỳnh Hằng Vy', 'baba@gmail.com', '$2a$10$ApBg2DrnNZYBtSf3zlVmlOQ6DpIi5MMxwGw4A6X2rrV9fD6ImfOMu', 'nHai1', '0814069391', '2023-11-08 15:20:49.007000', NULL, 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nam', 'My love', 1, 'Mỗi nụ cười của tôi là một tia sáng trong bản vẽ cuộc sống, và tôi thích chia sẻ niềm vui với mọi người xung quanh.', NULL, NULL, NULL, NULL, 'https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (83, 'Quang Tú Thị Thơ', 'ngochai06f2002@gmail.com', '$2a$10$JLviZ.FX15J1rM0./jV1.e66uI/FTf9pq7f5WClScy1dw2AiOGK6C', 'pddkho123', '0814069391', '2023-11-08 15:21:46.537000', NULL, 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Cupcake', 3, 'Những khám phá mới là năng lượng động lực cho tâm hồn tôi, và tôi không ngừng tìm kiếm những điều thú vị trong hành trình của mình', NULL, NULL, NULL, NULL, 'https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (84, 'Vũ Dung Anh Nhung', 'boboga0204@gmail.com', '$2a$10$UqPC3YfH5kaBWGfJ2cYmQ.EMTD/Gk8JGM7fnb9ZZe46TYKaSDSaTG', 'AdminHai2', '0814069391', '2023-11-08 15:24:22.340000', NULL, 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Muffin', 1, 'Tôi là người sáng tạo, thích nghiên cứu và phát triển công nghệ để tạo ra những giải pháp mới và tiện ích cho mọi người', NULL, NULL, NULL, NULL, 'https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (86, 'Đức Lan Thy', 'baaboga0204@gmail.com', '$2a$10$2L2vhAmn.OqewRf5l6rr4.TrWro/XT6vWO13dQReHrlEPOoej9eCy', 'AdminHai4', '0814069391', '2023-11-08 17:49:58.944000', NULL, 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Tiny', 1, 'Tôi là người bảo vệ môi trường, đặt mục tiêu giữ gìn và phát triển bền vững cho hành tinh chúng ta.', NULL, NULL, NULL, NULL, 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=600', 1, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (91, 'Đoàn Hạnh Kiều', 'baboga02204@gmail.com', '$2a$10$Lez5EjSCx5WwRuBaC6BhNObGZLNay4ae4anW/4EBD8BV9OLhpXz/6', 'AdminHai6', '0814069391', '2023-11-10 15:43:57.508000', '2023-11-15 10:12:49', 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600', 'Nữ', 'Honey', 1, 'Bóng đá không chỉ là môn thể thao, đó là ngôn ngữ tôi sử dụng để kết nối với người khác và chia sẻ niềm đam mê.', 'baac', 'ydfka', 'acadafad', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=600', 0, 0, 0, 0, 'USER');
INSERT INTO `user` VALUES (96, 'Lê Trương Ngọc Hải', '20110465@student.hcmute.edu.vn', '$2a$10$IYsjM5WLz2JSN3kZ6lNhHu05rEiwHyEBsj/IzxOWySt3jv9oQ94jG', 'UserNgocHai', '0814069391', '2023-11-15 11:32:35.663000', '2023-11-15 11:36:42', 'https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.6435-9/122825062_1292445437767521_9012330157752296948_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeEQRXdGIbE-VCG6qzgnVd9nwITCU4XBaWvAhMJThcFpa3y5UzZeu1CPHzpAJHIMh-94Usdxy7pIXdLskKYK2FrN&_nc_ohc=YoU0gD2eSzUAX_ee5gn&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfBGUiw6Hugr76twOzyg_v6Vm5-DpofW3-4GLEP3myEqOA&oe=65854934', 'Nữ', 'Sis', 1, 'Tôi không chỉ là người đam mê nghệ thuật chụp ảnh, mà còn là người thực hiện những câu chuyện sống động qua ống kính máy ảnh.', 'baac', 'ydfka', 'acadafad', 'Bà Rịa Vũng Tàu', 'https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&w=600', 11, 32, 18, 18, 'USER');
INSERT INTO `user` VALUES (98, 'Đông', '209878@student.hcmute.edu.vn', '$2a$10$yflPfkpC7zmfbHAyAD5YE.h2FprYgZhJZ1r2NE3XwtafKETzEHRxC', 'AdminTest', '0814069391', '2023-11-23 08:54:04.367000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 'ADMIN');

-- ----------------------------
-- Table structure for user_banner
-- ----------------------------
DROP TABLE IF EXISTS `user_banner`;
CREATE TABLE `user_banner`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `upload_date` datetime(6) NULL DEFAULT NULL,
  `url_banner` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `user_banner_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_banner
-- ----------------------------
INSERT INTO `user_banner` VALUES (5, '2023-09-21 08:50:19.154000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696429525/ulu2n4fi1wujzzybufw4.png', 58);
INSERT INTO `user_banner` VALUES (6, '2023-09-21 08:50:19.154000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430372/a56qwyqqtp4rko6vt47r.png', 58);
INSERT INTO `user_banner` VALUES (7, '2023-09-21 08:50:19.154000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430467/a7f73ihkhuiphajw2bmg.png', 58);
INSERT INTO `user_banner` VALUES (8, '2023-09-21 08:50:19.154000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430482/qzyqkpj7kgppudp3mu6t.png', 58);
INSERT INTO `user_banner` VALUES (9, '2023-09-21 08:50:19.154000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696433190/qhgtyuqhsj7fca5mok2f.png', 58);
INSERT INTO `user_banner` VALUES (10, '2023-09-21 08:50:19.154000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696498663/kcljipysr8kbtq5e6ntz.png', 58);
INSERT INTO `user_banner` VALUES (11, '2023-09-21 08:50:19.154000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696499055/demhwc3u3lbu54ryhbhm.jpg', 58);
INSERT INTO `user_banner` VALUES (12, '2023-10-15 09:50:30.000000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697338600/xfa3fcejehof514f4fuv.jpg', 65);
INSERT INTO `user_banner` VALUES (13, '2023-10-16 18:17:28.197000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697511633/elh5chkubmsdvxifhjql.jpg', 67);
INSERT INTO `user_banner` VALUES (14, '2023-11-05 13:51:39.133000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1699167335/vdjvkjzecotg38ltthqu.jpg', 69);
INSERT INTO `user_banner` VALUES (15, '2023-10-16 18:17:28.197000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1699244095/acqamlycpxocfymy0i6w.jpg', 67);
INSERT INTO `user_banner` VALUES (16, '2023-10-16 18:17:28.197000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1700016836/aluhoc2ysmlpzenklp6n.jpg', 67);

-- ----------------------------
-- Table structure for user_category
-- ----------------------------
DROP TABLE IF EXISTS `user_category`;
CREATE TABLE `user_category`  (
  `id` bigint NOT NULL,
  `category_id` bigint NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKjchjxphkf5owj1i5bp95g5mfs`(`category_id` ASC) USING BTREE,
  INDEX `FKkukst0qag2d8k8d1jlc809u0u`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKjchjxphkf5owj1i5bp95g5mfs` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKkukst0qag2d8k8d1jlc809u0u` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_category
-- ----------------------------
INSERT INTO `user_category` VALUES (33, 2, 35);
INSERT INTO `user_category` VALUES (34, 2, 40);
INSERT INTO `user_category` VALUES (35, 2, 64);
INSERT INTO `user_category` VALUES (36, 5, 77);
INSERT INTO `user_category` VALUES (37, 4, 27);
INSERT INTO `user_category` VALUES (38, 7, 66);
INSERT INTO `user_category` VALUES (39, 2, 68);
INSERT INTO `user_category` VALUES (40, 12, 76);
INSERT INTO `user_category` VALUES (41, 7, 29);
INSERT INTO `user_category` VALUES (42, 14, 24);
INSERT INTO `user_category` VALUES (43, 2, 24);
INSERT INTO `user_category` VALUES (44, 1, 34);
INSERT INTO `user_category` VALUES (45, 14, 26);
INSERT INTO `user_category` VALUES (46, 12, 24);
INSERT INTO `user_category` VALUES (47, 12, 86);
INSERT INTO `user_category` VALUES (48, 2, 91);
INSERT INTO `user_category` VALUES (49, 1, 80);
INSERT INTO `user_category` VALUES (50, 12, 40);
INSERT INTO `user_category` VALUES (51, 3, 84);
INSERT INTO `user_category` VALUES (52, 7, 76);
INSERT INTO `user_category` VALUES (53, 12, 77);
INSERT INTO `user_category` VALUES (54, 7, 38);
INSERT INTO `user_category` VALUES (55, 1, 66);
INSERT INTO `user_category` VALUES (56, 14, 28);
INSERT INTO `user_category` VALUES (57, 12, 51);
INSERT INTO `user_category` VALUES (58, 7, 57);
INSERT INTO `user_category` VALUES (59, 7, 27);
INSERT INTO `user_category` VALUES (60, 3, 35);
INSERT INTO `user_category` VALUES (61, 12, 55);
INSERT INTO `user_category` VALUES (62, 2, 34);
INSERT INTO `user_category` VALUES (63, 5, 69);
INSERT INTO `user_category` VALUES (64, 4, 61);
INSERT INTO `user_category` VALUES (65, 14, 38);
INSERT INTO `user_category` VALUES (66, 5, 24);
INSERT INTO `user_category` VALUES (67, 14, 32);
INSERT INTO `user_category` VALUES (68, 14, 29);
INSERT INTO `user_category` VALUES (70, 3, 66);
INSERT INTO `user_category` VALUES (72, 1, 91);
INSERT INTO `user_category` VALUES (74, 1, 64);
INSERT INTO `user_category` VALUES (75, 3, 68);
INSERT INTO `user_category` VALUES (76, 4, 82);
INSERT INTO `user_category` VALUES (77, 5, 32);
INSERT INTO `user_category` VALUES (78, 2, 98);
INSERT INTO `user_category` VALUES (79, 6, 42);
INSERT INTO `user_category` VALUES (80, 6, 38);
INSERT INTO `user_category` VALUES (81, 12, 84);
INSERT INTO `user_category` VALUES (82, 2, 45);
INSERT INTO `user_category` VALUES (83, 7, 30);
INSERT INTO `user_category` VALUES (84, 5, 42);
INSERT INTO `user_category` VALUES (85, 7, 84);
INSERT INTO `user_category` VALUES (86, 3, 26);
INSERT INTO `user_category` VALUES (87, 14, 51);
INSERT INTO `user_category` VALUES (88, 1, 35);
INSERT INTO `user_category` VALUES (89, 5, 86);
INSERT INTO `user_category` VALUES (90, 5, 38);
INSERT INTO `user_category` VALUES (91, 14, 86);
INSERT INTO `user_category` VALUES (92, 2, 37);
INSERT INTO `user_category` VALUES (93, 2, 36);
INSERT INTO `user_category` VALUES (94, 12, 36);
INSERT INTO `user_category` VALUES (95, 4, 26);
INSERT INTO `user_category` VALUES (96, 14, 57);
INSERT INTO `user_category` VALUES (97, 7, 26);
INSERT INTO `user_category` VALUES (98, 5, 80);
INSERT INTO `user_category` VALUES (99, 3, 37);
INSERT INTO `user_category` VALUES (100, 6, 58);
INSERT INTO `user_category` VALUES (101, 6, 96);
INSERT INTO `user_category` VALUES (102, 1, 76);
INSERT INTO `user_category` VALUES (103, 7, 32);
INSERT INTO `user_category` VALUES (104, 3, 39);
INSERT INTO `user_category` VALUES (105, 14, 81);
INSERT INTO `user_category` VALUES (106, 12, 82);
INSERT INTO `user_category` VALUES (107, 12, 56);
INSERT INTO `user_category` VALUES (108, 7, 68);
INSERT INTO `user_category` VALUES (109, 6, 55);
INSERT INTO `user_category` VALUES (110, 4, 34);
INSERT INTO `user_category` VALUES (111, 4, 45);
INSERT INTO `user_category` VALUES (112, 1, 32);
INSERT INTO `user_category` VALUES (113, 7, 25);
INSERT INTO `user_category` VALUES (114, 1, 52);
INSERT INTO `user_category` VALUES (115, 6, 33);
INSERT INTO `user_category` VALUES (116, 4, 32);
INSERT INTO `user_category` VALUES (117, 14, 39);
INSERT INTO `user_category` VALUES (118, 2, 74);
INSERT INTO `user_category` VALUES (119, 14, 56);
INSERT INTO `user_category` VALUES (120, 2, 42);
INSERT INTO `user_category` VALUES (121, 6, 68);
INSERT INTO `user_category` VALUES (122, 1, 61);
INSERT INTO `user_category` VALUES (123, 6, 39);
INSERT INTO `user_category` VALUES (124, 6, 34);
INSERT INTO `user_category` VALUES (125, 3, 65);
INSERT INTO `user_category` VALUES (126, 2, 39);
INSERT INTO `user_category` VALUES (127, 14, 98);
INSERT INTO `user_category` VALUES (128, 4, 86);
INSERT INTO `user_category` VALUES (129, 1, 55);
INSERT INTO `user_category` VALUES (130, 5, 57);
INSERT INTO `user_category` VALUES (131, 3, 30);
INSERT INTO `user_category` VALUES (132, 4, 83);
INSERT INTO `user_category` VALUES (133, 7, 67);
INSERT INTO `user_category` VALUES (134, 5, 61);
INSERT INTO `user_category` VALUES (135, 14, 27);
INSERT INTO `user_category` VALUES (136, 5, 81);
INSERT INTO `user_category` VALUES (137, 1, 98);
INSERT INTO `user_category` VALUES (138, 2, 55);
INSERT INTO `user_category` VALUES (139, 1, 54);
INSERT INTO `user_category` VALUES (140, 1, 96);
INSERT INTO `user_category` VALUES (141, 6, 66);
INSERT INTO `user_category` VALUES (142, 6, 27);
INSERT INTO `user_category` VALUES (143, 12, 41);
INSERT INTO `user_category` VALUES (144, 14, 43);
INSERT INTO `user_category` VALUES (145, 3, 33);
INSERT INTO `user_category` VALUES (146, 4, 91);
INSERT INTO `user_category` VALUES (147, 3, 43);
INSERT INTO `user_category` VALUES (148, 3, 61);
INSERT INTO `user_category` VALUES (149, 1, 40);
INSERT INTO `user_category` VALUES (150, 12, 81);
INSERT INTO `user_category` VALUES (151, 6, 37);
INSERT INTO `user_category` VALUES (152, 14, 64);
INSERT INTO `user_category` VALUES (153, 4, 65);
INSERT INTO `user_category` VALUES (154, 6, 91);
INSERT INTO `user_category` VALUES (155, 1, 38);
INSERT INTO `user_category` VALUES (156, 5, 65);
INSERT INTO `user_category` VALUES (157, 3, 76);
INSERT INTO `user_category` VALUES (158, 14, 52);
INSERT INTO `user_category` VALUES (159, 4, 57);
INSERT INTO `user_category` VALUES (160, 14, 65);
INSERT INTO `user_category` VALUES (161, 7, 86);
INSERT INTO `user_category` VALUES (162, 5, 82);
INSERT INTO `user_category` VALUES (163, 2, 61);
INSERT INTO `user_category` VALUES (164, 6, 82);
INSERT INTO `user_category` VALUES (165, 5, 83);
INSERT INTO `user_category` VALUES (166, 7, 42);
INSERT INTO `user_category` VALUES (167, 3, 24);
INSERT INTO `user_category` VALUES (168, 7, 43);
INSERT INTO `user_category` VALUES (169, 14, 83);
INSERT INTO `user_category` VALUES (170, 4, 37);
INSERT INTO `user_category` VALUES (171, 7, 54);
INSERT INTO `user_category` VALUES (172, 3, 91);
INSERT INTO `user_category` VALUES (173, 2, 27);
INSERT INTO `user_category` VALUES (174, 7, 64);
INSERT INTO `user_category` VALUES (175, 7, 56);
INSERT INTO `user_category` VALUES (176, 5, 68);
INSERT INTO `user_category` VALUES (177, 12, 61);
INSERT INTO `user_category` VALUES (178, 14, 74);
INSERT INTO `user_category` VALUES (179, 14, 84);
INSERT INTO `user_category` VALUES (180, 2, 86);
INSERT INTO `user_category` VALUES (181, 4, 74);
INSERT INTO `user_category` VALUES (182, 3, 25);
INSERT INTO `user_category` VALUES (183, 3, 42);
INSERT INTO `user_category` VALUES (184, 14, 77);
INSERT INTO `user_category` VALUES (185, 12, 98);
INSERT INTO `user_category` VALUES (186, 12, 39);
INSERT INTO `user_category` VALUES (187, 4, 38);
INSERT INTO `user_category` VALUES (188, 14, 41);
INSERT INTO `user_category` VALUES (189, 3, 82);
INSERT INTO `user_category` VALUES (190, 7, 33);
INSERT INTO `user_category` VALUES (191, 1, 41);
INSERT INTO `user_category` VALUES (192, 7, 24);
INSERT INTO `user_category` VALUES (193, 6, 65);
INSERT INTO `user_category` VALUES (194, 7, 80);
INSERT INTO `user_category` VALUES (195, 1, 36);
INSERT INTO `user_category` VALUES (196, 2, 84);
INSERT INTO `user_category` VALUES (197, 7, 28);
INSERT INTO `user_category` VALUES (198, 12, 33);
INSERT INTO `user_category` VALUES (199, 12, 91);
INSERT INTO `user_category` VALUES (200, 7, 45);
INSERT INTO `user_category` VALUES (201, 6, 81);
INSERT INTO `user_category` VALUES (202, 4, 29);
INSERT INTO `user_category` VALUES (203, 14, 36);

-- ----------------------------
-- Table structure for user_following
-- ----------------------------
DROP TABLE IF EXISTS `user_following`;
CREATE TABLE `user_following`  (
  `follower_id` bigint NOT NULL,
  `following_id` bigint NOT NULL,
  PRIMARY KEY (`follower_id`, `following_id`) USING BTREE,
  INDEX `FKj0avh5q4feap4g0rkus640u4d`(`following_id` ASC) USING BTREE,
  CONSTRAINT `FK1tjrot6g1jlserb1jr9hfo2v6` FOREIGN KEY (`follower_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKj0avh5q4feap4g0rkus640u4d` FOREIGN KEY (`following_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_following
-- ----------------------------
INSERT INTO `user_following` VALUES (58, 58);

-- ----------------------------
-- Table structure for user_images
-- ----------------------------
DROP TABLE IF EXISTS `user_images`;
CREATE TABLE `user_images`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NULL DEFAULT NULL,
  `upload_date` datetime NULL DEFAULT NULL,
  `url_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK2jg7uf46pq5ihgoj39y7phhy6`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK2jg7uf46pq5ihgoj39y7phhy6` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 51 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_images
-- ----------------------------
INSERT INTO `user_images` VALUES (7, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696429468/hm32hxwzc6nht1ychhco.png');
INSERT INTO `user_images` VALUES (8, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696429947/upad3ul26uatnmaetbhw.png');
INSERT INTO `user_images` VALUES (9, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430011/jcgeuydpjabkndqgm95c.png');
INSERT INTO `user_images` VALUES (10, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430132/xlgnucci8hblpwzdjpvp.png');
INSERT INTO `user_images` VALUES (11, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430209/jfoygum8n6dc97ggidjl.png');
INSERT INTO `user_images` VALUES (12, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430357/bqfp7dt3ajwjbnnqvfi6.png');
INSERT INTO `user_images` VALUES (13, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430491/yawle8487ygj6rqvk5hj.png');
INSERT INTO `user_images` VALUES (15, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430531/paslqrvv5czl0ap4gssq.png');
INSERT INTO `user_images` VALUES (16, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430585/zbxmxomjvn9udy5kv3jf.png');
INSERT INTO `user_images` VALUES (17, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430643/wxm22ftzen4iwvuk9pvz.png');
INSERT INTO `user_images` VALUES (18, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430963/bmhkpcztndycn3riugz9.png');
INSERT INTO `user_images` VALUES (19, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696431126/weix6yidvlhjwwy80lst.png');
INSERT INTO `user_images` VALUES (20, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696431202/nnyj67hwfd1yyn3w8i9z.png');
INSERT INTO `user_images` VALUES (21, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696431398/urdp6hqrlrqjqa1rcxq4.png');
INSERT INTO `user_images` VALUES (22, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696431642/edza1md7d46i5s6pnyrk.png');
INSERT INTO `user_images` VALUES (23, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696433834/ccmimwqpbqabu4jxx8tc.png');
INSERT INTO `user_images` VALUES (24, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696434215/aenkmweocihwy2ykugw2.png');
INSERT INTO `user_images` VALUES (25, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696434436/blkg1qv1e55wuxkpwgrf.png');
INSERT INTO `user_images` VALUES (26, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696434552/w0wmsvqrvvujqeexmnia.png');
INSERT INTO `user_images` VALUES (27, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696434596/wnapjauc2fcftqx3910n.png');
INSERT INTO `user_images` VALUES (28, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696434629/wtq7uytvy8opobj5xcil.png');
INSERT INTO `user_images` VALUES (29, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696469307/dgk5l2wvlwbmwrrlrg9m.png');
INSERT INTO `user_images` VALUES (30, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696469341/x8aeciuutivrllusnmbk.png');
INSERT INTO `user_images` VALUES (31, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696469482/gf98qzua3vzhow8nnijk.png');
INSERT INTO `user_images` VALUES (32, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696469507/oqk6dc5xcq2js29rtyex.png');
INSERT INTO `user_images` VALUES (33, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696469520/ev4gsfmkvhiw2xbobcn7.png');
INSERT INTO `user_images` VALUES (34, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696469751/ej5lbd6dnegqlnaubyvd.png');
INSERT INTO `user_images` VALUES (35, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696469837/wr8hj6tda97y4uu0mpjv.png');
INSERT INTO `user_images` VALUES (36, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696470059/xxegcmgq73knxmn3smo8.png');
INSERT INTO `user_images` VALUES (37, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696470068/gnorii7ufiyhlgif9dlj.png');
INSERT INTO `user_images` VALUES (38, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696470440/wxbedvak2rjv9dq3axn6.png');
INSERT INTO `user_images` VALUES (39, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696498660/y4u5gnjldljiudvt8go0.png');
INSERT INTO `user_images` VALUES (40, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696499051/hx7e2dxbza1gjtremmqp.jpg');
INSERT INTO `user_images` VALUES (41, 65, '2023-10-15 09:50:30', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697338445/zsfucnxcn8jcizmp86pp.jpg');
INSERT INTO `user_images` VALUES (42, 65, '2023-10-15 09:50:30', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697338713/aomrlankjm1nkzcdh0qo.png');
INSERT INTO `user_images` VALUES (43, 65, '2023-10-15 09:50:30', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697338896/vnkaf3v6s3ksay05fqub.jpg');
INSERT INTO `user_images` VALUES (44, 65, '2023-10-15 09:50:30', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697339276/ooyaozcuga2v2ht3so4x.png');
INSERT INTO `user_images` VALUES (45, 67, '2023-10-16 18:17:28', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697511638/r4wcsyhdnhf22yyospmr.jpg');
INSERT INTO `user_images` VALUES (46, 69, '2023-11-05 13:51:39', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1699167308/nbio56fa2naydxzysfbx.jpg');
INSERT INTO `user_images` VALUES (47, 67, '2023-10-16 18:17:28', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1699244048/mqe1rsa5smusegtf94gd.jpg');
INSERT INTO `user_images` VALUES (48, 67, '2023-10-16 18:17:28', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1699244054/tcsbbzaygndoirs3jsjw.jpg');
INSERT INTO `user_images` VALUES (49, 67, '2023-10-16 18:17:28', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1700016832/fl3qpdcljizks5aorutl.jpg');
INSERT INTO `user_images` VALUES (50, 69, '2023-11-05 13:51:39', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1700150796/t21fyzbogw1bx8s1kb9d.jpg');

-- ----------------------------
-- Table structure for verification_token
-- ----------------------------
DROP TABLE IF EXISTS `verification_token`;
CREATE TABLE `verification_token`  (
  `ID` int NOT NULL,
  `expiry_date` datetime NULL DEFAULT NULL,
  `is_used` bit(1) NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `User_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  INDEX `FK3asw9wnv76uxu3kr1ekq4i1ld`(`User_id` ASC) USING BTREE,
  CONSTRAINT `FKrdn0mss276m9jdobfhhn2qogw` FOREIGN KEY (`User_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of verification_token
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
