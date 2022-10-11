import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddView from '../views/AddView.vue';
import NotFound from '../views/NotFound.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/add',
      name: 'Add',
      component: AddView
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
})

export default router
