import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatusListView from '../views/StatusListView.vue'
import StatusDetailView from '../views/StatusDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/status',
      name: 'status-list',
      component: StatusListView,
    },
    {
      // Route dynamique avec paramètre :id
      path: '/status/:id',
      name: 'status-detail',
      component: StatusDetailView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
