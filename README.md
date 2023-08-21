# @patriarche/vue-auth

## Installation

```bash
yarn add @patriarche/vue-auth
```

The callback path for auth configuration is `/auth/callback`
>i.e.: _[http|https]://domain_`/auth/callback`

## Why ?

`@patriarche/vue-auth` has been created to handle authentication with Cognito through OpenIDConnect protocol & an authorization code grant

## Setup

```typescript
import { createApp } from 'vue';
import { createAuthentication } from '@patriarche/vue-auth';

const app = createApp(...);

const authenticationPlugin = () => createAuthentication({
    domain: 'https://your-domain',
    clientId: 'abcdefghijklmnopqrstuvwxyz',
    scope: 'email openid',
  });
  
app.use(authenticationPlugin());
```

## Routing

```typescript
import { AuthenticationRoute } from '@patriarche/vue-auth';

// ...

[
  {
    // /auth/sign-in
    path: AuthenticationRoute.SIGN_IN,
    // Your custom sign in view
    component: () => import('@/app/views/TheSignInView.vue'),
  },
  {
    // /auth/callback
    path: AuthenticationRoute.CALLBACK,
    // Your custom callback view (this is the view called on oAuth2 redirect)
    component: () => import('@/app/views/TheCallbackView.vue'),
  },
  {
    // /auth/sign-in/retry
    path: AuthenticationRoute.RETRY,
    // Your custom retry view
    component: () => import('@/app/views/TheSignInRetryView.vue'),
  },
  {
    // /auth/sign-in/error
    path: AuthenticationRoute.ERROR,
    // Your custom error view
    component: () => import('@/app/views/TheSignInErrorView.vue'),
  },
]
```

## Views

### AuthenticationRoute.SIGN_IN example

```html
<template>
    <!-- For sign in with a CTA -->
    <button @click="() => signIn(sourceUrl)">
      Sign in
    </button>
</template>
```

```typescript
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuth } from '@patriarche/vue-auth';

const { signIn } = useAuth();

const route = useRoute();
const sourceUrl = route.query.sourceUrl as string;

// For auto sign in

onMounted(() => {
  signIn(sourceUrl);
});
```

### AuthenticationRoute.CALLBACK example

```html
<template v-if="authenticated">
  Connected
</template>
<template v-else>
  Connexion in progress
</template>
```

```typescript
import { useAuth, useAuthRedirect } from '@patriarche/vue-auth';

const { authenticated } = useAuth();

useAuthRedirect();
```

### AuthenticationRoute.RETRY / AuthenticationRoute.ERROR

```html
<a :href="url">
  Retry
</a>
```

```typescript
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { AuthenticationRoute } from '@patriarche/vue-auth';

const route = useRoute();
const sourceUrl = route.query.sourceUrl as string;

const url = computed(() => {
  if (sourceUrl) {
    return `${AuthenticationRoute.SIGN_IN}/?sourceUrl=${sourceUrl}`;
  }
  return AuthenticationRoute.SIGN_IN;
});
```

## Guarding a route

```typescript
import { isAuthenticatedRouteGuard } from '@patriarche/vue-auth';

// ...

// Add this to your routes
{
  ...
  beforeEnter: [
    isAuthenticatedRouteGuard,
  ],
};
```

## Use functions outside of components

### getAuthentication

```typescript
function getAuthentication(): Authentication | null
```

```typescript
import { getAuthentication } from '@patriarche/vue-auth';
```

Returns the current `Authentication` object or `null`

> This can be usefull to get authentication to populate request headers

### refreshAuthentication

```typescript
function refreshAuthentication(): Promise<Authentication>
```

```typescript
import { refreshAuthentication } from '@patriarche/vue-auth';
```

Refreshs the authentication, and store it in the auth instance

Returns the new `Authentication` object

> This can be usefull when authentication expires to refresh it

### signIn

```typescript
function signIn(redirectPath?: string | null): Promise<void>
```

```typescript
import { signIn } from '@patriarche/vue-auth';
```

Same function as the one returned by `useAuth`, but can be used outside of a component

> This can be usefull if needed to be used outside of a component, if used in a component/hook : prefer using `signIn` returned from `useAuth`

### signOut

```typescript
function signOut(redirectPath?: string | null): Promise<void>
```

```typescript
import { signOut } from '@patriarche/vue-auth';
```

Same function as the one returned by `useAuth`, but can be used outside of a component

> This can be usefull if needed to be used outside of a component, if used in a component/hook : prefer using `signOut` returned from `useAuth`