class Game {
	constructor(canvas, gl) {
		this.canvas = canvas;
		this.gl = gl;
	}

	init() {

	}

	loop() {
		setInterval(() => {
			this.update();
			this.render();
		}, 10);
	}

	update() {

	}

	render() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;

		this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT);
	}
}

export { Game };