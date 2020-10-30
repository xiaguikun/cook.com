import {TAB_CHANGE} from './actionType';

const defaultState={
    selectedTab: sessionStorage.getItem('tab') || 'cook'
}

const reducer=(state=defaultState,action)=>{
    action = action || {type : ''}
    switch(action.type){
        case TAB_CHANGE:
            return {
                ...state,
                selectedTab:action.tab
            }
        default:
            return state;
    }
}

export {reducer};