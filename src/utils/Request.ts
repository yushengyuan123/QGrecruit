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
        notice.Success('提交成功')
        setTimeout(() => {
            window.location.href = 'http://recruit.qgailab.com/'
        }, 2000)
        return {
            isSuccess: true,
            data: res.data,
            message: res.msg
        }
    } else {
        notice.ErrorNotice(res.msg)
        return {
            isSuccess: false,
            message: res.msg
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
