import axiosClient from "./axiosClient";

export const createBooking = async (payload, token) => {
  const res = await axiosClient.post("/booking/book", payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const getHistory = async (userId, token) => {
  const res = await axiosClient.get(`/booking/history/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
