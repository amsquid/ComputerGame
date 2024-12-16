import { Shader } from "./shader.js";

const vertexCode = `
attribute vec4 vertexPos;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
   gl_Position = projectionMatrix * modelViewMatrix * vertexPos;
}
`;

const fragmentCode = `
void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`

class Game {
	constructor(canvas, gl) {
		this.canvas = canvas;
		this.gl = gl;
	}

	init() {
		this.shader = new Shader(this.gl, vertexCode, fragmentCode);
		this.shader.initShaders();
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