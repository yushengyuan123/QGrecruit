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
        @media screen and (max-width: 741px){
            height: 2.5rem;
        }
        @media screen and (min-width: 742px){
            height: 4rem;
        }
        height: 2.5rem;
        width: 80%;
        margin: auto;
    }
</style>

<template>
    <div class="header-container">
        <div class="QG-image"></div>
        <img src="../../../assets/form_title.png" alt="title" class="title">
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
