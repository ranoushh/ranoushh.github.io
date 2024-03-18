"use strict";

var canvas = undefined;
var canvasContext = undefined;

var fruits = [
  { name: "Apples", quantity: 20, color: "red" },
  { name: "Oranges", quantity: 10, color: "orange" },
  { name: "Bananas", quantity: 15, color: "yellow" },
  { name: "Kiwis", quantity: 5, color: "green" },
  { name: "Blueberries", quantity: 5, color: "blue" },
  { name: "Grapes", quantity: 10, color: "purple" },
];

function start() {
  canvas = document.getElementById("mycanvas");
  canvasContext = canvas.getContext("2d");
  mainLoop();
}

document.addEventListener("DOMContentLoaded", start);

function draw() {
  //Draw the colored rectangles + their associated text

  //OPTIMIZED VERSION: using a for loop
  let yFillText = 50;
  let yFillRect = 30;

  for (let i = 0; i < fruits.length; i++) {
    let widthRect = fruits[i].quantity;

    canvasContext.fillStyle = fruits[i].color;
    canvasContext.font = "20px Garamond";

    canvasContext.fillRect(150, yFillRect, widthRect * 5, 30); //multiplied the quantity (widthRect) by 5 just for visual purposes
    canvasContext.fillText(
      fruits[i].name + " - " + fruits[i].quantity,
      20,
      yFillText
    );

    yFillRect += 50;
    yFillText += 50;
  }

  //ORIGINAL CODE:

  // canvasContext.fillStyle = fruits[0].color;
  // canvasContext.fillRect(150, 30, 20, 30);
  // canvasContext.font = "20px Garamond";
  // canvasContext.fillText(fruits[0].name + "s - " + fruits[0].quantity, 20, 50);

  // canvasContext.fillStyle = fruits[1].color;
  // canvasContext.fillRect(150, 80, 10, 30);
  // canvasContext.fillText(fruits[1].name + "s - " + fruits[1].quantity, 20, 100);

  // canvasContext.fillStyle = fruits[2].color;
  // canvasContext.fillRect(150, 130, 15, 30);
  // canvasContext.fillText(fruits[2].name + "s- " + fruits[2].quantity, 20, 150);

  // canvasContext.fillStyle = fruits[3].color;
  // canvasContext.fillRect(150, 180, 30, 30);
  // canvasContext.fillText(fruits[3].name + "s- " + fruits[3].quantity, 20, 200);

  // canvasContext.fillStyle = fruits[4].color;
  // canvasContext.fillRect(150, 230, 30, 30);
  // canvasContext.fillText(fruits[4].name + " - " + fruits[4].quantity, 20, 250);

  // canvasContext.fillStyle = fruits[5].color;
  // canvasContext.fillRect(150, 280, 30, 30);
  // canvasContext.fillText(fruits[5].name + " - " + fruits[5].quantity, 20, 300);
}

function mainLoop() {
  canvasContext.fillStyle = "#D3D3D3";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  draw();
  window.setTimeout(mainLoop, 1000 / 60);
  // ^ call the function mainLoop every (1,000/60 = 16.6 milliseconds in this case)
}
