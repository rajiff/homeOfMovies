import renderWelcome from './welcome';
import feedback from './components/feedback';

function render() {
	return `
		<h2>Welcome to ES 6 JS based Single Page App</h2>
		${renderWelcome()}
		<div id='feedback' style='padding: 20px; background: #eeeeee;'>
		</div>
	`;
}

document.getElementById('app').innerHTML = render();
document.getElementById('feedback').appendChild(feedback());