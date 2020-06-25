import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant';
import 'vant/lib/index.css';

Vue.use(Toast);

export function request(config) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL:'http://123.207.32.32:8000/api/m3',
            timeout:5000
        })

        instance.interceptors.request.use(config =>{
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
                loadingType: 'spinner',
                duration: 0
            });
            return config
        })

        instance.interceptors.response.use(data =>{
            Toast.clear()
            return data.data
        })

        instance(config).then(res =>{
            resolve(res)
        }).catch(rej =>{
            reject(rej)
        })
    })

}