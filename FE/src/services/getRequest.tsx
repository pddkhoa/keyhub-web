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
} from "@/redux/blogSlice";
import {
  addSeries,
  deleteSeriesSuccess,
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
    default:
      break;
  }
};
