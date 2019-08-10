import {SHOW_HIDE_MODAL} from "../../actions/ui/modal";
import {handleActions} from "redux-actions";

const initialState = {
    show: false
};

export default handleActions(
    new Map([
        [
            SHOW_HIDE_MODAL,
            (state, action) => {
                return {
                    show: action.payload
                }
            }
        ]
    ]),
    initialState
)