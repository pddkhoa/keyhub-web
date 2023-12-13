import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import seriesReducer from "./seriesSlice";
import userReducer from "./userSlice";
import blogReducer from "./blogSlice";
import commentReducer from "./commentSlice";
import categoriesReducer from "./categoriesSlice";
import exploreReducer from "./exploreSlice";
import adminReducer from "./adminSlice";
import chatReducer from "./chatSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  auth: authReducer,
  series: seriesReducer,
  user: userReducer,
  blog: blogReducer,
  comment: commentReducer,
  categories: categoriesReducer,
  explore: exploreReducer,
  admin: adminReducer,
  chat: chatReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
