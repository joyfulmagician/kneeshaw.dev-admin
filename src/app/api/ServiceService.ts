import axiosInstance from "./axiosInstance";

const createService = (data: any) =>
  axiosInstance.post(`/service`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

const getAllServices = () => axiosInstance.get(`/service`);

const getService = (id: string) => axiosInstance.get(`/service/${id}`);

const updateService = (id: string, data: any) =>
  axiosInstance.put(`/service/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

const deleteService = (id: string) => axiosInstance.delete(`/service/${id}`);

export {
  createService,
  getAllServices,
  getService,
  updateService,
  deleteService
};
