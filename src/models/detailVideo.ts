export interface detailVideo {
  kind: string;
  etag: string;
  items: detailVideoItems[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
export interface detailVideoItems {
  kind: string;
  etag: string;
  id: string;
  snippet: detailVideoSnippet;
}

export interface detailVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  channelTitle: string;
  tag: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  defaultAudioLanguage: string;
}
