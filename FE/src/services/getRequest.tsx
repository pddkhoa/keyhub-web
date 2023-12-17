import {
    addNewCategorySuccess,
    addNewTagSuccess,
    deleteAdminBlogSuccess,
    deleteCategoriesSuccess,
    deleteTagSuccess,
    deleteUserSuccess,
    editTagSuccess,
    evaluteBlogSuccess,
    evaluteCommentReportSuccess,
    evaluteUserSuccess,
    getBlogChartByMonthSuccess,
    getBlogChartByYearSuccess,
    getCategoriesByIdSuccess,
    getDataChartCircleSuccess,
    getListAllBlogSuccess,
    getListAllCategoriesSuccess,
    getListAllTagsSuccess,
    getListAllUserSuccess,
    getListBlogReportSuccess,
    getListCommentReportSuccess,
    getListUserBlockSuccess,
    getListUserReportSuccess,
    getSizeAllBlogSuccess,
    getSizeAllUserSuccess,
    getSizeBlogReporttSuccess,
    getSizeUserBlockSuccess,
    getSizeUserReportSuccess,
    getUserChartByYearSuccess,
    unBlockSuccess,
    updateCategoriesByIdSuccess,
    updateUserAdminSuccess,
    uploadAvatarCategoriesSuccess,
} from "@/redux/adminSlice";
import {
    loginSuccess,
    logOutSuccess,
    updateRegister,
    updateVerify,
    updateRegisterEmail,
} from "@/redux/authSlice";
import {
    getBlogSuccess,
    deleteBlogSuccess,
    isBookmark,
    unBookmark,
    getBlogBookmarkSuccess,
    likeBlogSuccess,
    getBlogDraftSuccess,
    hideBlogSuccess,
    getBlogFeedSuccess,
    detailBlogSuccess,
    getBlogByUserSuccess,
} from "@/redux/blogSlice";
import {
    getBlogCategoriesSuccess,
    getBlogSearchSuccess,
    getListCateSuccess,
    getListUserFollowCateSuccess,
} from "@/redux/categoriesSlice";
import {
    deleteListChatSuccess,
    getListChatMessagesSuccess,
    getListChatSuccess,
    sendMessagesSuccess,
    startChatMessagesSuccess,
} from "@/redux/chatSlice";
import {
    addComment,
    deleteComment,
    getCommentsSuccess,
} from "@/redux/commentSlice";
import {
    getBlog4LeftSuccess,
    getBlog4RightSuccess,
    getBlog5PopularSuccess,
    getBlogLastestSuccess,
    getBlogMostLikeSuccess,
    getBlogMostViewSuccess,
    getBlogOnePopularSuccess,
    getBlogPopularSuccess,
} from "@/redux/exploreSlice";
import { getListNotificationSuccess } from "@/redux/notificationSlice";
import {
    addSeries,
    deleteSeriesSuccess,
    getBlogBySeriesSuccess,
    getSeriesByUserSuccess,
    getSeriesSuccess,
} from "@/redux/seriesSlice";
import {
    updateUserSuccess,
    uploadBanerSuccess,
    uploadAvatarSuccess,
    getUserSuggestSuccess,
    getUserByIdSuccess,
    followUserSuccess,
    unfollowUserSuccess,
    getListFollowingSuccess,
    getListFollowerSuccess,
    getListUserSearchSuccess,
} from "@/redux/userSlice";
import { REQUEST_TYPE, RequestConfig, REQUEST_METHOD } from "@/types";

const BASE_URL = "http://localhost:8081/api";

export const getRequestConfig = (
    type: REQUEST_TYPE,
    slug?: string
): RequestConfig | undefined => {
    switch (type) {
        case REQUEST_TYPE.LOGIN:
            return {
                url: `${BASE_URL}/auth/login`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                isToken: false,
                action: loginSuccess,
                redirect: {
                    success: "/",
                },
            };
        case REQUEST_TYPE.LOGOUT:
            return {
                url: `${BASE_URL}/auth/logout?refreshToken=${slug}`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                isToken: true,
                action: logOutSuccess,
                redirect: {
                    success: "/login",
                },
            };
        case REQUEST_TYPE.REGISTER:
            return {
                url: `${BASE_URL}/auth/signup`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                isToken: false,
                action: updateRegister,
                redirect: {
                    success: "/verify",
                },
            };
        case REQUEST_TYPE.VERIFY:
            return {
                url: `${BASE_URL}/auth/verify-account?token=${slug}`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                isToken: false,
                action: updateVerify,
                redirect: {
                    success: "/login",
                },
            };
        case REQUEST_TYPE.FORFOTPASSORD:
            return {
                url: `${BASE_URL}/auth/forgot-password?email=${slug}`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                isToken: false,
                action: updateRegisterEmail,
                redirect: {
                    success: "/confirmmail",
                },
            };
        case REQUEST_TYPE.CHECK_OTP:
            return {
                url: `${BASE_URL}/auth/veriry-otp`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: false,
                isToken: false,
                redirect: {
                    success: "/resetpassword",
                },
            };

        case REQUEST_TYPE.RESETPASSWORD:
            return {
                url: `${BASE_URL}/auth/reset-password`,
                method: REQUEST_METHOD.PATCH,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: updateRegisterEmail,
                isToken: false,
                redirect: {
                    success: "/login",
                },
            };
        case REQUEST_TYPE.UPDATE_USER:
            return {
                url: `${BASE_URL}/v1/users/change-info`,
                method: REQUEST_METHOD.PATCH,
                isShowToast: true,
                isDispatch: true,
                action: updateUserSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.UPLOAD_BANNER:
            return {
                url: `${BASE_URL}/v1/users/change-banner`,
                method: REQUEST_METHOD.PATCH,
                isShowToast: true,
                isDispatch: true,
                action: uploadBanerSuccess,
                isToken: true,
                formMutil: true,
            };
        case REQUEST_TYPE.UPLOAD_AVATAR:
            return {
                url: `${BASE_URL}/v1/users/change-avatar`,
                method: REQUEST_METHOD.PATCH,
                isShowToast: true,
                isDispatch: true,
                action: uploadAvatarSuccess,
                isToken: true,
                formMutil: true,
            };

        case REQUEST_TYPE.ADD_SERIES:
            return {
                url: `${BASE_URL}/v1/blog/add-series`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                showModal: true,
                action: addSeries,
                isToken: true,
            };

        case REQUEST_TYPE.DELETE_SERIES:
            return {
                url: `${BASE_URL}/v1/blog/remove-series/${slug}`,
                method: REQUEST_METHOD.DELETE,
                isShowToast: true,
                isDispatch: true,
                showModal: true,
                customAction: true,
                action: deleteSeriesSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.LIST_SERIES:
            return {
                url: `${BASE_URL}/v1/blog/series/list`,
                method: REQUEST_METHOD.GET,
                isDispatch: true,
                action: getSeriesSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.LIST_SERIES_USER:
            return {
                url: `${BASE_URL}/v1/wall/${slug}/series`,
                method: REQUEST_METHOD.GET,
                isDispatch: true,
                action: getSeriesByUserSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.LIST_BLOG_BY_SERIES:
            return {
                url: `${BASE_URL}/v1/list/blog/series/${slug}`,
                method: REQUEST_METHOD.GET,
                isDispatch: true,
                action: getBlogBySeriesSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.LIST_BLOG:
            return {
                url: `${BASE_URL}/v1/blog/user`,
                method: REQUEST_METHOD.GET,
                isDispatch: true,
                action: getBlogSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.DELETE_BLOG:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/delete`,
                method: REQUEST_METHOD.DELETE,
                isShowToast: true,
                isDispatch: true,
                showModal: true,
                customAction: true,
                action: deleteBlogSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.BOOKMARK_BLOG:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/save`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                showModal: true,
                customAction: true,
                action: isBookmark,
                isToken: true,
            };
        case REQUEST_TYPE.UNBOOKMARK_BLOG:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/cancel-save`,
                method: REQUEST_METHOD.DELETE,
                isShowToast: true,
                isDispatch: true,
                showModal: true,
                customAction: true,
                action: unBookmark,
                isToken: true,
            };
        case REQUEST_TYPE.LIST_BLOG_BOOKMARK:
            return {
                url: `${BASE_URL}/v1/list/blog/save`,
                method: REQUEST_METHOD.GET,
                isDispatch: true,
                showModal: true,
                action: getBlogBookmarkSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.LIST_BLOG_DRAFT:
            return {
                url: `${BASE_URL}/v1/list/blog/draft`,
                method: REQUEST_METHOD.GET,
                isDispatch: true,
                showModal: true,
                action: getBlogDraftSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.LIKE_BLOG:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/like`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                showModal: true,
                customAction: true,
                action: likeBlogSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.SUGGEST_USER:
            return {
                url: `${BASE_URL}/v1/network/follow`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getUserSuggestSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.HIDE_BLOG:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/hide`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                customAction: true,
                showModal: true,
                isDispatch: true,
                action: hideBlogSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.LIST_BLOG_FEED:
            return {
                url: `${BASE_URL}/v1/list/blog/${slug}/feed`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlogFeedSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_USER_ID:
            return {
                url: `${BASE_URL}/v1/user-interactions/${slug}`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getUserByIdSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.FOLLOW_USER:
            return {
                url: `${BASE_URL}/v1/user-interactions/${slug}/follow`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                action: followUserSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.UNFOLLOW_USER:
            return {
                url: `${BASE_URL}/v1/user-interactions/${slug}/follow`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                action: unfollowUserSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_DETAIL:
            return {
                url: `${BASE_URL}/v1/blog/${slug}`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: detailBlogSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.GET_COMMENT:
            return {
                url: `${BASE_URL}/v1/list/blog/${slug}/commentBlog`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getCommentsSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.DELETE_COMMENT:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/delete-comment`,
                method: REQUEST_METHOD.DELETE,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: deleteComment,
                isToken: true,
            };
        case REQUEST_TYPE.ADD_COMMENT:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/comment`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                action: addComment,
                isToken: true,
            };
        case REQUEST_TYPE.REPLY_COMMENT:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/reply-comment`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                action: addComment,
                isToken: true,
            };

        case REQUEST_TYPE.LIST_BLOG_LASTEST:
            return {
                url: `${BASE_URL}/v1/list/blog/${slug}/new`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlogLastestSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.LIST_BLOG_MOSTLIKE:
            return {
                url: `${BASE_URL}/v1/list/blog/${slug}/like`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlogMostLikeSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.LIST_BLOG_MOSTVIEW:
            return {
                url: `${BASE_URL}/v1/list/blog/${slug}/views`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlogMostViewSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.LIST_BLOG_POPULAR:
            return {
                url: `${BASE_URL}/v1/list/blog/${slug}/popular`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlogPopularSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_BLOG_LEFT:
            return {
                url: `${BASE_URL}/v1/list/blog/left`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlog4LeftSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.GET_BLOG_RIGHT:
            return {
                url: `${BASE_URL}/v1/list/blog/right`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlog4RightSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.GET_ONE_BLOG:
            return {
                url: `${BASE_URL}/v1/list/blog/one`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlogOnePopularSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.GET_5_BLOG:
            return {
                url: `${BASE_URL}/v1/list/blog/five-popular`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlog5PopularSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_BLOG_BY_USER:
            return {
                url: `${BASE_URL}/v1/wall/${slug}/blog`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlogByUserSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_LIST_CATEGORIES:
            return {
                url: `${BASE_URL}/v1/categories`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListCateSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_LIST_USER_FOLLOW_CATE:
            return {
                url: `${BASE_URL}/v1/${slug}/user/categories`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListUserFollowCateSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_LIST_USER_FOLLOWING:
            return {
                url: `${BASE_URL}/v1/user-interactions/${slug}/following`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListFollowingSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.GET_LIST_USER_FOLLOWER:
            return {
                url: `${BASE_URL}/v1/user-interactions/${slug}/follower`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListFollowerSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.SEARCH_BLOG_CATEGORIES:
            return {
                url: `${BASE_URL}/v1/categories/search`,
                method: REQUEST_METHOD.POST,
                isShowToast: false,
                isDispatch: true,
                action: getBlogSearchSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.GET_BLOG_CATEGORIES:
            return {
                url: `${BASE_URL}/v1/list/blog/category/${slug}`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlogCategoriesSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_LIST_USER_SEARCH:
            return {
                url: `${BASE_URL}/v1/network/search?text=${slug}`,
                method: REQUEST_METHOD.POST,
                isShowToast: false,
                isDispatch: true,
                action: getListUserSearchSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_GET_ALLBLOG:
            return {
                url: `${BASE_URL}/v1/admin/blog/all`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListAllBlogSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_GET_SIZE_ALLBLOG:
            return {
                url: `${BASE_URL}/v1/admin/blog/size/all`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getSizeAllBlogSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_GET_ALLUSER:
            return {
                url: `${BASE_URL}/v1/admin/user/all`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListAllUserSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_GET_SIZE_ALLUSER:
            return {
                url: `${BASE_URL}/v1/admin/user/size`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getSizeAllUserSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_GET_CATEGORIES:
            return {
                url: `${BASE_URL}/v1/categories`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListAllCategoriesSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_GET_TAGS:
            return {
                url: `${BASE_URL}/v1/blog/tags/list`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListAllTagsSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_GET_BLOG_REPORT:
            return {
                url: `${BASE_URL}/v1/admin/blog/blog-violating`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListBlogReportSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_GET_SIZE_BLOG_REPORT:
            return {
                url: `${BASE_URL}/v1/admin/blog/size/blog-violating`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getSizeBlogReporttSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_GET_USER_REPORT:
            return {
                url: `${BASE_URL}/v1/admin/user/user-violating`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListUserReportSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_GET_SIZE_USER_REPORT:
            return {
                url: `${BASE_URL}/v1/admin/user/size/user-violating`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getSizeUserReportSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_UPDATE_USER:
            return {
                url: `${BASE_URL}/v1/admin/user/edit`,
                method: REQUEST_METHOD.PATCH,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: updateUserAdminSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_DELETE_USER:
            return {
                url: `${BASE_URL}/v1/admin/user/delete`,
                method: REQUEST_METHOD.DELETE,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: deleteUserSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_GET_USER_BLOCK:
            return {
                url: `${BASE_URL}/v1/admin/user/block`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListUserBlockSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_GET_SIZE_USER_BLOCK:
            return {
                url: `${BASE_URL}/v1/admin/user/sizeBlock`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getSizeUserBlockSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.UPDATE_CATEGORIES:
            return {
                url: `${BASE_URL}/v1/admin/category/edit`,
                method: REQUEST_METHOD.PATCH,
                isShowToast: true,
                isDispatch: true,
                action: updateCategoriesByIdSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.DELETE_CATEGORIES:
            return {
                url: `${BASE_URL}/v1/admin/category/${slug}/delete`,
                method: REQUEST_METHOD.DELETE,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: deleteCategoriesSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.UPLOAD_AVATAR_CATEGORIES:
            return {
                url: `${BASE_URL}/v1/admin/category/${slug}/upload-avatar`,
                method: REQUEST_METHOD.PATCH,
                isShowToast: true,
                isDispatch: true,
                action: uploadAvatarCategoriesSuccess,
                isToken: true,
                formMutil: true,
            };
        case REQUEST_TYPE.ADD_NEW_CATEGORIES:
            return {
                url: `${BASE_URL}/v1/admin/category/add`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                action: addNewCategorySuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_BLOG_CATEGORIES_BY_ID:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/category`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getCategoriesByIdSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_ADD_TAG:
            return {
                url: `${BASE_URL}/v1/admin/tag/add`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                action: addNewTagSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_EDIT_TAG:
            return {
                url: `${BASE_URL}/v1/admin/tag/edit`,
                method: REQUEST_METHOD.PATCH,
                isShowToast: true,
                isDispatch: true,
                action: editTagSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_DELETE_TAG:
            return {
                url: `${BASE_URL}/v1/admin/tag/${slug}/delete`,
                method: REQUEST_METHOD.DELETE,
                isShowToast: true,
                isDispatch: true,
                action: deleteTagSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_EVALUTE_USER:
            return {
                url: `${BASE_URL}/v1/admin/user/evalute`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: evaluteUserSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_DELETE_BLOG:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/delete`,
                method: REQUEST_METHOD.DELETE,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: deleteAdminBlogSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_EVALUTE_BLOG:
            return {
                url: `${BASE_URL}/v1/admin/blog/evalute`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: evaluteBlogSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.UNBLOCK_USER:
            return {
                url: `${BASE_URL}/v1/admin/user/${slug}/unblock`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: unBlockSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_CHART_CIRCLE:
            return {
                url: `${BASE_URL}/v1/admin/article-statistics`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getDataChartCircleSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_CHART_BLOG_MONTH:
            return {
                url: `${BASE_URL}/v1/admin/article-month/${slug}`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlogChartByMonthSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_CHART_BLOG_YEAR:
            return {
                url: `${BASE_URL}/v1/admin/article-year/${slug}`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getBlogChartByYearSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_CHART_USER_YEAR:
            return {
                url: `${BASE_URL}/v1/admin/user-year`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getUserChartByYearSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_LIST_CHAT:
            return {
                url: `${BASE_URL}/chat/user`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListChatSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_LIST_CHAT_MESSAGES:
            return {
                url: `${BASE_URL}/message/chat/${slug}`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListChatMessagesSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.SEND_MESSAGES:
            return {
                url: `${BASE_URL}/message/create`,
                method: REQUEST_METHOD.POST,
                isShowToast: false,
                isDispatch: true,
                action: sendMessagesSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.START_CHAT:
            return {
                url: `${BASE_URL}/chat/single`,
                method: REQUEST_METHOD.POST,
                isShowToast: false,
                isDispatch: true,
                action: startChatMessagesSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.DELETE_CHAT:
            return {
                url: `${BASE_URL}/message/${slug}`,
                method: REQUEST_METHOD.DELETE,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: deleteListChatSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.ADMIN_COMMENT_REPORT:
            return {
                url: `${BASE_URL}/v1/admin/blog/comment-violating`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                action: getListCommentReportSuccess,
                isToken: true,
            };
        case REQUEST_TYPE.ADMIN_EVALUTE_REPORT:
            return {
                url: `${BASE_URL}/v1/admin/blog/evalute-comment`,
                method: REQUEST_METHOD.POST,
                isShowToast: true,
                isDispatch: true,
                customAction: true,
                action: evaluteCommentReportSuccess,
                isToken: true,
            };

        case REQUEST_TYPE.GET_LIST_NOTIFICATION:
            return {
                url: `${BASE_URL}/v1/blog/${slug}/notication`,
                method: REQUEST_METHOD.GET,
                isShowToast: false,
                isDispatch: true,
                customAction: true,
                action: getListNotificationSuccess,
                isToken: true,
            };

        default:
            break;
    }
};
