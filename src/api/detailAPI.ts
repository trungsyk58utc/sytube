import axiosCustom from "./axiosCustom";
import { detailVideo } from "../models/detailVideo";
import { accesstoken } from "../shared/tokenParams";

export const detailAPI = {
  getDetail(urlVideo: string): Promise<detailVideo> {
    const params = {
      key: accesstoken,
      part: "snippet",
      type: "video",
      id: urlVideo,
    };
    const url = "/videos";
    return axiosCustom.get(url, { params });
  },
};
