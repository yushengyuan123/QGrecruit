<style lang="scss" scoped>
    .header-container {
        padding-top: 1rem;
    }

    .QG-image {
        width: 40%;
        margin: auto;
        background-image: url("../../../assets/QGlogo.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 30%;
        padding-top: 1rem;
        overflow: visible;
        @media screen and (max-width: 320px){
            height: 2rem;
        }
        @media screen and (min-width: 321px) and (max-width: 741px){
            height: 3rem;
        }
        @media screen and (min-width: 742px) and (max-width: 1024px){
            height: 7rem;
        }
    }

    .title {
        $height: 600px;
        font-weight: bold;
        @media screen and (max-width: 320px){
            font-size: 16px;
            line-height: 2rem;
        }
        @media screen and (min-width: 321px) and (max-width: 741px){
            font-size: 19.2px;
            line-height: 2rem;
        }
        @media screen and (min-width: 742px) and (max-width: 1024px){
            font-size: 30px;
            line-height: 3rem;
        }
    }
</style>

<template>
    <div class="header-container">
        <div class="QG-image"></div>
        <div class="title">QG工作室2020年训练营招募报名表</div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
        components: {

        },
    })

    export default class topHeader extends Vue {

    }
</script>
