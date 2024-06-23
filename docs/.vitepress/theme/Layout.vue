<script setup>
  import DefaultTheme from 'vitepress/theme'
  import Discussion from '../../components/Discussion.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <Discussion />
    </template>
  </DefaultTheme.Layout>
</template>