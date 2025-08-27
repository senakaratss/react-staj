import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks
// Store'a action'lar dispatch edilir (gönderilir)
export const useAppDispatch: () => AppDispatch = useDispatch;
// Store'dan veriler seçilir (select edilir)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
