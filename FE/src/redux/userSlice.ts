import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "@/types/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    detail: {
      data: {} as User,
    },
    user: {} as User,
    userSuggest: [] as User[],
    listFollower: [] as User[],
    listFollowing: [] as User[],
    isLoadingUploadAvatar: false,
    isLoadingUploadBanner: false,
    isLoading: false,
    isSuccess: false,
  },
  reducers: {
    getUserSuccess: (state, action: PayloadAction<User>) => {
      state.detail.data = action.payload;
    },

    getUserByIdSuccess: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    followUserSuccess: (state) => {
      state.user.checkStatusFollow = true;
    },
    unfollowUserSuccess: (state) => {
      state.user.checkStatusFollow = false;
    },

    updateUserSuccess: (state, action) => {
      state.detail.data = action.payload;
      state.isSuccess = true;
    },
    uploadAvatarSuccess: (state, action) => {
      state.detail.data.avatar = action.payload;
    },
    uploadAvatarFail: (state) => {
      state.detail.data.avatar = "";
    },
    uploadBanerSuccess: (state, action) => {
      state.detail.data.banner_url = action.payload;
    },
    updateLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
    updateLoadingAvatar: (state, action) => {
      state.isLoadingUploadAvatar = action.payload.isLoadingUploadAvatar;
    },
    updateLoadingBanner: (state, action) => {
      state.isLoadingUploadBanner = action.payload.isLoadingUploadBanner;
    },
    getUserSuggestSuccess: (state, action) => {
      state.userSuggest = action.payload;
    },
    getListFollowingSuccess: (state, action) => {
      state.listFollowing = action.payload;
    },
    getListFollowerSuccess: (state, action) => {
      state.listFollower = action.payload;
    },
  },
});

export const {
  getUserSuccess,
  updateUserSuccess,
  uploadAvatarSuccess,
  uploadBanerSuccess,
  uploadAvatarFail,
  getUserSuggestSuccess,
  getUserByIdSuccess,
  followUserSuccess,
  unfollowUserSuccess,
  getListFollowingSuccess,
  getListFollowerSuccess,
} = userSlice.actions;

export default userSlice.reducer;
