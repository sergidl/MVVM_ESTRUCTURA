import Movie from "../models/movie";
import Search from "../models/search";

const MOVIES = [
  new Movie(
    1,
    "The Shawshank Redemption",
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  ),
  new Movie(
    2,
    "The Godfather",
    "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
  ),
  new Movie(
    3,
    "The Dark Knight",
    "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  ),
  new Movie(
    4,
    "The Godfather: Part II",
    "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
  ),
  new Movie(
    5,
    "The Lord of the Rings: The Return of the King",
    "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
  ),
];

export const searchMovies = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredMovies = MOVIES.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
      if (filteredMovies>0) {
        const searchResults = new Search(filteredMovies);
        resolve(searchResults.results);
      }
      else {
        reject("Pel·licula no trobada");
      }
    }, 1000 + Math.random() * 2000);
  });
};

export const getMovieDetails = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = MOVIES.find(movie => movie.id === id);
      if (movie) {
        resolve(movie);
      } else {
        reject("Pel·licula no trobada");
      }
    }, 1000 + Math.random() * 2000);
  });
};