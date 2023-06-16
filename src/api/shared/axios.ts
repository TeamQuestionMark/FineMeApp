import { BASE_URL } from "@/utils/constants";
import axios from "axios";

export const mainAxios = axios.create({
  baseURL: BASE_URL
});
