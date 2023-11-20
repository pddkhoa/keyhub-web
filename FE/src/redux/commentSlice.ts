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

    getCommentsSuccess(state, action) {
      state.list = action.payload;
    },
    getCommentsFailed(state, action) {
      state.error = action.payload;
    },

    // Xóa comment
    deleteComment(state, action) {
      const deleteCommentAndChildren = (parentId: any) => {
        state.list = state.list.filter((item) => {
          if (item.parentComment?.id === parentId) {
            // Đệ quy xóa comment con
            deleteCommentAndChildren(item.id);
            return false;
          }
          return item.id !== parentId;
        });
      };

      deleteCommentAndChildren(action.payload);
    },
  },
});

export const {
  addComment,
  getCommentsSuccess,
  getCommentsFailed,
  deleteComment,
} = commentSlice.actions;

export default commentSlice.reducer;
