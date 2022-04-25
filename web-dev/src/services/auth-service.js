import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const AUTH_API = `${BASE_URL}`

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
export const signIn = (credentials) =>
  api.post(`${AUTH_API}/signin`, credentials, {timeout: 5000});

/**
 * Log out from the server
 * Return true if log out successfully
 *        false if log out fail/not support
 *
 * @returns true if successful; otherwise, false
 */
export const signOut = () =>
  api.post(`${AUTH_API}/signout`, {timeout: 5000})
    .then(() => true)
    .catch(() => false);

/**
 * Return current user profile if authenticated.
 * Otherwise, it returns null.
 *
 * @returns profile data if authenticated; otherwise, null
 */
export const profile = () => api.get(`${AUTH_API}/profile`, {timeout: 5000})
  // Handle successful response from server.
  .then(response => response.data)
  // Handle unauthenticated response from server
  .catch(() => null);


/**
 * Sign up.
 *
 * It takes newProfile with the following structure:
 * {
 *   firstName: string,
 *   lastName: string,
 *   username: string (required),
 *   emailOrNumber: string (required),
 *   password: string (required)
 * }
 */
export const signUp = (newProfile) =>
  api.post(`${AUTH_API}/signup`, newProfile);

