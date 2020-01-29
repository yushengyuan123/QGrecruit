/**
 * @description 处理请求返回值的数据，这里是请求成功的时候的返回值
 * @param res
 */
import {notice} from '@/utils/FailMessage';

function getResData(res: any): {
    isSuccess: boolean,
    message: string,
    data?: any
} {
    //在这里对错误的返回进行统一处理
    if(res.code == 1) {
        return {
            isSuccess: true,
            data: res.data ? res.data : null,
            message: res.message ? res.message : 'null'
        }
    } else {
        notice.ErrorNotice(res.message)
        return {
            isSuccess: false,
            message: res.message ? res.message : null
        }
    }
}

export function getResultResData(res: any):{
    isSuccess: boolean,
    message: string,
    data?: any
} {
    return getResData(res)
}
