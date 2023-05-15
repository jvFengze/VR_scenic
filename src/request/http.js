// // 封装axios
import axios from 'axios';
import { error } from 'console';
import { config } from 'process';
// import router from '../router/index.js'
import { ElMessage } from 'element-plus'
import { error, group } from 'console';

const baseURL = {
    production: "http://81.70.155.101:8060"
}
const instance = axios.create({
    baseURL: baseURL.production,
  });
//  请求拦截
instance.interceptors.request.use(
    config => {
        if (router.history.current.fullPath === "/login") {
            return config;
        } 
        // else{
        //     // config.headers.token = token
        // }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    res => res.data.code === 200 ? Promise.resolve(res) : Promise.reject(res),
    error => {

    }
)

// 错误处理
const errorHandle = (code, message) => {
    switch(code){
        case 401:
            ElMessage({
                massage: response.data.message + '请重新登录',
                showClose: true,
                type: "error"
            });
            router.push("/");
            break;
        }
}
// axios.interceptors.response.use(
//     response =>{
//         if(response.data.code === 200){
//             return Promise.resolve(response);
//         }else {
//             return Promise.reject(response);
//         }
//     },
//     error => {
//         if(error.response.data.code){
//             switch(error.response.data.code){
//                 case 401:
//                     ElMessage({
//                         massage: response.data.message + '请重新登录',
//                         showClose: true,
//                         type: "error"
//                     });
//                     router.push("/");
//                     break;
//                 default:
//                     ElMessage({
//                         massage: response.data.message,
//                         showClose: true,
//                         type: "error"
//                     });
//             }
//             return Promise.reject(error.response)
//         }
//     }
// )