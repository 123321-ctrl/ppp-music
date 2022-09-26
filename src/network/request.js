import axios from 'axios'

export function requset(config){
    const instance = axios.create({
        baseURL:'http://localhost:8081',
        timeOut: 2000
    })
    instance.interceptors.request.use(config =>{
        // console.log(config)
        return config
    },err => {
        return err
    })
    
    instance.interceptors.response.use(config => {
        return config
    },err=>{
        return err
    })
    return instance(config)
}