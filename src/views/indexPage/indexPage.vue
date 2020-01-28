<style scoped>
    .index-container {
        height: 100vh;
    }

</style>

<template>
    <div class="index-container">
        <topHeader></topHeader>
        <FilledForm></FilledForm>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import topHeader from "@/views/indexPage/topHeader/topHeader.vue";
    import FilledForm from "@/views/indexPage/FilledForm/FilledForm.vue"

    @Component({
        components: {
            topHeader,
            FilledForm,
        },
    })

    export default class indexPage extends Vue {

    }
</script>

