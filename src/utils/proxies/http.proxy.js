import { store } from "../../App";

export const post = (url, body = {}, options = {}) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: _setAuthHeaders(),
            'content-type': 'application/json'
        },
        body: JSON.stringify(body),
        ...options
    })
        .then(res => {
            if(!res.ok) {
                throw res.json();
            }

            if (res.status === 204) {
                return true;
            }

            return res.json();
        })
        .catch(err => {
            throw err
        });
};

export const get = (url, options = {}) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: _setAuthHeaders(),
            Accept: 'application/json'
        },
        ...options
    })
        .then(res => {
            if(!res.ok) {
                throw res.json();
            }

            if (res.status === 204) {
                return true;
            }

            return res.json();
        })
        .catch(err => {
            throw err;
        });
};

function _setAuthHeaders() {
    const { user } = store.getState();

    return `Bearer ${user.token}`;
}