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
  },
});

export const { getUserSuccess, updateUserSuccess } = userSlice.actions;

export default userSlice.reducer;
