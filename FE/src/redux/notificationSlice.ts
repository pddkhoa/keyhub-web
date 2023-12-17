import { NotificationType } from "@/types/notifications";
import { createSlice } from "@reduxjs/toolkit";

const notificationsSlice = createSlice({
    name: "notifications",
    initialState: {
        listNotificaion: [] as NotificationType[],
    },
    reducers: {
        getListNotificationSuccess: (state, action) => {
            state.listNotificaion = action.payload;
        },
    },
});

export const { getListNotificationSuccess } = notificationsSlice.actions;

export default notificationsSlice.reducer;
