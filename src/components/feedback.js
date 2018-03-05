function render() {
  return `
		<section>
			<h2>Feedback</h2>
			<form>
				<div>
					<input id="emailAddress" type="email">
				</div>
				<div style='margin: 10px;'>
					<span>
						<input type="radio" name="sex" value="male">
						Male
					</span>
					<span>
						<input type="radio" name="sex" value="female">
						Female
					</span>
				</div>
				<div style='margin: 10px;'>
					<span>
						<input type="checkbox" name="vehicle" value="Bike">I have a bike
					</span>
					<span>
						<input type="checkbox" name="vehicle" value="Car">I have a car
					</span>
				</div>
				<div>
					<input type="submit" value="Submit">
				</div>
			</form>
		</section>
	`;
}

export default function feedback() {
  let feedbackDiv = document.createElement('div');
  feedbackDiv.innerHTML = render();
  return feedbackDiv;
}