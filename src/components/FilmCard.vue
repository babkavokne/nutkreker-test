<template>
  <div class="card">
    <div class="poster">
      <img :src="props.info.poster" alt="Poster">
    </div>
    <div class="info">
      <RouterLink :to="`/film/${props.info.id}`">
        <h2>{{props.info.title}}</h2>
      </RouterLink>
      <div>{{props.info.year}}, {{props.info.genres?.join(", ")}}</div>
      <div v-if="props.info.directors" class="director">режиссёр: {{props.info.directors.join(", ")}}</div>
      <div v-if="props.info.actors" class="actors">актёры: <span>{{props.info.actors.join(", ")}}</span></div>
      <p v-if="props.info.description" class="description"><span>{{props.info.description}}</span></p>
      <div v-if="props.info.collapse?.duration" class="duration">
        {{duration}}
        <img src="../assets/icons/frame.svg" alt="Film frame">
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  info: {
    type: Object,
    required: true
  }
});

const duration = computed(() => {
  const str = props.info.collapse.duration[0];
  const filteredStr = str.split("").filter((el) => el !== ".").join("");
  const finalStr = filteredStr.endsWith("н") ? filteredStr : filteredStr + ":00";
  return finalStr
});
</script>

<style lang="sass" scoped>
.card
  display: flex
  background-color: #4D4747
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25)
  transition: all .2s
  overflow: hidden
  .poster
    background-color: #C4C4C4
    min-width: 168px
    display: flex
    justify-content: center
    align-items: center
    img
      width: 112px
      height: 168px
.info
  padding: 32px 32px 32px 24px
  width: 100%
  text-transform: uppercase
  a
    display: inline-block
  h2
    margin-bottom: 12px
    text-transform: initial
  div
    color: #988F8F
    font-weight: bold
    font-size: 12px
    line-height: 12px
  .director
    margin-top: 8px
  .actors
    margin-top: 8px
    display: flex
    column-gap: 3px
    span
      top: -3px
      font-size: 12px
      line-height: 16px
      text-transform: initial
      color: #FFF
  .duration
    position: absolute
    right: 0
    top: 32px
    z-index: 1
    display: flex
    align-items: center
    column-gap: 12px
    padding: 6px 28px 6px 12px
    background-color: #C4C4C4
    color: #000
    font-weight: 700
    text-transform: uppercase
    &::before
      position: absolute
      content: ""
      top: 0
      left: -7px
      z-index: -1
      width: 110%
      height: 100%
      background-color: #C4C4C4
      transform: skew(-7deg)
  .description
    margin-top: 14px
    text-transform: initial
</style>