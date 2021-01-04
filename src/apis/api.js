import axios from 'axios';
import router from '@/router';
import UtilVar from "../utils/stacts";
import { message } from '../utils/message';

let baseUrl = '';
if(process.env.NODE_ENV==="production"){
   
        baseUrl = UtilVar.baseUrl;  // 正式环境 || 生产环境
  
}else{ //开发环境
    baseUrl = UtilVar.Url;    
}



// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么  根据后端配置
    let token ="usertoken";
    config.headers.common['token'] =token;  //Authorization
    // console.log(token)
    config.headers.common['Content-Type'] ="application/json;charset=utf-8";
    

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
/**
 * 响应拦截 接口返回信息统一处理 
 */
axios.interceptors.response.use(response => {
    // console.log(response.data.resultHint)
    if (response&&response.data && response.data.resultHint == UtilVar.Code403) {   
        message.warning("用户登陆已过期，或暂无用户！")
        router.push('login');
        return
    }
    return response
}, error => {
    return Promise.reject(error)
})

export const GET = (url,params)=>{
    // console.log(`${baseUrl}${url}`)
    return axios.get(`${baseUrl}${url}`,{params:params})
        .then((data) => {
            return data
        })
}

export const DOWNLOAD = (url)=>{
    console.log(`${baseUrl}${url}`)
    return axios.get(`${baseUrl}${url}`, {responseType: 'blob'})
        .then((data) => {
            return data
        }).catch((error)=>{
            return error
        })
}
export const POST = (url,params)=>{

    // console.log(params)
    return axios.post(`${baseUrl}${url}`,params)
        .then((data) => {
            return data
        }).catch((error)=>{
            return error
        })
}
export const POSTTime = (url,params,time)=>{

    // console.log(params)
        return axios({
            url:`${baseUrl}${url}`,
            method:'post',
            timeout:time,
            data:params
        }).then(res=>{
            return res;
        })
}
export const GETTime = (url,params,time)=>{

    // console.log(params)
    return axios({
        url:`${baseUrl}${url}`,
        method:'get',
        timeout:time,
        params:params
    }).then(res=>{
        return res;
    })
}


let configs = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}
// 文件类型
export const UPPOST = (url,params)=>{
    return axios.post(`${baseUrl}${url}`,params,configs)
        .then((data) => {
            return data
        })
}
