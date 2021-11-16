import axios from "axios";

export async function createUrl(data) {
  return axios.post(`/v1/link-no-premium/create`, data);
}
export async function go(data) {
  return axios.post(`/v1/link-no-premium/go`, data);
}
