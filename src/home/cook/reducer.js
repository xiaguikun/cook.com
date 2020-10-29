import {
    COOKS_GET_BANNER_DATA,
    COOKS_GET_MENU_DATA
} from './actionTypes';

const defaultState={
    bannerList:[],
    bannerPrefix:'',
    menuList:[],
    menuPrefix:'',
    recommendList:[],
    recommendUrlPrefix:''
}

const reducer=(state=defaultState,action)=>{
    action =action || {type:''};
    switch(action.type){
        case COOKS_GET_BANNER_DATA:
            // console.log(action);
            return {
                ...state,
                bannerList:action.bannerList,
                bannerPrefix:action.bannerPrefix
            }
        case COOKS_GET_MENU_DATA:
            // console.log(action);
            return {
                ...state,
                menuList:action.menuList,
                menuPrefix:action.menuPrefix
            }
        case 'getRecommendData':
            return {
                ...state,
                recommendList:action.recommendList,
                recommendUrlPrefix:action.recommendUrlPrefix
            }
        default:
            return state;
    }
}

export  {reducer};