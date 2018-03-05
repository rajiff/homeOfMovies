import Movie from './movie';

export default class MovieColln {
  constructor(movieColln) {
    this.movieColln = movieColln;
  }

  render() {
    let movieRenderStr = '';
    this.movieColln.forEach((movie) => {
      movieRenderStr += Movie.render(movie);
    });

    let moviesDiv = document.createElement('div');
    moviesDiv.innerHTML = movieRenderStr;
    return moviesDiv;
  }
}