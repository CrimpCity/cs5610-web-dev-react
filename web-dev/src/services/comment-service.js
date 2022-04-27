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
  api.get(`${BASE_URL}/titles/${titleId}/comments`, {timeout: 15000});

/**
 * Create a new comment for title with the argument title ID
 *
 * @param titleId
 * @param comment
 * @returns
 */
export const createNewCommentForTitle = (titleId, comment) =>
  api.post(`${BASE_URL}/titles/${titleId}/comments`, {comment: comment}, {timeout: 15000});

/**
 * Delete specified comment using comment ID.
 *
 * @param commentId
 * @returns
 */
export const deleteCommentById = (commentId) =>
  api.delete(`${BASE_URL}/comments/${commentId}`, {timeout: 15000});

/**
 * Update specified comment using comment ID.
 *
 * @param commentId
 * @param updatedComment
 * @returns
 */
export const updateCommentById = (commentId, updatedComment) =>
  api.put(`${BASE_URL}/comments/${commentId}`, {comment: updatedComment}, {timeout: 15000});

/**
 * Return all comments made by a particular user
 *
 * @param userId
 * @returns array of comments
 */
export const findAllCommentsByUser = (userId) =>
    api.get(`${BASE_URL}/comments/${userId}`, {timeout: 15000});
