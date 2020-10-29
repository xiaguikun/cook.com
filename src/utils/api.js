import http from './http.js';

//cook
export function getBanner(params){
    return http.get('/cooks/banner',params)
}

export function getMenu(params){
    return http.get('/cooks/menu',params)
}

export function getRecommend(params){
    return http.get('/cooks/recommend',params)
}


//message
export function getMessage(params){
    return http.get('/messages/list',params);
}