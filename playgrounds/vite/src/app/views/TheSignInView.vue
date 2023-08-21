<template>
  <AppCenterLayout>
    <mk-button @click="() => hookSignIn(sourceUrl)">
      Sign in with hook
    </mk-button>
    <mk-button @click="() => signIn(sourceUrl)">
      Sign in without hook
    </mk-button>
  </AppCenterLayout>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useAuth, signIn } from '@patriarche/vue-auth';
import AppCenterLayout from '@/app/components/AppCenterLayout.vue';

const { signIn: hookSignIn } = useAuth();

const route = useRoute();
const sourceUrl = route.query.sourceUrl as string;
</script>
