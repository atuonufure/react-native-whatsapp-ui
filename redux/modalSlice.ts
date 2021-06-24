import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
    modalType: 'default',
  },
  reducers: {
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setModalWindow: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { setModalType, setModalWindow } = modalSlice.actions;

export default modalSlice.reducer;
