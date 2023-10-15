import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import BlogPost from "@/types/blog";

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
    deleteBlogSuccess: (state, action: PayloadAction<number>) => {
      // You can implement the logic to delete the blog post here
      // For example, filter the result array to remove the deleted post
      state.blog.result = state.blog.result.filter(
        (post) => post.id !== action.payload
      );
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
} = blogSlice.actions;

export default blogSlice.reducer;
