class Shader {
	constructor(gl, vertexCode, fragmentCode) {
		this.gl = gl;
	
		this.vertexCode = vertexCode;
		this.fragmentCode = fragmentCode;
	}

	init_shaders() {
		const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
		const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

		const shaderProgram = gl.createProgram();
		gl.attachShader(shaderProgram, vertexShader);
		gl.attachShader(shaderProgram, fragmentShader);
		gl.linkProgram(shaderProgram);

		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			alert(`Unable to initialize the shader program: ${gl.getProgramInfoLog(shaderProgram)}`);
			return null;
		}

		this.shaderProgram = shaderProgram;
	}

	load_shader(type, source) {
		const shader = gl.createShader(type);
		this.gl.shaderSource(source, shader);
		this.gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			alert(`An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`);
			gl.deleteShader(shader);
			return null;
		}

		return shader;
	}
}

export { Shader };