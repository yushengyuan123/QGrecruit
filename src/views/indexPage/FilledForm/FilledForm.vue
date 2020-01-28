<style scoped>
    .form-container {
        height: 20rem;
        width: 90%;
        margin: auto;
    }

    .row-container {
        height: 2.5rem;
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
            <div class="stu-name">宿舍</div>
            <div class="fill-input-container" style="width: 20%">
                <input type="text" class="fill-input" maxlength="10">
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })

    export default class FilledForm extends Vue {

    }
</script>
