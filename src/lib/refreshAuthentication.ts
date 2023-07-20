import { authenticationSchema, type Authentication } from '@src/models/authentication';
import { getPluginOptions } from '@src/plugin';
import { useSessionStore } from '@src/stores/sessionStore';
import { AuthenticationStep } from '@src/lib/enums';

export async function refreshAuthentication(): Promise<Authentication> {
  const sessionStore = useSessionStore();
  const refreshToken = sessionStore.authentication?.refreshToken;
  if (!refreshToken) {
    throw new Error('refreshAuthentication was called with no active/expired session');
  }
  const { domain, clientId } = getPluginOptions();
  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', refreshToken);

  const res = await fetch(`${domain}/token`, {
    method: 'POST',
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const data = await res.json();

  const authentication = authenticationSchema.parse({
    ...data,
    refresh_token: refreshToken,
  });

  sessionStore.authentication = authentication;
  sessionStore.authenticationStep = AuthenticationStep.AUTHENTICATED;

  return authentication;
}
