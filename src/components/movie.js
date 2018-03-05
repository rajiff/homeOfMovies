export default class Movie {
  constructor() {}

  static render(movie) {
    return `
		<section style='display: inline-grid; padding: 5px; margin: 10px; background: #eeeeee;'>
			<h2>${movie.title}</h2>
			<p>
				${movie.description}
			</p>
		</section>
	`;
  }
}