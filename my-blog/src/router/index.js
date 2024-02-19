import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '/github',
        name: "GithubView",
        component: () => import('../views/GithubView.vue')
      },
      {
        path: '/blog',
        name: "BlogView",
        component: () => import('../views/BlogView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
