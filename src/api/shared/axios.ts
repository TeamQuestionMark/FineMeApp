import { BASE_URL } from "@/constants/config";
import axios from "axios";

export const mainAxios = axios.create({
  baseURL: BASE_URL
});
