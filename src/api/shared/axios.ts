import { BASE_URL, API_KEY } from "@/constants/config";
import axios from "axios";

export const mainAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-ncp-apigw-api-key': API_KEY
  }
});
