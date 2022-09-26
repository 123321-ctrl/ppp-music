import { requset } from "./request";

/**最新MV */
export function getNewMV(limit,area){
    return requset({
        url:'/mv/first',
        params:{
            limit:limit,
            area:area
        }
    })
}

/**推荐MV */
export function Personalized(){
    return requset({
        url:'/personalized/mv',
    })
}

/**推荐mv */
export  function getTopMv(limit=10,area,offset){
    return requset({
        url:'/top/mv',
        params:{
            limit:limit,
            area,
            offset
        }
    })
}

/**mv数据 */
export function getMvDetail(id){
    return requset({
        url:'/mv/detail',
        params:{
            mvid:id
        }
    })
}

/**mv地址 */
export function getMVUrl(id){
    return requset({
        url:'/mv/url',
        params:{
            id:id
        }
    })
}

/**mv评论 */
export function getMVComment(id,limit,offset=1){
    return requset({
        url:'/comment/mv',
        params:{
            id:id,
            limit:limit,
            offset:offset
        }
    })
}

/**相似MV */
export function getSimiMv(id){
    return requset({
        url:'/simi/mv',
        params:{
            mvid:id
        }
    })
}