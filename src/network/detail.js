import { requset } from "./request";
import {dateFtt} from '../utils/tools'

//获取歌单详情
export function getMusicListDetail(id){
    return requset({
        url:'/playlist/detail',
        params:{
            id:id
        }
    })
}

/**获取歌单歌曲信息 */
export function getSongsDetail(arr){
    return requset({
        url:'/song/detail',
        params:{
            ids:arr
        }
    })
}
/**对歌曲数据进行封装 */
export class songDetail{
    constructor(songs){
        this.id=songs[0].id ;
        this.name=songs[0].name;
        this.album=songs[0].al.name;
        this.artist=songs[0].ar[0].name;
        this.pic=songs[0].al.picUrl;
        this.time=dateFtt(new Date(songs[0].dt),'mm:ss')
    }
}
// 对最新音乐歌曲的封装
export class songDetail2{
    constructor(songs){
        this.id=songs.id ;
        this.name=songs.name;
        this.album=songs.album.name;
        this.artist=songs.artists[0].name;
        this.pic=songs.album.picUrl;
        this.time=dateFtt(new Date(songs.duration),'mm:ss')
    }
}

/**获取歌曲url */
export function getMusicUrl(id){
    return requset({
        url:'/song/url',
        params:{
            id:id
        }
    })
}
/**对歌曲进行封装 */
export class Song{
    constructor(songUrl,songData){
        this.url=songUrl;
        this.id = songData.id;
        this.name=songData.name;
        this.album=songData.album || songData.song.album.name;
        this.artist=songData.artist || songData.song.artists[0].name;//wu
        this.pic=songData.pic || songData.picUrl;
        this.time=songData.time || dateFtt(new Date(songData.song.duration),'mm:ss'); //wu
    }
}

/**歌单评论信息 */
export function getRecommends(id,limit,offset){
    return requset({
        url:'/comment/playlist',
        params:{
            id:id,
            limit:limit,
            offset
        }
    })
}

/**歌曲评论 */
export function musicRecommend(id,limit,offset){
    return requset({
        url:'/comment/music',
        params:{
            id:id,
            limit:limit,
            offset
        }
    })
}

/**获取歌单收藏者 */
export function getSub(id,limit){
    return requset({
        url:'/playlist/subscribers',
        params:{
            id:id,
            limit
        }
    })
}

/**获取歌词 */
export function getLyric(id){
    return requset ({
        url:'/lyric',
        params:{
            id:id
        }
    })
}