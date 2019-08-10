import {SHOW_HIDE_SNACKBAR} from "../../actions/ui/snackbar";
import {handleActions} from "redux-actions";

const initialState = {
    show: false
};

export default handleActions(
    new Map([
        [
            SHOW_HIDE_SNACKBAR,
            (state, action) => {
                return {
                    show: action.payload
                }
            }
        ]
    ]),
    initialState
)