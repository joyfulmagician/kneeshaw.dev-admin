import axiosInstance from "./axiosInstance";

const createGame = (data: any) =>
  axiosInstance.post(`/game`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

const getAllGames = () => axiosInstance.get(`/game`);

const getGame = (id: string) => axiosInstance.get(`/game/${id}`);

const updateGame = (id: string, data: any) =>
  axiosInstance.put(`/game/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

const deleteGame = (id: string) => axiosInstance.delete(`/game/${id}`);

export { createGame, getAllGames, getGame, updateGame, deleteGame };
