import { combineReducers } from 'redux';

import {reducer as cookReducer} from '../home/cook/reducer';

const reducer=combineReducers({
    cookReducer
})

export default reducer;