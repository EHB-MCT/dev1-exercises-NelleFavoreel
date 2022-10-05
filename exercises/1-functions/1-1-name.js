"use strict";


drawLine();
function drawLine() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 5
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(50,400);
    context.lineTo(50,200);
    context.lineTo(200,400);
    context.lineTo(200,200);
    context.stroke();

    context.lineWidth = 10
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(450,400);
    context.lineTo(300,400);
    context.lineTo(300,200);
    context.lineTo(450,200);
    context.moveTo(300,300);
    context.lineTo(450,300);
    context.stroke();

    context.lineWidth = 15
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(500,200);
    context.lineTo(500,400);
    context.lineTo(650, 400);
    context.stroke();

    context.lineWidth = 10
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(700,200);
    context.lineTo(700,400);
    context.lineTo(850,400);
    context.stroke();

    context.lineWidth = 5
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(1050,400);
    context.lineTo(900,400);
    context.lineTo(900,200);
    context.lineTo(1050,200);
    context.moveTo(1050,300);
    context.lineTo(900,300);
    context.stroke();

   }
