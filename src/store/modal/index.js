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
    setselectedUserId: (state, action) => {
      state.selectedUserId = action.payload;
    },
    setSidebar:(state,action) =>{
      state.sidebar = action.payload
    }
  },
});

export const { setDltModal,setAddModal,setEditModal,setselectedUserId,setSidebar } = modalSlice.actions;

export default modalSlice.reducer;
