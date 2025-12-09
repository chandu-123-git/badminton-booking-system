import axiosClient from "./axiosClient";

export const getCourts = async () => {
  const res = await axiosClient.get("/courts");
  return res.data;
};
