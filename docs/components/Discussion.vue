<script setup>
  import Giscus from '@giscus/vue';
  import { useData } from 'vitepress'
  const { isDark,title } = useData()
  
</script>

<template>
  <div class="comments-container">
    
    <Giscus
      :key="title"
      src="https://giscus.app/client.js"
      id="R_kgDOMM7bZg"
      repo="fullstackpeng/fullstackpeng.github.io"
      repoId="R_kgDOMM7bZg"
      category="Announcements"
      categoryId="DIC_kwDOMM7bZs4CgTDH"
      mapping="pathname"
      term="Welcome to @giscus/vue component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      :theme="isDark ? 'dark' : 'light'"
      strict="1"
      lang="zh-CN"
    />
  </div>
</template>

<style>
#comments::part(iframe) {
  margin: auto;
  display: flex;
}

.comments-container {
  max-height: 700px;
  overflow-y: scroll;
  margin-top: 50px;
}
</style>