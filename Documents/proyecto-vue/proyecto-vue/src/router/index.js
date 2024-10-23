import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    */
    {
      path: '/contador',
      name: 'contador',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../modules/contador/components/Contador.vue')
    }
    ,
    {
      path: '/lista-de-tareas',
      name: 'ListaDeTareas',
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue')
    }
    ,
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../modules/registro/views/RegistrarView.vue')
    }
  ]
})

export default router
