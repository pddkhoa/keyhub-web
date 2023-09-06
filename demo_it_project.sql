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

 Date: 27/08/2023 13:46:09
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
  `status` bit(1) NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKda8tuywtf0gb6sedwk7la1pgi`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKda8tuywtf0gb6sedwk7la1pgi` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------

-- ----------------------------
-- Table structure for block
-- ----------------------------
DROP TABLE IF EXISTS `block`;
CREATE TABLE `block`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_block` bigint NULL DEFAULT NULL,
  `user_is_block` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKbwqtx5l97j6k5o7t0wosp76he`(`user_block` ASC) USING BTREE,
  INDEX `FKlmr4dav1cu882ti5vrr4gfgfv`(`user_is_block` ASC) USING BTREE,
  CONSTRAINT `FKbwqtx5l97j6k5o7t0wosp76he` FOREIGN KEY (`user_block`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKlmr4dav1cu882ti5vrr4gfgfv` FOREIGN KEY (`user_is_block`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of block
-- ----------------------------

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog`  (
  `Blog_id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `create_date` datetime NULL DEFAULT NULL,
  `like` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status_id` int NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `series_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`Blog_id`) USING BTREE,
  INDEX `FK_Own`(`user_id` ASC) USING BTREE,
  INDEX `FK_Series`(`series_id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog
-- ----------------------------

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `comment_id` int NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Blog_id` int NULL DEFAULT NULL,
  `User_id` bigint NULL DEFAULT NULL,
  `create_day` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`comment_id`) USING BTREE,
  INDEX `FK_Comment`(`User_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `role_business` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `business_status` bit(1) NULL DEFAULT NULL,
  `company` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKdy4v2yb46hefqicjpyj7b7e4s`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKdy4v2yb46hefqicjpyj7b7e4s` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES (9, 'Business Analyst', 2, b'1', '3FORCOM');
INSERT INTO `company` VALUES (10, 'Business Analyst', 22, b'1', '3FORCOM');
INSERT INTO `company` VALUES (11, 'Business Analyst', 22, b'0', 'GlobalChain');

-- ----------------------------
-- Table structure for conversation
-- ----------------------------
DROP TABLE IF EXISTS `conversation`;
CREATE TABLE `conversation`  (
  `id` int NOT NULL,
  `User1` int NULL DEFAULT NULL,
  `User2` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of conversation
-- ----------------------------

-- ----------------------------
-- Table structure for country
-- ----------------------------
DROP TABLE IF EXISTS `country`;
CREATE TABLE `country`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKd6qcbtlg5wggwhit1qs0mti2i`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKd6qcbtlg5wggwhit1qs0mti2i` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of country
-- ----------------------------
INSERT INTO `country` VALUES (3, 'Trung Quốc', 2);
INSERT INTO `country` VALUES (46, 'Canada', 22);

-- ----------------------------
-- Table structure for follow
-- ----------------------------
DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow`  (
  `flow_id` int NOT NULL,
  `User_id` bigint NULL DEFAULT NULL,
  `User_flow_back` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`flow_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of follow
-- ----------------------------

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
INSERT INTO `hibernate_sequence` VALUES (50);

-- ----------------------------
-- Table structure for likes
-- ----------------------------
DROP TABLE IF EXISTS `likes`;
CREATE TABLE `likes`  (
  `like_id` bigint NOT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `Blog_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`like_id`) USING BTREE,
  INDEX `Blog_id`(`Blog_id` ASC) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of likes
-- ----------------------------

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` bigint NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `send_at` datetime NULL DEFAULT NULL,
  `conversation_id` int NULL DEFAULT NULL,
  `sender_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_Sender`(`sender_id` ASC) USING BTREE,
  INDEX `FK_Conversation`(`conversation_id` ASC) USING BTREE,
  CONSTRAINT `FK_Conversation` FOREIGN KEY (`conversation_id`) REFERENCES `conversation` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of message
-- ----------------------------

-- ----------------------------
-- Table structure for novication
-- ----------------------------
DROP TABLE IF EXISTS `novication`;
CREATE TABLE `novication`  (
  `notifications_id` int NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`notifications_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of novication
-- ----------------------------

-- ----------------------------
-- Table structure for product_image
-- ----------------------------
DROP TABLE IF EXISTS `product_image`;
CREATE TABLE `product_image`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `upload_date` date NULL DEFAULT NULL,
  `url_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `blog_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK6oo0cvcdtb6qmwsga468uuukk`(`blog_id` ASC) USING BTREE,
  CONSTRAINT `FKg7mlydvvkfjbeporvnmxr6t30` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`Blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of product_image
-- ----------------------------

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

-- ----------------------------
-- Table structure for report
-- ----------------------------
DROP TABLE IF EXISTS `report`;
CREATE TABLE `report`  (
  `report_id` bigint NOT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `blog_id` bigint NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`report_id`) USING BTREE,
  INDEX `FK_BLogReport`(`user_id` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of report
-- ----------------------------

-- ----------------------------
-- Table structure for report_blog
-- ----------------------------
DROP TABLE IF EXISTS `report_blog`;
CREATE TABLE `report_blog`  (
  `User_id` bigint NOT NULL,
  `Blog_id` bigint NULL DEFAULT NULL,
  `note` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `report_id` bigint NULL DEFAULT NULL,
  INDEX `FK_UserReport`(`User_id` ASC) USING BTREE,
  INDEX `FK_report`(`report_id` ASC) USING BTREE,
  CONSTRAINT `FK_report` FOREIGN KEY (`report_id`) REFERENCES `report` (`report_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of report_blog
-- ----------------------------

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
  `status` bit(1) NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK8w29xem752br0p84wh9h1lble`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK8w29xem752br0p84wh9h1lble` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES (5, 'HCMC', b'1', 2);
INSERT INTO `school` VALUES (38, 'UTE', NULL, 22);
INSERT INTO `school` VALUES (42, 'Ngô Quyền', NULL, 22);
INSERT INTO `school` VALUES (44, 'Quang Trung', NULL, 22);

-- ----------------------------
-- Table structure for series
-- ----------------------------
DROP TABLE IF EXISTS `series`;
CREATE TABLE `series`  (
  `series_id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`series_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of series
-- ----------------------------

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
  `status` bit(1) NULL DEFAULT NULL,
  `descriptions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UKsb8bbouer5wak8vyiiy4pf2bx`(`username` ASC) USING BTREE,
  UNIQUE INDEX `UKob8kqyqqgmefl0aco34akdtpe`(`email` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (2, 'Ngọc Hải', 'ngochai@gmail.com', '$2a$10$qZB.6yTnxDaISjdMqeyBzu7rUxivZp0ZAO34Vl9OeD3xHhVRJJMlW', 'ngochai', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (3, 'Ngọc Hải', 'ngochai12@gmail.com', '$2a$10$2A2aVOFr4oy8YRMNRna9R.HWBHOkutz4IiJ78PHQio..ITLA1WiSC', 'ngochai13', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (4, 'Ngọc Hải', 'ngochaiq12@gmail.com', '$2a$10$82mNEIMAXmZpE8SI.NffBOcVlkt.XOr9RqTOeWlu7PBJrLS7SvNe6', 'ngochai11', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (5, 'Ngọc Hải', 'ngochai11212@gmail.com', '$2a$10$LlakccdGICqERUzao5peoeo9H9gYnLxDaxPh0U9HlAHApKPC3JF0u', 'ngochai12223332', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (6, 'Ngọc Hải', 'ngochai1432@gmail.com', '$2a$10$rvaRSqgfA8BtUdVQcb2G4.c98R2V79FTTwSjCDrNOujst/wpgmP7a', 'ngochai12332', NULL, '2023-08-22 11:44:28.963000', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (7, 'hải', 'ngochai0707@gmail.com', '$2a$10$G9qJlYhZ6CWEL7Pr6UqLruc83Rf5w5KhjdtdYPNJNn8EyICLyPHPG', 'ngochai122332', '0814069391', '2023-08-22 12:40:25.775000', '2023-08-24 14:17:14', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1692862858/ly8urm87gze4z1l6rvxl.jpg', 'nam', 'Baboga12', NULL, NULL);
INSERT INTO `user` VALUES (13, 'Hải', 'ngochai061@gmail.com', '$2a$10$j9eIeU6FgB1XCVA0t5EqjuFGzOpKg7atQaqv1VqbtMoq6wq5p4L6.', 'ngochai11121', '0814069391', '2023-08-25 13:07:52.482000', '2023-08-25 19:54:14', NULL, 'nam', 'Vicky', NULL, NULL);
INSERT INTO `user` VALUES (14, 'Hải', 'ngochai06a12@gmail.com', '$2a$10$uSENI8UIvCtyfA2yLcJJUOi/Ik75yzSKO46Mq36ujm5pWh4vw8djm', 'ngochai11aafa', '0814069391', '2023-08-25 13:13:17.677000', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (15, 'Hải', 'ngochaia0612@gmail.com', '$2a$10$BaB8NDL4x.lD6vu8wiZefe53pF8ycrUJFtA3Sfphhz/B.132zjDfq', 'afafa', '0814069391', '2023-08-25 13:24:12.295000', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (16, 'Hải', 'ngochafai0612@gmail.com', '$2a$10$IYQxd.qJxpWUbVi7gy4gCuLDSwMvvqqRAKOeFarj8PQSfeKpq0.ru', 'afafafa', '0814069391', '2023-08-25 13:25:46.240000', NULL, NULL, NULL, NULL, b'0', NULL);
INSERT INTO `user` VALUES (17, 'Hải', 'ngafaochai0612@gmail.com', '$2a$10$XeiOvORw80d8YN10Vj5M8.hRCxcugEgfyBBMf2Tmx96njAG9EEq1q', 'afaffafaafa', '0814069391', '2023-08-25 13:29:30.473000', NULL, NULL, NULL, NULL, b'0', NULL);
INSERT INTO `user` VALUES (18, 'Hải', 'ngochai0612@gmail.com', '$2a$10$nEgWAcvihMkR61gXNNMowe3HzvpEvQjAuJQ2rhJ9xVbPd0G8PIL5.', 'agagew', '0814069391', '2023-08-25 13:40:14.303000', NULL, NULL, NULL, NULL, b'0', NULL);
INSERT INTO `user` VALUES (19, 'Hải', 'ngochai0sfwf6122002@gmail.com', '$2a$10$X8LDlDu4VbEwdfk2DVTkce1SSPFVsMQk1V4k4NGtpDi4vb6Kh0nIu', 'agagsew', '0814069391', '2023-08-25 13:41:20.937000', NULL, NULL, NULL, NULL, b'1', NULL);
INSERT INTO `user` VALUES (20, 'Hải', 'ngochaia06122002@gmail.com', '$2a$10$2.ZjVySeOxlxkALmJEy9VOdSIIMzFFcI6ZpU4DtZ4JDOTWRBPLoMW', 'afaf', '0814069391', '2023-08-25 14:06:10.922000', '2023-08-25 16:28:54', NULL, 'nam', 'baboga', b'1', NULL);
INSERT INTO `user` VALUES (21, 'Hải', 'bayboga12@gmail.com', '$2a$10$rRzZWZ9GWMeVzGDW6PBOpu7XxtrXGzE8qzNAbGUbgmsM1rLCZ5Rgi', 'Baboga', '0814069391', '2023-08-26 16:31:51.578000', NULL, NULL, 'nam', 'baboga', b'0', NULL);
INSERT INTO `user` VALUES (22, 'Hải', 'ngochai06111@gmail.com', '$2a$10$IgLOWwjHm5imKEohAPjnvud66Muz8KRAOL1pJGH2cQ8WpATiwm9dW', 'Baboga12', '0814069391', '2023-08-26 16:38:29.011000', '2023-08-27 09:36:58', NULL, 'nam', 'Baboga', b'0', NULL);
INSERT INTO `user` VALUES (23, 'Hải', 'ngochai06122002@gmail.com', '$2a$10$2LbTQH7tevUm1.Ed04.Rve5NeUtacXm8WjYqmrQhEvEcKbGUW7dmi', 'aada', '0814069391', '2023-08-26 16:44:43.976000', '2023-08-26 16:47:34', NULL, 'nam', 'baboga', b'1', NULL);
INSERT INTO `user` VALUES (24, 'Khoa', 'khoadang88vn2k2@gmail.com', '$2a$10$yFKuBcHWiqUoO9exVsPNqukQVb0sfAKbOUbBD1yOximYUjcf6I1Sq', 'Khoa', '0814069391', '2023-08-27 13:33:38.045000', NULL, NULL, 'nam', 'baboga', b'0', NULL);

-- ----------------------------
-- Table structure for user_image
-- ----------------------------
DROP TABLE IF EXISTS `user_image`;
CREATE TABLE `user_image`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `upload_date` date NULL DEFAULT NULL,
  `url_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK5m3lhx7tcj9h9ju10xo4ruqcn`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK5m3lhx7tcj9h9ju10xo4ruqcn` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_image
-- ----------------------------

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
INSERT INTO `user_role` VALUES (13, 1);
INSERT INTO `user_role` VALUES (14, 1);
INSERT INTO `user_role` VALUES (15, 1);
INSERT INTO `user_role` VALUES (16, 1);
INSERT INTO `user_role` VALUES (17, 1);
INSERT INTO `user_role` VALUES (18, 1);
INSERT INTO `user_role` VALUES (19, 1);
INSERT INTO `user_role` VALUES (20, 1);
INSERT INTO `user_role` VALUES (23, 1);
INSERT INTO `user_role` VALUES (21, 2);
INSERT INTO `user_role` VALUES (22, 2);
INSERT INTO `user_role` VALUES (24, 2);

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

SET FOREIGN_KEY_CHECKS = 1;
