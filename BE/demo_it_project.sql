/*
 Navicat Premium Data Transfer

 Source Server         : My Sql
 Source Server Type    : MySQL
 Source Server Version : 80029
 Source Host           : localhost:3306
 Source Schema         : demo_it_project

 Target Server Type    : MySQL
 Target Server Version : 80029
 File Encoding         : 65001

 Date: 09/10/2023 20:19:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` bigint NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKda8tuywtf0gb6sedwk7la1pgi`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKda8tuywtf0gb6sedwk7la1pgi` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES (64, 'a', 22);
INSERT INTO `address` VALUES (65, 'b', 22);
INSERT INTO `address` VALUES (66, 'a', 22);
INSERT INTO `address` VALUES (67, 'b', 22);
INSERT INTO `address` VALUES (68, 'a', 22);
INSERT INTO `address` VALUES (69, 'b', 22);
INSERT INTO `address` VALUES (72, 'a', 22);
INSERT INTO `address` VALUES (73, 'b', 22);
INSERT INTO `address` VALUES (82, 'c', 22);
INSERT INTO `address` VALUES (83, 'd', 22);
INSERT INTO `address` VALUES (84, 'e', 22);
INSERT INTO `address` VALUES (85, 'df', 22);
INSERT INTO `address` VALUES (90, 'eyt', 22);
INSERT INTO `address` VALUES (91, 'ydfk', 22);
INSERT INTO `address` VALUES (96, 'eyat', 22);
INSERT INTO `address` VALUES (97, 'ydfka', 22);

-- ----------------------------
-- Table structure for block
-- ----------------------------
DROP TABLE IF EXISTS `block`;
CREATE TABLE `block`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_block` bigint NULL DEFAULT NULL,
  `user_is_block` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKlmr4dav1cu882ti5vrr4gfgfv`(`user_is_block` ASC) USING BTREE,
  INDEX `FKbwqtx5l97j6k5o7t0wosp76he`(`user_block` ASC) USING BTREE,
  CONSTRAINT `FKbwqtx5l97j6k5o7t0wosp76he` FOREIGN KEY (`user_block`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of block
-- ----------------------------
INSERT INTO `block` VALUES (8, 22, 4);
INSERT INTO `block` VALUES (9, 22, 4);
INSERT INTO `block` VALUES (10, 22, 4);
INSERT INTO `block` VALUES (11, 22, 6);
INSERT INTO `block` VALUES (12, 22, 2);

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog`  (
  `blog_id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `series_id` bigint NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `likes` decimal(19, 2) NULL DEFAULT NULL,
  `category_id` bigint NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `views` bigint NULL DEFAULT NULL,
  `create_date` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`blog_id`) USING BTREE,
  INDEX `FK_Own`(`user_id` ASC) USING BTREE,
  INDEX `FK7u8tmlwxnjvesb7um4mxsvsvc`(`series_id` ASC) USING BTREE,
  INDEX `FKqyvjif1i2geaeuvkh3n1jrnn4`(`category_id` ASC) USING BTREE,
  FULLTEXT INDEX `title`(`title`, `content`, `description`),
  CONSTRAINT `FK7u8tmlwxnjvesb7um4mxsvsvc` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKpxk2jtysqn41oop7lvxcp6dqq` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKqyvjif1i2geaeuvkh3n1jrnn4` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 87 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES (16, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (17, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (18, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (19, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (20, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (21, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (22, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (24, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (25, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (26, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (27, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (28, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (29, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (30, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (31, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (32, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (33, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (34, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (35, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (36, 'a', 'a', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (37, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (38, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (39, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (40, 'a', 'a', 22, 'a', 15, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695696875/qt7ylr4qkzga5nzcc1gz.jpg', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (41, 'a', 'a', 22, 'a', 15, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695696875/qt7ylr4qkzga5nzcc1gz.jpg-http://res.cloudinary.com/dmpru0wgq/image/upload/v1695779458/uoqu7wuvchhr9uu1c6hr.jpg', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (42, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (43, 'a', 'a', 22, 'a', 15, NULL, 50.00, 2, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (44, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (45, 'a', 'a', 22, 'a', NULL, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (46, 'a', 'a', 22, 'a', NULL, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (47, 'a', 'a', 22, 'a', NULL, NULL, 50.00, 2, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (48, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (49, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (50, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (51, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (52, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (53, 'a', 'a', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (55, 'a', 'a', 22, 'a', NULL, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (58, 'a', 'a', 22, 'a', 15, 'htttp', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (59, 'a', 'a', 22, 'a', 15, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (60, 'a', 'a', 22, 'a', 15, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (61, 'a', 'a', 22, 'a', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696434072/igddhmspl5x1xch4zifz.png', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (62, 'a', 'a', 22, 'a', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696516557/vyhcmfnilzdhu8ecszcr.jpg', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (63, 'a', 'a', 22, 'a', 15, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (64, 'a', 'a', 22, 'a', 15, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (65, 'a', 'a', 22, 'a', 17, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (66, 'a', 'a', 22, 'a', 17, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (67, 'a', 'a', 22, 'a', 17, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (68, 'a', 'a', 22, 'a', 18, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (69, 'a', 'a', 22, 'a', 18, 'htttp', 80.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (70, 'a', 'a', 22, 'a', 19, 'htttp', 80.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (71, 'a', 'a', 22, 'a', 20, 'htttp', 80.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (72, 'a', 'a', 22, 'a', 21, 'htttp', 80.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (73, 'a', 'a', 22, 'a', 22, 'htttp', 80.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (74, 'a', 'a', 22, 'a', 22, 'htttp', 80.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (75, 'a', 'a', 22, 'a', 22, 'htttp', 80.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (76, 'a', 'a', 22, 'a', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696758035/pwot24q6w5x7x6ztleoe.jpg', 80.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (77, 'a', 'a', 22, 'a', NULL, '', 80.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (78, 'a', 'a', 22, 'a', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696761711/tfbgaucqj1g35bcrni9g.jpg', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (79, 'a', 'a', 22, 'a', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696761920/y1bbelltdqaegovphug1.jpg', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (80, 'a', 'a', 22, 'a', 22, 'htttp', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (81, 'a', 'a', 22, 'a', 22, 'htttp', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (90, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 22, 'htttp', 0.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (91, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 22, 'htttp', 0.00, 1, 1, 0, '2023-09-25 21:58:51.000000');

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
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_comment
-- ----------------------------
INSERT INTO `blog_comment` VALUES (1, 49, 2);
INSERT INTO `blog_comment` VALUES (2, 49, 8);
INSERT INTO `blog_comment` VALUES (3, 49, 9);
INSERT INTO `blog_comment` VALUES (4, 49, 10);
INSERT INTO `blog_comment` VALUES (5, 49, 11);
INSERT INTO `blog_comment` VALUES (6, 59, 12);
INSERT INTO `blog_comment` VALUES (7, 59, 13);
INSERT INTO `blog_comment` VALUES (8, 59, 14);

-- ----------------------------
-- Table structure for blog_image
-- ----------------------------
DROP TABLE IF EXISTS `blog_image`;
CREATE TABLE `blog_image`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `upload_date` datetime(6) NULL DEFAULT NULL,
  `url_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `blog_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `blog_id`(`blog_id` ASC) USING BTREE,
  CONSTRAINT `blog_image_ibfk_1` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 198 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_image
-- ----------------------------
INSERT INTO `blog_image` VALUES (178, '2023-08-30 16:13:47.593000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693386819/unobodpsafippwebz1z1.jpg', 24);
INSERT INTO `blog_image` VALUES (179, '2023-08-30 16:13:47.605000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693386823/pqo5hypdotlkdwfowxto.jpg', 24);
INSERT INTO `blog_image` VALUES (180, '2023-08-30 16:26:05.577000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693387558/vtn6ngzyabisjujzxrrs.jpg', 25);
INSERT INTO `blog_image` VALUES (181, '2023-09-24 20:03:30.618000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695560513/ptt6wfmyu8xmojuhqwb2.jpg', 27);
INSERT INTO `blog_image` VALUES (182, '2023-09-24 20:03:30.629000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695560589/ukqlcfb9zpp4ap24kqly.jpg', 27);
INSERT INTO `blog_image` VALUES (183, '2023-09-25 10:22:39.579000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695612028/zdmxj5mxwvlkdyso5kbr.jpg', 28);
INSERT INTO `blog_image` VALUES (184, '2023-09-26 08:16:23.909000', 'http://res.cloudinary.com/dmpru0wgq/video/upload/v1695690960/myfolder.mp4', 39);
INSERT INTO `blog_image` VALUES (185, '2023-09-26 08:16:23.919000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695690969/zjcf8iezoldqbyu4y0ke.jpg', 39);
INSERT INTO `blog_image` VALUES (186, '2023-09-27 08:51:05.917000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695736902/lv3flzhkzwg8cy1m2lht.jpg', 41);
INSERT INTO `blog_image` VALUES (187, '2023-09-27 08:51:05.923000', 'http://res.cloudinary.com/dmpru0wgq/video/upload/v1695779307/myfolder.mp4', 41);
INSERT INTO `blog_image` VALUES (188, '2023-09-27 08:51:05.927000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695779395/uvv63tufgkljycgyayvu.jpg', 41);
INSERT INTO `blog_image` VALUES (189, '2023-09-27 08:51:05.932000', 'null', 41);
INSERT INTO `blog_image` VALUES (190, '2023-09-29 11:46:19.922000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695912581/mhhsuaie8gyuouu1lkme.jpg', 42);
INSERT INTO `blog_image` VALUES (191, '2023-09-29 11:46:19.936000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695912597/zeusqckn5hbxbwu6xajn.jpg', 42);
INSERT INTO `blog_image` VALUES (192, '2023-09-29 21:56:11.018000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695999347/gaegwtmvxs2ac7taavdo.jpg', 48);
INSERT INTO `blog_image` VALUES (193, '2023-09-29 21:56:11.031000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695999356/glnwuepffyredtb28g18.jpg', 48);
INSERT INTO `blog_image` VALUES (195, '2023-10-08 18:05:40.853000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696757915/rwp8yzhzgaixl9zytbbh.png', 80);
INSERT INTO `blog_image` VALUES (196, '2023-10-08 18:05:40.864000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696757920/sudgnfjhd6lff3mgxhmb.png', 80);
INSERT INTO `blog_image` VALUES (197, '2023-10-08 18:05:40.871000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696758325/el0hgf1akifgmx3s1ufo.png', 80);

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
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_like
-- ----------------------------
INSERT INTO `blog_like` VALUES (2, 43, 58);
INSERT INTO `blog_like` VALUES (12, 42, 58);

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
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_save
-- ----------------------------
INSERT INTO `blog_save` VALUES (6, 43, 58);
INSERT INTO `blog_save` VALUES (8, 32, 58);

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_tag
-- ----------------------------
INSERT INTO `blog_tag` VALUES (58, 1);
INSERT INTO `blog_tag` VALUES (58, 2);
INSERT INTO `blog_tag` VALUES (58, 3);
INSERT INTO `blog_tag` VALUES (59, 1);
INSERT INTO `blog_tag` VALUES (59, 2);
INSERT INTO `blog_tag` VALUES (59, 3);
INSERT INTO `blog_tag` VALUES (60, 1);
INSERT INTO `blog_tag` VALUES (60, 2);
INSERT INTO `blog_tag` VALUES (60, 3);
INSERT INTO `blog_tag` VALUES (61, 2);
INSERT INTO `blog_tag` VALUES (61, 3);
INSERT INTO `blog_tag` VALUES (62, 2);
INSERT INTO `blog_tag` VALUES (47, 1);
INSERT INTO `blog_tag` VALUES (47, 2);
INSERT INTO `blog_tag` VALUES (47, 3);
INSERT INTO `blog_tag` VALUES (63, 1);
INSERT INTO `blog_tag` VALUES (63, 2);
INSERT INTO `blog_tag` VALUES (63, 3);
INSERT INTO `blog_tag` VALUES (64, 1);
INSERT INTO `blog_tag` VALUES (64, 2);
INSERT INTO `blog_tag` VALUES (64, 3);
INSERT INTO `blog_tag` VALUES (65, 1);
INSERT INTO `blog_tag` VALUES (65, 2);
INSERT INTO `blog_tag` VALUES (65, 3);
INSERT INTO `blog_tag` VALUES (66, 1);
INSERT INTO `blog_tag` VALUES (66, 2);
INSERT INTO `blog_tag` VALUES (66, 3);
INSERT INTO `blog_tag` VALUES (67, 1);
INSERT INTO `blog_tag` VALUES (67, 2);
INSERT INTO `blog_tag` VALUES (67, 3);
INSERT INTO `blog_tag` VALUES (68, 1);
INSERT INTO `blog_tag` VALUES (68, 2);
INSERT INTO `blog_tag` VALUES (68, 3);
INSERT INTO `blog_tag` VALUES (69, 1);
INSERT INTO `blog_tag` VALUES (69, 2);
INSERT INTO `blog_tag` VALUES (69, 3);
INSERT INTO `blog_tag` VALUES (70, 1);
INSERT INTO `blog_tag` VALUES (70, 2);
INSERT INTO `blog_tag` VALUES (70, 3);
INSERT INTO `blog_tag` VALUES (71, 1);
INSERT INTO `blog_tag` VALUES (71, 2);
INSERT INTO `blog_tag` VALUES (71, 3);
INSERT INTO `blog_tag` VALUES (72, 1);
INSERT INTO `blog_tag` VALUES (72, 2);
INSERT INTO `blog_tag` VALUES (72, 3);
INSERT INTO `blog_tag` VALUES (73, 1);
INSERT INTO `blog_tag` VALUES (73, 2);
INSERT INTO `blog_tag` VALUES (73, 3);
INSERT INTO `blog_tag` VALUES (74, 1);
INSERT INTO `blog_tag` VALUES (74, 2);
INSERT INTO `blog_tag` VALUES (74, 3);
INSERT INTO `blog_tag` VALUES (75, 1);
INSERT INTO `blog_tag` VALUES (75, 2);
INSERT INTO `blog_tag` VALUES (75, 3);
INSERT INTO `blog_tag` VALUES (76, 2);
INSERT INTO `blog_tag` VALUES (76, 3);
INSERT INTO `blog_tag` VALUES (77, 1);
INSERT INTO `blog_tag` VALUES (77, 3);
INSERT INTO `blog_tag` VALUES (78, 1);
INSERT INTO `blog_tag` VALUES (78, 2);
INSERT INTO `blog_tag` VALUES (78, 3);
INSERT INTO `blog_tag` VALUES (79, 2);
INSERT INTO `blog_tag` VALUES (79, 3);
INSERT INTO `blog_tag` VALUES (80, 1);
INSERT INTO `blog_tag` VALUES (80, 2);
INSERT INTO `blog_tag` VALUES (80, 3);
INSERT INTO `blog_tag` VALUES (81, 1);
INSERT INTO `blog_tag` VALUES (81, 2);
INSERT INTO `blog_tag` VALUES (81, 3);
INSERT INTO `blog_tag` VALUES (90, 1);
INSERT INTO `blog_tag` VALUES (90, 2);
INSERT INTO `blog_tag` VALUES (90, 3);
INSERT INTO `blog_tag` VALUES (91, 1);
INSERT INTO `blog_tag` VALUES (91, 2);
INSERT INTO `blog_tag` VALUES (91, 3);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  FULLTEXT INDEX `name`(`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'A');
INSERT INTO `category` VALUES (2, 'b');
INSERT INTO `category` VALUES (3, 'C');

-- ----------------------------
-- Table structure for category_tag
-- ----------------------------
DROP TABLE IF EXISTS `category_tag`;
CREATE TABLE `category_tag`  (
  `category_id` bigint NOT NULL,
  `tag_id` bigint NOT NULL,
  PRIMARY KEY (`category_id`, `tag_id`) USING BTREE,
  INDEX `FK7ajcceshl0yansk0i3kkiv53l`(`tag_id` ASC) USING BTREE,
  CONSTRAINT `FK7ajcceshl0yansk0i3kkiv53l` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKa87fb70v74ldqt14lmsm68j73` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category_tag
-- ----------------------------
INSERT INTO `category_tag` VALUES (1, 1);
INSERT INTO `category_tag` VALUES (1, 2);
INSERT INTO `category_tag` VALUES (1, 3);

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `parent_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKde3rfu96lep00br5ov0mdieyt`(`parent_id` ASC) USING BTREE,
  CONSTRAINT `FKde3rfu96lep00br5ov0mdieyt` FOREIGN KEY (`parent_id`) REFERENCES `comment` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (1, 'aafaf', NULL);
INSERT INTO `comment` VALUES (2, 'aafaf', NULL);
INSERT INTO `comment` VALUES (3, 'aafaf', NULL);
INSERT INTO `comment` VALUES (4, 'aafaf', NULL);
INSERT INTO `comment` VALUES (5, 'aafaf', NULL);
INSERT INTO `comment` VALUES (6, 'aafaf', NULL);
INSERT INTO `comment` VALUES (7, 'aafaf', NULL);
INSERT INTO `comment` VALUES (8, 'aafaf', NULL);
INSERT INTO `comment` VALUES (9, 'aafaf', NULL);
INSERT INTO `comment` VALUES (10, 'aafaf', NULL);
INSERT INTO `comment` VALUES (11, 'aafaf', NULL);
INSERT INTO `comment` VALUES (12, 'aafaf', 10);
INSERT INTO `comment` VALUES (13, 'aafaf', 10);
INSERT INTO `comment` VALUES (14, 'aafaf', 10);

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NULL DEFAULT NULL,
  `company` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `company_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of company
-- ----------------------------

-- ----------------------------
-- Table structure for country
-- ----------------------------
DROP TABLE IF EXISTS `country`;
CREATE TABLE `country`  (
  `id` bigint NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKd6qcbtlg5wggwhit1qs0mti2i`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKd6qcbtlg5wggwhit1qs0mti2i` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of country
-- ----------------------------
INSERT INTO `country` VALUES (76, 'a', 22);
INSERT INTO `country` VALUES (77, 'b', 22);
INSERT INTO `country` VALUES (88, 'aa', 22);
INSERT INTO `country` VALUES (89, 'ba', 22);
INSERT INTO `country` VALUES (94, 'ata', 22);
INSERT INTO `country` VALUES (95, 'tba', 22);
INSERT INTO `country` VALUES (100, 'aata', 22);
INSERT INTO `country` VALUES (101, 'tbaa', 22);

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
INSERT INTO `hibernate_sequence` VALUES (3);

-- ----------------------------
-- Table structure for refreshtoken
-- ----------------------------
DROP TABLE IF EXISTS `refreshtoken`;
CREATE TABLE `refreshtoken`  (
  `id` bigint NOT NULL,
  `expiry_date` datetime(6) NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_or156wbneyk8noo4jstv55ii3`(`token` ASC) USING BTREE,
  INDEX `FKfr75ge3iecdx26qe8afh1srf6`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKfr75ge3iecdx26qe8afh1srf6` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of refreshtoken
-- ----------------------------
INSERT INTO `refreshtoken` VALUES (1, '2023-10-10 14:56:34.407000', '14c6de94-8f3f-4d66-acb0-ddf4f39abdbc', 58);
INSERT INTO `refreshtoken` VALUES (2, '2023-10-10 15:08:18.184000', '4a4f1c66-88e4-41d6-9a14-8bb16fd50990', 58);
INSERT INTO `refreshtoken` VALUES (17, '2023-08-28 00:27:08.816000', 'a7fa694f-f715-40fa-bb21-969999605a37', 20);
INSERT INTO `refreshtoken` VALUES (18, '2023-08-28 00:28:53.866000', '1164de7b-4c4c-4ad5-9926-31fc10f40127', 20);
INSERT INTO `refreshtoken` VALUES (19, '2023-08-28 00:46:22.208000', 'dc1cbeaa-8b97-4707-a707-38c29e2e7be7', 20);
INSERT INTO `refreshtoken` VALUES (20, '2023-08-28 00:58:37.694000', 'e4856d98-49ef-4f66-a903-d5b513144977', 20);
INSERT INTO `refreshtoken` VALUES (21, '2023-08-28 01:01:49.256000', '4451a852-626d-4dc3-b178-72c795ba6146', 20);
INSERT INTO `refreshtoken` VALUES (22, '2023-08-28 01:10:28.738000', '800073d6-6205-477a-b667-cbbdc0c78782', 20);
INSERT INTO `refreshtoken` VALUES (23, '2023-08-28 01:15:45.911000', '749a353a-0980-4854-9ee0-ee26b18b9624', 20);
INSERT INTO `refreshtoken` VALUES (24, '2023-08-28 01:16:00.056000', '44987708-3c78-4820-ad51-aaaf64e35eab', 20);
INSERT INTO `refreshtoken` VALUES (25, '2023-08-28 01:16:44.365000', 'c5310fb2-c8ae-4a5c-8cf1-7d5754930022', 20);
INSERT INTO `refreshtoken` VALUES (26, '2023-08-28 01:17:39.153000', '7d81568a-9cb2-4211-b919-d9e4f90547b3', 22);
INSERT INTO `refreshtoken` VALUES (27, '2023-08-28 01:18:47.058000', 'bda578d7-db60-4752-a297-feaf77a9aa2e', 22);
INSERT INTO `refreshtoken` VALUES (28, '2023-08-28 01:22:13.541000', '72921f59-70af-4b5d-804b-946b98daf4d0', 22);
INSERT INTO `refreshtoken` VALUES (29, '2023-08-28 01:30:40.611000', '9228a4e1-588c-454c-8151-749b447311a5', 22);
INSERT INTO `refreshtoken` VALUES (30, '2023-08-28 01:35:39.234000', 'd9cab5fc-4698-4258-bea9-09ba1a11149f', 22);
INSERT INTO `refreshtoken` VALUES (31, '2023-08-28 01:35:47.795000', '0a7374fa-709d-4b7d-b94d-22f6f0804426', 22);
INSERT INTO `refreshtoken` VALUES (32, '2023-08-28 01:36:20.769000', '5b219395-fa2a-44f2-976e-119e6147cf36', 22);
INSERT INTO `refreshtoken` VALUES (33, '2023-08-28 01:41:18.678000', 'eeb438e3-9beb-485a-b92e-aaa169cb3bb1', 22);
INSERT INTO `refreshtoken` VALUES (34, '2023-08-28 01:51:14.686000', '59ca8547-983b-4c1f-910d-fe003503b8a9', 22);
INSERT INTO `refreshtoken` VALUES (35, '2023-08-28 01:57:34.196000', '0fad9c40-6ca5-47b7-9ebf-b88738d768a4', 22);
INSERT INTO `refreshtoken` VALUES (36, '2023-08-28 08:35:51.581000', '9aacc9e2-e1a0-40aa-afa0-33ab51d39d8f', 22);
INSERT INTO `refreshtoken` VALUES (37, '2023-08-28 09:13:58.680000', 'f4670390-05b5-4ee2-97b1-4591caaf60e1', 22);
INSERT INTO `refreshtoken` VALUES (39, '2023-08-28 09:16:39.821000', '785d037c-0978-41a5-bf7d-844185b5f2a2', 22);
INSERT INTO `refreshtoken` VALUES (40, '2023-08-28 09:18:05.105000', '1de95a03-eccb-4acd-bf90-0bc43fe0c302', 22);
INSERT INTO `refreshtoken` VALUES (41, '2023-08-28 09:19:12.408000', '6e213102-6ea0-4e0a-a189-fc299cc463c4', 22);
INSERT INTO `refreshtoken` VALUES (43, '2023-08-28 09:22:27.342000', 'fa45e626-a3e7-4b5e-84bc-3ab2637859ad', 22);
INSERT INTO `refreshtoken` VALUES (45, '2023-08-28 09:24:40.356000', 'e08d6ab7-853c-45b0-b65e-56680c06779d', 22);
INSERT INTO `refreshtoken` VALUES (47, '2023-08-28 09:34:02.833000', '4309f60e-374d-494d-947f-9a10d8914304', 22);
INSERT INTO `refreshtoken` VALUES (48, '2023-08-28 13:25:03.999000', 'ee5882ee-b599-4529-900d-7b48cff63485', 22);
INSERT INTO `refreshtoken` VALUES (51, '2023-08-30 14:46:09.032000', 'a136044e-da2a-4b93-bce1-b4cf66a9222f', 22);
INSERT INTO `refreshtoken` VALUES (52, '2023-08-30 21:34:56.495000', '3b6ededc-98f1-40f9-a588-a88a3dea17ba', 22);
INSERT INTO `refreshtoken` VALUES (53, '2023-08-30 21:36:53.478000', 'ab5c8a38-22b4-48a9-b474-2ddf9cbb614b', 22);
INSERT INTO `refreshtoken` VALUES (54, '2023-08-31 09:36:40.219000', 'a9ede7bb-4677-478b-a782-2bbbeadf82c2', 22);
INSERT INTO `refreshtoken` VALUES (55, '2023-08-31 14:36:19.542000', '38444c6b-eaf2-4589-b1ac-79d7156ae8cb', 22);
INSERT INTO `refreshtoken` VALUES (56, '2023-09-06 13:40:58.568000', '26ee8082-7060-4c10-9cf9-cb57aa0343a9', 22);
INSERT INTO `refreshtoken` VALUES (57, '2023-09-06 13:41:33.304000', 'a2cb2e8d-66c7-4bb3-a8f8-9b9a97f697a1', 22);
INSERT INTO `refreshtoken` VALUES (58, '2023-09-06 20:31:46.107000', '861c00d7-d945-41d1-98f8-94b55ab68098', 22);
INSERT INTO `refreshtoken` VALUES (59, '2023-09-07 09:12:21.396000', '300fd0fb-caff-413b-8854-04ef79ec607b', 22);
INSERT INTO `refreshtoken` VALUES (60, '2023-09-07 09:14:47.833000', '7d1f6e3b-e66e-41f0-a165-989cf040f262', 22);
INSERT INTO `refreshtoken` VALUES (61, '2023-09-07 09:15:15.055000', 'c49a622d-b126-42cc-87ae-e3ea120d5f4d', 22);
INSERT INTO `refreshtoken` VALUES (62, '2023-09-07 09:37:48.038000', '35c3d7d1-f29b-4dbd-8bff-38f7d713ee7f', 22);
INSERT INTO `refreshtoken` VALUES (63, '2023-09-07 10:58:04.987000', 'd28957b0-d1fe-42fb-845b-9291d6a83c4c', 22);
INSERT INTO `refreshtoken` VALUES (78, '2023-09-07 12:24:03.682000', 'beaa8c3f-cdb9-4e6c-be98-c98e9dbaaf8e', 22);
INSERT INTO `refreshtoken` VALUES (79, '2023-09-07 12:25:08.023000', '2b02bbcf-ae7d-4112-af70-f62d6fb681e1', 22);
INSERT INTO `refreshtoken` VALUES (81, '2023-09-08 08:54:31.954000', '241501b2-5a07-4967-b60d-a5fe868d6c0b', 22);
INSERT INTO `refreshtoken` VALUES (104, '2023-09-09 08:50:56.431000', 'b91b21be-a5f4-4fbd-8480-db3bfd805b7d', 22);
INSERT INTO `refreshtoken` VALUES (106, '2023-09-09 09:24:45.243000', '43d7add1-bdcd-401e-bfa9-e9fd74db34f5', 22);
INSERT INTO `refreshtoken` VALUES (107, '2023-09-11 16:45:07.338000', '5b2446f3-4930-4e43-bd37-4b56073f7330', 22);
INSERT INTO `refreshtoken` VALUES (108, '2023-09-11 16:45:23.372000', '9aa40aa4-4fd3-4f36-9af2-b39054adb1c5', 22);
INSERT INTO `refreshtoken` VALUES (111, '2023-09-11 16:51:07.450000', 'e885f935-943c-4f37-9cd1-5ab58a0f45e1', 28);
INSERT INTO `refreshtoken` VALUES (112, '2023-09-11 17:27:13.476000', '28db3704-010f-4ad3-8bd5-1cdd9cae5997', 28);
INSERT INTO `refreshtoken` VALUES (113, '2023-09-11 17:33:10.283000', '509e1e87-f6bc-4a3b-9ccc-cf8f49fe35cb', 28);
INSERT INTO `refreshtoken` VALUES (114, '2023-09-11 17:33:55.674000', '5b097620-5edc-4f11-b974-c4da25305838', 28);
INSERT INTO `refreshtoken` VALUES (115, '2023-09-11 17:34:59.699000', '5350192a-b20a-476f-81f2-62a9465d746f', 28);
INSERT INTO `refreshtoken` VALUES (116, '2023-09-11 17:35:46.716000', 'f9ef2f00-eddf-4baf-84de-ef98920e075e', 28);
INSERT INTO `refreshtoken` VALUES (117, '2023-09-11 17:39:38.197000', '9473ed09-8569-4514-9461-902f041d899f', 28);
INSERT INTO `refreshtoken` VALUES (118, '2023-09-11 17:40:58.403000', '318418fb-f777-442a-8667-dc71b06d6803', 28);
INSERT INTO `refreshtoken` VALUES (119, '2023-09-11 17:41:54.896000', 'a1eb084a-bda3-4505-872c-1573e1317b85', 22);
INSERT INTO `refreshtoken` VALUES (120, '2023-09-11 17:41:58.464000', '718c3de4-3831-4876-95af-5fa7b63e50f9', 22);
INSERT INTO `refreshtoken` VALUES (121, '2023-09-11 17:42:09.511000', 'a300448b-fd64-4fb4-85bf-a9901298df9d', 22);
INSERT INTO `refreshtoken` VALUES (122, '2023-09-11 17:49:13.088000', 'f223f336-91b4-48e8-9ca1-0353a4a9cef0', 28);
INSERT INTO `refreshtoken` VALUES (123, '2023-09-11 17:49:21.607000', '9a8cb56a-c0ae-40d5-8c07-f9ed3dc5fa29', 22);
INSERT INTO `refreshtoken` VALUES (124, '2023-09-11 17:52:30.763000', 'f290c8e2-aba6-4a57-9a25-30e782623ff4', 22);
INSERT INTO `refreshtoken` VALUES (125, '2023-09-11 18:39:12.338000', '3d20e0ba-423f-4aaa-a812-fc4fb01a5aee', 22);
INSERT INTO `refreshtoken` VALUES (126, '2023-09-12 06:34:43.136000', '5662aa32-1042-4a94-b0d8-ce5cf16825cd', 22);
INSERT INTO `refreshtoken` VALUES (127, '2023-09-12 08:38:33.792000', 'f1db8f62-d0df-457d-937f-8d42345d7fd5', 22);
INSERT INTO `refreshtoken` VALUES (128, '2023-09-12 08:44:44.603000', '5c1a6970-a307-4e16-bfd6-5daff36fe3da', 22);
INSERT INTO `refreshtoken` VALUES (129, '2023-09-12 09:02:40.966000', 'dd074acb-1b70-4121-a08d-d8a7375f2c32', 22);
INSERT INTO `refreshtoken` VALUES (130, '2023-09-12 09:26:47.153000', 'ebb14d11-4677-4e48-a1bd-3d9fb2b1b141', 22);
INSERT INTO `refreshtoken` VALUES (132, '2023-09-12 13:49:00.673000', '3f2227a0-22ae-4df5-915c-dd2cea43de36', 29);
INSERT INTO `refreshtoken` VALUES (134, '2023-09-12 21:38:05.549000', '41c5789b-2e2e-4c96-b9d7-5f6a3008e923', 30);
INSERT INTO `refreshtoken` VALUES (151, '2023-09-13 11:55:26.097000', 'f8a3934d-01e2-41bc-b2d1-9186424cd76c', 45);
INSERT INTO `refreshtoken` VALUES (165, '2023-09-18 15:01:53.179000', '493190e6-d898-4b70-9fc8-fdb0fbc92887', 54);
INSERT INTO `refreshtoken` VALUES (167, '2023-09-18 19:13:56.953000', '12f60a59-a92d-4907-a3ad-225d20c6feff', 54);
INSERT INTO `refreshtoken` VALUES (172, '2023-09-18 19:54:32.207000', '98799816-bca9-43b8-a235-9fd9d711762a', 54);
INSERT INTO `refreshtoken` VALUES (173, '2023-09-18 19:55:22.757000', 'bb4b3e00-feb2-43d8-9e43-c24fd5a5aa7d', 52);
INSERT INTO `refreshtoken` VALUES (174, '2023-09-21 09:10:29.809000', '2d56c17a-e8ee-4ab6-80e6-0e27b49c3014', 52);
INSERT INTO `refreshtoken` VALUES (175, '2023-09-21 10:04:11.509000', '90e0c96b-f993-4581-84f7-c09230ed0572', 52);
INSERT INTO `refreshtoken` VALUES (176, '2023-09-21 10:04:47.000000', '26df3655-896b-4958-ad36-9f6e3b05f4b7', 52);
INSERT INTO `refreshtoken` VALUES (185, '2023-09-22 08:13:55.633000', '99b322f8-1ac6-4e3e-830e-bf2cd5af43d9', 52);
INSERT INTO `refreshtoken` VALUES (186, '2023-09-22 08:15:37.455000', '954a236b-28bc-45b9-bea8-47a0d69ae4cd', 52);
INSERT INTO `refreshtoken` VALUES (188, '2023-09-22 08:42:45.197000', '0dcde4f2-6a39-42e4-8a9f-b73cf053ccef', 56);
INSERT INTO `refreshtoken` VALUES (192, '2023-09-22 08:46:32.132000', '0cfb0ad9-1dd1-4005-8039-a28250c419ee', 57);
INSERT INTO `refreshtoken` VALUES (193, '2023-09-22 08:47:04.740000', 'eee13b7b-df8e-4544-8dfe-7317813dd788', 57);
INSERT INTO `refreshtoken` VALUES (195, '2023-09-22 08:51:45.119000', '6e78beca-7d54-438e-a5d1-935d0ae0df76', 58);
INSERT INTO `refreshtoken` VALUES (197, '2023-09-22 11:28:53.515000', 'a3e91560-3b66-4d59-96ba-5ab7df249989', 58);
INSERT INTO `refreshtoken` VALUES (198, '2023-09-22 11:29:10.225000', '0306f35e-23ae-4585-910b-55d2bb94a237', 58);
INSERT INTO `refreshtoken` VALUES (199, '2023-09-22 11:29:42.439000', 'bae88454-eb1a-4662-838e-0a644cb622bc', 58);
INSERT INTO `refreshtoken` VALUES (200, '2023-09-22 11:31:18.465000', '26c42f72-69b8-4cbc-be90-3a91c28056e5', 58);
INSERT INTO `refreshtoken` VALUES (201, '2023-09-22 11:31:19.875000', '9788d0ef-5289-4e76-8736-1320a450bef8', 58);
INSERT INTO `refreshtoken` VALUES (202, '2023-09-22 11:31:20.312000', '60c1446f-b887-47ca-8b6a-4c381bd90d2a', 58);
INSERT INTO `refreshtoken` VALUES (203, '2023-09-22 11:31:20.701000', 'c068577c-e6ff-4936-9701-4028a2a0502f', 58);
INSERT INTO `refreshtoken` VALUES (204, '2023-09-22 14:22:21.491000', '88f3c196-98ab-4f90-a119-0f4238f99580', 58);
INSERT INTO `refreshtoken` VALUES (206, '2023-09-22 14:23:20.955000', '270f4236-95c1-489b-97ba-3e908486475f', 58);
INSERT INTO `refreshtoken` VALUES (207, '2023-09-22 14:23:48.380000', 'a3c09a05-4715-4009-8597-d28c0525bda8', 58);
INSERT INTO `refreshtoken` VALUES (209, '2023-09-22 14:24:34.812000', '79fff5eb-9b34-482f-a462-baa9e3a4c060', 58);
INSERT INTO `refreshtoken` VALUES (210, '2023-09-22 14:27:24.270000', '9b2c228c-adf0-4c9a-bafb-b9f69727e875', 58);
INSERT INTO `refreshtoken` VALUES (211, '2023-09-22 14:27:55.147000', '2c82d83e-25f5-43a0-b46d-5546d7a8bc09', 58);
INSERT INTO `refreshtoken` VALUES (212, '2023-09-22 14:27:57.782000', 'da84a26f-888c-4d6d-b337-3a0f4f3ce489', 58);
INSERT INTO `refreshtoken` VALUES (213, '2023-09-22 14:27:59.718000', '8360f071-37b7-4cde-8815-1a692d848a13', 58);
INSERT INTO `refreshtoken` VALUES (214, '2023-09-22 14:32:58.705000', '1240f408-be92-44b3-ae8a-000249183105', 58);
INSERT INTO `refreshtoken` VALUES (215, '2023-09-22 14:33:37.291000', 'ba9ca59e-c28b-4765-853b-69207643c7e9', 58);
INSERT INTO `refreshtoken` VALUES (216, '2023-09-23 12:14:07.095000', '60814102-e353-4abe-b2e2-945c028c6ffd', 58);
INSERT INTO `refreshtoken` VALUES (217, '2023-09-23 12:14:46.264000', 'da4076ac-cf9b-46b9-a133-338bbc261d32', 58);
INSERT INTO `refreshtoken` VALUES (218, '2023-09-23 12:15:03.072000', '59fd6df4-5914-49ba-b8e1-e31e53d98ac6', 58);
INSERT INTO `refreshtoken` VALUES (219, '2023-09-23 14:15:41.590000', '271ea258-8143-45c0-937f-2726648c8d1d', 58);
INSERT INTO `refreshtoken` VALUES (220, '2023-09-23 14:18:11.928000', 'ca7fa993-eaf1-4b45-ae6d-85550fd63a70', 58);
INSERT INTO `refreshtoken` VALUES (221, '2023-09-23 14:18:46.605000', '71bad618-92d3-407a-8670-54de48b2d843', 58);
INSERT INTO `refreshtoken` VALUES (222, '2023-09-23 14:20:03.842000', 'ec92c925-f701-40da-8b75-eca876fd19a9', 58);
INSERT INTO `refreshtoken` VALUES (223, '2023-09-23 14:23:40.126000', '3fa7ba43-1536-4c9e-b05a-e40bca1bb233', 58);
INSERT INTO `refreshtoken` VALUES (224, '2023-09-23 14:27:19.911000', 'c9bc0b0c-4f69-4063-b28b-396e5c1d0e69', 58);
INSERT INTO `refreshtoken` VALUES (225, '2023-09-23 14:27:22.980000', '0bd1d071-64e5-4684-b217-cc3366b5c2db', 58);
INSERT INTO `refreshtoken` VALUES (226, '2023-09-23 14:32:16.932000', '1ba9e322-8a55-4ece-93c5-fc3324fb549b', 58);
INSERT INTO `refreshtoken` VALUES (227, '2023-09-23 14:49:29.964000', '51a7b2af-d05c-4726-a0c0-18fd8fc43890', 52);
INSERT INTO `refreshtoken` VALUES (228, '2023-09-23 14:49:30.587000', 'd6034b39-3884-49fe-9ad3-aee06d44ff21', 52);
INSERT INTO `refreshtoken` VALUES (229, '2023-09-23 14:49:32.366000', '8cb275fd-a5a6-4930-b012-f690b594dd37', 52);
INSERT INTO `refreshtoken` VALUES (230, '2023-09-23 14:49:33.200000', '09836232-5787-47fa-9c82-a27e80e4dc42', 52);
INSERT INTO `refreshtoken` VALUES (231, '2023-09-23 14:49:34.001000', 'eef09444-1a2f-449c-815d-b70d6148efa0', 52);
INSERT INTO `refreshtoken` VALUES (232, '2023-09-23 14:49:34.936000', 'b4d202e2-2657-4496-ab39-d5944c7d4be5', 52);
INSERT INTO `refreshtoken` VALUES (233, '2023-09-25 09:00:26.077000', '55510419-37b0-4c74-b2ea-9adff58f23d9', 58);
INSERT INTO `refreshtoken` VALUES (234, '2023-09-25 09:00:30.643000', 'd2dee5ae-e056-4cd0-94df-87d7cd59be4a', 58);
INSERT INTO `refreshtoken` VALUES (235, '2023-09-25 09:00:44.103000', '2a5d8e5d-4d97-4195-99aa-53e4c9def124', 58);
INSERT INTO `refreshtoken` VALUES (236, '2023-09-25 09:01:22.511000', '70b947c5-b82b-4024-bc41-03d41abdead9', 58);
INSERT INTO `refreshtoken` VALUES (237, '2023-09-25 09:02:05.876000', '26459009-2575-4ac4-b8b2-23f17f5762ac', 58);
INSERT INTO `refreshtoken` VALUES (238, '2023-09-25 09:02:07.006000', 'e04a7dd8-d9f9-4579-997d-3074fc992a5b', 58);
INSERT INTO `refreshtoken` VALUES (239, '2023-09-25 09:02:26.256000', '934664d0-424a-4367-b7bb-59aa47c04755', 58);
INSERT INTO `refreshtoken` VALUES (240, '2023-09-25 09:02:51.405000', 'eb4a7296-011e-44e1-9f95-0853274e53c0', 58);
INSERT INTO `refreshtoken` VALUES (241, '2023-09-25 09:02:52.852000', '68ba5bdb-755e-42e8-8f0f-a608020dff01', 58);
INSERT INTO `refreshtoken` VALUES (242, '2023-09-25 09:02:53.029000', '077fff0b-731d-4a4d-9a40-58039fe1caaa', 58);
INSERT INTO `refreshtoken` VALUES (243, '2023-09-25 09:02:53.229000', 'f47f2084-f22e-46f7-b08d-6f4d5b7d0a1b', 58);
INSERT INTO `refreshtoken` VALUES (244, '2023-09-25 09:02:53.441000', '25460646-2b67-4d75-965b-44c76f938636', 58);
INSERT INTO `refreshtoken` VALUES (245, '2023-09-25 09:02:53.662000', '1988aa06-835c-4ef1-b7f6-080c98bfc3ad', 58);
INSERT INTO `refreshtoken` VALUES (246, '2023-09-25 09:02:53.990000', 'e460499f-007a-418a-8ac9-9a373bb8183c', 58);
INSERT INTO `refreshtoken` VALUES (247, '2023-09-25 09:02:54.166000', 'f1d93eb0-c95b-4fe7-beba-b32d9eaf428c', 58);
INSERT INTO `refreshtoken` VALUES (248, '2023-09-25 09:02:54.328000', 'e2ce0779-e724-492a-a985-8dd482c3bf95', 58);
INSERT INTO `refreshtoken` VALUES (249, '2023-09-25 09:02:54.506000', 'fad44271-b626-4bc3-8769-73fe63a05fc8', 58);
INSERT INTO `refreshtoken` VALUES (250, '2023-09-25 09:02:54.731000', '8c4c2a9a-042c-49ef-8a71-4ed59e61ca4b', 58);
INSERT INTO `refreshtoken` VALUES (251, '2023-09-25 09:02:56.702000', '2177ed07-b014-4fc2-8bcc-25dd28fc6fc4', 58);
INSERT INTO `refreshtoken` VALUES (252, '2023-09-25 11:57:36.735000', 'e01cd3d6-e390-403f-9859-dcb049048345', 58);
INSERT INTO `refreshtoken` VALUES (253, '2023-09-25 11:57:52.971000', '532ef4a4-8112-4006-9a95-bba70962b2ac', 58);
INSERT INTO `refreshtoken` VALUES (254, '2023-09-25 11:57:58.398000', '5825c7af-8073-41de-84ac-e23c3b4b2e63', 58);
INSERT INTO `refreshtoken` VALUES (255, '2023-09-25 11:58:00.444000', '0fdfdd51-3047-4d9e-8ad4-bd81e5868d5b', 58);
INSERT INTO `refreshtoken` VALUES (256, '2023-09-25 11:59:53.700000', '325c93e0-0841-4b74-b72b-94248eedeeed', 58);
INSERT INTO `refreshtoken` VALUES (257, '2023-09-25 12:02:45.738000', '0b9081e1-872f-4032-a696-db080be49cfe', 58);
INSERT INTO `refreshtoken` VALUES (258, '2023-09-25 12:04:59.718000', 'f0968e9f-af43-4040-8801-47eeb92b34a3', 52);
INSERT INTO `refreshtoken` VALUES (259, '2023-09-25 12:05:11.599000', 'e104c644-0a74-4639-8702-490639d7cbe4', 58);
INSERT INTO `refreshtoken` VALUES (260, '2023-09-25 12:06:16.478000', 'd9e22ffa-9bfb-4d6e-af6e-1f5538a6761b', 58);
INSERT INTO `refreshtoken` VALUES (261, '2023-09-25 12:06:17.275000', 'f6909ed6-8b94-4b7a-ad6b-0d65ac35ea59', 58);
INSERT INTO `refreshtoken` VALUES (262, '2023-09-25 12:06:17.547000', 'e69abb3c-61bf-48a6-b2d4-e6c28eb3b954', 58);
INSERT INTO `refreshtoken` VALUES (263, '2023-09-25 12:06:17.725000', '14c52e9c-f7b9-4683-b20e-d0f3019cb37d', 58);
INSERT INTO `refreshtoken` VALUES (264, '2023-09-25 12:06:17.933000', 'ac75000c-1b14-4f5b-b33f-35a8d779ad1a', 58);
INSERT INTO `refreshtoken` VALUES (265, '2023-09-25 12:06:18.128000', 'a738ec75-dbcb-4934-a95f-068bf709bfd0', 58);
INSERT INTO `refreshtoken` VALUES (266, '2023-09-25 12:06:31.567000', '5790cacb-b939-4127-9073-3081da636994', 58);
INSERT INTO `refreshtoken` VALUES (267, '2023-09-25 12:06:31.960000', '07cdb2d3-4dd4-4c88-9cae-d47568763e70', 58);
INSERT INTO `refreshtoken` VALUES (268, '2023-09-25 12:06:35.296000', '89523e52-0dbb-418d-afc0-2ce8428c2e17', 58);
INSERT INTO `refreshtoken` VALUES (270, '2023-09-25 12:08:18.989000', '1e3e2399-4bd4-496e-862a-465474b5de3d', 58);
INSERT INTO `refreshtoken` VALUES (271, '2023-09-25 12:08:20.112000', '907487e8-ef98-43ff-9a00-794b0fc0add0', 58);
INSERT INTO `refreshtoken` VALUES (272, '2023-09-25 12:08:26.112000', '68cdfacb-3667-47d8-803d-f1608c71a188', 58);
INSERT INTO `refreshtoken` VALUES (274, '2023-09-25 12:15:31.658000', '0dedcad2-f4a9-4501-9176-58a9f949537a', 58);
INSERT INTO `refreshtoken` VALUES (275, '2023-09-25 12:15:36.467000', '51c594b2-88f4-48c2-a3b9-609d85e83a16', 58);
INSERT INTO `refreshtoken` VALUES (276, '2023-09-25 12:15:49.975000', 'd9a67a10-5084-4a0e-a049-de51f1009d5a', 58);
INSERT INTO `refreshtoken` VALUES (283, '2023-09-25 16:59:20.547000', '50415358-7f26-4eb2-b922-358116a15b96', 58);
INSERT INTO `refreshtoken` VALUES (286, '2023-09-25 20:02:36.451000', 'baf6cba7-1112-4bfc-b932-ccd3918a4d38', 58);
INSERT INTO `refreshtoken` VALUES (290, '2023-09-25 20:31:44.178000', '3fd38791-c93e-4f52-85c4-dcfa59d94895', 58);
INSERT INTO `refreshtoken` VALUES (292, '2023-09-28 08:47:53.767000', '5f4ccbc9-eee9-43b0-8f47-1032f1bf85f7', 58);
INSERT INTO `refreshtoken` VALUES (295, '2023-10-03 14:55:50.064000', '802dffbb-acf8-4c96-8b6e-31168fc04d60', 58);
INSERT INTO `refreshtoken` VALUES (296, '2023-10-05 21:24:09.719000', '0046e73d-c552-43bc-96a0-0202d1bc90b8', 58);
INSERT INTO `refreshtoken` VALUES (298, '2023-10-05 22:36:55.093000', 'aa6a0efa-e6ed-43dd-95d2-ca403d8d8e85', 58);
INSERT INTO `refreshtoken` VALUES (300, '2023-10-06 08:28:05.124000', '60b7f4c4-49bc-4b73-87e6-6e03f1d4545a', 58);
INSERT INTO `refreshtoken` VALUES (301, '2023-10-06 16:41:06.066000', 'c0b63d77-f37e-43dd-8dbf-0bab1033f388', 58);
INSERT INTO `refreshtoken` VALUES (302, '2023-10-07 15:22:41.273000', '260c5366-ea6c-4a64-8f46-935d52fb8e80', 58);
INSERT INTO `refreshtoken` VALUES (303, '2023-10-07 19:32:04.695000', '3b6e44b3-6372-46ec-b103-6c6b001e6e35', 58);
INSERT INTO `refreshtoken` VALUES (304, '2023-10-08 16:17:33.197000', '1ebc896d-2075-4e3b-a4b2-95a2f0b88ef8', 58);
INSERT INTO `refreshtoken` VALUES (305, '2023-10-08 17:37:57.502000', 'e0856b5f-9dc7-42e0-8346-2e4c2e36af2a', 58);

-- ----------------------------
-- Table structure for reset_pass_token
-- ----------------------------
DROP TABLE IF EXISTS `reset_pass_token`;
CREATE TABLE `reset_pass_token`  (
  `id` bigint NOT NULL,
  `expiry_date` datetime NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKmy574xx51ui80x1wthxy55bad`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKmy574xx51ui80x1wthxy55bad` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reset_pass_token
-- ----------------------------
INSERT INTO `reset_pass_token` VALUES (10, '2023-08-26 00:00:00', '123497', 23);
INSERT INTO `reset_pass_token` VALUES (152, '2023-09-12 00:00:00', '257788', 45);
INSERT INTO `reset_pass_token` VALUES (154, '2023-09-12 00:00:00', '293271', 46);
INSERT INTO `reset_pass_token` VALUES (168, '2023-09-17 00:00:00', '452367', 52);
INSERT INTO `reset_pass_token` VALUES (169, '2023-09-17 00:00:00', '483377', 52);
INSERT INTO `reset_pass_token` VALUES (170, '2023-09-17 00:00:00', '853711', 52);
INSERT INTO `reset_pass_token` VALUES (171, '2023-09-17 00:00:00', '793002', 52);
INSERT INTO `reset_pass_token` VALUES (179, '2023-09-20 00:00:00', '968725', 52);
INSERT INTO `reset_pass_token` VALUES (180, '2023-09-20 00:00:00', '497456', 52);
INSERT INTO `reset_pass_token` VALUES (181, '2023-09-20 00:00:00', '344100', 52);
INSERT INTO `reset_pass_token` VALUES (182, '2023-09-20 00:00:00', '877665', 52);
INSERT INTO `reset_pass_token` VALUES (183, '2023-09-20 00:00:00', '195070', 52);
INSERT INTO `reset_pass_token` VALUES (184, '2023-09-21 00:00:00', '280364', 52);
INSERT INTO `reset_pass_token` VALUES (189, '2023-09-21 00:00:00', '1009647', 56);
INSERT INTO `reset_pass_token` VALUES (191, '2023-09-21 00:00:00', '863917', 57);
INSERT INTO `reset_pass_token` VALUES (196, '2023-09-21 00:00:00', '105469', 58);
INSERT INTO `reset_pass_token` VALUES (205, '2023-09-21 00:00:00', '719962', 58);
INSERT INTO `reset_pass_token` VALUES (208, '2023-09-21 00:00:00', '408113', 58);

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_epk9im9l9q67xmwi4hbed25do`(`name` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'ADMIN');
INSERT INTO `role` VALUES (2, 'USER');

-- ----------------------------
-- Table structure for school
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school`  (
  `id` bigint NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `status` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK8w29xem752br0p84wh9h1lble`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK8w29xem752br0p84wh9h1lble` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES (74, 'a', 22, NULL);
INSERT INTO `school` VALUES (75, 'b', 22, NULL);
INSERT INTO `school` VALUES (86, 'ca', 22, NULL);
INSERT INTO `school` VALUES (87, 'bc', 22, NULL);
INSERT INTO `school` VALUES (92, 'aca', 22, NULL);
INSERT INTO `school` VALUES (93, 'bac', 22, NULL);
INSERT INTO `school` VALUES (98, 'aaca', 22, NULL);
INSERT INTO `school` VALUES (99, 'baac', 22, NULL);

-- ----------------------------
-- Table structure for series
-- ----------------------------
DROP TABLE IF EXISTS `series`;
CREATE TABLE `series`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `createday` datetime(6) NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `sum_blog` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKhw97yr01d1ma13c0gdes3r5ok`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKhw97yr01d1ma13c0gdes3r5ok` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 61 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of series
-- ----------------------------
INSERT INTO `series` VALUES (15, 'afaf', 19, '2023-08-30 14:01:08.850000', 'Mo ta', 18);
INSERT INTO `series` VALUES (17, 'afarurf', 19, '2023-08-30 14:44:38.881000', 'Mo ta', 2);
INSERT INTO `series` VALUES (18, 'hrhrh', 19, '2023-08-30 14:50:58.917000', 'Mo ta', 1);
INSERT INTO `series` VALUES (19, 'hrgsshrh', 19, '2023-08-30 15:22:48.495000', 'Mo ta', 1);
INSERT INTO `series` VALUES (20, 'hrggsgssshrh', 19, '2023-08-30 16:20:40.512000', 'Mo ta', 1);
INSERT INTO `series` VALUES (21, 'hrggsssshrh', 19, '2023-08-30 16:22:40.519000', 'Mo ta', 1);
INSERT INTO `series` VALUES (22, 'fjfjffj', 19, '2023-08-30 16:25:11.131000', 'Mo ta', 7);
INSERT INTO `series` VALUES (23, 'fjfjflfj', 19, '2023-08-30 16:31:44.465000', 'Mo ta', 0);
INSERT INTO `series` VALUES (24, 'jflfj', 19, '2023-08-30 16:36:20.528000', 'Mo ta', 0);
INSERT INTO `series` VALUES (25, 'djflfj', 19, '2023-08-30 16:40:51.608000', 'Mo ta', 0);
INSERT INTO `series` VALUES (26, 'djflhdhdfj', 19, '2023-08-30 16:40:55.372000', 'Mo ta', 0);
INSERT INTO `series` VALUES (27, 'djfgjgdhdfj', 19, '2023-08-30 16:44:57.339000', 'Mo ta', 0);
INSERT INTO `series` VALUES (28, 'djfgjgdiyi77hdfj', 19, '2023-08-30 16:48:55.805000', 'Mo ta', 0);
INSERT INTO `series` VALUES (29, 'djfgjgdiyi7hdfj', 19, '2023-08-30 16:50:36.570000', 'Mo ta', 0);
INSERT INTO `series` VALUES (30, 'djfgdiyi7hdfj', 19, '2023-08-30 16:51:24.503000', 'Mo ta', 0);
INSERT INTO `series` VALUES (31, 'djfgyi7hdfj', 19, '2023-08-30 16:57:32.418000', 'Mo ta', 0);
INSERT INTO `series` VALUES (32, 'gyi7hdfj', 19, '2023-08-30 17:00:08.692000', 'Mo ta', 0);
INSERT INTO `series` VALUES (33, 'gywthdfj', 19, '2023-08-30 17:05:01.672000', 'Mo ta', 0);
INSERT INTO `series` VALUES (34, 'gywfj', 19, '2023-08-30 17:06:09.353000', 'Mo ta', 0);
INSERT INTO `series` VALUES (35, 'gyafafwfj', 19, '2023-08-30 17:08:30.481000', 'Mo ta', 0);
INSERT INTO `series` VALUES (36, 'gyafagssfwfj', 19, '2023-08-30 17:08:59.940000', 'Mo ta', 0);
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

-- ----------------------------
-- Table structure for series_image
-- ----------------------------
DROP TABLE IF EXISTS `series_image`;
CREATE TABLE `series_image`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `upload_date` datetime(6) NULL DEFAULT NULL,
  `url_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `series_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `blog_id`(`series_id` ASC) USING BTREE,
  CONSTRAINT `FKltfgcmbg61cpwl4nk1lcwe0uk` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of series_image
-- ----------------------------

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  FULLTEXT INDEX `name`(`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 'Khoa học ');
INSERT INTO `tag` VALUES (2, 'Công Nghệ');
INSERT INTO `tag` VALUES (3, 'Giáo dục');
INSERT INTO `tag` VALUES (4, 'Thể thao');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_date` datetime(6) NULL DEFAULT NULL,
  `update_date` datetime NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `second_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `descriptions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `school` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `company` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `banner_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UKsb8bbouer5wak8vyiiy4pf2bx`(`username` ASC) USING BTREE,
  UNIQUE INDEX `UKob8kqyqqgmefl0aco34akdtpe`(`email` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 65 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (19, 'Hải', NULL, '$2a$10$X8LDlDu4VbEwdfk2DVTkce1SSPFVsMQk1V4k4NGtpDi4vb6Kh0nIu', NULL, '0814069391', '2023-08-25 13:41:20.937000', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (20, 'Hải', NULL, '$2a$10$2.ZjVySeOxlxkALmJEy9VOdSIIMzFFcI6ZpU4DtZ4JDOTWRBPLoMW', NULL, '0814069391', '2023-08-25 14:06:10.922000', '2023-08-25 16:28:54', NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (22, 'Hải', NULL, '$2a$10$IgLOWwjHm5imKEohAPjnvud66Muz8KRAOL1pJGH2cQ8WpATiwm9dW', NULL, '0814069391', '2023-08-26 16:38:29.011000', '2023-09-07 11:20:06', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693275371/q3pjzz3sfbszcldmrcnv.jpg', 'nam', 'Baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (23, 'Hải', NULL, '$2a$10$2LbTQH7tevUm1.Ed04.Rve5NeUtacXm8WjYqmrQhEvEcKbGUW7dmi', NULL, '0814069391', '2023-08-26 16:44:43.976000', '2023-08-26 16:47:34', NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (24, 'Khoa', NULL, '$2a$10$yFKuBcHWiqUoO9exVsPNqukQVb0sfAKbOUbBD1yOximYUjcf6I1Sq', NULL, '0814069391', '2023-08-27 13:33:38.045000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (25, 'Khoa', NULL, '$2a$10$8.XSa9yLYYktXoSevO15BONit5aO0X2xpXSvA9JETV.oqtdH0Agfy', NULL, '0814069391', '2023-09-07 13:32:27.288000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (26, 'Khoa', NULL, '$2a$10$iceJIqv5MFkmHBtE3TtfYuEBunOj88kvbLJRovwRgXz1RY/LC0YNe', NULL, '0814069391', '2023-09-07 13:34:37.391000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (27, 'Khoa', NULL, '$2a$10$Yi0PZQsNgcTANleP/FEC8.CkC.8WGn5gAQb1gMQ0k728wx6lBUi4i', NULL, '0814069391', '2023-09-10 16:50:26.807000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (28, 'Khoa', NULL, '$2a$10$2tNr977OLZzI7Kpau1zwuOe1oBHuc6X5EqRgMmwGTwf1zHuhZo9S6', NULL, '0814069391', '2023-09-10 16:50:43.225000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (29, 'hieu', NULL, '$2a$10$4SYKvJFBATZXSGFbdsO8pu2e47YTBvNTv58L5q48KgUEUB3iRvV4q', NULL, '0814069395', '2023-09-11 13:48:19.029000', NULL, NULL, 'Femnale', 'aa', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (30, 'Khoa', NULL, '$2a$10$e53bgWXABfljtObuu.FmKehzbfFTUcGtHvaE5beeM3fgZ.Zzbcaoe', NULL, '0814069391', '2023-09-11 21:37:36.266000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (32, 'Khoa', NULL, '$2a$10$g5MYGRfENsvukhDRqjtf5eOheHMGVwYXekl40S.u5UIwAtUy6dAem', NULL, '0814069391', '2023-09-12 08:43:12.920000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (33, 'Khoa', NULL, '$2a$10$.7i7Q5C1aC/9ei4bM3nvqOxasJDCWjG6Pmnn52m03Cehhapm7tOjG', NULL, '0814069391', '2023-09-12 08:48:38.123000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (34, 'Khoa', NULL, '$2a$10$D0STwuplRYZfEUDU09PLi.bHIqITEuGzTvWoic3xHaioocHQK/ywm', NULL, '0814069391', '2023-09-12 08:50:28.823000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (35, 'Khoa', NULL, '$2a$10$EXKw8PZqC5rTG8t8Sw1w9u6IzJmUuolNQm/sy/5hfaX/RJ2TJfB2.', NULL, '0814069391', '2023-09-12 09:16:34.758000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (36, 'Khoa', NULL, '$2a$10$ZGAf1RoNdzLRPITuotVMLuyNFTmPiUrp8P9qsMympzu/zyEdxIXaG', NULL, '0814069391', '2023-09-12 09:19:45.230000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (37, 'Khoa', NULL, '$2a$10$a2NZj2WLYjqoXwx9DIlpWuDRJlCS4nbaeRhW.nw/5vSptr6RydQZK', NULL, '0814069391', '2023-09-12 09:29:44.499000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (38, 'Khoa', NULL, '$2a$10$oS//1H82CTRUsoDAbYyKoOSq.Des9EmSiA3R7ofnL4JHGI7l7N/JW', NULL, '0814069391', '2023-09-12 09:35:09.930000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (39, 'Khoa', NULL, '$2a$10$E/cZ7WTFtH6k.2.UTJEYF.vNM9jTxtTrrxguIEy84XKk4Cf4I3N16', NULL, '0814069391', '2023-09-12 10:11:24.022000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (40, 'Khoa', NULL, '$2a$10$ooWCsmVetzaXuume27xDCOqQH1XJx.qw/2K1L2WmRfM1bGcY5Y5Z2', NULL, '0814069391', '2023-09-12 10:19:31.542000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (41, 'Khoa', 'ngocahai0612@gmail.com', '$2a$10$CX.isCWN0Hf7e8HALOj77uzH3gAdtkuJPP77f3l/FjMY9CoSH1bpK', 'baboga', '0814069391', '2023-09-12 10:53:54.418000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (42, 'Khoa', NULL, '$2a$10$TIxIHPEO3PtyTx1WDc9DneUYCKJrzVP4.tB0A1HbUR5Q8vUi2sksq', NULL, '0814069391', '2023-09-12 10:56:57.820000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (43, 'Khoa', NULL, '$2a$10$c2cCfc/.jnpkMkkpQyTVLe0ZrUYpU6jTitbxsiVAMiFFXuADesSde', NULL, '0814069391', '2023-09-12 11:51:29.933000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (44, 'Khoa', NULL, '$2a$10$0l/nOtQ..ptcPKYxazORMOkjldIO.JaKgynCQ5FggJ0h.D.Eo9rf2', NULL, '0814069391', '2023-09-12 11:51:55.022000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (45, 'Khoa', NULL, '$2a$10$cZu4tuxdUDFuz2KATnmzGet2/dbuTGUILrGckjIM9fgceKgJ6lcXK', NULL, '0814069391', '2023-09-12 11:53:59.323000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (46, 'Khoa', NULL, '$2a$10$4zhkTI0JrmMFab8CP7U82.q1NT3ZHw6pgFyd33AWsSQuCDtMKvp4q', NULL, '0814069391', '2023-09-12 12:28:00.632000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (47, 'Khoa', NULL, '$2a$10$Y.N0ec6hTlReAhg7QZsPJe37YuY376sD4CWpKMZ8gjfsg7TwX.Pm6', NULL, '0814069391', '2023-09-12 12:40:53.308000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (48, 'Khoa', NULL, '$2a$10$82UF2OInYtPfMmtpw/IkDeNV7TKVO0CUAA8/WPoASPQC3laIdcy2e', NULL, '0814069391', '2023-09-12 12:44:31.675000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (49, 'Khoa', NULL, '$2a$10$033H7lolSnosSXTyCwT7Gu9/qUVDLj/8rTRlptOIv9Oe5kQEKvm.i', NULL, '0814069391', '2023-09-12 12:46:39.212000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (50, 'Khoa', NULL, '$2a$10$6htrED0olHBNPIqMmwK.OufgmJdbM8fppMQ9Ep0P4WydU.3algjb2', NULL, '0814069391', '2023-09-12 12:47:33.803000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (51, 'Khoa', NULL, '$2a$10$xXl4YxkdltVeHJ19e.uDT.OHokgSdVbbhhlVUffeSLYjg9nphmcRC', NULL, '0814069391', '2023-09-12 13:04:46.097000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (52, 'Hải', 'ngoaaahai06122002@gmail.com', '$2a$10$fxq.vLECu0lt/othW/m2Ru67.Z6FQVg/Rooz3IGDIo1Wtp3HS5yWa', 'AdminHai', '0814069391', '2023-09-13 09:31:00.547000', '2023-09-22 06:13:44', NULL, 'nam', 'Baboga', 1, NULL, 'baac', 'ydfka', 'acadafad', 'aata', NULL);
INSERT INTO `user` VALUES (53, 'afa', NULL, '$2a$10$A.YwzWGbBWFkx7xgD5YYJemKZnQPWFZ6SLHGkfaSFHZ/jB9laNkqe', NULL, '0814069391', '2023-09-13 09:37:15.845000', NULL, NULL, 'Male', 'afa', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (54, 'Hải', NULL, '$2a$10$d9Ru.EQIHbk1BvTMaZEzj.FVm8REBAD1Wtz3AApKyqxm8yRiMjPTq', 'nga0hcshai', '0814069391', '2023-09-17 15:01:25.932000', '2023-09-19 10:55:52', NULL, 'nam', 'Baboga', 1, NULL, 'baac', 'ydfka', 'acadafad', 'aata', NULL);
INSERT INTO `user` VALUES (55, 'Khoa', 'ngochg0ah6hs122002@gmail.com', '$2a$10$2expwu3ci8YfEQz4lytl2eXw/lLxR2pr1/YZz/u1wSRxU6tYjzqT6', 'nga0hchshai', '0814069391', '2023-09-20 10:49:44.823000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (56, 'Khoa', 'ngkkochai06122002@gmail.com', '$2a$10$QCHuqO.3fJEG.Ffv/x4kE.4brFQ6f2YcYwww0qy7Xf93lwUsGfaxu', 'admin', '0814069391', '2023-09-21 08:42:06.113000', '2023-09-21 08:43:31', NULL, 'nam', 'baboga', 2, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (57, 'Khoa', 'ngoqchai06122002@gmail.com', '$2a$10$5QazZwr6VcBai5jgMii9i.DCOKseNbHDI0wxM0N9y0zhTGL7bxvu2', 'admin1', '0814069391', '2023-09-21 08:45:05.254000', '2023-09-21 08:46:40', NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (58, 'Hải', 'ngochai06122002aa@gmail.com', '$2a$10$MLEfTIPPOPF1Pusb.2uX3OT8ePVC8ndyomXMY09EZpg4.Frv0OODC', 'admin2', '0814069391', '2023-09-21 08:50:19.154000', '2023-09-24 20:32:00', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696499051/hx7e2dxbza1gjtremmqp.jpg', 'nam', 'Baboga', 1, NULL, 'baac', 'ydfka', 'acadafad', 'aata', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696499055/demhwc3u3lbu54ryhbhm.jpg');
INSERT INTO `user` VALUES (59, 'baboga', NULL, '$2a$10$yxYrIeuNYk8tEwC0dseazeGTqK0hWEh9KXWdNzpQdBcDDCCdC.FoG', NULL, '0814069391', '2023-09-24 12:07:24.231000', NULL, NULL, 'Male', '1', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (60, 'baboga', NULL, '$2a$10$zt.RjAj/3BRendfziHCxr.I.UTDIi.wjMK6SOiNXRjkZBNfbwUgcW', NULL, '0814069391', '2023-09-24 12:14:43.850000', NULL, NULL, 'Male', 'afa', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (61, 'Đinh Anh Trâm', 'anhtram900@gmail.com', '$2a$10$3z9y4NYExDwteqFDTOwcJuJu/rQne7LaMLA6ApYaznV7S1S/qhRci', 'UserTram', '0814069391', '2023-09-24 16:54:38.887000', '2023-09-24 17:03:04', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693275371/q3pjzz3sfbszcldmrcnv.jpg', 'Male', 'AnhT', 1, '', '', '', '', '', NULL);
INSERT INTO `user` VALUES (62, 'baboga', NULL, '$2a$10$FxhUhdZDX.T7SsiLn8C5i.qIxE7GQ1UETN5bHdd9e8QnglzyVIdSy', NULL, '0814069391', '2023-09-24 17:05:49.871000', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693275371/q3pjzz3sfbszcldmrcnv.jpg', 'Femnale', 'afa', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (63, 'Khoa', NULL, '$2a$10$spdBYEtIbK60nbnpn8Omp.Le7Ki1i9v0bxt2qEncIeRrA43ATZFSy', NULL, '0814069391', '2023-09-26 08:43:36.497000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (64, 'baboga', 'ngochai06122002@gmail.com', '$2a$10$8yqiRdp3uznrJPXUhKEV5.c.kolDlNGGWMBH13OTRLXd54z4y5wgy', 'UserTramaa', '0814069391', '2023-10-01 11:16:43.232000', NULL, NULL, 'Male', '1', 1, NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for user_banner
-- ----------------------------
DROP TABLE IF EXISTS `user_banner`;
CREATE TABLE `user_banner`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `upload_date` datetime(6) NULL DEFAULT NULL,
  `url_banner` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `user_banner_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

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

-- ----------------------------
-- Table structure for user_images
-- ----------------------------
DROP TABLE IF EXISTS `user_images`;
CREATE TABLE `user_images`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NULL DEFAULT NULL,
  `upload_date` datetime NULL DEFAULT NULL,
  `url_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK2jg7uf46pq5ihgoj39y7phhy6`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK2jg7uf46pq5ihgoj39y7phhy6` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 41 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_images
-- ----------------------------
INSERT INTO `user_images` VALUES (1, 22, '2023-08-26 16:38:29', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693275371/q3pjzz3sfbszcldmrcnv.jpg');
INSERT INTO `user_images` VALUES (7, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696429468/hm32hxwzc6nht1ychhco.png');
INSERT INTO `user_images` VALUES (8, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696429947/upad3ul26uatnmaetbhw.png');
INSERT INTO `user_images` VALUES (9, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430011/jcgeuydpjabkndqgm95c.png');
INSERT INTO `user_images` VALUES (10, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430132/xlgnucci8hblpwzdjpvp.png');
INSERT INTO `user_images` VALUES (11, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430209/jfoygum8n6dc97ggidjl.png');
INSERT INTO `user_images` VALUES (12, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430357/bqfp7dt3ajwjbnnqvfi6.png');
INSERT INTO `user_images` VALUES (13, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430491/yawle8487ygj6rqvk5hj.png');
INSERT INTO `user_images` VALUES (14, 58, '2023-09-21 08:50:19', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696430496/iz0armqivuzvgyftbrdt.png');
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

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role`  (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE,
  INDEX `FKa68196081fvovjhkek5m97n3y`(`role_id` ASC) USING BTREE,
  CONSTRAINT `FK859n2jvi8ivhui0rl0esws6o` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKa68196081fvovjhkek5m97n3y` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES (19, 1);
INSERT INTO `user_role` VALUES (20, 1);
INSERT INTO `user_role` VALUES (23, 1);
INSERT INTO `user_role` VALUES (22, 2);
INSERT INTO `user_role` VALUES (24, 2);
INSERT INTO `user_role` VALUES (25, 2);
INSERT INTO `user_role` VALUES (26, 2);
INSERT INTO `user_role` VALUES (27, 2);
INSERT INTO `user_role` VALUES (28, 2);
INSERT INTO `user_role` VALUES (29, 2);
INSERT INTO `user_role` VALUES (30, 2);
INSERT INTO `user_role` VALUES (32, 2);
INSERT INTO `user_role` VALUES (33, 2);
INSERT INTO `user_role` VALUES (34, 2);
INSERT INTO `user_role` VALUES (35, 2);
INSERT INTO `user_role` VALUES (36, 2);
INSERT INTO `user_role` VALUES (37, 2);
INSERT INTO `user_role` VALUES (38, 2);
INSERT INTO `user_role` VALUES (39, 2);
INSERT INTO `user_role` VALUES (40, 2);
INSERT INTO `user_role` VALUES (41, 2);
INSERT INTO `user_role` VALUES (42, 2);
INSERT INTO `user_role` VALUES (43, 2);
INSERT INTO `user_role` VALUES (44, 2);
INSERT INTO `user_role` VALUES (45, 2);
INSERT INTO `user_role` VALUES (46, 2);
INSERT INTO `user_role` VALUES (47, 2);
INSERT INTO `user_role` VALUES (48, 2);
INSERT INTO `user_role` VALUES (49, 2);
INSERT INTO `user_role` VALUES (50, 2);
INSERT INTO `user_role` VALUES (51, 2);
INSERT INTO `user_role` VALUES (52, 2);
INSERT INTO `user_role` VALUES (53, 2);
INSERT INTO `user_role` VALUES (54, 2);
INSERT INTO `user_role` VALUES (55, 2);
INSERT INTO `user_role` VALUES (56, 2);
INSERT INTO `user_role` VALUES (57, 2);
INSERT INTO `user_role` VALUES (58, 2);
INSERT INTO `user_role` VALUES (59, 2);
INSERT INTO `user_role` VALUES (60, 2);
INSERT INTO `user_role` VALUES (61, 2);
INSERT INTO `user_role` VALUES (62, 2);
INSERT INTO `user_role` VALUES (63, 2);
INSERT INTO `user_role` VALUES (64, 2);

-- ----------------------------
-- Table structure for verification_token
-- ----------------------------
DROP TABLE IF EXISTS `verification_token`;
CREATE TABLE `verification_token`  (
  `ID` int NOT NULL,
  `expiry_date` datetime NULL DEFAULT NULL,
  `is_used` bit(1) NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `User_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE,
  INDEX `FK3asw9wnv76uxu3kr1ekq4i1ld`(`User_id` ASC) USING BTREE,
  CONSTRAINT `FKrdn0mss276m9jdobfhhn2qogw` FOREIGN KEY (`User_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of verification_token
-- ----------------------------
INSERT INTO `verification_token` VALUES (7, '2023-08-27 00:00:00', b'0', '800041', 22);
INSERT INTO `verification_token` VALUES (8, '2023-08-27 00:00:00', b'1', '386099', 23);
INSERT INTO `verification_token` VALUES (49, '2023-08-28 00:00:00', b'0', '665894', 24);
INSERT INTO `verification_token` VALUES (102, '2023-09-08 00:00:00', b'0', '800491', 25);
INSERT INTO `verification_token` VALUES (103, '2023-09-08 00:00:00', b'0', '363637', 26);
INSERT INTO `verification_token` VALUES (109, '2023-09-11 00:00:00', b'0', '812440', 27);
INSERT INTO `verification_token` VALUES (110, '2023-09-11 00:00:00', b'0', '815543', 28);
INSERT INTO `verification_token` VALUES (131, '2023-09-12 00:00:00', b'1', '636084', 29);
INSERT INTO `verification_token` VALUES (133, '2023-09-12 00:00:00', b'0', '391514', 30);
INSERT INTO `verification_token` VALUES (135, '2023-09-13 00:00:00', b'0', '729377', 32);
INSERT INTO `verification_token` VALUES (136, '2023-09-13 00:00:00', b'0', '527857', 33);
INSERT INTO `verification_token` VALUES (137, '2023-09-13 00:00:00', b'0', '147409', 34);
INSERT INTO `verification_token` VALUES (140, '2023-09-13 00:00:00', b'0', '339619', 35);
INSERT INTO `verification_token` VALUES (141, '2023-09-13 00:00:00', b'0', '603136', 36);
INSERT INTO `verification_token` VALUES (142, '2023-09-13 00:00:00', b'0', '497660', 37);
INSERT INTO `verification_token` VALUES (143, '2023-09-13 00:00:00', b'0', '789876', 38);
INSERT INTO `verification_token` VALUES (144, '2023-09-13 00:00:00', b'0', '180197', 39);
INSERT INTO `verification_token` VALUES (145, '2023-09-13 00:00:00', b'0', '934770', 40);
INSERT INTO `verification_token` VALUES (146, '2023-09-13 00:00:00', b'0', '498104', 41);
INSERT INTO `verification_token` VALUES (147, '2023-09-13 00:00:00', b'0', '756434', 42);
INSERT INTO `verification_token` VALUES (148, '2023-09-13 00:00:00', b'0', '962479', 43);
INSERT INTO `verification_token` VALUES (149, '2023-09-13 00:00:00', b'0', '516662', 44);
INSERT INTO `verification_token` VALUES (150, '2023-09-13 00:00:00', b'1', '436033', 45);
INSERT INTO `verification_token` VALUES (153, '2023-09-13 00:00:00', b'0', '728496', 46);
INSERT INTO `verification_token` VALUES (155, '2023-09-12 00:00:00', b'0', '659960', 47);
INSERT INTO `verification_token` VALUES (156, '2023-09-12 00:00:00', b'0', '415115', 48);
INSERT INTO `verification_token` VALUES (157, '2023-09-12 00:00:00', b'0', '950606', 49);
INSERT INTO `verification_token` VALUES (158, '2023-09-13 00:00:00', b'0', '122353', 50);
INSERT INTO `verification_token` VALUES (159, '2023-09-13 00:00:00', b'0', '278946', 51);
INSERT INTO `verification_token` VALUES (160, '2023-09-14 00:00:00', b'1', '740201', 52);
INSERT INTO `verification_token` VALUES (163, '2023-09-14 00:00:00', b'0', '689610', 53);
INSERT INTO `verification_token` VALUES (164, '2023-09-18 00:00:00', b'0', '440474', 54);
INSERT INTO `verification_token` VALUES (178, '2023-09-21 00:00:00', b'1', '731344', 55);
INSERT INTO `verification_token` VALUES (187, '2023-09-22 00:00:00', b'1', '948402', 56);
INSERT INTO `verification_token` VALUES (190, '2023-09-22 00:00:00', b'1', '137598', 57);
INSERT INTO `verification_token` VALUES (194, '2023-09-22 00:00:00', b'1', '635653', 58);
INSERT INTO `verification_token` VALUES (269, '2023-09-25 00:00:00', b'0', '416227', 59);
INSERT INTO `verification_token` VALUES (273, '2023-09-25 00:00:00', b'0', '352052', 60);
INSERT INTO `verification_token` VALUES (281, '2023-09-25 00:00:00', b'1', '200097', 61);
INSERT INTO `verification_token` VALUES (284, '2023-09-25 00:00:00', b'0', '752572', 62);
INSERT INTO `verification_token` VALUES (291, '2023-09-27 00:00:00', b'0', '224085', 63);
INSERT INTO `verification_token` VALUES (293, '2023-10-02 00:00:00', b'1', '129474', 64);

SET FOREIGN_KEY_CHECKS = 1;
