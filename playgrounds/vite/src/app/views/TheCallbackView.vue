<template>
  <AppCenterLayout>
    <template v-if="authenticated">
      Connected
    </template>
    <template v-else>
      Connexion in progress
    </template>
  </AppCenterLayout>
</template>

<script lang="ts" setup>
import { useAuth, useAuthRedirect } from '@patriarche/vue-auth';
import AppCenterLayout from '@/app/components/AppCenterLayout.vue';

const { authenticated } = useAuth();

useAuthRedirect();
</script>

  <style lang="scss">
.pux-TheCallbackView {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
  </style>
