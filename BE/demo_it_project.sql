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

 Date: 23/10/2023 18:48:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `id` bigint NOT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKda8tuywtf0gb6sedwk7la1pgi`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKda8tuywtf0gb6sedwk7la1pgi` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
  PRIMARY KEY (`blog_id`) USING BTREE,
  INDEX `FK_Own`(`user_id` ASC) USING BTREE,
  INDEX `FK7u8tmlwxnjvesb7um4mxsvsvc`(`series_id` ASC) USING BTREE,
  INDEX `FKqyvjif1i2geaeuvkh3n1jrnn4`(`category_id` ASC) USING BTREE,
  FULLTEXT INDEX `title`(`title`, `content`, `description`),
  CONSTRAINT `FK7u8tmlwxnjvesb7um4mxsvsvc` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKpxk2jtysqn41oop7lvxcp6dqq` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKqyvjif1i2geaeuvkh3n1jrnn4` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 157 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES (18, 'a', 'lê trương ngọc hải', 62, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (19, 'a', 'lê trương ngọc hải', 62, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (20, 'a', 'lê trương ngọc hải', 62, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-10-09 20:20:08.677000');
INSERT INTO `blog` VALUES (21, 'a', 'lê trương ngọc hải', 62, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-10-11 21:34:56.371000');
INSERT INTO `blog` VALUES (22, 'a', 'lê trương ngọc hải', 62, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (24, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (25, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (26, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (27, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (28, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (29, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (30, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (31, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (32, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (33, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (34, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (35, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (36, 'a', 'lê trương ngọc hải', 22, 'a', 33, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (37, 'a', 'lê trương ngọc hải', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (38, 'a', 'lê trương ngọc hải', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (39, 'Sample Taitle 3', 'ok', 22, 'Sample Description', 61, 'https//', 50.00, 3, 1, 50, '2023-10-12 13:55:21.465000');
INSERT INTO `blog` VALUES (40, 'a', 'lê trương ngọc hải', 22, 'a', 15, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695696875/qt7ylr4qkzga5nzcc1gz.jpg', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (41, 'a', 'lê trương ngọc hải', 58, 'a', 15, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1695696875/qt7ylr4qkzga5nzcc1gz.jpg-http://res.cloudinary.com/dmpru0wgq/image/upload/v1695779458/uoqu7wuvchhr9uu1c6hr.jpg', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (42, 'a', 'lê trương ngọc hải', 58, 'a', 15, NULL, 50.00, 1, 0, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (43, 'a', 'lê trương ngọc hải', 22, 'a', 15, NULL, 50.00, 2, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (44, 'a', 'lê trương ngọc hải', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (45, 'a', 'lê trương ngọc hải', 22, 'a', NULL, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (46, 'a', 'lê trương ngọc hải', 22, 'a', NULL, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (47, 'Sample Taitle 3', 'lê trương ngọc hải', 22, 'Sample Description', 61, 'htttp', 50.00, 1, 0, 50, '2023-10-11 20:45:09.553000');
INSERT INTO `blog` VALUES (49, 'a', 'lê trương ngọc hải', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (50, 'a', 'lê trương ngọc hải', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (51, 'a', 'lê trương ngọc hải', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (52, 'a', 'lê trương ngọc hải', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (53, 'a', 'lê trương ngọc hải', 22, 'a', 15, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (55, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', NULL, NULL, 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (58, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 15, 'htttp', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (59, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 15, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (60, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 15, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (61, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696434072/igddhmspl5x1xch4zifz.png', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (62, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696516557/vyhcmfnilzdhu8ecszcr.jpg', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (63, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 15, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (64, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 15, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (65, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 17, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (66, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 17, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (67, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 17, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (68, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 18, 'htttp', 50.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (69, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 18, 'htttp', 80.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (70, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 19, 'htttp', 80.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (71, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 20, 'htttp', 80.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (72, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 21, 'htttp', 80.00, 1, 1, 60, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (73, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 22, 'htttp', 80.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (74, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 22, 'htttp', 80.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (75, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 22, 'htttp', 80.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (76, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696758035/pwot24q6w5x7x6ztleoe.jpg', 80.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (77, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', NULL, '', 80.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (78, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696761711/tfbgaucqj1g35bcrni9g.jpg', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (79, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696761920/y1bbelltdqaegovphug1.jpg', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (81, 'lê trương ngọc hải', 'lê trương ngọc hải', 22, 'a', 22, 'htttp', 50.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (90, 'lê trương ngọc hải', 'lê trương ngọc hải', 58, 'Sample Description', 22, 'htttp', 0.00, 1, 1, 50, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (91, 'lê trương ngọc hải', 'lê trương ngọc hải', 58, 'Sample Description', 22, 'htttp', 0.00, 1, 1, 0, '2023-09-25 21:58:51.000000');
INSERT INTO `blog` VALUES (92, 'lê trương ngọc hải', 'lê trương ngọc hải', 58, 'Sample Description', 22, 'htttp', 0.00, 1, 1, 0, '2023-10-09 20:20:08.677000');
INSERT INTO `blog` VALUES (97, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 61, 'htttp', 0.00, 1, 1, 0, '2023-10-11 21:34:56.371000');
INSERT INTO `blog` VALUES (98, 'Sssgsgsdgsdg', 'ok', 58, 'Sample Description', 15, NULL, 0.00, 1, 0, NULL, '2023-10-12 13:25:04.557000');
INSERT INTO `blog` VALUES (100, 'Sssgsgsdgsdg', 'ok', 58, 'Sample Description', NULL, NULL, 0.00, NULL, 0, NULL, '2023-10-12 13:41:26.684000');
INSERT INTO `blog` VALUES (101, 'Sssgsgsdgsdg', 'ok', 58, 'Sample Description', NULL, 'https', 0.00, NULL, 0, NULL, '2023-10-12 13:46:36.161000');
INSERT INTO `blog` VALUES (102, 'Sssgsgsdgsdg', 'ok', 58, 'Sample Description', NULL, NULL, 0.00, NULL, 0, NULL, '2023-10-12 13:47:28.806000');
INSERT INTO `blog` VALUES (103, 'Sssgsgsdgsdg', NULL, 58, NULL, NULL, NULL, 0.00, NULL, 0, NULL, '2023-10-12 13:48:05.527000');
INSERT INTO `blog` VALUES (104, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 61, 'https//', 0.00, 3, 1, NULL, '2023-10-12 14:42:45.124000');
INSERT INTO `blog` VALUES (105, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 61, 'https//', 2.00, 3, 0, NULL, '2023-10-12 14:58:51.337000');
INSERT INTO `blog` VALUES (106, 'Sssgsgsdgsdg', NULL, 58, NULL, NULL, NULL, 0.00, NULL, 0, NULL, '2023-10-12 13:55:59.058000');
INSERT INTO `blog` VALUES (107, 'Sssgsgsdgsdg', 'ok', 58, 'Sample Description', 15, 'htt[', 0.00, 1, 0, NULL, '2023-10-12 13:56:57.179000');
INSERT INTO `blog` VALUES (108, 'Sssgsgsdgsdg', NULL, 58, NULL, NULL, NULL, 0.00, NULL, 0, NULL, '2023-10-12 14:13:41.067000');
INSERT INTO `blog` VALUES (109, 'Sssgsgsdgsdg', NULL, 58, NULL, NULL, NULL, 0.00, NULL, 0, NULL, '2023-10-12 14:58:28.319000');
INSERT INTO `blog` VALUES (111, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 62, 'htttp', 0.00, 1, 1, 0, '2023-10-12 22:02:46.965000');
INSERT INTO `blog` VALUES (112, 'Sssgsgsdgsdg', NULL, 58, NULL, 62, NULL, 0.00, NULL, 0, NULL, '2023-10-12 22:03:05.246000');
INSERT INTO `blog` VALUES (113, 'Sssgsgsdgsdg', NULL, 58, NULL, 62, NULL, 0.00, NULL, 0, NULL, '2023-10-12 22:03:10.391000');
INSERT INTO `blog` VALUES (114, 'Sssgsgsdgsdg', NULL, 58, NULL, 62, NULL, 0.00, NULL, 0, NULL, '2023-10-12 22:03:17.668000');
INSERT INTO `blog` VALUES (115, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 62, 'htttp', 0.00, 1, 1, 0, '2023-10-12 22:03:28.991000');
INSERT INTO `blog` VALUES (116, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 62, 'htttp', 0.00, 1, 1, 0, '2023-10-12 22:03:34.852000');
INSERT INTO `blog` VALUES (117, 'Sssgsgsdgsdg', NULL, 58, NULL, 62, NULL, 0.00, NULL, 0, NULL, '2023-10-12 22:25:36.799000');
INSERT INTO `blog` VALUES (118, 'Sssgsgsdgsdg', NULL, 58, NULL, 62, NULL, 0.00, NULL, 0, NULL, '2023-10-12 22:25:46.416000');
INSERT INTO `blog` VALUES (119, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 62, 'https//', 0.00, 1, 0, NULL, '2023-10-12 22:44:03.370000');
INSERT INTO `blog` VALUES (120, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 62, 'https//', 0.00, 1, 1, NULL, '2023-10-12 22:37:06.487000');
INSERT INTO `blog` VALUES (121, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 63, 'https//', 0.00, 1, 1, NULL, '2023-10-12 22:45:49.701000');
INSERT INTO `blog` VALUES (122, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 63, 'https//', 0.00, 1, 1, NULL, '2023-10-12 22:45:57.985000');
INSERT INTO `blog` VALUES (123, 'Sssgsgsdgsdg', NULL, 58, NULL, 63, NULL, 0.00, NULL, 0, NULL, '2023-10-12 22:44:58.395000');
INSERT INTO `blog` VALUES (124, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 64, 'https//', 0.00, 1, 1, NULL, '2023-10-12 22:48:04.769000');
INSERT INTO `blog` VALUES (125, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 64, 'https//', 0.00, 1, 1, NULL, '2023-10-12 22:48:26.048000');
INSERT INTO `blog` VALUES (126, 'Sssgsgsdgsdg', NULL, 58, NULL, 64, NULL, 0.00, NULL, 0, NULL, '2023-10-12 22:47:35.684000');
INSERT INTO `blog` VALUES (127, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 65, 'https//', 0.00, 1, 1, NULL, '2023-10-12 22:49:39.679000');
INSERT INTO `blog` VALUES (128, 'Sssgsgsdgsdg', NULL, 58, NULL, 65, NULL, 0.00, NULL, 0, NULL, '2023-10-12 22:48:56.701000');
INSERT INTO `blog` VALUES (129, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 66, 'https//', 0.00, 1, 1, NULL, '2023-10-12 22:53:15.909000');
INSERT INTO `blog` VALUES (130, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 67, 'https//', 0.00, 1, 1, NULL, '2023-10-12 22:56:21.925000');
INSERT INTO `blog` VALUES (132, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 67, 'https//', 0.00, 1, 1, NULL, '2023-10-12 23:03:58.657000');
INSERT INTO `blog` VALUES (134, 'Sssgsgsdgsdg', 'a', 58, NULL, 63, NULL, 0.00, NULL, 0, NULL, '2023-10-12 23:07:18.323000');
INSERT INTO `blog` VALUES (135, '21312312312312', '<p>2131asdasda</p><p>sdasdas</p><p>asdasdas</p><p>asdasdasdas</p>', 65, 'adasdas', 63, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697338477/e6yalnaa76hnbcjpolte.jpg', 1000.00, 1, 1, 1000, '2023-10-15 09:54:43.000000');
INSERT INTO `blog` VALUES (136, 'Sssgsgsdgsdg', 'a', 58, NULL, 63, NULL, 0.00, NULL, 0, NULL, '2023-10-15 21:47:12.465000');
INSERT INTO `blog` VALUES (138, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 63, 'htttp', 0.00, 1, 1, 0, '2023-10-16 21:22:26.487000');
INSERT INTO `blog` VALUES (139, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 63, 'htttp', 0.00, 1, 1, 0, '2023-10-16 21:22:49.152000');
INSERT INTO `blog` VALUES (141, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 63, 'htttp', 1.00, 1, 1, 0, '2023-10-17 23:46:37.560000');
INSERT INTO `blog` VALUES (142, 'Sample Taitle 3', 'ok', 58, 'Sample Description', 63, 'htttp', 0.00, 1, 1, 0, '2023-10-19 11:15:11.430000');
INSERT INTO `blog` VALUES (148, 'Sample Taitle 3', 'ok', 65, 'Sample Description', 63, 'htttp', 0.00, 1, 1, 0, '2023-10-19 13:35:55.988000');
INSERT INTO `blog` VALUES (149, 'Sample Taitle 3', 'ok', 65, 'Sample Description', 70, 'htttp', 0.00, 1, 1, 0, '2023-10-19 13:36:39.454000');
INSERT INTO `blog` VALUES (150, 'Sample Taitle 3', 'ok', 65, 'Sample Description', 70, 'htttp', 0.00, 1, 1, 0, '2023-10-19 13:36:42.200000');
INSERT INTO `blog` VALUES (151, 'Sample Taitle 3', 'ok', 65, 'Sample Description', 71, 'htttp', 0.00, 1, 1, 0, '2023-10-19 13:36:45.566000');
INSERT INTO `blog` VALUES (152, 'Sample Taitle 3', 'ok', 65, 'Sample Description', 71, 'htttp', 0.00, 1, 1, 0, '2023-10-19 13:36:51.473000');
INSERT INTO `blog` VALUES (153, 'Sample Taitle 3', 'ok', 65, 'Sample Description', 71, 'htttp', 0.00, 1, 1, 0, '2023-10-19 13:36:57.928000');
INSERT INTO `blog` VALUES (154, 'Sample Taitle 3', 'ok', 65, 'Sample Description', 72, 'htttp', 0.00, 1, 1, 0, '2023-10-19 13:37:04.352000');
INSERT INTO `blog` VALUES (155, 'Sample Taitle 3', 'ok', 65, 'Sample Description', 72, 'htttp', 0.00, 1, 1, 1, '2023-10-19 13:37:07.222000');
INSERT INTO `blog` VALUES (156, 'Sample Taitle 3', 'ok', 65, 'Sample Description', 72, 'htttp', 0.00, 2, 1, 0, '2023-10-19 13:37:15.510000');

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
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog_comment
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
) ENGINE = InnoDB AUTO_INCREMENT = 197 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog_like
-- ----------------------------
INSERT INTO `blog_like` VALUES (2, 43, 58);
INSERT INTO `blog_like` VALUES (16, 42, 58);
INSERT INTO `blog_like` VALUES (19, 105, 58);
INSERT INTO `blog_like` VALUES (20, 105, 68);
INSERT INTO `blog_like` VALUES (21, 141, 68);

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
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog_save
-- ----------------------------
INSERT INTO `blog_save` VALUES (6, 43, 58);
INSERT INTO `blog_save` VALUES (8, 32, 58);
INSERT INTO `blog_save` VALUES (9, 135, 65);

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
INSERT INTO `blog_tag` VALUES (81, 1);
INSERT INTO `blog_tag` VALUES (81, 2);
INSERT INTO `blog_tag` VALUES (81, 3);
INSERT INTO `blog_tag` VALUES (90, 1);
INSERT INTO `blog_tag` VALUES (90, 2);
INSERT INTO `blog_tag` VALUES (90, 3);
INSERT INTO `blog_tag` VALUES (91, 1);
INSERT INTO `blog_tag` VALUES (91, 2);
INSERT INTO `blog_tag` VALUES (91, 3);
INSERT INTO `blog_tag` VALUES (92, 1);
INSERT INTO `blog_tag` VALUES (92, 2);
INSERT INTO `blog_tag` VALUES (92, 3);
INSERT INTO `blog_tag` VALUES (47, 1);
INSERT INTO `blog_tag` VALUES (47, 2);
INSERT INTO `blog_tag` VALUES (47, 3);
INSERT INTO `blog_tag` VALUES (97, 1);
INSERT INTO `blog_tag` VALUES (97, 2);
INSERT INTO `blog_tag` VALUES (97, 3);
INSERT INTO `blog_tag` VALUES (98, 1);
INSERT INTO `blog_tag` VALUES (98, 2);
INSERT INTO `blog_tag` VALUES (98, 3);
INSERT INTO `blog_tag` VALUES (39, 1);
INSERT INTO `blog_tag` VALUES (39, 2);
INSERT INTO `blog_tag` VALUES (39, 3);
INSERT INTO `blog_tag` VALUES (107, 1);
INSERT INTO `blog_tag` VALUES (107, 2);
INSERT INTO `blog_tag` VALUES (107, 3);
INSERT INTO `blog_tag` VALUES (104, 1);
INSERT INTO `blog_tag` VALUES (104, 2);
INSERT INTO `blog_tag` VALUES (104, 3);
INSERT INTO `blog_tag` VALUES (105, 1);
INSERT INTO `blog_tag` VALUES (105, 2);
INSERT INTO `blog_tag` VALUES (105, 3);
INSERT INTO `blog_tag` VALUES (111, 1);
INSERT INTO `blog_tag` VALUES (111, 2);
INSERT INTO `blog_tag` VALUES (111, 3);
INSERT INTO `blog_tag` VALUES (115, 1);
INSERT INTO `blog_tag` VALUES (115, 2);
INSERT INTO `blog_tag` VALUES (115, 3);
INSERT INTO `blog_tag` VALUES (116, 1);
INSERT INTO `blog_tag` VALUES (116, 2);
INSERT INTO `blog_tag` VALUES (116, 3);
INSERT INTO `blog_tag` VALUES (120, 1);
INSERT INTO `blog_tag` VALUES (120, 2);
INSERT INTO `blog_tag` VALUES (120, 3);
INSERT INTO `blog_tag` VALUES (119, 1);
INSERT INTO `blog_tag` VALUES (119, 2);
INSERT INTO `blog_tag` VALUES (119, 3);
INSERT INTO `blog_tag` VALUES (121, 1);
INSERT INTO `blog_tag` VALUES (121, 2);
INSERT INTO `blog_tag` VALUES (121, 3);
INSERT INTO `blog_tag` VALUES (122, 1);
INSERT INTO `blog_tag` VALUES (122, 2);
INSERT INTO `blog_tag` VALUES (122, 3);
INSERT INTO `blog_tag` VALUES (124, 1);
INSERT INTO `blog_tag` VALUES (124, 2);
INSERT INTO `blog_tag` VALUES (124, 3);
INSERT INTO `blog_tag` VALUES (125, 1);
INSERT INTO `blog_tag` VALUES (125, 2);
INSERT INTO `blog_tag` VALUES (125, 3);
INSERT INTO `blog_tag` VALUES (127, 1);
INSERT INTO `blog_tag` VALUES (127, 2);
INSERT INTO `blog_tag` VALUES (127, 3);
INSERT INTO `blog_tag` VALUES (129, 1);
INSERT INTO `blog_tag` VALUES (129, 2);
INSERT INTO `blog_tag` VALUES (129, 3);
INSERT INTO `blog_tag` VALUES (130, 1);
INSERT INTO `blog_tag` VALUES (130, 2);
INSERT INTO `blog_tag` VALUES (130, 3);
INSERT INTO `blog_tag` VALUES (132, 1);
INSERT INTO `blog_tag` VALUES (132, 2);
INSERT INTO `blog_tag` VALUES (132, 3);
INSERT INTO `blog_tag` VALUES (135, 1);
INSERT INTO `blog_tag` VALUES (135, 3);
INSERT INTO `blog_tag` VALUES (138, 1);
INSERT INTO `blog_tag` VALUES (138, 2);
INSERT INTO `blog_tag` VALUES (138, 3);
INSERT INTO `blog_tag` VALUES (139, 1);
INSERT INTO `blog_tag` VALUES (139, 2);
INSERT INTO `blog_tag` VALUES (139, 3);
INSERT INTO `blog_tag` VALUES (141, 1);
INSERT INTO `blog_tag` VALUES (141, 2);
INSERT INTO `blog_tag` VALUES (141, 3);
INSERT INTO `blog_tag` VALUES (142, 1);
INSERT INTO `blog_tag` VALUES (142, 2);
INSERT INTO `blog_tag` VALUES (142, 3);
INSERT INTO `blog_tag` VALUES (148, 1);
INSERT INTO `blog_tag` VALUES (148, 2);
INSERT INTO `blog_tag` VALUES (148, 3);
INSERT INTO `blog_tag` VALUES (149, 1);
INSERT INTO `blog_tag` VALUES (149, 2);
INSERT INTO `blog_tag` VALUES (149, 3);
INSERT INTO `blog_tag` VALUES (150, 1);
INSERT INTO `blog_tag` VALUES (150, 2);
INSERT INTO `blog_tag` VALUES (150, 3);
INSERT INTO `blog_tag` VALUES (151, 1);
INSERT INTO `blog_tag` VALUES (151, 2);
INSERT INTO `blog_tag` VALUES (151, 3);
INSERT INTO `blog_tag` VALUES (152, 1);
INSERT INTO `blog_tag` VALUES (152, 2);
INSERT INTO `blog_tag` VALUES (152, 3);
INSERT INTO `blog_tag` VALUES (153, 1);
INSERT INTO `blog_tag` VALUES (153, 3);
INSERT INTO `blog_tag` VALUES (154, 2);
INSERT INTO `blog_tag` VALUES (154, 3);
INSERT INTO `blog_tag` VALUES (155, 2);
INSERT INTO `blog_tag` VALUES (155, 3);
INSERT INTO `blog_tag` VALUES (156, 2);
INSERT INTO `blog_tag` VALUES (156, 3);

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'A', NULL, NULL, NULL);
INSERT INTO `category` VALUES (2, 'b', NULL, NULL, NULL);
INSERT INTO `category` VALUES (3, 'C', NULL, NULL, NULL);

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `parent_id` bigint NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKde3rfu96lep00br5ov0mdieyt`(`parent_id` ASC) USING BTREE,
  INDEX `FK8kcum44fvpupyw6f5baccx25c`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK8kcum44fvpupyw6f5baccx25c` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKde3rfu96lep00br5ov0mdieyt` FOREIGN KEY (`parent_id`) REFERENCES `comment` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NULL DEFAULT NULL,
  `company` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `company_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of company
-- ----------------------------

-- ----------------------------
-- Table structure for country
-- ----------------------------
DROP TABLE IF EXISTS `country`;
CREATE TABLE `country`  (
  `id` bigint NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKd6qcbtlg5wggwhit1qs0mti2i`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKd6qcbtlg5wggwhit1qs0mti2i` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 55 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of follow
-- ----------------------------
INSERT INTO `follow` VALUES (29, 36, 30);
INSERT INTO `follow` VALUES (30, 35, 36);
INSERT INTO `follow` VALUES (31, 34, 60);
INSERT INTO `follow` VALUES (32, 55, 60);
INSERT INTO `follow` VALUES (33, 66, 32);
INSERT INTO `follow` VALUES (34, 65, 33);
INSERT INTO `follow` VALUES (35, 44, 35);
INSERT INTO `follow` VALUES (36, 48, 63);
INSERT INTO `follow` VALUES (37, 44, 29);
INSERT INTO `follow` VALUES (38, 55, 66);
INSERT INTO `follow` VALUES (39, 44, 57);
INSERT INTO `follow` VALUES (40, 63, 33);
INSERT INTO `follow` VALUES (41, 55, 33);
INSERT INTO `follow` VALUES (42, 59, 32);
INSERT INTO `follow` VALUES (43, 62, 58);
INSERT INTO `follow` VALUES (44, 62, 42);
INSERT INTO `follow` VALUES (49, 57, 42);
INSERT INTO `follow` VALUES (50, 58, 42);

-- ----------------------------
-- Table structure for hibernate_sequence
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of hibernate_sequence
-- ----------------------------
INSERT INTO `hibernate_sequence` VALUES (93);

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
) ENGINE = InnoDB AUTO_INCREMENT = 91 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of refreshtoken
-- ----------------------------
INSERT INTO `refreshtoken` VALUES (31, '2023-10-16 10:33:09.619000', 'f5707472-d367-4dec-a7cd-d1dea8c93aef', 64);
INSERT INTO `refreshtoken` VALUES (32, '2023-10-16 10:38:55.545000', '13037d3d-3e1d-4d24-ae32-fe37a7bfd831', 64);
INSERT INTO `refreshtoken` VALUES (33, '2023-10-16 10:38:56.160000', '8c31de93-1028-42a1-aa90-0c6b6d84910c', 64);
INSERT INTO `refreshtoken` VALUES (34, '2023-10-16 10:38:57.326000', '9231cc21-f944-4cf6-8fc2-dbb3e5eccb41', 64);
INSERT INTO `refreshtoken` VALUES (35, '2023-10-16 10:38:58.256000', '3dcbc5bf-d335-469e-b9d1-8ca7aab251b0', 64);
INSERT INTO `refreshtoken` VALUES (36, '2023-10-16 10:38:59.122000', 'c6585c05-4a29-423d-a631-8f2d2c208be7', 64);
INSERT INTO `refreshtoken` VALUES (37, '2023-10-16 10:38:59.959000', '3766dd2e-d104-4cef-88d0-be2ef0f0032c', 64);
INSERT INTO `refreshtoken` VALUES (38, '2023-10-16 10:39:00.875000', 'fcacfad4-6d66-429d-8258-047b8f729bd9', 64);
INSERT INTO `refreshtoken` VALUES (39, '2023-10-16 10:39:01.709000', '6f6fe1b8-82ec-4b92-9430-7fb2e572348f', 64);
INSERT INTO `refreshtoken` VALUES (40, '2023-10-16 10:39:02.475000', '9c15da68-7fb7-4651-a2da-4ad73f3af786', 64);
INSERT INTO `refreshtoken` VALUES (41, '2023-10-16 10:39:03.327000', '61587609-489f-4f6f-b31b-42bf78a1da0a', 64);
INSERT INTO `refreshtoken` VALUES (42, '2023-10-16 10:39:04.161000', 'bfec7a2c-bcce-4745-a8c3-83f98ec08e4a', 64);
INSERT INTO `refreshtoken` VALUES (43, '2023-10-16 10:39:04.981000', '10afd8a8-639e-4272-abb5-4dc4d4a57e3c', 64);
INSERT INTO `refreshtoken` VALUES (44, '2023-10-16 10:39:05.771000', '38001faf-4638-43bd-8877-5ca2ecc65310', 64);
INSERT INTO `refreshtoken` VALUES (45, '2023-10-16 10:39:06.696000', 'e8d8e132-00ec-4d25-9ee5-a69d6fda5ea1', 64);
INSERT INTO `refreshtoken` VALUES (46, '2023-10-16 10:39:07.548000', '76ecb4af-df99-4222-aba0-603f5cc17085', 64);
INSERT INTO `refreshtoken` VALUES (47, '2023-10-16 10:39:26.076000', '5c4da074-450e-41d0-954e-59a62095d527', 64);
INSERT INTO `refreshtoken` VALUES (48, '2023-10-16 10:39:27.121000', '7deecbf4-f43c-4ca4-8a4a-fe52cb0ecf7f', 64);
INSERT INTO `refreshtoken` VALUES (49, '2023-10-16 10:39:27.805000', '9d1821d7-6774-4898-8083-2a3479ab40ab', 64);
INSERT INTO `refreshtoken` VALUES (50, '2023-10-16 10:39:28.772000', 'd68c6958-28a2-4a61-b886-37114f57ecee', 64);
INSERT INTO `refreshtoken` VALUES (51, '2023-10-16 10:39:29.528000', '0383d8d9-c261-4901-9983-8091275946e4', 64);
INSERT INTO `refreshtoken` VALUES (52, '2023-10-16 10:39:30.311000', 'f2ace6c3-baa7-4b18-8913-7b4c6ad63c1a', 64);
INSERT INTO `refreshtoken` VALUES (53, '2023-10-16 10:39:31.148000', '0086b1f0-bb42-400c-bebe-6dffa483949b', 64);
INSERT INTO `refreshtoken` VALUES (54, '2023-10-16 10:39:31.924000', '18dc3a51-682f-4953-a206-84e3687c0eae', 64);
INSERT INTO `refreshtoken` VALUES (55, '2023-10-16 10:39:33.095000', 'ed1ac067-db14-4eb9-998e-468cf46faf70', 64);
INSERT INTO `refreshtoken` VALUES (56, '2023-10-16 10:39:33.942000', '0e3f6116-8028-4e8a-9f30-38dc38f43609', 64);
INSERT INTO `refreshtoken` VALUES (57, '2023-10-16 10:39:34.760000', '2a02b1b1-2358-4c2e-a8c2-47195fd8ac69', 64);
INSERT INTO `refreshtoken` VALUES (58, '2023-10-16 10:39:35.067000', '40cee2f2-ffcf-4f13-93e3-856c4dc06179', 64);
INSERT INTO `refreshtoken` VALUES (59, '2023-10-16 10:39:36.203000', 'eb1750c3-a368-4040-a3b6-0b5b773c4b29', 64);
INSERT INTO `refreshtoken` VALUES (60, '2023-10-16 10:39:38.164000', 'd136f726-3dd9-4a05-adcf-136c27ffa991', 64);
INSERT INTO `refreshtoken` VALUES (61, '2023-10-16 10:39:38.528000', '03e65286-bb28-4899-aa56-cc08bf226830', 64);
INSERT INTO `refreshtoken` VALUES (62, '2023-10-16 10:39:39.020000', 'f6123c41-11bf-4d04-b2ad-34ced5dda391', 64);
INSERT INTO `refreshtoken` VALUES (63, '2023-10-16 10:40:09.389000', 'fc92faa8-3fc5-4e17-b514-2938bba7e469', 64);
INSERT INTO `refreshtoken` VALUES (64, '2023-10-16 10:40:13.038000', '5b8210b9-abe2-4c06-acf3-ceceda1cfb61', 64);
INSERT INTO `refreshtoken` VALUES (65, '2023-10-16 18:55:53.867000', '8513d8e5-feac-4ac6-82c2-ff99123642cb', 64);
INSERT INTO `refreshtoken` VALUES (66, '2023-10-16 18:56:08.632000', '1e961d8d-edfd-46b3-a3bb-5bf1f1d7b5c2', 64);
INSERT INTO `refreshtoken` VALUES (68, '2023-10-16 19:20:46.192000', '602437d8-4e35-4d62-b7cd-2ed9f205f7ec', 66);
INSERT INTO `refreshtoken` VALUES (69, '2023-10-16 21:42:53.744000', '30d7ae71-cc75-459d-9dbb-bc378f64c94c', 58);
INSERT INTO `refreshtoken` VALUES (74, '2023-10-17 19:55:24.473000', '3f617ae7-0e84-46aa-bfeb-ad3c499153d7', 58);
INSERT INTO `refreshtoken` VALUES (75, '2023-10-18 08:54:46.715000', 'f9bca830-c68d-461c-a308-45417148ead3', 58);
INSERT INTO `refreshtoken` VALUES (76, '2023-10-18 08:57:04.873000', '313910b3-ac60-4a8d-9237-74044f85473a', 67);
INSERT INTO `refreshtoken` VALUES (85, '2023-10-19 09:41:22.649000', '4dfa6890-6d6c-4d71-a565-8e38eb6088d0', 68);
INSERT INTO `refreshtoken` VALUES (86, '2023-10-19 09:42:01.076000', 'd67b1638-3b9e-4955-bce7-4238e9ad3740', 68);
INSERT INTO `refreshtoken` VALUES (87, '2023-10-19 15:38:12.330000', '1b96cbdb-169c-46f7-905f-260f7bc3df05', 68);
INSERT INTO `refreshtoken` VALUES (88, '2023-10-20 09:28:01.119000', '87ce8a9f-3719-4d9e-b556-0a3547c2d2eb', 58);
INSERT INTO `refreshtoken` VALUES (89, '2023-10-20 13:19:23.964000', '909d811e-262f-40a3-a772-cdfc8410af07', 65);
INSERT INTO `refreshtoken` VALUES (90, '2023-10-22 15:25:04.739000', '2f4bca59-d4ed-4978-913d-dd735c698617', 58);

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
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_epk9im9l9q67xmwi4hbed25do`(`name` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `status` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK8w29xem752br0p84wh9h1lble`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FK8w29xem752br0p84wh9h1lble` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `createday` datetime(6) NULL DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `sum_blog` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKhw97yr01d1ma13c0gdes3r5ok`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKhw97yr01d1ma13c0gdes3r5ok` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 73 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of series
-- ----------------------------
INSERT INTO `series` VALUES (15, 'afaf', 19, '2023-08-30 14:01:08.850000', 'Mo ta', 16);
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
INSERT INTO `series` VALUES (61, 'test1', 58, '2023-10-10 21:47:43.503000', 'Mo ta', 3);
INSERT INTO `series` VALUES (62, 'h5hafaftag', 58, '2023-10-12 22:02:36.613000', 'Mo ta', 4);
INSERT INTO `series` VALUES (63, 'hai', 58, '2023-10-12 22:44:37.427000', 'Mo ta', 8);
INSERT INTO `series` VALUES (64, 'hai221', 58, '2023-10-12 22:47:10.245000', 'Mo ta', 3);
INSERT INTO `series` VALUES (65, 'hai221q', 58, '2023-10-12 22:48:41.927000', 'Mo ta', 2);
INSERT INTO `series` VALUES (66, 'haih221q', 58, '2023-10-12 22:52:51.024000', 'Mo ta', 2);
INSERT INTO `series` VALUES (67, 'haih221qh', 58, '2023-10-12 22:55:50.657000', 'Mo ta', 3);
INSERT INTO `series` VALUES (70, 'test', 65, '2023-10-19 13:36:17.928000', 'Mo ta', 2);
INSERT INTO `series` VALUES (71, 'Khoa', 65, '2023-10-19 13:36:22.211000', 'Mo ta', 3);
INSERT INTO `series` VALUES (72, 'lich sử', 65, '2023-10-19 13:36:30.164000', 'Mo ta', 3);

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
  PRIMARY KEY (`id`) USING BTREE,
  FULLTEXT INDEX `name`(`name`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_date` datetime(6) NULL DEFAULT NULL,
  `update_date` datetime NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `second_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `status` int NULL DEFAULT NULL,
  `descriptions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `school` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `company` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `banner_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UKsb8bbouer5wak8vyiiy4pf2bx`(`username` ASC) USING BTREE,
  UNIQUE INDEX `UKob8kqyqqgmefl0aco34akdtpe`(`email` ASC) USING BTREE,
  FULLTEXT INDEX `name`(`name`, `descriptions`, `second_name`)
) ENGINE = InnoDB AUTO_INCREMENT = 69 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (19, 'Hải', NULL, '$2a$10$X8LDlDu4VbEwdfk2DVTkce1SSPFVsMQk1V4k4NGtpDi4vb6Kh0nIu', NULL, '0814069391', '2023-08-25 13:41:20.937000', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (20, 'Hải', NULL, '$2a$10$2.ZjVySeOxlxkALmJEy9VOdSIIMzFFcI6ZpU4DtZ4JDOTWRBPLoMW', NULL, '0814069391', '2023-08-25 14:06:10.922000', '2023-08-25 16:28:54', NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (22, 'Hải', NULL, '$2a$10$IgLOWwjHm5imKEohAPjnvud66Muz8KRAOL1pJGH2cQ8WpATiwm9dW', NULL, '0814069391', '2023-08-26 16:38:29.011000', '2023-09-07 11:20:06', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693275371/q3pjzz3sfbszcldmrcnv.jpg', 'nam', 'Baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (23, 'Hải', NULL, '$2a$10$2LbTQH7tevUm1.Ed04.Rve5NeUtacXm8WjYqmrQhEvEcKbGUW7dmi', NULL, '0814069391', '2023-08-26 16:44:43.976000', '2023-08-26 16:47:34', NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (24, 'Khoa', NULL, '$2a$10$yFKuBcHWiqUoO9exVsPNqukQVb0sfAKbOUbBD1yOximYUjcf6I1Sq', NULL, '0814069391', '2023-08-27 13:33:38.045000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (25, 'Khoa', NULL, '$2a$10$8.XSa9yLYYktXoSevO15BONit5aO0X2xpXSvA9JETV.oqtdH0Agfy', NULL, '0814069391', '2023-09-07 13:32:27.288000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (26, 'Khoa', NULL, '$2a$10$iceJIqv5MFkmHBtE3TtfYuEBunOj88kvbLJRovwRgXz1RY/LC0YNe', NULL, '0814069391', '2023-09-07 13:34:37.391000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (27, 'Khoa', NULL, '$2a$10$Yi0PZQsNgcTANleP/FEC8.CkC.8WGn5gAQb1gMQ0k728wx6lBUi4i', NULL, '0814069391', '2023-09-10 16:50:26.807000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (28, 'Khoa', NULL, '$2a$10$2tNr977OLZzI7Kpau1zwuOe1oBHuc6X5EqRgMmwGTwf1zHuhZo9S6', NULL, '0814069391', '2023-09-10 16:50:43.225000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (29, 'hieu', NULL, '$2a$10$4SYKvJFBATZXSGFbdsO8pu2e47YTBvNTv58L5q48KgUEUB3iRvV4q', NULL, '0814069395', '2023-09-11 13:48:19.029000', NULL, NULL, 'Femnale', 'aa', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (30, 'Khoa', NULL, '$2a$10$e53bgWXABfljtObuu.FmKehzbfFTUcGtHvaE5beeM3fgZ.Zzbcaoe', NULL, '0814069391', '2023-09-11 21:37:36.266000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (32, 'Khoa', NULL, '$2a$10$g5MYGRfENsvukhDRqjtf5eOheHMGVwYXekl40S.u5UIwAtUy6dAem', NULL, '0814069391', '2023-09-12 08:43:12.920000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (33, 'Khoa', NULL, '$2a$10$.7i7Q5C1aC/9ei4bM3nvqOxasJDCWjG6Pmnn52m03Cehhapm7tOjG', NULL, '0814069391', '2023-09-12 08:48:38.123000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (34, 'Khoa', NULL, '$2a$10$D0STwuplRYZfEUDU09PLi.bHIqITEuGzTvWoic3xHaioocHQK/ywm', NULL, '0814069391', '2023-09-12 08:50:28.823000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (35, 'Khoa', NULL, '$2a$10$EXKw8PZqC5rTG8t8Sw1w9u6IzJmUuolNQm/sy/5hfaX/RJ2TJfB2.', NULL, '0814069391', '2023-09-12 09:16:34.758000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (36, 'Khoa', NULL, '$2a$10$ZGAf1RoNdzLRPITuotVMLuyNFTmPiUrp8P9qsMympzu/zyEdxIXaG', NULL, '0814069391', '2023-09-12 09:19:45.230000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (37, 'Khoa', NULL, '$2a$10$a2NZj2WLYjqoXwx9DIlpWuDRJlCS4nbaeRhW.nw/5vSptr6RydQZK', NULL, '0814069391', '2023-09-12 09:29:44.499000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (38, 'Khoa', NULL, '$2a$10$oS//1H82CTRUsoDAbYyKoOSq.Des9EmSiA3R7ofnL4JHGI7l7N/JW', NULL, '0814069391', '2023-09-12 09:35:09.930000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (39, 'Khoa', NULL, '$2a$10$E/cZ7WTFtH6k.2.UTJEYF.vNM9jTxtTrrxguIEy84XKk4Cf4I3N16', NULL, '0814069391', '2023-09-12 10:11:24.022000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (40, 'Khoa', NULL, '$2a$10$ooWCsmVetzaXuume27xDCOqQH1XJx.qw/2K1L2WmRfM1bGcY5Y5Z2', NULL, '0814069391', '2023-09-12 10:19:31.542000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (41, 'Khoa', 'ngocahai0612@gmail.com', '$2a$10$CX.isCWN0Hf7e8HALOj77uzH3gAdtkuJPP77f3l/FjMY9CoSH1bpK', 'baboga', '0814069391', '2023-09-12 10:53:54.418000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (42, 'Khoa', NULL, '$2a$10$TIxIHPEO3PtyTx1WDc9DneUYCKJrzVP4.tB0A1HbUR5Q8vUi2sksq', NULL, '0814069391', '2023-09-12 10:56:57.820000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (43, 'Khoa', NULL, '$2a$10$c2cCfc/.jnpkMkkpQyTVLe0ZrUYpU6jTitbxsiVAMiFFXuADesSde', NULL, '0814069391', '2023-09-12 11:51:29.933000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (44, 'Khoa', NULL, '$2a$10$0l/nOtQ..ptcPKYxazORMOkjldIO.JaKgynCQ5FggJ0h.D.Eo9rf2', NULL, '0814069391', '2023-09-12 11:51:55.022000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
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
INSERT INTO `user` VALUES (58, 'Hải', 'ngocahai06122002aa@gmail.com', '$2a$10$MLEfTIPPOPF1Pusb.2uX3OT8ePVC8ndyomXMY09EZpg4.Frv0OODC', 'admin2', '0814069391', '2023-09-21 08:50:19.154000', '2023-09-24 20:32:00', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696499051/hx7e2dxbza1gjtremmqp.jpg', 'nam', 'Baboga', 1, NULL, 'baac', 'ydfka', 'acadafad', 'aata', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1696499055/demhwc3u3lbu54ryhbhm.jpg');
INSERT INTO `user` VALUES (59, 'baboga', NULL, '$2a$10$yxYrIeuNYk8tEwC0dseazeGTqK0hWEh9KXWdNzpQdBcDDCCdC.FoG', NULL, '0814069391', '2023-09-24 12:07:24.231000', NULL, NULL, 'Male', '1', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (60, 'baboga', NULL, '$2a$10$zt.RjAj/3BRendfziHCxr.I.UTDIi.wjMK6SOiNXRjkZBNfbwUgcW', NULL, '0814069391', '2023-09-24 12:14:43.850000', NULL, NULL, 'Male', 'afa', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (61, 'Đinh Anh Trâm', 'anhtram900@gmail.com', '$2a$10$3z9y4NYExDwteqFDTOwcJuJu/rQne7LaMLA6ApYaznV7S1S/qhRci', 'UserTram', '0814069391', '2023-09-24 16:54:38.887000', '2023-09-24 17:03:04', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693275371/q3pjzz3sfbszcldmrcnv.jpg', 'Male', 'AnhT', 1, '', '', '', '', '', NULL);
INSERT INTO `user` VALUES (62, 'baboga', NULL, '$2a$10$FxhUhdZDX.T7SsiLn8C5i.qIxE7GQ1UETN5bHdd9e8QnglzyVIdSy', NULL, '0814069391', '2023-09-24 17:05:49.871000', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693275371/q3pjzz3sfbszcldmrcnv.jpg', 'Femnale', 'afa', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (63, 'Khoa', NULL, '$2a$10$spdBYEtIbK60nbnpn8Omp.Le7Ki1i9v0bxt2qEncIeRrA43ATZFSy', NULL, '0814069391', '2023-09-26 08:43:36.497000', NULL, NULL, 'nam', 'baboga', 0, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (64, 'baboga', 'ng1ochai06122002@gmail.com', '$2a$10$8yqiRdp3uznrJPXUhKEV5.c.kolDlNGGWMBH13OTRLXd54z4y5wgy', 'UserTramaa', '0814069391', '2023-10-01 11:16:43.232000', NULL, NULL, 'Male', '1', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (65, 'Phan Dai Dang khoa ', 'khoadang88vn@gmail.com', '$2a$10$Qst3491pHdGxr/P0fU3j9ugndfwz53n7IOtHre1OaVgwB/DRPv2Ka', 'pddkhoa', '0973455342', '2023-10-15 09:50:30.000000', NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697339276/ooyaozcuga2v2ht3so4x.png', 'Male', 'pddkhoa', 1, NULL, NULL, NULL, NULL, NULL, 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697338600/xfa3fcejehof514f4fuv.jpg');
INSERT INTO `user` VALUES (66, 'Khoa', 'angochai06122002@gmail.com', '$2a$10$EzGEX/zodEnpS3HXIoPfr.yR.BAm8TKwPWdRRjtghNkz7lAIxTnae', 'userHai', '0814069391', '2023-10-15 19:19:44.005000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (67, 'Lê Trương Ngọc Hải', 'ngochai06122002@gmail.com', '$2a$10$CTMVWnjVMICT.KrpwJOTVOz97a6k8t1NKK3tAHgefsZOUcQbIYGKq', 'UserHaiTest', '0814069391', '2023-10-16 18:17:28.197000', '2023-10-17 09:26:21', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697511638/r4wcsyhdnhf22yyospmr.jpg', 'Male', 'Baboga', 1, 'Mô tả', 'UTE', 'Thủ Đức', '3FORCOM', 'VT', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697511633/elh5chkubmsdvxifhjql.jpg');
INSERT INTO `user` VALUES (68, 'Khoa', 'ngochai06122f002@gmail.com', '$2a$10$VBJ2ghn4UCc9jIcw/Mwqfe0V8zC/M622posRzIsrBOUaOdWjqEg2W', 'userHfai', '0814069391', '2023-10-16 18:18:38.253000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_category
-- ----------------------------
INSERT INTO `user_category` VALUES (78, 2, 58);
INSERT INTO `user_category` VALUES (79, 3, 58);
INSERT INTO `user_category` VALUES (90, 1, 62);
INSERT INTO `user_category` VALUES (92, 1, 58);

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
  CONSTRAINT `FKj0avh5q4feap4g0rkus640u4d` FOREIGN KEY (`following_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_following
-- ----------------------------
INSERT INTO `user_following` VALUES (58, 19);
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
) ENGINE = InnoDB AUTO_INCREMENT = 46 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
INSERT INTO `user_images` VALUES (41, 65, '2023-10-15 09:50:30', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697338445/zsfucnxcn8jcizmp86pp.jpg');
INSERT INTO `user_images` VALUES (42, 65, '2023-10-15 09:50:30', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697338713/aomrlankjm1nkzcdh0qo.png');
INSERT INTO `user_images` VALUES (43, 65, '2023-10-15 09:50:30', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697338896/vnkaf3v6s3ksay05fqub.jpg');
INSERT INTO `user_images` VALUES (44, 65, '2023-10-15 09:50:30', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697339276/ooyaozcuga2v2ht3so4x.png');
INSERT INTO `user_images` VALUES (45, 67, '2023-10-16 18:17:28', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1697511638/r4wcsyhdnhf22yyospmr.jpg');

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

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
INSERT INTO `user_role` VALUES (65, 2);
INSERT INTO `user_role` VALUES (66, 2);
INSERT INTO `user_role` VALUES (67, 2);
INSERT INTO `user_role` VALUES (68, 2);

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
INSERT INTO `verification_token` VALUES (4, '2023-10-16 00:00:00', b'1', '586749', 65);
INSERT INTO `verification_token` VALUES (7, '2023-08-27 00:00:00', b'0', '800041', 22);
INSERT INTO `verification_token` VALUES (8, '2023-08-27 00:00:00', b'1', '386099', 23);
INSERT INTO `verification_token` VALUES (49, '2023-08-28 00:00:00', b'0', '665894', 24);
INSERT INTO `verification_token` VALUES (67, '2023-10-16 00:00:00', b'1', '804544', 66);
INSERT INTO `verification_token` VALUES (71, '2023-10-17 00:00:00', b'1', '909118', 67);
INSERT INTO `verification_token` VALUES (73, '2023-10-17 00:00:00', b'0', '316105', 68);
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
