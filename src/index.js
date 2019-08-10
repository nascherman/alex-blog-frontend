import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

import CssBaseline from '@material-ui/core/CssBaseline';

const render = () => ReactDOM.render((
    <React.Fragment>
        <CssBaseline />
        <App />
    </React.Fragment>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

render();

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render();
    });
}
