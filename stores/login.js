// stores/login.js
import { defineStore } from 'pinia'
import axios from 'axios'
import axiosInstance from '~/utils/axios'
export const useLoginStore = defineStore('login', {
  state: () => ({
    logedin: false,
    loginSearchdepart: false,
    user: {},
    accessToken: null,
    refreshToken: null,
    errmsg:'',
  }),
  actions: {
    async login(loginForm) {
      try {
        // ✅ useRuntimeConfig must be inside the action
        const config = useRuntimeConfig();
        const apiUrl = config.public.apiBaseUrl;

        console.log(`Pinging: ${apiUrl}/login`);

        const response = await axiosInstance.post(`/api/login`, {
          'email': loginForm.email,
          'password': loginForm.pwd
        });

        // ✅ Make sure to validate the response structure
        if (response.data && response.data.access_token) {
          this.accessToken = response.data.access_token;
         

          this.logedin = true;
         

          // localStorage.setItem('accessToken', this.accessToken);
          // No need to store refreshToken, it's set in HTTP-only cookie
          // this.refreshToken = response.data.refresh_token;
          // if (this.refreshToken) {
          //   localStorage.setItem('refreshToken', this.refreshToken);
          // }
          const res2 = await axios.get(`${apiUrl}/api/verify-token`, {
            headers: {
              Authorization: `Bearer ${this.accessToken}`,
            }
          });
          

          this.user = res2.data.user ;
          console.log('User logged in successfully:', this.user);
          this.loginSearchdepart= false

        } else {
          throw new Error('Invalid response from server');
        }
      } catch (error) {
        this.errmsg=error.response.data.error
        console.error('Error during login:', error.response.data.error );
        this.logedin = false;
        this.user = {};
      }
    },

    logout() {
      this.logedin = false;
      this.user = {};
      this.accessToken = null;
      this.refreshToken = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  }
})
