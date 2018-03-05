import renderMovie from './movie';

export default function (movieColln) {
	let movieRenderStr = '';
	movieColln.forEach((movie) => {
		movieRenderStr += renderMovie(movie);
	});

	let moviesDiv = document.createElement('div');
  moviesDiv.innerHTML = movieRenderStr;
  return moviesDiv;
}