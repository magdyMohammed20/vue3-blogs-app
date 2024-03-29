import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/posts/1',
    },
    {
      path: "/post/:id",
      name: "postDetail",
      component: () => import("../pages/PostDetail/PostDetail.vue")
    },
    {
      path: '/posts/:page', // Route for pagination with ":page" as the dynamic parameter
      name: 'posts',
      component: Home
    },
    {
      path: '/:pathMatch(.*)*', // Catch all paths that are not matched
      name: 'NotFound',
      component: () => import('../pages/404/NotFound.vue'), // Import the NotFound component
    },
  ]
})

export default router