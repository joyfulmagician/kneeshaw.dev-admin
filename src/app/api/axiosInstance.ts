import { getSession } from "next-auth/react";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const session = await getSession();

    if (session) {
      request.headers.Authorization = `Kneeshaw ${session.accessToken}`;
    }

    return request;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
