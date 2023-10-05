import { requestApiHelper } from "@/helpers/request";
import api from "../api/axios";
import {
  logOutFailed,
  logOutStart,
  logOutSuccess,
  loginFailed,
  loginStart,
  loginSuccess,
} from "./authSlice";
import { getSeriesSuccess } from "./seriesSlice";
import { showToast } from "@/hooks/useToast";
import { TokenType } from "@/types/token";
import User from "@/types/user";
import jwt_decode from "jwt-decode";
import { getUserSuccess } from "./userSlice";
import BlogPost from "@/types/blog";
import CategoryType from "@/types/categories";
import TagType from "@/types/tags";
import seriesType from "@/types/series";
import { getBlogSuccess } from "./blogSlice";

export const loginUser = async (user: any, dispatch: any, navigate: any) => {
  type body = {
    success: boolean;
    message: string;
    result: TokenType;
    statusCode: number;
  };

  dispatch(loginStart());
  try {
    const { body } = await requestApiHelper<body>(
      api.post("api/auth/login", user)
    );
    if (body?.success) {
      const { userDetails }: any = jwt_decode(body.result.token);
      dispatch(loginSuccess(body.result));
      dispatch(getUserSuccess(userDetails.users));
      showToast("Congratulations! Sign In Success");
      navigate("/profile");
    } else {
      dispatch(loginFailed());
      showToast(body?.message || "Error", "error");
    }
  } catch (err) {
    dispatch(loginFailed());
    showToast("Error", "error");
  }
};
export const registerUser = async (user: any) => {
  type body = {
    success: boolean;
    message: string;
    result: User;
    statusCode: number;
  };

  return await requestApiHelper<body>(api.post("api/auth/signup", user));
};

export const verifyAccount = async (otp: any) => {
  type body = {
    success: boolean;
    message: string;
    result: boolean | null;
    statusCode: number;
  };

  return await requestApiHelper<body>(
    api.post(`api/auth/verify-account?token=${otp}`)
  );
};

export const logOut = async (
  dispatch: any,
  refreshToken: string,
  navigate: any,
  accessToken: any,
  axiosJWT: any
) => {
  dispatch(logOutStart());
  try {
    await axiosJWT.post(`api/auth/logout?refreshToken=${refreshToken}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(logOutSuccess());
    showToast("Congratulations! Logout Success");
    navigate("/login");
  } catch (err) {
    dispatch(logOutFailed());
  }
};

export const forgortPassword = async (email: any) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  return await requestApiHelper<body>(
    api.post(`api/auth/forgot-password?email=${email}`)
  );
};
export const checkOtp = async (data: any) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  return await requestApiHelper<body>(api.post(`api/auth/veriry-otp`, data));
};

export const resetPassword = async (data: any) => {
  type body = {
    success: boolean;
    message: string;
    result: string | null;
    statusCode: number;
  };
  return await requestApiHelper<body>(
    api.patch(`api/auth/reset-password`, data)
  );
};

export const updateProfile = async (
  report: any,
  accessToken: string,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: any;
    statusCode: number;
  };

  const res = await requestApiHelper<body>(
    axiosJWT.patch("api/v1/users/change-info", report, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  );
  return res;
};

export const createBlog = async (
  report: any,
  accessToken: string,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: BlogPost[];
    statusCode: number;
  };

  const res = await requestApiHelper<body>(
    axiosJWT.post("api/v1/blog/create-blog", report, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  );
  return res;
};

export const getAllCategories = async () => {
  type body = {
    success: boolean;
    message: string;
    result: CategoryType[];
    statusCode: number;
  };

  return await requestApiHelper<body>(api.get("api/v1/blog/category/list"));
};

export const getTagByCategories = async (id: number) => {
  type body = {
    success: boolean;
    message: string;
    result: TagType[];
    statusCode: number;
  };

  return await requestApiHelper<body>(api.get(`api/v1/list/blog/${id}/tags`));
};
export const getAllSeries = async (
  accessToken: any,
  dispatch: any,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: seriesType[];
    statusCode: number;
  };
  try {
    const res = await requestApiHelper<body>(
      axiosJWT.get("api/v1/blog/series/list", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    dispatch(getSeriesSuccess(res.body?.result));
  } catch (err) {
    console.log(err);
  }
};

export const createSeries = async (
  report: any,
  accessToken: string,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: seriesType;
    statusCode: number;
  };

  const res = await requestApiHelper<body>(
    axiosJWT.post("api/v1/blog/add-series", report, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
  );
  return res;
};

export const uploadFiles = async (
  file: File,
  accessToken: string,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  const formData = new FormData();
  formData.append("file", file);
  const res = await requestApiHelper<body>(
    axiosJWT.post("api/v1/blog/upload-file", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    })
  );

  return res;
};

export const uploadAvatarBlog = async (
  file: File,
  accessToken: string,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  const formData = new FormData();
  formData.append("file", file);
  const res = await requestApiHelper<body>(
    axiosJWT.post("api/v1/blog/upload-avatar", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    })
  );

  return res;
};

export const uploadAvatarUser = async (
  image_file: File,
  accessToken: string,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  const formData = new FormData();
  formData.append("image_file", image_file);
  const res = await requestApiHelper<body>(
    axiosJWT.patch("api/v1/users/change-avatar", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    })
  );

  return res;
};

export const uploadBannerUser = async (
  image_file: File,
  accessToken: string,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  const formData = new FormData();
  formData.append("image_file", image_file);
  const res = await requestApiHelper<body>(
    axiosJWT.patch("api/v1/users/change-banner", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    })
  );

  return res;
};

export const getAllBlogByAuth = async (
  accessToken: any,
  dispatch: any,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: BlogPost[];
    statusCode: number;
  };
  try {
    const res = await requestApiHelper<body>(
      axiosJWT.get("api/v1/blog/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    dispatch(getBlogSuccess(res.body?.result));
  } catch (err) {
    console.log(err);
  }
};
