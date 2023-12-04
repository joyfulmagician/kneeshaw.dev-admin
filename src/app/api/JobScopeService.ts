import axiosInstance from "./axiosInstance";

const createJobScope = (data: any) => axiosInstance.post(`/job/scope`, data);

const getAllJobScopes = () => axiosInstance.get(`/job/scope`);

const getJobScope = (id: string) => axiosInstance.get(`/job/scope/${id}`);

const updateJobScope = (id: string, data: any) =>
  axiosInstance.put(`/job/Scope/${id}`, data);

const deleteJobScope = (id: string) => axiosInstance.delete(`/job/scope/${id}`);

export {
  createJobScope,
  getAllJobScopes,
  getJobScope,
  updateJobScope,
  deleteJobScope
};
