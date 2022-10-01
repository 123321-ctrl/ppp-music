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

/**获取歌单--网友精选碟，全部歌单 */
export function getPlayList(cat,limit,offset){
    return requset({
        url:'/top/playlist',
        params:{
            cat:cat,
            limit:limit,
            offset
        }
    })
}