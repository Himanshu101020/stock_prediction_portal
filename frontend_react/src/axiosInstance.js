import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Request interceptors
axiosInstance.interceptors.request.use(
    function(config){
        // console.log("request==>>", config)
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },
    function (error) {
        return Promise.reject(error);
      }
)

axiosInstance.interceptors.response.use(
    function(response){
        return response
    },
    async function(error){
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken');
        try{
            const response = await axiosInstance.post('/token/refresh/', {refresh:refreshToken})
            const newAccessToken = response.data.access
            localStorage.setItem('accessToken', newAccessToken)
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
            return axiosInstance(originalRequest)
        }catch(error){
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')

        }
        }
        return Promise.reject(error)
        
    }
)

export default axiosInstance