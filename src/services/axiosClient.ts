// import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: "http://localhost:5001/api",
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// let accessToken: string | null = null;

// export const setAccessToken = (token: string | null) => {
//   accessToken = token;
// };

// axiosClient.interceptors.request.use((config) => {
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// let isRefreshing = false;
// let failedQueue: any[] = [];

// const processQueue = (error: any, token: string | null) => {
//   failedQueue.forEach((p) => {
//     if (error) p.reject(error);
//     else p.resolve(token);
//   });
//   failedQueue = [];
// };

// axiosClient.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response?.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;

//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         }).then((token) => {
//           originalRequest.headers.Authorization = `Bearer ${token}`;
//           return axiosClient(originalRequest);
//         });
//       }

//       isRefreshing = true;

//       try {
//         const res = await axiosClient.post("/auth/refresh-token");
//         const newAccessToken = res.data.accessToken;

//         setAccessToken(newAccessToken);
//         processQueue(null, newAccessToken);

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return axiosClient(originalRequest);
//       } catch (err) {
//         processQueue(err, null);
//         setAccessToken(null);
//         // window.location.href = "/login";
//         return Promise.reject(err);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosClient;
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let accessToken: string | null = null;
let logoutFn: (() => void) | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const setLogoutHandler = (fn: () => void) => {
  logoutFn = fn;
};

// ===== Request interceptor =====
axiosClient.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// ===== Response interceptor (DUY NHẤT refresh-token) =====
axiosClient.interceptors.response.use(
  (res) => res,
  async (error) => {setAccessToken
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh")
    ) {
      originalRequest._retry = true;

      try {
        const res = await axiosClient.post("/auth/refresh-token");
        const newToken = res.data.accessToken;

        setAccessToken(newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return axiosClient(originalRequest);
      } catch (err) {
        setAccessToken(null);
        logoutFn?.(); // 👈 chỉ logout, không redirect
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
