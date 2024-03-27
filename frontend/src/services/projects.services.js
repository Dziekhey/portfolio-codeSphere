import { apiClient } from "./config";

export const apiGetAllProjects = async () => {
    return apiClient.get("/projects");
};

export const apiGetProject = async (id) => {
    return apiClient.get(`/projects/${id}`);
  };
  
  export const apiAddProject = async (newProject) => {
    return apiClient.post("/projects", newProject);
  };
  
  export const apiUpdateProject = async (id, updates) => {
    return apiClient.patch(`/projects/${id}`, updates);
  };
  
  export const apiDeleteProject = async (id) => {
    return apiClient.delete(`/projects/${id}`);
  };