import * as commentsService from "../services/comment-service.js"

export const FIND_USER_COMMENTS = "FIND_USER_COMMENTS";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";



export const findAllCommentsByUser = async (dispatch, uid) => {
    const comments = await commentsService.findAllCommentsByUser(uid);
    dispatch({
        type: FIND_USER_COMMENTS,
        comments: comments
    });
}


export const updateComment = async (dispatch, cid, commentText) => {
    const response = await commentsService.updateCommentById(cid, commentText);
    const updatedComment = await commentsService.findCommentById(cid);
    dispatch({
        type: UPDATE_COMMENT,
        comment: updatedComment
    });
}


export const deleteComment = async (dispatch, cid) => {
    const response = await commentsService.deleteCommentById(cid);
    dispatch({
        type: DELETE_COMMENT,
        comment: cid
    });
}
