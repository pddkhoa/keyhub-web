import { createSlice } from "@reduxjs/toolkit";
import BlogPost from "@/types/blog";

const authSlice = createSlice({
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
  },
  reducers: {
    getBlogStart: (state) => {
      state.blog.isFetching = true;
    },
    getBlogSuccess: (state, action) => {
      state.blog.isFetching = false;
      state.blog.result = action.payload;
    },
    getBlogFailed: (state) => {
      state.blog.isFetching = false;
      state.blog.error = true;
    },
    // New action to start creating a blog post
    createBlogStart: (state) => {
      state.createBlog.isCreating = true;
      state.createBlog.error = false;
    },
    // New action for successful blog post creation
    createBlogSuccess: (state) => {
      state.createBlog.isCreating = false;
    },
    // New action for failed blog post creation
    createBlogFailed: (state) => {
      state.createBlog.isCreating = false;
      state.createBlog.error = true;
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
} = authSlice.actions;

export default authSlice.reducer;
