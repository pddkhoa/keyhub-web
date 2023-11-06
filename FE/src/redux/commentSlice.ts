import { createSlice } from "@reduxjs/toolkit";
import CommentType from "@/types/comment";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    list: [] as CommentType[],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Thêm comment
    addComment(state, action) {
      state.list.push(action.payload);
    },

    // Lấy danh sách comment
    getComments(state) {
      state.isLoading = true;
    },
    getCommentsSuccess(state, action) {
      state.list = action.payload;
      state.isLoading = false;
    },
    getCommentsFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    // Xóa comment
    deleteComment(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  addComment,
  getComments,
  getCommentsSuccess,
  getCommentsFailed,
  deleteComment,
} = commentSlice.actions;

export default commentSlice.reducer;
