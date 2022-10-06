import axiosCustom from "./axiosCustom";
import { activities } from "../models/activities";

import { params } from "../shared/tokenParams";

export const homeAPI = {
  getActivities(): Promise<activities> {
    // const params = { key: accesstoken };
    const url = "/activities";
    return axiosCustom.get(url, { params });
  },
};
