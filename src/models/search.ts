export interface searchItems {
  kind?: string;
  etag?: string;
  id: {
    kind: string;
    videoId: string;
    channelId: string;
    playlistId: string;
  };
  snippet: {
    publishedAt: any;
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: string;
        height: string;
      };
      medium: {
        url: string;
        width: string;
        height: string;
      };
      high: {
        url: string;
        width: string;
        height: string;
      };
    };
  };
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface search {
  etag: string;
  items: searchItems[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
  regionCode: string;
}
