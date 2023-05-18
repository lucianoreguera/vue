import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BlogListView from '@/views/BlogListView.vue'
import BlogDetailView from '@/views/BlogDetailVue.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'blogList',
    component: BlogListView
  },
  {
    path: '/blog/:id',
    name: 'blogDetail',
    component: BlogDetailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
