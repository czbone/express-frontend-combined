import { RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Index from '@/pages/Index.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Index
      },
      {
        path: 'about',
        component: About
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: NotFound
  }
]

export default routes
