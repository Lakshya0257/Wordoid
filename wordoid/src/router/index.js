import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../view/Profile.vue'
import Homepage from '../view/Homepage.vue'
import BlogDetail from '../view/BlogDetail.vue'
import NewBlog from '../view/NewBlog.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: BlogDetail,
      props: true
    },
    {
      path: '/new',
      name: 'new',
      component: NewBlog
    },
  ]
})

export default router
