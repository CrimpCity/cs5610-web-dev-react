import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const USERS_API = `${BASE_URL}/users`;

const api = axios.create({
    withCredentials: true
});

export const findUserBookmarkedMovie = async (uid, mid) =>
    await api.get(`${USERS_API}/${uid}/bookmarks/${mid}`)
        .then(response => response.data);

export const userTogglesBookmark = async (uid, mid) =>
    await api.get(`${USERS_API}/${uid}/bookmarks/toggle/${mid}`)
        .then(response => response.data);

export const deleteAllBookmarksOfMovie = async (mid) =>
    await api.delete(`${BASE_URL}/movie/${mid}/bookmarks`)
        .then(response => response.data);

export const findAllBookmarkedByUser = async (uid) =>
    await api.get(`${BASE_URL}/users/${uid}/bookmarks`)
        .then(response => response.data);

export const userBookmarksMovie = async (uid, mid) =>
    await api.post(`${USERS_API}/${uid}/bookmarks/${mid}`)
        .then(response => response.data);

export const isMovieBookmarkedbyUser = async (titleId) =>
    await api.get(`${BASE_URL}/titles/${titleId}/bookmarks`)
        .then(response => response.data);