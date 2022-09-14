<template>
  <RouterLink class="backlink" to="/">
    <img src="../assets/icons/arrow_back.svg" alt="">
    <span>Назад к списку</span>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="sass" scoped>
.backlink
  display: inline-flex
  align-items: center
  column-gap: 8px
  span
    font-size: 20px
    color: rgba(255, 82, 82, .98)
    border-bottom: 1px solid rgba(255, 82, 82, .98)
</style>