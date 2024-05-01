import axios from 'axios';
import { KEY_ACCESS_TOKEN, getItem, removeItem } from './localStoragemanager';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true
});

axiosClient.interceptors.request.use(
    (request) => {
        const accessToken = getItem(KEY_ACCESS_TOKEN); 
        if (accessToken) {
            request.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return request;
    }
);

axiosClient.interceptors.response.use(
    async (response) => {
        const data = response.data;
        if (data.status === "ok") {
            return data;
        }
        const originnalRequest = response.config;
        const statusCode = data.statusCode;
        const error = data.error;

        if (statusCode === 401 && originnalRequest.url === "/auth/refresh") {
            removeItem(KEY_ACCESS_TOKEN);
            window.location.replace('/login', '_self');
            return Promise.reject(error);
        }

        if (statusCode === 401) {
            try {
                const refreshResponse = await axiosClient.get('/auth/refresh');
            } catch (refreshError) {
                console.log('Refresh token failed', refreshError);
                removeItem(KEY_ACCESS_TOKEN);
                window.location.replace('/login', '_self');
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    },
    (error) => {
        console.log('Network error', error);
        return Promise.reject(error);
    }
);
