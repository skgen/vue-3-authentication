import { createRouter, createWebHistory } from 'vue-router';
import { AuthenticationRoute } from '@patriarche/vue-auth';
import appRoutes from '@/app/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...appRoutes,
    {
      path: AuthenticationRoute.SIGN_IN,
      component: () => import('@/app/views/TheSignInView.vue'),
    },
    {
      path: AuthenticationRoute.CALLBACK,
      component: () => import('@/app/views/TheCallbackView.vue'),
    },
    {
      path: AuthenticationRoute.RETRY,
      component: () => import('@/app/views/TheSignInRetryView.vue'),
    },
    {
      path: AuthenticationRoute.ERROR,
      component: () => import('@/app/views/TheSignInErrorView.vue'),
    },
  ],
});

export default router;
