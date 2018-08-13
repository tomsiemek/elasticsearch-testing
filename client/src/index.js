import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import history from './history';

import {Router}  from 'react-router-dom';
import {CookiesProvider} from 'react-cookie';

ReactDOM.render((
    <Router history ={history}>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </Router>)
    , document.getElementById('root'));
registerServiceWorker();
