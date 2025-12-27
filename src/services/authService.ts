import axiosClient, { setAccessToken } from "./axiosClient";

export const loginUser = async (email: string, password: string) => {
  try {
    const res = await axiosClient.post("/auth/login", {
      email,
      password,
    });

    // Set accessToken.
    setAccessToken(res.data.accessToken);

    return res.data;
  } catch (error: any) {
    console.log('failed to login...')
    throw new Error(
      error?.response?.data?.message || "Đăng nhập thất bại"
    );
  }
};

export const refreshAccessToken = async () => {
  const res = await axiosClient.post("/auth/refresh-token");
  return res.data; // { accessToken }
};