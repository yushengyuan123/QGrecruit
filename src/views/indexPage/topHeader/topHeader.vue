<style scoped>
    .header-container {
        height: 5rem;
    }

    .QG-image {
        height: 3rem;
        width: 40%;
        margin: auto;
        background-image: url("../../../assets/QGlogo.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 30%;
        padding-top: 1rem;
    }

    .title {
        height: 2rem;
        font-size: 1.2rem;
        font-weight: bold;
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
