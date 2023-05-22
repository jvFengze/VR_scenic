// // 封装axios
import axios from 'axios';
import router from '../router/index.js'
import { ElMessage } from 'element-plus'

const baseURL = {
    production: "http://81.70.155.101:8060"
}
const instance = axios.create({
    baseURL: baseURL.production,
  });

// 错误处理
const errorHandle = (code, message) => {
    switch(code){
        case 401:
            ElMessage({
                massage: message + '请重新登录',
                showClose: true,
                type: "error"
            });
            router.push("/");
            break;
        case 500:
            ElMessage({
                massage: message + '请重新登录',
                showClose: true,
                type: "error"
            });
            break;
        default:
            ElMessage({
                massage: message,
                showClose: true,
                type: "error"
            });
    }
}

// //  请求拦截
instance.interceptors.request.use(
    config => {
        if (router.currentRoute.value.fullPath === "/") {
            return config;
        } 
        else{
            config.headers.token = sessionStorage.getItem('')
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

// // 响应拦截器
instance.interceptors.response.use(
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    error => {
        console.log('1');
        if(error) {
            errorHandle(error.data.code, error.data.message);
            return Promise.reject(response);
        } 
        // else {
        //     // 处理断网情况
        // }
    }
)

export default instance