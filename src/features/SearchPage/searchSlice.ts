import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { homeAPI } from "../../api/homeAPI";
import { searchItems } from "../../models/models";

interface SearchState {
  listSearchResults: searchItems[];
  loading: boolean;
}
const initialState: SearchState = {
  listSearchResults: [],
  loading: false,
};

export const getList = createAsyncThunk(
  "search/getListSearch",
  async (searchText: any, thunkAPI) => {
    try {
      const response = await homeAPI.getSearch(searchText);
      return response.items;
    } catch (error: any) {
      return error;
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // getListSearchItem(state, action: PayloadAction<searchItems[]>) {
    //   state.listSearchResults = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.listSearchResults = action.payload;
      state.loading = true;
    });
    builder.addCase(getList.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

// export const { getListSearchItem } = searchSlice.actions;
const searchReducer = searchSlice.reducer;
export default searchReducer;
