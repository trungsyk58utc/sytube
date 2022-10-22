import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { detailAPI } from "../../api/detailAPI";
import { detailVideoItems } from "../../models/detailVideo";

interface DetailState {
  kind: string;
  etag: string;
  items: detailVideoItems[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  loading: boolean;
}

const initialState: DetailState = {
  kind: "",
  etag: "",
  items: [],
  pageInfo: {
    totalResults: 0,
    resultsPerPage: 0,
  },
  loading: false,
};

export const getListDetail = createAsyncThunk(
  "detail/getListDetail",
  async (id: any, thunkAPI) => {
    try {
      const response = await detailAPI.getDetail(id);
      return response;
    } catch (error) {
      return error;
    }
  }
);
const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListDetail.fulfilled, (state, action: any) => {
      state.loading = false;
      state.items = action.payload.items;
    });
    builder.addCase(getListDetail.rejected, (state) => {
      state.loading = false;
    });
  },
});

const detailReducer = detailSlice.reducer;
export default detailReducer;
