import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBurgerMenuOpen: false,
  isModalOpen: true,
  isDarkMode: false,
  notification: {
    isNotificationOpen: false,
    message: "",
    status: "",
    title: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleBurgerMenu(state) {
      state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
    openNotification(state, action) {
      state.notification = {
        isNotificationOpen: true,
        message: action.payload.message,
        status: action.payload.status,
        title: action.payload.title,
      };
    },
    closeNotification(state) {
      state.notification = {
        isNotificationOpen: false,
        message: state.notification.message,
        status: state.notification.status,
        title: state.notification.title,
      };
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice;
