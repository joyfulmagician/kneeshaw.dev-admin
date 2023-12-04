import axiosInstance from "./axiosInstance";

const createJobPeriod = (data: any) => axiosInstance.post(`/job/period`, data);

const getAllJobPeriods = () => axiosInstance.get(`/job/period`);

const getJobPeriod = (id: string) => axiosInstance.get(`/job/period/${id}`);

const updateJobPeriod = (id: string, data: any) =>
  axiosInstance.put(`/job/Period/${id}`, data);

const deleteJobPeriod = (id: string) =>
  axiosInstance.delete(`/job/period/${id}`);

export {
  createJobPeriod,
  getAllJobPeriods,
  getJobPeriod,
  updateJobPeriod,
  deleteJobPeriod
};
