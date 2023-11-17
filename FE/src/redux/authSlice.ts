import { TokenType } from "@/types/token";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "@/types/user";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      data: {
        token: "",
        refreshToken: "",
        type: "",
        statusCode: 0,
      },
      isFetching: false,
      error: false,
    },
    email: "",
    updateRegister: {} as User,
    isLoading: false,
    checkOffModal: false,
    UserDetail: {} as User,
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
    updateRegisterEmail(state, action) {
      state.email = action.payload;
    },
    updateRegister(state, action) {
      state.updateRegister = action.payload;
    },
    updateVerify(state, action) {
      state.updateRegister = action.payload !== null ? action.payload : {};
    },
    updateLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
    updateModal(state, action) {
      state.checkOffModal = action.payload.checkOffModal;
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
  updateRegisterEmail,
  updateRegister,
  updateVerify,
} = authSlice.actions;

export default authSlice.reducer;
