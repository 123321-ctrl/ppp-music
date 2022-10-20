import { requset } from "./request";

/**详细热搜列表 */
export function hotSearchDetail(){
    return requset({
        url:'/search/hot/detail'
    })
}

/**搜索 */
export function Search(keyword,type){
    return requset({
        url:'/search',
        params:{
            keywords:keyword,
            type
        }
    })
}