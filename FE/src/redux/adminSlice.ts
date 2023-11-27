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
    listUserBlock: [] as any[],
    sizeUserBlock: 0 as number,
    isLoadingUpdate: false,
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
    getListUserBlockSuccess: (state, action) => {
      state.listUserBlock = action.payload;
    },
    getSizeUserBlockSuccess: (state, action) => {
      state.sizeUserBlock = action.payload;
    },

    updateUserAdminSuccess: (state, action) => {
      const updatedUser = action.payload;
      state.listAllUser = state.listAllUser.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      state.isLoadingUpdate = true;
    },
    deleteUserSuccess: (state, action) => {
      const deletedUserId = action.payload;
      state.listAllUser = state.listAllUser.filter(
        (user) => user.id !== deletedUserId
      );
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
  updateUserAdminSuccess,
  deleteUserSuccess,
  getListUserBlockSuccess,
  getSizeUserBlockSuccess,
} = adminSlice.actions;

export default adminSlice.reducer;
