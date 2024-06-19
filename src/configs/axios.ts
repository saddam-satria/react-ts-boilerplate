import axios from "axios";
import { API_KEY, API_URL } from "@/utlis/constant";

export default axios.create({
  baseURL: API_URL,
  headers: {
    "x-api-key": API_KEY,
  },
});
