<template>
 <div>
<p> <slot></slot></p>
</div>
  
</template>

<script>
export default {
  name: 'Hero',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
  display:flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  transition: 0.5s;
}


p {
  
  font-size:28px;
  width: 60%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
