"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let balloons = [];

setup();
update();

function setup() {
	for (let i = 0; i < 40; i++) {
		let ballon = {
			x: Math.random() * width,
			y: height,
			sizeX: 30,
			sizeY: 50,
			speed: Math.random() * 2,
			color: Utils.hsl(Math.random() * 60, 140, 50),
		};
		balloons[i] = ballon;
	}
	console.log(balloons);
}

function update() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	for (let i = 0; i < balloons.length; i++) {
		let ballon = balloons[i];
		ballon.y -= ballon.speed;
		drawBallon(ballon);
	}
	requestAnimationFrame(update);
}

function drawBallon(ballon) {
	Utils.drawLine(ballon.x, ballon.y, ballon.x, ballon.y + 80);
	context.fillStyle = ballon.color;
	Utils.fillEllipse(ballon.x, ballon.y, ballon.sizeX, ballon.sizeY);
}
