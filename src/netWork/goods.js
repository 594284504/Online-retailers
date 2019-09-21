import {request} from './request'

//商品数据请求方法

export function getHomeGoods(page){
    return request({
        url:'https://api.apiopen.top/getImages',
        params:{
            
            page:page
        }
    })
}