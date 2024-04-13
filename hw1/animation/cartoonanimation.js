"use strict";

var canvas = undefined;
var canvasContext = undefined;
var cloudSprite = {
  img0: "./cloudSprites/tile000.png",
  img1: "./cloudSprites/tile001.png",
  img2: "./cloudSprites/tile002.png",
  img3: "./cloudSprites/tile003.png",
  img4: "./cloudSprites/tile004.png",
  img5: "./cloudSprites/tile005.png",
  img6: "./cloudSprites/tile006.png",
  img7: "./cloudSprites/tile007.png",
  img8: "./cloudSprites/tile008.png",
};
var grassSprite = {
  gif0: "./grass-gif-sprite/frame_00_delay-0.08s.png",
  gif1: "./grass-gif-sprite/frame_01_delay-0.08s.png",
  gif2: "./grass-gif-sprite/frame_02_delay-0.08s.png",
  gif3: "./grass-gif-sprite/frame_03_delay-0.08s.png",
  gif4: "./grass-gif-sprite/frame_04_delay-0.08s.png",
  gif5: "./grass-gif-sprite/frame_05_delay-0.08s.png",
  gif6: "./grass-gif-sprite/frame_06_delay-0.08s.png",
  gif7: "./grass-gif-sprite/frame_07_delay-0.08s.png",
  gif8: "./grass-gif-sprite/frame_08_delay-0.08s.png",
  gif9: "./grass-gif-sprite/frame_09_delay-0.08s.png",
  gif10: "./grass-gif-sprite/frame_10_delay-0.08s.png",
  gif11: "./grass-gif-sprite/frame_11_delay-0.08s.png",
  gif12: "./grass-gif-sprite/frame_12_delay-0.08s.png",
  gif13: "./grass-gif-sprite/frame_13_delay-0.08s.png",
  gif14: "./grass-gif-sprite/frame_14_delay-0.08s.png",
  gif15: "./grass-gif-sprite/frame_15_delay-0.08s.png",
  gif16: "./grass-gif-sprite/frame_16_delay-0.08s.png",
  gif17: "./grass-gif-sprite/frame_17_delay-0.08s.png",
  gif18: "./grass-gif-sprite/frame_18_delay-0.08s.png",
  gif19: "./grass-gif-sprite/frame_19_delay-0.08s.png",
  gif20: "./grass-gif-sprite/frame_20_delay-0.08s.png",
  gif21: "./grass-gif-sprite/frame_21_delay-0.08s.png",
  gif22: "./grass-gif-sprite/frame_22_delay-0.08s.png",
  gif23: "./grass-gif-sprite/frame_23_delay-0.08s.png",
  gif24: "./grass-gif-sprite/frame_24_delay-0.08s.png",
  gif25: "./grass-gif-sprite/frame_25_delay-0.08s.png",
  gif26: "./grass-gif-sprite/frame_26_delay-0.08s.png",
  gif27: "./grass-gif-sprite/frame_27_delay-0.08s.png",
  gif28: "./grass-gif-sprite/frame_28_delay-0.08s.png",
  gif29: "./grass-gif-sprite/frame_29_delay-0.08s.png",
  gif30: "./grass-gif-sprite/frame_30_delay-0.08s.png",
  gif31: "./grass-gif-sprite/frame_31_delay-0.08s.png",
  gif32: "./grass-gif-sprite/frame_32_delay-0.08s.png",
  gif33: "./grass-gif-sprite/frame_33_delay-0.08s.png",
  gif34: "./grass-gif-sprite/frame_34_delay-0.08s.png",
  gif35: "./grass-gif-sprite/frame_35_delay-0.08s.png",
  gif36: "./grass-gif-sprite/frame_36_delay-0.08s.png",
  gif37: "./grass-gif-sprite/frame_37_delay-0.08s.png",
  gif38: "./grass-gif-sprite/frame_38_delay-0.08s.png",
};
var sunSprite = {
  sun0: "./sun-gif-sprite/frame_0_delay-0.25s.png",
  sun1: "./sun-gif-sprite/frame_1_delay-0.25s.png",
  sun2: "./sun-gif-sprite/frame_2_delay-0.25s.png",
  sun3: "./sun-gif-sprite/frame_3_delay-0.25s.png",
  sun4: "./sun-gif-sprite/frame_4_delay-0.25s.png",
};
var currentCloudSpriteIndex = 0;
var cloudSpriteImages = [];
var currentGrassSpriteIndex = 0;
var grassSpriteImages = [];
var currentSunSpriteIndex = 0;
var sunSpriteImages = [];

function loadSprites() {
  for (var index in cloudSprite) {
    var img = new Image();
    img.src = cloudSprite[index];
    cloudSpriteImages.push(img);
  }
  for (var index in grassSprite) {
    var img = new Image();
    img.src = grassSprite[index];
    grassSpriteImages.push(img);
  }
  for (var index in sunSprite) {
    var img = new Image();
    img.src = sunSprite[index];
    sunSpriteImages.push(img);
  }
}

function start() {
  canvas = document.getElementById("mycanvas");
  canvasContext = canvas.getContext("2d");
  loadSprites();
  mainLoop();
}

document.addEventListener("DOMContentLoaded", start);

function update() {
  // Update sprite index
  currentCloudSpriteIndex =
    (currentCloudSpriteIndex + 1) % cloudSpriteImages.length;
  currentGrassSpriteIndex =
    (currentGrassSpriteIndex + 1) % grassSpriteImages.length;
  currentSunSpriteIndex = (currentSunSpriteIndex + 1) % sunSpriteImages.length;
}

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

  //Drawing the sun sprite
  canvasContext.drawImage(
    sunSpriteImages[currentSunSpriteIndex],
    20,
    80,
    170,
    170
  );

  //Drawing clouds sprite
  canvasContext.drawImage(
    cloudSpriteImages[currentCloudSpriteIndex],
    200,
    200,
    60,
    50
  );
  canvasContext.drawImage(
    cloudSpriteImages[currentCloudSpriteIndex],
    270,
    220,
    105,
    100
  );
  canvasContext.drawImage(
    cloudSpriteImages[currentCloudSpriteIndex],
    350,
    130,
    95,
    80
  );

  //Draw grass sprite
  canvasContext.drawImage(
    grassSpriteImages[currentGrassSpriteIndex],
    -200,
    310,
    700,
    310
  );
  canvasContext.drawImage(
    grassSpriteImages[currentGrassSpriteIndex],
    190,
    310,
    700,
    310
  );

  //Write the text
  canvasContext.font = "30px Garamond";
  canvasContext.fillStyle = "#41980A";
  canvasContext.fillText("What a beautiful day!", 20, 50);
}

function mainLoop() {
  //Setting part of canvas to be blue for the sky, and bottom part as green for the grass
  canvasContext.fillStyle = "#02C9EB";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height - 200);

  canvasContext.fillStyle = "#41980A";
  canvasContext.fillRect(0, canvas.height - 200, canvas.width, canvas.height);

  update();
  draw();
  window.setTimeout(mainLoop, 1000 / 3);
  // ^ call the function mainLoop every (1,000/60 = 16.6 milliseconds in this case)
}
