import { requset } from "./request";

//获取轮播图数据
export function getBanner() {
    return requset({
        url: '/banner'
    })
}

//推荐歌单
export function getPersonalized(config) {
    return requset({
        url: '/personalized',
        params: {
            limit: config
        }
    })
}

//独家放送
export function getPrivateContent() {
    return requset({
        url: '/personalized/privatecontent'
    })
}

//最新音乐
export function getNewSongs() {
    return requset({
        url: '/personalized/newsong'
    })

}

/**获取排行榜数据 */
export function getRankList() {
    return requset({
        url: '/toplist',
    })
}

/**歌手 */
export function getArtist(area, type, name = -1,limit,offset=1) {
    return requset({
        url: '/artist/list',
        params: {
            area: area,
            type: type,
            limit: limit,
            initial:name,
            offset:offset
        }
    })
}

/**最新歌曲 */
export function getTopSongs(type) {
    return requset({
        url: '/top/song',
        params: {
            type: type
        }
    })
}