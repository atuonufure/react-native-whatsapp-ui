import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false,
  },
  reducers: {
    setModalWindow: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { setModalWindow } = modalSlice.actions;

export default modalSlice.reducer;
