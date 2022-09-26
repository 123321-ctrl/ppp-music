import { requset } from "./request";

//歌单分类
export function getCatList(){
    return requset({
        url:'/playlist/catlist'
    })
}

//热门歌单分类
export function getMusicListHot(){
    return requset({
        url:'/playlist/hot'
    })
}

//
export function getPlayList(cat){
    return requset({
        url:'/top/playlist',
        params:{
            cat:cat
        }
    })
}