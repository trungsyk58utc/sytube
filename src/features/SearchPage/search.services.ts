import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { search } from "../../models/search";
import { accesstoken } from "../../shared/tokenParams";

export const searchService = createApi({
  reducerPath: "searchService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3",
  }),
  endpoints: (builder) => ({
    getSearch: builder.query<search, object>({
      query: (searchText: any) =>
        `/search?key=${accesstoken}&part=snippet&type=video&q=${searchText}&maxResults=15`,
    }),
  }),
});

export const { useGetSearchQuery } = searchService;
