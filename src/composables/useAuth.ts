import { storeToRefs } from 'pinia';
import { useSessionStore } from '@src/stores/sessionStore';
import { AuthenticationRoute } from '@src/lib/enums';
import { useRouter } from 'vue-router';
import { signIn } from '@src/lib/signIn';
import { refreshAuthentication } from '@src/lib/refreshAuthentication';

export default () => {
  const sessionStore = useSessionStore();
  const router = useRouter();
  const store = storeToRefs(sessionStore);

  function signOut(redirectPath?: string | null) {
    sessionStore.$reset();
    if (!redirectPath) {
      router.push(AuthenticationRoute.SIGN_IN);
    } else {
      router.push(redirectPath);
    }
  }

  return {
    ...store,
    signIn,
    signOut,
    refreshAuthentication,
  };
};
