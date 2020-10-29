import { getBanner,getMenu} from '@utils/api';

const getBannerDate=(data)=>{
    return {
        type:'getBanner',
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
        type:'getMenu',
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

export {
    getBannerDate,
    getBannerList,
    getMenuList
}