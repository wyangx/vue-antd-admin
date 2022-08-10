import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Layout,
      children: [
        {
          path: '',
          name: 'DashboardIndex',
          component: () => import('@/views/doshboard/index.vue'),
        },
      ],
    },
  ],
})

export async function setupRouter(app: App) {
  app.use(router)
  // createRouterGuard(router)
  await router.isReady()
}
