import {handleActions} from 'redux-actions';
import {GET_POSTS, CREATE_COMMENT, CREATE_POST, SET_ACTIVE_COMMENT, GET_COMMENTS} from "../../actions/model/post";

const initialState = {
    posts: [],
    comments: [],
    postId: null,
    parentCommentId: null
};

export default handleActions(
    new Map([
        [
            GET_POSTS,
            (state, action) => {
                if (action.error) {
                    return {
                        ...initialState,
                        ...state
                    }
                } else {
                    return {
                        ...state,
                        posts: action.payload.content
                    }
                }
            }],
        [CREATE_COMMENT,
            (state, action) => {
                if (action.error) {
                    return {
                        ...initialState,
                        ...state
                    }
                } else {

                    return {
                        ...state,
                        comments: action.payload
                    };
                }
            }],
        [CREATE_POST,
            (state, action) => {
                if (action.error) {
                    return {
                        ...initialState,
                        ...state
                    }
                } else {
                    return {
                        ...state
                    };
                }
            }],
        [SET_ACTIVE_COMMENT,
            (state, action) => {
                return {
                    ...state,
                    postId: action.payload.postId,
                    parentCommentId: action.payload.parentCommentId
                }
            }

        ],
        [GET_COMMENTS,
            (state, action) => {
                if (action.error) {
                    return {
                        ...state
                    }
                }

                return {
                    ...state,
                    comments: action.payload
                }
            }]
    ]),
    initialState
)