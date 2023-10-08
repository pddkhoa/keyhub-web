import BlogPost from "@/types/blog";
import CategoryType from "@/types/categories";
import TagType from "@/types/tags";
import seriesType from "@/types/series";
import { requestApiHelper } from "@/helpers/request";
import api from "@/api/axios";
import { getSeriesSuccess } from "@/redux/seriesSlice";
import { getBlogSuccess } from "@/redux/blogSlice";

class ClientServices {
  static updateProfile = async (
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

  static createBlog = async (
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

  static getAllCategories = async () => {
    type body = {
      success: boolean;
      message: string;
      result: CategoryType[];
      statusCode: number;
    };

    return await requestApiHelper<body>(api.get("api/v1/blog/category/list"));
  };

  static getTagByCategories = async (id: number) => {
    type body = {
      success: boolean;
      message: string;
      result: TagType[];
      statusCode: number;
    };

    return await requestApiHelper<body>(api.get(`api/v1/list/blog/${id}/tags`));
  };
  static getAllSeries = async (
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

  static createSeries = async (
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

  static uploadFiles = async (
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

  static uploadAvatarBlog = async (
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

  static uploadAvatarUser = async (
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

  static uploadBannerUser = async (
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

  static getAllBlogByAuth = async (
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

  static deleteSeries = async (
    id: number,
    accessToken: string,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: string;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.delete(`api/v1/blog/remove-series/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
    );
    console.log(res);
    return res;
  };

  static getBlogBySeries = async (id: number) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      api.get(`api/v1/list/blog/series/${id}`)
    );

    return res;
  };
}

export default ClientServices;
