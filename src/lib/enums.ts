export enum AuthenticationRoute {
  SIGN_IN = '/auth/sign-in',
  CALLBACK = '/auth/callback',
  ERROR = '/auth/sign-in/error',
  RETRY = '/auth/sign-in/retry',
}

export enum LocalStorageKeys {
  OAUTH_STATE = '@patriarche/vue-authentication:oAuthState',
  REDIRECT_URL = '@patriarche/vue-authentication:redirectUrl',
}

export enum AuthenticationStep {
  DISCONNECTED,
  CALLBACK_REDIRECT,
  AUTHENTICATED,
}
