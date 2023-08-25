import { createAuthentication } from '@patriarche/vue-auth';
import router from '@/plugins/router';

const authentication = createAuthentication({
  router,
  domain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  clientId: import.meta.env.VITE_APP_AUTH_CLIENT_ID,
  scope: import.meta.env.VITE_APP_AUTH_SCOPE,
});

export default authentication;
