#include <GLFW/glfw3.h>
#include <stdio.h>

#include "game.h"

GLFWwindow* window;

static void keyCallback(GLFWwindow* window, int key, int scancode, int action, int mods) {
	if(action == GLFW_PRESS) {
		if(key == GLFW_KEY_ESCAPE) {
			glfwSetWindowShouldClose(window, GLFW_TRUE);
		}
	}
}

int init() {
	if(!glfwInit()) return -1;

	window = glfwCreateWindow(1280, 720, "Computer Game", NULL, NULL);

	if(!window) {
		glfwTerminate();
		return -1;
	}

	glfwMakeContextCurrent(window);
	glfwSetKeyCallback(window, keyCallback);
}

void quit() {
	glfwTerminate();
}

void update() {
	glfwPollEvents();
}

void render() {
	glClear(GL_COLOR_BUFFER_BIT);
	glfwSwapBuffers(window);
}

void loop() {
	while(!glfwWindowShouldClose(window)) {
		update();
		render();
	}
}

void start() {
	/* Game init code */

	loop();
}
