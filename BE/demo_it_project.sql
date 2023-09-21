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

 Date: 22/09/2023 06:19:25
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
  `create_date` datetime NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status_id` int NULL DEFAULT NULL,
  `user_id` bigint NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `series_id` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`blog_id`) USING BTREE,
  INDEX `FK_Own`(`user_id` ASC) USING BTREE,
  INDEX `series_id`(`series_id` ASC) USING BTREE,
  CONSTRAINT `blog_ibfk_1` FOREIGN KEY (`series_id`) REFERENCES `series` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKpxk2jtysqn41oop7lvxcp6dqq` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES (14, 'Sample Title', '2023-08-30 14:23:42', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (15, 'Sample Title', '2023-08-30 14:26:45', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (16, 'Sample Title 3', '2023-08-30 14:40:14', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (17, 'Sample Title 3', '2023-08-30 15:48:24', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (18, 'Sample Title 3', '2023-08-30 15:49:46', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (19, 'Sample Title 3', '2023-08-30 16:02:31', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (20, 'Sample Title 3', '2023-08-30 16:02:53', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (21, 'Sample Title 3', '2023-08-30 16:05:13', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (22, 'Sample Title 3', '2023-08-30 16:10:28', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (23, 'Sample Title 3', '2023-08-30 16:11:32', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (24, 'Sample Title 3', '2023-08-30 16:13:47', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (25, 'Sample Title 3', '2023-08-30 16:26:06', 'Sample Content', 1, 22, 'Sample Description', 15);
INSERT INTO `blog` VALUES (26, 'Sample Title 3', '2023-09-19 10:59:10', 'Sample Content', 1, 54, 'Sample Description', 15);

-- ----------------------------
-- Table structure for blog_category
-- ----------------------------
DROP TABLE IF EXISTS `blog_category`;
CREATE TABLE `blog_category`  (
  `blog_id` bigint NOT NULL,
  `category_id` bigint NOT NULL,
  INDEX `category_id`(`category_id` ASC) USING BTREE,
  INDEX `blog_id`(`blog_id` ASC) USING BTREE,
  CONSTRAINT `blog_category_ibfk_1` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FK8a7ce7r99t0y43e88h9p4bipr` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_category
-- ----------------------------
INSERT INTO `blog_category` VALUES (14, 1);
INSERT INTO `blog_category` VALUES (14, 2);
INSERT INTO `blog_category` VALUES (14, 3);
INSERT INTO `blog_category` VALUES (15, 1);
INSERT INTO `blog_category` VALUES (15, 2);
INSERT INTO `blog_category` VALUES (15, 3);
INSERT INTO `blog_category` VALUES (16, 1);
INSERT INTO `blog_category` VALUES (16, 2);
INSERT INTO `blog_category` VALUES (16, 3);
INSERT INTO `blog_category` VALUES (17, 1);
INSERT INTO `blog_category` VALUES (17, 2);
INSERT INTO `blog_category` VALUES (17, 3);
INSERT INTO `blog_category` VALUES (18, 1);
INSERT INTO `blog_category` VALUES (18, 2);
INSERT INTO `blog_category` VALUES (18, 3);
INSERT INTO `blog_category` VALUES (19, 1);
INSERT INTO `blog_category` VALUES (19, 2);
INSERT INTO `blog_category` VALUES (19, 3);
INSERT INTO `blog_category` VALUES (20, 1);
INSERT INTO `blog_category` VALUES (20, 2);
INSERT INTO `blog_category` VALUES (20, 3);
INSERT INTO `blog_category` VALUES (21, 1);
INSERT INTO `blog_category` VALUES (21, 2);
INSERT INTO `blog_category` VALUES (21, 3);
INSERT INTO `blog_category` VALUES (22, 1);
INSERT INTO `blog_category` VALUES (22, 2);
INSERT INTO `blog_category` VALUES (22, 3);
INSERT INTO `blog_category` VALUES (23, 1);
INSERT INTO `blog_category` VALUES (23, 2);
INSERT INTO `blog_category` VALUES (23, 3);
INSERT INTO `blog_category` VALUES (24, 1);
INSERT INTO `blog_category` VALUES (24, 2);
INSERT INTO `blog_category` VALUES (24, 3);
INSERT INTO `blog_category` VALUES (25, 1);
INSERT INTO `blog_category` VALUES (25, 2);
INSERT INTO `blog_category` VALUES (25, 3);
INSERT INTO `blog_category` VALUES (26, 1);
INSERT INTO `blog_category` VALUES (26, 2);
INSERT INTO `blog_category` VALUES (26, 3);

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
) ENGINE = InnoDB AUTO_INCREMENT = 181 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_image
-- ----------------------------
INSERT INTO `blog_image` VALUES (178, '2023-08-30 16:13:47.593000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693386819/unobodpsafippwebz1z1.jpg', 24);
INSERT INTO `blog_image` VALUES (179, '2023-08-30 16:13:47.605000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693386823/pqo5hypdotlkdwfowxto.jpg', 24);
INSERT INTO `blog_image` VALUES (180, '2023-08-30 16:26:05.577000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693387558/vtn6ngzyabisjujzxrrs.jpg', 25);

-- ----------------------------
-- Table structure for blog_tag
-- ----------------------------
DROP TABLE IF EXISTS `blog_tag`;
CREATE TABLE `blog_tag`  (
  `blog_id` bigint NOT NULL,
  `tag_id` bigint NOT NULL,
  INDEX `tag_id`(`tag_id` ASC) USING BTREE,
  INDEX `blog_id`(`blog_id` ASC) USING BTREE,
  CONSTRAINT `blog_tag_ibfk_1` FOREIGN KEY (`blog_id`) REFERENCES `blog` (`blog_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKt7qwebglmm62nfymnl5xwpbws` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_tag
-- ----------------------------
INSERT INTO `blog_tag` VALUES (14, 1);
INSERT INTO `blog_tag` VALUES (14, 2);
INSERT INTO `blog_tag` VALUES (14, 3);
INSERT INTO `blog_tag` VALUES (15, 1);
INSERT INTO `blog_tag` VALUES (15, 2);
INSERT INTO `blog_tag` VALUES (15, 3);
INSERT INTO `blog_tag` VALUES (16, 1);
INSERT INTO `blog_tag` VALUES (16, 2);
INSERT INTO `blog_tag` VALUES (16, 3);
INSERT INTO `blog_tag` VALUES (17, 1);
INSERT INTO `blog_tag` VALUES (17, 2);
INSERT INTO `blog_tag` VALUES (17, 3);
INSERT INTO `blog_tag` VALUES (18, 1);
INSERT INTO `blog_tag` VALUES (18, 2);
INSERT INTO `blog_tag` VALUES (18, 3);
INSERT INTO `blog_tag` VALUES (19, 1);
INSERT INTO `blog_tag` VALUES (19, 2);
INSERT INTO `blog_tag` VALUES (19, 3);
INSERT INTO `blog_tag` VALUES (20, 1);
INSERT INTO `blog_tag` VALUES (20, 2);
INSERT INTO `blog_tag` VALUES (20, 3);
INSERT INTO `blog_tag` VALUES (21, 1);
INSERT INTO `blog_tag` VALUES (21, 2);
INSERT INTO `blog_tag` VALUES (21, 3);
INSERT INTO `blog_tag` VALUES (22, 1);
INSERT INTO `blog_tag` VALUES (22, 2);
INSERT INTO `blog_tag` VALUES (22, 3);
INSERT INTO `blog_tag` VALUES (23, 1);
INSERT INTO `blog_tag` VALUES (23, 2);
INSERT INTO `blog_tag` VALUES (23, 3);
INSERT INTO `blog_tag` VALUES (24, 1);
INSERT INTO `blog_tag` VALUES (24, 2);
INSERT INTO `blog_tag` VALUES (24, 3);
INSERT INTO `blog_tag` VALUES (25, 1);
INSERT INTO `blog_tag` VALUES (25, 2);
INSERT INTO `blog_tag` VALUES (25, 3);
INSERT INTO `blog_tag` VALUES (26, 1);
INSERT INTO `blog_tag` VALUES (26, 2);
INSERT INTO `blog_tag` VALUES (26, 3);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'A');
INSERT INTO `category` VALUES (2, 'b');
INSERT INTO `category` VALUES (3, 'C');

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
INSERT INTO `hibernate_sequence` VALUES (216);

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
INSERT INTO `refreshtoken` VALUES (166, '2023-09-18 15:02:10.556000', '77df6699-65a8-4168-8e96-d2d6d7a2c459', 54);
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
  `sum_blog` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKhw97yr01d1ma13c0gdes3r5ok`(`user_id` ASC) USING BTREE,
  CONSTRAINT `FKhw97yr01d1ma13c0gdes3r5ok` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 46 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of series
-- ----------------------------
INSERT INTO `series` VALUES (15, 'afaf', 22, '2023-08-30 14:01:08.850000', 'Mo ta', 12);
INSERT INTO `series` VALUES (17, 'afarurf', 22, '2023-08-30 14:44:38.881000', 'Mo ta', NULL);
INSERT INTO `series` VALUES (18, 'hrhrh', 22, '2023-08-30 14:50:58.917000', 'Mo ta', 0);
INSERT INTO `series` VALUES (19, 'hrgsshrh', 22, '2023-08-30 15:22:48.495000', 'Mo ta', 0);
INSERT INTO `series` VALUES (20, 'hrggsgssshrh', 22, '2023-08-30 16:20:40.512000', 'Mo ta', 0);
INSERT INTO `series` VALUES (21, 'hrggsssshrh', 22, '2023-08-30 16:22:40.519000', 'Mo ta', 0);
INSERT INTO `series` VALUES (22, 'fjfjffj', 22, '2023-08-30 16:25:11.131000', 'Mo ta', 0);
INSERT INTO `series` VALUES (23, 'fjfjflfj', 22, '2023-08-30 16:31:44.465000', 'Mo ta', 0);
INSERT INTO `series` VALUES (24, 'jflfj', 22, '2023-08-30 16:36:20.528000', 'Mo ta', 0);
INSERT INTO `series` VALUES (25, 'djflfj', 22, '2023-08-30 16:40:51.608000', 'Mo ta', 0);
INSERT INTO `series` VALUES (26, 'djflhdhdfj', 22, '2023-08-30 16:40:55.372000', 'Mo ta', 0);
INSERT INTO `series` VALUES (27, 'djfgjgdhdfj', 22, '2023-08-30 16:44:57.339000', 'Mo ta', 0);
INSERT INTO `series` VALUES (28, 'djfgjgdiyi77hdfj', 22, '2023-08-30 16:48:55.805000', 'Mo ta', 0);
INSERT INTO `series` VALUES (29, 'djfgjgdiyi7hdfj', 22, '2023-08-30 16:50:36.570000', 'Mo ta', 0);
INSERT INTO `series` VALUES (30, 'djfgdiyi7hdfj', 22, '2023-08-30 16:51:24.503000', 'Mo ta', 0);
INSERT INTO `series` VALUES (31, 'djfgyi7hdfj', 22, '2023-08-30 16:57:32.418000', 'Mo ta', 0);
INSERT INTO `series` VALUES (32, 'gyi7hdfj', 22, '2023-08-30 17:00:08.692000', 'Mo ta', 0);
INSERT INTO `series` VALUES (33, 'gywthdfj', 22, '2023-08-30 17:05:01.672000', 'Mo ta', 0);
INSERT INTO `series` VALUES (34, 'gywfj', 22, '2023-08-30 17:06:09.353000', 'Mo ta', 0);
INSERT INTO `series` VALUES (35, 'gyafafwfj', 22, '2023-08-30 17:08:30.481000', 'Mo ta', 0);
INSERT INTO `series` VALUES (36, 'gyafagssfwfj', 22, '2023-08-30 17:08:59.940000', 'Mo ta', 0);
INSERT INTO `series` VALUES (37, 'gfagssfwfj', 22, '2023-08-30 17:10:48.864000', 'Mo ta', 0);
INSERT INTO `series` VALUES (38, 'gfagsswfj', 22, '2023-08-30 17:11:29.816000', 'Mo ta', 0);
INSERT INTO `series` VALUES (39, 'gfagssiwfj', 22, '2023-08-30 17:13:15.187000', 'Mo ta', 0);
INSERT INTO `series` VALUES (40, 'gfagssfj', 22, '2023-09-05 13:42:26.181000', 'Mo ta', 0);
INSERT INTO `series` VALUES (41, 'gfagJssfj', 22, '2023-09-05 13:45:59.320000', 'Mo ta', 0);
INSERT INTO `series` VALUES (42, 'gfagJss', 22, '2023-09-05 13:47:37.582000', 'Mo ta', 0);
INSERT INTO `series` VALUES (43, 'gfJss', 22, '2023-09-05 13:48:21.638000', 'Mo ta', 0);
INSERT INTO `series` VALUES (44, 'gss', 22, '2023-09-05 13:51:35.859000', 'Mo ta', 0);
INSERT INTO `series` VALUES (45, 'gass', 22, '2023-09-05 13:52:42.639000', 'Mo ta', 0);

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
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of series_image
-- ----------------------------
INSERT INTO `series_image` VALUES (3, '2023-08-30 17:08:30.518000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693389074/j5xq4jzfxiabbnphp5ve.jpg', 35);
INSERT INTO `series_image` VALUES (4, '2023-08-30 17:08:30.526000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693389444/j3wycg8mprr7qzfciein.jpg', 35);
INSERT INTO `series_image` VALUES (5, '2023-08-30 17:08:30.532000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693390098/j6hqyzkmqwkqjjbfvtp1.jpg', 35);
INSERT INTO `series_image` VALUES (6, '2023-08-30 17:11:29.822000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693390279/pnbmrv7w62wvo4csa4rx.jpg', 38);
INSERT INTO `series_image` VALUES (7, '2023-09-05 13:48:21.644000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693896489/stzhf2gquhg7uhevuopt.jpg', 43);
INSERT INTO `series_image` VALUES (8, '2023-09-05 13:51:35.895000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693896685/nfddp8gcq2rbjzd9vdwe.jpg', 44);
INSERT INTO `series_image` VALUES (9, '2023-09-05 13:52:42.675000', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693896756/bo3m4hfl0husmzjkanja.jpg', 45);

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag`  (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tag
-- ----------------------------
INSERT INTO `tag` VALUES (1, 'Khoa học ');
INSERT INTO `tag` VALUES (2, 'Công Nghệ');
INSERT INTO `tag` VALUES (3, 'Giáo dục');

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
) ENGINE = InnoDB AUTO_INCREMENT = 59 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
INSERT INTO `user` VALUES (41, 'Khoa', 'ngochai0612@gmail.com', '$2a$10$CX.isCWN0Hf7e8HALOj77uzH3gAdtkuJPP77f3l/FjMY9CoSH1bpK', 'baboga', '0814069391', '2023-09-12 10:53:54.418000', NULL, NULL, 'nam', 'baboga', 1, NULL, NULL, NULL, NULL, NULL, NULL);
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
INSERT INTO `user` VALUES (58, 'Khoa', 'ngochai06122002@gmail.com', '$2a$10$MLEfTIPPOPF1Pusb.2uX3OT8ePVC8ndyomXMY09EZpg4.Frv0OODC', 'admin2', '0814069391', '2023-09-21 08:50:19.154000', '2023-09-21 14:24:30', NULL, 'nam', 'baboga', 2, NULL, NULL, NULL, NULL, NULL, NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_banner
-- ----------------------------

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
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_images
-- ----------------------------
INSERT INTO `user_images` VALUES (1, 22, '2023-08-26 16:38:29', 'http://res.cloudinary.com/dmpru0wgq/image/upload/v1693275371/q3pjzz3sfbszcldmrcnv.jpg');

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

SET FOREIGN_KEY_CHECKS = 1;
