import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import LandingView from '../views/LandingView.vue'
import DashboardView from '../views/dashboard/DashboardView.vue'
import VictimaComponent from '../views/VictimaView.vue'
import VictimarioComponent from '../views/VictimarioView.vue'
import IncidenteComponent from '@/components/IncidenteComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LandingView
    },
    {
      path: '/victima',
      name: 'victima',
      component: VictimaComponent
    },
    {
      path: '/victimario',
      name: 'victimario',
      component: VictimarioComponent
    },
    {
      path: '/incidente',
      name: 'incidente',
      component: IncidenteComponent
    },
    {
      path: '/login',
      name: 'home',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      children: [
        {
          path: 'incidentes',
          name: 'incidentes',
          component: () => import('../components/dashboard/IncidenciasComponent.vue')
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
