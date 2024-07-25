import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/dashboard/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children: [
        {
          path: 'denuncias',
          name: 'denuncias',
          component: () => import('../components/dashboard/DenunciasComponent.vue')
        },
        {
          path: 'victimas',
          name: 'victimas',
          component: () => import('../components/dashboard/VictimasComponent.vue')
        },
        {
          path: 'victimarios',
          name: 'victimarios',
          component: () => import('../components/dashboard/VictimariosComponent.vue')
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
