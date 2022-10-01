import { requset } from "./request";

export function getArtistDesc(id){
    return requset({
        url:'/artist/desc',
        params:{
            id:id
        }
    })
}

/**获取歌手热门五十首歌曲 */
export function getArtistHot50(id){
    return requset({
        url:'/artist/top/song',
        params:{
            id:id
        }
    })
}

/**mv */
export function getArtistMv(id){
    return requset({
        url:'/artist/mv',
        params:{
            id:id
        }
    })
}

/**获取歌手描述 */
export function getArtistDescDetail(id){
    return requset({
        url:'/artist/desc',
        params:{
            id:id
        }
    })
}