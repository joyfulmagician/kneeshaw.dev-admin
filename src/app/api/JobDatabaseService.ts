import axiosInstance from "./axiosInstance";

const createJobDatabase = (data: any) =>
  axiosInstance.post(`/job/database`, data);

const getAllJobDatabases = () => axiosInstance.get(`/job/database`);

const getJobDatabase = (id: string) => axiosInstance.get(`/job/database/${id}`);

const updateJobDatabase = (id: string, data: any) =>
  axiosInstance.put(`/job/database/${id}`, data);

const deleteJobDatabase = (id: string) =>
  axiosInstance.delete(`/job/database/${id}`);

export {
  createJobDatabase,
  getAllJobDatabases,
  getJobDatabase,
  updateJobDatabase,
  deleteJobDatabase
};
