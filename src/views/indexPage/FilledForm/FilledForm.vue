<style lang="scss" scoped>
    @import "../../../utils/css/sharecss";

    .form-container {
        font-family: ziti;
        width: 90%;
        margin: auto;
    }

    .necessary {
        $height: 2rem;
        width: 90%;
        height: $height;
        margin: auto;
        line-height: $height;
        font: {
            size: 14px;
        }
    }

    .row-container {
        text-align: left;
        font: {
            size: 0;
        }
    }

    .stu-name {
        @include inline_block;
        height: 2rem;
        padding: 0.25rem 1rem 0.25rem 0.5rem;
        line-height: 2rem;
        color: white;
        @media screen and (max-width: 320px) {
            font-size: 15px;
        }
        @media screen and (min-width: 331px) and (max-width: 741px) {
            font-size: 17px;
        }
        @media screen and (min-width: 742px) and (max-width: 10024px) {
            font-size: 19px;
        }
    }

    .fill-input-container {
        @include inline_block;
        height: 2.5rem;
        padding: 0.25rem 0 0.25rem 0;
        color: white;
        @media screen and (max-width: 320px) {
            font-size: 15px;
        }
        @media screen and (min-width: 321px) and (max-width: 741px) {
            font-size: 17px;
        }
        @media screen and (min-width: 742px) and (max-width: 1024px) {
            font-size: 18px;
        }
    }

    .fill-input {
        border: 1px solid transparent;
        border-radius: 4px;
        vertical-align: top;
        outline: none;
        width: 100%;
        height: 100%;
        background:rgba(255,255,255,0);
        color: white;
    }

    .recruit-direction {
        color: white;
    }

    @media screen and (max-width: 320px) {
        .recruit-direction {
            @include inline_block;
            font-size: 15px;
            height: 100%;
            max-width: 72%;
            padding-top: 0.6rem;
        }
    }

    @media screen and (min-width: 321px) and (max-width: 741px) {
        .recruit-direction {
            @include inline_block;
            height: 100%;
            width: 70%;
            padding-top: 0.6rem;
            font-size: 17px;
        }
    }

    @media screen and (min-width: 742px) and (max-width: 1024px) {
        .recruit-direction {
            @include inline_block;
            height: 100%;
            width: 70%;
            padding-top: 0.6rem;
            font-size: 19px;
        }
    }

    .label-span {
        @media screen and (max-width: 320px) {
            font-size: 14px;
        }
        @media screen and (min-width: 321px) and (max-width: 741px) {
            font-size: 16px;
        }
        @media screen and (min-width: 742px) and (max-width: 1024px) {
            font-size: 18px;
        }
    }


    .submit-btn {
        height: 30px;
        width: 65px;
        line-height: 30px;
        background-color: #5B08C3;
        margin: 1rem auto 0 auto;
        color: white;
    }
</style>

<template>
    <div class="form-container">
        <div class="row-container">
            <div class="stu-name">姓名</div>
            <div class="fill-input-container" style="width: 50%">
                <input type="text" class="fill-input" v-model="basicInfo.name" @focus='borderHas' @blur='borderDis'>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">性别</div>
            <div class="fill-input-container">
                <RadioGroup v-model="basicInfo.sex" style="line-height: 1.7rem">
                    <Radio label="男">
                        <span class="label-span">男</span>
                    </Radio>
                    <Radio label="女">
                        <span class="label-span">女</span>
                    </Radio>
                </RadioGroup>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">是否挂科</div>
            <div class="fill-input-container">
                <RadioGroup v-model="basicInfo.fail" style="line-height: 1.7rem">
                    <Radio label="是">
                        <span class="label-span">是</span>
                    </Radio>
                    <Radio label="否">
                        <span class="label-span">否</span>
                    </Radio>
                </RadioGroup>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">学号</div>
            <div class="fill-input-container" style="width: 40%">
                <input type="text" class="fill-input" v-model="basicInfo.number" @focus='borderHas' @blur='borderDis'>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">绩点</div>
            <div class="fill-input-container" style="width: 40%">
                <input type="text" class="fill-input" v-model="basicInfo.allScore" placeholder="例:4.0" @focus='borderHas' @blur='borderDis'>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">年级</div>
            <div class="fill-input-container" style="width: 20%">
                <input type="text" class="fill-input" v-model="basicInfo.grade" placeholder="例:19" @focus='borderHas' @blur='borderDis'>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">专业班级</div>
            <div class="fill-input-container" style="width: 50%">
                <input type="text" class="fill-input" v-model="basicInfo.class" placeholder="例:软件工程1班" @focus='borderHas' @blur='borderDis'>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">班级职务</div>
            <div class="fill-input-container" style="width: 50%">
                <input type="text" class="fill-input" v-model="basicInfo.duty" placeholder="没有填无" @focus='borderHas' @blur='borderDis'>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">手机</div>
            <div class="fill-input-container" style="width: 60%">
                <input type="text" class="fill-input" v-model="basicInfo.phone" @focus='borderHas' @blur='borderDis'>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">QQ</div>
            <div class="fill-input-container" style="width: 60%">
                <input type="text" class="fill-input" v-model="basicInfo.qq" @focus='borderHas' @blur='borderDis'>
            </div>
        </div>

        <div class="row-container" style="height: auto;">
            <div class="stu-name" style="height: 6rem;">应征方向</div>
            <div class="recruit-direction">
                <RadioGroup v-model="description.direction" >
                    <Radio label="前端组">
                        <span class="label-span">前端组</span>
                    </Radio>
                    <Radio label="后台组">
                        <span class="label-span">后台组</span>
                    </Radio>
                    <Radio label="移动组">
                        <span class="label-span">移动组</span>
                    </Radio>
                    <Radio label="嵌入式组">
                        <span class="label-span">嵌入式组</span>
                    </Radio>
                    <Radio label="数据挖掘组">
                        <span class="label-span">数据挖掘组</span>
                    </Radio>
                    <Radio label="图形组">
                        <span class="label-span">图形组</span>
                    </Radio>
                    <Radio label="设计组">
                        <span class="label-span">设计组</span>
                    </Radio>
                </RadioGroup>
                <div style="font-size:14px;margin-top: 0.5rem;font-family:Source Han Sans CN;">
                    *设计组与其他六个方向的流程不同，笔试时除了黑色的签字笔请另外带上铅笔和橡皮擦。
                </div>
                <div style="font-size: 14px;font-family:Source Han Sans CN;">*7个方向只能填写一个。</div>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">参加其他学生科技团队,普通社团情况说明</div>
            <div class="fill-input-container" style="width: 96%; padding: 0.25rem 2% 0.25rem 2%;height: 9rem;">
                <textarea type="text" class="fill-input" style='background:rgba(255,255,255,0.1);border:1px solid rgba(188,188,188,1);' v-model="description.CommunityDes" @blur="backtoTop"></textarea>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name" style="height: auto">请说一下大学四年的个人规划以及为什么希望加入QG工作室。</div>
            <div class="fill-input-container" style="height: 10rem; width: 96%; padding: 0.25rem 2% 0.25rem 2%;">
                <textarea type="text" class="fill-input" style='background:rgba(255,255,255,0.1);border:1px solid rgba(188,188,188,1);' v-model="description.whyQG" @blur="backtoTop"></textarea>
            </div>
        </div>

        <div class="submit-btn" @click="FormatCheck">提交</div>

         <div style="height: 3rem"></div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import {notice} from "@/utils/FailMessage";
    import store from "@/store";
    import StuInfoModule from "@/store/modules/StuInfoModule";
    import {getModule} from "vuex-module-decorators";
    import {regular} from "@/utils/regular";
    import {stuInfoDeal} from "@/api/submitInfo" 

    const stuInfo = getModule(StuInfoModule, store);

    @Component({
        components: {},
    })

    export default class FilledForm extends Vue {
        basicInfo: any = {
            name: "",
            sex: "",
            fail: '',
            number: "",
            grade: "",
            class: "",
            allScore: "",
            phone: "",
            qq: "",
            duty: ''
        };
        description: any = {
            direction: "",
            CommunityDes: "",
            whyQG: "",
        };

        //存放临时session方便刷新不用重新填写
        @Watch('basicInfo', {deep: true})
        BasicInfoSession(data: any) {
            for (let i in this.basicInfo) {
                sessionStorage.setItem(i, this.basicInfo[i])
            }
        }

        @Watch('description', {deep: true})
        DesInfoSession(data: any, a: any) {
            for (let i in this.description) {
                sessionStorage.setItem(i, this.description[i])
            }
        }

        mounted(): void {
            this.initStudent()
        }

        //根据session初始化学生信息
        initStudent() {
            if (sessionStorage.length == 0) {
                return
            }
            for (let i in this.basicInfo) {
                if(sessionStorage.getItem(i) == null) {
                    continue
                }
                this.basicInfo[i] = sessionStorage.getItem(i)
            }
            for (let i in this.description) {
                if(sessionStorage.getItem(i) == null) {
                    continue
                }
                this.description[i] = sessionStorage.getItem(i)
            }
        }

        SubmitInformation() {
            let data = {
                stuId: this.basicInfo.number, //学号
                name: this.basicInfo.name, //姓名
                phone: this.basicInfo.phone, //手机
                sex: this.basicInfo.sex, //性别
                grade: this.basicInfo.grade, //年级
                department: this.basicInfo.class, //专业班级
                point: this.basicInfo.allScore, //绩点
                qq: this.basicInfo.qq, //qq
                group: this.description.direction, //组别
                fail: this.basicInfo.fail, //是否挂科
                plan: this.description.whyQG, //个人规划和为什么加入qg工作室
                explain: this.description.CommunityDes, //参加其他学生科技团队/社团的情况说明
            }
            
            stuInfoDeal.SubmitStuInfo(data).then((res: any) => {
                if(res.isSuccess) {
                    notice.Success(res.message)
                }
            })
        }

        //信息格式检查
        FormatCheck(): void {
            for(let index in this.description) {
                if (!regular.isNotNullTrim(this.description[index])) {
                    notice.ErrorNotice('请补充完信息');
                    return;
                }
            }

            for (let i in this.basicInfo) {
                if (!regular.isNotNullTrim(this.basicInfo[i])) {
                    notice.ErrorNotice('请补充完信息');
                    return;
                }
                if (!regular.phone(this.basicInfo.phone)) {
                    notice.ErrorNotice("请输入正确的手机");
                    return;
                }
            }
            this.SubmitInformation();
        }

        backtoTop() {
             setTimeout(() => {
                  const scrollHeight =
                        document.documentElement.scrollTop || document.body.scrollTop || 0;
                        window.scrollTo(0, Math.max(scrollHeight - 1, 0));
            }, 300);
        }

        borderHas(elment: any) {
            elment.target.style.borderBottom = "2px solid rgb(241,241,241,0.506)";
        }

        borderDis(e: any) {
            e.target.style.borderBottom = "1px solid transparent";
        }
    }
</script>
