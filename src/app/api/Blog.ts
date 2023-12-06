import axiosInstance from "./axiosInstance";

const createBlog = (data: any) =>
  axiosInstance.post(`/blog`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

const getAllBlogs = () => axiosInstance.get(`/blog`);

const getBlog = (id: string) => axiosInstance.get(`/blog/${id}`);

const updateBlog = (id: string, data: any) =>
  axiosInstance.put(`/blog/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

const deleteBlog = (id: string) => axiosInstance.delete(`/blog/${id}`);

export { createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog };
