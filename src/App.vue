<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang="ts">
    //@ts-ignore
    import $ from 'jquery';
    console.log('你好，同学！')
    console.log('这里是QG Studio from GDUT')
    console.log('前端组期待你的加入，祝你好运！')
    console.log('No Quests, No Gains!')

    import {Component, Vue} from "vue-property-decorator";
    @Component({
        components: {},
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @font-face {
        font-family: ziti;  //重命名字体名
        src: url('./assets/youshe.ttf');  //引入字体
        font-weight: normal;
        font-style: normal;
    }
    // @font-face {
    //       font-family: 'youshe';
    //       src: url('./assets/youshe.ttf');
    //       src:
    //         // url('./assets/youshe.eot?#font-spider') format('embedded-opentype'),
    //         // url('./assets/youshe.woff2') format('woff2'),
    //         // url('./assets/youshe.woff') format('woff'),
    //         url('./assets/youshe.ttf') format('truetype');
    //         // url('./assets/youshe.svg') format('svg');
    //       font-weight: normal;
    //       font-style: normal;
    // }

    #app {
        font-family: ziti;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        @media screen and (min-width: 742px) {
            background-image: url('./assets/ipadbg.png');//此为图片地址
        }
        @media screen and (max-width: 741px) {
            background-image: url('./assets/phonebg.png');//此为图片地址
        }

        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -webkit-background-size: 100% 100%;

    }

    body {
        margin: 0;
    }

</style>
