<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">No hay nada seleccionado</h1>
    </div>

    <CustomFab icon="fa-plus" @on:click="createNewEntry" />
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        CustomFab: defineAsyncComponent(() => import('../components/CustomFab.vue'))
    },
    methods: {
        createNewEntry() {
            this.$router.push({ name: 'entry', params: { id: 'new' } })
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>