import axios from "axios";
import configData from "../config";

const instance = axios.create({
  baseURL: configData.URL,
});

instance.interceptors.request.use((config) => {
  const tokens = configData.token;
  if (tokens !== null) {
    config.headers.Authorization = `Bearer ${tokens}`;
  }
  return config;
});

export default instance;
