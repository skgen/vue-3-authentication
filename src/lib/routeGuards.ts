import type { NavigationGuardWithThis } from 'vue-router';
import { useSessionStore } from '@src/stores/sessionStore';
import { AuthenticationRoute } from '@src/lib/enums';

export const isAuthenticatedRouteGuard: NavigationGuardWithThis<undefined> = (to, from, next) => {
  const sessionStore = useSessionStore();
  if (!sessionStore.authenticated) {
    next(`${AuthenticationRoute.SIGN_IN}?sourceUrl=${to.fullPath}`);
  } else {
    next();
  }
};
