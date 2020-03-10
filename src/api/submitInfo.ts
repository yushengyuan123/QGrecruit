import {Request} from "@/api/config";
import {getResultResData} from '@/utils/Request'

class StuInfoDeal extends Request {
    //将同学的填写的信息提交到后台
    async SubmitStuInfo(data: any) {
        return getResultResData(await this.post('/recruit', data))
    }

}

export const stuInfoDeal = new StuInfoDeal()
