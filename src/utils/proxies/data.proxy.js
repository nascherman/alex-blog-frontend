import { buildCommentBody, buildPostBody, BASE_URL, API_URLS } from "../../constants/api.const";

import { get, post } from "./http.proxy";

class DataProxy {
    static getMe() {
        return get(`${BASE_URL}${API_URLS.CURRENT_USER}`);
    }

    static getPost() {
        return get(`${BASE_URL}${API_URLS.GET_POST}`);
    }

    static getComments(id) {
        return get(`${BASE_URL}${API_URLS.GET_COMMENTS(id)}`);
    }

    static createPost(title, body) {
        return post(
          `${BASE_URL}${API_URLS.POST_POST}`,
            buildPostBody(title, body)
        );
    }

    static createComment(body, postId, parentCommentId) {
        return post(
            `${BASE_URL}${API_URLS.POST_COMMENT}`,
            buildCommentBody(body, postId, parentCommentId)
        )
    }
}

export default DataProxy;