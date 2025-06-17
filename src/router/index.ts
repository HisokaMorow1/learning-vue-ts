import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UserList from '@/views/UserList.vue'
import Login from '@/views/UserLogin.vue'
import { useAuthStore } from '@/stores/auth'
import NewUser from '@/views/NewUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/users',
      name: 'list-users',
      component: UserList,
    },
    {
      path: '/users/new',
      name: 'new-user',
      component: NewUser,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
})

router.beforeEach((to, _from, next) => {
  const auth = useAuthStore()
  if (to.name !== 'login' && !auth.isAuthenticated) {
    next({ name: 'login' })
  }
  next()
})

export default router
