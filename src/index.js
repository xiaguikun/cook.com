import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible'

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './store/index'

import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App></App>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)