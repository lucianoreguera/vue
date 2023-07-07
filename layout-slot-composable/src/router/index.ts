import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrdersView from '../views/OrdersView.vue'
import ProductsView from '../views/ProductsView.vue'
import CustomersView from '../views/CustomersView.vue'
import ReportsView from '../views/ReportsView.vue'
import IntegrationsView from '../views/IntegrationsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/customers',
    name: 'customers',
    component: CustomersView
  },
  {
    path: '/reports',
    name: 'reports',
    component: ReportsView
  },
  {
    path: '/integrations',
    name: 'integrations',
    component: IntegrationsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
