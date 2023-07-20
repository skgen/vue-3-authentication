<template>
  <mkt-app>
    <div class="pux-TheApp">
      <div class="pux-TheApp-store">
        <mk-wysiwyg-preview>
          <pre>{{ JSON.stringify({
            authenticated,
            authenticationStep,
            authentication: authentication ? {
              ...authentication,
              idToken: `... ${authentication.idToken.slice(authentication.idToken.length - 20)}`,
              accessToken: `... ${authentication.accessToken.slice(authentication.accessToken.length - 20)}`,
              refreshToken: `... ${authentication.refreshToken.slice(authentication.refreshToken.length - 20)}`,
            } : null,
          }, null, 2) }}</pre>
        </mk-wysiwyg-preview>
      </div>
      <router-view />
    </div>
  </mkt-app>
</template>

<script lang="ts" setup>
import { useAuth } from '@patriarche/vue-auth';

const { authenticated, authenticationStep, authentication } = useAuth();

</script>

<style lang="scss">
.pux-TheApp {
    &-store {
        position: fixed;
        right: 0;
        bottom: 0;
        max-width: 400px;
        overflow: auto;
    }
}
</style>
