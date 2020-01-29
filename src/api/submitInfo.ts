import {Request} from "@/api/config";

class StuInfoDeal extends Request {
    //将同学的填写的信息提交到后台
    SubmitStuInfo(data: any): any {
        return this.post('/login', data)
    }
}

export const stuInfoDeal = new StuInfoDeal()
