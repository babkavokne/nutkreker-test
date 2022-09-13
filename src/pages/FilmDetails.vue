<template>
  <div :class="['container', 'film']">
    <header>
      <RouterLink to="/">Назад к списку</RouterLink>
    </header>
    <Loader v-if="isLoading" />
    <FilmCard v-else :info="film" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { getFilm } from "../requests";
import FilmCard from "../components/FilmCard.vue";
import Loader from "../components/Loader.vue";

const route = useRoute();

const film = ref({});
const isLoading = ref(true);

onMounted(async () => {
  film.value = await getFilm(route.params.id).then(res => res.data);
  console.log(film.value);
  isLoading.value = false;
});
</script>

<style lang="sass" scoped>
header
  margin: 40px 0
  padding-bottom: 20px
  border-bottom: 1px solid #C4C4C4

</style>