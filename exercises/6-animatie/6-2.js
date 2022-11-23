"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;
let lastTime = 0;
update();

function update() {
	frameCount++;
	if (frameCount > width) {
		frameCount = 0;
	}
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	context.fillStyle = "black";
	Utils.fillCircle(frameCount, 300, 25);
	requestAnimationFrame(update);
}

function move(eventData) {
	let x = eventData.pageX;
	let y = eventData.pageY;
}
