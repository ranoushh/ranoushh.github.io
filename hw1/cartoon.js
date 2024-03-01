"use strict";

var canvas = undefined;
var canvasContext = undefined;

function start() {
  canvas = document.getElementById("mycanvas");
  canvasContext = canvas.getContext("2d");
  mainLoop();
}

document.addEventListener("DOMContentLoaded", start);

function update() {}

function draw() {
  //Drawing the house
  canvasContext.strokeStyle = "black";
  canvasContext.strokeRect(495, 180, 250, 220);

  //Drawing the door
  canvasContext.strokeRect(640, 300, 60, 100);

  //Drawing the windows
  canvasContext.strokeRect(540, 220, 50, 50);
  canvasContext.strokeRect(550, 220, 50, 50);
  canvasContext.strokeRect(650, 220, 50, 50);
  canvasContext.strokeRect(640, 220, 50, 50);

  //Drawing the doorknob
  const circle = new Path2D();
  circle.arc(652, 350, 5, 0, 2 * Math.PI);
  canvasContext.fillStyle = "black";
  canvasContext.fill(circle);

  //Draw the fence
  canvasContext.beginPath();
  for (var x = 2; x <= canvas.width - 256; x += 7) {
    canvasContext.moveTo(x, 350);
    canvasContext.lineTo(x, canvas.height - 200);
  }
  canvasContext.stroke();

  //Draw the roof
  canvasContext.moveTo(495, 180);
  canvasContext.lineTo(620, 100);
  canvasContext.lineTo(746, 180);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();

  //Drawing the sun
  const sun = new Path2D();
  sun.arc(100, 150, 50, 0, 2 * Math.PI);
  canvasContext.fillStyle = "yellow";
  canvasContext.fill(sun);

  //Drawing clouds

  //Write the text
  canvasContext.font = "30px Garamond";
  canvasContext.fillStyle = "#41980A";
  canvasContext.fillText("What a beautiful day!", 20, 50);
}

function mainLoop() {
  //Setting part of canvas to be blue for the sky, and bottom part as green for the grass
  canvasContext.fillStyle = "#87CEEB";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height - 200);

  canvasContext.fillStyle = "#41980A";
  canvasContext.fillRect(0, canvas.height - 200, canvas.width, canvas.height);

  update();
  draw();
  window.setTimeout(mainLoop, 1000 / 60);
  // ^ call the function mainLoop every (1,000/60 = 16.6 milliseconds in this case)
}
