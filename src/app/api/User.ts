import axiosInstance from "./axiosInstance";

const createUser = (data: any) => axiosInstance.post(`/user`, data);

const getAllUsers = () => axiosInstance.get(`/user`);

const getUser = (id: string) => axiosInstance.get(`/user/${id}`);

const updateUser = (id: string, data: any) =>
  axiosInstance.put(`/user/${id}`, data);

const deleteUser = (id: string) => axiosInstance.delete(`/user/${id}`);

export { createUser, getAllUsers, getUser, updateUser, deleteUser };
