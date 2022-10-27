import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { detailService } from "../features/DetailVideo/detail.service";
import detailReducer from "../features/DetailVideo/detailSlice";
import { searchService } from "../features/SearchPage/search.services";
import searchReducer from "../features/SearchPage/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    detail: detailReducer,
    [searchService.reducerPath]: searchService.reducer,
    [detailService.reducerPath]: detailService.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      searchService.middleware,
      detailService.middleware
    );
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
