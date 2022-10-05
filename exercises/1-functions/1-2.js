"use strict";
box();
function box() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 5
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,200);
    context.moveTo(200,50);
    context.lineTo(50,200);
    context.stroke();

    context.lineWidth = 5
    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50,200);
    context.lineTo(200,200);
    context.lineTo(200,50);
    context.lineTo(50,50);
    context.stroke();

}