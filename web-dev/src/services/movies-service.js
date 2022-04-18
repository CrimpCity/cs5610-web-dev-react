import axios from "axios";

const BASE_URL = "http://localhost:4000";
const MOVIES_API = `${BASE_URL}/api/movies`;


export const findAllMovies = async () =>
    await axios.get(MOVIES_API).then(response => response.data);

export const findMovieById = async (mid) =>
    await axios.get(`${MOVIES_API}/${mid}`).then(response => response.data);

export const createMovie = async (movie) =>
    await axios.post(`${MOVIES_API}`, movie).then(response => response.data);

export const deleteMovie = async (mid) =>
    await axios.delete(`${MOVIES_API}/${mid}`).then(response => response.data);

export const updateMovie = async (mid, movie) =>
    await axios.put(`${MOVIES_API}/${mid}`, movie).then(response => response.data);