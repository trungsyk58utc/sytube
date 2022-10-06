import axiosCustom from "./axiosCustom";
import { activities } from "../models/activities";
export const homeAPI = {
  getActivities(): Promise<activities> {
    const url = "/activities";
    return axiosCustom.get(url);
  },
};
