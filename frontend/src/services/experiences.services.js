import { apiClient } from "./config";

export const apiGetAllExperiences = async () => {
    return apiClient.get("/experiences");
};

export const apiGetUserExperiences = async (user_id) => {
    return apiClient.get(`/experiences/${user_id}`);
  };
  
  export const apiAddExperiences = async (newExperiences) => {
    return apiClient.post("/experiences", newExperiences);
  };
  
  export const apiUpdateExperiences = async (id, updates) => {
    return apiClient.patch(`/experiences/${id}`, updates);
  };
  
  export const apiDeleteExperiences = async (id) => {
    return apiClient.delete(`/experiences/${id}`);
  };