import axios from 'axios'
import $store from '../store/index'

// let ajaxTimer = 0;
export function requset(config){
    $store.commit('showLoading');
    const instance = axios.create({
        baseURL:'http://localhost:8080',
        timeOut: 2000
    })
    instance.interceptors.request.use(config =>{
        // console.log(config)
        // ajaxTimer++;
        return config
    },err => {
        $store.commit('hiddenLoading');
        return err
    })
    
    instance.interceptors.response.use(config => {
        // ajaxTimer--;
        $store.commit('hiddenLoading');
        return config
    },err=>{
        $store.commit('hiddenLoading');
        return err
    })
    return instance(config)
}