import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface channelState {
  unsubcribedTrailer: string;
}

const initialState: channelState = {
  unsubcribedTrailer: "",
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setUnsubcribedTrailer: (state, action) => {
      state.unsubcribedTrailer = action.payload;
    },
  },
});
export const selectUnsubcribedTrailer = (state: RootState) =>
  state.channel.unsubcribedTrailer;

export const { setUnsubcribedTrailer } = channelSlice.actions;
const channelReducer = channelSlice.reducer;
export default channelReducer;
