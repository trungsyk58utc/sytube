import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import detailReducer from "../features/DetailVideo/detailSlice";
import searchReducer from "../features/SearchPage/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    detail: detailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
