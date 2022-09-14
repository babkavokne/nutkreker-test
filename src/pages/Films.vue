<template>
  <div :class="['container', 'films']">
    <header>
      <h3>Фильмы</h3>
      <div class="selectors">
        <MyCheckbox v-for="(item, index) in sortType" :text="item.text" :id="item.value" :key="index"
          :modelValue="item.checked" @update:model-value="ad" />
      </div>
    </header>
    <Loader v-if="store.isLoading" />
    <main v-else>
      <FilmCard class="card" v-for="(film, index) in sortedFilms" :info="film" :key="film.id" />
    </main>
  </div>
</template>

<script setup>
import { onMounted, computed, ref, watch } from "vue";
import { useStore } from "../store/index";
import MyCheckbox from "../components/MyCheckbox.vue";
import FilmCard from "../components/FilmCard.vue";
import Loader from "../components/Loader.vue";

const sortType = ref([
  {
    text: "Отсортировать по названию",
    value: "title",
    checked: false
  },
  {
    text: "Отсортировать по году",
    value: "year",
    checked: false
  }
])

function ad(e) {
  sortType.value.forEach(el => el.checked = e.id === el.value ? e.checked : false)
  currentSortType.value = sortType.value.find(el => el.checked === true)?.value ?? "";
}

const currentSortType = ref("");

const store = useStore();

let sortedFilms = computed(() => {
  const sortFilms = store.getAllFilmsFromStore.slice()
  return sortFilms.sort((a, b) => {
    const aValue = a[currentSortType.value]
    const bValue = b[currentSortType.value]
    if (aValue < bValue) {
      return -1
    } else if (aValue > bValue) {
      return 1
    }
    return 0
  })
})

onMounted(() => {
  store.getAllFilmsFromDB()
});
</script>

<style lang="sass" scoped>
.films
  margin-top: 40px
  padding-bottom: 16px

  h3
    margin-bottom: 16px
  .selectors
    display: flex
    column-gap: 32px
    padding-bottom: 16px
    border-bottom: 1px solid #C4C4C4
  main
    margin-top: 40px
    display: flex
    flex-direction: column
    row-gap: 24px
    .card:hover
      transform: translateY(-8px)
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 8px 20px rgba(0, 0, 0, 0.35)

</style>