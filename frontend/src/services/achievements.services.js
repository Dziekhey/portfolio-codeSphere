import { apiClient } from "./config";

export const apiGetAllAchievements = async () => {
    return apiClient.get("/achievements");
};

export const apiGetAchievement = async (id) => {
    return apiClient.get(`/achievements/${id}`);
  };
  
  export const apiAddAchievement = async (newAchievement) => {
    return apiClient.post("/achievements", newAchievement);
  };
  
  export const apiUpdateAchievement = async (id, updates) => {
    return apiClient.patch(`/achievements/${id}`, updates);
  };
  
  export const apiDeleteAchievement = async (id) => {
    return apiClient.delete(`/achievements/${id}`);
  };