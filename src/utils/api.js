import http from './http.js';

export function getBanner(params){
    return http.get('/banner',params)
}

export function getMenu(params){
    return http.get('/menu',params)
}