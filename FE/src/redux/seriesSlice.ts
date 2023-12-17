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
