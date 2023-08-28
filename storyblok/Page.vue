<template>
  
  <div v-editable="blok" class="px-4">
    <h1>{{ blok.headline }}</h1>
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
