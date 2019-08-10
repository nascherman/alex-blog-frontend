import { createAction } from 'redux-actions';
import dataProxy from '../../utils/proxies/data.proxy';

export const GET_POSTS = createAction('GET_POSTS', () => {
   return  dataProxy.getPost();
});

export const GET_COMMENTS = createAction('GET_COMMENTS', (id) => {
   return dataProxy.getComments(id);
});

export const CREATE_POST = createAction('CREATE_POST', (title, body) =>
    (dataProxy.createPost(title, body)));

export const CREATE_COMMENT = createAction('CREATE_COMMENT', (body, postId, parentCommentId) =>
    (dataProxy.createComment(body, postId, parentCommentId)));

export const SET_ACTIVE_COMMENT = createAction('SET_ACTIVE_COMMENT', (postId, parentCommentId) =>
    ({postId, parentCommentId}));