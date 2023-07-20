<template>
  <AppCenterLayout>
    <span>You're authenticated</span>
    <mk-button @click="refreshAuthentication">
      Refresh authentication
    </mk-button>
    <mk-button @click="signOut">
      Sign out
    </mk-button>
  </AppCenterLayout>
</template>

<script lang="ts" setup>
import { useAuth } from '@patriarche/vue-auth';
import AppCenterLayout from '@/app/components/AppCenterLayout.vue';

const { signOut, refreshAuthentication } = useAuth();
</script>
