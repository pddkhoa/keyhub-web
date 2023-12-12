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
    categoriesById: {} as CategoryType,

    dataChartCircle: {} as any,
    blogChartByMonth: {} as any,
    blogChartByYear: {} as any,
    userChartByYear: {} as any,
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
    getCategoriesByIdSuccess: (state, action) => {
      state.categoriesById = action.payload;
    },
    updateCategoriesByIdSuccess: (state, action) => {
      state.categoriesById = action.payload;
    },
    uploadAvatarCategoriesSuccess: (state, action) => {
      state.categoriesById.avatar = action.payload;
    },
    uploadAvatarCategoriesFail: (state) => {
      state.categoriesById.avatar = "";
    },
    addNewCategorySuccess: (state, action) => {
      const newCategory = action.payload;
      state.listAllCategories.push(newCategory);
    },
    addNewTagSuccess: (state, action) => {
      const newTag = action.payload;
      state.listAllTags.push(newTag);
    },
    editTagSuccess: (state, action) => {
      const editedTag = action.payload;
      state.listAllTags = state.listAllTags.map((tag) =>
        tag.id === editedTag.id ? editedTag : tag
      );
    },
    deleteTagSuccess: (state, action) => {
      const deletedTagId = action.payload;
      state.listAllTags = state.listAllTags.filter(
        (tag) => tag.id !== deletedTagId
      );
    },
    evaluteUserSuccess: (state, action) => {
      const { report_id } = action.payload;

      state.listUserReport = state.listUserReport.map((report) =>
        report.id === report_id ? { ...report, statusReport: true } : report
      );

      state.listUserReport = state.listUserReport.filter(
        (report) => report.id !== report_id
      );
    },
    deleteCategoriesSuccess: (state, action) => {
      const categoriesId = action.payload;
      state.listAllCategories = state.listAllCategories.filter(
        (cate) => cate.id !== categoriesId
      );
    },
    deleteAdminBlogSuccess: (state, action) => {
      const deletedBlogId = action.payload;
      state.listAllBlog = state.listAllBlog.filter(
        (blog) => blog.id !== +deletedBlogId
      );
    },

    evaluteBlogSuccess: (state, action) => {
      const { report_id } = action.payload;

      state.listBlogReport = state.listBlogReport.filter(
        (report) => report.id !== report_id
      );
    },

    unBlockSuccess: (state, action) => {
      const user_id = action.payload;

      state.listBlogReport = state.listUserBlock.filter(
        (user) => user.id !== user_id
      );
    },

    getDataChartCircleSuccess: (state, action) => {
      state.dataChartCircle = action.payload;
    },
    getBlogChartByMonthSuccess: (state, action) => {
      state.blogChartByMonth = action.payload;
    },
    getBlogChartByYearSuccess: (state, action) => {
      state.blogChartByYear = action.payload;
    },
    getUserChartByYearSuccess: (state, action) => {
      state.userChartByYear = action.payload;
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
  getCategoriesByIdSuccess,
  updateCategoriesByIdSuccess,
  uploadAvatarCategoriesSuccess,
  uploadAvatarCategoriesFail,
  addNewCategorySuccess,
  addNewTagSuccess,
  deleteTagSuccess,
  evaluteUserSuccess,
  deleteCategoriesSuccess,
  deleteAdminBlogSuccess,
  evaluteBlogSuccess,
  unBlockSuccess,
  getDataChartCircleSuccess,
  getBlogChartByMonthSuccess,
  getBlogChartByYearSuccess,
  getUserChartByYearSuccess,
  editTagSuccess,
} = adminSlice.actions;

export default adminSlice.reducer;
