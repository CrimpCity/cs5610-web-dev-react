import axios from "axios";

const BASE_URL = "http://localhost:4000";
const MOVIES_API = `${BASE_URL}/api/movies`;

const api = axios.create({
    withCredentials: true
});


export const findAllMovies = async () =>
    await api.get(MOVIES_API).then(response => response.data);

export const findMovieById = async (mid) =>
    await api.get(`${MOVIES_API}/${mid}`).then(response => response.data);

export const createMovie = async (movie) =>
    await api.post(`${MOVIES_API}`, movie).then(response => response.data);

export const deleteMovie = async (mid) =>
    await api.delete(`${MOVIES_API}/${mid}`).then(response => response.data);

export const updateMovie = async (mid, movie) =>
    await api.put(`${MOVIES_API}/${mid}`, movie).then(response => response.data);

export const getRandomMovies = async (numMovies) => {
    console.log(`${MOVIES_API}/random/${numMovies}`);
    return await api.get(`${MOVIES_API}/random/${numMovies}`).then(response => response.data);
}