import { createSlice } from "@reduxjs/toolkit";
import BlogPost from "@/types/blog";

const exploreSlice = createSlice({
  name: "explore",
  initialState: {
    blog5Popular: [] as BlogPost[],
    blog4Left: [] as BlogPost[],
    blog4Right: [] as BlogPost[],
    blogOnePopular: {} as BlogPost,
    blogBookmark: [] as BlogPost[],
    blogDraft: [] as BlogPost[],
    blogPopular: [] as BlogPost[],
    blogLastest: [] as BlogPost[],
    blogMostView: [] as BlogPost[],
    blogMostLike: [] as BlogPost[],
    blogFeed: [] as BlogPost[],
  },
  reducers: {
    getBlogLastestSuccess: (state, action) => {
      state.blogLastest = action.payload;
    },
    getBlogMostLikeSuccess: (state, action) => {
      state.blogMostLike = action.payload;
    },
    getBlogMostViewSuccess: (state, action) => {
      state.blogMostView = action.payload;
    },
    getBlogPopularSuccess: (state, action) => {
      state.blogPopular = action.payload;
    },
    getBlog4RightSuccess: (state, action) => {
      state.blog4Right = action.payload;
    },
    getBlog4LeftSuccess: (state, action) => {
      state.blog4Left = action.payload;
    },
    getBlogOnePopularSuccess: (state, action) => {
      state.blogOnePopular = action.payload;
    },
    getBlog5PopularSuccess: (state, action) => {
      state.blog5Popular = action.payload;
    },
  },
});

export const {
  getBlogLastestSuccess,
  getBlogMostLikeSuccess,
  getBlogMostViewSuccess,
  getBlogPopularSuccess,
  getBlog4RightSuccess,
  getBlog4LeftSuccess,
  getBlogOnePopularSuccess,
  getBlog5PopularSuccess,
} = exploreSlice.actions;

export default exploreSlice.reducer;
