<style lang="scss" scoped>
    @mixin height_width_margin($height, $width) {
        height: $height;
        width: $width;
        margin: auto;
    }
    .shadow-layer {
        height: 100%;
        width: 100%;
        z-index: 100;
        top: 0;
        left: 0;
        position: fixed;
        background: rgba(0,0,0,0.5); 
    }   

    .alert-coontainer {
        @include height_width_margin(120px, 80%);
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        position: fixed;
        top: 40%;
        left: 50%;
        margin-left: -40%;
        border-radius:8px;
        background:rgba(236,236,236,1);

        .title {
            $height: 71px;
            line-height: 82px;
            @include height_width_margin($height, 100%);
            text-align: center;
            color: #232123;
            font: {
                size: 18px;
            }

        }

        .btn-container {
            $height: 45px;
            @include height_width_margin($height, 100%);
            line-height: $height;
            font: {
                size: 0;
            };

            @mixin display {
                display: inline-block;
                width: 50%;
                height: 100%;
                text-align: center;
                font: {
                    size: 16px;
                };
            }


            .confirm {
                @include display()
            }
        }
    }

</style>

<template>
    <div class="shadow-layer">
        <div class="alert-coontainer">
            <div class="title">你确认要提交吗?</div>
            <div class="btn-container">
                <div class="confirm" @click="cancel" style="color:#848484">再检查检查</div>
                <div class="confirm" @click="confirm" style="color:#036FFD">确认!</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";


    @Component({
        components: {

        },
    })

    export default class alert extends Vue {
        confirm(): void {
            this.$emit('SubmitInformation', true)
        }

        cancel() {
            this.$emit('SubmitInformation', false)
        }
    }
</script>

