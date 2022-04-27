import axios from "axios";
const BASE_URL = "http://localhost:4000/api"

const LOGIN_API = `${BASE_URL}/login`;
const USERS_API = `${BASE_URL}/users`;

const api = axios.create({
  withCredentials: true
});


export const createUser = (user) =>
  api.post(`${USERS_API}`, user).then(response => response.data);

export const findAllUsers = () =>
  api.get(USERS_API).then(response => response.data);

export const findUserById = (uid) =>
  api.get(`${USERS_API}/${uid}`).then(response => response.data);

export const deleteUser = (uid) =>
  api.delete(`${USERS_API}/${uid}`).then(response => response.data);

export const deleteUsersByUsername = (username) =>
  api.get(`${USERS_API}/username/${username}/delete`).then(response => response.data);

export const findUserByCredentials = (credentials) =>
  api.post(`${LOGIN_API}`, credentials).then(response => response.data);

export const findUserByUsername = (username) =>
    api.get(`${USERS_API}/${username}/comments`).then(response => response.data);

export const updateUser = (userId, newUserInfo) =>
    api.put(`${USERS_API}/${userId}`, newUserInfo).then(response => response.data);

const service = {
  findAllUsers
}

export default service;