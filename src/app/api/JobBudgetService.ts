import axiosInstance, { toQueryString } from "./axiosInstance";

const getJobBudgetByType = (queryParams: Object) =>
  axiosInstance.get(`/job/budget?${toQueryString(queryParams)}`);

const getJobBudget = (id: string) => axiosInstance.get(`/job/budget/${id}`);

const updateJobBudget = (id: string, data: any) =>
  axiosInstance.put(`/job/budget/${id}`, data);

export { getJobBudgetByType, getJobBudget, updateJobBudget };
