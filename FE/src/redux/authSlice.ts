import { createSlice } from "@reduxjs/toolkit";

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
    register: {
      isFetching: false,
      error: false,
      success: false,
    },
    verify: {
      isFetching: false,
      error: false,
      success: false,
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
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registerFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
    verifyStart: (state) => {
      state.verify.isFetching = true;
    },
    verifySuccess: (state) => {
      state.verify.isFetching = false;
      state.verify.error = false;
      state.verify.success = true;
    },
    verifyFailed: (state) => {
      state.verify.isFetching = false;
      state.verify.error = true;
      state.verify.success = false;
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
  registerStart,
  registerFailed,
  registerSuccess,
  verifyStart,
  verifySuccess,
  verifyFailed,
} = authSlice.actions;

export default authSlice.reducer;
