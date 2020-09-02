document.addEventListener('DOMContentLoaded', function(){
	//Create the grid
	var container = document.getElementById('grid');
	for(var i=0; i<200; i++){
		container.innerHTML += '<div></div>';
	}

	const grid = document.querySelector('#grid');
	var squaresArray = Array.from(document.querySelectorAll('#grid div'));
	var gameScore = document.querySelector('#score');
	var startButton = document.querySelector('#startGame');
	const offset = 10;

	//Game pieces
	const Lpiece = [
		[1, offset+1, offset*2+1, 2],
		[offset, offset+1, offset+2, offset*2+2],
		[1, offset+1, offset*2+1, offset*2],
		[offset, offset*2, offset*2+1, offset*2+2]
	];

	const Zpiece = [
		[offset+1, offset+2, offset*2, offset*2+1],
		[0, offset, offset+1, offset*2+1],
		[offset+1, offset+2, offset*2, offset*2+1],
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






});