import BlogPost from "@/types/blog";
import CategoryType from "@/types/categories";
import TagType from "@/types/tags";
import seriesType from "@/types/series";
import { requestApiHelper } from "@/helpers/request";
import api from "@/api/axios";
import { getSeriesSuccess } from "@/redux/seriesSlice";
import { getBlogFailed, getBlogSuccess } from "@/redux/blogSlice";
import DraftPost from "@/types/draft";
import CommentType from "@/types/comment";
import User from "@/types/user";
import LikeType from "@/types/like";

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
      if (res.body?.success) {
        dispatch(getSeriesSuccess(res.body?.result));
      } else {
        console.log(res.body?.message);
      }
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
      if (res.body?.success) {
        dispatch(getBlogSuccess(res.body?.result));
      } else {
        dispatch(getBlogFailed);
        console.log(res.body?.message);
      }
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
  static getBlogBySeries = async (
    id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost[];
      statusCode: number;
    };

    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/list/blog/series/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };

  static getAllBlogByID = async (
    blog_id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost;
      statusCode: number;
    };

    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/blog/${blog_id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };

  static createBlogDaft = async (
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
      axiosJWT.post("api/v1/blog/draft-blog", report, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };

  static deleteBlog = async (blog_id: number) => {
    type body = {
      success: boolean;
      message: string;
      result: string;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      api.delete(`api/v1/blog/${blog_id}/delete`)
    );
    return res;
  };

  static cancleBlog = async () => {
    type body = {
      success: boolean;
      message: string;
      result: string;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(api.post(`api/v1/blog/cancel`));
    return res;
  };
  static getDraftByAuth = async (accessToken: any, axiosJWT: any) => {
    type body = {
      success: boolean;
      message: string;
      result: DraftPost[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get("api/v1/list/blog/draft", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };

  static updateBlog = async (
    id: number,
    report: any,
    accessToken: string,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost;
      statusCode: number;
    };

    const res = await requestApiHelper<body>(
      axiosJWT.patch(`api/v1/blog/${id}/edit`, report, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getCommentByBlog = async (
    blog_id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: CommentType[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/list/blog/${blog_id}/commentBlog`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };

  static addComment = async (
    content: any,
    blog_id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: CommentType;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.post(`api/v1/blog/${blog_id}/comment`, content, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static replyComment = async (
    content: any,
    blog_id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: CommentType;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.post(`api/v1/blog/${blog_id}/reply-comment`, content, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static deleteComment = async (
    id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: CommentType;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.delete(`api/v1/blog/${id}/delete-comment`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };

  static saveBlog = async (
    blog_id: number,
    accessToken: string, // token truyen vao
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: {
        id: number;
      } | null;
      statusCode: number;
    };
    console.log(accessToken);
    const res = await requestApiHelper<body>(
      axiosJWT.post(`api/v1/blog/${blog_id}/save`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getBlogSaveByAuth = async (accessToken: any, axiosJWT: any) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get("api/v1/list/blog/save", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static deleteSave = async (id: number, accessToken: any, axiosJWT: any) => {
    type body = {
      success: boolean;
      message: string;
      result: any;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.delete(`api/v1/blog/${id}/cancle-save`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getBlogPopular = async (
    index: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/list/blog/${index}/popular`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getBlogLastest = async (
    index: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/list/blog/${index}/new`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getBlogMostLike = async (
    index: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/list/blog/${index}/like`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getBlogMostViews = async (
    index: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/list/blog/${index}/views`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getBlogInFeed = async (
    index: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/list/blog/${index}/feed`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getUserAll = async (
    index: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: User[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/network/${index}/all/follow`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getUserMost = async (accessToken: any, axiosJWT: any) => {
    type body = {
      success: boolean;
      message: string;
      result: User[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/network/follow`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getSizeBlogExplore = async (accessToken: any, axiosJWT: any) => {
    type body = {
      success: boolean;
      message: string;
      result: number;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/list/blog/size`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getUserById = async (id: number, accessToken: any, axiosJWT: any) => {
    type body = {
      success: boolean;
      message: string;
      result: User;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/user-interactions/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getBlogByUserId = async (
    id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/wall/${id}/blog`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getSeriesByUserId = async (
    id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: seriesType[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/wall/${id}/series`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };

  static getCategories = async (accessToken: any, axiosJWT: any) => {
    type body = {
      success: boolean;
      message: string;
      result: CategoryType[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/categories`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };

  static getBlogByCategories = async (
    id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: BlogPost[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/list/blog/category/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static getUserFollowByCategories = async (
    id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: User[];
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/${id}/user/categories`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static followCategories = async (
    id: number,
    accessToken: any,
    axiosJWT: any
  ) => {
    type body = {
      success: boolean;
      message: string;
      result: User;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.post(`api/v1/categories/${id}/follow`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static followUser = async (id: number, accessToken: any, axiosJWT: any) => {
    type body = {
      success: boolean;
      message: string;
      result: User;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.post(`api/v1/user-interactions/${id}/follow`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };

  static likeBlog = async (id: number, accessToken: any, axiosJWT: any) => {
    type body = {
      success: boolean;
      message: string;
      result: LikeType;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.post(`api/v1/blog/${id}/like`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
  static hideBlog = async (id: number, accessToken: any, axiosJWT: any) => {
    type body = {
      success: boolean;
      message: string;
      result: number;
      statusCode: number;
    };
    const res = await requestApiHelper<body>(
      axiosJWT.post(`api/v1/blog/${id}/hide`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    return res;
  };
}

export default ClientServices;
