import { createAuthentication } from '@patriarche/vue-auth';
import router from '@/plugins/router';

const authenticationPlugin = () => createAuthentication({
  router,
  domain: 'https://pux059-melkor-test.auth.eu-west-3.amazoncognito.com',
  clientId: '7nrcdkofd1qs9udklm4uppphpl',
  scope: 'email openid',
});

export default authenticationPlugin;
