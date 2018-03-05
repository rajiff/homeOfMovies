import renderWelcome from './welcome';

function render() {
	return `
		<h2>Welcome to ES 6 JS based Single Page App</h2>
		${renderWelcome()}
	`;
}

document.getElementById('app').innerHTML = render();