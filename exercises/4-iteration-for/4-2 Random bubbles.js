"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
drawBubbles();

function drawBubbles() {
	for (let i = 0; i < 90; i++) {
		let x = 200 + Math.random() * (width - 400);
		let y = 200 + Math.random() * (height - 400);
		let radius = Math.random() * 50;
		Utils.strokeBubbles(x, y, radius);
	}
}
