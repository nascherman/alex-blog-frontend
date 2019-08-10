import { createAction } from 'redux-actions';
import dataProxy from '../../utils/proxies/data.proxy';

export const GET_ME = createAction('GET_ME', () =>
    (dataProxy.getMe()));

export const SET_TOKEN = createAction('SET_TOKEN', token => token);