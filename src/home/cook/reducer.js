const defaultState={
    bannerList:[],
    bannerPrefix:'',
    menuList:[],
    menuPrefix:''
}

const reducer=(state=defaultState,action)=>{
    action =action || {type:''};
    switch(action.type){
        case 'getBanner':
            // console.log(action);
            return {
                ...state,
                bannerList:action.bannerList,
                bannerPrefix:action.bannerPrefix
            }
        case 'getMenu':
            // console.log(action);
            return {
                ...state,
                menuList:action.menuList,
                menuPrefix:action.menuPrefix
            }
        default:
            return state;
    }
}

export  {reducer};