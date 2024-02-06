import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setDltModal: (state, action) => {
      state.dltModal = action.payload;
    },
    setAddModal: (state, action) => {
      state.addModal = action.payload;
    },
    setEditModal: (state, action) => {
      state.editModal = action.payload;
    },
  },
});

export const { setDltModal,setAddModal,setEditModal } = modalSlice.actions;

export default modalSlice.reducer;
