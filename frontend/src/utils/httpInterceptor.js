import { BASE_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router";

const API_BASE_URL = BASE_URL;

const useAxiosWithInterceptor = () => {
  const httpAxios = axios.create({ API_BASE_URL });
  const navigate = useNavigate();

  httpAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 403) {
        const goRoot = () => navigate("/");
        goRoot();
      }
      throw error;
    }
  );
  return httpAxios;
};

export default useAxiosWithInterceptor;
