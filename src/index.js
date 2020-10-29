import React from 'react';
import ReactDOM from 'react-dom';
import 'lib-flexible'

import {Provider} from 'react-redux';
import store from './store/index'

import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
)