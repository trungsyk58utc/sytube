export interface channel {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: channelResource[];
}

export interface channelResource {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  statistics: {
    viewCount: number;
    subscriberCount: number;
    hiddenSubscriberCount: boolean;
    videoCount: number;
  };
  brandingSettings: {
    channel: {
      title: string;
      description: string;
      keywords: string;
      unsubscribedTrailer: string;
      country: string;
    };
    image: {
      bannerExternalUrl: string;
    };
  };
}
