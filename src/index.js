import renderWelcome from './welcome';
import feedback from './components/feedback';
import MovieColln from './components/movies';

function render() {
  return `
		<h2>Welcome to ES 6 JS based Single Page App</h2>
		${renderWelcome()}
		<div id='feedback' style='padding: 20px; background: #eeeeee;'>
		</div>
		<div id='movies'>
		</div>
	`;
}

document.getElementById('app').innerHTML = render();

document.getElementById('feedback').appendChild(feedback());

let movieColln = [
  { title: 'Movie-1', description: 'Movie-ONE' },
  { title: 'Movie-2', description: 'Movie-TWO' },
  { title: 'Movie-3', description: 'Movie-THREE' }
];
document.getElementById('movies').appendChild(new MovieColln(movieColln).render());