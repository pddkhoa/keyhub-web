import { requestApiHelper } from "@/helpers/request";
import { showToast } from "@/hooks/useToast";
import BlogPost from "@/types/blog";
import seriesType from "@/types/series";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    series: [] as seriesType[],

    seriesByUser: [] as seriesType[],
    isLoading: false,
    isSuccess: false,
    blogBySeries: [] as BlogPost[],
  },
  reducers: {
    getSeriesSuccess: (state, action) => {
      state.series = action.payload;
    },

    getSeriesByUserSuccess: (state, action) => {
      state.seriesByUser = action.payload;
    },
    getBlogBySeriesSuccess: (state, action) => {
      state.blogBySeries = action.payload;
    },

    addSeries(state, action) {
      state.series.push(action.payload);
      state.isSuccess = true;
    },
    deleteSeriesSuccess(state, action: PayloadAction<number>) {
      state.series = state.series.filter(
        (series) => series.id !== action.payload
      );
      state.isSuccess = true;
    },
    updateLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const {
  getSeriesSuccess,
  addSeries,
  deleteSeriesSuccess,
  getSeriesByUserSuccess,
  getBlogBySeriesSuccess,
} = seriesSlice.actions;

export default seriesSlice.reducer;

export const getAllSeries = async (
  accessToken: any,
  dispatch: any,
  axiosJWT: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: seriesType[];
    statusCode: number;
  };
  try {
    const res = await requestApiHelper<body>(
      axiosJWT.get("api/v1/blog/series/list", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );
    if (res.body?.success) {
      dispatch(getSeriesSuccess(res.body?.result));
    } else {
      console.log(res.body?.message);
    }
  } catch (err) {
    console.log(err);
  }
};

export const createSeries = async (
  report: any,
  accessToken: string,
  axiosJWT: any,
  dispatch: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: seriesType;
    statusCode: number;
  };

  dispatch(seriesSlice.actions.updateLoading({ isLoading: true }));
  try {
    const { body } = await requestApiHelper<body>(
      axiosJWT.post("api/v1/blog/add-series", report, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );

    if (body?.success) {
      dispatch(seriesSlice.actions.updateLoading({ isLoading: false }));
      dispatch(seriesSlice.actions.addSeries(body.result));
      showToast(body.message, "success");
    } else {
      dispatch(seriesSlice.actions.updateLoading({ isLoading: false }));
      showToast(body?.message || "Error", "error");
    }
  } catch (error) {
    dispatch(seriesSlice.actions.updateLoading({ isLoading: false }));

    console.log(error);
  }
};

export const deleteSeries = async (
  id: number,
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
  dispatch(seriesSlice.actions.updateLoading({ isLoading: true }));

  try {
    const { body } = await requestApiHelper<body>(
      axiosJWT.delete(`api/v1/blog/remove-series/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
    );
    if (body?.success) {
      dispatch(seriesSlice.actions.updateLoading({ isLoading: false }));
      dispatch(deleteSeriesSuccess(id));
      showToast(body.message, "success");
    } else {
      console.log(body?.message);
      dispatch(seriesSlice.actions.updateLoading({ isLoading: false }));
      showToast(body?.message || "Error", "error");
    }
  } catch (error) {
    dispatch(seriesSlice.actions.updateLoading({ isLoading: false }));
    console.log(error);
  }
};

export const getBlogBySeries = async (
  id: number,
  accessToken: any,
  axiosJWT: any,
  dispatch: any
) => {
  type body = {
    success: boolean;
    message: string;
    result: BlogPost[];
    statusCode: number;
  };
  dispatch(seriesSlice.actions.updateLoading({ isLoading: true }));

  try {
    const { body } = await requestApiHelper<body>(
      axiosJWT.get(`api/v1/list/blog/series/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    );

    if (body?.success) {
      dispatch(seriesSlice.actions.getBlogBySeriesSuccess(body.result));
      dispatch(seriesSlice.actions.updateLoading({ isLoading: false }));
    } else {
      dispatch(seriesSlice.actions.updateLoading({ isLoading: false }));
      console.log(body?.message);
    }
  } catch (error) {
    console.log(error);
  }
};
