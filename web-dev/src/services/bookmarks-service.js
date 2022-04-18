import axios from "axios";

const BASE_URL = "http://localhost:4000";
const USERS_API = `${BASE_URL}/api/users`;


export const findUserBookmarkedMovie = (uid, mid) =>
    await axios.get(`${USERS_API}/${uid}/bookmarks/${mid}`)
        .then(response => response.data);

export const userTogglesBookmark = (uid, mid) =>
    await axios.get(`${USERS_API}/${uid}/bookmarks/toggle/${mid}`)
        .then(response => response.data);

export const deleteAllBookmarksOfMovie = mid =>
    await axios.delete(`${BASE_URL}/api/movie/${mid}/bookmarks`)
        .then(response => response.data);

export const findAllBookmarkedByUser = uid =>
    await axios.get(`${BASE_URL}/api/users/${uid}/bookmarks`)
        .then(response => response.data);