import { getBanner,getMenu,getRecommend} from '@utils/api';

import {
    COOKS_GET_ALL,
} from './actionTypes';

// const getBannerDate=(data)=>{
//     return {
//         type:COOKS_GET_BANNER_DATA,
//         bannerPrefix:data.prefix,
//         bannerList:data.result
//     }
// }

// const getBannerList=()=>{
//     return async (dispatch)=>{
//         const res=await getBanner()
//         // console.log(res.data);
//         dispatch(getBannerDate(res.data))
//     }
// }

// const getMenuData=(data)=>{
//     return {
//         type:COOKS_GET_MENU_DATA,
//         menuPrefix:data.prefix,
//         menuList:data.result
        
//     }
// }

// const getMenuList=()=>{
//     return async (dispatch)=>{
//         const res=await getMenu();
//         // console.log(res.data);
//         dispatch(getMenuData(res.data));
//     }
// }


// const getRecommendData=(data)=>{
//     return {
//         type:'getRecommendData',
//         recommendList:data.result,
//         recommendUrlPrefix:data.prefix
//     }
// }

// const getRecommendList=()=>{
//     return async (dispatch)=>{
//         const res =await getRecommend();
//         // console.log(res);
//         dispatch(getRecommendData(res.data))
//     }
// }

const getCooksAllData=(data)=>{
    return {
        type:COOKS_GET_ALL,
        bannerList:data[0].data.result,
        bannerPrefix:data[0].data.prefix,
        menuList:data[1].data.result,
        menuPrefix:data[1].data.prefix,
        recommendList:data[2].data.result,
        recommendUrlPrefix:data[2].data.prefix
    }
}

const getCooksAll=()=>{
    return async (dispatch)=>{
        //Promise.all接受一个数组作为参数，数组内都是每个Promise，只有当所有的Promise都有then的返回结果的时候，它会返回一个Promise对象，返回的Promise对象，其中then中就是数组内的所有的Promise的返回值
        // console.log(Promise.all([getBanner(),getMenu(),getRecommend()]));
        const res=await Promise.all([getBanner(),getMenu(),getRecommend()]);        
        // console.log(res);
        dispatch(getCooksAllData(res))
    }
}

export {
    // getBannerDate,
    // getBannerList,
    // getMenuList,
    // getRecommendList

    getCooksAll
}