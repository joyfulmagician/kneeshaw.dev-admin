import axiosInstance from "./axiosInstance";

const createJobSkill = (data: any) => axiosInstance.post(`/job/skill`, data);

const getAllJobSkills = () => axiosInstance.get(`/job/skill`);

const getJobSkill = (id: string) => axiosInstance.get(`/job/skill/${id}`);

const updateJobSkill = (id: string, data: any) =>
  axiosInstance.put(`/job/skill/${id}`, data);

const deleteJobSkill = (id: string) => axiosInstance.delete(`/job/skill/${id}`);

export {
  createJobSkill,
  getAllJobSkills,
  getJobSkill,
  updateJobSkill,
  deleteJobSkill
};
