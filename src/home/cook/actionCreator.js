import { getBanner,getMenu,getRecommend} from '@utils/api';

import {
    COOKS_GET_BANNER_DATA,
    COOKS_GET_MENU_DATA
} from './actionTypes';

const getBannerDate=(data)=>{
    return {
        type:COOKS_GET_BANNER_DATA,
        bannerPrefix:data.prefix,
        bannerList:data.result
    }
}

const getBannerList=()=>{
    return async (dispatch)=>{
        const res=await getBanner()
        // console.log(res.data);
        dispatch(getBannerDate(res.data))
    }
}

const getMenuData=(data)=>{
    return {
        type:COOKS_GET_MENU_DATA,
        menuPrefix:data.prefix,
        menuList:data.result
        
    }
}

const getMenuList=()=>{
    return async (dispatch)=>{
        const res=await getMenu();
        // console.log(res.data);
        dispatch(getMenuData(res.data));
    }
}


const getRecommendData=(data)=>{
    return {
        type:'getRecommendData',
        recommendList:data.result,
        recommendUrlPrefix:data.prefix
    }
}

const getRecommendList=()=>{
    return async (dispatch)=>{
        const res =await getRecommend();
        // console.log(res);
        dispatch(getRecommendData(res.data))
    }
}

export {
    getBannerDate,
    getBannerList,
    getMenuList,
    getRecommendList
}