import { environment } from "../environement";
import Axios from "axios";

export const axiosClient = Axios.create({
  baseURL: environment.PUBLIC_API_URL,
});
