#include "game.h"

int main() {
	int ret = init();
	if(ret != 0) return ret;
	start();

	return 0;
}
