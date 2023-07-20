<template>
  <div class="pux-AppCenterLayout">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.pux-AppCenterLayout {
    display: flex;
    flex-direction: column;
    gap: var(--app-m-2);
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
</style>
