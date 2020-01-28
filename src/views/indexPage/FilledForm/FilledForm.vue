<style scoped>
    .form-container {
        font-family: ziti;
        height: 20rem;
        width: 90%;
        margin: auto;
    }

    .row-container {
        text-align: left;
    }

    .stu-name {
        display: inline-block;
        height: 2rem;
        padding: 0.25rem 1rem 0.25rem 0.5rem;
        line-height: 2rem;
        vertical-align: top;
        font-size: 1rem;
    }

    .fill-input-container {
        display: inline-block;
        height: 2rem;
        padding: 0.25rem 0 0.25rem 0;
        line-height: 2rem;
        vertical-align: top;
        font-size: 1rem;
    }

    .fill-input {
        border:1px solid rgba(188,188,188,1);
        border-radius:4px;
        vertical-align: middle;
        width: 100%;
        height: 100%;
    }

    .recruit-direction {
        display: inline-block;
        height: 100%;
        vertical-align: top;
        font-size: 1rem;
        width: 73%;
        padding-top: 0.6rem;
    }

    .submit-btn {
        height: 24px;
        width: 60px;
        line-height: 24px;
        background-color: #5B08C3;
        margin: 1rem  auto 2rem auto;
        color: white;
    }
</style>

<template>
    <div class="form-container">
        <div class="row-container">
            <div class="stu-name">姓名</div>
            <div class="fill-input-container" style="width: 50%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">年龄</div>
            <div class="fill-input-container" style="width: 10%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">性别</div>
            <div class="fill-input-container">
                <RadioGroup v-model="sex">
                    <Radio label="男">
                        <span>男</span>
                    </Radio>
                    <Radio label="女">
                        <span>女</span>
                    </Radio>
                </RadioGroup>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">学号</div>
            <div class="fill-input-container" style="width: 30%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">年级</div>
            <div class="fill-input-container" style="width: 20%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">专业班级</div>
            <div class="fill-input-container">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">专业班级</div>
            <div class="fill-input-container">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">班级职务</div>
            <div class="fill-input-container">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">大一上绩点</div>
            <div class="fill-input-container" style="width: 10%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
            <div class="stu-name">上学期班级排名</div>
            <div class="fill-input-container" style="width: 10%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">C实验成绩</div>
            <div class="fill-input-container" style="width: 20%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">英语(1)成绩</div>
            <div class="fill-input-container" style="width: 20%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container" style="height: 5rem">
            <div class="stu-name">参加其他学生科技团队,普通社团情况说明</div>
            <div class="fill-input-container" style="width: 96%; padding: 0.25rem 2% 0.25rem 2%;">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">邮箱</div>
            <div class="fill-input-container" style="width: 60%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">手机</div>
            <div class="fill-input-container" style="width: 60%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">QQ</div>
            <div class="fill-input-container" style="width: 60%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">特长爱好</div>
            <div class="fill-input-container" style="width: 70%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">座右铭</div>
            <div class="fill-input-container" style="width: 70%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container" style="height: auto;">
            <div class="stu-name" style="height: 6rem; width: 27%;">应征方向</div>
            <div class="recruit-direction">
                <RadioGroup v-model="direction">
                    <Radio label="前端组"></Radio>
                    <Radio label="后台组"></Radio>
                    <Radio label="移动组"></Radio>
                    <Radio label="嵌入式组"></Radio>
                    <Radio label="数据挖掘组"></Radio>
                    <Radio label="图形组"></Radio>
                    <Radio label="设计组"></Radio>
                </RadioGroup>
                <div style="font-size: 12px;margin-top: 0.5rem">*设计组与其他六个方向的流程不同，笔试时除了黑色的签字笔请另外带上铅笔和橡皮擦</div>
                <div style="font-size: 12px">*7个方向只能填写一个</div>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name">是否愿意服从应征方向调剂</div>
            <div class="fill-input-container">
                <RadioGroup v-model="isObey">
                    <Radio label="是"></Radio>
                    <Radio label="否"></Radio>
                </RadioGroup>
            </div>
        </div>

        <div class="row-container" style="height: 5rem">
            <div class="stu-name">是否组队报名,填写同组同学的姓名(限制三人)</div>
            <div class="fill-input-container" style="width: 96%; padding: 0.25rem 2% 0.25rem 2%;">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name"  style="height: auto">奖励情况和实践经历(社会实践或计算机相关技术学习情况)。</div>
            <div class="fill-input-container" style="height: 8rem; width: 96%; padding: 0.25rem 2% 0.25rem 2%;">
                <textarea type="text" class="fill-input"></textarea>
            </div>
        </div>

        <div class="row-container">
            <div class="stu-name" style="height: auto">请说一下大学四年的个人规划以及为什么希望加入QG工作室。</div>
            <div class="fill-input-container" style="height: 8rem; width: 96%; padding: 0.25rem 2% 0.25rem 2%;">
                <textarea type="text" class="fill-input"></textarea>
            </div>
        </div>

        <div class="submit-btn">提交</div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })

    export default class FilledForm extends Vue {
        sex: string = ''
        direction: string = ''
        isObey: string = '是'
    }
</script>
