function render() {
	return `
		<section>
			<h2>Feedback</h2>
			<form>
				<div>
					Username: <input type="text" name="user">
				</div>
				<div>
					Password: <input type="password" name="pwd">
				</div>
				<div>
					<input type="radio" name="sex" value="male">Male<br> <input type="radio" name="sex" value="female">Female
				</div>
				<div>
					<input type="checkbox" name="vehicle" value="Bike">I have a bike<br> <input type="checkbox" name="vehicle" value="Car">I have a car <br> 
				</div>
				<div>
					<input type="submit" value="Submit">
				</div>
			</form>
		</section>
	`;
}

document.getElementById('app').appendChild(document.createElement(render()));