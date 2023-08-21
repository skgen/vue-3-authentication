<template>
  <AppCenterLayout>
    <span>You're authenticated</span>
    <mk-button @click="refreshAuthentication">
      Refresh authentication
    </mk-button>
    <mk-button @click="hookSignOut">
      Sign out with hook
    </mk-button>
    <mk-button @click="signOut">
      Sign out without hook
    </mk-button>
  </AppCenterLayout>
</template>

<script lang="ts" setup>
import { useAuth, signOut } from '@patriarche/vue-auth';
import AppCenterLayout from '@/app/components/AppCenterLayout.vue';

const { signOut: hookSignOut, refreshAuthentication } = useAuth();
</script>
