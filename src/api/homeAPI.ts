import axiosCustom from "./axiosCustom";
import { activities } from "../models/activities";

import { accesstoken } from "../shared/tokenParams";
import { search } from "../models/search";

export const homeAPI = {
  getActivities(): Promise<activities> {
    const params = { key: accesstoken };
    const url = "/activities";
    return axiosCustom.get(url, { params });
  },
  getSearch(searchText: string): Promise<search> {
    const params = {
      key: accesstoken,
      part: "snippet",
      type: "video",
      q: searchText,
      maxResults: 10,
    };
    const url = "/search";
    return axiosCustom.get(url, { params });
  },
};
