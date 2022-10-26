"use strict";
import context from './context.js';

export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

export function rgb(r,g,b) {
    let rgb="rgb(" + r+"," + g +"," +b+")";
    return rgb;
}
export function strokeCircle(x,y,radius) {
    context.beginPath();
    context.ellipse(x,y,radius,radius,0,0,Math.PI * 2);
    context.stroke();
}

export function fillAndStrokeCircle(x,y,radius) {
    context.beginPath();
    context.ellipse(x,y,radius,0,0,Math.PI *2);
    context.fill();
    context.stroke();
}

export function fillAndStrokeEllipse(x,y,rX,rY) {
    context.beginPath();
    context.ellipse(x,y,rX,rY,0,0,Math.PI *2);
    context.fill();
    context.stroke();
}

export function strokeBubbles(x1, y1,radius) {
    let red  = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random() * 255);
    let green  = Math.floor(Math.random()*255);
    let alpha = Math.random();
    let color = "rgba(" + red + "," + blue + ", " + green + ","+alpha+")"
    context.beginPath();
    context.ellipse(x1,y1,radius,radius, 0,0,180);
    context.fillStyle = color;
    context.fill();
}