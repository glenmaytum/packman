document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid');
	const scoreDisplay = document.getElementById('score');
	const width = 28; //28 * 28 = 784 squares
	let score = 0;

	//Layout of grid and what is in the squares

	const layout = [
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		3,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		3,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		1,
		1,
		1,
		2,
		2,
		1,
		1,
		1,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		1,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		4,
		4,
		4,
		4,
		4,
		4,
		0,
		0,
		0,
		4,
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		1,
		4,
		0,
		0,
		0,
		4,
		4,
		4,
		4,
		4,
		4,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		1,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		4,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		4,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		3,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		3,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1
	];
	// 0 - pac-dots
	// 1 - wall
	// 2 - ghost-lair
	// 3 - power-pellet
	// 4 - empty

	const squares = [];

	//draw the grid and render interface
	function createBoard() {
		for (let i = 0; i < layout.length; i++) {
			const square = document.createElement('div');
			grid.appendChild(square);
			squares.push(square);

			//Add layout to board
			if (layout[i] === 0) {
				squares[i].classList.add('pac-dot');
			} else if (layout[i] === 1) {
				squares[i].classList.add('wall');
			} else if (layout[i] === 2) {
				squares[i].classList.add('ghost-lair');
			} else if (layout[i] === 3) {
				squares[i].classList.add('power-pellet');
			}
		}
	}
	createBoard();

	//Starting position of Pac-man
	let pacmanCurrentIndex = 490;

	//Create ghost template using constructor parameters
	class Ghost {
		constructor(className, startIndex, speed) {
			this.className = className;
			this.startIndex = startIndex;
			this.speed = speed;
			this.currentIndex = startIndex;
			this.timerId = NaN;
			this.isScared = false;
		}
	}

	ghosts = [
		new Ghost('blinky', 348, 250),
		new Ghost('pinky', 376, 400),
		new Ghost('inky', 351, 300),
		new Ghost('clyde', 379, 500)
	];

	//Get coordinates for ghosts or blinky
	function getCoordinates(index) {
		return [ index % width, Math.floor(index / width) ];
	}

	squares[pacmanCurrentIndex].classList.add('pac-man');

	//move pac-man
	function movePacman(e) {
		squares[pacmanCurrentIndex].classList.remove('pac-man');

		switch (e.keyCode) {
			case 37:
				if (
					pacmanCurrentIndex % width !== 0 &&
					!squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
					!squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
				)
					pacmanCurrentIndex -= 1;
				//Check if pacman is in the left exit
				if (pacmanCurrentIndex - 1 === 363) {
					pacmanCurrentIndex = 391;
				}
				break;
			case 38:
				if (
					pacmanCurrentIndex - width >= 0 &&
					!squares[pacmanCurrentIndex - width].classList.contains('wall') &&
					!squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
				)
					pacmanCurrentIndex -= width;
				break;
			case 39:
				if (
					pacmanCurrentIndex % width < width - 1 &&
					!squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
					!squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
				)
					pacmanCurrentIndex += 1;
				if (pacmanCurrentIndex + 1 === 392) {
					//Check if pacman is in the right exit
					pacmanCurrentIndex = 364;
				}
				break;
			case 40:
				if (
					pacmanCurrentIndex + width < width * width &&
					!squares[pacmanCurrentIndex + width].classList.contains('wall') &&
					!squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
				)
					pacmanCurrentIndex += width;
				break;
		}
		squares[pacmanCurrentIndex].classList.add('pac-man');

		pacDotEaten();
		powerPelletEaten();
		checkForGameOver();
		checkForWin();
	}
	document.addEventListener('keyup', movePacman);

	//What happens when pacman eats a dot
	function pacDotEaten() {
		if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
			score++;
			scoreDisplay.innerHTML = score;
			squares[pacmanCurrentIndex].classList.remove('pac-dot');
		}
	}

	//What happens when you eat a power pellet
	function powerPelletEaten() {
		if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
			score += 10;
			ghosts.forEach((ghost) => (ghost.isScared = true));
			setTimeout(unScareGhosts, 10000);
			squares[pacmanCurrentIndex].classList.remove('power-pellet');
		}
	}

	//Make the ghosts stop appearing as aquamarine
	function unScareGhosts() {
		ghosts.forEach((ghost) => (ghost.isScared = false));
	}

	//Draw ghosts onto grid
	ghosts.forEach((ghost) => {
		squares[ghost.currentIndex].classList.add(ghost.className);
		squares[ghost.currentIndex].classList.add('ghost');
	});

	//Move all the ghosts randomly
	ghosts.forEach((ghost) => moveGhost(ghost));

	//Function to move the ghosts
	function moveGhost(ghost) {
		//Possible directions
		const directions = [ -1, +1, width, -width ];
		// Select random direction from above array
		let direction = directions[Math.floor(Math.random() * directions.length)];

		// Make each ghost do everything at the speed of its unique ghost speed
		ghost.timerId = setInterval(function() {
			//If the next square the ghost is going to go in does NOT contain a wall and a ghost,it can go there
			if (
				!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
				!squares[ghost.currentIndex + direction].classList.contains('wall')
			) {
				//Ghost can go here
				//Remove all ghost related classes
				squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');

				//Check if the new space is closer
				const [ ghostX, ghostY ] = getCoordinates(ghost.currentIndex);
				const [ pacmanX, pacmanY ] = getCoordinates(pacmanCurrentIndex);
				const [ ghostNewX, ghostNewY ] = getCoordinates(ghost.currentIndex + direction);

				function isXCoordCloser() {
					if (ghostNewX - pacmanX > ghostX - pacmanX) {
						return true;
					} else return false;
				}

				function isYCoordCloser() {
					if (ghostNewY - pacmanY > ghostY - pacmanY) {
						return true;
					} else return false;
				}

				//Check to see if this direction is closer to Pacman
				if (isXCoordCloser() || isYCoordCloser()) {
					//Change the currentIndex to the new safe squares
					ghost.currentIndex += direction;
					//Redraw ghost in the new safe position
					squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
				} else {
					//else find a new direction to try
					squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
					direction = directions[Math.floor(Math.random() * directions.length)];
				}
				squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
			} else direction = directions[Math.floor(Math.random() * directions.length)];

			//If ghost is currently scared
			if (ghost.isScared) {
				squares[ghost.currentIndex].classList.add('scared-ghost');
			}

			//If ghost is scared and pacman runs into its
			if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
				squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
				// Send eaten ghost back to its starting position
				ghost.currentIndex = ghost.startIndex;
				score += 100;
				// Redraw Eaten ghost
				squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
			}
			checkForGameOver();
		}, ghost.speed);
	}

	//Check for game over
	function checkForGameOver() {
		if (
			squares[pacmanCurrentIndex].classList.contains('ghost') &&
			!squares[pacmanCurrentIndex].classList.contains('scared-ghost')
		) {
			ghosts.forEach((ghost) => clearInterval(ghost.timerId));
			document.removeEventListener('keyup', movePacman);

			scoreDisplay.innerHTML = 'GAME OVER';
		}
	}

	//Check for a winner
	function checkForWin() {
		if (score === 274) {
			ghosts.forEach((ghost) => clearInterval(ghost.timerId));
			document.removeEventListener('keyup', movePacman);
			scoreDisplay.innerHTML = 'YOU WIN!';
		}
	}
});
