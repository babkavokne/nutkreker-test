import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { getAllFilms } from '../requests'

export const useStore = defineStore('store', () => {
  const isLoading = ref(true);
  const films = ref([]);
  const err = ref('');

  const getAllFilmsFromStore = computed(function () {
    return films.value;
  });

  const getFilmById = computed(() => id => films.value.find((el) => el.id == id));

  function setLoading(payload) {
    isLoading.value = payload;
  }

  function setError(payload) {
    err.value = payload;
  }

  async function getAllFilmsFromDB() {
    setLoading(true);
    await getAllFilms().then(res => {
      films.value = res.data;
      setLoading(false);
      err.value = '';
    });
  }

  return { isLoading, err, getAllFilmsFromStore, getFilmById, setLoading, setError, getAllFilmsFromDB }
})
