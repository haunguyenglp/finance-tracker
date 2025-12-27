// const API_BASE_URL = "http://localhost:5001/api";

// export const getDashboardData = async () => {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`${API_BASE_URL}/dashboard`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!res.ok) {
//     const errorData = await res.json();
//     throw new Error(errorData.message || "Lỗi khi tải dashboard");
//   }

//   return res.json();
// };

import axiosClient from "./axiosClient";

export const getDashboardData = async () => {
  try {
    const res = await axiosClient.get("/dashboard");

    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || "Lỗi khi tải dashboard"
    );
  }
};
