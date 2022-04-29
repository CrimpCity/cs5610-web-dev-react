import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";

const api = axios.create({
  withCredentials: true
});

/**
 * Get comments for title with the argument title ID
 *
 * @param titleId
 * @returns
 */
export const getCommentsForTitle = titleId =>
  api.get(`${BASE_URL}/titles/${titleId}/comments`, { timeout: 15000 });

/**
 * Create a new comment for title with the argument title ID
 *
 * @param titleId
 * @param comment
 * @returns
 */
export const createNewCommentForTitle = (titleId, comment) =>
  api.post(`${BASE_URL}/titles/${titleId}/comments`, { comment: comment }, { timeout: 15000 });

/**
 * Delete specified comment using comment ID.
 *
 * @param commentId
 * @returns
 */
export const deleteCommentById = (commentId) =>
  api.delete(`${BASE_URL}/comments/${commentId}`, { timeout: 15000 });

/**
 * Update specified comment using comment ID.
 *
 * @param commentId
 * @param updatedComment
 * @returns
 */
export const updateCommentById = (commentId, updatedComment) =>
  api.put(`${BASE_URL}/comments/${commentId}`, { comment: updatedComment }, { timeout: 15000 });

/**
 * Retrieve all of a user's comments given their userID
 * @param  {string} uid
 */
export const findAllCommentsByUser = async (uid) =>
  await api.get(`${BASE_URL}/users/${uid}/comments`, { timeout: 15000 })
    .then(response => response.data);


/**
 * Retrieve a comment from it's id
 * @param  {string} cid
 */
export const findCommentById = async (cid) =>
  await api.get(`${BASE_URL}/comments/${cid}`, { timeout: 15000 })
    .then(response => response.data);