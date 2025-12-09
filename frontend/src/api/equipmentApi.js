import axiosClient from "./axiosClient";

export const getEquipment = async () => {
  const res = await axiosClient.get("/equipment");
  return res.data;
};
