<template>
  <div class="container film">
    <header>
      <BackLink />
    </header>
    <span v-if="store.err" class="notfound">{{store.err}}</span>
    <main v-else>
      <Loader v-if="store.isLoading" />
      <FilmCard v-else :info="film" />
    </main>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../store/index";
import { getFilm } from "../requests";
import FilmCard from "../components/FilmCard.vue";
import Loader from "../components/Loader.vue";
import BackLink from "../components/BackLink.vue";

const route = useRoute();

const store = useStore();

const film = ref({});

onBeforeMount(async () => {
  store.setLoading(true)
  const filmId = route.params.id;
  const movie = store.getFilmById(filmId);

  if (movie) {

    film.value = movie;
    store.setLoading(false);

  } else {

    const res = await getFilm(filmId);

    if (res) {
      film.value = res;

    } else {

      store.setError('К сожалению, по вашему запросу ничего не найдено...');
      console.log(store.err);

    }

    store.setLoading(false);
  }
});
</script>

<style lang="sass" scoped>
header
  margin: 40px 0
  padding-bottom: 20px
  border-bottom: 1px solid #C4C4C4
.notfound
  font-size: 32px
  line-height: 32px
  margin-top: 48px
</style>