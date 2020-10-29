import axios from 'axios';
import qs from 'qs';

const instance=axios.create({
    baseURL:'http://10.31.160.92:5000/api/cooks',
    timeout:4000
})

const http={
    get(url,params){
        return new Promise((resolve,reject)=>{
            instance.get(url,{
                params:params
            }).then((response)=>{
                resolve(response)
            }).catch((err)=>{
                reject(err);
            })
        })
    },
    post(url,data){
        return new Promise((resolve,reject)=>{
            instance.post(url,qs.stringify(data))
            .then((response)=>{
                resolve(response)
            })
            .catch((err)=>{
                reject(err)
            })
        })
    }
}

export default http;