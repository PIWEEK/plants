import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/benefits',
    name: 'Beneficios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "beneficios" */ '../views/Beneficios.vue')
  },
  {
  path: '/glossary',
  name: 'Glosario',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "glossary" */ '../views/Glossary.vue')
  },
  {
    path: '/plants',
    name: 'PlantList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "plantlist" */ '../views/PlantsList.vue')
  },
  {
    path: '/plants/:plantslug',
    name: 'Plants',
    props: true,
    component: () =>
        import ('../views/DetailView.vue')
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
