import { authenticationSchema, type Authentication } from '@src/models/authentication';
import { getPluginOptions } from '@src/plugin';
import { useSessionStore } from '@src/stores/sessionStore';
import { AuthenticationStep } from '@src/lib/enums';

export async function fetchAuthentication(code: string): Promise<Authentication> {
  const sessionStore = useSessionStore();
  const { domain, clientId } = getPluginOptions();
  const redirect = new URL(window.location.pathname, window.location.origin);
  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('code', code);
  params.append('grant_type', 'authorization_code');
  params.append('redirect_uri', redirect.href);

  const res = await fetch(`${domain}/token`, {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const data = await res.json();

  const authentication = authenticationSchema.parse(data);

  sessionStore.authentication = authentication;
  sessionStore.authenticationStep = AuthenticationStep.AUTHENTICATED;

  return authentication;
}
