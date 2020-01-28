<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang="ts">
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
