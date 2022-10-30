import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { channel } from "../../models/channel";
import { accesstoken } from "../../shared/tokenParams";

export const channelService = createApi({
  reducerPath: "channelService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com/youtube/v3",
  }),
  endpoints: (builder) => ({
    getChannel: builder.query<channel, void>({
      query: (idChannel: any) => ({
        url: "channels",
        params: {
          key: accesstoken,
          part: "statistics,brandingSettings,snippet",
          id: idChannel,
        },
      }),
    }),
  }),
});

export const { useGetChannelQuery } = channelService;
//`/channels?key=${accesstoken}&part=statistics,brandingSettings,snippet&id=${idChannel}`,
