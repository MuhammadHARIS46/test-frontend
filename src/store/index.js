import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import modalSlice from "./modal";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
