import { Game } from './game.js';

function main() {
	const canvas = document.getElementById("game");
	const gl = canvas.getContext("webgl");

	if(gl === null) {
		alert("Unable to initialize WebGL. Your browser or computer may not support it.");
		return;
	}

	let game = new Game(canvas, gl);

	game.init();
	game.loop();
}

main();