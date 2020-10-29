import { combineReducers } from 'redux';

import {reducer as cookReducer} from '../home/cook/reducer';
import {reducer as messageReducer} from '../home/message/reducer';

const reducer=combineReducers({
    cookReducer,
    messageReducer
})

export default reducer;