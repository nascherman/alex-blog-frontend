import React from 'react';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise';
import {persistStore} from "redux-persist";
import {PersistGate} from 'redux-persist/integration/react';
import persistedReducer from './reducers';

import './App.scss';

import ConnectedApp from './ConnectedApp';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, {}, composeEnhancers(
    applyMiddleware(promiseMiddleware)
));
const persistor = persistStore(store);

export default class AppRenderer extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
              <ConnectedApp/>
          </PersistGate>
        </Provider>
    )
  }
}