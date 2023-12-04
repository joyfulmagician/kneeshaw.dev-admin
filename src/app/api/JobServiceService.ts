import axiosInstance from "./axiosInstance";

const createJobService = (data: any) =>
  axiosInstance.post(`/job/service`, data);

const getAllJobServices = () => axiosInstance.get(`/job/service`);

const getJobService = (id: string) => axiosInstance.get(`/job/service/${id}`);

const updateJobService = (id: string, data: any) =>
  axiosInstance.put(`/job/service/${id}`, data);

const deleteJobService = (id: string) =>
  axiosInstance.delete(`/job/service/${id}`);

export {
  createJobService,
  getAllJobServices,
  getJobService,
  updateJobService,
  deleteJobService
};
