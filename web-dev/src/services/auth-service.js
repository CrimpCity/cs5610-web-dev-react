import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE | "http://localhost:4000/api";
const AUTH_API = `${BASE_URL}/auth`

const api = axios.create({
  withCredentials: true
});

/**
 * Log in using the given credential
 * Return status 200 if log in successfully with basic user information:
 *                      username and user type,
 *        status 401 if fail,
 *    and status 405 if the user is already logged in.
 *
 * @returns 200 with basic user info if successful, 401 if fail, and 405 if already login
 */
export const login = (credentials) =>
  api.post(`${AUTH_API}/login`, credentials);

/**
 * Log out from the server
 * Return true if log out successfully
 *        false if log out fail/not support
 *
 * @returns true if successful; otherwise, false
 */
export const logout = () =>
  api.post(`${AUTH_API}/logout`)
    .then(() => true)
    .catch(() => false);

/**
 * Return user basic information: username, userType, avatar imageURL if authenticated.
 * Otherwise, it returns null.
 *
 * @returns user info if authenicated; otherwise, null
 */
export const user = () => api.get(`${AUTH_API}/user`)
  // Handle successful response from server.
  .then(response => response.data)
  // Handle unauthenticated response from server
  .catch(() => null);

// TODO: Set up registration (Work out what data to collect from new user)
export const signup = (user) =>
  api.post(`${AUTH_API}/signup`, user)
    .then(response => response.data);

// TODO: Set up user's full profile info retrieval (Work out what data to collect from new user)
export const profile = () =>
  api.get(`${AUTH_API}/profile`)
    .then(response => response.data);
