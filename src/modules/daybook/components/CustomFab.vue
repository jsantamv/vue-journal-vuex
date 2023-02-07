<template>
    <button class="btn btn-primary" @click="$emit('on:click')">
        <i class="fa fa-2x" :class="icon"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-save'
        }
    }
}

</script>

<style lang="scss" scoped>
button {
    border-radius: 100%;
    bottom: 20px;
    height: 50px;
    position: fixed;
    right: 20px;
    width: 50px;

    &:hover {
        background: green
    }

    &:active {
        box-shadow: 0px 0px 2px #c9c9c9 inset;
        border: 2px solid red;
    }
}
</style>