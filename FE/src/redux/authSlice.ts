import { TokenType } from "@/types/token";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      data: {
        token: "",
        refreshToken: "",
        type: "",
      },
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action: PayloadAction<TokenType>) => {
      state.login.isFetching = false;
      state.login.data = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },

    updateAccessToken: (state, action) => {
      state.login.data = action.payload;
    },

    logOutSuccess: (state) => {
      state.login.isFetching = false;
      state.login.data.token = "";
      state.login.data.refreshToken = "";
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
