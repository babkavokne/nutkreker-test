import axios from 'axios';

export async function getAllFilms() {
  try {
    const films = await axios.get("https://floating-sierra-20135.herokuapp.com/api/movies");
    return films.data;
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function getFilm(id) {
  try {
    const film = await axios.get(`https://floating-sierra-20135.herokuapp.com/api/movie/${id}`);
    return film.data;
  } catch (e) {
    throw new Error(e.message);
  }
}