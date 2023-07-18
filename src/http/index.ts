import axios from "axios";
import { API_URL } from "@/constants/apiUrl";

const Axios = axios.create({
  baseURL: API_URL,
});

export default Axios;
