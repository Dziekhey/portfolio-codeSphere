import { apiClient } from "./config";

export const apiGetAllBlogs = async () => {
    return apiClient.get("/blogs");
};

export const apiGetBlog = async (id) => {
    return apiClient.get(`/blogs/${id}`);
  };
  
  export const apiAddBlog = async (newBlogs) => {
    return apiClient.post("/blogs", newBlogs);
  };
  
  export const apiUpdateBlog = async (id, updates) => {
    return apiClient.patch(`/blogs/${id}`, updates);
  };
  
  export const apiDeleteBlog = async (id) => {
    return apiClient.delete(`/blogs/${id}`);
  };