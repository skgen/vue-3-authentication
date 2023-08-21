import { useSessionStore } from '@src/stores/sessionStore';
import { getRouter } from '@src/plugin';
import { AuthenticationRoute } from '@src/lib/enums';

export function signOut(redirectPath?: string | null) {
  const sessionStore = useSessionStore();
  sessionStore.$reset();
  const router = getRouter();
  if (!router) {
    return;
  }
  if (!redirectPath) {
    router.push(AuthenticationRoute.SIGN_IN);
  } else {
    router.push(redirectPath);
  }
}
