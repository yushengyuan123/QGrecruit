import { Message } from 'view-design'
import Vue from 'Vue'
/**
 * @description 对code为-1的返回值进行统一处理
 * @param res
 */
class Notice {
    ErrorNotice(description: string) {
        // @ts-ignore
        Message.error(description)
    }

    Success(description: string) {
        // @ts-ignore
        Message.success(description)
    }
}

export const notice = new Notice()
