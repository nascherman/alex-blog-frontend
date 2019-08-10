export const BASE_URL = 'http://localhost:8080';

export const API_URLS = {
    CURRENT_USER: '/user/me',
    POST_COMMENT: '/comment',
    POST_POST: '/post',
    GET_POST: '/post',
    GET_COMMENTS: id => `/comment/${id}`
};

export const buildPostBody = (title, body = '') => ({ title, body });

export const buildCommentBody = (body, postId, parentCommentId) => ({ body, postId, parentCommentId });