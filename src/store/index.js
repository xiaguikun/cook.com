import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'
import reducer from './reducer';

const applyMiddle=applyMiddleware(thunk)

const store =createStore(reducer,applyMiddle);

export default store;
