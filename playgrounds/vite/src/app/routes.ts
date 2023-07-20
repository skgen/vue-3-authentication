import { isAuthenticatedRouteGuard } from '@patriarche/vue-auth';
import ThePlaygroundView from '@/app/views/ThePlaygroundView.vue';

export default [
  {
    path: '/',
    name: 'playground',
    component: ThePlaygroundView,
    beforeEnter: [
      isAuthenticatedRouteGuard,
    ],
  },
];
