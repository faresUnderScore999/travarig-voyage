// src/utils/axios.js

import axios from 'axios';
import { useLoginStore } from '~/stores/login'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true, // ✅ this allows cookies to be sent/received
  headers: {
    'Content-Type': 'application/json'
  }
})
axiosInstance.interceptors.request.use((config) => {
  // ✅ Import store here, inside the interceptor function
  
  const loginStore = useLoginStore()
  if (loginStore.accessToken) {
    config.headers.Authorization = `Bearer ${loginStore.accessToken}`
  }

  return config
})

let isRefreshing = false

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const loginStore = useLoginStore()

    const originalRequest = error.config

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true // to avoid infinite loop

      try {
        if (!isRefreshing) {
          isRefreshing = true
          // Try to refresh the access token
          const res = await axiosInstance.post('/api/refresh', {})

          const newAccessToken = res.data.access_token

          // Optional: Save the token in store (if needed)
          loginStore.accessToken = newAccessToken

          // Set new token on the original request
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`

          isRefreshing = false

          // Retry the original request
          return axiosInstance(originalRequest)
        }
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError)
        loginStore.loginSearchdepart = true
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)
export default axiosInstance;
