"use strict"

rectangles();
function rectangles() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.strokeStyle = "red"
    context.lineWidth = 3
    context.rect(50,50,150,150);
    context.rect(200,200,150,150);
    context.stroke();

    //black box
    context.beginPath();
    context.strokeStyle = "red"
    context.fillRect(125,125,150,150);
    context.lineWidth = 3
    context.rect(125,125,150,150);
    context.stroke();
    
    //mini red boxes
    context.beginPath();
    context.strokeStyle = "red"
    context.lineWidth = 3
    context.rect(275,75,50,50);
    context.rect(75,275,50,50);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "red"
    context.lineWidth = 3
    context.fillRect(50,325,25,25);
    context.fillRect(325,50,25,25);
    context.rect(50,325,25,25);
    context.rect(325,50,25,25);
    context.stroke();


}