<template>
    <button><slot/></button>
</template>

<script>
export default {
    name: BaseButton,

}
</script>

<style scoped>
button {
    padding: 8px;
    border: 3px solid #2c3e50;
}
</style>