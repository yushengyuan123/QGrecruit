<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang="ts">
    console.log('你好，同学！')
    console.log('这里是QG Studio from GDUT')
    console.log('前端组期待你的加入，祝你好运！')
    console.log('No Quests, No Gains!')
    console.log('Proudly created by Syan.Y')

    import {Component, Vue} from "vue-property-decorator";
    @Component({
        components: {},
    })
    export default class App extends Vue {
        mounted(): void {
            this.backToTop()
        }

        backToTop() {
            setTimeout(() => {
                const scrollHeight =
                    document.documentElement.scrollTop || document.body.scrollTop || 0;
                window.scrollTo(0, Math.max(scrollHeight - 1, 0));
            }, 100);
        }
    }
</script>

<style lang="scss">
    @font-face {
        font-family: ziti;  //重命名字体名
        src: url('./assets/youshe.ttf');  //引入字体
        font-weight: normal;
        font-style: normal;
    }

    #app {
        font-family: ziti;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    body {
        margin: 0;
    }

</style>
