const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/RegistrationComponent.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/LoginComponent.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>import('../components/DashBoard.vue')
  },
  {
    path: '/question',
    name: 'question',
    component: () => import('../components/QuestionComponent.vue')
    }
]

export default routes
