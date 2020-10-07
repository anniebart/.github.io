import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AboutPage from './components/Pages/AboutPage.vue'
import ProjectsPage from './components/Pages/ProjectsPage.vue'



Vue.use(VueRouter);

const routes =  [
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/projects',
    component: ProjectsPage
  },

]

const router = new VueRouter({routes})



const app = new Vue({
  el: '#app', 
  router, 
  render: h => h(App)
});


app.mount('#app');