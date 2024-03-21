import { apiClient } from "./config";

export const apiGetAllSkills = async () => {
    return apiClient.get("/skills");
};