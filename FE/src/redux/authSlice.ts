import api from "@/api/axios";
import { requestApiHelper } from "@/helpers/request";
import { showToast } from "@/hooks/useToast";
import { TokenType } from "@/types/token";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserSuccess } from "./userSlice";
import jwt_decode from "jwt-decode";
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
    isLoading: false,
    checkOffModal: false,
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
      state.email = action.payload.email;
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
} = authSlice.actions;

export default authSlice.reducer;

export const loginUser = async (user: any, dispatch: any, navigate: any) => {
  type body = {
    success: boolean;
    message: string;
    result: TokenType;
    statusCode: number;
  };

  try {
    dispatch(loginStart());
    const { body } = await requestApiHelper<body>(
      api.post("api/auth/login", user)
    );
    if (body?.success) {
      const { userDetails }: any = jwt_decode(body.result.token);
      dispatch(getUserSuccess(userDetails.users));
      dispatch(loginSuccess(body.result));
      showToast("Congratulations! Sign In Success");
    } else {
      if (body?.result.statusCode === 2) {
        showToast(body.message);
        dispatch(loginFailed());
      } else if (body?.result.statusCode === 3) {
        navigate("/verify");
        dispatch(loginFailed());
      } else {
        showToast(body?.message || "Error", "error");
        dispatch(loginFailed());
      }
    }
  } catch (err) {
    dispatch(loginFailed());
    showToast("Error", "error");
  }
};

export const logOut = async (
  dispatch: any,
  refreshToken: string,
  navigate: any,
  accessToken: any,
  axiosJWT: any
) => {
  dispatch(logOutStart());
  try {
    await axiosJWT.post(`api/auth/logout?refreshToken=${refreshToken}`, null, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(logOutSuccess());
    showToast("Congratulations! Logout Success");
    navigate("/login");
  } catch (err) {
    dispatch(logOutFailed());
  }
};

export const registerUser = async (user: any, dispatch: any, navigate: any) => {
  type body = {
    success: boolean;
    message: string;
    result: User;
    statusCode: number;
  };

  dispatch(authSlice.actions.updateLoading({ isLoading: true }));
  try {
    const { body } = await requestApiHelper<body>(
      api.post("api/auth/signup", user)
    );

    if (body?.success) {
      dispatch(authSlice.actions.updateLoading({ isLoading: false }));
      dispatch(
        authSlice.actions.updateRegisterEmail({ email: body.result.email })
      );
      showToast("Verify Account nhen!", "success");
      navigate("/verify");
    } else {
      dispatch(authSlice.actions.updateLoading({ isLoading: false }));

      showToast(body?.message || "Erorr", "error");
    }
  } catch (error) {
    console.log(error);
    dispatch(authSlice.actions.updateLoading({ isLoading: false }));
  }
};

export const verifyAccount = async (otp: any, dispatch: any, navigate: any) => {
  type body = {
    success: boolean;
    message: string;
    result: boolean | null;
    statusCode: number;
  };
  dispatch(authSlice.actions.updateLoading({ isLoading: true }));

  try {
    const { body } = await requestApiHelper<body>(
      api.post(`api/auth/verify-account?token=${otp}`)
    );

    if (body?.success) {
      dispatch(authSlice.actions.updateLoading({ isLoading: false }));
      dispatch(authSlice.actions.updateRegisterEmail({ email: "" }));
      showToast("Dang Nhap dươc roi nhen!", "success");
      navigate("/login");
    } else {
      dispatch(authSlice.actions.updateLoading({ isLoading: false }));

      showToast(body?.message || "Erorr", "error");
    }
  } catch (error) {
    dispatch(authSlice.actions.updateLoading({ isLoading: false }));

    console.error(error);
  }
};

export const forgortPassword = async (
  email: any,
  dispatch: any,
  navigate: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  dispatch(authSlice.actions.updateLoading({ isLoading: true }));

  try {
    const { body } = await requestApiHelper<body>(
      api.post(`api/auth/forgot-password?email=${email}`)
    );
    if (body?.success) {
      showToast(body.message, "success");
      dispatch(authSlice.actions.updateLoading({ isLoading: false }));
      dispatch(authSlice.actions.updateRegisterEmail({ email: email }));
      navigate("/confirmmail");
    } else {
      showToast(body?.message || "Error", "error");
      dispatch(authSlice.actions.updateLoading({ isLoading: false }));
    }
  } catch (error) {
    dispatch(authSlice.actions.updateLoading({ isLoading: false }));

    console.log(error);
  }
};
export const checkOtp = async (data: any, dispatch: any, navigate: any) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  dispatch(authSlice.actions.updateLoading({ isLoading: true }));

  try {
    const { body } = await requestApiHelper<body>(
      api.post(`api/auth/veriry-otp`, data)
    );

    if (body?.success) {
      dispatch(authSlice.actions.updateLoading({ isLoading: false }));
      showToast(body.message, "success");
      navigate("/resetpassword");
    } else {
      dispatch(authSlice.actions.updateLoading({ isLoading: false }));

      showToast(body?.message || "Erorr", "error");
    }
  } catch (error) {
    dispatch(authSlice.actions.updateLoading({ isLoading: false }));

    console.error(error);
  }
};

export const resetPassword = async (
  data: any,
  dispatch: any,
  navigate: any,
  navigateString: string
) => {
  type body = {
    success: boolean;
    message: string;
    result: string | null;
    statusCode: number;
  };
  dispatch(authSlice.actions.updateLoading({ isLoading: true }));

  try {
    const { body } = await requestApiHelper<body>(
      api.patch(`api/auth/reset-password`, data)
    );
    if (body?.success) {
      showToast(body.message, "success");
      if (navigateString) {
        navigate(navigateString);
      } else {
        dispatch(authSlice.actions.updateModal({ checkOffModal: true }));
      }
      dispatch(authSlice.actions.updateLoading({ isLoading: false }));
      dispatch(authSlice.actions.updateRegisterEmail({ email: "" }));
    } else {
      showToast(body?.message || "Error", "error");
      dispatch(authSlice.actions.updateLoading({ isLoading: false }));
    }
  } catch (error) {
    console.log(error);
    dispatch(authSlice.actions.updateLoading({ isLoading: false }));
  }
};
