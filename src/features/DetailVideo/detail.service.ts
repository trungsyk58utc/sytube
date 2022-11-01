import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { detailVideo } from "../../models/detailVideo";
import { accesstoken } from "../../shared/tokenParams";

export const detailService = createApi({
  reducerPath: "detailService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3",
  }),
  endpoints: (builder) => ({
    getDetail: builder.query<detailVideo, void>({
      query: (idVideo: any) => ({
        url: "videos",
        params: {
          key: accesstoken,
          part: "snippet,statistics",
          type: "video",
          id: idVideo,
        },
      }),
    }),
  }),
});

export const { useGetDetailQuery } = detailService;
