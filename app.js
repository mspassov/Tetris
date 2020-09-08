document.addEventListener('DOMContentLoaded', function(){

	const grid = document.querySelector('.grid');
	var squares = Array.from(document.querySelectorAll('.grid div'));
	var gameScore = document.querySelector('#score');
	var startButton = document.querySelector('#startBtn');
	const offset = 10;
	var nextRandom = 0;
	
	//Game pieces
	const Lpiece = [
		[1, offset+1, offset*2+1, 2],	//this represents each configuration of the piece
		[offset, offset+1, offset+2, offset*2+2],
		[1, offset+1, offset*2+1, offset*2],
		[offset, offset*2, offset*2+1, offset*2+2]
	];

	const Zpiece = [
		[1, 2, offset, offset+1],
		[0, offset, offset+1, offset*2+1],
		[1, 2, offset, offset+1],
		[0, offset, offset+1, offset*2+1]
	]

	const Tpiece = [
		[1, offset, offset+1, offset+2],
		[offset, offset+1, offset+2, offset*2+1],
		[offset, 1, offset+1, offset*2+1],
		[1, offset+1, offset*2+1, offset+2]
	]

	const Opiece = [
		[0, 1, offset, offset+1],
		[0, 1, offset, offset+1],
		[0, 1, offset, offset+1],
		[0, 1, offset, offset+1]
	]

	const iPiece = [
		[1, offset+1, offset*2+1, offset*3+1],
		[offset, offset+1, offset+2, offset+3],
		[1, offset+1, offset*2+1, offset*3+1],
		[offset, offset+1, offset+2, offset+3]
	]

	var gamePieces = [Lpiece, Zpiece, Tpiece, Opiece, iPiece];

	var startPos = 3;
	var randomNum = Math.floor(Math.random()*gamePieces.length);
	var currentRotation = 0;
	var currentPiece = gamePieces[randomNum][currentRotation];	//grab a random piece

	//create function to draw the game piece
	function displayPiece(){
		currentPiece.forEach(i => squares[startPos + i].classList.add('activePiece'));
	}

	//create function to delete the game piece, so that it can move down
	function deletePiece(){
		currentPiece.forEach(i => squares[startPos + i].classList.remove('activePiece'));
	}

	displayPiece();

	//assigning keycodes to Tetris
	function movement(e){
		if(e.keyCode === 37){
			moveLeft();
		}
		else if (e.keyCode === 38) {
			rotate();
		}
		else if (e.keyCode === 39) {
			moveRight();
		}
		else if(e.keyCode === 40){
			moveDown();
		}

	}
	document.addEventListener('keyup', movement);


	function moveDown(){
		deletePiece();
		startPos += offset;
		displayPiece();
		freeze();
	}

	function freeze(){
		if(currentPiece.some(index => squares[startPos + index + offset].classList.contains('taken'))){
			currentPiece.forEach(index => squares[startPos + index].classList.add('taken'))

			//grab new piece
			randomNum = nextRandom;
			nextRandom = Math.floor(Math.random()*gamePieces.length);
			currentRotation = 0;
			currentPiece = gamePieces[randomNum][currentRotation];
			startPos = 3;
			displayPiece();
			displayNext();
		}
	}

	function moveLeft(){
		deletePiece();
		var leftEdgeCheck = currentPiece.some(index => (startPos + index) % offset === 0);

		if(!leftEdgeCheck){
			startPos -= 1;
		}

		if(currentPiece.some(index => squares[startPos + index].classList.contains('taken'))){
			startPos += 1;
		}

		displayPiece();
	}
	
	function moveRight(){
		deletePiece();
		var checkRightEdge = currentPiece.some(index => (startPos + index) % offset === (offset - 1));

		if(!checkRightEdge){
			startPos += 1;
		}

		if(currentPiece.some(index => squares[startPos + index].classList.contains('taken'))){
			startPos -= 1;
		}

		displayPiece();
	}

	function rotate(){
		deletePiece();
		currentRotation += 1;
		if(currentRotation === currentPiece.length){
			currentRotation = 0;
		}

		currentPiece = gamePieces[randomNum][currentRotation];
		displayPiece();
	}
	
	//timerID = setInterval(moveDown, 100);

	var nextSquares = document.querySelectorAll('.mini-grid div');
	var nextOffset = 4;
	var displayIndex = 0;

	const nextPieces = [
    [1, nextOffset+1, nextOffset*2+1, 2], //L
    [0, nextOffset, nextOffset+1, nextOffset*2+1], //Z
    [1, nextOffset, nextOffset+1, nextOffset+2], //T
    [0, 1, nextOffset, nextOffset+1], //O
    [1, nextOffset+1, nextOffset*2+1, nextOffset*3+1] //I

  	]

	function displayNext(){
		nextSquares.forEach(sq => sq.classList.remove('activePiece'));
		nextPieces[nextRandom].forEach(index => nextSquares[displayIndex + index].classList.add('activePiece'));

	}

});