import axios from "axios";

export const employeeApi = axios.create({
 baseURL: "http://localhost:4000"
});
