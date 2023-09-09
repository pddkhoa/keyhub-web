import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import seriesType from "../types/series";

const seriesSlice = createSlice({
  name: "series",
  initialState: {
    series: {
      data: {},
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getSeriesStart: (state) => {
      state.series.isFetching = true;
    },
    getSeriesSuccess: (state, action: PayloadAction<seriesType>) => {
      state.series.isFetching = false;
      state.series.data = action.payload;
    },
    getSeriesFailed: (state) => {
      state.series.isFetching = false;
      state.series.error = true;
    },
  },
});

export const { getSeriesStart, getSeriesSuccess, getSeriesFailed } =
  seriesSlice.actions;

export default seriesSlice.reducer;
