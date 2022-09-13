<template>
  <div :class="['container', 'films']">
    <header>
      <h3>Фильмы</h3>
      <div class="selectors">
        <MyCheckbox text="Отсортировать по названию" id="checkbox1" />
        <MyCheckbox text="Отсортировать по году" id="checkbox2" />
      </div>
    </header>
    <Loader v-if="isLoading" />
    <main v-else>
      <FilmCard class="card" v-for="(film, index) in films" :info="films[index]" />
    </main>
  </div>
</template>

<script setup>
import MyCheckbox from "../components/MyCheckbox.vue";
import FilmCard from "../components/FilmCard.vue";
import { getAllFilms } from "../requests";
import { ref, onMounted } from "vue";
import Loader from "../components/Loader.vue";

const isLoading = ref(true);
const films = ref([]);

onMounted(async () => {
  films.value = await getAllFilms()
    .then((res) => res.data);
  isLoading.value = false;
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