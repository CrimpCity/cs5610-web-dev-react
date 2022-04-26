import axios from "axios";

const BASE_URL = "http://localhost:4000";
const USERS_API = `${BASE_URL}/api/users`;


export const findUserBookmarkedMovie = async (uid, mid) =>
    await axios.get(`${USERS_API}/${uid}/bookmarks/${mid}`)
        .then(response => response.data);

export const userTogglesBookmark = async (uid, mid) =>
    await axios.get(`${USERS_API}/${uid}/bookmarks/toggle/${mid}`)
        .then(response => response.data);

export const deleteAllBookmarksOfMovie = async (mid) =>
    await axios.delete(`${BASE_URL}/api/movie/${mid}/bookmarks`)
        .then(response => response.data);

export const findAllBookmarkedByUser = async (uid) =>
    await axios.get(`${BASE_URL}/api/users/${uid}/bookmarks`)
        .then(response => response.data);

export const userBookmarksMovie = async (uid, mid) =>
    await axios.post(`${USERS_API}/${uid}/bookmarks/${mid}`)
        .then(response => response.data);