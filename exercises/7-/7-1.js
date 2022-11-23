"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

setup();

function setup() {
	let numbers = [];

	for (let i = 0; i < 1000; i++) {
		let x = Utils.randomNumber(0, 100);
		numbers[i] = x;
	}
	console.log(calculateAverage(numbers));
}

function calculateAverage(listOfNumbers) {
	let som = 0;

	for (let i = 0; i < listOfNumbers.length; i++) {
		som += listOfNumbers[i];
	}

	return som / listOfNumbers.length;
}
