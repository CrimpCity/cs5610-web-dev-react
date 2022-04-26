import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";

const api = axios.create({
  withCredentials: true
});

/**
 *
 * @param keyword
 * @returns {Promise<AxiosResponse<any>>}
 */
export const searchTitle = keyword =>
  api.get(`${BASE_URL}/search`, {timeout: 15000, params: {q: keyword}});

export const getTitleDetail = movieId =>
  api.get(`${BASE_URL}/titles/${movieId}`, {timeout: 15000});