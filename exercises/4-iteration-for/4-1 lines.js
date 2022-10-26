"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontaLines = 60;
let verticaLines = 30;

let width = 600;
let height = 300;

drawLines();
drawMoreLines();
draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "orange";
    context.fillRect(0,0,600,300);
    drawLines();
    drawMoreLines();
}

function drawLines() {
    let step = width / horizontaLines
    for (let i = 0; i < horizontaLines; i++) {
        Utils.drawLine(0 +(10 * i),0,width - (step * i),height);
    }
}

function drawMoreLines() {
    let step = height / verticaLines
    for (let i = 0; i < verticaLines; i++) {
        Utils.drawLine(0 ,0+(10 *i),width, height- (step * i))

    }
}