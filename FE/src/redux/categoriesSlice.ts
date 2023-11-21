import { createSlice } from "@reduxjs/toolkit";
import CategoryType from "@/types/categories";
import BlogPost from "@/types/blog";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    listCategories: [] as CategoryType[],
    listUserFollowCate: [] as CategoryType[],
    blogSearch: [] as BlogPost[],
  },
  reducers: {
    getListCateSuccess(state, action) {
      state.listCategories = action.payload;
    },
    getListUserFollowCateSuccess(state, action) {
      state.listCategories = action.payload;
    },
    getBlogSearchSuccess(state, action) {
      state.blogSearch = action.payload;
    },
  },
});

export const {
  getListUserFollowCateSuccess,
  getListCateSuccess,
  getBlogSearchSuccess,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
