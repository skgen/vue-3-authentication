/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PORT: number;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_DEFAULT_LANG: string;
  readonly VITE_APP_AUTH_DOMAIN: string;
  readonly VITE_APP_AUTH_CLIENT_ID: string;
  readonly VITE_APP_AUTH_SCOPE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
