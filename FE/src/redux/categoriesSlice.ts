import { createSlice } from "@reduxjs/toolkit";
import CategoryType from "@/types/categories";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    listCategories: [] as CategoryType[],
    listUserFollowCate: [] as CategoryType[],
  },
  reducers: {
    getListCateSuccess(state, action) {
      state.listCategories = action.payload;
    },
    getListUserFollowCateSuccess(state, action) {
      state.listCategories = action.payload;
    },
  },
});

export const { getListUserFollowCateSuccess, getListCateSuccess } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
