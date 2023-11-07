import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "@/types/user";
import { requestApiHelper } from "@/helpers/request";
import { showToast } from "@/hooks/useToast";

const userSlice = createSlice({
  name: "user",
  initialState: {
    detail: {
      data: {} as User,
    },
    isLoadingUploadAvatar: false,
    isLoadingUploadBanner: false,
    isLoading: false,
    isSuccess: false,
  },
  reducers: {
    getUserSuccess: (state, action: PayloadAction<User>) => {
      state.detail.data = action.payload;
    },
    updateUserSuccess: (state, action) => {
      state.detail.data = action.payload;
      state.isSuccess = true;
    },
    uploadAvatarSuccess: (state, action) => {
      state.detail.data.avatar = action.payload;
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
  },
});

export const {
  getUserSuccess,
  updateUserSuccess,
  uploadAvatarSuccess,
  uploadBanerSuccess,
} = userSlice.actions;

export default userSlice.reducer;

export const uploadAvatarUser = async (
  image_file: File,
  accessToken: string,
  axiosJWT: any,
  dispatch: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  const formData = new FormData();
  formData.append("image_file", image_file);
  dispatch(
    userSlice.actions.updateLoadingAvatar({ isLoadingUploadAvatar: true })
  );
  try {
    const { body } = await requestApiHelper<body>(
      axiosJWT.patch("api/v1/users/change-avatar", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
    );
    if (body?.success) {
      dispatch(
        userSlice.actions.updateLoadingAvatar({ isLoadingUploadAvatar: false })
      );

      dispatch(uploadAvatarSuccess(body.result));
      showToast(body.message, "success");
    } else {
      dispatch(
        userSlice.actions.updateLoadingAvatar({ isLoadingUploadAvatar: false })
      );

      showToast(body?.message || "Error", "error");
    }
  } catch (error) {
    dispatch(
      userSlice.actions.updateLoadingAvatar({ isLoadingUploadAvatar: false })
    );
    console.log(error);
  }
};

export const uploadBannerUser = async (
  image_file: File,
  accessToken: string,
  axiosJWT: any,
  dispatch: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: string;
    statusCode: number;
  };
  const formData = new FormData();
  formData.append("image_file", image_file);
  dispatch(
    userSlice.actions.updateLoadingBanner({ isLoadingUploadBanner: true })
  );
  try {
    const { body } = await requestApiHelper<body>(
      axiosJWT.patch("api/v1/users/change-banner", formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
    );
    if (body?.success) {
      dispatch(
        userSlice.actions.updateLoadingBanner({ isLoadingUploadBanner: false })
      );

      dispatch(uploadBanerSuccess(body.result));
      showToast(body.message, "success");
    } else {
      dispatch(
        userSlice.actions.updateLoadingBanner({ isLoadingUploadBanner: false })
      );

      showToast(body?.message || "Error", "error");
    }
  } catch (error) {
    dispatch(
      userSlice.actions.updateLoadingBanner({ isLoadingUploadBanner: false })
    );
    console.log(error);
  }
};

export const updateProfile = async (
  report: any,
  accessToken: string,
  axiosJWT: any,
  dispatch: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: any;
    statusCode: number;
  };
  dispatch(userSlice.actions.updateLoading({ isLoading: true }));
  try {
    const { body } = await requestApiHelper<body>(
      axiosJWT.patch("api/v1/users/change-info", report, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    if (body?.success) {
      dispatch(userSlice.actions.updateLoading({ isLoading: false }));

      dispatch(updateUserSuccess(body.result));
      showToast(body.message, "success");
    } else {
      dispatch(userSlice.actions.updateLoading({ isLoading: false }));

      showToast(body?.message || "Erorr", "error");
    }
  } catch (error) {
    dispatch(userSlice.actions.updateLoading({ isLoading: false }));

    console.log(error);
  }
};
