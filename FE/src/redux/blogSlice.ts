import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import BlogPost from "@/types/blog";
import { requestApiHelper } from "@/helpers/request";
import api from "@/api/axios";
import { showToast } from "@/hooks/useToast";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: {
      result: [] as BlogPost[],
      isFetching: false,
      error: false,
    },
    createBlog: {
      isCreating: false,
      error: false,
    },
    detailBlog: {} as BlogPost,
    isLoading: false,
    isSuccess: false,
    isFetching: false,
    blogBookmark: [] as BlogPost[],
    blogDraft: [] as BlogPost[],
    blogPopular: [] as BlogPost[],
    blogLastest: [] as BlogPost[],
    blogMostView: [] as BlogPost[],
    blogMostLike: [] as BlogPost[],
    blogFeed: [] as BlogPost[],
    blogByUser: [] as BlogPost[],
  },
  reducers: {
    updateLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
    getBlogStart: (state) => {
      state.blog.isFetching = true;
    },
    getBlogSuccess: (state, action) => {
      state.blog.isFetching = false;
      state.blog.result = action.payload;
    },
    getBlogByUserSuccess: (state, action) => {
      state.blogByUser = action.payload;
    },
    getBlogFailed: (state) => {
      state.blog.isFetching = false;
      state.blog.error = true;
    },
    createBlogStart: (state) => {
      state.createBlog.isCreating = true;
      state.createBlog.error = false;
    },
    createBlogSuccess: (state) => {
      state.createBlog.isCreating = false;
    },
    createBlogFailed: (state) => {
      state.createBlog.isCreating = false;
      state.createBlog.error = true;
    },
    deleteBlogSuccess: (state, action: PayloadAction<number>) => {
      state.blog.result = state.blog.result.filter(
        (post) => post.id !== action.payload
      );
    },
    isBookmark: (state, action) => {
      const blogPost = state.blog.result.find(
        (post) => post.id === action.payload
      );
      state.isSuccess = true;

      if (blogPost) {
        blogPost.isSave = true;
      }
    },
    unBookmark: (state, action) => {
      const blogPost = state.blog.result.find(
        (post) => post.id === action.payload
      );
      state.isSuccess = true;

      if (blogPost) {
        blogPost.isSave = false;
      }
    },
    getBlogBookmarkSuccess: (state, action) => {
      state.blogBookmark = action.payload;
      state.isFetching = true;
    },
    getBlogDraftSuccess: (state, action) => {
      state.blogDraft = action.payload;
      state.isFetching = true;
    },
    getBlogFeedSuccess: (state, action) => {
      state.blogFeed = action.payload;
    },
    getBlogLastestSuccess: (state, action) => {
      state.blogLastest = action.payload;
    },
    getBlogMostLikeSuccess: (state, action) => {
      state.blogMostLike = action.payload;
    },
    getBlogMostViewSuccess: (state, action) => {
      state.blogMostView = action.payload;
    },
    getBlogPopularSuccess: (state, action) => {
      state.blogPopular = action.payload;
    },
    likeBlogSuccess: (state, action) => {
      const likedBlogId = action.payload;
      const likedBlog = state.blog.result.find(
        (post) => post.id === likedBlogId
      );

      if (likedBlog) {
        likedBlog.likes! += 1;
      }
    },
    hideBlogSuccess: (state, action: PayloadAction<number>) => {
      const hiddenBlogId = action.payload;
      state.blog.result = state.blog.result.filter(
        (post) => post.id !== hiddenBlogId
      );
      state.blogFeed = state.blogFeed.filter(
        (post) => post.id !== hiddenBlogId
      );
      state.blogBookmark = state.blogBookmark.filter(
        (post) => post.id !== hiddenBlogId
      );
      state.blogLastest = state.blogLastest.filter(
        (post) => post.id !== hiddenBlogId
      );
      state.blogMostLike = state.blogMostLike.filter(
        (post) => post.id !== hiddenBlogId
      );
      state.blogMostView = state.blogMostView.filter(
        (post) => post.id !== hiddenBlogId
      );
      state.blogPopular = state.blogPopular.filter(
        (post) => post.id !== hiddenBlogId
      );
    },
    detailBlogSuccess: (state, action) => {
      state.detailBlog = action.payload;
    },
  },
});

export const {
  getBlogFailed,
  getBlogStart,
  getBlogSuccess,
  createBlogStart,
  createBlogFailed,
  createBlogSuccess,
  deleteBlogSuccess,
  isBookmark,
  unBookmark,
  likeBlogSuccess,
  getBlogBookmarkSuccess,
  getBlogDraftSuccess,
  hideBlogSuccess,
  getBlogFeedSuccess,
  detailBlogSuccess,
  getBlogLastestSuccess,
  getBlogMostLikeSuccess,
  getBlogMostViewSuccess,
  getBlogPopularSuccess,
  getBlogByUserSuccess,
} = blogSlice.actions;

export default blogSlice.reducer;

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
    if (res.body?.success) {
      dispatch(getBlogSuccess(res.body?.result));
    } else {
      dispatch(getBlogFailed);
      console.log(res.body?.message);
    }
  } catch (err) {
    dispatch(getBlogFailed);
    console.log(err);
  }
};

export const deleteBlog = async (blog_id: number, dispatch: any) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };

  dispatch(blogSlice.actions.updateLoading({ isLoading: true }));

  try {
    const { body } = await requestApiHelper<body>(
      api.delete(`api/v1/blog/${blog_id}/delete`)
    );
    if (body?.success) {
      dispatch(deleteBlogSuccess(blog_id));
      dispatch(blogSlice.actions.updateLoading({ isLoading: false }));
      showToast(body.message, "success");
    } else {
      console.log(body?.message);
      showToast(body?.message || "Error", "error");
      dispatch(blogSlice.actions.updateLoading({ isLoading: false }));
    }
  } catch (error) {
    console.log(error);
    dispatch(blogSlice.actions.updateLoading({ isLoading: false }));
  }
};

export const saveBlog = async (
  blog_id: number,
  accessToken: string,
  axiosJWT: any,
  dispatch: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: {
      id: number;
    } | null;
    statusCode: number;
  };
  dispatch(blogSlice.actions.updateLoading({ isLoading: true }));

  try {
    const { body } = await requestApiHelper<body>(
      axiosJWT.post(`api/v1/blog/${blog_id}/save`, null, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    if (body?.success) {
      dispatch(blogSlice.actions.updateLoading({ isLoading: false }));

      dispatch(isBookmark(blog_id));
      showToast(body.message, "success");
    } else {
      dispatch(blogSlice.actions.updateLoading({ isLoading: false }));

      console.log(body?.message);
      showToast(body?.message || "Error", "error");
    }
  } catch (error) {
    dispatch(blogSlice.actions.updateLoading({ isLoading: false }));

    console.log(error);
  }
};

export const deleteSave = async (
  id: number,
  accessToken: any,
  axiosJWT: any,
  dispatch: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: any;
    statusCode: number;
  };
  dispatch(blogSlice.actions.updateLoading({ isLoading: true }));

  try {
    const { body } = await requestApiHelper<body>(
      axiosJWT.delete(`api/v1/blog/${id}/cancel-save`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    if (body?.success) {
      showToast(body.message, "success");
      dispatch(blogSlice.actions.updateLoading({ isLoading: false }));
      dispatch(blogSlice.actions.unBookmark(id));
    } else {
      dispatch(blogSlice.actions.updateLoading({ isLoading: false }));
      showToast(body?.message || "Error", "error");
    }
  } catch (error) {
    dispatch(blogSlice.actions.updateLoading({ isLoading: false }));
    console.log(error);
  }
};
