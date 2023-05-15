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
        default:
            ElMessage({
                massage: response.data.message,
                showClose: true,
                type: "error"
            });
    }
}

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
        const { response } = error;
        if(response) {
            errorHandle(response.data.code, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网情况
        }
    }
)
