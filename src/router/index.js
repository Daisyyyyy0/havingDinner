import { createRouter, createWebHistory } from 'vue-router'
import { useMainStore } from '../stores/index.js'
import { routes } from './routes.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const main = useMainStore()

  // 判斷頁面是否須先登入。
  if (to.meta.isLogin && !localStorage.getItem('token')) {
    main.post('系統公告', '請先登入', '關閉', 'post', '/login')
    next({ name: 'index' })
    return false
  }

  // 登入後不進入登入頁面。
  if (to.name === 'login' && localStorage.getItem('token')) {
    next({ name: 'index' })
    return false
  }

  next()
})

export default router
