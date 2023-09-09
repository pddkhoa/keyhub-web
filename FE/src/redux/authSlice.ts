import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      data: {
        token: null,
        refreshToken: null,
        type: null,
      },
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.data = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },

    updateAccessToken: (state, action) => {
      state.login.data.token = action.payload;
    },

    logOutSuccess: (state) => {
      state.login.isFetching = false;
      state.login.data.token = null;
      state.login.data.refreshToken = null;
      state.login.error = false;
    },
    logOutFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    logOutStart: (state) => {
      state.login.isFetching = true;
    },
  },
});

export const {
  loginStart,
  loginFailed,
  loginSuccess,
  logOutStart,
  logOutSuccess,
  logOutFailed,
  updateAccessToken,
} = authSlice.actions;

export default authSlice.reducer;
