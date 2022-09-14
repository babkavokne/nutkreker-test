import { createRouter, createWebHistory } from 'vue-router'
import Films from '../pages/Films.vue'
import FilmDetails from '../pages/FilmDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: Films
    },
    {
      path: '/film/:id', component: FilmDetails
    },
    {
      path: '/:catchAll(.*)', component: Films
    }
  ]
})

export default router
