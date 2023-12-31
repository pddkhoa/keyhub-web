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

    GET_ONE_BLOG = "get_one_blog",
    GET_BLOG_RIGHT = "get_blog_right",
    GET_BLOG_LEFT = "get_blog_left",
    GET_5_BLOG = "get_5_blog",

    // user

    GET_LIST_USER_FOLLOWER = "get_list_user_follower",
    GET_LIST_USER_FOLLOWING = "get_list_user_following",
    GET_LIST_USER_SEARCH = "get_list_user_search",
    UNBLOCK_USER = "unblock_user",

    // comment
    GET_COMMENT = "get_commnet",
    DELETE_COMMENT = "delete_comment",
    ADD_COMMENT = "add_comment",
    REPLY_COMMENT = "reply_comment",

    // categories
    GET_LIST_CATEGORIES = "get_list_categories",
    GET_LIST_USER_FOLLOW_CATE = "get_list_user_follow_cate",
    SEARCH_BLOG_CATEGORIES = "search_blog_categories",
    GET_BLOG_CATEGORIES = "get_blog_categories",
    GET_BLOG_CATEGORIES_BY_ID = "get_blog_categories_by_id",
    UPDATE_CATEGORIES = "update_categories",
    UPLOAD_AVATAR_CATEGORIES = "upload_avatar_categories",
    ADD_NEW_CATEGORIES = "add_new_categories",
    DELETE_CATEGORIES = "delete_categories",

    //Admin
    ADMIN_GET_ALLBLOG = "admin_get_allblog",
    ADMIN_GET_SIZE_ALLBLOG = "admin_get_size_allblog",

    ADMIN_GET_ALLUSER = "admin_get_alluser",
    ADMIN_GET_SIZE_ALLUSER = "admin_get_size_alluser",
    ADMIN_GET_CATEGORIES = "admin_get_categories",
    ADMIN_GET_TAGS = "admin_get_tags",

    ADMIN_GET_BLOG_REPORT = "admin_get_blog_report",
    ADMIN_GET_SIZE_BLOG_REPORT = "admin_get_size_blog_report",

    ADMIN_GET_USER_REPORT = "admin_get_user_report",
    ADMIN_GET_SIZE_USER_REPORT = "admin_get_size_user_report",

    ADMIN_GET_USER_BLOCK = "admin_get_user_block",
    ADMIN_GET_SIZE_USER_BLOCK = "admin_get_size_user_block",

    ADMIN_UPDATE_USER = "admin_update_user",
    ADMIN_DELETE_USER = "admin_delete_user",

    ADMIN_ADD_TAG = "admin_add_tag",
    ADMIN_DELETE_TAG = "admin_delete_tag",
    ADMIN_EDIT_TAG = "admin_edit_tag",

    ADMIN_DELETE_BLOG = "admin_delete_blog",

    ADMIN_EVALUTE_USER = "admin_evalute_user",
    ADMIN_EVALUTE_BLOG = "admin_evalute_blog",

    ADMIN_CHART_CIRCLE = "admin_chart_circle",
    ADMIN_CHART_BLOG_MONTH = "admin_chart_blog_month",
    ADMIN_CHART_BLOG_YEAR = "admin_chart_blog_year",
    ADMIN_CHART_USER_YEAR = "admin_chart_user_year",

    ADMIN_COMMENT_REPORT = "admin_comment_report",
    ADMIN_EVALUTE_REPORT = "admin_evalute_report",

    //Chat

    GET_LIST_CHAT = "get_list_chat",
    GET_LIST_CHAT_MESSAGES = "get_list_chat_messages",
    SEND_MESSAGES = "send_messages",
    START_CHAT = "start_chat",
    DELETE_CHAT = "delete_chat",

    // Notification

    GET_LIST_NOTIFICATION = "get_list_notification",
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
