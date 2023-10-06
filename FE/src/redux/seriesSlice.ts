import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import seriesType from "../types/series";
import { boolean, string } from "yup";

type body = {
  success: boolean;
  message: string;
  result: seriesType;
  statusCode: number;
};

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    series: {
      result: [] as seriesType[],
    },
  },
  reducers: {
    getSeriesSuccess: (state, action) => {
      state.series.result = action.payload;
    },

    addSeries(state, action) {
      state.series.result.push(action.payload);
    },
    deleteSeriesSuccess(state, action: PayloadAction<number>) {
      // Lọc bỏ series có id trùng với action.payload
      state.series.result = state.series.result.filter(
        (series) => series.id !== action.payload
      );
    },
  },
});

export const { getSeriesSuccess, addSeries, deleteSeriesSuccess } =
  seriesSlice.actions;

export default seriesSlice.reducer;
