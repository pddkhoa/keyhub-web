import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export enum REQUEST_METHOD {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
  PATCH = "patch",
}

export enum REQUEST_TYPE {
  LOGIN = "login",
  LOGOUT = "logout",
  REGISTER = "register",
  FORFOTPASSORD = "forgotpassword",
  CHECK_OTP = "check_otp",
  VERIFY = "verify",
  RESETPASSWORD = "resetpassword",

  // user
  UPDATE_USER = "update_user",
  UPLOAD_AVATAR = "upload_avatar",
  UPLOAD_BANNER = "upload_banner",
  USER = "users",
  DELETE_USER = "delete_user",
  ADD_USER = "add_user",
  SUGGEST_USER = "suggest_user",
  GET_USER_ID = "get_user_id",
  FOLLOW_USER = "follow_user",
  UNFOLLOW_USER = "unfollow_user",

  //
  ADD_SERIES = "add_series",
  LIST_SERIES = "list_series",
  DELETE_SERIES = "delete_series",
  LIST_SERIES_USER = "list_series_user",

  // blog
  LIST_BLOG = "list_blog",
  LIST_BLOG_BY_SERIES = "list_blog_by_user",
  DELETE_BLOG = "delete_blog",
  BOOKMARK_BLOG = "bookmark_blog",
  UNBOOKMARK_BLOG = "unbookmark_blog",
  LIST_BLOG_BOOKMARK = "list_blog_bookmark",
  LIST_BLOG_DRAFT = "list_blog_draft",
  LIST_BLOG_FEED = "list_blog_feed",
  LIST_BLOG_LASTEST = "list_blog_lastest",
  LIST_BLOG_MOSTLIKE = "list_blog_mostlike",
  LIST_BLOG_MOSTVIEW = "list_blog_mostview",
  LIST_BLOG_POPULAR = "list_blog_popular",

  GET_BLOG_BY_USER = "get_blog_by_user",

  GET_DETAIL = "get_detail",

  LIKE_BLOG = "like_blog",
  HIDE_BLOG = "hide_blog",

  // user

  GET_LIST_USER_FOLLOWER = "get_list_user_follower",
  GET_LIST_USER_FOLLOWING = "get_list_user_following",

  // comment
  GET_COMMENT = "get_commnet",
  DELETE_COMMENT = "delete_comment",
  ADD_COMMENT = "add_comment",
  REPLY_COMMENT = "reply_comment",

  // categories
  GET_LIST_CATEGORIES = "get_list_categories",
  GET_LIST_USER_FOLLOW_CATE = "get_list_user_follow_cate",
  SEARCH_BLOG_CATEGORIES = "search_blog_categories",

  //
}

export type RequestConfig = {
  url: string | undefined;
  method: REQUEST_METHOD;
  isShowToast?: boolean;
  isDispatch: boolean;
  action?: ActionCreatorWithPayload<any, string>;
  customAction?: boolean;
  formMutil?: boolean;
  showModal?: boolean;
  redirect?: {
    success?: string;
    error?: string;
  };
  isToken: boolean;
};

export type SendRequestProps = {
  type: REQUEST_TYPE;
  data?: any;
  slug?: string;
};
