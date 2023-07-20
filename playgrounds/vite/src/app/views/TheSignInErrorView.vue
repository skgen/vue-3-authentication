<template>
  <AppCenterLayout>
    <mk-wysiwyg-preview>
      <p>
        An error has occured
      </p>
    </mk-wysiwyg-preview>
    <mk-link :to="url">
      Retry
    </mk-link>
  </AppCenterLayout>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { AuthenticationRoute } from '@patriarche/vue-auth';
import AppCenterLayout from '@/app/components/AppCenterLayout.vue';

const route = useRoute();
const sourceUrl = route.query.sourceUrl as string;

const url = computed(() => {
  if (sourceUrl) {
    return `${AuthenticationRoute.SIGN_IN}/?sourceUrl=${sourceUrl}`;
  }
  return AuthenticationRoute.SIGN_IN;
});
</script>
