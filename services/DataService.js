import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://service-f9fjwngp-1252021671.bj.apigw.tencentcs.com/release/pneumonia",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  withCredentials: false
});

export default {
  getData() {
    return apiClient.get("/");
  }
};
