import axiosInstance from "./axiosInstance";

const createJobExperience = (data: any) =>
  axiosInstance.post(`/job/experience`, data);

const getAllJobExperiences = () => axiosInstance.get(`/job/experience`);

const getJobExperience = (id: string) =>
  axiosInstance.get(`/job/experience/${id}`);

const updateJobExperience = (id: string, data: any) =>
  axiosInstance.put(`/job/Experience/${id}`, data);

const deleteJobExperience = (id: string) =>
  axiosInstance.delete(`/job/experience/${id}`);

export {
  createJobExperience,
  getAllJobExperiences,
  getJobExperience,
  updateJobExperience,
  deleteJobExperience
};
