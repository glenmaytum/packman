document.addEventListener('DOMContentLoaded', () => {
	const prince = document.querySelector('.character');
	let bottom = 0;
	let gravity = 0.9;
	let isJumping = false;
	let isGoingLeft = false;
	let isGoingRight = false;
	let left = 0;
	let rightTimerId;
	let leftTimerId;

	function jump() {
		prince.classList.remove('character-slide');
		prince.classList.add('character');
		if (isJumping) return;
		let timerId = setInterval(function() {
			if (bottom > 250) {
				clearInterval(timerId);
				let timerDownId = setInterval(function() {
					if (bottom < 0) {
						clearInterval(timerDownId);
						isJumping = false;
					}
					bottom -= 5;
					prince.style.bottom = `${bottom}px`;
				}, 20);
			}
			isJumping = true;
			bottom += 30;
			bottom = bottom * gravity;
			prince.style.bottom = `${bottom}px`;
		}, 20);
	}

	function slideLeft() {
		prince.classList.add('character-slide');
		prince.classList.remove('character');
		if (isGoingRight) {
			clearInterval(rightTimerId);
			isGoingRight = false;
		}
		isGoingLeft = true;
		leftTimerId = setInterval(function() {
			left -= 5;
			console.log('Going Left');
			prince.style.left = `${left}px`;
		}, 20);
	}

	function slideRight() {
		prince.classList.add('character-slide');
		prince.classList.remove('character');
		if (isGoingLeft) {
			clearInterval(leftTimerId);
			isGoingLeft = false;
		}
		isGoingRight = true;
		rightTimerId = setInterval(function() {
			left += 5;
			console.log('Going Right');
			prince.style.left = `${left}px`;
		}, 20);
	}

	//assign function to keycodes
	function control(e) {
		if (e.keyCode === 38) {
			jump();
		} else if (e.keyCode === 37) {
			slideLeft();
		} else if (e.keyCode === 39) {
			slideRight();
		}
	}
	document.addEventListener('keydown', control);
});
