<template>
  <div id="app">
    
    <post-it class="name">my name is annie fitzgerald bartholomew</post-it>
    <post-it class="artist">i am an artist, designer and web developer</post-it>
    <post-it class="making"> <img src="./assets/Bartholomew014.jpg"> <p>barnacles</p></post-it>
    
    <Hero>welcome to my site! </Hero>
    <button @click="newPostIt">click me</button>

    
  </div>
</template>

<script>
import Hero from './components/Hero.vue'

import PostIt from './components/UI/PostIt.vue'

export default {
  name: 'App',
  components: {
    Hero,  PostIt
  }, 
  data(){
    return {
      bio: "annie fitzgerald bartholomew is a visual artist, environmentalist, designer and programmer/developer. working with art, craft and digital practices, her work is a blend of analog and tech, old and new. she has exhibited her work at collar works, the holland project, assembly room, the saratoga arts center and ghost gallery , among other places. annie has participated in residencies at the elizabeth murrary artist residency and vermont studio center and was a member of crit in the fall of 2018. she is currently working on programming projects at recurse center.in addition to her art practice, annie has designed for clients in tech, media and environmental fields. she is also currently a senior digital content fellow at our climate voices, a climate justice organization that amplifies first-person climate change narratives and uses ethical storytelling. her technical skills include digital design with adobe creative suite , figma + sketch, developing responsive websites + web applications, and is always learning new things. she currently lives and works in brooklyn."
    }
  }, methods: {
    newPostIt(){
      
    }
  }
 
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&display=swap');

#app {
  font-family: IBM Plex Mono;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background-color: #F2F2F2;
  width:100%;
  height:100%;
}
h1 {
  font-family: B612;
}
body {
  width:100%;
  height:100%;
  left:0;
margin:0;
}
.artist {
  position: absolute;
  right:0;
  top: 10%;
}
.name {
  left:20px;
  top: 40px;
}

.making {
  right:10px;
  bottom:100px;
}

.making img {
  max-height: 200px;

}
p {

}

</style>
