import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { channelService } from "../features/Channels/channel.service";
import channelReducer from "../features/Channels/channelSlice";
import { detailService } from "../features/DetailVideo/detail.service";
import detailReducer from "../features/DetailVideo/detailSlice";
import { searchService } from "../features/SearchPage/search.services";
import searchReducer from "../features/SearchPage/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    detail: detailReducer,
    channel: channelReducer,
    [searchService.reducerPath]: searchService.reducer,
    [detailService.reducerPath]: detailService.reducer,
    [channelService.reducerPath]: channelService.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      searchService.middleware,
      detailService.middleware,
      channelService.middleware
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
