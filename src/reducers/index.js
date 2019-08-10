import {reducer as formReducer} from 'redux-form';
import {persistCombineReducers} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import postReducer from "./model/postReducer";
import userReducer from "./model/userReducer";
import snackbarReducer from "./ui/snackbarReducer";
import modalReducer from "./ui/modalReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitlelist: ['user']
};

const reducers = {
    user: userReducer,
    post: postReducer,
    form: formReducer,
    snackbar: snackbarReducer,
    modal: modalReducer
};

export default persistCombineReducers(persistConfig, reducers);