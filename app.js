document.addEventListener('DOMContentLoaded', function(){
	//Create the grid
	var container = document.getElementById('grid');
	for(var i=0; i<190; i++){
		container.innerHTML += '<div></div>';
	}

	for(var i=0; i<10; i++){
		container.innerHTML += '<div class="taken"></div>';
	}

	const grid = document.querySelector('#grid');
	var squaresArray = Array.from(document.querySelectorAll('#grid div'));
	var gameScore = document.querySelector('#score');
	var startButton = document.querySelector('#startGame');
	const offset = 10;

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

	//create function to draw the different game pieces
	function displayPiece(){
		currentPiece.forEach(function(i){
			squaresArray[startPos + i].classList.add('activePiece');
		});

	}

	//create function to delete the game piece, so that it can move down
	function deletePiece(){
		currentPiece.forEach(function(i){
			squaresArray[startPos + i].classList.remove('activePiece');
		});
	}
	displayPiece();

	function moveDownPiece(){
		deletePiece();
		startPos = startPos + offset;
		displayPiece();
		freezePiece();
	}

	function freezePiece(){
		if(currentPiece.some(index => squaresArray[startPos + index].classList.contains('taken'))){
			currentPiece.forEach(index => squaresArray[startPos + index].classList.add('taken'))

			var randomNum = Math.floor(Math.random()*gamePieces.length);
			var currentPiece = gamePieces[randomNum][currentRotation];
			startPos = 3;
			displayPiece();
		}

	}

	timerID = setInterval(moveDownPiece, 100);








});