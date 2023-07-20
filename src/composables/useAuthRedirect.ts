import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useSessionStore } from '@src/stores/sessionStore';
import { getPluginOptions } from '@src/plugin';
import { fetchAuthentication } from '@src/lib/fetchAuthentication';
import { logger } from '@src/lib/logger';
import { AuthenticationRoute, AuthenticationStep, LocalStorageKeys } from '@src/lib/enums';

export default () => {
  const { onAfterAuthenticated } = getPluginOptions();
  const router = useRouter();
  const sessionStore = useSessionStore();

  onMounted(async () => {
    const redirect = localStorage.getItem(LocalStorageKeys.REDIRECT_URL);
    localStorage.removeItem(LocalStorageKeys.REDIRECT_URL);

    if (sessionStore.authenticated) {
      router.replace(redirect ?? '/');
      return;
    }
    const urlSearchParams = new URLSearchParams(window.location.search);
    const queryCode = urlSearchParams.get('code');
    const queryState = urlSearchParams.get('state');
    const oAuthState = localStorage.getItem(LocalStorageKeys.OAUTH_STATE);
    localStorage.removeItem(LocalStorageKeys.OAUTH_STATE);

    if (!queryCode || queryState !== oAuthState) {
      sessionStore.$reset();
      router.replace({
        path: AuthenticationRoute.RETRY,
        query: {
          sourceUrl: redirect,
        },
      });
      return;
    }

    sessionStore.authenticationStep = AuthenticationStep.CALLBACK_REDIRECT;

    try {
      const authentication = await fetchAuthentication(queryCode);

      if (onAfterAuthenticated) {
        await onAfterAuthenticated(authentication);
      }

      if (redirect) {
        router.push(redirect);
      } else {
        router.push('/');
      }
    } catch (e) {
      logger.error(e);
      sessionStore.$reset();
      router.replace({
        path: AuthenticationRoute.ERROR,
        query: {
          sourceUrl: redirect,
        },
      });
    }
  });
};
