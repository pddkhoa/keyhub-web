import { Chat, ChatMessage } from "@/types/chat";
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    getListChat: [] as Chat[],
    getChatMessages: [] as ChatMessage[],
    newMessages: {} as ChatMessage,
  },
  reducers: {
    getListChatSuccess: (state, action) => {
      state.getListChat = action.payload;
    },
    getListChatMessagesSuccess: (state, action) => {
      state.getChatMessages = action.payload;
    },
    sendMessagesSuccess: (state, action) => {
      state.newMessages = action.payload;
      state.getChatMessages = [...state.getChatMessages, state.newMessages];
    },
    startChatMessagesSuccess: (state, action) => {
      const newChat = action.payload;
      state.getListChat.unshift(newChat);
    },
    deleteListChatSuccess: (state, action) => {
      const chatIdToDelete = action.payload;
      state.getListChat = state.getListChat.filter(
        (chat) => chat.id !== chatIdToDelete
      );
    },
  },
});

export const {
  getListChatSuccess,
  getListChatMessagesSuccess,
  sendMessagesSuccess,
  startChatMessagesSuccess,
  deleteListChatSuccess,
} = chatSlice.actions;

export default chatSlice.reducer;
