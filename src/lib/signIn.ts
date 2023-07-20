import { AuthenticationRoute, LocalStorageKeys } from '@src/lib/enums';
import { getPluginOptions } from '@src/plugin';
import { nanoid } from 'nanoid';

export async function signIn(redirectPath?: string | null) {
  const { domain, clientId, scope } = getPluginOptions();
  const url = new URL('/authorize', domain);
  url.searchParams.append('client_id', clientId);
  url.searchParams.append('response_type', 'code');
  url.searchParams.append('redirect_uri', new URL(
    AuthenticationRoute.CALLBACK,
    document.location.origin,
  ).href);

  const oAuthState = nanoid();
  localStorage.setItem(LocalStorageKeys.OAUTH_STATE, oAuthState);

  url.searchParams.append('state', oAuthState);
  url.searchParams.append('scope', scope);
  if (redirectPath) {
    const redirectUrl = new URL(redirectPath, window.location.origin);
    if (redirectUrl.pathname !== AuthenticationRoute.CALLBACK) {
      localStorage.setItem(LocalStorageKeys.REDIRECT_URL, redirectUrl.pathname);
    }
  }
  window.location.href = url.href;
}
