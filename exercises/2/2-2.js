"use strict"

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

drawrect(0,0,600,600);
drawrect(50,50,500,500);
drawrect(100,100,400,400);
drawrect(150,150,300,300);
drawrect(200,200,200,200);


function drawrect(x,y,width,height) {
    context.beginPath();
    let r = Math.floor(Math.random() * 225);
    let g = Math.floor(Math.random() * 225);
    let b = Math.floor(Math.random() * 225);
    let color = "rgb(" + r + "," + g + "," + b + ")"
    context.fillStyle = color;
    context.stroke();
    context.rect(x,y,width,height);
    context.fill();
    
}
