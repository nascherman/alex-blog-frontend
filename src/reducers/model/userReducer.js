import {handleActions} from 'redux-actions';
import {GET_ME, SET_TOKEN} from "../../actions/model/user";

const initialState = {
    token: '',
    user: { user: {}}
};

export default handleActions(
    new Map([
        [GET_ME,
            (state, action) => {
                if (action.error) {
                    return {
                        ...initialState // wipe auth
                    }
                } else {
                    return {
                        ...state,
                        user: action.payload
                    }
                }
            }],
        [SET_TOKEN,
            (state, action) => {
                return {
                    ...state,
                    token: action.payload
                }
            }]
    ]),
    initialState
)