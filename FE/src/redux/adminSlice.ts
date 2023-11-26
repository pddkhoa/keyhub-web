import { createSlice } from "@reduxjs/toolkit";
import BlogPost from "@/types/blog";
import User from "@/types/user";
import CategoryType from "@/types/categories";
import TagType from "@/types/tags";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    listAllBlog: [] as BlogPost[],
    sizeAllBlog: 0 as number,
    listAllUser: [] as User[],
    sizeAllUser: 0 as number,
    listAllCategories: [] as CategoryType[],
    listAllTags: [] as TagType[],
    listBlogReport: [] as any[],
    sizeBlogReport: 0 as number,
    listUserReport: [] as any[],
    sizeUserReport: 0 as number,
  },
  reducers: {
    getListAllBlogSuccess: (state, action) => {
      state.listAllBlog = action.payload;
    },
    getSizeAllBlogSuccess: (state, action) => {
      state.sizeAllBlog = action.payload;
    },
    getListAllUserSuccess: (state, action) => {
      state.listAllUser = action.payload;
    },
    getSizeAllUserSuccess: (state, action) => {
      state.sizeAllUser = action.payload;
    },
    getListAllCategoriesSuccess: (state, action) => {
      state.listAllCategories = action.payload;
    },
    getListAllTagsSuccess: (state, action) => {
      state.listAllTags = action.payload;
    },
    getListBlogReportSuccess: (state, action) => {
      state.listBlogReport = action.payload;
    },
    getSizeBlogReporttSuccess: (state, action) => {
      state.sizeBlogReport = action.payload;
    },
    getListUserReportSuccess: (state, action) => {
      state.listUserReport = action.payload;
    },
    getSizeUserReportSuccess: (state, action) => {
      state.sizeUserReport = action.payload;
    },
  },
});

export const {
  getListAllBlogSuccess,
  getListAllUserSuccess,
  getSizeAllBlogSuccess,
  getSizeAllUserSuccess,
  getListAllCategoriesSuccess,
  getListAllTagsSuccess,
  getListBlogReportSuccess,
  getSizeBlogReporttSuccess,
  getListUserReportSuccess,
  getSizeUserReportSuccess,
} = adminSlice.actions;

export default adminSlice.reducer;
