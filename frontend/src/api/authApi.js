import axiosClient from "./axiosClient";

export const loginApi = async (email, password) => {
  const res = await axiosClient.post("/auth/login", { email, password });
  return res.data; // { message, token, user }
};
