export { default as useAuthRedirect } from '@src/composables/useAuthRedirect';
export { default as useAuth } from '@src/composables/useAuth';

export { isAuthenticatedRouteGuard } from '@src/lib/routeGuards';
export { getAuthentication } from '@src/lib/getAuthentication';
export { refreshAuthentication } from '@src/lib/refreshAuthentication';
export { signIn } from '@src/lib/signIn';

export * from '@src/lib/enums';

export { default as createAuthentication } from '@src/plugin';
export type { PluginOptions } from '@src/plugin';
