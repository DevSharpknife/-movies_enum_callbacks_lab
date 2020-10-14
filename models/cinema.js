const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.getTitles = function() { 
  return this.films.map((film) => {
    return film.title;
  });
};

Cinema.prototype.findByTitle = function(findTitle) {
  return this.films.find((film) => {
    return findTitle === film.title;
  });
};

Cinema.prototype.filterByGenre = function(genreToFind) {
  return this.films.filter((film) => {
    return genreToFind === film.genre;
  });
};

Cinema.prototype.filterByYear = function(yearToFind) {
  return this.films.filter((film) => {
    return yearToFind === film.year;
  });
};

module.exports = Cinema;
