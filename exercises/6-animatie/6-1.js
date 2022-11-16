"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = drawLines;

function drawLines(eventData) {
	context.fillRect(0, 0, width, height);
	context.fillStyle = "white";
	context.strokeStyle = "red";
	context.lineWidth = "8";
	let x = eventData.pageX;
	let y = eventData.pageY;
	Utils.drawLine(0, y, width, y);
	Utils.drawLine(x, height, x, 0);
}
