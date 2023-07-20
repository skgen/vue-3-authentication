<template>
  <AppCenterLayout>
    <mk-button @click="() => signIn(sourceUrl)">
      Sign in
    </mk-button>
  </AppCenterLayout>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useAuth } from '@patriarche/vue-auth';
import AppCenterLayout from '@/app/components/AppCenterLayout.vue';

const { signIn } = useAuth();

const route = useRoute();
const sourceUrl = route.query.sourceUrl as string;
</script>
