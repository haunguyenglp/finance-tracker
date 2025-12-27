import axiosClient from "./axiosClient";

export const getMe = async () => {
  const res = await axiosClient.get("/users/me");
  return res.data;
};

