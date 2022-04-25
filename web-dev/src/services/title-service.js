import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";

/**
 *
 * @param keyword
 * @returns {Promise<AxiosResponse<any>>}
 */
export const searchTitle = keyword =>
  axios.get(`${BASE_URL}/search`, {timeout: 15000, params: {q: keyword}});

export const getTitleDetail = movieId =>
  axios.get(`${BASE_URL}/titles/${movieId}`, {timeout: 15000});