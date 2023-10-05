import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "@/types/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    detail: {
      data: {} as User,
    },
  },
  reducers: {
    getUserSuccess: (state, action: PayloadAction<User>) => {
      state.detail.data = action.payload;
    },
    updateUserSuccess: (state, action) => {
      state.detail.data = action.payload;
    },
    uploadAvatarSuccess: (state, action) => {
      state.detail.data.avatar = action.payload;
    },
    uploadBanerSuccess: (state, action) => {
      state.detail.data.banner_url = action.payload;
    },
  },
});

export const {
  getUserSuccess,
  updateUserSuccess,
  uploadAvatarSuccess,
  uploadBanerSuccess,
} = userSlice.actions;

export default userSlice.reducer;
