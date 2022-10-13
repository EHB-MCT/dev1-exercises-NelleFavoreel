let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

drawRectBlack();
drawRectBlue();
drawReckRed();
draw();

function drawRectBlack() {
    context.beginPath();
    context.fillStyle = "black"
    context.rect(0,0,width * 1/3, height);
    context.rect(width * 2/3,0,width * 1/3, height);
    context.stroke();
    context.fill();
}
function drawRectBlue() {
    context.beginPath();
    context.fillStyle = "blue"
    context.rect(0,height * 2/3, width * 1/3, height * 1/3);
    context.rect(width * 2/3, height *2/3, width *1/3,height * 1/3);
    context.stroke();
    context.fill();
}

function drawReckRed() {
    context.beginPath();
    context.fillStyle = "red";
    context.rect(0, height * 1/6, width, height * 2/6);
    context.stroke();
    context.fill();
}
