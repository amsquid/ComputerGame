class Shader {
	constructor(gl, vertexCode, fragmentCode) {
		this.gl = gl;
	
		this.vertexCode = vertexCode;
		this.fragmentCode = fragmentCode;
	}

	loadShader(type, source) {
		const shader = this.gl.createShader(type);
		this.gl.shaderSource(shader, source);
		this.gl.compileShader(shader);

		if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
			alert(`An error occurred compiling the shaders: ${this.gl.getShaderInfoLog(shader)}`);
			this.gl.deleteShader(shader);
			return null;
		}

		return shader;
	}

	initShaders() {
		const vertexShader = this.loadShader(this.gl.VERTEX_SHADER, this.vertexCode);
		const fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, this.fragmentCode);

		const shaderProgram = this.gl.createProgram();
		this.gl.attachShader(shaderProgram, vertexShader);
		this.gl.attachShader(shaderProgram, fragmentShader);
		this.gl.linkProgram(shaderProgram);
		
		if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
			alert(`Unable to initialize the shader program: ${this.gl.getProgramInfoLog(shaderProgram)}`);
			return null;
		}

		this.programInfo = {
			program: shaderProgram,
			attribs: {
				vertexPos: this.gl.getAttribLocation(shaderProgram, "vertexPos")
			},
			uniforms: {
				modelViewMatrix: this.gl.getUniformLocation(shaderProgram, "modelViewMatrix"),
				projectionMatrix: this.gl.getUniformLocation(shaderProgram, "projectionMatrix"),
			}
		};
	}
}

export { Shader };