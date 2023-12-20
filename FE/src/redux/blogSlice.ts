import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import BlogPost from "@/types/blog";

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blog: {
            result: [] as BlogPost[],
            isFetching: false,
            error: false,
        },
        createBlog: {
            isCreating: false,
            error: false,
        },
        detailBlog: {} as BlogPost,
        isLoading: false,
        isSuccess: false,
        isFetching: false,
        blogBookmark: [] as BlogPost[],
        blogDraft: [] as BlogPost[],

        blogFeed: [] as BlogPost[],
        blogByUser: [] as BlogPost[],
    },
    reducers: {
        updateLoading(state, action) {
            state.isLoading = action.payload.isLoading;
        },
        getBlogStart: (state) => {
            state.blog.isFetching = true;
        },
        getBlogSuccess: (state, action) => {
            state.blog.isFetching = false;
            state.blog.result = action.payload;
        },
        getBlogByUserSuccess: (state, action) => {
            state.blogByUser = action.payload;
        },
        getBlogFailed: (state) => {
            state.blog.isFetching = false;
            state.blog.error = true;
        },
        createBlogStart: (state) => {
            state.createBlog.isCreating = true;
            state.createBlog.error = false;
        },
        createBlogSuccess: (state) => {
            state.createBlog.isCreating = false;
        },
        createBlogFailed: (state) => {
            state.createBlog.isCreating = false;
            state.createBlog.error = true;
        },
        deleteBlogSuccess: (state, action: PayloadAction<number>) => {
            state.blog.result = state.blog.result.filter(
                (post) => post.id !== action.payload
            );
        },
        isBookmark: (state, action) => {
            const blogPost = state.blog.result.find(
                (post) => post.id === action.payload
            );
            state.isSuccess = true;

            if (blogPost) {
                blogPost.isSave = true;
            }
        },
        unBookmark: (state, action) => {
            const blogPost = state.blog.result.find(
                (post) => post.id === action.payload
            );
            state.isSuccess = true;

            if (blogPost) {
                blogPost.isSave = false;
            }
        },
        getBlogBookmarkSuccess: (state, action) => {
            state.blogBookmark = action.payload;
            state.isFetching = true;
        },
        getBlogDraftSuccess: (state, action) => {
            state.blogDraft = action.payload;
            state.isFetching = true;
        },
        getBlogFeedSuccess: (state, action) => {
            state.blogFeed = action.payload;
        },

        likeBlogSuccess: (state, action) => {
            const likedBlogId = action.payload;
            const likedBlog = state.blog.result.find(
                (post) => post.id === likedBlogId
            );

            if (likedBlog) {
                likedBlog.likes! += 1;
            }
        },
        hideBlogSuccess: (state, action: PayloadAction<number>) => {
            const hiddenBlogId = action.payload;
            state.blog.result = state.blog.result.filter(
                (post) => post.id !== hiddenBlogId
            );
            state.blogFeed = state.blogFeed.filter(
                (post) => post.id !== hiddenBlogId
            );
            state.blogBookmark = state.blogBookmark.filter(
                (post) => post.id !== hiddenBlogId
            );
        },
        detailBlogSuccess: (state, action) => {
            state.detailBlog = action.payload;
        },
    },
});

export const {
    getBlogFailed,
    getBlogStart,
    getBlogSuccess,
    createBlogStart,
    createBlogFailed,
    createBlogSuccess,
    deleteBlogSuccess,
    isBookmark,
    unBookmark,
    likeBlogSuccess,
    getBlogBookmarkSuccess,
    getBlogDraftSuccess,
    hideBlogSuccess,
    getBlogFeedSuccess,
    detailBlogSuccess,
    getBlogByUserSuccess,
} = blogSlice.actions;

export default blogSlice.reducer;
