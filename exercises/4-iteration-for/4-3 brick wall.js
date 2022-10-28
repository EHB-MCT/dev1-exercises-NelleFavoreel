"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

brick ();

function brick(){
    for (let i = 0; i < 6; i++) {
        let x = 50
        context.fillStyle = "red";
        context.strokeStyle = "white"
        context.lineWidth = 7
        context.beginPath ();
        context.rect(x + (i* 100),50,100 ,50);
        context.rect(x+ 50 + (i *100), 100, 100,50);
        context.rect(x + (i *100), 150, 100,50);
        context.rect(x+ 50 +(i *100), 200, 100,50);
        context.rect(x+ (i *100), 250, 100,50);
        context.fill();
        context.stroke();
    }
}

