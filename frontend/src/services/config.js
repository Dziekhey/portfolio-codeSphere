import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_LOCAL_URL

export const apiClient = axios.create({
    baseURL: baseUrl,
});