// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie['director']);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie['director'] == director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = array.filter(movie => movie['director'] == director).map(movie => movie['score']);
  let result = directorMovies.reduce((acc, score) => acc + score);
  return parseFloat(result / directorMovies.length);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let moviesOrder = array.map(movie => movie['title']).sort().slice(0, 20);
  return moviesOrder;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let moviesArr = array.map(movie => ({ title: movie['title'], year: movie['year'] })).sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });;

  let moviesOrderbyYear = moviesArr.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return 0;
  });
  
  return moviesOrderbyYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let moviesCategory = array.filter(movie => movie['genre'].includes(category) && movie['score']).map(movie => movie['score']);
  let result = moviesCategory.reduce((acc, score) => acc + score);
  return parseFloat(result / moviesCategory.length); 
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let duration = array.map(movie => ({ ...movie, duration: ((parseInt(movie['duration'].substring(0, movie['duration'].indexOf('h')))) * 60) + (movie['duration'].includes('min') ? (parseInt(movie['duration'].substring(movie['duration'].indexOf(' '), movie['duration'].indexOf('m')))) : 0) }));
  return duration;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filmPerYear = array.filter(movie => movie['year'] == year);
  let sortFilms = filmPerYear.sort((a, b) => {
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
    return 0;
  });
  let bestFilm = [sortFilms[0]];
  return bestFilm;
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
