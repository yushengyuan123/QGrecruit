// @ts-ignore
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import {getResultResData} from "@/utils/Request";
import {stuInfoDeal} from "@/api/submitInfo";
@Module({name: 'StuInfoModule', namespaced: true, stateFactory: true})
export default class StuInfoModule extends VuexModule {
    @Action
    public async SubMitStuInfo(data: any ) {
        //失败的时候向直接输出错误信息
        if(data.code === -1) {

        }
        return getResultResData(await  stuInfoDeal.SubmitStuInfo(data));
    }
}
