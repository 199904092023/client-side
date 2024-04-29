import axios from 'axios';
import{ KEY_ACCESS_TOKEN, getItem, removeItem } from './localStoragemanager';

export  const axiosClient = axios.create({
    baseUrl: 'http://localhost:4000',
    withCredentials: true
})


axiosClient.interceptors.request.use(
    (request) => {
        const accessToken = getItem(accessToken);
        request.headers['Authorization'] = `Bearer ${accessToken}`;
        return request;
    }
);

axiosClient.interceptors.response.use(
    async (response) => {
        const data = response.data;
        if(data.status === "ok"){
            return data;
        }
         const originnalRequest = response.config;
        const statusCode = data.statusCode;
        const error = data.error;

        if ( statusCode === 401 &&
            originnalRequest.url === "http://localhost:4000/auth/refresh")
   {
        removeItem(KEY_ACCESS_TOKEN);
            window.location.replace('/login', '_self');
    return Promise.reject(error);
   }

   if(statusCode === 401) {
     const response = await axiosClient.get('/auth/refresh');


     console.log('response from backend', response);
      //   if(response.status === 'ok'){
       //  setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
      //originnalRequest.headers["Authorization"] = `Bearer ${response.result.accessToken}`;}
   }
}

)