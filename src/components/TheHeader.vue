<template>
   <post-it> annie bartholomew</post-it>
</template>

<style scoped>

header {
    padding: 8px 20px;
}
a {
    text-decoration: none;
    border:none;
    color: black;
    transition: 0.5s;
}

a:hover {
    color: blue;
    
}
h1 {
    font-size:28px;
    text-align:start;
    transition: 0.8s;

}
h1:hover {
    transform: rotate(1deg);
    transform: translate(10px, 10px);
}
</style>

<script>
import PostIt from './UI/PostIt.vue';
export default {
    name: 'TheHeader',
    components: {PostIt},
}
</script>